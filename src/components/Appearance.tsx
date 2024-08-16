import { CharacterDisplay } from "../typings/character.d";

export function Appearance({ character }: { character: CharacterDisplay }) {
    return <div className="row p-2 mb-4 bg-dark-light appearance-container">
        <div className="col-4">
            <p>
                {character.age}
                <br />
                <small className="themetext-faded">Age</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {character.height}
                <br />
                <small className="themetext-faded">Height</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {character.weight}
                <br />
                <small className="themetext-faded">Weight</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {character.eyes}
                <br />
                <small className="themetext-faded">Eyes</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {character.hair}
                <br />
                <small className="themetext-faded">Hair</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {character.skin}
                <br />
                <small className="themetext-faded">Skin</small>
            </p>
        </div>
    </div>
}