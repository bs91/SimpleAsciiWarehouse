import { module } from 'angular';
import * as $ from 'jquery';

'use strict';

export class ShowWhenLoadedDirective implements ng.IDirective
{
    static ID: string = "showWhenLoaded";
    static instance() : ng.IDirective {
        return new ShowWhenLoadedDirective;
    }
    restrict: string = "A";
    scope: any = {
        showWhenLoaded: '='

    };
    link: Function = (scope: ng.IScope, elements: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {

        $(elements[0]).bind('load', function() {
            scope.showWhenLoaded = false;
        })

    };
}