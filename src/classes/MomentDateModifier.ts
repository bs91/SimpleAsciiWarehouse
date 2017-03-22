import { IDateModifier } from "../interfaces/IDateModifier";
import * as moment from "moment";

"use strict";

export class MomentDateModifier implements IDateModifier 
{
    private format = "ddd MMM DD YYYY hh:mm:ss ZZ"; 
    constructor() {}
    
    stringToDate: Function = (date: string): Date => { return moment(date, this.format).toDate(); };

    getCurrentDate: Function = (): Date => { return moment().toDate(); };

    add: Function = (date: Date, val: moment.DurationInputArg1, 
        interval: moment.unitOfTime.DurationConstructor): Date => {

        return moment(date).add(val, interval).toDate();
    }

    subtract: Function = (date: Date, val: moment.DurationInputArg1, 
        interval: moment.unitOfTime.DurationConstructor): Date => {

        return moment(date).subtract(val, interval).toDate();
    }

    isBefore: Function = (dateComparee: Date, dateComparer: Date): boolean => { 
        return moment(dateComparee, this.format).isBefore(dateComparer);
    };

    fromNow: Function = (date: Date): string => { return moment(date, this.format).fromNow(); };

}
