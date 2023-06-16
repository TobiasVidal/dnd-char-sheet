import { GetFeatName, GetFeatDescription, GetProfBonus } from '../utils/common'
import { Spell, SpellSlot } from './spell.d'
import { SavingThrow } from './savingThrow.d'
import { Background } from './background.d'
import { Equipment } from './equipment.d'
import { Attribute } from './attribute.d'
import { DamageType } from './common.d'
import { SkillEnum } from './skill.d'
import { FeatEnum } from './feat.d'
import { Class } from './class.d'

type Character = {
    name: string,
    attributes: Attribute[],
    savingThrows: SavingThrow[],
    classes: CharacterClass[],
    skills: CharacterSkill[],
    features: CharacterFeature[],
    race: CharacterRace,
    feats: CharacterFeat[],
    spells: CharacterSpell[],
    spellSlots: SpellSlot[],
    equipment: Equipment[],
    attacks: CharacterAttack[],
    background: Background,
    armorClass: number,
    initiative: number,
    speed: number,
    healthMax: number,
    get level(): () => number,
    get profBonus(): () => number,
}

const CharacterDefault: Character = {
    savingThrows: [],
    equipment: [],
    classes: [],
    attacks: [],
    skills: [],
    armorClass: 10,
    healthMax: 1,
    level: function() { return this.classes?.reduce((sum, x) => sum + x.level, 0) ?? 0 },
    profBonus: function() { return GetProfBonus(this.level()); },
}

type CharacterClass = {
    class: Class,
    level: number,
    startingClass: boolean,
    skillProficiencies: SkillEnum[],
    weaponProficiencies: string[],
    armorProficiencies: string[],
}

type CharacterRace = {
    displayName: string
    speed: number,
    attributes: Attribute[], 
    languages: string[],
    traits: string[],
    size: string,
}

type CharacterFeat = {
    feat: FeatEnum
    attributes: Attribute[], 
    get name(): () => string,
    get description(): () => string,
}

const CharacterFeatDefault: CharacterFeat = {
    attributes: [],
    name: function() { return GetFeatName(this.feat); },
    description: function() { return GetFeatDescription(this.feat); },
}

type CharacterSkill = {
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

export { 
    Character, 
    CharacterDefault, 
    CharacterClass, 
    CharacterRace,
    CharacterFeat,
    CharacterFeatDefault,
    CharacterSkill,
 }