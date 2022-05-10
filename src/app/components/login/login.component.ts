import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

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
  }

  constructor(private accountServ: UserService) { }

  ngOnInit() {
  }

}
