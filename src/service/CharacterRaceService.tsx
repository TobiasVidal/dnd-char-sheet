import { AbilityScoreDefault, AbilityScoreEnum } from "../typings/abilityScore.d";
import { CharacterRace } from "../typings/character.d";
import { CharacterId } from "../db/dbCharacter";

export const GetCharacterRace = (characterId: number): CharacterRace =>
    [
        {
            characterId: CharacterId.Asura,
            displayName: "Tiefling/Elf",
            subtitle: "(custom lineage)",
            speed: 30,
            abilityScores: [{ ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Cha, value: 2 }],
            languages: ["Common", "Elven"],
            traits: ["Darkvision 60ft"],
            size: "Medium",
        },
        {
            characterId: CharacterId.Zilean,
            displayName: "Tiefling/Aasimar",
            subtitle: "(custom lineage)",
            speed: 30,
            abilityScores: [{ ...AbilityScoreDefault, abilityScoreEnum: AbilityScoreEnum.Int, value: 2 }],
            languages: ["Common", "Invernal", "Celestial"],
            traits: ["Darkvision 60ft"],
            //Feat
            size: "Medium",
        },
    ].find(x => x.characterId === characterId)!;