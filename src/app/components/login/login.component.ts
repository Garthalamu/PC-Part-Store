import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  incorrectLogin: boolean = false;

  getLogin(userName: string, password: string) {
    if(this.accountServ.login(userName, password) == false) {
      this.incorrectLogin = true;
    } else if(this.accountServ.login(userName, password) == true) {
      this.incorrectLogin = false;
    }

    if (!this.incorrectLogin) {
      this.router.navigate(['/', 'dashboard'])
    }
  }

  constructor(private accountServ: UserService, private router: Router) { }

  ngOnInit() {
  }

}
