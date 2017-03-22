import * as angular from "angular";
import { IDateModifier } from "../../src/interfaces/IDateModifier";
import { MomentDateModifier } from "../../src/classes/MomentDateModifier";

'use strict';

describe('DateFilter', () => {

    beforeEach(() => {angular.mock.module('asciiWarehouseApp')});

    let $filter: ng.IFilterService;
    let DateFilter: any;
    let dateModifier: IDateModifier = new MomentDateModifier();

    beforeEach(() => {
        angular.mock.inject((_$filter_: ng.IFilterService) => {
            $filter = _$filter_;
        });
        DateFilter = $filter('DateFilter');
    });

    it('should initialize correctly', () => {
        expect(DateFilter).toBeDefined();
    });

    it('should return a few seconds ago', () => {
        let testDate: string = new Date(Date.now() - 0).toString();
        expect(DateFilter(testDate)).toBe('a few seconds ago');
    });

    it('should return a minute ago', () => {
        let testDate: string = new Date(Date.now() - 60000).toString();
        expect(DateFilter(testDate)).toBe('a minute ago');
    });

    it('should return an hour ago', () => {
        let testDate: string = new Date(Date.now() - (60000 * 60)).toString();
        expect(DateFilter(testDate)).toBe('an hour ago');
    });

    it('should return 5 hours ago', () => {
        let testDate: string = new Date(Date.now() - (60000 * 60 * 5)).toString();
        expect(DateFilter(testDate)).toBe('5 hours ago');
    });

    it('should return a day ago', () => {
        let testDate: string = new Date(Date.now() - (60000 * 60 * 24)).toString();
        expect(DateFilter(testDate)).toBe('a day ago');
    });

    it('should return 7 day ago', () => {
        let testDate: string = new Date(Date.now() - (60000 * 60 * 24 * 6.5)).toString();
        expect(DateFilter(testDate)).toBe('7 days ago');
    });

    it('should return current date', () => {
        let testDate: string = new Date(Date.now() - (60000 * 60 * 24 * 8)).toString();
        let resultDate: string = dateModifier.stringToDate(testDate).toString();
        expect(DateFilter(testDate)).toBe(resultDate);
    });
    
});