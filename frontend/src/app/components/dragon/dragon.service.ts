
import { HttpClient } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ToastService } from 'src/app/services/toast.service';
import { DragonInt, registerDragon, ShowDragon } from './dragon.model';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  baseURL = "http://localhost:3000/dragons/";
  constructor(private http:HttpClient, private toast: ToastService) { }

  create(dragon:registerDragon):Observable<DragonInt>{
    return this.http.post<DragonInt>(this.baseURL, dragon).pipe(
      map((obj)=>obj),
      catchError(e => this.errorHandler(e) )
    );
  }  
  
  index(limit:number, page:number):Observable<DragonInt[]>{    
    return this.http.get<DragonInt[]>(`${this.baseURL}?limit=${limit}&page=${page}`);
  }

  delete(dragon:ShowDragon):Observable<any>{
    return this.http.delete(this.baseURL + dragon._id)
  }
  update(dragon:ShowDragon):Observable<DragonInt>{
    return this.http.put<DragonInt>(this.baseURL + dragon._id, dragon).pipe(
      map((obj)=>obj),
      catchError(e => this.errorHandler(e) )
    );
  }

  errorHandler(e:any):Observable<any>{
    this.toast.show(e.error.message, { classname: 'bg-danger text-light', delay: 2000 });
    return EMPTY;
  }

}
