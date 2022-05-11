import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { User } from '../objects/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  signedIn = new User();

  signOut = new User();

  users: User[] = [];

  getPassword(password: string) {
    return password;
  }

  getSignedInUser(): User {
    delete this.users[this.users.indexOf(this.signedIn)]
    return this.signedIn;
  }

  updateUsersCart(user: User): void {
    this.http.delete("https://pc-parts-store-db-default-rtdb.firebaseio.com/" + "Account.json").subscribe(data => {
      this.users.push(user);
      for (let u of this.users) {
        this.http.post("https://pc-parts-store-db-default-rtdb.firebaseio.com/" + "Account.json",
          u).subscribe();
      }
    })
  }

  IdGenerator() {
    var num = 1;
    for (var i = 0; i < this.users.length; i++) {
      try {
        if (this.users[i].id >= num) {
          num = this.users[i].id;
        }
      }
      catch {
        continue;
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
    this.signedIn = new User();

  }

  addAcount(userName: string, password: string, email: string, ccNumber: string): boolean {
    // Checks to see if at least the userName and password strings are filled out
    if (userName == null || password == null) {
      return false;
    }

    if (userName.trim() != "" && password.trim() != "" && email.trim() && ccNumber.trim() != "" ) {
      if (this.userNameDupCheck(userName)) {
        var newUser: User = new User();
        newUser.id = this.IdGenerator(),
        newUser.userName = userName;
        newUser.password = this.getPassword(password);
        newUser.email = email;
        newUser.cart = [];
        this.http.post(
            "https://pc-parts-store-db-default-rtdb.firebaseio.com/" +
              "Account.json",
            newUser
          ).subscribe();
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
