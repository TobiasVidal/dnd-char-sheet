import { CharacterSpell } from "../../typings/character.d";
import { ClassEnum } from "../../typings/class.d";
import { SpellEnum } from "../../typings/spell.d";
import { CharacterId } from "../dbCharacter";

export const AsuraCharacterSpells: CharacterSpell[] = [
    ...[
        { spellEnum: SpellEnum.EldritchBlast },
        { spellEnum: SpellEnum.Prestidigitation },
        { spellEnum: SpellEnum.MinorIllusion },
        { spellEnum: SpellEnum.Suggestion },
        { spellEnum: SpellEnum.Invisibility },
        { spellEnum: SpellEnum.Darkness },
        { spellEnum: SpellEnum.Shield, origin: "Hexblade" },
        { spellEnum: SpellEnum.Blur, origin: "Hexblade" },
    ].map(x => ({ ...x, prepared: true, class: ClassEnum.Warlock })),
    
    ...[
        { spellEnum: SpellEnum.Bless },
        { spellEnum: SpellEnum.Command },
        { spellEnum: SpellEnum.CureWounds },
        { spellEnum: SpellEnum.DetectMagic },
        { spellEnum: SpellEnum.ShieldOfFaith },
        { spellEnum: SpellEnum.ThunderousSmite },
    ].map(x => ({ ...x, prepared: true, class: ClassEnum.Paladin })),

].map(x => ({ ...x, characterId: CharacterId.Asura }));