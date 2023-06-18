import { AbilityScoreEnum } from "../typings/abilityScore.d"
import { SpellEnum } from "../typings/spell.d";
import { ClassEnum } from "../typings/class.d";
import { SkillEnum } from "../typings/skill.d";
import { FeatEnum } from "../typings/feat.d";

export const GetNumberString = (num: number):string => (num >= 0 ? '+' : '') + num.toString();

export const GetAbilityScoreName = (attr: AbilityScoreEnum):string => {
    switch (attr) {
        case AbilityScoreEnum.Str:
            return 'Strength';
        case AbilityScoreEnum.Dex:
            return 'Dexterity';
        case AbilityScoreEnum.Con:
            return 'Constitution';
        case AbilityScoreEnum.Int:
            return 'Intelligence';
        case AbilityScoreEnum.Wis:
            return 'Wisdom';
        case AbilityScoreEnum.Cha:
            return 'Charisma';
        default: return '';
    }
}

export const GetSkillAbility = (skill: SkillEnum): AbilityScoreEnum => {
    switch (skill) {
        case SkillEnum.Athletics:
            return AbilityScoreEnum.Str;
        case SkillEnum.Acrobatics:
        case SkillEnum.SleightOfHand:
        case SkillEnum.Stealth:
            return AbilityScoreEnum.Dex;
        case SkillEnum.Arcana:
        case SkillEnum.History:
        case SkillEnum.Investigation:
        case SkillEnum.Nature:
        case SkillEnum.Religion:
            return AbilityScoreEnum.Int;
        case SkillEnum.AnimalHandling:
        case SkillEnum.Insight:
        case SkillEnum.Medicine:
        case SkillEnum.Perception:
        case SkillEnum.Survival:
            return AbilityScoreEnum.Wis;
        case SkillEnum.Deception:
        case SkillEnum.Intimidation:
        case SkillEnum.Performance:
        case SkillEnum.Persuasion:
            return AbilityScoreEnum.Cha;
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

export const GetFeatName = (feat: FeatEnum): string => {
    switch (feat) {
        case FeatEnum.GreatWeaponMaster:
            return "Great Weapon Master";
        case FeatEnum.ElvenAccuracy:
            return "Elven Accuracy";
        default: return "";
    }
}

export const GetFeatDescription = (feat: FeatEnum): string => {
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

export const GetProfBonus = (level: number) => {
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
export const GetAbilityScoreEnumArray = (): AbilityScoreEnum[] => Object.values(AbilityScoreEnum).filter(x => typeof x === 'number').map(x => x as AbilityScoreEnum);
export const GetClassEnumArray = (): ClassEnum[] => Object.values(ClassEnum).filter(x => typeof x === 'number').map(x => x as ClassEnum);
