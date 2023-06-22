import { CharacterSpellcasting } from "../typings/character.d";
import { SpellSlotsBox } from "./SpellSlotsBox";

export function Spells({ spellcasting }: { spellcasting: CharacterSpellcasting }) {
    const { spells, slots, saveDc, attackModifier } = spellcasting;
    const spellLevels: number[] = [...new Set(spells.map(x => x.spell.level))]
    return (
    <div>
        <hr className="my-5"/>
        <div className="row">
            <div className="col-9">
                <h2 className="h1 d-flex align-items-center mb-4">Spells</h2>
                <ul className="nav nav-tabs" id="spell-list-tabs" role="tablist">
                    {spellLevels.map(x =>
                        <li className="nav-item" key={x}>
                            <button className={`nav-link ${spellLevels[0] === x ? 'active' : ''}`} id={`spells${x}-tab`} data-bs-toggle="tab" data-bs-target={`#spells${x}`} type="button">
                                {x === 0 ? 'Cantrips' : ('Level ' + x)}
                            </button>
                        </li>
                    )}
                </ul>
                <div className="tab-content" id="spell-list-content">
                    {spellLevels.map(x =>
                        <div key={x} className={`accordion tab-pane fade ${spellLevels[0] === x ? 'show active' : ''}`} id={`spells${x}`}>
                            {spells.filter(y => y.spell.level === x).map(y =>
                                <div className="accordion-item bg-dark-light" key={spells.indexOf(y)}>
                                    <div className="accordion-header row accordion-button collapsed" data-bs-toggle="collapse" data-bs-target={`#spell-${spells.indexOf(y)}`}>
                                        <div className="col-3">
                                            <span className="inline-icon material-icons me-2">
                                                bookmark{y.prepared ? '' : "_border"}
                                            </span>
                                            {y.spell.name}
                                        </div>
                                        <div className="col-2">
                                            {y.spell.castingTime}
                                        </div>
                                        <div className="col-2">
                                            {y.spell.range}
                                        </div>
                                        <div className="col-2">
                                            {y.spell.duration}
                                        </div>
                                        <div className="col-2">
                                            {y.spell.components}
                                        </div>
                                    </div>
                                    <div id={`spell-${spells.indexOf(y)}`} className="accordion-collapse collapse">
                                        <div className="accordion-body bg-dark-light">
                                            <p dangerouslySetInnerHTML={{__html:y.spell.description}}></p>
                                            {y.spell.higherLevel && <p><strong>At Higher Levels:</strong> {y.spell.higherLevel}</p>}
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    )}
                </div>
            </div>
            <div className="col-3">
                <SpellSlotsBox slots={slots} dc={saveDc} attack={attackModifier} />
            </div>
        </div>
    </div>)
}