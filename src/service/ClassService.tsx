import { CharacterClass } from "../typings/character";
import { Class, ClassDefault, ClassEnum } from "../typings/class.d";
import { SpellSlot } from "../typings/spell.d";

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