import * as $ from 'jquery';
import { IProduct } from "../interfaces/IProduct";
import { IProductService } from "../interfaces/IProductService";

"use strict";

export class ProductsComponentController implements ng.IComponentController
{
    static ID: string = "ProductsComponentController";
    static $inject = ['$scope', 'ProductService']

    constructor(private $scope: ng.IScope, 
        private ProductService: IProductService) {

        this.$scope.$applyAsync(() => {
            this.loadMoreProducts().then(() => {
                this.showMoreProducts();
            });
        });
    }

    public sorted: boolean = false;
    public limit: number = 0;
    public loadFinished: boolean = false;
    public sortType: string = "id";
    public showFinished: boolean = false;
    public skip: number = 0;
    public loadIncrement: number = 20;
    public showIncrement: number = 20;
    public products: Array<IProduct> = [];
    public buffer: Array<IProduct> = []
    public loading: boolean = false;
    public endMessage: string = "~ end of catalogue ~";

    public isLoading: Function = (): boolean => {
        return this.loading;
    }

    public loadMoreProducts: Function = async(): Promise<void> => {
        this.loading = true;
        let productsPromise = await this.ProductService.getProducts(
            this.loadIncrement, this.skip, this.sortType);

        if(productsPromise.data.length > 0) {
            this.buffer = this.buffer.concat(productsPromise.data);
            this.skip = this.skip + this.loadIncrement;
        } else {
            this.loadFinished = true;
        }

        this.loading = false;
    };

    public showMoreProducts: Function = (): void => {
        if (this.sorted) {
            this.products = [];
            this.buffer = [];
            this.showFinished = false;
            this.loadFinished = false;
            this.limit = 0;
            this.skip = 0;
            this.sorted = false;
            $(window).scroll();
        }

        if (!this.showFinished) {
            if (this.buffer.length > 0) {
                this.products.push.apply(this.products, this.buffer);
                this.buffer = [];
            }

            let prodLength = this.products.length + this.buffer.length;
            console.log("prodL: ", prodLength);
            console.log("limit: ", this.limit);
            console.log("loadFinished?: ", this.loadFinished);

            if (this.limit === prodLength && this.loadFinished) {
                this.showFinished = true;
                this.products.push.apply(this.products, this.buffer);
                this.$scope.$digest();
            } else {
                this.limit += this.products.length >= this.limit + this.showIncrement 
                    ? this.showIncrement : this.products.length - this.limit;
                
                if (!this.loadFinished) {
                    this.$scope.$applyAsync(() => {
                        this.loadMoreProducts();
                    });
                }
            }
        }
    };
}