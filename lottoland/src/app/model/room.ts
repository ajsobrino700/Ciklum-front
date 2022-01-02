import { Round } from "./round";

export class Room {
    constructor(public winPlayerOne:number,public winPlayerTwo:number, public draw:number,public lastRound:Round[]){
    }
}