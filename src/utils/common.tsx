import { SpellEnum } from "../typings/spell.d";
import { AttributeEnum } from "../typings/attribute.d"
import { ClassEnum } from "../typings/class.d";
import { SkillEnum } from "../typings/skill.d";
import { FeatEnum } from "../typings/feat.d";

export const GetNumberString = (num: number):string => (num >= 0 ? '+' : '') + num.toString();

const GetAttributeName = (attr: AttributeEnum):string => {
    switch (attr) {
        case AttributeEnum.Str:
            return 'Strength';
        case AttributeEnum.Dex:
            return 'Dexterity';
        case AttributeEnum.Con:
            return 'Constitution';
        case AttributeEnum.Int:
            return 'Intelligence';
        case AttributeEnum.Wis:
            return 'Wisdom';
        case AttributeEnum.Cha:
            return 'Charisma';
        default: return '';
    }
}

const GetSkillAttribute = (skill: SkillEnum): AttributeEnum => {
    switch (skill) {
        case SkillEnum.Athletics:
            return AttributeEnum.Str;
        case SkillEnum.Acrobatics:
        case SkillEnum.SleightOfHand:
        case SkillEnum.Stealth:
            return AttributeEnum.Dex;
        case SkillEnum.Arcana:
        case SkillEnum.History:
        case SkillEnum.Investigation:
        case SkillEnum.Nature:
        case SkillEnum.Religion:
            return AttributeEnum.Int;
        case SkillEnum.AnimalHandling:
        case SkillEnum.Insight:
        case SkillEnum.Medicine:
        case SkillEnum.Perception:
        case SkillEnum.Survival:
            return AttributeEnum.Wis;
        case SkillEnum.Deception:
        case SkillEnum.Intimidation:
        case SkillEnum.Performance:
        case SkillEnum.Persuasion:
            return AttributeEnum.Cha;
        default : throw new Error('Invalid skill');
    }
}

export const GetSkillName = (skill: SkillEnum): string => {
    switch (skill) {
        case SkillEnum.AnimalHandling:
            return 'Animal Handling';
        case SkillEnum.SleightOfHand:
            return 'Sleight of Hand';
        default : return SkillEnum[skill];
    }
}

const GetFeatName = (feat: FeatEnum): string => {
    switch (feat) {
        case FeatEnum.GreatWeaponMaster:
            return "Great Weapon Master";
        case FeatEnum.ElvenAccuracy:
            return "Elven Accuracy";
        default: return "";
    }
}

const GetFeatDescription = (feat: FeatEnum): string => {
    switch (feat) {
        case FeatEnum.GreatWeaponMaster:
            return "You've learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits:"
                + "<br/>- On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action."
                + "<br/>- Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.";
        case FeatEnum.ElvenAccuracy:
            return "The accuracy of elves is legendary, especially that of elf archers and spellcasters. You have uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:"
                + "<br/>- Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20"
                + "<br/>- Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once.";
        default: return "";
    }
}

const GetClassHitDie = (classEnum: ClassEnum) => {
    switch (classEnum) {
        case ClassEnum.Paladin: return 10;
        case ClassEnum.Warlock: return 8;
    }
}

const GetClassSavingThrows = (classEnum: ClassEnum):AttributeEnum[] => {
    switch (classEnum) {
        case ClassEnum.Paladin:
        case ClassEnum.Warlock: return [ AttributeEnum.Cha, AttributeEnum.Wis ];
        default: return [];
    }
}

const GetProfBonus = (level: number) => {
    switch (true) {
        case level <= 4: return 2;
        case level <= 8: return 3;
        case level <= 12: return 4;
        case level <= 16: return 5;
        default: return 6;
    }
}

export const GetSpellEnumArray = (): SpellEnum[] => Object.values(SpellEnum).filter(x => typeof x === 'number').map(x => x as SpellEnum);
export const GetSkillEnumArray = (): SkillEnum[] => Object.values(SkillEnum).filter(x => typeof x === 'number').map(x => x as SkillEnum);
export const GetAttributeEnumArray = (): AttributeEnum[] => Object.values(AttributeEnum).filter(x => typeof x === 'number').map(x => x as AttributeEnum);
export const GetClassEnumArray = (): ClassEnum[] => Object.values(ClassEnum).filter(x => typeof x === 'number').map(x => x as ClassEnum);

export { 
    GetAttributeName,
    GetSkillAttribute,
    GetFeatName,
    GetClassSavingThrows,
    GetFeatDescription,
    GetClassHitDie,
    GetProfBonus,
}