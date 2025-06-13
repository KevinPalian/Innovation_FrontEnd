import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Teacher } from '../models/teacher';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private url=`${base_url}/teacher-profiles`;

  private listaCambio = new Subject<Teacher[]>()

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Teacher[]>(this.url);
  }

  insert(t:Teacher){
    return this.http.post(this.url,t)
  }

  setList(ListaNuevo:Teacher[]){
    this.listaCambio.next(ListaNuevo)
  }

  getlist(){
    return this.listaCambio.asObservable();
  }


}
