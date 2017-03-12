import { module } from 'angular';

'use strict';

export class HeaderComponentController implements ng.IComponentController
{
    static ID: string = "HeaderComponentController";

    constructor() {
    }
    
}

export class HeaderComponent implements ng.IComponentOptions 
{
    static ID: string = "headerComponent";
    public bindings: any;
    public controller: any;
    public template: string;
    
    constructor() {
        this.bindings = {};
        this.controller = HeaderComponentController;
        this.template = `
        <header>
            <h1>Discount Ascii Warehouse</h1>
            <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>
            <p>But first, a word from our sponsors:</p> <img class="ad" src="/ad/?r=' + Math.floor(Math.random()*1000) + '"/>
        </header>
        `;
    }
}
  