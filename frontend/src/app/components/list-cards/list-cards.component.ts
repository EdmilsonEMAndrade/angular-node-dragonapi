import { Component, OnInit } from '@angular/core';
import { ShowDragon } from '../dragon/dragon.model';
import { DragonService } from '../dragon/dragon.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  dragons:ShowDragon[]=[];
  constructor(private dragonService: DragonService) { }

  ngOnInit(): void {
    this.dragonService.index().subscribe(d =>{this.dragons= d})
  }

}
