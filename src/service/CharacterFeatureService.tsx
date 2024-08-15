import { dbCharacterFeature } from "../db/dbCharacterFeature";
import { dbClassFeature } from "../db/dbClassFeature";
import { CharacterClass, CharacterFeature, CharacterFeatureDisplay, CharacterFeatureDisplayDefault } from "../typings/character.d";
import { ClassEnum, ClassFeature } from "../typings/class.d";
import { GetCharacterFeats } from "./CharacterFeatService";

const ClassesHaveFeature = (charClasses: CharacterClass[], feature: ClassFeature): boolean => charClasses.some(x => ClassHasFeature(x, feature));
const ClassHasFeature = (charClass: CharacterClass, feature: ClassFeature): boolean => 
    charClass.class.classEnum === feature.class
    && charClass.level >= feature.level 
    && (feature.subclass === undefined || feature.subclass === charClass.subclass);

export const GetCharacterFeatureDisplays = (characterId: number, classes: CharacterClass[]): CharacterFeatureDisplay[] => {
    const charFeatures: CharacterFeature[] = dbCharacterFeature.filter(x => x.characterId === characterId).map(x => ({...x}));
    const result: CharacterFeatureDisplay[] = [];
    for (let feature of dbClassFeature) {
        //"customizableFeature" hace referencia a features que son customizables porque te dan a elegir entre opciones (o la feature misma es opcional)
        const customizableFeature = charFeatures.find(x => x.feature === feature.feature);
        if (customizableFeature) {
            customizableFeature.modifiers.forEach(x => feature.statModifiers.push(x));
        }
        else if (feature.optional || !ClassesHaveFeature(classes, feature)) {
            continue;
        }

        const charClass: CharacterClass = classes.find(x => x.class.classEnum === feature.class)!;
        result.push({
            characterId: characterId,
            name: feature.name,
            description: feature.description,
            origin: `${ClassEnum[feature.class]} ${feature.level}`,
            url: '',
            modifiers: feature.statModifiers,
            spells: [ ...feature.spells, ...(feature.tiers?.filter(tier => tier.level <= charClass.level).flatMap(x => x.spells) ?? []) ]
        });
    }
    
    GetCharacterFeats(characterId).forEach(x => result.push({
        ...CharacterFeatureDisplayDefault,
        spells: [],
        characterId: characterId,
        name: x.name(),
        description: x.description(),
        origin: 'Feat',
        modifiers: x.statModifiers,
    }));

    return result;
}