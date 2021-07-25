import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { BodyComponent } from './view/body/body.component';
import { RegisterComponent } from './components/register/register.component';

import { NgbToastDirective } from './directives/ngb-toast.directive';
import { ToastsContainerComponent } from './components/toasts-container/toasts-container.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    ListCardsComponent,
    BodyComponent,
    RegisterComponent,
    NgbToastDirective,
    ToastsContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
