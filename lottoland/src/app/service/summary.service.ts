import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Summary } from '../model/summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  url = "http://localhost:8080/lottoland/summary"

  constructor(private http:HttpClient) { }


  getSummary(){
    return this.http.get<Summary>(this.url);
  }
}
