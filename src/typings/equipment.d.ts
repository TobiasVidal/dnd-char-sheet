import { AttributeEnum } from "./attribute.d"
import { SkillEnum } from "./skill.d"
import { DamageType } from "./common.d"

type DamageDice = {
    type: DamageType,
    dieSides: number,
    dieCount: number,
}

export type Equipment = {
    equipmentEnum: EquipmentEnum,
    isEquipped: boolean,
    name?: string,
    url?: string,
    count: number,
    range?: string,
    grantsBaseAC?: number,//Esto es para cosas que definen tu AC base, como armadura
    grantsACBonus?: number,//Esto es para cosas como shields, que dan un bonus (suma) al AC
    //weight: number,//lbs
    skills?: { skill: SkillEnum, value: number }[],
    savingThrows?: { attribute: AttributeEnum, value: number }[],
    damage?: {
        attribute: AttributeEnum,
        dice: DamageDice[],
    }
}

export enum EquipmentEnum {
    Book,
    BlockAndTackle,
    Chalk,
    Crowbar,
    Custom,
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
}