import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription, take } from 'rxjs';
import { Todo } from '../models/todomodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {
  private originalData: Todo[] = [];
  private currentData: Todo[] = [];
  private dataSubject = new BehaviorSubject<Todo[]>([]);
  public noContent = new BehaviorSubject<boolean>(false);
  data$ = this.dataSubject.asObservable()
  constructor(private httpClient: HttpClient) { }
  private serverUrl = "http://localhost:9000";

  fetchData() {
    const allTodosUrl: string = `${this.serverUrl}/todos`;
    this.httpClient.get<Todo[]>(allTodosUrl).subscribe(data => {
      this.originalData = data;
      this.noContent.next(false);
      this.dataSubject.next(data);
    });
  }

  getData(): Observable<Todo[]> {
    const allTodosUrl: string = `${this.serverUrl}/todos`;
    return this.httpClient.get<Todo[]>(allTodosUrl);
  }

  filterAndNotify(sortBy: boolean,) {
    let filteredData = this.originalData.filter(data => data.completed === sortBy);
    this.currentData = filteredData;
    this.noDataAvailable(filteredData);
    this.dataSubject.next(filteredData);
  }

  filterAndNotify2(sortBy: string) {
    let filteredData = this.currentData.filter(data => data.assignee === sortBy);
    this.noDataAvailable(filteredData);
    this.dataSubject.next(filteredData);
  }

  filterByPriority(priority: string) {
    let filteredData = this.currentData.filter(data => data.priority === priority && data.assignee === 'Self');
    this.noDataAvailable(filteredData);
    this.dataSubject.next(filteredData);
  }

  deleteTodo(id: number): Observable<Todo> {
    const deleteTodo = `${this.serverUrl}/todos/${id}`;
    return this.httpClient.delete<Todo>(deleteTodo);
  }

  markAsCompleted(id: number, completedvalue: boolean): Observable<any> {
    const updateTodo = `${this.serverUrl}/todos/${id}`;
    return this.httpClient.patch(updateTodo, { completed: completedvalue });
  }

  noDataAvailable(filteredData: Todo[]) {
    if(filteredData.length) {
      this.noContent.next(false);
    }
    else {
      this.noContent.next(true);
    }

  }

}
