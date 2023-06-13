import { AttributeEnum } from "../typings/attribute.d";
import { CharacterSkill } from "../typings/character.d";
import { GetNumberString, GetSkillAttribute, GetSkillName } from "../utils/common";

function Skills({ Skills }: { Skills: CharacterSkill[] }) {
    return <div className="card">
            <div className="card-body">
                <h6 className="text-center"><small>SKILLS</small></h6>
                <table className="table skill-table">
                    <tbody>
                        {Skills.map(x => 
                            <tr key={x.skill}>
                                <td className="text-center">{x.hasProficiency ? <>&#9679;</> : <>&#9675;</>}</td>
                                <td className="text-end">{GetNumberString(x.value)}</td>
                                <td>{GetSkillName(x.skill)} ({AttributeEnum[GetSkillAttribute(x.skill)]})</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>;
  }
  
export default Skills;