import { GetSkillEnumArray, GetSkillAbility} from "../utils/common";
import { Character, CharacterDefault, CharacterRace, CharacterSkill, CharacterSpell, CharacterAttack, CharacterSpellcastingDefault, CharacterPersonality } from "../typings/character.d";
import { AbilityScoreDefault, AbilityScoreEnum, ModifierTargetEnum } from "../typings/abilityScore.d";
import { ClassEnum } from "../typings/class.d";
import { SavingThrow } from "../typings/savingThrow.d";
import { Spell, SpellEnum } from "../typings/spell.d";
import { DamageType, Money } from "../typings/common.d";
import { SkillEnum } from "../typings/skill.d";
import { GetCharacterClassSpellSlots, GetClassSavingThrows } from "../service/ClassService"
import { GetCharacterEquipment } from "./CharacterEquipmentService";
import { GetAllSpells } from "./SpellService";
import { GetCharacterBackground } from "./CharacterBackgroundService";
import { AddMoney, GetAllMoneyLogs } from "./MoneyService";
import { GetModifierAmount } from "./StatModifierService";
import { GetCharacterAbilityScores } from "./CharacterAbilityScoreService";
import { GetCharacterFeats } from "./CharacterFeatService";
import { GetCharacterFeatures } from "./CharacterFeatureService";
import { GetCharacterClasses } from "./CharacterClassService";
import { GetCharacterPersonality } from "./CharacterPersonality";

export const GetCharacter = (characterId: number): Character => {
    const character = {
        ...CharacterDefault,
        name: 'Asura',
        abilityScores: GetCharacterAbilityScores(characterId),
        charFeatures: GetCharacterFeatures(characterId),
        charClasses: GetCharacterClasses(characterId),
        background: GetCharacterBackground(),
        charFeats: GetCharacterFeats(characterId),
        charEquipment: GetCharacterEquipment(characterId),
        charRace: GetCharacterRace(),
        charPersonality: GetCharacterPersonality(characterId),   
        money: GetCharacterMoney(),
    }
    UpdateCharacterAbilityScores(character);
    SetSavingThrows(character);
    SetSpellcasting(character);
    SetInitiative(character);
    SetHealthMax(character);
    SetAttacks(character);
    SetSkills(character);
    SetSpeed(character);
    SetAC(character);

    return character;
}

const UpdateCharacterAbilityScores = (character: Character): void => {
    for (let i = 0; i < character.abilityScores.length; i++) {
        const abilityScore = character.abilityScores[i];
        abilityScore.value += character.charRace.abilityScores.reduce((sum, attr) => sum + (attr.abilityScoreEnum === abilityScore.abilityScoreEnum ? attr.value : 0), 0);
        character.charFeats.forEach(feat => {
            abilityScore.value += feat.abilityScores.reduce((sum, attr) => sum + (attr.abilityScoreEnum === abilityScore.abilityScoreEnum ? attr.value : 0), 0);
        });
    }
}

const GetCharacterRace = (): CharacterRace => {
    return {
        displayName: "Tiefling/Elf",
        subtitle: "(custom lineage)",
        speed: 30,
        abilityScores: [{ ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Cha, value: 2 }],
        languages: ["Common", "Elven"],
        traits: ["Darkvision 60ft"],
        size: "Medium",
    }
}

