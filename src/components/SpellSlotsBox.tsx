import { useState } from "react";
import { SpellSlot } from "../typings/spell.d";
import { SpellSave } from "../typings/character";

export function SpellSlotsBox({ slots, saves }: { slots: SpellSlot[], saves: SpellSave[] }) {
    const [usableSpellSlots] = useState(slots.filter(x => x.amount > 0).map(x => x));
    const [remainingSpellSlots, setRemainingSpellSlots] = useState(usableSpellSlots.map(x => x));

    const RemainingSpellSlotsOnChange = (level: number, value: string) => UpdateRemainingSpellSlots(level, !isNaN(+value) ? +value : 0);

    const UpdateRemainingSpellSlots = (level: number, newAmount: number) => {
        if (newAmount < 0) { return; }
        setRemainingSpellSlots(remainingSpellSlots.map(x => ({
            ...x,
            amount: (x.level === level ? newAmount : x.amount),
        })));
    }

    return <div className="spellslots-container p-3 bg-dark-light">
        {saves.map((x, i) => <div key={i}>
            <p className="text-center mb-1 text-secondary">{x.classes.reduce((str, className) => str + ', ' + className)}</p>
            <div className="row mb-3">
                <div className="col-6 text-center spell-dc-box">
                    <h6 className="themetext-secondary">DC</h6>
                    <h2>{x.saveDc}</h2>
                </div>
                <div className="col-6 text-center">
                    <h6 className="themetext-secondary">ATTACK</h6>
                    <h2>{x.attackModifier}</h2>
                </div>
            </div>
        </div>)}

        <h4 className="text-center themetext-secondary pt-3">SPELL SLOTS</h4>
        <table className="table spellslots-table mb-0">
            <tbody>
                <tr>
                    <td className="text-center">Level</td>
                    {usableSpellSlots.map((x, i) =>
                        <td className="text-center" key={i}>
                            {x.level}
                        </td>)}
                </tr>
                <tr>
                    <td className="text-center">Slots</td>
                    {usableSpellSlots.map((x, i) =>
                        <td className="text-center" key={i}>
                            {x.amount}
                        </td>)}
                </tr>
                <tr>
                    <td className="text-center">Current</td>
                    {remainingSpellSlots.map((x, i) =>
                        <td className="text-center" key={i}>
                            <button type="button" className="btn btn-alter-spellslots" onClick={() => UpdateRemainingSpellSlots(x.level, x.amount - 1)}>
                                <span className="material-icons inline-icon icon-sm">
                                    remove
                                </span>
                            </button>
                            <input className="text-center spellslot-used" value={x.amount || 0} onChange={e => RemainingSpellSlotsOnChange(x.level, e.target.value)} />
                            <button type="button" className="btn btn-alter-spellslots" onClick={() => UpdateRemainingSpellSlots(x.level, x.amount + 1)}>
                                <span className="material-icons inline-icon icon-sm">
                                    add
                                </span>
                            </button>
                        </td>)}
                </tr>
            </tbody>
        </table>
    </div>;
}