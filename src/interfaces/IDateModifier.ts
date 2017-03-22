"use strict";

export interface IDateModifier 
{
    stringToDate: Function;
    getCurrentDate: Function;
    add: Function;
    subtract: Function;
    isBefore: Function;
    fromNow: Function;
}