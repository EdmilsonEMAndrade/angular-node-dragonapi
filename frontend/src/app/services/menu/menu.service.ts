import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuData } from './menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  _menuData = new BehaviorSubject<MenuData>({
    title : 'dragon',
    routeUrl: ''
  });

  constructor() { }

  get menuData(): MenuData{
    return this._menuData.value;
  }

  set menuData(menuData: MenuData){
    this._menuData.next(menuData);
  }
}
