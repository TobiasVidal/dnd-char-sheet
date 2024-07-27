import { dbCharacterFeat } from "../db/dbCharacterFeat";
import { CharacterFeat } from "../typings/character";

export const GetCharacterFeats = (characterId: number): CharacterFeat[] =>
    dbCharacterFeat.filter(x => x.characterId === characterId).map(x => ({...x}));