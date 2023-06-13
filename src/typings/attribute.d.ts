import { GetAttributeName } from "../utils/common";

enum AttributeEnum {
    Str,
    Con,
    Dex,
    Int,
    Wis,
    Cha,
}

type Attribute = {
    attribute: AttributeEnum,
    value: number,
    get name():() => string,
    get modifier():() => number,
}

const AttributeDefault: Attribute = {
    modifier: function () { return Math.floor((this.value-10)/2); },
    name: function() { return GetAttributeName(this.attribute); },
}

export { Attribute, AttributeDefault, AttributeEnum };