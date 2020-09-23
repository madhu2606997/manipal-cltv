import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { DragComponent } from './drag/drag.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
{
  path:'', 
  component:LoginComponent
},
{
  path : "dashboard",
  component:DashboardComponent,
  canActivate:[AuthGuard]
},
{
  path:"drag",
  component:DragComponent
},
{
  path:"table",
  component:TableComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
