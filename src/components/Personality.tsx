import { Character } from "../typings/character.d";
import { Appearance } from "./Appearance";

export function Personality({ character }: { character: Character }) {
    const avatar = require('../files/asura.png');
    return <div>
        <hr className="my-5" />
        <div className="row mt-5">
            <div className="col-4">
                <img className="character-avatar" src={avatar} alt="avatar" />
            </div>
            <div className="col-8 px-4">
                <Appearance appearance={character.personality} />
                <div className="row mb-4">
                    <div className="col-6 ps-0">
                        <div className="bg-dark-light p-3 personality-box">
                            <h4 className="themetext-secondary">Traits</h4>
                            {character.personality.traits.map((x, i) => <p key={i}>{x}</p>)}
                        </div>
                    </div>
                    <div className="col-6 pe-0">
                        <div className="bg-dark-light p-3 personality-box">
                            <h4 className="themetext-secondary">Ideals</h4>
                            {character.personality.ideals.map((x, i) => <p key={i}>{x}</p>)}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 ps-0">
                        <div className="bg-dark-light p-3 personality-box">
                            <h4 className="themetext-secondary">Bonds</h4>
                            {character.personality.bonds.map((x, i) => <p key={i}>{x}</p>)}
                        </div>
                    </div>
                    <div className="col-6 pe-0">
                        <div className="bg-dark-light p-3 personality-box">
                            <h4 className="themetext-secondary">Flaws</h4>
                            {character.personality.flaws.map((x, i) => <p key={i}>{x}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <button className='nav-link active' id='backstory-tab' data-bs-toggle="tab" data-bs-target='#backstory-content' type="button">
                        Backstory
                    </button>
                </li>
                <li className="nav-item">
                    <button className='nav-link' id='features-tab' data-bs-toggle="tab" data-bs-target='#features-content' type="button">
                        Features
                    </button>
                </li>
            </ul>
            <div className="tab-content personality-content bg-dark-light">
                <div className='accordion tab-pane fade show active p-5' id='backstory-content'>
                    {character.background.descrption.map((x, i) => <p className="text-large" key={i}>
                        &emsp;&emsp;{x}
                    </p>)}
                </div>
                <div className='accordion tab-pane fade p-5' id='features-content'>
                    {character.background.features.map((x, i) => <p className="text-large" key={i} dangerouslySetInnerHTML={{__html:x}}></p>)}
                </div>
            </div>
        </div>
    </div>;
}