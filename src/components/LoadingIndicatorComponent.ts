import { LoadingIndicatorComponentController } from "../controllers/LoadingIndicatorComponentController";

"use strict";

export class LoadingIndicatorComponent implements ng.IComponentOptions 
{
    static ID: string = "loadingIndicator";
    public bindings: any;
    public controller: any;
    public templateUrl: string;
    
    constructor() {
        this.bindings = {};
        this.controller = LoadingIndicatorComponentController;
        this.templateUrl = "/templates/LoadingIndicatorComponentTemplate.html";
    }
}
  