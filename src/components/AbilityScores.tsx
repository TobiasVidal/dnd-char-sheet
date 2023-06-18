import { AbilityScore } from "../typings/abilityScore";
import AbilityScoreBox from "./AbilityScoreBox";

function AbilityScores({ abilityScores }: { abilityScores: AbilityScore[] }) {
    return <ul className="list-unstyled px-0">
        {abilityScores.map(x => <AbilityScoreBox key={x.abilityScoreEnum.toString()} {...x}/>)}
    </ul>;
  }
  
export default AbilityScores;