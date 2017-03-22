import { IProduct } from "./IProduct";

"use strict";


export interface IProductService 
{
    getProducts(limit?: number, skip?: number, sort?: string): ng.IPromise<ng.IHttpPromiseCallbackArg<IProduct[]>>;
}