const SetSavingThrows = (character: Character) => {
    let savingThrows: SavingThrow[] = [];
    const firstLevelClass: ClassEnum = character.charClasses.filter(x => x.startingClass)[0].class.classEnum;
    const proficiencies: AbilityScoreEnum[] = GetClassSavingThrows(firstLevelClass);
    for (let i = 0; i < character.abilityScores.length; i++) {
        const abilityScore = character.abilityScores[i];
        const hasProficiency = proficiencies.includes(abilityScore.abilityScoreEnum);
        
        const savingThrow: SavingThrow = {
            ability: abilityScore.abilityScoreEnum,
            hasProficiency,
            value: abilityScore.modifier() + (hasProficiency ? character.profBonus() : 0)
        };
        
        character.charEquipment.map(x => x.equipment).filter(x => x.savingThrows).forEach(x => {
            savingThrow.value += x.savingThrows?.find(y => y.ability === savingThrow.ability)?.value ?? 0
        });

        character.charFeatures.flatMap(x => x.modifiers)
            .filter(modifier => modifier.target === ModifierTargetEnum.SavingThrow && modifier.abilityTarget === savingThrow.ability)
            .forEach(modifier => {
                savingThrow.value += GetModifierAmount(modifier, character);
        });
        
        savingThrows.push(savingThrow);
    }
    character.savingThrows = savingThrows;
}

const SetSkills = (character: Character) => {
    character.charSkills = [];
    
    const skillList: SkillEnum[] = GetSkillEnumArray();
    
    for (const skill of skillList) {
        const hasProficiency = HasProficiencyInSkill(character, skill);
        const attrModifier = character.abilityScores.find(x => x.abilityScoreEnum === GetSkillAbility(skill))?.modifier() ?? 0;
        const charSkill: CharacterSkill = {
            skill,
            hasProficiency,
            value: attrModifier,
        }
        if (hasProficiency) { charSkill.value += character.profBonus(); }
        character.charEquipment.filter(x => x.equipment.skills).forEach(x => {
            charSkill.value += x.equipment.skills?.find(y => y.skill === charSkill.skill)?.value ?? 0
        });
        character.charSkills.push(charSkill);
    }
}

const HasProficiencyInSkill = (character: Character, skill: SkillEnum): boolean => {
    return character.charClasses.some(x => x.skillProficiencies.includes(skill))
        || character.background.skillProficiencies.includes(skill);
}

const SetAC = (character: Character) => {
    character.armorClass = character.charEquipment.find(x => x.isEquipped && x.equipment.grantsBaseAC)?.equipment.grantsBaseAC ?? 10;
    character.armorClass += character.charEquipment.filter(x => x.isEquipped && x.equipment.grantsACBonus).reduce((currentArmorBonus, equipment) => currentArmorBonus + (equipment.equipment.grantsACBonus ?? 0), 0);
}

const SetSpellcasting = (character: Character) => {
    const spellcastingAbility = character.charClasses.find(x => x.class.spellcastingAbility())?.class.spellcastingAbility();
    if (!spellcastingAbility) { return; }
    const abilityModifier = character.abilityScores.find(x => x.abilityScoreEnum === spellcastingAbility)?.modifier() ?? 0;
    character.charSpellcasting = {
        spells: GetCharacterSpells(),
        slots: [],
        saveDc: 8 + character.profBonus() + abilityModifier,
        attackModifier: character.profBonus() + abilityModifier,
    }
    SetSpellSlots(character);
}

const SetSpellSlots = (character: Character) => {
    const warlockClass = character.charClasses.find(x => x.class.classEnum === ClassEnum.Warlock);
    const casterClasses = character.charClasses.filter(x => x.class.classEnum !== ClassEnum.Warlock && GetCharacterClassSpellSlots(x));
    if (casterClasses.length > 1) { /* quilombo */}
    let result = GetCharacterClassSpellSlots(casterClasses[0]);
    if (warlockClass) {
        const warlockSpellSlot = GetCharacterClassSpellSlots(warlockClass)[0];
        result = result.map(x => x.level === warlockSpellSlot.level ? 
            {level: x.level, amount: x.amount + warlockSpellSlot.amount } 
            : x
        )
    }
    if (!character.charSpellcasting) { character.charSpellcasting = { ...CharacterSpellcastingDefault }; }
    character.charSpellcasting.slots = result;
}

const SetInitiative = (character: Character) => {
    character.initiative = character.abilityScores.find(x => x.abilityScoreEnum === AbilityScoreEnum.Dex)?.modifier() ?? 0;
}

