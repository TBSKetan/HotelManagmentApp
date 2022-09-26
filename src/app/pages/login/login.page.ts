import { Component, OnInit } from '@angular/core';
import { AppString } from 'src/app/utility/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private stringName = AppString; 
  login = {
    email: "",
    password: "",
  }

  constructor() { }

  ngOnInit() {
  }

}
