import { GetAbilityScoreName } from "../utils/common";
import { SkillEnum } from "./skill";

export enum AbilityScoreEnum {
    Str,
    Con,
    Dex,
    Int,
    Wis,
    Cha,
}

export type CharacterAbilityScore = {
    characterId: number,
    abilityScoreEnum: AbilityScoreEnum,
    value: number,
    get name():() => string,
    get modifier():() => number,
}

export const AbilityScoreDefault: CharacterAbilityScore = {
    modifier: function () { return Math.floor((this.value-10)/2); },
    name: function() { return GetAbilityScoreName(this.abilityScoreEnum); },
}

export enum ModifierTypeEnum {
    Flat,
    Proficiency,//Esto es que le sumas tu proficiency
    AbilityScore,
    BecomeProficient,//Esto es que pasas a tener proficiency en x cosa
    //...
}

export enum ModifierTargetEnum {
    SavingThrow,
    AbilityScore,
    Skill,
    Initiative,
    SpellDC,
    //...
}

export type StatModifier = {
    type: ModifierTypeEnum,
    target: ModifierTargetEnum,
    flatValue?: number,
    expertise?: boolean,
    abilityTarget?: AbilityScoreEnum,
    abilitySource?: AbilityScoreEnum,//Para cuando el bonus sale de un ability score, como el +CHA de Aura of Protection
    skillTarget?: SkillEnum,
}