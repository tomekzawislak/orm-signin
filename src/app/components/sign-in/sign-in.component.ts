import { Component, OnInit } from '@angular/core';

export interface LoginModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginModel: LoginModel;
  readonly emailPattern: RegExp = new RegExp('[a-zA-Z0-9._%+-]+\@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}');

  constructor() {
    this.loginModel = {
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  login(): void {

  }

  formInvalid(f: any) {
    return f.submitted && f.invalid;
  }

  isFieldInvalid(f: any, fieldName: string): boolean {
    return f.submitted && f.controls[fieldName].invalid;
  }

}
