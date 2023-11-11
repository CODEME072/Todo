import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoServicesService } from 'src/app/services/todo-services.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  constructor(private dialogRef:MatDialogRef<CompletedComponent>, @Inject(MAT_DIALOG_DATA)  private data:any, private todoServices:TodoServicesService){}

    notYet(){
      console.log(this.data)
      this.dialogRef.close()
  }
  updateCompleted(){
    this.todoServices.getData().subscribe((res)=>{
      if (res.find(data=>data.id === this.data.id)){
         this.todoServices.markAsCompleted(this.data.id,true).subscribe(()=>console.log("Updated successfully!"), err=>{
          console.log("mark completed issue:",err)
         })
        }
      else{
        console.log("This Id is not available");
      }
    });
    this.dialogRef.close();
  }
}
