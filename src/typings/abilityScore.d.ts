import { GetAbilityScoreName } from "../utils/common";

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
    Proficiency,
    AbilityScore,
    //...
}

export enum ModifierTargetEnum {
    SavingThrow,
    AbilityScore,
    //...
}

export type StatModifier = {
    type: ModifierTypeEnum,
    target: ModifierTargetEnum,
    flatValue?: number,
    abilityTarget?: AbilityScoreEnum,
    abilitySource?: AbilityScoreEnum,
}