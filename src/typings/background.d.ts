import { SkillEnum } from "./skill.d"

type Background = {
    name: string,
    descrption: string[],
    features: string[],
    languages: string[],
    toolProficiencies: string[],
    skillProficiencies: SkillEnum[], 
}