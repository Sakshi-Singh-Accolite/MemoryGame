import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './home/card/card.component';
import { SixcardsComponent } from './home/sixcards/sixcards.component';
import { TwelvecardsComponent } from './home/twelvecards/twelvecards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    SixcardsComponent,
    TwelvecardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
