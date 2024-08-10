import { GetFeatName, GetFeatDescription, GetProfBonus } from '../utils/common'
import { Spell, SpellSlot } from './spell.d'
import { SavingThrow } from './savingThrow.d'
import { Background } from './background.d'
import { Equipment } from './equipment.d'
import { CharacterAbilityScore, StatModifier } from './abilityScore.d'
import { SkillEnum } from './skill.d'
import { FeatEnum } from './feat.d'
import { Class, ClassFeatureEnum } from './class.d'

export type Character = {
    characterId: number,
    name: string,
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
    charPersonality: CharacterPersonality,
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
    abilityScores: CharacterAbilityScore[], 
    get name(): () => string,
    get description(): () => string,
}

export const CharacterFeatDefault: CharacterFeat = {
    abilityScores: [],
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
}

export type CharacterFeatureDisplay = {
    characterId: number,
    name: string,
    description: string,
    origin: string,
    url: string,
    modifiers: StatModifier[],
}

export const CharacterFeatureDisplayDefault: CharacterFeature = {
    modifiers: [],
    url: null,
}

export type CharacterSpell = {
    spell: Spell,
    prepared: boolean,
    origin: string,
}

export type CharacterAttack = {
    name: string,
    damage: string,
    damageType: string,
    attackBonus: number,
    range?: string,
}

export type CharacterSpellcasting = {
    spells: CharacterSpell[],
    slots: SpellSlot[],
    saveDc: number,
    attackModifier: number,
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