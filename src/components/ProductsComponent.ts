import { module } from 'angular';
import * as $ from 'jquery';
import { IProductService } from "../interfaces/IProductService";
import { IProduct } from "../interfaces/IProduct";

'use strict';

declare let zonedCallBack: Function;

export class ProductsComponentController implements ng.IComponentController
{
    static ID: string = "ProductsComponentController";

    busy: boolean = false;
    loadFinished: boolean = false;
    skip: number = 0;
    loadIncrement: number = 20;
    showIncrement: number = 20;
    sortType: string = "id";
    previousRandom: number = 20;
    products: Array<IProduct> = [];
    showFinished: boolean = false;
    limit: number = 0;   
    endMessage: string = "~ end of catalogue ~";
    sorted: boolean;
    buffer: Array<IProduct> = [];
    loading: boolean = false;
    alLock: boolean = false;

    static $inject = ['$scope', 'ProductService']
    constructor(private $scope: ng.IScope, 
        private ProductService: IProductService) {

        this.$scope.$applyAsync(() => {
            this.loadMoreProducts().then(() => {
                this.showMoreProducts();
            });
        })

    }

    isLoading: Function = () => {
        return this.loading;
    }

    loadMoreProducts: Function = async() => {
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

    showMoreProducts: Function = () => {
        
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
            console.log('prodL: ', prodLength);
            console.log('limit: ', this.limit);
            console.log('loadFinished?: ', this.loadFinished);

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
                    })
                }
            }
        }
    };
    
}

export class ProductsComponent implements ng.IComponentOptions 
{
    static ID: string = "products";
    public bindings: any;
    public controller: any;
    public template: string;
    public require: any;
    
    constructor() {
        this.bindings = {
        };
        this.controller = ProductsComponentController;
        this.template = `
            <section ng-cloak class="products">
                <product-sort sort-type="$ctrl.sortType"
                    sorted="$ctrl.sorted"
                    load-more-products="$ctrl.loadMoreProducts()"
                    show-more-products="$ctrl.showMoreProducts()"
                    show-finished="$ctrl.showFinished">
                </product-sort>
                <div auto-load="$ctrl.showMoreProducts()" 
                    limit="$ctrl.limit"
                    load-finished="$ctrl.loadFinished"
                    is-loading="$ctrl.isLoading()"
                    sorted="$ctrl.sorted"
                    al-lock="$ctrl.alLock">
                    <md-grid-list ng-if="!$ctrl.sorted"
                    md-cols-xs="1" md-cols-sm="2" md-cols-md="3" md-cols-gt-md="4"
                    md-row-height-gt-md="1:1" md-row-height="2:2"
                    md-gutter="12px" md-gutter-gt-sm="8px">
                    <md-grid-tile class="product" ng-repeat-start="product in $ctrl.products | limitTo: $ctrl.limit track by product.id">
                        <md-grid-tile-header>
                        <p>
                            {{ product.date | DateFilter}}
                        </p>
                        </md-grid-tile-header>
                        <div ng-style="{'font-size': product.size + 'px'}">
                        {{ product.face }}
                        </div>
                        <md-grid-tile-footer>
                        <p>
                            {{ product.price | MonetaryFilter }}
                        </p>
                        </md-grid-tile-footer>
                    </md-grid-tile>
                    <md-grid-tile ng-repeat-end ng-if="($index + 1) % 20 === 0 && $index !== 0">
                        <ad></ad>
                    </md-grid-tile>
                    </md-grid-list>
                </div>
                <div ng-if="!$ctrl.showFinished">
                    <loading-indicator></loading-indicator>
                </div>
                <div ng-if="$ctrl.showFinished">
                    <p class="endMessage">
                    {{ $ctrl.endMessage }}
                    </p>
                </div>
            </section>
            `;
    }
}
  