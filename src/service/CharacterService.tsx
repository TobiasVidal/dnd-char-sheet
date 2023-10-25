import { GetSkillEnumArray, GetSkillAbility } from "../utils/common";
import { Character, CharacterDefault, CharacterClass, CharacterRace, CharacterFeat, CharacterFeatDefault, CharacterSkill, CharacterFeature, CharacterSpell, CharacterAttack, CharacterSpellcastingDefault, CharacterPersonality } from "../typings/character.d";
import { AbilityScore, AbilityScoreDefault, AbilityScoreEnum } from "../typings/abilityScore.d";
import { ClassDefault, ClassEnum, SubclassEnum } from "../typings/class.d";
import { SavingThrow } from "../typings/savingThrow.d";
import { Spell, SpellEnum } from "../typings/spell.d";
import { DamageType, Money } from "../typings/common.d";
import { SkillEnum } from "../typings/skill.d";
import { FeatEnum } from "../typings/feat.d";
import { GetClass, GetCharacterClassSpellSlots, GetClassSavingThrows } from "../service/ClassService"
import { GetCharacterEquipment } from "./CharacterEquipmentService";
import { GetAllSpells } from "./SpellService";
import { GetCharacterBackground } from "./CharacterBackgroundService";
import { AddMoney, GetAllMoneyLogs } from "./MoneyService";

