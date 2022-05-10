import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
<<<<<<< HEAD
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  { path: "item/:id", component: ItemComponent }
=======
=======
>>>>>>> 3c779b8c7536bf7a87a540988bac70bbdf7f87bf
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
<<<<<<< HEAD
>>>>>>> 76645a9a1196ca72c0b07bfe796db3132af9c7f1
=======
>>>>>>> 3c779b8c7536bf7a87a540988bac70bbdf7f87bf
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
