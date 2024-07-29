import { ModifierTypeEnum, StatModifier } from "../typings/abilityScore.d";
import { CharacterDisplay } from "../typings/character.d";

export const GetModifierAmount = (modifier: StatModifier, character: CharacterDisplay): number => {
    switch (modifier.type) {
        case ModifierTypeEnum.Proficiency:
            return character.profBonus();
        case ModifierTypeEnum.Flat:
            return modifier.flatValue!;
        case ModifierTypeEnum.AbilityScore:
            return character.abilityScores.find(x => x.abilityScoreEnum === modifier.abilitySource)!.modifier();
        default:
            return 0;
    }
}