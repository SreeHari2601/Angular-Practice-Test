import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent } from './children/children.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"details/:id", component:EmpDetailsComponent},
  {path:"children" , component:ChildrenComponent},
  {path:"parent" , component:ParentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
