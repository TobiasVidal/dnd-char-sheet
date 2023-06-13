import { CharacterFeature } from "../typings/character.d";

export function Features({ features }: { features: CharacterFeature[] }) {
    return (<div className="accordion" id="accordionPanelsStayOpenExample">
        {features.map(x => <div className="accordion-item" key={features.indexOf(x)}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#characterfeature-${features.indexOf(x)}`}>
                    {x.name}
                </button>
            </h2>
            <div id={`characterfeature-${features.indexOf(x)}`} className="accordion-collapse collapse">
                <div className="accordion-body" dangerouslySetInnerHTML={{ __html: x.description }}>
                </div>
            </div>
        </div>)}
    </div>
    );

    // return (<ul>
    //     {features.map(x => <li>
    //         {x.name}
    //     </li>)}
    // </ul>)
}