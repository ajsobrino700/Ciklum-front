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

  constructor(private gameService:GameService) {
    this.numberRound=0
    this.room = new Room(0,0,0,[])
    this.round =new Round("","")
   }

  ngOnInit(): void {
    
  }

  playRound(){
    this.gameService.playRound().subscribe(data=>{
      this.updateRoom(data)
      this.numberRound++
      this.round= data
    })
  }


  resetData(){
    this.numberRound=0
    this.room = new Room(0,0,0,[])
  }

  updateRoom(data:Round){
    this.room.lastRound.unshift(data)
    if(this.room.lastRound.length >10){
      this.room.lastRound.pop()
    }

    if(data.playerOne === data.playerTwo){
      this.room.draw++
    }else if(this.winPlayerOne(data.playerOne,data.playerTwo)){
      this.room.winPlayerOne++
    }else{
      this.room.winPlayerTwo++
    }

  }

  winPlayerOne(playerOne:string,playerTwo:string){
    console.log(OptionGame.ROCK.toString())
    if(playerOne===OptionGame.PAPER.toString() && playerTwo === OptionGame.ROCK.toString()){
      return true
    }

    if(playerOne==OptionGame.ROCK.toString() && playerTwo == OptionGame.SCISSORS.toString()){
      return true
    }

    if(playerOne==OptionGame.SCISSORS.toString() && playerTwo == OptionGame.PAPER.toString()){
      return true
    }

    return false
  }

  

}
