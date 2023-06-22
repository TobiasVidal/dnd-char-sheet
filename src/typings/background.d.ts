import { SkillEnum } from "./skill.d"

type Background = {
    name: string,
    descrption: string[],
    features: string[],
    toolProficiencies: string[],
    skillProficiencies: SkillEnum[], 
}