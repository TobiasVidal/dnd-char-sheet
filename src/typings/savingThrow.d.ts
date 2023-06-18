import { AbilityScoreEnum } from "./abilityScore.d";

type SavingThrow = {
    ability: AbilityScoreEnum,
    value: number,
    hasProficiency: boolean,
}

export { SavingThrow };