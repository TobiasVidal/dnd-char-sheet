import { AbilityScoreEnum } from "../typings/abilityScore.d"
import { SpellEnum } from "../typings/spell.d";
import { ClassEnum } from "../typings/class.d";
import { SkillEnum } from "../typings/skill.d";
import { FeatEnum } from "../typings/feat.d";

export const GetNumberString = (num: number):string => (num >= 0 ? '+' : '') + num.toString();

export const ConvertToNumber = (value: string, defaultVal?: number): number => !isNaN(+value) ? +value : defaultVal ?? 0

export const GetAbilityScoreName = (attr: AbilityScoreEnum):string => {
    switch (attr) {
        case AbilityScoreEnum.Str:
            return 'Strength';
        case AbilityScoreEnum.Dex:
            return 'Dexterity';
        case AbilityScoreEnum.Con:
            return 'Constitution';
        case AbilityScoreEnum.Int:
            return 'Intelligence';
        case AbilityScoreEnum.Wis:
            return 'Wisdom';
        case AbilityScoreEnum.Cha:
            return 'Charisma';
        default: return '';
    }
}

export const GetSkillAbility = (skill: SkillEnum): AbilityScoreEnum => {
    switch (skill) {
        case SkillEnum.Athletics:
            return AbilityScoreEnum.Str;
        case SkillEnum.Acrobatics:
        case SkillEnum.SleightOfHand:
        case SkillEnum.Stealth:
            return AbilityScoreEnum.Dex;
        case SkillEnum.Arcana:
        case SkillEnum.History:
        case SkillEnum.Investigation:
        case SkillEnum.Nature:
        case SkillEnum.Religion:
            return AbilityScoreEnum.Int;
        case SkillEnum.AnimalHandling:
        case SkillEnum.Insight:
        case SkillEnum.Medicine:
        case SkillEnum.Perception:
        case SkillEnum.Survival:
            return AbilityScoreEnum.Wis;
        case SkillEnum.Deception:
        case SkillEnum.Intimidation:
        case SkillEnum.Performance:
        case SkillEnum.Persuasion:
            return AbilityScoreEnum.Cha;
        default : throw new Error('Invalid skill');
    }
}

export const GetSkillName = (skill: SkillEnum): string => {
    switch (skill) {
        case SkillEnum.AnimalHandling:
            return 'Animal Handling';
        case SkillEnum.SleightOfHand:
            return 'Sleight of Hand';
        default : return SkillEnum[skill];
    }
}

export const GetFeatName = (feat: FeatEnum): string => {
    switch (feat) {
        case FeatEnum.GreatWeaponMaster:
            return "Great Weapon Master";
        case FeatEnum.ElvenAccuracy:
            return "Elven Accuracy";
        default: return FeatEnum[feat];
    }
}

export const GetFeatDescription = (feat: FeatEnum): string => {
    switch (feat) {
        case FeatEnum.GreatWeaponMaster:
            return "You've learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits:"
                + "<br/>- On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action."
                + "<br/>- Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.";
        case FeatEnum.ElvenAccuracy:
            return "The accuracy of elves is legendary, especially that of elf archers and spellcasters. You have uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:"
                + "<br/>- Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20"
                + "<br/>- Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once.";
        case FeatEnum.Telekinetic:
            return `<p>You learn to move things with your mind, granting you the following benefits:</p>
            <ul>
                <li>Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.</li>
                <li>You learn the <em><a href="http://dnd5e.wikidot.com/spell:mage-hand">mage hand</a></em> cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible. If you already know this spell, its range increases by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat.</li>
                <li>As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward or away from you. A creature can willingly fail this save.</li>
            </ul>
            `;
        case FeatEnum.WarCaster:
            return `<p>You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits:</p>
            <ul>
                <li>You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage.</li>
                <li>You can perform the somatic components of spells even when you have weapons or a shield in one or both hands.</li>
                <li>When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.</li>
            </ul>
            `;
        case FeatEnum.Resilient:
            return `<p>Choose one ability score. You gain the following benefits:</p>
            <ul>
                <li>Increase the chosen ability score by 1, to a maximum of 20.</li>
                <li>You gain proficiency in saving throws using the chosen ability.</li>
            </ul>
            `;
        case FeatEnum.Lucky:
            return `
            <p>You have inexplicable luck that seems to kick in at just the right moment.</p>
            <p>You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw.</p>
            <p>You can also spend one luck point when an attack roll is made against you. Roll a d20 and then choose whether the attack uses the attacker's roll or yours.</p>
            <p>If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled.</p>
            <p>You regain your expended luck points when you finish a long rest.</p>
            `;
        default: return "";
    }
}

export const GetProfBonus = (level: number) => {
    switch (true) {
        case level <= 4: return 2;
        case level <= 8: return 3;
        case level <= 12: return 4;
        case level <= 16: return 5;
        default: return 6;
    }
}

export const GetSpellEnumArray = (): SpellEnum[] => Object.values(SpellEnum).filter(x => typeof x === 'number').map(x => x as SpellEnum);
export const GetSkillEnumArray = (): SkillEnum[] => Object.values(SkillEnum).filter(x => typeof x === 'number').map(x => x as SkillEnum);
export const GetAbilityScoreEnumArray = (): AbilityScoreEnum[] => Object.values(AbilityScoreEnum).filter(x => typeof x === 'number').map(x => x as AbilityScoreEnum);
export const GetClassEnumArray = (): ClassEnum[] => Object.values(ClassEnum).filter(x => typeof x === 'number').map(x => x as ClassEnum);
