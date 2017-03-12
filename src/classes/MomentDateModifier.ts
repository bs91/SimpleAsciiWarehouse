import { IDateModifier } from "../interfaces/IDateModifier";
import * as moment from "moment";

'use strict';

export class MomentDateModifier implements IDateModifier 
{
    private format = "ddd MMM DD YYYY hh:mm:ss ZZ"; 
    constructor() {

    }
    
    stringToDate: Function = (date: string) => { return moment(date, this.format) };

    getCurrentDate: Function = () => { return moment() };

    add: Function = (date: Date, val: moment.DurationInputArg1, 
        interval: moment.unitOfTime.DurationConstructor) => {

        return moment(date).add(val, interval)
    }

    subtract: Function = (date: Date, val: moment.DurationInputArg1, 
        interval: moment.unitOfTime.DurationConstructor) => {

        return moment(date).subtract(val, interval)
    }

    isBefore: Function = (dateComparee: Date, dateComparer: Date) => { 

        return moment(dateComparee, this.format).isBefore(dateComparer) 
        
    };

    fromNow: Function = (date: Date) => { return moment(date, this.format).fromNow() };

}
