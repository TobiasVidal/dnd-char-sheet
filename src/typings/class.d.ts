import { GetClassHitDie } from '../utils/common'

enum ClassEnum {
    Warlock,
    Paladin
}

enum SubclassEnum {
    Hexblade,
    OathOfVengance,
}

type Class = {
    class: ClassEnum,
    get name(): () => string,
    get hitDie(): () => number,
    get averageLevelupHealth(): () => number,
}

const ClassDefault: Class = {
    name: function () { return ClassEnum[this.class]; },
    hitDie: function () { return GetClassHitDie(this.class); },
    averageLevelupHealth: function () { return this.hitDie()/2 + 1; },
}

export { ClassEnum, Class, ClassDefault }