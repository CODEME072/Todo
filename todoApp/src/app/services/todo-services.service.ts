import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todomodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {

  constructor(private httpClient:HttpClient) { }
  private serverUrl = "http://localhost:9000";
  getAllTodos():Observable<Todo>{
    const allTodos:string = `${this.serverUrl}/todos`;
    return this.httpClient.get<Todo>(allTodos).pipe();
  }


}
