import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodListComponent } from './todo-list/tod-list.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:'/all-todos'},
  {path:'all-todos',component:TodListComponent},
  //{path:'delete/todos/:id', component:TodListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
