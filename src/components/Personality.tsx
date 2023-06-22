import { Character } from "../typings/character.d";
import { Appearance } from "./Appearance";

export function Personality({ character }: { character: Character }) {
    const avatar = require('../files/asura.png');
    return <div>
        <hr className="my-5"/>
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
    </div>;
}