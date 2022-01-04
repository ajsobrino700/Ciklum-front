import { Component, Input, OnInit, Output } from '@angular/core';
import { OptionGame } from 'src/app/model/option-game';
import { Round } from 'src/app/model/round';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {

 
  @Input("lastRound")
  lastRound:Round[]=[]

  @Input("round")
  round:Round = new Round("","")

  @Input("numberRound")
  numberRound:number=0

  playerOneWin:boolean=false
  playerTwoWin:boolean=false
  

  constructor(private gameService:GameService) { }

  ngOnInit(): void {
  }


  updateRoom(data:Round){
    this.lastRound.unshift(data)
    if(this.lastRound.length >10){
      this.lastRound.pop()
    }

  }

  playRound(){
    this.gameService.playRound().subscribe(data=>{
      this.updateRoom(data)
      this.numberRound++
      this.round= data
      if(data.playerOne === data.playerTwo){
        this.playerOneWin =true
        this.playerTwoWin =true
      }else{
        this.playerOneWin = this.winPlayerOne(this.round.playerOne,this.round.playerTwo)
        this.playerTwoWin = !this.playerOneWin
      }
    })
  }


  winPlayerOne(playerOne:string,playerTwo:string){
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


  getUrlImage(option:string):string{
    if(option === OptionGame.PAPER.toString()){
      return "/assets/paper.png"
    }else if(option === OptionGame.ROCK.toString()){
      return "/assets/rock.png"
    }else{
      return "/assets/scissors.png"
    }
  }

  getTextResult(playerOne:string,playerTwo:string):string{
    let text:string=""
    if(playerOne===playerTwo){
      text="DRAW"
    }else if(this.winPlayerOne(playerOne,playerTwo)){
      text="The Winner is Player One"
    }else {
      text="The Winner is Player Two"
    }
    return text
  }

  resetData(){
    this.numberRound=0
    this.round = new Round("","")
    this.lastRound = []
  }

}
