import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from '../objects/User';
import {USERS} from '../objects/Userdb'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAccountData(): Observable<User[]>{
    return of(USERS);
  }

  getUserbyID(id: number):Observable<User>{
    let user: User = new User();
    USERS.forEach((value)=>{
      let done: boolean=false;
      if(!done){
        if(user.id == id){
          user = value;
          done = true;
        }
      }
      return;
    });
    return of(user);
  }
}
