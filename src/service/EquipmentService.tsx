import { Equipment, EquipmentEnum } from "../typings/equipment.d";
import { AttributeEnum } from "../typings/attribute.d";
import { DamageType } from "../typings/common.d";
import { GetSkillEnumArray, GetAttributeEnumArray } from "../utils/common";

export const GetEquipment = (): Equipment[] => {
    const equipment: Equipment[] = [
        { 
            equipmentEnum: EquipmentEnum.Book,
            isEquipped: false,
            count: 2,
        },
        { 
            equipmentEnum: EquipmentEnum.Chalk,
            isEquipped: false,
            count: 10,
        },
        { 
            equipmentEnum: EquipmentEnum.Piton,
            isEquipped: false,
            count: 8,
        },
        { 
            equipmentEnum: EquipmentEnum.Hammer,
            isEquipped: false,
            count: 1,
        },
        { 
            equipmentEnum: EquipmentEnum.Shovel,
            isEquipped: false,
            count: 1,
        },
        { 
            equipmentEnum: EquipmentEnum.ExplorersPack,
            isEquipped: false,
            count: 1,
        },
        { 
            equipmentEnum: EquipmentEnum.Rations,
            isEquipped: false,
            count: 10,
        },
        { 
            equipmentEnum: EquipmentEnum.Whetstone,
            isEquipped: false,
            count: 1,
        },
        { 
            equipmentEnum: EquipmentEnum.BlockAndTackle,
            isEquipped: false,
            count: 1,
        },
        { 
            equipmentEnum: EquipmentEnum.Crowbar,
            isEquipped: false,
            count: 1,
        },
        { 
            equipmentEnum: EquipmentEnum.Horn,
            isEquipped: true,
            count: 1,
        },
        { 
            equipmentEnum: EquipmentEnum.Dagger,
            isEquipped: true,
            count: 1,
        },
        { 
            equipmentEnum: EquipmentEnum.RopeSilk,
            isEquipped: true,
            count: 1,
        },
        { 
            equipmentEnum: EquipmentEnum.Shield,
            grantsACBonus: 2,
            isEquipped: false,
            count: 1,
        },
        { 
            equipmentEnum: EquipmentEnum.RingMail,
            grantsBaseAC: 16,
            isEquipped: true,
            count: 1,
        },
        { 
            equipmentEnum: EquipmentEnum.LuckStone,
            isEquipped: true,
            count: 1,
            skills: GetSkillEnumArray().map(x => ({ skill: x, value: 1 })),
            savingThrows: GetAttributeEnumArray().map(x => ({ attribute: x, value: 1 })),
        },
        { 
            equipmentEnum: EquipmentEnum.Custom,
            isEquipped: true,
            count: 1,
            name: 'Greatsword',
            range: '5ft',
            damage: {
                attribute: AttributeEnum.Cha,
                dice: [{ type: DamageType.Slashing, dieSides: 6, dieCount: 2 }]
            }
        },
    ];

    equipment.filter(x => x.equipmentEnum !== EquipmentEnum.Custom).forEach(x => {
        x.name = GetEquipmentName(x.equipmentEnum);
        x.url = GetEquipmentUrl(x.equipmentEnum);
    });

    return equipment;
}

const GetEquipmentName = (equipment: EquipmentEnum): string => {
    switch (equipment) {
        case EquipmentEnum.BlockAndTackle: return 'Block and Tackle';
        case EquipmentEnum.ExplorersPack: return 'Explorer\'s Pack';
        case EquipmentEnum.LuckStone: return 'Stone of Good Luck';
        case EquipmentEnum.RingMail: return 'Ring Mail';
        case EquipmentEnum.RopeSilk: return 'Silk Rope';
        default: return EquipmentEnum[equipment];;
    }
}

const GetEquipmentUrl = (equipment: EquipmentEnum): string => {
    switch (equipment) {
        case EquipmentEnum.ExplorersPack:
        case EquipmentEnum.BlockAndTackle: 
        case EquipmentEnum.LuckStone:
        case EquipmentEnum.RopeSilk:
            return 'https://roll20.net/compendium/dnd5e/'+GetEquipmentName(equipment);
        default: return 'https://roll20.net/compendium/dnd5e/'+EquipmentEnum[equipment];
    }
}