import { dbCharacterClass } from "../db/dbCharacterClass";
import { CharacterClass } from "../typings/character.d";

export const GetCharacterClasses = (characterId: number): CharacterClass[] =>
    dbCharacterClass.filter(x => x.characterId === characterId).map(x => ({...x}));