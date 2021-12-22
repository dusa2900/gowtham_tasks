import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addEmp',component:AddEmpComponent,canActivate:[AuthGuard]},
  {path:'empList',component:EmpListComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
