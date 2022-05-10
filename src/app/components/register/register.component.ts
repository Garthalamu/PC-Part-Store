import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  successIndication: boolean = true;
  ifEmpty : boolean = false;

  createAccount(userName: string, password: string, email: string, ccNumber: string) {
    if(userName.trim() == "" || password.trim() == "" || email.trim() == "" || ccNumber.trim() == "") {
      this.ifEmpty = true;
    }
    else {
      this.successIndication = this.accountServ.addAcount(userName, password, email, ccNumber);
      this.ifEmpty = false;
    }

    if (this.successIndication) {
      this.router.navigate(['/', 'login']);
    }
  }


  constructor(private accountServ: UserService, private router: Router) { }

  onSubmit() {

  }

  ngOnInit(): void {
  }

}
