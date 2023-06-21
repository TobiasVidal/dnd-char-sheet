import { Character } from "../typings/character.d";

export function Personality({character}:{character:Character}) {
    const avatar = require('../files/asura.png'); 
    return <div>
        <div className="row mt-5">
            <div className="col-4">
                <img className="character-avatar" src={avatar} alt="avatar"/>
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col-6">
                        <h4>Traits</h4>
                        {character.personality.traits.map((x, i) => <p key={i}>{x}</p>)}
                    </div>
                    <div className="col-6">
                        <h4>Ideals</h4>
                        {character.personality.ideals.map((x, i) => <p key={i}>{x}</p>)}
                    </div>
                    <div className="col-6">
                        <h4>Bonds</h4>
                        {character.personality.bonds.map((x, i) => <p key={i}>{x}</p>)}
                    </div>
                    <div className="col-6">
                        <h4>Flaws</h4>
                        {character.personality.flaws.map((x, i) => <p key={i}>{x}</p>)}
                    </div>
                    <div className="col-4">
                        <p>
                            {character.personality.age}
                            <br />
                            <small className="text-secondary">Age</small>
                        </p>
                    </div>
                    <div className="col-4">
                        <p>
                            {character.personality.height}
                            <br />
                            <small className="text-secondary">Height</small>
                        </p>
                    </div>
                    <div className="col-4">
                        <p>
                            {character.personality.weight}
                            <br />
                            <small className="text-secondary">Weight</small>
                        </p>
                    </div>
                    <div className="col-4">
                        <p>
                            {character.personality.eyes}
                            <br />
                            <small className="text-secondary">Eyes</small>
                        </p>
                    </div>
                    <div className="col-4">
                        <p>
                            {character.personality.hair}
                            <br />
                            <small className="text-secondary">Hair</small>
                        </p>
                    </div>
                    <div className="col-4">
                        <p>
                            {character.personality.skin}
                            <br />
                            <small className="text-secondary">Skin</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}