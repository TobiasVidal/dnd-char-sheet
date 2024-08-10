import { GetClassArmorProficiencies, GetClassHitDie, GetClassSpellcastingAbility, GetClassWeaponProficiencies } from '../service/ClassService'
import { AbilityScoreEnum, StatModifier } from './abilityScore.d';
import { SpellEnum } from './spell.d';

export enum ClassEnum {
    Artificer,
    Barbarian,
    Bard,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Sorcerer,
    Warlock,
    Wizard,
}

export enum SubclassEnum {
    Hexblade,
    OathOfVengance,
    PeaceDomain,
    Chronurgy,
}


export enum ClassFeatureEnum {
    DivineSense,
    LayOnHands,
    PaladinSpellcasting,
    DivineSmite,
    DivineHealth,
    SacredOath,
    HarnessDivinePower,
    AuraOfProtection,
    ChannelDivinityVengeance,
    
    ExtraAttack,

    PactMagic,
    HexbladeCurse,
    HexWarrior,

    AgonizingBlast,
    EldritchMind,
    PactOfTheBlade,
}

export type Class = {
    classEnum: ClassEnum,
    get name(): () => string,
    get hitDie(): () => number,
    get weaponProficiencies(): () => string[],
    get armorProficiencies(): () => string[],
    get averageLevelupHealth(): () => number,
    get spellcastingAbility(): () => AbilityScoreEnum | undefined,
}

export const ClassDefault: Class = {
    name: function () { return ClassEnum[this.classEnum]; },
    hitDie: function () { return GetClassHitDie(this.classEnum); },
    averageLevelupHealth: function () { return this.hitDie()/2 + 1; },
    spellcastingAbility: function () { return GetClassSpellcastingAbility(this.classEnum); },
    weaponProficiencies: function () { return GetClassWeaponProficiencies(this.classEnum); },
    armorProficiencies: function () { return GetClassArmorProficiencies(this.classEnum); },
}

type ClassFeatureBase = {
    level: number,
    description: string,
    spells: SpellEnum[], //Esto es para los spells que te da fijos. Si son spells opcionales, van dentro de la descr y los agregas en CharacterFeature
    statModifiers: StatModifier[],
}

export const ClassFeatureBaseDefault: ClassFeatureBase = {//Esto es para ClassFeatureLevel
    spells: [],
    statModifiers: [],
}

export const ClassFeatureDefault: ClassFeature = { ...ClassFeatureBaseDefault, tiers: [], optional: false }

export type ClassFeature = ClassFeatureBase & {
    feature: ClassFeatureEnum,
    name: string,
    class: ClassEnum,
    subclass?: SubclassEnum,
    optional: boolean,
    tiers: ClassFeatureLevel[]
    url: string,
}

export type ClassFeatureLevel = ClassFeatureBase & { }