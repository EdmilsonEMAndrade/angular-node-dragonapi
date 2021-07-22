import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListCardsComponent} from './components/list-cards/list-cards.component'
import {RegisterComponent} from './components/register/register.component'
const routes: Routes = [
  {
  path:"",
  component: ListCardsComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
