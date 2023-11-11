import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoServicesService } from '../services/todo-services.service';
@Component({
  selector: 'app-tasks-action',
  templateUrl: './tasks-action.component.html',
  styleUrls: ['./tasks-action.component.scss']
})
export class TasksActionComponent implements OnInit, OnDestroy {
  public afterFilter1:boolean = false;
  public afterFilter2:boolean = false
  public totalTodoLen:number = 0;
  public completedLen:number =0;
  public uncompletedTodoLen: number =0;
  public prioritySelect1:boolean = false;
  public prioritySelect2:boolean = false;
  constructor(private todoServices:TodoServicesService){}
  ngOnInit(): void {
    this.todoServices.data$.subscribe(res=>{
      this.totalTodoLen = res.length;
    })
  }
   
  allData(){
    this.afterFilter1= this.afterFilter2 = false;
    this.todoServices.fetchData();
  }
  filterTodos(sortBy: boolean, toggleValue:string): void {
    if(toggleValue === 'comp'){
      this.afterFilter1 = true;
      this.afterFilter2 = false; 
    }
    else if(toggleValue === 'notComp'){
      this.afterFilter2 = true;
      this.afterFilter1 = false;
    }
    this.todoServices.filterAndNotify(sortBy);
  }
  toggle(value:string){
    if(value === 'comp'){
      this.prioritySelect1 = !this.prioritySelect1;
      this.prioritySelect2 = false;
    }
    else if(value === 'notComp'){
      this.prioritySelect2 = !this.prioritySelect2;
      this.prioritySelect1 = false;
    }
   
  }
  filterSelf(data:any){
    this.todoServices.filterAndNotify2(data);
  }
  filterOnPriority(level:string){
    this.todoServices.filterByPriority(level);
  }
  
  ngOnDestroy(){
    
  }
}
