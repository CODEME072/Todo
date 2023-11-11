import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoServicesService } from '../services/todo-services.service';
import { Todo } from '../models/todomodel';
import {constant} from '../global/globalConstant';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateTodoComponent implements OnInit {
  priorities = constant.PRIORITY_LEVEL;
  categories = constant.CATEGORY_LIST;
  defaultAssignee!:string;
  defaultTaskName!:string;
  defaultNotes!:string;
  defaultPriority!: string;
  defaultCategory!:string;
  taskForm!:FormGroup;
  constructor(private dialogref:MatDialogRef<UpdateTodoComponent>,@Inject(MAT_DIALOG_DATA) private data:Todo,private todoServices:TodoServicesService, private formBuild:FormBuilder){
  }
  ngOnInit(){
    this.defaultPriority = this.data.priority;
    this.defaultCategory = this.data.category;
    this.defaultAssignee = this.data.assignee
    this.defaultTaskName = this.data.task;
    this.defaultNotes = this.data.notes;
    this.taskForm = this.formBuild.group({
      assignee:[this.defaultAssignee,Validators.required],
      taskName:[this.defaultTaskName,Validators.required],
      notes:[this.defaultNotes,Validators.required],
      priority:[this.defaultPriority,Validators.required],
      category:[this.defaultCategory,Validators.required]
    })
  }
  isControlInvalid(controlName: string): boolean {
    const control:any = this.taskForm.get(controlName);
    return control.invalid && (control.dirty || control.touched);
  }
  closeDialog(){
    this.dialogref.close();
  } 
  
}
