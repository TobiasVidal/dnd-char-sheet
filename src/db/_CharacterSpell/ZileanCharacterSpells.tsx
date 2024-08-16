import { CharacterSpell } from "../../typings/character.d";
import { ClassEnum } from "../../typings/class.d";
import { SpellEnum } from "../../typings/spell.d";
import { CharacterId } from "../dbCharacter";

export const ZileanCharacterSpells: CharacterSpell[] = [
    //Cleric
    ...[
        //Cantrips
        ...[
            { spellEnum: SpellEnum.Guidance },
            { spellEnum: SpellEnum.SacredFlame },
            { spellEnum: SpellEnum.TollTheDead },
        ].map(x => ({ ...x, prepared: true, })),
        //LVL 1
        ...[
            { spellEnum: SpellEnum.Bless },
            { spellEnum: SpellEnum.HealingWord },
            { spellEnum: SpellEnum.Heroism },
            { spellEnum: SpellEnum.Sanctuary },
        ].map(x => ({ ...x, prepared: true, })),
    ].map(x => ({ ...x, class: ClassEnum.Cleric })),
    //Wizard
    ...[
        //Cantrips
        ...[
            { spellEnum: SpellEnum.MageHand },
            { spellEnum: SpellEnum.MindSliver },
            { spellEnum: SpellEnum.MinorIllusion },
            { spellEnum: SpellEnum.ShapeWater },
            { spellEnum: SpellEnum.Prestidigitation },
        ].map(x => ({ ...x, prepared: true, })),
        //LVL 1
        ...[
            { spellEnum: SpellEnum.AbsorbElements },
            { spellEnum: SpellEnum.GiftOfAlacrity },
            { spellEnum: SpellEnum.SilveryBarbs },
            { spellEnum: SpellEnum.Shield },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            { spellEnum: SpellEnum.Alarm },
            { spellEnum: SpellEnum.DetectMagic },
            { spellEnum: SpellEnum.ComprehendLanguages },
            { spellEnum: SpellEnum.FindFamiliar },
            { spellEnum: SpellEnum.FeatherFall },
            { spellEnum: SpellEnum.FloatingDisk },
            { spellEnum: SpellEnum.Identify },
            { spellEnum: SpellEnum.IllusoryScript },
            { spellEnum: SpellEnum.MagicMissile },
            { spellEnum: SpellEnum.MagnifyGravity },
            { spellEnum: SpellEnum.UnseenServant },
        ],
        //LVL 2
        ...[
            { spellEnum: SpellEnum.MistyStep },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            { spellEnum: SpellEnum.Augury },
            { spellEnum: SpellEnum.ContinualFlame },
            { spellEnum: SpellEnum.EnhanceAbility },
            { spellEnum: SpellEnum.GentleRepose },
            { spellEnum: SpellEnum.Invisibility },
            { spellEnum: SpellEnum.ImmovableObject },
            { spellEnum: SpellEnum.JimsGlowingCoin },
            { spellEnum: SpellEnum.Knock },
            { spellEnum: SpellEnum.LocateObject },
            { spellEnum: SpellEnum.MagicMouth },
            { spellEnum: SpellEnum.RimesBindingIce },
            { spellEnum: SpellEnum.RopeTrick },
            { spellEnum: SpellEnum.Skywrite },
            { spellEnum: SpellEnum.Web },
            { spellEnum: SpellEnum.Wristpocket },
        ],
        //LVL 3
        ...[
            { spellEnum: SpellEnum.Fireball },
            { spellEnum: SpellEnum.HypnoticPattern },
            { spellEnum: SpellEnum.SleetStorm },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            { spellEnum: SpellEnum.BestowCurse },
            { spellEnum: SpellEnum.Clairvoyance },
            { spellEnum: SpellEnum.Counterspell },
            { spellEnum: SpellEnum.DispelMagic },
            { spellEnum: SpellEnum.Fly },
            { spellEnum: SpellEnum.FeignDeath },
            { spellEnum: SpellEnum.GlyphOfWarding },
            { spellEnum: SpellEnum.IntellectFortress },
            { spellEnum: SpellEnum.MagicCircle },
            { spellEnum: SpellEnum.PhantomSteed },
            { spellEnum: SpellEnum.ProtectionFromEnergy },
            { spellEnum: SpellEnum.RemoveCurse },
            { spellEnum: SpellEnum.SpeakWithDead },
            { spellEnum: SpellEnum.TinyHut },
            { spellEnum: SpellEnum.Tongues },
            { spellEnum: SpellEnum.WaterBreathing },
        ],
        //LVL 4
        ...[
            { spellEnum: SpellEnum.Polymorph },
            { spellEnum: SpellEnum.SickeningRadiance },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            { spellEnum: SpellEnum.ArcaneEye },
            { spellEnum: SpellEnum.Banishment },
            { spellEnum: SpellEnum.Divination },
            { spellEnum: SpellEnum.DimensionDoor },
            { spellEnum: SpellEnum.Fabricate },
            { spellEnum: SpellEnum.GreaterInvisibility },
            { spellEnum: SpellEnum.PrivateSanctum },
            { spellEnum: SpellEnum.ResilientSphere },
            { spellEnum: SpellEnum.SummonGreaterDemon },
            { spellEnum: SpellEnum.WallOfFire },
        ],
        //LVL 5
        ...[
            { spellEnum: SpellEnum.WallOfForce },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            //{ spellEnum: SpellEnum.SynapticStatic },
            { spellEnum: SpellEnum.AnimateObjects },
            { spellEnum: SpellEnum.ContactOtherPlane },
            { spellEnum: SpellEnum.Creation },
            { spellEnum: SpellEnum.DominatePerson },
            { spellEnum: SpellEnum.HoldMonster },
            { spellEnum: SpellEnum.PlanarBinding },
            { spellEnum: SpellEnum.Scrying },
            { spellEnum: SpellEnum.SkillEmpowerment },
            { spellEnum: SpellEnum.SynapticStatic },
            { spellEnum: SpellEnum.TelepathicBond },
            { spellEnum: SpellEnum.WallOfStone },
        ],
        //LVL 6
        ...[
            { spellEnum: SpellEnum.Contingency },
            { spellEnum: SpellEnum.Scatter },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            { spellEnum: SpellEnum.CreateHomunculus },
            { spellEnum: SpellEnum.Disintegrate },
            { spellEnum: SpellEnum.GlobeOfInvulnerability },
            { spellEnum: SpellEnum.InstantSummons },
            { spellEnum: SpellEnum.MagicJar },
            { spellEnum: SpellEnum.MentalPrison },
            { spellEnum: SpellEnum.TrueSeeing },
        ],
        //LVL 7
        ...[
            { spellEnum: SpellEnum.Forcecage },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            { spellEnum: SpellEnum.Simulacrum },
            { spellEnum: SpellEnum.Etherealness },
            { spellEnum: SpellEnum.MirageArcane },
            { spellEnum: SpellEnum.PlaneShift },
            { spellEnum: SpellEnum.Teleport },
        ],

    ].map(x => ({ ...x, class: ClassEnum.Wizard })),

].map(x => ({ prepared: false, ...x, characterId: CharacterId.Zilean }));