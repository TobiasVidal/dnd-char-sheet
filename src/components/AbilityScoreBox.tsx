import { CharacterAbilityScore } from "../typings/abilityScore.d";

function AbilityScoreBox(abilityScore: CharacterAbilityScore) {
    const modifier = abilityScore.modifier();
    return <li className="abilityscore-box card text-center bg-dark-light border-0">
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
  