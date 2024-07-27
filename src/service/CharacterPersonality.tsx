import { CharacterId } from "../db/dbCharacter";
import { CharacterPersonality } from "../typings/character.d";

export const GetCharacterPersonality = (characterId: number): CharacterPersonality =>
    [
        {
            characterId: CharacterId.Asura,
            traits: [
                "I'm confident in my own abilities and do what I can to instill confidence in others.",
                "I judge people by their actions, not their words."
            ],
            ideals: [
                "Independence. When people follow orders blindly they embrace a kind of tyranny."
            ],
            flaws: [
                "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me."
            ],
            bonds: [
                "A powerful person killed someone I love. Some day soon, I'll have my revenge."
            ],
            age: 22,
            eyes: "gold",
            hair: "silvery white",
            height: "1.84mts",
            weight: "81kg",
            skin: "reddish grey",
        },
        {
            characterId: CharacterId.Zilean,
            traits: [
                "",
                ""
            ],
            ideals: [
                ""
            ],
            flaws: [
                ""
            ],
            bonds: [
                ""
            ],
            age: 22,
            eyes: "gold",
            hair: "silvery white",
            height: "1.76mts",
            weight: "68kg",
            skin: "Blueish grey",
        }
    ].find(x => x.characterId === characterId)!;