import { MoneyLog } from "../../typings/moneylog";
import { CharacterId } from "../dbCharacter";

export const AsuraMoneyLog: MoneyLog[] = [
    {
        gp: 300, sp: 0, cp: 0,
        description: 'Starting gold'
    },
    {
        gp: 18, sp: 0, cp: 0,
        description: 'Gemas vendidas'
    },
    {
        gp: 125, sp: 0, cp: 0,
        description: 'Recompenza mision 0'
    },
    {
        gp: 75, sp: 0, cp: 0,
        description: 'Encontrados en cueva 0'
    },
    {
        gp: 2, sp: 0, cp: 0,
        description: 'Que toquen a astrid'
    },
    {
        gp: -35, sp: 0, cp: 0,
        description: 'Item tapar cama'
    },
    {
        gp: -20, sp: 0, cp: 0,
        description: 'Pajaro puede llevar hasta 5kg 300ft y volver'
    },
    {
        gp: -20, sp: 0, cp: 0,
        description: 'Caridad al mercader'
    },
    {
        gp: 10, sp: 0, cp: 0,
        description: 'Oro bandit camp'
    },
    {
        gp: -10, sp: 0, cp: 0,
        description: 'Costo salame y queso'
    },
    {
        gp: -70, sp: 0, cp: 0,
        description: 'Hoe+room'
    },
    {
        gp: 29, sp: 0, cp: 0,
        description: 'Pescados Agus'
    }
].map(x => ({ ...x, characterId: CharacterId.Asura }));