import { CharacterClass } from "../typings/character.d";
import { ClassDefault, ClassEnum, SubclassEnum } from "../typings/class.d";
import { SkillEnum } from "../typings/skill.d";
import { CharacterId } from "./dbCharacter";

export const dbCharacterClass: CharacterClass[] = [
    {
        characterId: CharacterId.Asura,
        class: { ...ClassDefault, classEnum: ClassEnum.Paladin },
        subclass: SubclassEnum.OathOfVengance,
        level: 6,
        skillProficiencies: [SkillEnum.Athletics, SkillEnum.Persuasion],
        startingClass: true,
    },
    {
        characterId: CharacterId.Asura,
        class: { ...ClassDefault, classEnum: ClassEnum.Warlock },
        subclass: SubclassEnum.Hexblade,
        level: 4,
        skillProficiencies: [],
        startingClass: false,
    },

    {
        characterId: CharacterId.Zilean,
        class: { ...ClassDefault, classEnum: ClassEnum.Cleric },
        subclass: SubclassEnum.PeaceDomain,
        level: 1,
        skillProficiencies: [],
        startingClass: false,
    },
    {
        characterId: CharacterId.Zilean,
        class: { ...ClassDefault, classEnum: ClassEnum.Wizard },
        subclass: SubclassEnum.Chronurgy,
        level: 13,
        skillProficiencies: [SkillEnum.Arcana, SkillEnum.Acrobatics],
        startingClass: true,
    },
];