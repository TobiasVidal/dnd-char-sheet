export enum SpellEnum {
  Aid,
  ArmorOfAgathys,
  Bane,
  Bless,
  Blur,
  BrandingSmite,
  Ceremony,
  Command,
  CompelledDuel,
  CureWounds,
  Darkness,
  DetectEvilAndGood,
  DetectMagic,
  DetectPoisonAndDisease,
  DivineFavor,
  EldritchBlast,
  FindSteed,
  GentleRepose,
  Heroism,
  HoldPerson,
  HuntersMark,
  Invisibility,
  LesserRestoration,
  LocateObject,
  MagicWeapon,
  MinorIllusion,
  MistyStep,
  Prestidigitation,
  PrayerOfHealing,
  ProtectionFromEvilAndGood,
  ProtectionFromPoison,
  PurifyFoodAndDrink,
  SearingSmite,
  Shield,
  ShieldOfFaith,
  Suggestion,
  ThunderousSmite,
  WardingBond,
  WrathfilSmite,
  ZoneOfTruth,
}

type SpellDamage = {
  damageType?: string,
  damageAtCharacterLevel?: { [key: string]: string }
}

export type Spell = {
    spellEnum?: SpellEnum,
    name: string,
    description: string,
    range: string,
    components: string,
    material: string,
    duration: string,
    higherLevel?: string,
    ritual: boolean,
    concentration: boolean,
    castingTime: string,
    level: number,
    damage?: SpellDamage,
    classes?: ClassEnum[],
}

export type SpellSlot = {
  level: number,
  amount: number,
}