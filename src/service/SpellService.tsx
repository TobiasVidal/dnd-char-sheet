import { dbSpells } from "../db/dbSpells";
import { ClassEnum } from "../typings/class.d";
import { Spell, SpellEnum } from "../typings/spell.d";
import { GetClassEnumArray, GetSpellEnumArray } from "../utils/common";

export const GetSpell = (spellEnum: SpellEnum): Spell => {
    const result = GetAllSpells().find(x => x.spellEnum === spellEnum);
    if (result === undefined) { throw new Error('Spell does not exist: ' + SpellEnum[spellEnum]); }
    return result;
}

export const GetAllSpells = (): Spell[] => {
    return dbSpells.map(x => ({
        spellEnum: GetSpellEnumByDbIndex(x.index),
        name: x.name,
        description: x.desc.join('<br/>'),
        higherLevel: x.higher_level?.join('<br/>'),
        range: x.range,
        components: x.components.join(', '),
        material: x.material ?? '',
        duration: x.duration,
        ritual: x.ritual,
        concentration: x.concentration,
        castingTime: x.casting_time,
        level: x.level,
        damage: {
            damageType: x.damage?.damage_type?.name,
            damageAtCharacterLevel: x.damage?.damage_at_character_level
        },
        classes: x.classes?.map(x => GetClassEnumArray().find(y => ClassEnum[y] === x.name)),
    }));
}

export const GetSpellEnumByDbIndex = (index: string): SpellEnum | undefined => {
    return GetSpellEnumArray().find(x => GetDbSpellIndex(x) === index);
}
const GetDbSpellIndex = (spellEnum: SpellEnum): string => {
    const camelToDash = (str: string): string => str.replace(/([A-Z])/g, (match, p1) => `-${p1.toLowerCase()}`).substring(1);
    switch (spellEnum) {
        default: return camelToDash(SpellEnum[spellEnum]);
        case SpellEnum.AbsorbElements: return 'absorb-elements';
        case SpellEnum.ArmorOfAgathys: return 'armor-of-agathys';
        case SpellEnum.BrandingSmite: return 'branding-smite';
        case SpellEnum.CompelledDuel: return 'compelled-duel';
        case SpellEnum.ComprehendLanguages: return 'comprehend-languages';
        case SpellEnum.CureWounds: return 'cure-wounds';
        case SpellEnum.DetectEvilAndGood: return 'detect-evil-and-good';
        case SpellEnum.DetectMagic: return 'detect-magic';
        case SpellEnum.DetectPoisonAndDisease: return 'detect-poison-and-disease';
        case SpellEnum.DivineFavor: return 'divine-favor';
        case SpellEnum.EldritchBlast: return 'eldritch-blast';
        case SpellEnum.FeatherFall: return 'feather-fall';
        case SpellEnum.FindSteed: return 'find-steed';
        case SpellEnum.FindFamiliar: return 'find-familiar';
        case SpellEnum.FloatingDisk: return 'floating-disk';
        case SpellEnum.GentleRepose: return 'gentle-repose';
        case SpellEnum.GiftOfAlacrity: return 'gift-of-alacrity';
        case SpellEnum.HuntersMark: return 'hunters-mark';
        case SpellEnum.HoldPerson: return 'hold-person';
        case SpellEnum.HypnoticPattern: return 'hypnotic-pattern';
        case SpellEnum.Identify: return 'identify';
        case SpellEnum.IllusoryScript: return 'illusory-script';
        case SpellEnum.LesserRestoration: return 'lesser-restoration';
        case SpellEnum.LocateObject: return 'locate-object';
        case SpellEnum.MagicWeapon: return 'magic-weapon';
        case SpellEnum.MagicMissile: return 'magic-missile';
        case SpellEnum.MageHand: return 'mage-hand';
        case SpellEnum.MagnifyGravity: return 'magnify-gravity';
        case SpellEnum.MindSliver: return 'mind-sliver';
        case SpellEnum.MinorIllusion: return 'minor-illusion';
        case SpellEnum.MistyStep: return 'misty-step';
        case SpellEnum.PrayerOfHealing: return 'prayer-of-healing';
        case SpellEnum.ProtectionFromEvilAndGood: return 'protection-from-evil-and-good';
        case SpellEnum.ProtectionFromPoison: return 'protection-from-poison';
        case SpellEnum.PurifyFoodAndDrink: return 'purify-food-and-drink';
        case SpellEnum.SearingSmite: return 'searing-smite';
        case SpellEnum.ShapeWater: return 'shape-water';
        case SpellEnum.SleetStorm: return 'sleet-storm';
        case SpellEnum.ShieldOfFaith: return 'shield-of-faith';
        case SpellEnum.ThunderousSmite: return 'thunderous-smite';
        case SpellEnum.UnseenServant: return 'unseen-servant';
        case SpellEnum.WardingBond: return 'warding-bond';
        case SpellEnum.WrathfilSmite: return 'wrathful-smite';
        case SpellEnum.ZoneOfTruth: return 'zone-of-truth';
    }
}
