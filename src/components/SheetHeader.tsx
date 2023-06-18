import { GetSubclassName } from "../service/ClassService";
import { Character } from "../typings/character.d";

export function SheetHeader({character}:{ character: Character}) {
    return <div className='row sheet-header mb-5'>
    <h1 className='col-5 character-name ps-4'>
      {character.name}
      <small className='text-secondary ms-2'>[{character.level()}]</small>
    </h1>
    <div className='col-7 header-character-info'>
      <div className="info-block">
        <p>{character.classes.map(x => <span key={character.classes.indexOf(x)}>
            {character.classes.indexOf(x) > 0 && ', '} 
            [{x.level}] {x.class.name()} <small className="text-secondary">{GetSubclassName(x.subclass)}</small>
            </span>)}
            <br/>
            <small>Class & Level</small>
        </p>
        <p className="mb-0">
            {character.race.displayName}
            {character.race.subtitle && <small className="text-secondary ms-2">{character.race.subtitle}</small>}
            <br/>
            <small>Race</small>
        </p>
      </div>
    </div>
  </div>
}