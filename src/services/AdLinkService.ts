import { IAdLinkService } from "../interfaces/IAdLinkService";

"use strict";

export class AdLinkService implements IAdLinkService
{
    static ID: string = "AdLinkService";
    
    constructor() {}

    private previousRandom: number;

    private generateRandom: Function = (): number => {
        let rand: number = Math.floor(Math.random()*1000);
        
        if ((rand % 16) + 1 === this.previousRandom) {
            this.generateRandom()
        } else {
            this.previousRandom = (rand % 16) + 1;
            return (rand % 16) + 1;
        }
    }

    public generateAdLink: Function = (): string => {
        let rand: number = this.generateRandom();
        return "/ad/?r=" + rand;
    }

    public getPreviousAdLink: Function = (): string => {
        return "/ad/?r=" + this.previousRandom;
    }
    
}