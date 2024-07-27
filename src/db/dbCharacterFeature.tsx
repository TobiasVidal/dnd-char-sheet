/* OK esto es medio verga. La idea es que eventualmente las features se levanten "automaticamente" o algo en base a las clases que tenes */

import { CharacterFeature } from "../typings/character.d";
import { AsuraFeature } from "./_CharacterFeature/AsuraFeature";
import { ZileanFeature } from "./_CharacterFeature/ZileanFeature";

export const dbCharacterFeature: CharacterFeature[] = [
    ...AsuraFeature,
    ...ZileanFeature,
];