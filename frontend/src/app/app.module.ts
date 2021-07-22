import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { BodyComponent } from './view/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    ListCardsComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
