import { Component, OnInit } from '@angular/core';
import { OptionGame } from 'src/app/model/option-game';
import { Room } from 'src/app/model/room';
import { Round } from 'src/app/model/round';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  numberRound:number
  room:Room
  round:Round
 

  viewSummary:boolean=true

  constructor() {
    this.numberRound=0
    this.room = new Room(0,0,0,[])
    this.round =new Round("","")
   }

  ngOnInit(): void {
    
  }


  goRound(){
    this.viewSummary = ! this.viewSummary
  }

  goSummary(){
    this.viewSummary = ! this.viewSummary
  }



}
