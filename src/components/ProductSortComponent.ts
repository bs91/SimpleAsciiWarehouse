import { ProductSortComponentController } from "../controllers/ProductSortComponentController";

"use strict";

export class ProductSortComponent implements ng.IComponentOptions 
{
    static ID: string = "productSort";
    public bindings: any;
    public controller: any;
    public templateUrl: string;
    
    constructor() {
        this.bindings = {
            sortType: "=",
            sorted: "=",
            loadMoreProducts: "&",
            showMoreProducts: "&",
            showFinished: "="
        };
        this.controller = ProductSortComponentController;
        this.templateUrl = "/templates/ProductSortComponentTemplate.html";
    }
}
  