import { Component, OnInit } from '@angular/core';
import {TodoServicesService} from '../services/todo-services.service';
import { Todo } from '../models/todomodel';

@Component({
  selector: 'app-todo-list',
  templateUrl: './tod-list.component.html',
  styleUrls: ['./tod-list.component.scss']
})
export class TodListComponent implements OnInit {
  constructor(private todoServices:TodoServicesService){}
  public allTodos:Todo[] = [];
  public completed:string = "";
  ngOnInit(): void {
      this.getAllTodos();
      console.log(this.allTodos);
  }

  getAllTodos(){
    let data = this.todoServices.getAllTodos()
      .subscribe((res:any)=>{
        this.allTodos =  res;
        console.log(this.allTodos);
      });

    
  }
  isCompleted(value:boolean):boolean{
    if(value){
      return true;
    }
    else{
      return false;
    }
  }
}
