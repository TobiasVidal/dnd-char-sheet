import { AbilityScoreEnum, ModifierTargetEnum, ModifierTypeEnum } from "../typings/abilityScore.d";
import { CharacterFeat, CharacterFeatDefault } from "../typings/character.d";
import { FeatEnum } from "../typings/feat.d";
import { CharacterId } from "./dbCharacter";

export const dbCharacterFeat: CharacterFeat[] = [
    ...[{ 
         feat: FeatEnum.ElvenAccuracy, 
         level: 1,
         statModifiers: [{ 
            type: ModifierTypeEnum.Flat, 
            target: ModifierTargetEnum.AbilityScore,
            abilityTarget: AbilityScoreEnum.Cha,
            flatValue: 1 
        }] 
    },
    { feat: FeatEnum.GreatWeaponMaster, level: 8 },
    ].map(x => ({ ...CharacterFeatDefault, ...x, characterId: CharacterId.Asura })),

    ...[{ 
        level: 5, 
        feat: FeatEnum.Telekinetic, 
        statModifiers: [{ 
            type: ModifierTypeEnum.Flat, 
            target: ModifierTargetEnum.AbilityScore,
            abilityTarget: AbilityScoreEnum.Int,
            flatValue: 1 
        }] 
    },
    { 
        level: 1, 
        feat: FeatEnum.Lucky 
    },
    { 
        level: 13, 
        feat: FeatEnum.Resilient, 
        statModifiers: [{ 
            type: ModifierTypeEnum.Flat, 
            target: ModifierTargetEnum.AbilityScore,
            abilityTarget: AbilityScoreEnum.Con,
            flatValue: 1 
        },
        { 
            type: ModifierTypeEnum.BecomeProficient, 
            target: ModifierTargetEnum.SavingThrow,
            abilityTarget: AbilityScoreEnum.Con, 
        },
        ] 
    }].map(x => ({ ...CharacterFeatDefault, ...x, characterId: CharacterId.Zilean })),
];