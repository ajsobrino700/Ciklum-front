import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RoomComponent } from './components/room/room.component';
import { SummaryComponent } from './components/summary/summary.component';
import { RoundComponent } from './components/round/round.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    SummaryComponent,
    RoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
