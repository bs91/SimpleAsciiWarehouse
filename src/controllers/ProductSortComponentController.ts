import * as $ from 'jquery';

"use strict";

export class ProductSortComponentController implements ng.IComponentController
{
    static ID: string = "ProductSortComponentController";

    static $inject = ["$scope"];
    constructor(private $scope: ng.IScope) {
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

    public changeSort: Function = (): void => {
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