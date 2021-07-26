import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
  }

  get title():string{
    return this.menuService.menuData.title
  }
  get routeUrl():string{
    return this.menuService.menuData.routeUrl
  }

}
