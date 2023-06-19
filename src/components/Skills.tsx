import { AbilityScoreEnum } from "../typings/abilityScore.d";
import { CharacterSkill } from "../typings/character.d";
import { GetNumberString, GetSkillAbility, GetSkillName } from "../utils/common";

function Skills({ Skills }: { Skills: CharacterSkill[] }) {
    return <div className="card bg-dark-light">
            <div className="card-body">
                <h6 className="text-center"><small>SKILLS</small></h6>
                <table className="table skill-table">
                    <tbody>
                        {Skills.map(x => 
                            <tr key={x.skill}>
                                <td className="text-center">{x.hasProficiency ? <>&#9679;</> : <>&#9675;</>}</td>
                                <td className="text-end">{GetNumberString(x.value)}</td>
                                <td>{GetSkillName(x.skill)} ({AbilityScoreEnum[GetSkillAbility(x.skill)]})</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>;
  }
  
export default Skills;