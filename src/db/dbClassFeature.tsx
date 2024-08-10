import { ClassFeature } from "../typings/class.d";
import { dbClericClassFeatures } from "./_ClassFeature/ClericClassFeatures";
import { dbPaladinClassFeatures } from "./_ClassFeature/PaladinClassFeatures";
import { dbWarlokClassFeatures } from "./_ClassFeature/WarlockClassFeatures";
import { dbWizardClassFeatures } from "./_ClassFeature/WizardClassFeatures";

export const dbClassFeature: ClassFeature[] = [
    ...dbClericClassFeatures,
    ...dbPaladinClassFeatures,
    ...dbWarlokClassFeatures,
    ...dbWizardClassFeatures,
];