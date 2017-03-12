import { IProductService } from "../interfaces/IProductService";
import { IProduct } from "../interfaces/IProduct";

'use strict';

export class ProductService implements IProductService
{
    static ID: string = "ProductService";
    static $inject = ["$http"];
    constructor(private $http: ng.IHttpService) {

    }

    public getProducts(limit?: Number, skip?: Number, sort?: String): ng.IPromise<ng.IHttpPromiseCallbackArg<IProduct[]>> {
        return this.$http({
            url: "/api/products?limit=" + limit + "&skip=" + skip + "&sort=" + sort,
        method: "GET",
    transformResponse: [
        function (data) {
            let result: Array<IProduct> = [];
            if (data) {
                data = data.split("\n").filter((el: string) => (el.length > 0));
                data.map((val: string, idx: number, arr: Array<string>) => {
                    result.push(<IProduct>JSON.parse(val));
                });
            }
            return result;
        }
    ]});
    }
}