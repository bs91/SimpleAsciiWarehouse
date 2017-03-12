'use strict';

export class AppComponentController implements ng.IComponentController
{
    static ID: string = "AppComponentController";

    constructor() {

    }

    
}

export class AppComponent implements ng.IComponentOptions 
{
    static ID: string = "app";
    public bindings: any;
    public controller: any;
    public template: string;
    
    constructor() {
        this.bindings = {};
        this.controller = AppComponentController;
        this.template = `
        <header-component></header-component>
        <products></products>
        `
    }
}
  