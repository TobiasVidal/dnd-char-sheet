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
        <p>{character.charClasses.map(x => <span key={character.charClasses.indexOf(x)}>
            {character.charClasses.indexOf(x) > 0 && ', '} 
            [{x.level}] {x.class.name()} <small className="themetext-secondary">{GetSubclassName(x.subclass)}</small>
            </span>)}
            <br/>
            <small className="text-secondary">Class & Level</small>
        </p>
        <p className="mb-0">
            {character.charRace.displayName}
            {character.charRace.subtitle && <small className="themetext-secondary ms-2">{character.charRace.subtitle}</small>}
            <br/>
            <small className="text-secondary">Race</small>
        </p>
      </div>
    </div>
  </div>
}