"use strict";

export let ID: string = "MonetaryFilter";
export let FilterFunction: Function = (): Function => {
    return (amount: number) => {
        return "$" + (amount/100).toFixed(2).toString()
    }
};