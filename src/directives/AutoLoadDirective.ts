import * as $ from 'jquery';

'use strict';

export class AutoLoadDirective implements ng.IDirective
{
    static ID: string = "autoLoad";
    static instance() : ng.IDirective {
        return new AutoLoadDirective;
    }

    restrict: string = "A";

    controller($scope: ng.IScope, $timeout: ng.ITimeoutService) {
        $scope.timeout = $timeout;
    }

    scope: any = {
        autoLoad: "&autoLoad",
        limit: "<",
        loadFinished: "<",
        isLoading: "&isLoading",
        sorted: "<"
    };

    link: Function = (scope: ng.IScope, elements: ng.IAugmentedJQuery, 
        attrs: ng.IAttributes): void => {
        let thresholdPixels: number = 350;
        let nearBottomOfPage: Function = (): boolean => {
            return $(window).scrollTop() > ($(document).height() - 
                $(window).height() - thresholdPixels);
        };
        let scrollTimer: any = null;
        let lastScrollFireTime: number = 0;

        $(window).on("scroll", function() {
            let minScrollTime: number = 100;
            let now: number = new Date().getTime();

            let processScroll: Function = (): void => {
                if (nearBottomOfPage() && !scope.isLoading() && !scope.sorted) {
                    scope.autoLoad();
                } else if (scope.isLoading() && !scope.sorted) {
                    scope.timeout(() => {
                        $(window).scroll();
                    }, 500);
                }
            }

            if (!scrollTimer) {
                if (now - lastScrollFireTime > (3 * minScrollTime)) {
                    processScroll();
                    lastScrollFireTime = now;
                }
                scrollTimer = scope.timeout(() => {
                    scrollTimer = null;
                    lastScrollFireTime = new Date().getTime();
                    processScroll();
                }, minScrollTime);
            }
        });


        if(scope.limit === 0 && !scope.loadFinished) {
            $(window).scroll();
        }
    };
}