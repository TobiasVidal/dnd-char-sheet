import { Class, ClassDefault, ClassEnum } from "../typings/class.d";

const GetClass = (classEnum: ClassEnum):Class => {
    return {
        ...ClassDefault,
        class: classEnum,
    }
}

export { GetClass };