import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailPattern } from '../../constants/form-validation';

export interface LoginModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  loginModel: LoginModel;
  readonly emailPattern: RegExp = EmailPattern;

  constructor() {
    this.loginModel = {
      email: '',
      password: ''
    };
  }

  login(): void {

  }

  formInvalid(f: NgForm): boolean {
    return f.submitted && f.invalid;
  }

  isFieldInvalid(f: NgForm, fieldName: string): boolean {
    return this.formInvalid(f) && f.controls[fieldName].invalid;
  }

}
