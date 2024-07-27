import { GetClassArmorProficiencies, GetClassHitDie, GetClassSpellcastingAbility, GetClassWeaponProficiencies } from '../service/ClassService'
import { AbilityScoreEnum } from './abilityScore.d';

enum ClassEnum {
    Artificer,
    Barbarian,
    Bard,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Sorcerer,
    Warlock,
    Wizard,
}

export enum SubclassEnum {
    Hexblade,
    OathOfVengance,
    PeaceDomain,
    Chronurgy,
}

type Class = {
    classEnum: ClassEnum,
    get name(): () => string,
    get hitDie(): () => number,
    get weaponProficiencies(): () => string[],
    get armorProficiencies(): () => string[],
    get averageLevelupHealth(): () => number,
    get spellcastingAbility(): () => AbilityScoreEnum | undefined,
}

const ClassDefault: Class = {
    name: function () { return ClassEnum[this.classEnum]; },
    hitDie: function () { return GetClassHitDie(this.classEnum); },
    averageLevelupHealth: function () { return this.hitDie()/2 + 1; },
    spellcastingAbility: function () { return GetClassSpellcastingAbility(this.classEnum); },
    weaponProficiencies: function () { return GetClassWeaponProficiencies(this.classEnum); },
    armorProficiencies: function () { return GetClassArmorProficiencies(this.classEnum); },
}

export { ClassEnum, Class, ClassDefault }