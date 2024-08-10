import { dbWarlokClassFeatures } from "../db/_ClassFeature/WarlockClassFeatures";
import { dbCharacterFeature } from "../db/dbCharacterFeature";
import { dbClassFeature } from "../db/dbClassFeature";
import { ModifierTargetEnum, ModifierTypeEnum } from "../typings/abilityScore.d";
import { CharacterClass, CharacterFeature, CharacterFeatureDisplay } from "../typings/character.d";
import { ClassEnum } from "../typings/class.d";
import { GetCharacterFeats } from "./CharacterFeatService";

export const GetCharacterFeatureDisplays = (characterId: number, classes: CharacterClass[]): CharacterFeatureDisplay[] => {
    //const result = [];
    const charFeatures: CharacterFeature[] = dbCharacterFeature.filter(x => x.characterId === characterId).map(x => ({...x}));
    for (let index = 0; index < dbWarlokClassFeatures.length; index++) {
        const x = dbWarlokClassFeatures[index];

        console.log(x.name, ClassEnum.Warlock, x, classes, classes.some(y => 
            y.class.classEnum === x.class
            && x.level <= y.level 
            && (x.subclass === undefined || x.subclass === y.subclass)
    ))
    }
    const classFeatures: CharacterFeatureDisplay[] = dbClassFeature.filter(x => 
        charFeatures.some(y => x.feature === y.feature)
        || (!x.optional && classes.some(y => 
                y.class.classEnum === x.class
                && x.level <= y.level 
                && (x.subclass === undefined || x.subclass === y.subclass)
        ))
    ).map(x => ({
        characterId: characterId,
        name: x.name,
        description: x.description,
        origin: `${ClassEnum[x.class]} ${x.level}`,
        url: '',
        modifiers: x.statModifiers
    }));
    
    const classFeats: CharacterFeatureDisplay[] = GetCharacterFeats(characterId).map(x => ({
        characterId: characterId,
        name: x.name(),
        description: x.description(),
        origin: 'Feat',
        url: '',
        modifiers: x.abilityScores.map(y => ({ 
            type: ModifierTypeEnum.AbilityScore,
            target: ModifierTargetEnum.AbilityScore,
            flatValue: y.value,
            abilityTarget: y.abilityScoreEnum,
        })),
    }));
    return [
        ...classFeatures,
        ...classFeats
    ];
}