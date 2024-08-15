import { ModifierTargetEnum, ModifierTypeEnum } from "../../typings/abilityScore.d";
import { CharacterFeature } from "../../typings/character.d";
import { ClassFeatureEnum } from "../../typings/class.d";
import { SkillEnum } from "../../typings/skill.d";
import { CharacterId } from "../dbCharacter";

export const ZileanFeature: CharacterFeature[] = [
    { 
        feature: ClassFeatureEnum.ImplementOfPeace, 
        modifiers: [{
            type: ModifierTypeEnum.BecomeProficient,
            target: ModifierTargetEnum.Skill,
            skillTarget: SkillEnum.Insight
        }]
    },
].map(x => ({ ...x, characterId: CharacterId.Zilean }));