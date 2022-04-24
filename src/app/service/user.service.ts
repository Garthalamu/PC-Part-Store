import { Injectable } from '@angular/core';
import { User } from 'src/app/service/user';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // USERS: User[] = [
  //   {
  //     firstName: 'tester1F',
  //     lastName: 'tester1L',
  //     creditCard: 'tester1C',
  //     email: 'tester1E',
  //     phone: 'tester1P',
  //     address: 'tester1A'

  //   }
  // ];

  // userLoggedOut: string = '';

  // loggedOut() {
  //   this.userLoggedOut = '';
  // }

  // getUser(): User[] {
  //   return this.USERS;
  // }

  // addUser(user: User) {
  //   this.USERS.push(user);
  // }



  constructor(private AuthService: AuthService) { }

  onSubmit() {
    const firstName = (<HTMLInputElement>document.getElementById("firstName"))
  }
}
