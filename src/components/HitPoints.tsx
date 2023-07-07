import { useState } from "react";
import { ConvertToNumber } from "../utils/common";

function HitPoints({ hitPoints }: { hitPoints: number }) {
    enum HitPointType {
        Temporary,
        Current,
        Max,
    };

    const [log, setLog] = useState<{ modif: number, descr: string, type: string }[]>([]);
    const [description, setDescription] = useState('');
    const [enableHitPointLog, setEnableHitPointLog] = useState(false);
    const [hitPointType, setHitPointType] = useState(HitPointType.Current);
    const [hitPointChange, setHitPointChange] = useState('');
    const [temporary, setTemporary] = useState(0);
    const [current, setCurrent] = useState(hitPoints);
    const [max, setMax] = useState(hitPoints);

    const hitPointTypeArray = [HitPointType.Temporary, HitPointType.Current, HitPointType.Max];

    const AddHitPoints = () => {
        if (!hitPointChange || !description) { return; }
        let modif = ConvertToNumber(hitPointChange, 0);
        let newCurrent = current;
        let newTemp = temporary;
        let newMax = max;

        setLog([
            ...log,
            { modif, descr: description, type: HitPointType[hitPointType] }
        ]);
        
        if (modif > 0) {
            switch (hitPointType) {
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
            if (hitPointType === HitPointType.Max) {
                newMax += modif;
            }
            newTemp += modif;
            if (hitPointType === HitPointType.Current && newTemp < 0) {
                newCurrent += newTemp;
            }
        }

        setTemporary(Math.max(newTemp, 0));
        setCurrent(Math.max(Math.min(newCurrent, newMax), 0));
        setMax(Math.max(newMax, 0));

        setHitPointChange('');
        setDescription('');
        setHitPointType(HitPointType.Current);
    }


    return <div className="mt-4 hitpoints-container px-3">
        <p className="text-center pt-1">
            <b className="has-pointer" onClick={() => setEnableHitPointLog(!enableHitPointLog)}>
                Hitpoints
                <span className="mx-2">
                    {!enableHitPointLog && <>+</>}
                    {enableHitPointLog && <>-</>}
                </span>
            </b>
        </p>
        {enableHitPointLog &&
            <div className="d-flex justify-content-around text-center mb-2">
                <div className="pt-2 has-pointer" onClick={() => console.log(log)}>
                    <span className="material-icons inline-icons icon-sm" title="log">
                        article
                    </span>
                </div>
                <div className="hp-change-amount">
                    <input className="form-control text-center px-1" value={hitPointChange} onChange={e => setHitPointChange(e.target.value)} />
                    <label><small>±Hp</small></label>
                </div>
                <div className="hp-change-source">
                    <input className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                    <label><small>Source</small></label>
                </div>
                <div className="hp-change-type">
                    <select className="form-control" value={hitPointType} onChange={e => setHitPointType(ConvertToNumber(e.target.value) as HitPointType)}>
                        {hitPointTypeArray.map(x =>
                            <option key={x} value={x}>
                                {HitPointType[x]}
                            </option>
                        )}
                    </select>
                    <label><small>Type</small></label>
                </div>
                <div>
                    <button className="btn btn-add-hitpoints px-1" onClick={AddHitPoints}>
                        <span className="material-icons inline-icon">
                            add
                        </span>
                    </button>
                </div>
            </div>
        }
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