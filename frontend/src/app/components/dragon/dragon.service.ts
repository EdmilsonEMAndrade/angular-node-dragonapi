
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dragon, registerDragon } from './dragon.model';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  baseURL = "http://localhost:3000/dragons";
  constructor(private http:HttpClient) { }

  create(dragon:registerDragon):Observable<Dragon>{
    return this.http.post<Dragon>(this.baseURL, dragon);
  }
  index():Observable<Dragon[]>{
    return this.http.get<Dragon[]>(this.baseURL);
  }

}
