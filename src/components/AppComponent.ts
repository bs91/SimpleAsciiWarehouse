import { AppComponentController } from "../controllers/AppComponentController";

"use strict";

export class AppComponent implements ng.IComponentOptions 
{
    static ID: string = "app";
    public bindings: any;
    public controller: any;
    public templateUrl: string;
    
    constructor() {
        this.bindings = {};
        this.controller = AppComponentController;
        this.templateUrl = "/templates/AppComponentTemplate.html";
    }
}
  