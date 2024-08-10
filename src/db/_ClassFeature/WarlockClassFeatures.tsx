import { ClassEnum, ClassFeature, ClassFeatureDefault, ClassFeatureEnum } from "../../typings/class.d";

export const dbWarlokClassFeatures: ClassFeature[] = [
    {
        ...ClassFeatureDefault,
        level: 1,
        feature: ClassFeatureEnum.HexbladeCurse,
        name: 'Hexblade\'s Curse',
        description: `<p>Starting at 1st level, you gain the ability to place a baleful curse on someone. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. The curse ends early if the target dies, you die, or you are incapacitated. Until the curse ends, you gain the following benefits:</p>
        <ul>
        <li>You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus.</li>
        <li>Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the d20.</li>
        <li>If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier (minimum of 1 hit point).</li>
        </ul>
        <p>You can't use this feature again until you finish a short or long rest.`,
        url: 'http://dnd5e.wikidot.com/warlock:hexblade#toc1',
    },
    {
        ...ClassFeatureDefault,
        level: 1,
        feature: ClassFeatureEnum.HexWarrior,
        name: 'Hex Warrior',
        description: `<p>At 1st level, you acquire the training necessary to effectively arm yourself for battle. You gain proficiency with medium armor, shields, and martial weapons.</p>
        <p>The influence of your patron also allows you to mystically channel your will through a particular weapon. Whenever you finish a long rest, you can touch one weapon that you are proficient with and that lacks the two-handed property. When you attack with that weapon, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls. This benefit lasts until you finish a long rest. If you later gain the Pact of the Blade feature, this benefit extends to every pact weapon you conjure with that feature, no matter the weapon's type.</p>`,
        url: 'http://dnd5e.wikidot.com/warlock:hexblade#toc2',
    },
    {
        ...ClassFeatureDefault,
        level: 1,
        feature: ClassFeatureEnum.PactMagic,
        name: 'Pact Magic',
        description: `<p>Your arcane research and the magic bestowed on you by your patron have given you facility with spells.<p>
        <h5>Cantrips</h5>
        <p>You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.</p>
        <h5>Spell Slots</h5>
        <p>The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.</p>
        <p>For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.</p>
        <h5>Spells Known of 1st Level and Higher</h5>
        <p>At 1st level, you know two 1st-level spells of your choice from the warlock spell list.</p>
        <p>The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level or higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.</p>
        <p>Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.</p>
        <h5>Spellcasting Ability</h5>
        <p>Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.</p>
        <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Charisma modifier</p>
        <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Charisma modifier</p>
        <h5>Spellcasting Focus</h5>
        <p>You can use an arcane focus as a spellcasting focus for your warlock spells.`,
        url: 'http://dnd5e.wikidot.com/warlock#toc5',
    },
    {
        ...ClassFeatureDefault,
        feature: ClassFeatureEnum.AgonizingBlast,
        optional: true,
        name: 'Agonizing Blast',
        description: `<p>When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit.</p>`,
        url: 'http://dnd5e.wikidot.com/warlock#toc11',
    },
    {
        ...ClassFeatureDefault,
        feature: ClassFeatureEnum.EldritchMind,
        optional: true,
        name: 'Eldritch Mind',
        description: `<p>You have advantage on Constitution saving throws that you make to maintain your concentration on a spell.</p>`,
        url: 'http://dnd5e.wikidot.com/warlock#toc11',
    },
    {
        ...ClassFeatureDefault,
        optional: true,
        feature: ClassFeatureEnum.PactOfTheBlade,
        name: 'Pact Boon - Pact of the Blade',
        description: `<p>You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.</p>
<p>Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.</p>
<p>You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest.</p>
<p>You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.</p>
`,
        url: 'http://dnd5e.wikidot.com/warlock#toc12',
    },
].map(x => ({ ...x, class: ClassEnum.Warlock }));