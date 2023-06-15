import { GetClassHitDie } from '../utils/common'

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

enum SubclassEnum {
    Hexblade,
    OathOfVengance,
}

type Class = {
    classEnum: ClassEnum,
    get name(): () => string,
    get hitDie(): () => number,
    get averageLevelupHealth(): () => number,
}

const ClassDefault: Class = {
    name: function () { return ClassEnum[this.classEnum]; },
    hitDie: function () { return GetClassHitDie(this.classEnum); },
    averageLevelupHealth: function () { return this.hitDie()/2 + 1; },
}

export { ClassEnum, Class, ClassDefault }