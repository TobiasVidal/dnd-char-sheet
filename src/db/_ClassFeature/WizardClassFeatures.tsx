import { AbilityScoreEnum, ModifierTargetEnum, ModifierTypeEnum } from "../../typings/abilityScore.d";
import { ClassEnum, ClassFeature, ClassFeatureDefault, ClassFeatureEnum } from "../../typings/class.d";

export const dbWizardClassFeatures: ClassFeature[] = [
    { 
        name: 'Spellcasting [Wizard]',
        feature: ClassFeatureEnum.WizardSpellcasting,
        level: 1,
        description: `<p>As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.</p>
        <h5>Spellbook</h5>
        <p>At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.</p>
        <p>The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library.</p>
        <p><strong>Copying a Spell into the Book.</strong> When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it.</p>
        <p>For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.</p>
        <p><strong>Replacing the Book.</strong> You can copy a spell from your own spellbook into another book-for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell.</p>
        <p>If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.</p>
        <p><strong><em>The Book's Appearance.</em></strong> Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.</p>
        <h5>Preparing and Casting Spells</h5>
        <p>The Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.</p>
        <p>You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.</p>
        <p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.</p>
        <h5>Spellcasting Ability</h5>        
        <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Intelligence modifier</p>
        <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Intelligence modifier</p>
        <h5>Ritual Casting</h5>
        <p>You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.</p>
        <h5>Spellcasting Focus</h5>
        <p>You can use an arcane focus as a spellcasting focus for your wizard spells.</p>
        `,
        url: 'https://dnd5e.wikidot.com/wizard',
    },
    { 
        name: 'Arcane Recovery',
        feature: ClassFeatureEnum.ArcaneRecovery,
        level: 1,
        description: `<p>You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.</p>`,
        url: 'http://dnd5e.wikidot.com/wizard#toc12',
    },
    { 
        name: 'Cantrip Formulas',
        feature: ClassFeatureEnum.CantripFormulas,
        level: 3,
        description: `<p>At 3rd level, you have scribed a set of arcane formulas in your spellbook that you can use to formulate a cantrip in your mind. Whenever you finish a long rest and consult those formulas in your spellbook, you can replace one wizard cantrip you know with another cantrip from the wizard spell list.</p>`,
        url: 'http://dnd5e.wikidot.com/wizard#toc14',
    },

    { 
        name: 'Chronal Shift',
        feature: ClassFeatureEnum.ChronalShift,
        level: 2,
        description: `<p>At 2nd level, you can magically exert limited control over the flow of time around a creature. As a reaction, after you or a creature you can see within 30 feet of you makes an attack roll, an ability check, or a saving throw, you can force the creature to reroll. You make this decision after you see whether the roll succeeds or fails. The target must use the result of the second roll.</p>
        <p>You can use this ability twice, and you regain any expended uses when you finish a long rest.</p>`,
        url: 'https://dnd5e.wikidot.com/wizard:chronurgy',
    },
    { 
        name: 'Temporal Awareness',
        feature: ClassFeatureEnum.TemporalAwareness,
        level: 2,
        description: `<p>Starting at 2nd level, you can add your Intelligence modifiers to your initiative rolls.</p>`,
        statModifiers: [{ 
            type: ModifierTypeEnum.AbilityScore,
            target: ModifierTargetEnum.Initiative,
            abilitySource: AbilityScoreEnum.Int,
        }],
        url: 'https://dnd5e.wikidot.com/wizard:chronurgy',
    },
    { 
        name: 'Momentary Stasis',
        feature: ClassFeatureEnum.MomentaryStasis,
        level: 6,
        description: `<p>When you reach 6th level, as an action, you can magically force a Large or smaller creature you can see within 60 feet of you to make a Constitution saving throw against your spell save DC. Unless the saving throw is a success, the creature is encased in a field of magical energy until the end of your next turn or until the creature takes any damage. While encased in this way, the creature is incapacitated and has a speed of 0.</p>
        <p>You can use this feature a number of times equal to your Intelligence modifier (a minimum of once). You regain all expended uses when you finish a long rest.</p>
        `,
        url: 'https://dnd5e.wikidot.com/wizard:chronurgy',
    },
    { 
        name: 'Arcane Abeyance',
        feature: ClassFeatureEnum.ArcaneAbeyance,
        level: 10,
        description: `<p>At 10th level, when you cast a spell using a spell slot of 4th level or lower, you can condense the spell's magic into a mote. The spell is frozen in time at the moment of casting and held within a gray bead for 1 hour. This bead is a Tiny object with AC 15 and 1 hit point, and it is immune to poison and psychic damage. When the duration ends, or if the bead is destroyed, it vanishes in aflash of light, and the spell is lost.</p>
        <p>A creature holding the bead can use its action to release the spell within, whereupon the bead disappears. The spell uses your spell attack bonus and save DC, and the spell treats the creature who released it as the caster for all other purposes.</p>
        <p>Once you create a bead with this feature, you can't do so again until you finish a short or long rest.</p>
        `,
        url: 'https://dnd5e.wikidot.com/wizard:chronurgy',
    },
    {   
        name: 'Convergent Future',
        feature: ClassFeatureEnum.ConvergentFuture,
        level: 14,
        description: `<p>Starting at 14th level, you can peer through possible futures and magically pull one of them into events around you, ensuring a particular outcome. When you or a creature you can see within 60 feet of you makes an attack roll, an ability check, or a saving throw, you can use your reaction to ignore the die roll and decide whether the number rolled is the minimum needed to succeed or one less than that number (your choice).</p>
        <p>When you use this feature, you gain one level of exhaustion. Only by finishing a long rest can you remove a level of exhaustion gained in this way.</p>`,
        url: 'https://dnd5e.wikidot.com/wizard:chronurgy',
    },
].map(x => ({ ...ClassFeatureDefault, ...x, class: ClassEnum.Wizard }));