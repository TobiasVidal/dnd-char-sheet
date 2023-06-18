import { AbilityScore } from "../typings/abilityScore";

function AbilityScoreBox(abilityScore: AbilityScore) {
    const modifier = abilityScore.modifier();
    return <li className="attribute-box card text-center">
        <div className="card-header">
          <small>{abilityScore.name().toUpperCase()}</small>
        </div>
        <div className="card-body">
          <h2>{modifier > 0 ? "+" : null}{modifier}</h2>
          <span className="badge rounded-pill bg-light text-dark">{abilityScore.value}</span>
        </div>
    </li>;
  }
  
export default AbilityScoreBox;
  