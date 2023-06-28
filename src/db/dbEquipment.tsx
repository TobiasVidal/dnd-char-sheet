import { GetAbilityScoreEnumArray, GetSkillEnumArray } from "../utils/common";
import { Equipment, EquipmentEnum } from "../typings/equipment.d";
import { AbilityScoreEnum } from "../typings/abilityScore.d";
import { DamageType } from "../typings/common.d";

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

export const dbEquipment: Equipment[] = [
    { 
        equipmentEnum: EquipmentEnum.Book,
    },
    { 
        equipmentEnum: EquipmentEnum.Chalk,
    },
    { 
        equipmentEnum: EquipmentEnum.Piton,
    },
    { 
        equipmentEnum: EquipmentEnum.Hammer,
    },
    { 
        equipmentEnum: EquipmentEnum.Shovel,
    },
    { 
        equipmentEnum: EquipmentEnum.ExplorersPack,
    },
    { 
        equipmentEnum: EquipmentEnum.Rations,
    },
    { 
        equipmentEnum: EquipmentEnum.Whetstone,
    },
    { 
        equipmentEnum: EquipmentEnum.BlockAndTackle,
    },
    { 
        equipmentEnum: EquipmentEnum.Crowbar,
    },
    { 
        equipmentEnum: EquipmentEnum.Horn,
    },
    { 
        equipmentEnum: EquipmentEnum.Dagger,
    },
    { 
        equipmentEnum: EquipmentEnum.RopeSilk,
    },
    { 
        equipmentEnum: EquipmentEnum.Shield,
        grantsACBonus: 2,
    },
    { 
        equipmentEnum: EquipmentEnum.RingMail,
        grantsBaseAC: 16,
    },
    { 
        equipmentEnum: EquipmentEnum.LuckStone,
        skills: GetSkillEnumArray().map(x => ({ skill: x, value: 1 })),
        savingThrows: GetAbilityScoreEnumArray().map(x => ({ ability: x, value: 1 })),
    },


    //Custom
    { 
        equipmentEnum: EquipmentEnum.HexbladeGreatsword,
        name: 'Greatsword',
        range: '5ft',
        damage: {
            ability: AbilityScoreEnum.Cha,
            dice: [{ type: DamageType.Slashing, dieSides: 6, dieCount: 2 }]
        }
    },
    { 
        equipmentEnum: EquipmentEnum.HexbladeLongsword,
        name: 'Longsword',
        range: '5ft',
        damage: {
            ability: AbilityScoreEnum.Cha,
            dice: [{ type: DamageType.Slashing, dieSides: 8, dieCount: 1 }]
        }
    },
    { 
        equipmentEnum: EquipmentEnum.HexbladeGlaive,
        name: 'Glaive',
        range: '10ft',
        damage: {
            ability: AbilityScoreEnum.Cha,
            dice: [{ type: DamageType.Slashing, dieSides: 10, dieCount: 1 }]
        }
    },
    { 
        equipmentEnum: EquipmentEnum.HexbladeLance,
        name: 'Lance',
        range: '10ft',
        damage: {
            ability: AbilityScoreEnum.Cha,
            dice: [{ type: DamageType.Piercing, dieSides: 12, dieCount: 1 }]
        }
    },
    { 
        equipmentEnum: EquipmentEnum.ScrollOfRevivify,
        name: 'Scroll of Revivify',
    },
    { 
        equipmentEnum: EquipmentEnum.HealthPotionSmall,
        name: 'Health Potion (small)',
        tooltip: '2d4 + 2 healing'
    },
];

dbEquipment.filter(x => !x.name).forEach(x => {
    x.name = GetEquipmentName(x.equipmentEnum);
    x.url = GetEquipmentUrl(x.equipmentEnum);
});