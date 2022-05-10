import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { ItemComponent } from './components/item/item.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
=======
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
>>>>>>> 76645a9a1196ca72c0b07bfe796db3132af9c7f1

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AuthService } from './service/auth';
import { environment } from 'src/environments/environment';
import { FiltersComponent } from './components/filters/filters.component';
@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ItemComponent,
FiltersComponent
=======
    LoginComponent,
    RegisterComponent
>>>>>>> 76645a9a1196ca72c0b07bfe796db3132af9c7f1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule
=======
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
>>>>>>> 76645a9a1196ca72c0b07bfe796db3132af9c7f1
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
