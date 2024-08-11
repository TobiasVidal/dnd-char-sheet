import { dbCharacterFeature } from "../db/dbCharacterFeature";
import { dbClassFeature } from "../db/dbClassFeature";
import { ModifierTargetEnum, ModifierTypeEnum } from "../typings/abilityScore.d";
import { CharacterClass, CharacterFeature, CharacterFeatureDisplay, CharacterFeatureDisplayDefault } from "../typings/character.d";
import { ClassEnum, ClassFeature } from "../typings/class.d";
import { GetCharacterFeats } from "./CharacterFeatService";

export const GetCharacterFeatureDisplays = (characterId: number, classes: CharacterClass[]): CharacterFeatureDisplay[] => {
    const charFeatures: CharacterFeature[] = dbCharacterFeature.filter(x => x.characterId === characterId).map(x => ({...x}));
    const result: CharacterFeatureDisplay[] = [];
    const classFeatures: ClassFeature[] = dbClassFeature.filter(x => 
        charFeatures.some(y => x.feature === y.feature)
        || (!x.optional && classes.some(y => 
                y.class.classEnum === x.class
                && x.level <= y.level 
                && (x.subclass === undefined || x.subclass === y.subclass)
        ))
    );
    for (let feature of classFeatures) {
        const charClass: CharacterClass = classes.find(x => x.class.classEnum === feature.class)!;
        result.push({
            characterId: characterId,
            name: feature.name,
            description: feature.description,
            origin: `${ClassEnum[feature.class]} ${feature.level}`,
            url: '',
            modifiers: feature.statModifiers,
            spells: [ ...feature.spells, ...(feature.tiers?.filter(tier => tier.level < charClass.level).flatMap(x => x.spells) ?? []) ]
        });
    }
    
    GetCharacterFeats(characterId).forEach(x => result.push({
        ...CharacterFeatureDisplayDefault,
        spells: [],
        characterId: characterId,
        name: x.name(),
        description: x.description(),
        origin: 'Feat',
        modifiers: x.abilityScores.map(y => ({ 
            type: ModifierTypeEnum.AbilityScore,
            target: ModifierTargetEnum.AbilityScore,
            flatValue: y.value,
            abilityTarget: y.abilityScoreEnum,
        })),
    }));
    return result;
}