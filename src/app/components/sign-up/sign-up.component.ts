import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailPattern, FullNamePattern, PasswordPattern } from '../../constants/form-validation';

export interface RegisterModel {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  registerModel: RegisterModel;
  readonly emailPattern: RegExp = EmailPattern;
  readonly fullNamePattern: RegExp = FullNamePattern;
  readonly passwordPattern: RegExp = PasswordPattern;

  constructor() {
    this.registerModel = {
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    };
  }

  signUp(): void {

  }

  formInvalid(f: NgForm): boolean {
    return f.submitted && f.invalid;
  }

  isFieldInvalid(f: NgForm, fieldName: string): boolean {
    return this.formInvalid(f) && f.controls[fieldName].invalid;
  }

}
