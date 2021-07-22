import { Component, Input, OnInit } from '@angular/core';
import { ShowDragon } from '../dragon.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input()
  dragon:ShowDragon={_id:'', name: '', type:'', history:'', imageURL: '' }

  constructor() { }

  ngOnInit(): void {
  }

}
