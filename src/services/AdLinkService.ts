import { IAdLinkService } from "../interfaces/IAdLinkService";

'use strict';

export class AdLinkService implements IAdLinkService
{
    static ID: string = "AdLinkService";
    constructor() {

    }

    private previousRandom: number;

    generateRandom: Function = () => {
        let rand = Math.floor(Math.random()*1000);
        
        if ((rand % 16) + 1 === (this.previousRandom % 16) + 1) {
            this.generateRandom()
        } else {
            this.previousRandom = rand;
            return rand;
        }
    }

    generateAdLink: Function = () => {
        let rand: number = this.generateRandom();
        return "/ad/?r=" + rand;
    }
    
}