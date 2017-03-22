import { IAdLinkService } from "../interfaces/IAdLinkService";

"use strict";

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