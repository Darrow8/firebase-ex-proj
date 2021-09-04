import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: HomeComponent, // * this page is for once the user has already authenticated
    path:'home'
  },
  {
    component: AuthComponent, // * this is landing, we will prompt the user to authenticate
    path:'auth' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
