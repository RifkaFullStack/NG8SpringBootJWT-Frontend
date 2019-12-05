import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../register/register/register.component';

const routes: Routes = [ 
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  ];
  
@NgModule({

  imports: [CommonModule , RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
