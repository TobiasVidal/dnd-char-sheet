import { Class, ClassDefault, ClassEnum, SubclassEnum } from "../typings/class.d";
import { AbilityScoreEnum } from "../typings/abilityScore.d";
import { CharacterClass } from "../typings/character.d";
import { SpellSlot } from "../typings/spell.d";

export const GetClassHitDie = (classEnum: ClassEnum): number => {
    switch (classEnum) {
        case ClassEnum.Paladin: return 10;
        case ClassEnum.Warlock: return 8;
        default: return 0;
    }
}

export const GetClassArmorProficiencies = (classEnum: ClassEnum): string[] => {
    switch (classEnum) {
        case ClassEnum.Paladin: 
            return [ 'Light Armor', 'Medium Armor', 'Heavy Armor', 'shields' ];
        case ClassEnum.Warlock: 
            return [ "Light armor" ];
        default: return []
    }
}

export const GetClassWeaponProficiencies = (classEnum: ClassEnum): string[] => {
    switch (classEnum) {
        case ClassEnum.Paladin: 
        return [ "Simple weapons", "Martial weapons" ];
        case ClassEnum.Warlock: 
            return [ "Simple weapons" ];
        default: return []
    }
}

export const GetSubclassName = (subclass: SubclassEnum): string => {
    switch (subclass) {
        case SubclassEnum.OathOfVengance: return "Oath of Vengance";
        case SubclassEnum.Hexblade: return "The Hexblade";
        default: return '';
    }
}

export const GetClassSavingThrows = (classEnum: ClassEnum):AbilityScoreEnum[] => {
    switch (classEnum) {
        case ClassEnum.Paladin:
        case ClassEnum.Warlock: return [ AbilityScoreEnum.Cha, AbilityScoreEnum.Wis ];
        default: return [];
    }
}

export const GetClassSpellcastingAbility = (classEnum: ClassEnum): AbilityScoreEnum | undefined => {
    switch (classEnum) {
        case ClassEnum.Warlock:
        case ClassEnum.Paladin: 
            return AbilityScoreEnum.Cha;
        default: return undefined;
    }
}

const GetClass = (classEnum: ClassEnum):Class => {
    return {
        ...ClassDefault,
        classEnum: classEnum,
    }
}

export const GetCharacterClassSpellSlots = (characterClass: CharacterClass): SpellSlot[] => GetClassSpellSlots(characterClass.class.classEnum, characterClass.level);
const GetClassSpellSlots = (classEnum: ClassEnum, level: number): SpellSlot[] => {
    switch (classEnum) {
        case ClassEnum.Paladin: return GetPaladinSpellSlots(level);
        case ClassEnum.Warlock: return GetWarlockSpellSlots(level);
        default: return [];
    }
}

const GetPaladinSpellSlots = (level: number): SpellSlot[] => {
    let lvl1Amount = 0;
    if (level === 2) { lvl1Amount = 2; }
    else if (level === 3 || level === 4) { lvl1Amount = 3; }
    else if (level > 4) { lvl1Amount = 4; }

    let lvl2Amount = 0;
    if (level === 5 || level === 6) { lvl2Amount = 2; }
    else if (level > 6) { lvl2Amount = 3; }
    
    let lvl3Amount = 0;
    if (level === 9 || level === 10) { lvl3Amount = 2; }
    else if (level > 10) { lvl3Amount = 3; }
    
    let lvl4Amount = 0;
    if (level === 13 || level === 14) { lvl4Amount = 1; }
    else if (level === 15 || level === 16) { lvl4Amount = 2; }
    else if (level > 16) { lvl3Amount = 3; }
    
    let lvl5Amount = 0;
    if (level === 17 || level === 18) { lvl5Amount = 1; }
    else if (level > 18) { lvl5Amount = 2; }

    return [
        {level: 1, amount: lvl1Amount},
        {level: 2, amount: lvl2Amount},
        {level: 3, amount: lvl3Amount},
        {level: 4, amount: lvl4Amount},
        {level: 5, amount: lvl5Amount},
    ];
}

const GetWarlockSpellSlots = (level: number): SpellSlot[] => {
    let spellLevel = level >= 9 ? 5 : Math.ceil(level/2);
    let spellSlots = 1;
    if (level > 16) { spellSlots = 4; }
    else if (level > 10) { spellSlots = 3; }
    else if (level > 1) { spellSlots = 2; }
    return [{level: spellLevel, amount: spellSlots}];
}

export { GetClass };