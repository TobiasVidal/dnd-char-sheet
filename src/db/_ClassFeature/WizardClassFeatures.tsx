import { ClassEnum, ClassFeature, ClassFeatureDefault } from "../../typings/class.d";

export const dbWizardClassFeatures: ClassFeature[] = [
    { ...ClassFeatureDefault }
].map(x => ({ ...x, class: ClassEnum.Wizard }));