import * as angular from "angular";

'use strict';

describe('MonetaryFilter', () => {

    beforeEach(() => {angular.mock.module('asciiWarehouseApp')});

    let $filter: ng.IFilterService;
    let MonetaryFilter: any;

    beforeEach(() => {
        angular.mock.inject((_$filter_: ng.IFilterService) => {
            $filter = _$filter_;
        });
        MonetaryFilter = $filter('MonetaryFilter');
    });

    it('should initialize correctly', () => {
        expect(MonetaryFilter).toBeDefined();
    });

    it('should return dollar formated string from cents', () => {
        expect(MonetaryFilter(235000)).toBe("$2350.00");
        expect(MonetaryFilter(23500)).toBe("$235.00");
        expect(MonetaryFilter(2350)).toBe("$23.50");
        expect(MonetaryFilter(235)).toBe("$2.35");
        expect(MonetaryFilter(35)).toBe("$0.35");
        expect(MonetaryFilter(5)).toBe("$0.05");
    });
});