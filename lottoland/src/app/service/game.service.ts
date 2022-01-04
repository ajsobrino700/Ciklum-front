import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Round } from '../model/round';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  endpoint = environment.url "/round"

  constructor(private http:HttpClient) { }


  playRound(){
    return this.http.get<Round>(this.endpoint);
  }

}
