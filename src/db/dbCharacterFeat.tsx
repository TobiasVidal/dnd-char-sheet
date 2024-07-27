import { AbilityScoreDefault, AbilityScoreEnum } from "../typings/abilityScore.d";
import { CharacterFeat, CharacterFeatDefault } from "../typings/character.d";
import { FeatEnum } from "../typings/feat.d";
import { CharacterId } from "./dbCharacter";

export const dbCharacterFeat: CharacterFeat[] = [
    { ...CharacterFeatDefault, characterId: CharacterId.Asura, feat: FeatEnum.ElvenAccuracy, abilityScores: [{ ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Cha, value: 1 }] },
    { ...CharacterFeatDefault, characterId: CharacterId.Asura, feat: FeatEnum.GreatWeaponMaster },
    
    { ...CharacterFeatDefault, characterId: CharacterId.Zilean, feat: FeatEnum.Telekinetic, abilityScores: [{ ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Int, value: 1 }]  },
];