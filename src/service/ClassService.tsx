import { Class, ClassDefault, ClassEnum, SubclassEnum } from "../typings/class.d";
import { AbilityScoreEnum } from "../typings/abilityScore.d";
import { CharacterClass } from "../typings/character.d";
import { SpellSlot } from "../typings/spell.d";

export const GetClassHitDie = (classEnum: ClassEnum): number => {
    switch (classEnum) {
        case ClassEnum.Paladin: return 10;
        case ClassEnum.Warlock:
        case ClassEnum.Cleric:
             return 8;
        case ClassEnum.Wizard: 
            return 6;
        default: return 0;
    }
}

export const GetClassArmorProficiencies = (classEnum: ClassEnum): string[] => {
    switch (classEnum) {
        case ClassEnum.Paladin: 
            return [ 'Light Armor', 'Medium Armor', 'shields' ];
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
        case ClassEnum.Cleric: 
            return [ "Simple weapons" ];
        default: return []
    }
}

export const GetSubclassName = (subclass: SubclassEnum): string => {
    switch (subclass) {
        case SubclassEnum.OathOfVengance: return "Oath of Vengance";
        case SubclassEnum.Hexblade: return "The Hexblade";
        case SubclassEnum.Chronurgy: return "Chronurgy Magic";
        case SubclassEnum.PeaceDomain: return "Peace Domain";
        default: return '';
    }
}

export const GetClassSavingThrows = (classEnum: ClassEnum):AbilityScoreEnum[] => {
    switch (classEnum) {
        case ClassEnum.Cleric:
        case ClassEnum.Paladin:
        case ClassEnum.Warlock: return [ AbilityScoreEnum.Cha, AbilityScoreEnum.Wis ];
        case ClassEnum.Wizard: return [ AbilityScoreEnum.Int, AbilityScoreEnum.Wis ];
        default: return [];
    }
}

export const GetClassSpellcastingAbility = (classEnum: ClassEnum): AbilityScoreEnum | undefined => {
    switch (classEnum) {
        case ClassEnum.Warlock:
        case ClassEnum.Paladin: 
        case ClassEnum.Sorcerer: 
        case ClassEnum.Bard: 
            return AbilityScoreEnum.Cha;
        case ClassEnum.Cleric:
            return AbilityScoreEnum.Wis;
        case ClassEnum.Wizard:
            return AbilityScoreEnum.Int;
        default: return undefined;
    }
}

const GetHalfCasterSpellSlots = (level: number): SpellSlot[] => {
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

export const GetCharacterSpellSlots = (classes: CharacterClass[]): SpellSlot[] => {
    const warlockClass = classes.find(x => x.class.classEnum === ClassEnum.Warlock);
    let result: SpellSlot[] = [];
    let warlockSpellSlot: SpellSlot = { level: 0, amount: 0 };//warlock solo tiene 1 nivel de spells y funciona medio aparte del resto
    if (warlockClass) {
        result = GetWarlockSpellSlots(warlockClass.level);
        warlockSpellSlot = result[0];
    }

    if (!classes.some(x => IsCaster(x.class.classEnum))) {
        return result;
    }
    
    let casterLvl = 0;//Esto importa para el multiclass
    let fullCasterCount = 0;
    let halfCasterCount = 0;
    classes.forEach(x => {
        if (IsFullCaster(x.class.classEnum)) {
            fullCasterCount++;
            casterLvl++;
        }
        if (IsHalfCaster(x.class.classEnum)) {
            halfCasterCount++;
            casterLvl += 0.5;
        }
    });

    result = fullCasterCount === 0 && halfCasterCount === 1 ?
        GetHalfCasterSpellSlots(classes.find(x => IsHalfCaster(x.class.classEnum))!.level)
        : GetSpellSlots(casterLvl);
    
    //Agregamos los spell slots de warlock
    result.forEach(x => x.amount += (x.level === warlockSpellSlot.level) ? warlockSpellSlot.amount : 0);
    return result;
}

const IsCaster = (classEnum: ClassEnum): boolean => IsHalfCaster(classEnum) || IsFullCaster(classEnum);

const IsFullCaster = (classEnum: ClassEnum): boolean => {
    switch (classEnum) {
        case ClassEnum.Wizard:
        case ClassEnum.Sorcerer:
        case ClassEnum.Cleric:
        case ClassEnum.Bard:
        case ClassEnum.Druid:
            return true;
        default: return false;
    }
}

const IsHalfCaster = (classEnum: ClassEnum): boolean => {
    switch (classEnum) {
        case ClassEnum.Paladin:
        case ClassEnum.Ranger:
            return true;
        default: return false;
    }
}

//Esto sirve para full casters y multiclass
const GetSpellSlots = (casterLevel: number): SpellSlot[] => {
    casterLevel = Math.floor(casterLevel);
    const spellSlots = [];
    let index = 0;

    let lvl1Amount = 4;
    if (casterLevel == 1) { lvl1Amount = 2; }
    else if (casterLevel == 2) { lvl1Amount = 3; }
    spellSlots[index++] = lvl1Amount;

    let lvl2Amount = 0;
    if (casterLevel > 3) { lvl2Amount = 3; }
    else if (casterLevel == 3) { lvl2Amount = 2; }
    spellSlots[index++] = lvl2Amount;

    let lvl3Amount = 0;
    if (casterLevel > 5) { lvl3Amount = 3; }
    else if (casterLevel === 5) { lvl3Amount = 2; }
    spellSlots[index++] = lvl3Amount;

    let lvl4Amount = 0;
    if (casterLevel === 7) { lvl4Amount = 1; }
    else if (casterLevel === 8) { lvl4Amount = 2; }
    else if (casterLevel > 8) { lvl3Amount = 3; }
    spellSlots[index++] = lvl4Amount;

    let lvl5Amount = 0;
    if (casterLevel > 17) { lvl5Amount = 3; }
    else if (casterLevel > 9) { lvl5Amount = 2; }
    else if (casterLevel === 9) { lvl5Amount = 1; }
    spellSlots[index++] = lvl5Amount;

    let lvl6Amount = 0;
    if (casterLevel > 18) { lvl6Amount = 2; }
    else if (casterLevel > 10) { lvl6Amount = 1; }
    spellSlots[index++] = lvl6Amount;

    let lvl7Amount = 0;
    if (casterLevel === 20) { lvl7Amount = 2; }
    else if (casterLevel > 12) { lvl7Amount = 1; }
    spellSlots[index++] = lvl7Amount;
    spellSlots[index++] = casterLevel > 14 ? 1 : 0;//lvl 8
    spellSlots[index++] = casterLevel > 16 ? 1 : 0;//lvl 9

    return spellSlots.map((x, i) => ({ level: i+1, amount: x}));
}