import { module } from 'angular';

'use strict';

export class LoadingIndicatorComponentController implements ng.IComponentController
{
    static ID: string = "LoadingIndicatorComponentController";

    constructor() {
    }
    
}

export class LoadingIndicatorComponent implements ng.IComponentOptions 
{
    static ID: string = "loadingIndicator";
    public bindings: any;
    public controller: any;
    public template: string;
    
    constructor() {
        this.bindings = {};
        this.controller = LoadingIndicatorComponentController;
        this.template = `
            <md-progress-circular md-diameter="96" md-mode="indeterminate">
            </md-progress-circular>
            <p>loading...</p>
        `;
    }
}
  