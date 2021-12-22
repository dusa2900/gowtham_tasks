import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamAnsComponent } from './components/exam-ans/exam-ans.component';
//import { ExamQuestComponent } from './components/exam-quest/exam-quest.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'examquest/:username',component:HomeComponent},
  {path:'examans/:username/:id',component:ExamAnsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
