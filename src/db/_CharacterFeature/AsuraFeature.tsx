import { CharacterFeature } from "../../typings/character.d";
import { ClassFeatureEnum } from "../../typings/class.d";
import { CharacterId } from "../dbCharacter";

export const AsuraFeature: CharacterFeature[] = [
    { feature: ClassFeatureEnum.AgonizingBlast, },
    { feature: ClassFeatureEnum.EldritchMind, },
    { feature: ClassFeatureEnum.PactOfTheBlade, },
].map(x => ({ ...x, characterId: CharacterId.Asura }));