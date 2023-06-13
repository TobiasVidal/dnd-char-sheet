import { Character } from "../typings/character.d";

function AcIniSpeed({ character }: { character: Character }) {
    return <div className="row">
        <div className="col-4">AC {character.armorClass}</div>
        <div className="col-4">INI {character.initiative}</div>
        <div className="col-4">SPEED {character.speed}</div>
    </div>;
  }
  
export default AcIniSpeed;