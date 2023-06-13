import { SavingThrow } from "../typings/savingThrow.d";
import { GetAttributeName, GetNumberString } from "../utils/common";

function SavingThrows({ savingThrows }: { savingThrows: SavingThrow[] }) {
    return <div className="card">
            <div className="card-body">
                <h6 className="text-center"><small>SAVING THROWS</small></h6>
                <table className="table savingthrow-table">
                    <tbody>
                        {savingThrows.map(x => 
                            <tr key={x.attribute}>
                                <td className="text-center">{x.hasProficiency ? <>&#9679;</> : <>&#9675;</>}</td>
                                <td className="text-end">{GetNumberString(x.value)}</td>
                                <td>{GetAttributeName(x.attribute).toUpperCase()}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>;
  }
  
export default SavingThrows;