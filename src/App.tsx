import { GetCharacter } from './service/CharacterService';
import { Character } from './typings/character.d';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css';
import './App.css';
import SavingThrows from './components/SavingThrows';
import Attributes from './components/Attributes';
import AcIniSpeed from './components/AcIniSpeed';
import HitPoints from './components/HitPoints';
import Skills from './components/Skills';
import { SkillEnum } from './typings/skill.d';
import { Features } from './components/Features';
import { Spells } from './components/Spells';

function App() {
  const character:Character = GetCharacter();
  
  return (
    <div className="App">
      <div className='sheet my-5'>
        <div className='row'>
          <h1 className='col-6'>
            {character.name}
            <small className='text-secondary ms-2'>[{character.level()}]</small>
          </h1>
          <div className='col-6'>
            {character.classes.map(x => <p key={x.class.classEnum.toString()}>{`${x.class.name()} [${x.level}]`}</p>)}
          </div>
        </div>
        <div className='row'>
          <div className='col-4'>
            <div className='row'>
              <div className='col-4'>
                <Attributes attributes={character.attributes} />
              </div>
              <div className='col-8'>
                <p>+{character.profBonus()} PROFICIENCY BONUS</p>
                <SavingThrows savingThrows={character.savingThrows}/>
                <Skills Skills={character.skills}/>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <p>+{10 + (character.skills.find(x => x.skill === SkillEnum.Perception)?.value ?? 0)} PASSIVE PERCEPTION</p>
            <AcIniSpeed character={character} />
            <HitPoints hitPoints={character.healthMax} />
          </div>
          <div className='col-4'>
            <Features features={character.features} />
          </div>
        </div>
        <div>
          <Spells spells={character.spells} spellSlots={character.spellSlots}></Spells>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
Pendientes:
- AC calculado
- Sumar items a stats
- Health
- Input para current health
- Poder sumar/restar a tu current health

*/