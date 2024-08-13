import { ClassEnum, ClassFeature, ClassFeatureBaseDefault, ClassFeatureDefault, ClassFeatureEnum } from "../../typings/class.d";
import { SpellEnum } from "../../typings/spell.d";

export const dbClericClassFeatures: ClassFeature[] = [
    { 
        ...ClassFeatureDefault,
        name: 'Spellcasting [Cleric]',
        feature: ClassFeatureEnum.ClericSpellcasting,
        level: 1,
        description: `<p>As a conduit for divine power, you can cast cleric spells.</p>
        <h5>Spell Slots</h5>
        <p>You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.</p>
        <p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.</p>
        <h5>Spellcasting Ability</h5>        
        <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Wisdon modifier</p>
        <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Wisdom modifier</p>
        <h5>Ritual Casting</h5>
        <p>You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.</p>
        <h5>Spellcasting Focus</h5>
        <p>You can use a holy symbol as a spellcasting focus for your cleric spells.</p>
        `,
        url: 'http://dnd5e.wikidot.com/cleric:peace#toc1',
    },
    { 
        ...ClassFeatureDefault,
        name: 'Emboldening Bond',
        feature: ClassFeatureEnum.EmboldeningBond,
        level: 1,
        description: `<p>Starting at 1st level, you can forge an empowering bond among people who are at peace with one another. As an action, you choose a number of willing creatures within 30 feet of you (this can include yourself) equal to your proficiency bonus. You create a magical bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a d4 and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the d4 no more than once per turn.</p>
        <p>You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</p>`,
        url: 'http://dnd5e.wikidot.com/cleric:peace#toc1',
    },
    { 
        ...ClassFeatureDefault,
        name: 'Domain Spells',
        feature: ClassFeatureEnum.PeaceDomainSpells,
        optional: true,
        level: 1,
        spellsPrepared: true,
        description: `<p>Each domain has a list of spells-its domain spells that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.</p>
        <p>If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you.</p>`,
        tiers: [
            { ...ClassFeatureBaseDefault, level: 1, spells:[ SpellEnum.Heroism, SpellEnum.Sanctuary ] },
        ],
        url: 'http://dnd5e.wikidot.com/cleric:peace',
    },
    { 
        ...ClassFeatureDefault,
        name: 'Implement of Peace',
        feature: ClassFeatureEnum.ImplementOfPeace,
        optional: true,
        level: 1,
        description: `<p>When you choose this domain at 1st level, you gain proficiency in the Insight, Performance, or Persuasion skill (your choice).</p>`,
        url: 'http://dnd5e.wikidot.com/cleric:peace#toc0',
    }
].map(x => ({ ...x, class: ClassEnum.Cleric }));