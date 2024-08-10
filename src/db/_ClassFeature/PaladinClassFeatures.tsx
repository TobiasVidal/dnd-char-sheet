import { AbilityScoreEnum, ModifierTargetEnum, ModifierTypeEnum } from "../../typings/abilityScore.d";
import { ClassEnum, ClassFeature, ClassFeatureBaseDefault, ClassFeatureDefault, ClassFeatureEnum } from "../../typings/class.d";
import { SpellEnum } from "../../typings/spell.d";
import { GetAbilityScoreEnumArray } from "../../utils/common";

export const dbPaladinClassFeatures: ClassFeature[] = [
    {
        ...ClassFeatureDefault,
        name: 'Divine Sense',
        level: 1,
        feature: ClassFeatureEnum.DivineSense,
        description: `The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.
<br/><br/>You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.`,
        url: 'http://dnd5e.wikidot.com/paladin#toc4',
    },
    {
        ...ClassFeatureDefault,
        level: 1,
        feature: ClassFeatureEnum.LayOnHands,
        name: 'Lay on Hands',
        description: `Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.
        <br/><br/>
        As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.
        <br/><br/>
        Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.
        <br/><br/>
        This feature has no effect on undead and constructs.`,
        url: 'http://dnd5e.wikidot.com/paladin#toc5',
    },
    {
        ...ClassFeatureDefault,
        level: 2,
        feature: ClassFeatureEnum.PaladinSpellcasting,
        name: 'Spellcasting',
        description: `You have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.
        <br/><br/>
        You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.
        <br/><br/>
        You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.
        <br/><br/>
        <strong>Spell save DC</strong> = 8 + your proficiency bonus + your Charisma modifier
        <br/>
        <strong>Spell attack modifier</strong> = your proficiency bonus + your Charisma modifier
        <br/><br/>
        You can use a holy symbol as a spellcasting focus for your paladin spells.`,
        url: 'http://dnd5e.wikidot.com/paladin#toc7',
    },
    {
        ...ClassFeatureDefault,
        level: 2,
        feature: ClassFeatureEnum.DivineSmite,
        name: 'Divine Smite',
        description: `Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.`,
        url: 'http://dnd5e.wikidot.com/paladin#toc11',
    },
    {
        ...ClassFeatureDefault,
        level: 3,
        feature: ClassFeatureEnum.DivineHealth,
        name: 'Divine Health',
        description: `The divine magic flowing through you makes you immune to disease`,
        url: 'http://dnd5e.wikidot.com/paladin#toc12',
    },
    {
        ...ClassFeatureDefault,
        level: 3,
        feature: ClassFeatureEnum.SacredOath,
        name: 'Sacred Oath',
        description: `<h4>Oath Spells</h4>
        Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day.
        <br/><br/>
        If you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you.
        <br/><br/>
        <h4>Channel Divinity</h4>
        Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.
        <br/><br/>
        When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.
        <br/><br/>
        Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC.`,
        url: 'http://dnd5e.wikidot.com/paladin#toc13',
        tiers: [
            { ...ClassFeatureBaseDefault, level: 3, spells:[ SpellEnum.Bane, SpellEnum.HuntersMark ] },
            { ...ClassFeatureBaseDefault, level: 5, spells:[ SpellEnum.HoldPerson, SpellEnum.MistyStep ] },
            { ...ClassFeatureBaseDefault, level: 3, spells:[ SpellEnum.Bane, SpellEnum.HuntersMark ] },
        ]
    },
    {
        ...ClassFeatureDefault,
        level: 3,
        feature: ClassFeatureEnum.ChannelDivinityVengeance,
        name: 'Channel Divinity',
        description: `<p>you gain the following two Channel Divinity options.</p>
        <p><strong>Abjure Enemy.</strong> As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.</p>
        <p>On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature's speed is 0, and it can't benefit from any bonus to its speed.</p>
        <p>On a successful save, the creature's speed is halved for 1 minute or until the creature takes any damage.</p>
        <p><strong>Vow of Enmity.</strong> As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.</p>
        `,
        url: 'http://dnd5e.wikidot.com/paladin:vengeance#toc2',
    },
    {
        ...ClassFeatureDefault,
        level: 5,
        feature: ClassFeatureEnum.ExtraAttack,
        name: 'Extra Attack',
        description: `You can attack twice, instead of once, whenever you take the Attack action on your turn`,
        url: 'http://dnd5e.wikidot.com/paladin#toc19',
    },
    {
        ...ClassFeatureDefault,
        name: 'Aura of Protection',
        level: 6,
        description: `<strong>Aura of Protection</strong>
            <p>Starting at 6th level, whenever you or a friendly creature within 10 (30 if lvl 18) feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.</p>
        `,
        url: 'http://dnd5e.wikidot.com/paladin#toc20',
        modifiers: GetAbilityScoreEnumArray().map(x => ({ 
                type: ModifierTypeEnum.AbilityScore, 
                target: ModifierTargetEnum.SavingThrow, 
                abilityTarget: x,
                abilitySource: AbilityScoreEnum.Cha,
            })
        ),
    },
].map(x => ({ ...x, class: ClassEnum.Paladin }));