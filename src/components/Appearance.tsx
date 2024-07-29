import { CharacterDisplay } from "../typings/character.d";

export function Appearance({ character }: { character: CharacterDisplay }) {
    return <div className="row p-2 mb-4 bg-dark-light appearance-container">
        <div className="col-4">
            <p>
                {character.age}
                <br />
                <small className="text-secondary">Age</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {character.height}
                <br />
                <small className="text-secondary">Height</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {character.weight}
                <br />
                <small className="text-secondary">Weight</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {character.eyes}
                <br />
                <small className="text-secondary">Eyes</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {character.hair}
                <br />
                <small className="text-secondary">Hair</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {character.skin}
                <br />
                <small className="text-secondary">Skin</small>
            </p>
        </div>
    </div>
}