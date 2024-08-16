import { dbCharacterSpell } from "../db/dbCharacterSpell";
import { CharacterClass, CharacterFeatureDisplay, CharacterSpellDisplay } from "../typings/character.d";
import { GetCurrentMaxSpellSlot, KnowsAllAvailableSpells } from "./ClassService";
import { GetAllSpells, GetSpell } from "./SpellService";

export const GetCharacterSpells = (characterId: number, classes: CharacterClass[], features: CharacterFeatureDisplay[]): CharacterSpellDisplay[] => {
    const allSpells = GetAllSpells();
    
    var spells: CharacterSpellDisplay[] = dbCharacterSpell.filter(x => x.characterId === characterId)
        .map(x => ({...x, spell: GetSpell(x.spellEnum)}));

    for (let feature of features) {
        for (let spell of feature.spells) {
            if (spells.some(x => x.spellEnum === spell)) { continue; }
            spells.push({
                characterId,
                spellEnum: spell,
                prepared: true,
                origin: feature.origin,
                spell: GetSpell(spell)
            });
        }
    }
    
    const classesAllSpells = classes.filter(x => KnowsAllAvailableSpells(x.class.classEnum))
        .map(x => ({ classEnum: x.class.classEnum, maxSpellLevel: GetCurrentMaxSpellSlot(x.class.classEnum, x.level)}));
    var allClassSpells = allSpells.filter(spell => 
            !spells.some(x => x.spellEnum === spell.spellEnum)
            && spell.level > 0
            && spell.classes?.some(spellClass => 
                classesAllSpells.some(x => x.classEnum === spellClass && x.maxSpellLevel >= spell.level))
        ).map(x => ({ 
            spell: x, 
            characterId,
            spellEnum: x.spellEnum!,
            prepared: false,
         }));

    return [...spells, ...allClassSpells].sort((a, b) => {
        if (a.prepared && !b.prepared) { return -1; }
        if (b.prepared && !a.prepared) { return 1; }
        if (a.spell.ritual && !b.spell.ritual) { return -1; }
        if (b.spell.ritual && !a.spell.ritual) { return 1; }
        return a.spell.name.localeCompare(b.spell.name);
    });
}