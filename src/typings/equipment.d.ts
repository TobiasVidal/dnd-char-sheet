import { AbilityScoreEnum, StatModifier } from "./abilityScore.d"
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
    dexACCap?: number,
    grantsBaseAC?: number,//Esto es para cosas que definen tu AC base, como armadura
    grantsACBonus?: number,//Esto es para cosas como shields, que dan un bonus (suma) al AC
    skills?: { skill: SkillEnum, value: number }[],
    savingThrows?: { ability: AbilityScoreEnum, value: number }[],
    statModifiers: StatModifier[]
    damage?: {
        ability: AbilityScoreEnum,
        dice: DamageDice[],
    }
}

export enum EquipmentEnum {
    ArcaneGrimoire,
    Book,
    BlockAndTackle,
    Chalk,
    CobblersTools,
    ContingencyStatuette,
    ContinualFlameRing,
    ComponentPouch,
    Crowbar,
    Dagger,
    Emblem,
    ExplorersPack,
    ObsidianSteedFigurine,
    Hammer,
    HalfPlate,
    Horn,
    Mace,
    Oil,
    Piton,
    LuckStone,
    Rations,
    RingMail,
    RopeSilk,
    Shovel,
    Shield,
    Spellbook,
    SmithsTools,
    Vial,
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