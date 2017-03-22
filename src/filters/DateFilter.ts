import { IDateModifier } from "../interfaces/IDateModifier";
import { MomentDateModifier } from "../classes/MomentDateModifier";

"use strict";

export let ID: string = "DateFilter";
export let FilterFunction: Function = (): Function => {
    return (date: string): string => {

        let dateModifier: IDateModifier = new MomentDateModifier();
        let dateModifierDate: Date = dateModifier.stringToDate(date);

        if(dateModifier.isBefore(dateModifier.subtract(dateModifier.getCurrentDate(), 7, "days"), dateModifierDate)) {
            return dateModifier.fromNow(date);
        } else {
            return dateModifierDate.toString();
        }
        
    }
};