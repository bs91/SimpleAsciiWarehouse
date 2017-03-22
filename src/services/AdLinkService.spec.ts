import * as angular from "angular";
import { IAdLinkService } from "../../src/interfaces/IAdLinkService";

'use strict';

describe('AdLinkService', () => {

    beforeEach(() => {angular.mock.module('asciiWarehouseApp')});

    let localAdLinkService: IAdLinkService;
    let $rootScope: ng.IRootScopeService; 

    beforeEach(() => {
        angular.mock.inject(( AdLinkService: IAdLinkService, _$rootScope_: ng.IRootScopeService) => {
            localAdLinkService = AdLinkService;
            $rootScope = _$rootScope_.$new();
        });
    });

    afterEach(() => {
    });

    it('should initialize correctly', () => {
        expect(localAdLinkService).toBeDefined();
    });

    describe('generateAdLink', () => {
        it('should generate an ad link', () => {
            let adLink = localAdLinkService.generateAdLink();
            expect(adLink).not.toBeNull();
            expect(adLink).toMatch(/\/ad\/\?r=[0-9]*/);
        });
    });

    describe('getPreviousAdLink', () => {
        it('Should start with no previousRandom', () => {
            expect(localAdLinkService.getPreviousAdLink()).toBe('/ad/?r=undefined');
        });
        
        it('should store generated AdLink', () => {
            let adLink = localAdLinkService.generateAdLink();
            expect(localAdLinkService.getPreviousAdLink()).toEqual(adLink);
        });
    });
});