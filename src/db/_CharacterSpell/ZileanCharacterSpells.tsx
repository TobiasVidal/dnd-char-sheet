import { CharacterSpell } from "../../typings/character.d";
import { ClassEnum } from "../../typings/class.d";
import { SpellEnum } from "../../typings/spell.d";
import { CharacterId } from "../dbCharacter";

export const ZileanCharacterSpells: CharacterSpell[] = [
    ...[
        { spellEnum: SpellEnum.Bane, origin: 'Oath of Vengance' },
        { spellEnum: SpellEnum.HuntersMark, origin: 'Oath of Vengance' },
        { spellEnum: SpellEnum.HoldPerson, origin: 'Oath of Vengance' },
        { spellEnum: SpellEnum.MistyStep, origin: 'Oath of Vengance' },
    ].map(x => ({ ...x, prepared: true, class: ClassEnum.Paladin })),
    ...[
        { spellEnum: SpellEnum.Bless },
        { spellEnum: SpellEnum.Command },
        { spellEnum: SpellEnum.CureWounds },
        { spellEnum: SpellEnum.DetectMagic },
        { spellEnum: SpellEnum.ShieldOfFaith },
        { spellEnum: SpellEnum.ThunderousSmite },
    ].map(x => ({ ...x, prepared: true, class: ClassEnum.Paladin })),

].map(x => ({ ...x, characterId: CharacterId.Zilean }));