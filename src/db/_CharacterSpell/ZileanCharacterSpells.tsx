import { CharacterSpell } from "../../typings/character.d";
import { ClassEnum } from "../../typings/class.d";
import { SpellEnum } from "../../typings/spell.d";
import { CharacterId } from "../dbCharacter";

export const ZileanCharacterSpells: CharacterSpell[] = [
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
            { spellEnum: SpellEnum.SickeningRadiance },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            { spellEnum: SpellEnum.Invisibility }
        ],
        //LVL 3
        ...[
            { spellEnum: SpellEnum.Fireball },
            { spellEnum: SpellEnum.HypnoticPattern },
            { spellEnum: SpellEnum.SleetStorm },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            { spellEnum: SpellEnum.Counterspell },
            { spellEnum: SpellEnum.TinyHut },
        ],
        //LVL 4
        ...[
            { spellEnum: SpellEnum.Polymorph },
            //{ spellEnum: SpellEnum.SickeningRadiance },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            { spellEnum: SpellEnum.Divination },
        ],
        //LVL 5
        ...[
            { spellEnum: SpellEnum.WallOfForce },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            //{ spellEnum: SpellEnum.SynapticStatic },
            { spellEnum: SpellEnum.ContactOtherPlane },
        ],
        //LVL 6
        ...[
            { spellEnum: SpellEnum.Contingency },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            { spellEnum: SpellEnum.InstantSummons },
        ],
        //LVL 7
        ...[
            { spellEnum: SpellEnum.Forcecage },
        ].map(x => ({ ...x, prepared: true, })),
        ...[
            { spellEnum: SpellEnum.Simulacrum },
        ],

    ].map(x => ({ ...x, class: ClassEnum.Wizard })),

].map(x => ({ prepared: false, ...x, characterId: CharacterId.Zilean }));