import { Summary } from './../model/summary';
import { Injectable } from '@angular/core';
import { Round } from '../model/round';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  lastRound:Round[] = []
  numberRound:number = 0

  constructor() { }


  reset(){
    this.lastRound =[]
    this.numberRound=0
  }
}
