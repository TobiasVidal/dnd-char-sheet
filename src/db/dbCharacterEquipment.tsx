import { CharacterEquipment } from "../typings/character.d";
import { AsuraEquipment } from "./_CharacterEquipment/AsuraEquipment";
import { ZileanEquipment } from "./_CharacterEquipment/ZileanEquipment";

export const dbCharacterEquipment: CharacterEquipment[] = [
    ...AsuraEquipment,
    ...ZileanEquipment,
];