import { CharacterEquipment } from "../../typings/character.d";
import { EquipmentEnum } from "../../typings/equipment.d";
import { CharacterId } from "../dbCharacter";
import { dbEquipment } from "../dbEquipment";

export const ZileanEquipment: CharacterEquipment[] = [
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.Shield)!,
        isEquipped: true,
        isCarried: false,
        inBackpack: false,
        count: 1,
    },
].map(x => ({ characterId: CharacterId.Zilean, ...x}));