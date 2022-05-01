import { Injectable } from '@angular/core';
import { sendPasswordResetEmail } from 'firebase/auth';
import { User } from 'src/app/service/user';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  signedIn = {
    userName: '',
    password: '',
    email: '',
    ccNumber: ''
  };

  signOut = {
    userName: '',
    password: '',
    email: '',
    ccNumber: ''
  };

  users: any;

  getPassword(password: string) {
    return password;
  }

  IdGenerator() {
    var num = 1;
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id >= num) {
        num = this.users[i].id;
      }
    }
    return ++num;
  }

  userNameDupCheck(userName: string) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].userName == userName) {
        return false;
      }
      return true;
    }
    return true;
  }

  login(userName: string, password: string)  {
    for (var i = 0; i < this.users.length; i++) {
      if(this.users[i].userName == userName) {
       if(this.users[i].password == this.getPassword(password)) {
         this.signedIn = this.users[i];

         return true;

       }
      }
    }
    return false
  }

  logOut() {
    this.signedIn = {
      userName:  '',
      password: '',
      email: '',
      ccNumber: ''

    };

  }

  addAcount(userName: string, password: string, email: string, ccNumber: string) {
    if (userName.trim() != "" && password.trim() != "" && email.trim() && ccNumber.trim() != "" ) {
      if (this.userNameDupCheck(userName)) {
        var newUser = {
          id: this.IdGenerator,
          userName: userName,
          password: this.getPassword(password),
          email: email,
          ccNumber: ccNumber
        };
        this.http.post(
            "https://pc-parts-store-db-default-rtdb.firebaseio.com/" +
              "Account.json",
            newUser
          )
          .subscribe(data => (this.users = data));
        this.users.push(newUser);
        this.login(userName, password);

        return true;
      }
    }
    return false;

  }

  constructor(private http: HttpClient) {
    this.http.get<[]>("https://pc-parts-store-db-default-rtdb.firebaseio.com/" +
    "Account.json").pipe(map(getData =>
      {
        let userArr: any[] = [];
        for (var key in getData)
        {
          userArr.push(getData[key]);
        }
        return userArr;
      })
    )
    .subscribe(data => (this.users = data));
}


}
