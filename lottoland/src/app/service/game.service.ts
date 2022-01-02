import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Round } from '../model/round';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url = "http://localhost:8080/lottoland/round"

  constructor(private http:HttpClient) { }


  playRound(){
    return this.http.get<Round>(this.url);
  }

}
