import { AbilityScoreEnum } from "./abilityScore.d"
import { SkillEnum } from "./skill.d"
import { DamageType } from "./common.d"

type DamageDice = {
    type: DamageType,
    dieSides: number,
    dieCount: number,
}

export type Equipment = {
    equipmentEnum: EquipmentEnum,
    name?: string,
    tooltip?: string,
    url?: string,
    range?: string,
    grantsBaseAC?: number,//Esto es para cosas que definen tu AC base, como armadura
    grantsACBonus?: number,//Esto es para cosas como shields, que dan un bonus (suma) al AC
    skills?: { skill: SkillEnum, value: number }[],
    savingThrows?: { ability: AbilityScoreEnum, value: number }[],
    damage?: {
        ability: AbilityScoreEnum,
        dice: DamageDice[],
    }
}

export enum EquipmentEnum {
    Book,
    BlockAndTackle,
    Chalk,
    Crowbar,
    Dagger,
    ExplorersPack,
    Hammer,
    Horn,
    Oil,
    Piton,
    LuckStone,
    Rations,
    RingMail,
    RopeSilk,
    Shovel,
    Shield,
    Whetstone,

    //Custom
    HexbladeGreatsword,
    HexbladeLongsword,
    HexbladeGlaive,
    HexbladeLance,
    ScrollOfRevivify,
    HealthPotionSmall,
    DancingBoots,
}