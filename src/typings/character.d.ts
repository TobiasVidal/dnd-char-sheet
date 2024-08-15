import { GetFeatName, GetFeatDescription, GetProfBonus } from '../utils/common'
import { Spell, SpellEnum, SpellSlot } from './spell.d'
import { SavingThrow } from './savingThrow.d'
import { Background } from './background.d'
import { Equipment } from './equipment.d'
import { CharacterAbilityScore, StatModifier } from './abilityScore.d'
import { SkillEnum } from './skill.d'
import { FeatEnum } from './feat.d'
import { Class, ClassEnum, ClassFeatureEnum } from './class.d'

export type Character = {
    characterId: number,
    name: string,
    avatar: string,
    ideals: string[],
    bonds: string[],
    flaws: string[],
    traits: string[],
    age?: number,
    height?: string,
    weight?: string,
    eyes?: string,
    skin?: string,
    hair?: string,
}

export type CharacterDisplay = Character & {    
    abilityScores: CharacterAbilityScore[],
    savingThrows: SavingThrow[],
    charClasses: CharacterClass[],
    charSkills: CharacterSkill[],
    charFeatures: CharacterFeatureDisplay[],
    charRace: CharacterRace,
    charFeats: CharacterFeat[],
    charSpellcasting?: CharacterSpellcasting,
    charEquipment: CharacterEquipment[],
    charAttacks: CharacterAttack[],
    money: Money,
    background: Background,
    armorClass: number,
    initiative: number,
    speed: number,
    healthMax: number,
    get level(): () => number,
    get profBonus(): () => number,
}

export const CharacterDisplayDefault: CharacterDisplay = {
    savingThrows: [],
    charEquipment: [],
    charClasses: [],
    charAttacks: [],
    charSkills: [],
    money: { gp: 0, sp: 0, cp: 0 },
    armorClass: 10,
    healthMax: 1,
    level: function() { return this.charClasses?.reduce((sum, x) => sum + x.level, 0) ?? 0 },
    profBonus: function() { return GetProfBonus(this.level()); },
}

export type CharacterClass = {
    characterId: number,
    class: Class,
    subclass: SubclassEnum,
    level: number,
    startingClass: boolean,
    skillProficiencies: SkillEnum[],
}

export type CharacterRace = {
    displayName: string
    subtitle?: string
    speed: number,
    abilityScores: CharacterAbilityScore[], 
    languages: string[],
    traits: string[],
    size: string,
}

export type CharacterFeat = {
    characterId: number,
    feat: FeatEnum
    statModifiers: StatModifier[],
    level?: number,//En que nivel lo obtuviste, solo para log interno
    get name(): () => string,
    get description(): () => string,
}

export const CharacterFeatDefault: CharacterFeat = {
    statModifiers: [],
    name: function() { return GetFeatName(this.feat); },
    description: function() { return GetFeatDescription(this.feat); },
}

export type CharacterSkill = {
    skill: SkillEnum,
    hasProficiency: boolean,
    value: number,
}

export type CharacterFeature = {
    characterId: number,
    feature: ClassFeatureEnum,
    modifiers: StatModifier[],
}

export type CharacterFeatureDisplay = {
    characterId: number,
    name: string,
    description: string,
    origin: string,
    url?: string,
    modifiers: StatModifier[],
    spells: SpellEnum[],
}

export const CharacterFeatureDisplayDefault: CharacterFeature = {
    modifiers: [],
    spells: [],
}

export type CharacterSpell = {
    characterId: number,
    spellEnum: SpellEnum,
    prepared?: boolean,
    origin?: string,
    class?: ClassEnum,
}

export type CharacterSpellDisplay = CharacterSpell & {
    spell: Spell,
}

export type CharacterAttack = {
    name: string,
    damage: string,
    damageType: string,
    attackBonus: number,
    range?: string,
}

type SpellSave = {
    classes: string[],
    saveDc: number,
    attackModifier: number,
}

export type CharacterSpellcasting = {
    spells: CharacterSpellDisplay[],
    slots: SpellSlot[],
    saves: SpellSave[],
}

export const CharacterSpellcastingDefault: CharacterSpellcasting = {
    spells: [],
    slots: [],
    saveDc: 0,
    attackModifier: 0,
}

export type CharacterEquipment = {
    characterId: number,
    equipment: Equipment,
    count: number,
    isEquipped: boolean,
    isCarried: boolean,
    inBackpack: boolean,    
}