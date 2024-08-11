import { CharacterSpell } from "../typings/character.d";
import { AsuraCharacterSpells } from "./_CharacterSpell/AsuraCharacterSpells";
import { ZileanCharacterSpells } from "./_CharacterSpell/ZileanCharacterSpells";

export const dbCharacterSpell: CharacterSpell[] = [
    ...AsuraCharacterSpells,
    ...ZileanCharacterSpells,
];