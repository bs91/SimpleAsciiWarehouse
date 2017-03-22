import { HeaderComponentController } from "../controllers/HeaderComponentController";

"use strict";

export class HeaderComponent implements ng.IComponentOptions 
{
    static ID: string = "headerComponent";
    public bindings: any;
    public controller: any;
    public templateUrl: string;
    
    constructor() {
        this.bindings = {};
        this.controller = HeaderComponentController;
        this.templateUrl = "/templates/HeaderComponentTemplate.html";
    }
}
  