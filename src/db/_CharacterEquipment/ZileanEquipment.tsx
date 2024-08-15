import { CharacterEquipment } from "../../typings/character.d";
import { EquipmentEnum } from "../../typings/equipment.d";
import { CharacterId } from "../dbCharacter";
import { dbEquipment } from "../dbEquipment";

export const ZileanEquipment: CharacterEquipment[] = [
    //Aceite
    //Healers'kit
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.Dagger)!,
        isEquipped: false,
        isCarried: true,
        inBackpack: false,
        count: 1,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.HalfPlate)!,
        isEquipped: true,
        isCarried: false,
        inBackpack: false,
        count: 1,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.Shield)!,
        isEquipped: true,
        isCarried: false,
        inBackpack: false,
        count: 1,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.RopeSilk)!,
        isEquipped: false,
        isCarried: false,
        inBackpack: true,
        count: 4,
    },
].map(x => ({ characterId: CharacterId.Zilean, ...x}));