import { GetFeatName, GetFeatDescription, GetProfBonus } from '../utils/common'
import { Spell, SpellSlot } from './spell.d'
import { SavingThrow } from './savingThrow.d'
import { Background } from './background.d'
import { Equipment } from './equipment.d'
import { AbilityScore } from './abilityScore.d'
import { SkillEnum } from './skill.d'
import { FeatEnum } from './feat.d'
import { Class } from './class.d'

export type Character = {
    name: string,
    abilityScores: AbilityScore[],
    savingThrows: SavingThrow[],
    classes: CharacterClass[],
    skills: CharacterSkill[],
    features: CharacterFeature[],
    race: CharacterRace,
    feats: CharacterFeat[],
    spellcasting?: CharacterSpellcasting,
    equipment: CharacterEquipment[],
    attacks: CharacterAttack[],
    money: Money,
    background: Background,
    armorClass: number,
    initiative: number,
    speed: number,
    healthMax: number,
    personality: CharacterPersonality,
    get level(): () => number,
    get profBonus(): () => number,
}

export const CharacterDefault: Character = {
    savingThrows: [],
    equipment: [],
    classes: [],
    attacks: [],
    skills: [],
    money: { gp: 0, sp: 0, cp: 0 },
    armorClass: 10,
    healthMax: 1,
    level: function() { return this.classes?.reduce((sum, x) => sum + x.level, 0) ?? 0 },
    profBonus: function() { return GetProfBonus(this.level()); },
}

export type CharacterClass = {
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
    abilityScores: AbilityScore[], 
    languages: string[],
    traits: string[],
    size: string,
}

export type CharacterFeat = {
    feat: FeatEnum
    abilityScores: AbilityScore[], 
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
    name: string,
    description: string,
    origin: string,
    url: string,
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
    equipment: Equipment,
    count: number,
    isEquipped: boolean,
    isCarried: boolean,
    inBackpack: boolean,    
}

export type CharacterPersonality = {
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