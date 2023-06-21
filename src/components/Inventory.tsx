import { Character } from "../typings/character.d";

export function Inventory({ character }: { character: Character }) {
    return (<div>
        <div className="row p-2 m-4 money-row">
            <div className="col-4" title="gold">
                <span className="material-icons inline-icon gold mx-3">paid</span>
                {character.money?.gp}
            </div>
            <div className="col-4" title="silver">
                <span className="material-icons inline-icon silver mx-3">paid</span>
                {character.money?.sp}
            </div>
            <div className="col-4" title="copper">
                <span className="material-icons inline-icon copper mx-3">paid</span>
                {character.money?.cp}
            </div>
        </div>
        <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
                <button className="nav-link active" id="inventory-tab" data-bs-toggle="tab" data-bs-target="#inventory-list" type="button">
                    Inventory
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link" id="attacks-tab" data-bs-toggle="tab" data-bs-target="#attacks-list" type="button">
                    Attacks
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link" id="proficiencies-tab" data-bs-toggle="tab" data-bs-target="#proficiencies-list" type="button">
                    Proficiencies
                </button>
            </li>
        </ul>
        <div className="tab-content px-3 pt-2 bg-dark-light inventory-block">
            <div className="tab-pane fade show active" id="inventory-list">
                <table className="table">
                    <tbody>
                        {character.equipment.map(x => <tr key={x.equipment.equipmentEnum}>
                            <td className="text-center px-2">{x.count}</td>
                            <td className="px-2">
                                {x.isEquipped && <span className="inline-icon material-icons">
                                    pan_tool
                                </span>}
                                {x.isCarried && <span className="inline-icon material-icons">
                                    accessibility
                                </span>}
                                {x.inBackpack && <span className="inline-icon material-icons">
                                    backpack
                                </span>}
                            </td>
                            <td className="ps-2">{x.equipment.name}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <div className="tab-pane fade" id="attacks-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Atk</th>
                            <th>Damage</th>
                            <th>Type</th>
                            <th>Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        {character.attacks.map(x => <tr key={character.attacks.indexOf(x)}>
                            <td>{x.name}</td>
                            <td>+{x.attackBonus}</td>
                            <td>{x.damage}</td>
                            <td>{x.damageType}</td>
                            <td>{x.range}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <div className="tab-pane fade" id="proficiencies-list">
                <ul className="list-unstyled">
                    <li><strong>Weapons:</strong> {character.classes.find(x => x.startingClass)?.class.weaponProficiencies().join(", ")}</li>
                    <li><strong>Armor:</strong> {character.classes.find(x => x.startingClass)?.class.armorProficiencies().join(", ")}</li>  
                    <li><strong>Tools:</strong> -</li>
                    <li><strong>Languages:</strong> {character.race.languages.join(", ")}</li>
                    <li><strong>Traits:</strong> {character.race.traits.join(", ")}</li> 
                </ul>
            </div>
        </div>
    </div>)
}