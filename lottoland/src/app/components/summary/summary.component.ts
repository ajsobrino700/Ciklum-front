import { Summary } from './../../model/summary';
import { SummaryService } from './../../service/summary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  summary:Summary= new Summary(0,0,0)

  constructor(private summaryService:SummaryService) {
  
   }

  ngOnInit(): void {
    this.summaryService.getSummary().subscribe(data=>this.summary=data)
  }

}
