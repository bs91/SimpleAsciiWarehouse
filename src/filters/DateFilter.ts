import { IDateModifier } from "../interfaces/IDateModifier";
import { MomentDateModifier } from "../classes/MomentDateModifier";

'use strict';

export let ID: string = "DateFilter";
export let FilterFunction: Function = () => {
    return (date: string) => {

        let moment: IDateModifier = new MomentDateModifier();
        let momentDate: Date = moment.stringToDate(date);

        if(moment.isBefore(moment.subtract(moment.getCurrentDate(), 7, 'days'), momentDate)) {
            return moment.fromNow(date);
        } else {
            return momentDate;
        }
        
    }
};