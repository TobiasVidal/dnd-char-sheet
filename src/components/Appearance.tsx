import { CharacterPersonality } from "../typings/character.d";

export function Appearance({ appearance }: { appearance: CharacterPersonality }) {
    return <div className="row p-2 mb-4 bg-dark-light appearance-container">
        <div className="col-4">
            <p>
                {appearance.age}
                <br />
                <small className="text-secondary">Age</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {appearance.height}
                <br />
                <small className="text-secondary">Height</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {appearance.weight}
                <br />
                <small className="text-secondary">Weight</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {appearance.eyes}
                <br />
                <small className="text-secondary">Eyes</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {appearance.hair}
                <br />
                <small className="text-secondary">Hair</small>
            </p>
        </div>
        <div className="col-4">
            <p>
                {appearance.skin}
                <br />
                <small className="text-secondary">Skin</small>
            </p>
        </div>
    </div>
}