import { CharacterAbilityScore } from "../typings/abilityScore";
import AbilityScoreBox from "./AbilityScoreBox";

function AbilityScores({ abilityScores }: { abilityScores: CharacterAbilityScore[] }) {
  return <ul className="list-unstyled px-0 d-flex flex-column justify-content-between py-3">
    {abilityScores.map(x => <AbilityScoreBox key={x.abilityScoreEnum.toString()} {...x} />)}
  </ul>;
}

export default AbilityScores;