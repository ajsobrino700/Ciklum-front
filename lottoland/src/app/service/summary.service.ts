import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Summary } from '../model/summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  endpoint = environment.url+"/summary"

  constructor(private http:HttpClient) { }


  getSummary(){
    return this.http.get<Summary>(this.endpoint);
  }
}
