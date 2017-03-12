import { module } from 'angular';
import { IAdLinkService } from "../interfaces/IAdLinkService";

'use strict';

export class AdComponentController implements ng.IComponentController
{
    static ID: string = "AdComponentController";

    static $inject = ["AdLinkService"];
    constructor(private AdLinkService: IAdLinkService) {
        this.adLoading = true;
        this.adLink = AdLinkService.generateAdLink();
    }

    public adLink: string;
    public adLoading: boolean;
    
}

export class AdComponent implements ng.IComponentOptions 
{
    static ID: string = "ad";
    public bindings: any;
    public controller: any;
    public template: string;
    
    constructor() {
        this.bindings = {};
        this.controller = AdComponentController;
        this.template = `
        <img class="ad" ng-src="{{$ctrl.adLink}}"/>
        `;
    }
}
