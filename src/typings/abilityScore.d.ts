import { GetAbilityScoreName } from "../utils/common";

export enum AbilityScoreEnum {
    Str,
    Con,
    Dex,
    Int,
    Wis,
    Cha,
}

export type AbilityScore = {
    abilityScoreEnum: AbilityScoreEnum,
    value: number,
    get name():() => string,
    get modifier():() => number,
}

export const AbilityScoreDefault: AbilityScore = {
    modifier: function () { return Math.floor((this.value-10)/2); },
    name: function() { return GetAbilityScoreName(this.abilityScoreEnum); },
}