export const GetCharacter = (): Character => {
    const character = {
        ...CharacterDefault,
        name: 'Asura',
        abilityScores: GetCharacterStartingAbilityScores(),
        features: GetCharacterFeatures(),
        classes: GetCharacterClasses(),
        background: GetCharacterBackground(),
        feats: GetCharacterFeats(),
        equipment: GetCharacterEquipment(),
        race: GetCharacterRace(),
        personality: GetCharacterPersonality(),   
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

const GetCharacterStartingAbilityScores = (): AbilityScore[] => [
    { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Str, value: 13 },
    { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Dex, value: 8 },
    { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Con, value: 14 },
    { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Int, value: 10 },
    { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Wis, value: 12 },
    { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Cha, value: 17 },
];

const UpdateCharacterAbilityScores = (character: Character): void => {
    for (let i = 0; i < character.abilityScores.length; i++) {
        const abilityScore = character.abilityScores[i];
        abilityScore.value += character.race.abilityScores.reduce((sum, attr) => sum + (attr.abilityScoreEnum === abilityScore.abilityScoreEnum ? attr.value : 0), 0);
        character.feats.forEach(feat => {
            abilityScore.value += feat.abilityScores.reduce((sum, attr) => sum + (attr.abilityScoreEnum === abilityScore.abilityScoreEnum ? attr.value : 0), 0);
        });
    }
}

const GetCharacterClasses = (): CharacterClass[] => [
    {
        ...ClassDefault,
        class: GetClass(ClassEnum.Paladin),
        subclass: SubclassEnum.OathOfVengance,
        level: 5,
        skillProficiencies: [SkillEnum.Athletics, SkillEnum.Persuasion],
        startingClass: true,
    },
    {
        ...ClassDefault,
        class: GetClass(ClassEnum.Warlock),
        subclass: SubclassEnum.Hexblade,
        level: 4,
        skillProficiencies: [],
        startingClass: false,
    },
];

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

const GetCharacterFeats = (): CharacterFeat[] => [
    { ...CharacterFeatDefault, feat: FeatEnum.ElvenAccuracy, abilityScores: [{ ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Cha, value: 1 }] },
    { ...CharacterFeatDefault, feat: FeatEnum.GreatWeaponMaster },
];

const SetSavingThrows = (character: Character) => {
    let savingThrows: SavingThrow[] = [];
    const firstLevelClass: ClassEnum = character.classes.filter(x => x.startingClass)[0].class.classEnum;
    for (let i = 0; i < character.abilityScores.length; i++) {
        const attribute = character.abilityScores[i];
        const hasProficiency = GetClassSavingThrows(firstLevelClass).includes(attribute.abilityScoreEnum);
        const savingThrow: SavingThrow = {
            ability: attribute.abilityScoreEnum,
            hasProficiency,
            value: attribute.modifier() + (hasProficiency ? character.profBonus() : 0)
        };
        character.equipment.map(x => x.equipment).filter(x => x.savingThrows).forEach(x => {
            savingThrow.value += x.savingThrows?.find(y => y.ability === savingThrow.ability)?.value ?? 0
        });
        savingThrows.push(savingThrow);
    }
    character.savingThrows = savingThrows;
}

const SetSkills = (character: Character) => {
    character.skills = [];
    
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
        character.equipment.filter(x => x.equipment.skills).forEach(x => {
            charSkill.value += x.equipment.skills?.find(y => y.skill === charSkill.skill)?.value ?? 0
        });
        character.skills.push(charSkill);
    }
}

const HasProficiencyInSkill = (character: Character, skill: SkillEnum): boolean => {
    return character.classes.some(x => x.skillProficiencies.includes(skill))
        || character.background.skillProficiencies.includes(skill);
}

const SetAC = (character: Character) => {
    character.armorClass = character.equipment.find(x => x.isEquipped && x.equipment.grantsBaseAC)?.equipment.grantsBaseAC ?? 10;
    character.armorClass += character.equipment.filter(x => x.isEquipped && x.equipment.grantsACBonus).reduce((currentArmorBonus, equipment) => currentArmorBonus + (equipment.equipment.grantsACBonus ?? 0), 0);
}

const SetSpellcasting = (character: Character) => {
    const spellcastingAbility = character.classes.find(x => x.class.spellcastingAbility())?.class.spellcastingAbility();
    if (!spellcastingAbility) { return; }
    const abilityModifier = character.abilityScores.find(x => x.abilityScoreEnum === spellcastingAbility)?.modifier() ?? 0;
    character.spellcasting = {
        spells: GetCharacterSpells(),
        slots: [],
        saveDc: 8 + character.profBonus() + abilityModifier,
        attackModifier: character.profBonus() + abilityModifier,
    }
    SetSpellSlots(character);
}

const SetSpellSlots = (character: Character) => {
    const warlockClass = character.classes.find(x => x.class.classEnum === ClassEnum.Warlock);
    const casterClasses = character.classes.filter(x => x.class.classEnum !== ClassEnum.Warlock && GetCharacterClassSpellSlots(x));
    if (casterClasses.length > 1) { /* quilombo */}
    let result = GetCharacterClassSpellSlots(casterClasses[0]);
    if (warlockClass) {
        const warlockSpellSlot = GetCharacterClassSpellSlots(warlockClass)[0];
        result = result.map(x => x.level === warlockSpellSlot.level ? 
            {level: x.level, amount: x.amount + warlockSpellSlot.amount } 
            : x
        )
    }
    if (!character.spellcasting) { character.spellcasting = { ...CharacterSpellcastingDefault }; }
    character.spellcasting.slots = result;
}

const SetInitiative = (character: Character) => {
    character.initiative = character.abilityScores.find(x => x.abilityScoreEnum === AbilityScoreEnum.Dex)?.modifier() ?? 0;
}

const SetSpeed = (character: Character) => {
    character.speed = character.race.speed;
}

const SetHealthMax = (character: Character) => {
    const conModifier = character.abilityScores.find(x => x.abilityScoreEnum === AbilityScoreEnum.Con)?.modifier() ?? 0;
    character.healthMax = character.level() * conModifier;
    character.classes?.forEach(x => {
        character.healthMax += x.level * x.class.averageLevelupHealth();
        if (x.startingClass) {
            character.healthMax += x.class.hitDie() - x.class.averageLevelupHealth();
        }
    });
}

const SetAttacks = (character: Character) => {
    const attacks: CharacterAttack[] = [];
    character.equipment.map(x => x.equipment).forEach(x => {
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

    character.attacks = attacks;
}

const GetCharacterFeatures = (): CharacterFeature[] => {
    return [
        {
            name: 'Divine Sense',
            description: `The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.
<br/><br/>You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.`,
            origin: 'Paladin [1]',
            url: 'http://dnd5e.wikidot.com/paladin#toc4',
        },
        {
            name: 'Lay on Hands',
            description: `Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.
            <br/><br/>
            As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.
            <br/><br/>
            Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.
            <br/><br/>
            This feature has no effect on undead and constructs.`,
            origin: 'Paladin [1]',
            url: 'http://dnd5e.wikidot.com/paladin#toc5',
        },
        {
            name: 'Spellcasting',
            description: `You have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.
            <br/><br/>
            You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.
            <br/><br/>
            You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.
            <br/><br/>
            <strong>Spell save DC</strong> = 8 + your proficiency bonus + your Charisma modifier
            <br/>
            <strong>Spell attack modifier</strong> = your proficiency bonus + your Charisma modifier
            <br/><br/>
            You can use a holy symbol as a spellcasting focus for your paladin spells.`,
            origin: 'Paladin [2]',
            url: 'http://dnd5e.wikidot.com/paladin#toc7',
        },
        {
            name: 'Divine Smite',
            description: `Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.`,
            origin: 'Paladin [2]',
            url: 'http://dnd5e.wikidot.com/paladin#toc11',
        },
        {
            name: 'Divine Health',
            description: `The divine magic flowing through you makes you immune to disease`,
            origin: 'Paladin [3]',
            url: 'http://dnd5e.wikidot.com/paladin#toc12',
        },
        {
            name: 'Sacred Oath',
            description: `<h4>Oath Spells</h4>
            Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day.
            <br/><br/>
            If you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you.
            <br/><br/>
            <h4>Channel Divinity</h4>
            Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.
            <br/><br/>
            When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.
            <br/><br/>
            Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC.`,
            origin: 'Paladin [3]',
            url: 'http://dnd5e.wikidot.com/paladin#toc13',
        },
        {
            name: 'Channel Divinity',
            description: `<p>you gain the following two Channel Divinity options.</p>
            <p><strong>Abjure Enemy.</strong> As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.</p>
            <p>On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature's speed is 0, and it can't benefit from any bonus to its speed.</p>
            <p>On a successful save, the creature's speed is halved for 1 minute or until the creature takes any damage.</p>
            <p><strong>Vow of Enmity.</strong> As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.</p>
        `,
            origin: 'Paladin [3] - Oath of Vengance',
            url: 'http://dnd5e.wikidot.com/paladin:vengeance#toc2',
        },
        {
            name: 'Extra Attack',
            description: `You can attack twice, instead of once, whenever you take the Attack action on your turn`,
            origin: 'Paladin [5]',
            url: 'http://dnd5e.wikidot.com/paladin#toc19',
        },
        {
            name: 'Hexblade\'s Curse',
            description: `<p>Starting at 1st level, you gain the ability to place a baleful curse on someone. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. The curse ends early if the target dies, you die, or you are incapacitated. Until the curse ends, you gain the following benefits:</p>
            <ul>
            <li>You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus.</li>
            <li>Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the d20.</li>
            <li>If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier (minimum of 1 hit point).</li>
            </ul>
            <p>You can't use this feature again until you finish a short or long rest.`,
            origin: 'Warlock [1]',
            url: 'http://dnd5e.wikidot.com/warlock:hexblade#toc1',
        },
        {
            name: 'Hex Warrior',
            description: `<p>At 1st level, you acquire the training necessary to effectively arm yourself for battle. You gain proficiency with medium armor, shields, and martial weapons.</p>
            <p>The influence of your patron also allows you to mystically channel your will through a particular weapon. Whenever you finish a long rest, you can touch one weapon that you are proficient with and that lacks the two-handed property. When you attack with that weapon, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls. This benefit lasts until you finish a long rest. If you later gain the Pact of the Blade feature, this benefit extends to every pact weapon you conjure with that feature, no matter the weapon's type.</p>`,
            origin: 'Warlock [1]',
            url: 'http://dnd5e.wikidot.com/warlock:hexblade#toc2',
        },
        {
            name: 'Pact Magic',
            description: `<p>Your arcane research and the magic bestowed on you by your patron have given you facility with spells.<p>
            <h5>Cantrips</h5>
            <p>You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.</p>
            <h5>Spell Slots</h5>
            <p>The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.</p>
            <p>For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.</p>
            <h5>Spells Known of 1st Level and Higher</h5>
            <p>At 1st level, you know two 1st-level spells of your choice from the warlock spell list.</p>
            <p>The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level or higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.</p>
            <p>Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.</p>
            <h5>Spellcasting Ability</h5>
            <p>Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.</p>
            <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Charisma modifier</p>
            <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Charisma modifier</p>
            <h5>Spellcasting Focus</h5>
            <p>You can use an arcane focus as a spellcasting focus for your warlock spells.`,
            origin: 'Warlock [1]',
            url: 'http://dnd5e.wikidot.com/warlock#toc5',
        },
        {
            name: 'Eldritch Invocations',
            description: `<strong>Agonizing Blast</strong>
            <p>When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit.</p>
            <strong>Eldritch Mind</strong>
            <p>You have advantage on Constitution saving throws that you make to maintain your concentration on a spell.</p>`,
            origin: 'Warlock [2]',
            url: 'http://dnd5e.wikidot.com/warlock#toc11',
        },
        {
            name: 'Pact Boon',
            description: `<strong>Pact of the Blade</strong>
    <p>You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.</p>
    <p>Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.</p>
    <p>You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest.</p>
    <p>You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.</p>
`,
            origin: 'Warlock [3]',
            url: 'http://dnd5e.wikidot.com/warlock#toc12',
        },
        ...GetCharacterFeats().map(x => ({
            name: x.name(),
            description: x.description(),
            origin: '',
            url: '',
        }))
    ]
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

const GetCharacterPersonality = (): CharacterPersonality => ({
    traits: [
        "I'm confident in my own abilities and do what I can to instill confidence in others.",
        "I judge people by their actions, not their words."
    ],
    ideals: [
        "Independence. When people follow orders blindly they embrace a kind of tyranny."
    ],
    flaws: [
        "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me."
    ],
    bonds: [
        "A powerful person killed someone I love. Some day soon, I'll have my revenge."
    ],
    age: 22,
    eyes: "gold",
    hair: "silvery white",
    height: "1.84mts",
    weight: "81kg",
    skin: "reddish grey",
})

const GetCharacterMoney = (): Money => {
    const moneyLogs = GetAllMoneyLogs();
    let characterMoney:Money = { gp: 0, sp: 0, cp: 0 };
    moneyLogs.forEach(x => characterMoney = AddMoney(characterMoney, x));
    return characterMoney;
}