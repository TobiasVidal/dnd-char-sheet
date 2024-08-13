import { AbilityScoreDefault, AbilityScoreEnum, CharacterAbilityScore } from "../typings/abilityScore.d";
import { CharacterId } from "./dbCharacter";

export const dbCharacterAbilityScore: CharacterAbilityScore[] = [
    ...[
        { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Str, value: 13 },
        { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Dex, value: 8 },
        { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Con, value: 14 },
        { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Int, value: 10 },
        { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Wis, value: 12 },
        { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Cha, value: 17 },
    ].map(x => ({ ...x, characterId: CharacterId.Asura })),
    ...[
        { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Str, value: 9 },
        { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Dex, value: 14 },
        { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Con, value: 13 },
        { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Int, value: 15+2 },
        { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Wis, value: 13 },
        { ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Cha, value: 8 },
    ].map(x => ({ ...x, characterId: CharacterId.Zilean })),
];