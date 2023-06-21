import { Character } from "../typings/character.d";
import AcIniSpeedBox from "./AcIniSpeedBox";

function AcIniSpeed({ character }: { character: Character }) {
    return <div className="row pt-3">
        <div className="col-4">
          <AcIniSpeedBox text="AC" num={character.armorClass} />
        </div>
        <div className="col-4">
          <AcIniSpeedBox text="INITIATIVE" num={character.initiative} />  
        </div>
        <div className="col-4">
          <AcIniSpeedBox text="SPEED" num={character.speed} />
        </div>
    </div>;
  }
  
export default AcIniSpeed;