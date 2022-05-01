import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  constructor(private authServ: AuthService) { }

  onSubmit() {

  }

  ngOnInit(): void {
  }

}
