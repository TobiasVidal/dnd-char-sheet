import { CharacterEquipment } from "../typings/character.d";
import { dbCharacterEquipment } from "../db/dbCharacterEquipment";

export const GetCharacterEquipment = (characterId: number): CharacterEquipment[] =>
    dbCharacterEquipment.filter(x => x.characterId === characterId).map(x => ({...x}));