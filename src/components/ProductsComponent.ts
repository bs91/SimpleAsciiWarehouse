import { ProductsComponentController } from "../controllers/ProductsComponentController";

"use strict";

export class ProductsComponent implements ng.IComponentOptions 
{
    static ID: string = "products";
    public bindings: any;
    public controller: any;
    public templateUrl: string;
    
    constructor() {
        this.bindings = {};
        this.controller = ProductsComponentController;
        this.templateUrl = "/templates/ProductsComponentTemplate.html";
    }
}
  