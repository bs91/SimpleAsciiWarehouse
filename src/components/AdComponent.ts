import { AdComponentController } from "../controllers/AdComponentController";

"use strict";

export class AdComponent implements ng.IComponentOptions 
{
    static ID: string = "ad";
    public bindings: any;
    public controller: any;
    public templateUrl: string;
    
    constructor() {
        this.bindings = {};
        this.controller = AdComponentController;
        this.templateUrl = "/templates/AdComponentTemplate.html";
    }
}
