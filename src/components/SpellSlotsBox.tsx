import { SpellSlot } from "../typings/spell.d";

export function SpellSlotsBox({slots, dc, attack}: {slots: SpellSlot[], dc:number, attack: number}) {
    return <div className="spellslots-container p-3 bg-dark-light">
    <div className="row mb-3">
        <div className="col-6 text-center spell-dc-box">
            <h6 className="themetext-secondary">DC</h6>
            <h2>{dc}</h2>
        </div>
        <div className="col-6 text-center">
            <h6 className="themetext-secondary">ATTACK</h6>
            <h2>{attack}</h2>
        </div>
    </div>
    <h4 className="text-center themetext-secondary pt-3">SPELL SLOTS</h4>
    <table className="table spellslots-table mb-0">
        <tbody>
            <tr>
                <td className="text-center">Level</td>
                {slots.filter(x => x.amount > 0).map((x, i) => 
                <td className="text-center" key={i}>
                    {x.level}
                </td>)}
            </tr>
            <tr>
                <td className="text-center">Slots</td>
                {slots.filter(x => x.amount > 0).map((x, i) => 
                <td className="text-center" key={i}>
                    {x.amount}
                </td>)}
            </tr>
            <tr>
                <td className="text-center">Used</td>
                {slots.filter(x => x.amount > 0).map((x, i) => 
                <td className="text-center" key={i}>
                    <input className="text-center spellslot-used"/>
                </td>)}
            </tr>
        </tbody>
    </table>
</div>;
}