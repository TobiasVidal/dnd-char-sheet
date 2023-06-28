import { useState } from "react";
import { ConvertToNumber } from "../utils/common";

function HitPoints({ hitPoints }: { hitPoints: number }) {
    enum HitPointType {
        Temporary,
        Current,
        Max,
    };

    const [log, setLog] = useState<{ modif: number, descr: string, type: HitPointType }[]>([]);
    const [description, setDescription] = useState('');
    const [modifierType, setModifierType] = useState(HitPointType.Current);
    const [modifier, setModifier] = useState(0);
    const [temporary, setTemporary] = useState(0);
    const [current, setCurrent] = useState(hitPoints);
    const [max, setMax] = useState(hitPoints);

    const hitPointTypeArray = [HitPointType.Temporary, HitPointType.Current, HitPointType.Max];

    const AddModifier = () => {
        if (!modifier || !description) { return; }
        setLog([
            ...log,
            { modif: modifier, descr: description, type: modifierType }
        ]);
        console.log(log);
        //Aca hacer la logica lel

        let modif = modifier;
        let newCurrent = current;
        let newTemp = temporary;
        let newMax = max;
        
        if (modif > 0) {
            switch (modifierType) {
                case HitPointType.Temporary:
                    newTemp += modif;
                    break;
                case HitPointType.Current:
                    newCurrent += modif;
                    break;
                    case HitPointType.Max:
                    newMax += modif;
                    newCurrent += modif;
                    break;
            }
        }
        else {
            if (modifierType === HitPointType.Max) {
                newMax += modif;
            }
            newTemp += modif;
            if (modifierType === HitPointType.Current && newTemp < 0) {
                newCurrent += newTemp;
            }
        }
        
        setTemporary(Math.max(newTemp, 0));
        setCurrent(Math.max(Math.min(newCurrent, newMax), 0));
        setMax(Math.max(newMax, 0));

        setModifier(0);
        setDescription('');
        setModifierType(HitPointType.Current);
    }


    return <div className="mt-4 hitpoints-container px-3">
        <p className="text-center"><b>Hitpoints</b></p>
        <div className="row text-center mb-2">
            <div className="col-2">
                <input className="form-control text-center px-1" value={modifier} onChange={e => setModifier(ConvertToNumber(e.target.value))} />
                <label><small>Modifier</small></label>
            </div>
            <div className="col-4">
                <input className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                <label><small>Description</small></label>
            </div>
            <div className="col-4">
                <select className="form-control" value={modifierType} onChange={e => setModifierType(ConvertToNumber(e.target.value) as HitPointType)}>
                    {hitPointTypeArray.map(x =>
                        <option key={x} value={x}>
                            {HitPointType[x]}
                        </option>
                    )}
                </select>
                <label><small>Type</small></label>
            </div>
            <div className="col-1 px-0">
                <button className="btn" onClick={AddModifier}>
                    <span className="material-icons inline-icon">
                        add
                    </span>
                </button>
            </div>
        </div>
        <div className="d-flex text-center pb-2">
            <div className="ps-4">
                <input className="form-control text-end" value={temporary} onChange={e => setTemporary(ConvertToNumber(e.target.value))} />
                <label className="hp-box-subtitle">Temp</label>
            </div>
            <div className="px-5">
                <input className="form-control text-end" value={current} onChange={e => setCurrent(ConvertToNumber(e.target.value))} />
                <label><small>Current</small></label>
            </div>
            <div className="pe-4">
                <input className="form-control text-end" value={max} onChange={e => setMax(ConvertToNumber(e.target.value))} />
                <label><small>Max</small></label>
            </div>
        </div>
    </div>
}

export default HitPoints;