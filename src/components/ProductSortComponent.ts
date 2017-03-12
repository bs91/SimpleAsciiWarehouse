import { module } from 'angular';
import * as $ from 'jquery';
import { IProductService } from "../interfaces/IProductService";
import { IProduct } from "../interfaces/IProduct";

'use strict';

export class ProductSortComponentController implements ng.IComponentController
{
    static ID: string = "ProductSortComponentController";

    static $inject = ["$scope", "ProductService"];
    constructor(private $scope: ng.IScope, 
        private ProductService: IProductService) {
       this.isLoading = true; 
    }

    public isLoading: boolean;
    public sortType: string;
    public selectedSort: string;
    public sortTypes: Array<String> = [
        "id",
        "size",
        "price"
    ];
    public sorted: boolean;
    public loadMoreProducts: Function;
    public showMoreProducts: Function;
    public showFinished: boolean;

    public changeSort: Function = () => {
        $(window).scrollTop(0);
        this.sorted = true;
        this.sortType = this.selectedSort;
        this.showFinished = false;
        this.$scope.$applyAsync(() => {
            this.loadMoreProducts().then(() => {
                this.showMoreProducts();
            });
        })
    };
    
}

export class ProductSortComponent implements ng.IComponentOptions 
{
    static ID: string = "productSort";
    public bindings: any;
    public controller: any;
    public template: string;
    public require: any;
    
    constructor() {
        this.bindings = {
            sortType: "=",
            sorted: "=",
            loadMoreProducts: "&",
            showMoreProducts: "&",
            showFinished: "="

        };
        this.controller = ProductSortComponentController;
        this.template = `
            <label>SortBy: </label>
            <select ng-init="$ctrl.selectedSort= $ctrl.sortTypes[0]" 
                ng-options="option for option in $ctrl.sortTypes" 
                ng-model="$ctrl.selectedSort"
                ng-change="$ctrl.changeSort()">
            </select>
            `;
    }
}
  