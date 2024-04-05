import { MoneyLog } from "../typings/moneylog";
import { dbMoneyLogs } from "../db/dbMoneyLog";
import { Money } from "../typings/common";

export const GetAllMoneyLogs = (): MoneyLog[] => {
    return dbMoneyLogs.map(x => x as MoneyLog);
}

export const AddMoney = (m1: Money, m2: Money): Money => {
    const newAmount:Money = { 
        gp: m1.gp + m2.gp,
        sp: m1.sp + m2.sp,
        cp: m1.cp + m2.cp,
    };
    return newAmount;
}