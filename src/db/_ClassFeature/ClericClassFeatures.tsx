import { ClassEnum, ClassFeature, ClassFeatureDefault } from "../../typings/class.d";

export const dbClericClassFeatures: ClassFeature[] = [
    { ...ClassFeatureDefault }
].map(x => ({ ...x, class: ClassEnum.Cleric }));