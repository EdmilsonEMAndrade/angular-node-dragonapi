import { Component, OnInit } from '@angular/core';
import { ShowDragon } from '../dragon.model';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  dragons:ShowDragon[]=[{
    name: "Teste",
    type: "Voador",
    history: "Era uma vez",
    imageURL: "https://i.ytimg.com/vi/8bkB_mcWjg0/maxresdefault.jpg"
  },
  {
    name: "Teste",
    type: "Voador",
    history: "Era uma vez Era uma vezEra uma vezEra uma vezEra uma vezEra uma vezEra uma vezEra uma vezEra uma vezEra uma vezEra uma vez",
    imageURL: "https://i.ytimg.com/vi/8bkB_mcWjg0/maxresdefault.jpg"
  },
  {
    name: "Teste",
    type: "Voador",
    history: "Era uma vez",
    imageURL: "https://i.ytimg.com/vi/8bkB_mcWjg0/maxresdefault.jpg"
  },
  {
    name: "Teste",
    type: "Voador",
    history: "Era uma vez",
    imageURL: "https://i.ytimg.com/vi/8bkB_mcWjg0/maxresdefault.jpg"
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
