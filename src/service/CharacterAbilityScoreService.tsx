import { dbCharacterAbilityScore } from "../db/dbCharacterAbilityScore";
import { CharacterAbilityScore } from "../typings/abilityScore";

export const GetCharacterAbilityScores = (characterId: number): CharacterAbilityScore[] => dbCharacterAbilityScore.filter(x => x.characterId === characterId).map(x => ({...x}));