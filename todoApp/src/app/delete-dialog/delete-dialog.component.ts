import { Component, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TodoServicesService } from '../services/todo-services.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {
  constructor(public dialogRef:MatDialogRef<DeleteDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any, private todoServices:TodoServicesService){}

  closeDialog(){
    this.dialogRef.close();
  }
  deleteIt(){
    this.todoServices.deleteTodo(this.data.id).subscribe((res)=>{
      console.log("Data has been deleted")
    });
   console.log(this.data.id);
   this.dialogRef.close();

  }
}
