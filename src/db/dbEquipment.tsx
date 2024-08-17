import { GetAbilityScoreEnumArray, GetSkillEnumArray } from "../utils/common";
import { Equipment, EquipmentEnum } from "../typings/equipment.d";
import { AbilityScoreEnum } from "../typings/abilityScore.d";
import { DamageType } from "../typings/common.d";

const GetEquipmentName = (equipment: EquipmentEnum): string => {
    switch (equipment) {
        case EquipmentEnum.BlockAndTackle: return 'Block and Tackle';
        case EquipmentEnum.CobblersTools: return 'Cobbler\'s Tools';
        case EquipmentEnum.ContingencyStatuette: return 'Contingency Statuette';
        case EquipmentEnum.ContinualFlameRing: return 'Continual Flame Ring';
        case EquipmentEnum.ComponentPouch: return 'Component Pouch';
        case EquipmentEnum.HalfPlate: return 'Half Plate';
        case EquipmentEnum.ExplorersPack: return 'Explorer\'s Pack';
        case EquipmentEnum.LuckStone: return 'Stone of Good Luck';
        case EquipmentEnum.RingMail: return 'Ring Mail';
        case EquipmentEnum.RopeSilk: return 'Silk Rope';
        case EquipmentEnum.SmithsTools: return 'Smith\'s Tools';
        default: return EquipmentEnum[equipment];
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
    { equipmentEnum: EquipmentEnum.Book, },
    { equipmentEnum: EquipmentEnum.BlockAndTackle, },
    { equipmentEnum: EquipmentEnum.Chalk, },
    { equipmentEnum: EquipmentEnum.CobblersTools, },
    { equipmentEnum: EquipmentEnum.ContingencyStatuette, },
    { equipmentEnum: EquipmentEnum.ComponentPouch, },
    { equipmentEnum: EquipmentEnum.Crowbar, },
    { equipmentEnum: EquipmentEnum.Dagger, },
    { equipmentEnum: EquipmentEnum.ExplorersPack, },
    { 
        equipmentEnum: EquipmentEnum.HalfPlate,
        grantsBaseAC: 15,
        dexACCap: 2,
    },
    { equipmentEnum: EquipmentEnum.Hammer, },
    { equipmentEnum: EquipmentEnum.Horn, },
    { 
        equipmentEnum: EquipmentEnum.LuckStone,
        skills: GetSkillEnumArray().map(x => ({ skill: x, value: 1 })),
        savingThrows: GetAbilityScoreEnumArray().map(x => ({ ability: x, value: 1 })),
    },
    { 
        equipmentEnum: EquipmentEnum.Mace,
        name: 'Mace',
        range: '5ft',
        damage: {
            ability: AbilityScoreEnum.Str,
            dice: [{ type: DamageType.Bludgeoning, dieSides: 6, dieCount: 1 }]
        }
    },
    { equipmentEnum: EquipmentEnum.Piton, },
    { equipmentEnum: EquipmentEnum.Rations, },
    { 
        equipmentEnum: EquipmentEnum.RingMail,
        grantsBaseAC: 16,
    },
    { equipmentEnum: EquipmentEnum.RopeSilk, },
    { equipmentEnum: EquipmentEnum.Shovel, },
    { 
        equipmentEnum: EquipmentEnum.Shield,
        grantsACBonus: 2,
    },
    { equipmentEnum: EquipmentEnum.SmithsTools, },
    { equipmentEnum: EquipmentEnum.Spellbook, },
    { equipmentEnum: EquipmentEnum.Vial, },
    { equipmentEnum: EquipmentEnum.Emblem, },
    { equipmentEnum: EquipmentEnum.Whetstone, },
    
    //Custom
    { equipmentEnum: EquipmentEnum.ContinualFlameRing, },
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
    { 
        equipmentEnum: EquipmentEnum.DancingBoots,
        savingThrows: GetAbilityScoreEnumArray().map(x => ({ ability: x, value: 1 })),
    },
];

dbEquipment.filter(x => !x.name).forEach(x => {
    x.name = GetEquipmentName(x.equipmentEnum);
    x.url = GetEquipmentUrl(x.equipmentEnum);
});