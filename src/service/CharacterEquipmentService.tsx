import { CharacterEquipment } from "../typings/character.d";
import { dbCharacterEquipment } from "../db/dbCharacterEquipment";

export const GetCharacterEquipment = (characterId: number): CharacterEquipment[] =>
    dbCharacterEquipment.filter(x => x.characterId === characterId).map(x => ({...x})).sort((a, b) => {
        if (a.isEquipped && !b.isEquipped) { return -1; }
        if (b.isEquipped && !a.isEquipped) { return 1; }
        if (a.isCarried && !b.isCarried) { return -1; }
        if (b.isCarried && !a.isCarried) { return 1; }
        return a.equipment.name?.localeCompare(b.equipment.name ?? '') ?? -1;
    });