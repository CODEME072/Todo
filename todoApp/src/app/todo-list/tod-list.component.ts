import { Component, OnDestroy, OnInit } from '@angular/core';
import {TodoServicesService} from '../services/todo-services.service';
import { Todo } from '../models/todomodel';
import {MatDialog} from '@angular/material/dialog';
import {CompletedComponent} from '../dialogs/completed/completed.component'
import { UpdateTodoComponent } from '../update-todo/update-todo.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './tod-list.component.html',
  styleUrls: ['./tod-list.component.scss']
})
export class TodListComponent implements OnInit,OnDestroy {
  constructor(private todoServices:TodoServicesService, private dialog:MatDialog){}
  public allTodos:Todo[] = [];
  public completed:string = "";
  noContent:boolean = false;
  ngOnInit(): void {
    this.todoServices.fetchData();
    this.todoServices.data$.subscribe(res=>{
      this.allTodos = res;
    })
     this.todoServices.noContent.
     subscribe(res=>this.noContent = res)
     console.log(this.noContent)
  }

  isCompleted(value:boolean):boolean{
    if(value){
      return true;
    }
    else{
      return false;
    }
  }
  markItCompleted(id:any){
    const dialogRef = this.dialog.open(CompletedComponent,{
      height:'200px',
      width:'400px',
      disableClose:true,
      data:{id:id,
      isCompleted:true}
    });
    dialogRef.afterClosed().subscribe(res=>{
      this.todoServices.fetchData();
      console.log("This task has been mark as completed");
    })
  }

  updateTodo(data:any){
    const dialogRef = this.dialog.open(UpdateTodoComponent,{
      height:"500px",
      width:"500px",
      disableClose:true,
      data:data
    });
    dialogRef.afterClosed().subscribe(()=>{
      console.log("Particular data has been updated!")
    })
  }

  deleteTodo(id:any, title:any){

    const dialogRef = this.dialog.open(DeleteDialogComponent,{
      height:"200px",
      width:"450px",
      disableClose:true,
      data:{
        id:id,
        title:title
      }
      
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.todoServices.fetchData();
    })

  }
  ngOnDestroy(): void {
    this.todoServices.noContent.unsubscribe();
  }
}
