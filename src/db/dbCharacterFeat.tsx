import { AbilityScoreDefault, AbilityScoreEnum } from "../typings/abilityScore.d";
import { CharacterFeat, CharacterFeatDefault } from "../typings/character.d";
import { FeatEnum } from "../typings/feat.d";
import { CharacterId } from "./dbCharacter";

export const dbCharacterFeat: CharacterFeat[] = [
    { ...CharacterFeatDefault, characterId: CharacterId.Asura, feat: FeatEnum.ElvenAccuracy, abilityScores: [{ ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Cha, value: 1 }] },
    { ...CharacterFeatDefault, characterId: CharacterId.Asura, feat: FeatEnum.GreatWeaponMaster },
    
    { ...CharacterFeatDefault, characterId: CharacterId.Zilean, level: 5, feat: FeatEnum.Telekinetic, abilityScores: [{ ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Int, value: 1 }] },
    { ...CharacterFeatDefault, characterId: CharacterId.Zilean, level: 1, feat: FeatEnum.Lucky },
    { ...CharacterFeatDefault, characterId: CharacterId.Zilean, level: 13, feat: FeatEnum.Resilient, abilityScores: [{ ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Con, value: 1 }] },
];