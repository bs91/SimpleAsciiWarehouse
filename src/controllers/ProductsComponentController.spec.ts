import * as angular from "angular";
import { IProductService } from "../../src/interfaces/IProductService";
import { IProduct } from "../../src/interfaces/IProduct";

'use strict';

describe('ProductsComponentController', () => {

    beforeEach(() => {angular.mock.module('asciiWarehouseApp')});

    let $httpBackend: ng.IHttpBackendService;
    let localProductService: IProductService;
    let $rootScope: ng.IRootScopeService;
    let $q: ng.IQService;
    let $controller: ng.IComponentControllerService;
    let deferred: ng.IDeferred<{}>;

    beforeEach(() => {
        angular.mock.inject((_$httpBackend_: ng.IHttpBackendService, ProductService: IProductService, _$rootScope_: ng.IRootScopeService, 
            _$q_: ng.IQService, _$controller_: ng.IComponentControllerService) => {
            $httpBackend = _$httpBackend_;
            localProductService = ProductService;
            $rootScope = _$rootScope_.$new();
            $q = _$q_;
            $controller = _$controller_;
            deferred = _$q_.defer();
        });
    });

    afterEach(() => {
        // $httpBackend.verifyNoOutstandingExpectation();
        // $httpBackend.verifyNoOutstandingRequest();
    });

    it('should initialize correctly', () => {
        expect(localProductService).toBeDefined();
    });

    describe('$scope.vm.ProductsComponentController', () => {
        let $scope: ng.IScope;
        let controller: any;

        beforeEach(() => {
            $scope = $rootScope.$new();
            spyOn(localProductService, 'getProducts').and.returnValue(deferred.promise);
            deferred.resolve('success');
            controller = $controller("ProductsComponentController", { '$scope': $scope, 'ProductService': localProductService });
        });

        let mockRespond: string = '{\"id\":\"0-5b5euk3znix268h8xm4ww2ke29\",\"size\":23,\"price\":539,\"face\":\"( .-. )\",\"date\":\"Wed Mar 15 2017 06:08:04 GMT-0400 (Eastern Daylight Time)\"}\r\n{\"id\":\"1-4xg4mxtx1b4be0iljhhjs8aor\",\"size\":30,\"price\":321,\"face\":\"( .o.)\",\"date\":\"Wed Mar 15 2017 11:04:26 GMT-0400 (Eastern Daylight Time)\"}\r\n{\"id\":\"2-8zs1mpuahd2741cjdulo0qkt9\",\"size\":14,\"price\":568,\"face\":\"( `\u00B7\u00B4 )\",\"date\":\"Mon Mar 06 2017 05:19:55 GMT-0500 (Eastern Standard Time)\"}\r\n{\"id\":\"3-6cv22x5smqik4g88qa1e1urf6r\",\"size\":18,\"price\":805,\"face\":\"( \u00B0 \u035C \u0296 \u00B0)\",\"date\":\"Wed Mar 15 2017 20:18:25 GMT-0400 (Eastern Daylight Time)\"}\r\n{\"id\":\"4-2e0xna76zrbzta1ww0p44pldi\",\"size\":22,\"price\":955,\"face\":\"( \u0361\u00B0 \u035C\u0296 \u0361\u00B0)\",\"date\":\"Sat Mar 11 2017 11:02:05 GMT-0500 (Eastern Standard Time)\"}\r\n{\"id\":\"5-d3tdwbx9q1bjhoih9cffrms4i\",\"size\":20,\"price\":990,\"face\":\"( \u2686 _ \u2686 )\",\"date\":\"Sat Mar 11 2017 09:15:06 GMT-0500 (Eastern Standard Time)\"}\r\n{\"id\":\"6-37t11r7bjlr50zi3v4ck1n61or\",\"size\":20,\"price\":707,\"face\":\"( \uFE36\uFE3F\uFE36)\",\"date\":\"Thu Mar 09 2017 05:02:38 GMT-0500 (Eastern Standard Time)\"}\r\n{\"id\":\"7-y1583lg4br3l79zejr1kyb9\",\"size\":26,\"price\":557,\"face\":\"( \uFF9F\u30EE\uFF9F)\",\"date\":\"Thu Mar 09 2017 04:25:45 GMT-0500 (Eastern Standard Time)\"}\r\n{\"id\":\"8-5lvx62rghnutnmwchtkpt4kj4i\",\"size\":15,\"price\":829,\"face\":\"(\\\\\/)(\u00B0,,,\u00B0)(\\\\\/)\",\"date\":\"Thu Mar 16 2017 13:53:16 GMT-0400 (Eastern Daylight Time)\"}\r\n{\"id\":\"9-is08184fwhysg22t9nmk4vx6r\",\"size\":15,\"price\":960,\"face\":\"(\u00AC_\u00AC)\",\"date\":\"Sat Mar 18 2017 15:57:46 GMT-0400 (Eastern Daylight Time)\"}\r\n{\"id\":\"10-0kg4s7m5cwsv4jbh7iwdkxd2t9\",\"size\":17,\"price\":214,\"face\":\"(\u00AC\u00BA-\u00B0)\u00AC\",\"date\":\"Thu Mar 09 2017 08:17:20 GMT-0500 (Eastern Standard Time)\"}\r\n{\"id\":\"11-xtjns6sleccdcuj8ssoo5hfr\",\"size\":35,\"price\":876,\"face\":\"(\u00AC\u203F\u00AC)\",\"date\":\"Thu Mar 09 2017 19:33:41 GMT-0500 (Eastern Standard Time)\"}\r\n{\"id\":\"12-jmfmo74eq9lugfm3mmzrara4i\",\"size\":20,\"price\":587,\"face\":\"(\u00B0\u30ED\u00B0)\u261D\",\"date\":\"Tue Mar 07 2017 03:11:11 GMT-0500 (Eastern Standard Time)\"}\r\n{\"id\":\"13-uscqhsigs8dygksynzalwhfr\",\"size\":18,\"price\":580,\"face\":\"(\u00B4\u30FB\u03C9\u30FB)\u3063\",\"date\":\"Sat Mar 04 2017 22:54:49 GMT-0500 (Eastern Standard Time)\"}\r\n{\"id\":\"14-5eqnyhauemtfz01561ocl0izfr\",\"size\":33,\"price\":661,\"face\":\"(\u00F3 \u00EC_\u00ED)\",\"date\":\"Tue Mar 14 2017 11:49:13 GMT-0400 (Eastern Daylight Time)\"}\r\n{\"id\":\"15-e6845vk9c9ayrvift8podpldi\",\"size\":25,\"price\":293,\"face\":\"(\u0298\u15E9\u0298\')\",\"date\":\"Sun Mar 12 2017 09:19:15 GMT-0400 (Eastern Daylight Time)\"}\r\n{\"id\":\"16-xaku1125arz2iabd11370hpvi\",\"size\":28,\"price\":930,\"face\":\"(\u0298\u203F\u0298)\",\"date\":\"Wed Mar 08 2017 15:27:24 GMT-0500 (Eastern Standard Time)\"}\r\n{\"id\":\"17-ioxuju5sae1bbaoztravjwcdi\",\"size\":27,\"price\":252,\"face\":\"(\u033F\u2580\u033F\u2009\u033F\u0139\u032F\u033F\u033F\u2580\u033F \u033F)\u0304\",\"date\":\"Wed Mar 15 2017 09:39:36 GMT-0400 (Eastern Daylight Time)\"}\r\n{\"id\":\"18-tg5gzxerkqqfci7m34n29\",\"size\":23,\"price\":511,\"face\":\"(\u0361\u00B0 \u035C\u0296 \u0361\u00B0)\",\"date\":\"Thu Mar 16 2017 14:38:38 GMT-0400 (Eastern Daylight Time)\"}\r\n{\"id\":\"19-k5dyz0bhv1h3ffdogq8ziwwmi\",\"size\":22,\"price\":98,\"face\":\"\u1566( \u0361\u00B0 \u035C\u0296 \u0361\u00B0)\u1564\",\"date\":\"Tue Mar 14 2017 06:31:51 GMT-0400 (Eastern Daylight Time)\"}\r\n';
        let transformData: Function = (mock: string): Array<IProduct> => {
            let mockResult: Array<IProduct> = [];
            mock.split('\n').filter((el: string) => (el.length > 0))
                .map((val: string, idx: number, arr: Array<string>) => {
                    mockResult.push(<IProduct>JSON.parse(val));
                }
            );
            return mockResult;
        };

        it('should properly initialize properties', () => {
            expect(controller.sorted).toBe(false);
            expect(controller.limit).toBe(0);
            expect(controller.loadFinished).toBe(false);
            expect(controller.sortType).toEqual('id');
            expect(controller.showFinished).toBe(false);
            expect(controller.skip).toEqual(0);
            expect(controller.loadIncrement).toEqual(20);
            expect(controller.showIncrement).toEqual(20);
            expect(controller.products.length).toBe(0);
            expect(controller.buffer.length).toBe(0);
            expect(controller.loading).toBe(false);
            expect(controller.endMessage).not.toBeNull();
        });

        it('should return isLoading', () => {
            expect(controller.isLoading()).toBe(false);
            controller.loading = true;
            expect(controller.isLoading()).toBe(true);
        });
    });
});