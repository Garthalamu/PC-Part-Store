import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FiltersComponent } from './components/filters/filters.component';
<<<<<<< HEAD
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> f6bec8b2adcd4a5013d1953613987740b6493760
import { ItemCreatorComponent } from './components/item-creator/item-creator.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    LoginComponent,
    RegisterComponent,
    ItemCreatorComponent,
    RegisterComponent,
    FiltersComponent,
<<<<<<< HEAD
    DashboardComponent,
    CartComponent,
    NavbarComponent
=======
    NavbarComponent,
    DashboardComponent
>>>>>>> f6bec8b2adcd4a5013d1953613987740b6493760
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