const SetSpeed = (character: Character) => {
    character.speed = character.charRace.speed;
}

const SetHealthMax = (character: Character) => {
    const conModifier = character.abilityScores.find(x => x.abilityScoreEnum === AbilityScoreEnum.Con)?.modifier() ?? 0;
    character.healthMax = character.level() * conModifier;
    character.charClasses?.forEach(x => {
        character.healthMax += x.level * x.class.averageLevelupHealth();
        if (x.startingClass) {
            character.healthMax += x.class.hitDie() - x.class.averageLevelupHealth();
        }
    });
}

const SetAttacks = (character: Character) => {
    const attacks: CharacterAttack[] = [];
    character.charEquipment.map(x => x.equipment).forEach(x => {
        if (!x.damage) { return; }
        const attributeModifier = character.abilityScores.find(y => y.abilityScoreEnum === x.damage?.ability)?.modifier() ?? 0;
        attacks.push({
            name: x.name ?? '',
            range: x.range,
            damage: x.damage?.dice.map(dice => `${dice.dieCount}d${dice.dieSides}`).join('+') + '+' + attributeModifier,
            attackBonus: character.profBonus() + attributeModifier,
            damageType: DamageType[x.damage.dice[0].type],
        });
    });

    character.charAttacks = attacks;
}

const GetCharacterSpells = (): CharacterSpell[] => {
    const allSpells = GetAllSpells();
    const warlockSpells = [
        { spell: SpellEnum.EldritchBlast, origin: 'Warlock' },
        { spell: SpellEnum.Prestidigitation, origin: 'Warlock' },
        { spell: SpellEnum.MinorIllusion, origin: 'Warlock' },
        { spell: SpellEnum.Suggestion, origin: 'Warlock' },
        { spell: SpellEnum.Invisibility, origin: 'Warlock' },
        { spell: SpellEnum.Darkness, origin: 'Warlock' },
        { spell: SpellEnum.Shield, origin: 'Warlock - Hexblade' },
        { spell: SpellEnum.Blur, origin: 'Warlock - Hexblade' },
    ];
    const paladinExtraSpells = [
        { spell: SpellEnum.Bane, origin: 'Paladin - Oath of Vengance' },
        { spell: SpellEnum.HuntersMark, origin: 'Paladin - Oath of Vengance' },
        { spell: SpellEnum.HoldPerson, origin: 'Paladin - Oath of Vengance' },
        { spell: SpellEnum.MistyStep, origin: 'Paladin - Oath of Vengance' },
    ];
    const paladinPreparedSpells = [
        SpellEnum.Bless,
        SpellEnum.Command,
        SpellEnum.CureWounds,
        SpellEnum.DetectMagic,
        SpellEnum.ShieldOfFaith,
        SpellEnum.ThunderousSmite,
    ];
    return [
        ...warlockSpells.map(x => ({
            spell: allSpells.find(y => y.spellEnum === x.spell) as Spell,
            prepared: true,
            origin: x.origin,
        })),
        ...paladinExtraSpells.map(x => ({
            spell: allSpells.find(y => y.spellEnum === x.spell) as Spell,
            prepared: true,
            origin: x.origin,
        })),
        ...paladinPreparedSpells.map(x => ({
            spell: allSpells.find(y => y.spellEnum === x) as Spell,
            prepared: true,
            origin: "Paladin"
        })),
        ...allSpells.filter(x => x.classes?.includes(ClassEnum.Paladin) ?? false).map(x =>({
            spell: x,
            prepared: false,
            origin: "Paladin"
        })),
    ];
};

const GetCharacterMoney = (): Money => {
    const moneyLogs = GetAllMoneyLogs();
    let characterMoney:Money = { gp: 0, sp: 0, cp: 0 };
    moneyLogs.forEach(x => characterMoney = AddMoney(characterMoney, x));
    return characterMoney;
}