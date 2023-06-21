import { SavingThrow } from "../typings/savingThrow.d";
import { GetAbilityScoreName, GetNumberString } from "../utils/common";

function SavingThrows({ savingThrows }: { savingThrows: SavingThrow[] }) {
    return <div className="card bg-dark-light mb-3">
            <div className="card-body">
                <h6 className="text-center mb-3"><small>SAVING THROWS</small></h6>
                <table className="table savingthrow-table">
                    <tbody>
                        {savingThrows.map(x => 
                            <tr key={x.ability}>
                                <td className="text-center">{x.hasProficiency ? <>&#9679;</> : <>&#9675;</>}</td>
                                <td className="text-center">{GetNumberString(x.value)}</td>
                                <td>{GetAbilityScoreName(x.ability).toUpperCase()}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>;
  }
  
export default SavingThrows;