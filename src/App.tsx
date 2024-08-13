import { GetCharacterDisplay } from './service/CharacterService';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css';
import './App.css';
import SavingThrows from './components/SavingThrows';
import AbilityScores from './components/AbilityScores';
import AcIniSpeed from './components/AcIniSpeed';
import HitPoints from './components/HitPoints';
import Skills from './components/Skills';
import { SkillEnum } from './typings/skill.d';
import { Features } from './components/Features';
import { Spells } from './components/Spells';
import { Inventory } from './components/Inventory';
import { SheetHeader } from './components/SheetHeader';
import { Personality } from './components/Personality';
import { ProminentNumber } from './components/ProminentNumber';
import { useState } from 'react';

function App() {
  const [character] = useState(GetCharacterDisplay(2));
  
  return (
    <div className="App">
      <div className='sheet my-5'>
        <SheetHeader character={character} />
        <div className='row'>
          <div className='col-4'>
            <div className='row'>
              <div className='col-4 ability-scores-column'>
                <AbilityScores abilityScores={character.abilityScores} />
              </div>
              <div className='col-8 ps-4'>
                <ProminentNumber num={character.profBonus()} text="PROFICIENCY BONUS"/>
                <SavingThrows savingThrows={character.savingThrows}/>
                <Skills Skills={character.charSkills}/>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <ProminentNumber num={10 + (character.charSkills.find(x => x.skill === SkillEnum.Perception)?.value ?? 0)} text="PASSIVE PERCEPTION"/>
            <AcIniSpeed character={character} />
            <HitPoints hitPoints={character.healthMax} />
            <Inventory character={character} />
          </div>
          <div className='col-4'>
            <Features features={character.charFeatures} />
          </div>
        </div>
        <div>
           {character.charSpellcasting && <Spells spellcasting={character.charSpellcasting}></Spells>}
        </div>
        <Personality character={character} />
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