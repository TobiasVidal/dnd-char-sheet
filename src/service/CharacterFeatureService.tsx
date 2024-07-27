import { dbCharacterFeature } from "../db/dbCharacterFeature";
import { CharacterFeature, CharacterFeatureDefault } from "../typings/character.d";
import { GetCharacterFeats } from "./CharacterFeatService";

export const GetCharacterFeatures = (characterId: number): CharacterFeature[] =>
    [
        ...dbCharacterFeature.filter(x => x.characterId === characterId).map(x => ({...x})),
        ...GetCharacterFeats(1).map(x => ({
            ...CharacterFeatureDefault,
            name: x.name(),
            description: x.description(),
            origin: '',
            url: '',
        }))
    ];