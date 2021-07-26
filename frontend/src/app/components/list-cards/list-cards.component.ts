import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { ShowDragon } from '../dragon/dragon.model';
import { DragonService } from '../dragon/service/dragon.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  dragons:ShowDragon[]=[];
  constructor(private dragonService: DragonService, private menuService:MenuService) { 
    menuService.menuData={
      title: 'dragon',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
    this.dragonService.index(6,1).subscribe(d =>{this.dragons= d})
  }

}
