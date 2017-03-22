"use strict";

export interface IApp 
{
    addController: Function;
    addService: Function;
    addDirective: Function;
    addComponent: Function;
    addFilter: Function;
    config?: Function;
    run?: Function;
}