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
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.Mace)!,
        isEquipped: false,
        isCarried: true,
        inBackpack: false,
        count: 1,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.Spellbook)!,
        isEquipped: false,
        isCarried: false,
        inBackpack: true,
        count: 1,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.ExplorersPack)!,
        isEquipped: false,
        isCarried: false,
        inBackpack: true,
        count: 1,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.CobblersTools)!,
        isEquipped: false,
        isCarried: false,
        inBackpack: true,
        count: 1,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.SmithsTools)!,
        isEquipped: false,
        isCarried: false,
        inBackpack: true,
        count: 1,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.Vial)!,
        isEquipped: false,
        isCarried: false,
        inBackpack: true,
        count: 10,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.Emblem)!,
        isEquipped: true,
        isCarried: false,
        inBackpack: false,
        count: 2,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.ContingencyStatuette)!,
        isEquipped: false,
        isCarried: true,
        inBackpack: false,
        count: 1,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.ComponentPouch)!,
        isEquipped: true,
        isCarried: false,
        inBackpack: false,
        count: 1,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.ContinualFlameRing)!,
        isEquipped: true,
        isCarried: false,
        inBackpack: false,
        count: 1,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.ArcaneGrimoire)!,
        isEquipped: true,
        isCarried: false,
        inBackpack: false,
        count: 1,
    },
    { 
        equipment: dbEquipment.find(x => x.equipmentEnum === EquipmentEnum.ObsidianSteedFigurine)!,
        isEquipped: false,
        isCarried: true,
        inBackpack: false,
        count: 1,
    },
].map(x => ({ characterId: CharacterId.Zilean, ...x}));