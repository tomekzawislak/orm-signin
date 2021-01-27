import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailPattern, FullNamePattern, PasswordPattern } from '../../constants/form-validation';
import { ToastMessageService } from '../../services/toast-message.service';

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
  registerModel: RegisterModel = {
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  };
  @ViewChild('f') f: NgForm;
  @ViewChildren('inputs') inputs: QueryList<ElementRef>;
  readonly emailPattern: RegExp = EmailPattern;
  readonly fullNamePattern: RegExp = FullNamePattern;
  readonly passwordPattern: RegExp = PasswordPattern;

  constructor(private toastr: ToastMessageService) {
  }

  signUp(): void {
    this.f.resetForm();
    this.inputs.forEach(item => item.nativeElement.blur());
    this.toastr.showPrimary('Your account has been created');
  }

  formInvalid(f: NgForm): boolean {
    return f.submitted && f.invalid;
  }

  isFieldInvalid(f: NgForm, fieldName: string): boolean {
    return this.formInvalid(f) && f.controls[fieldName].invalid;
  }

}
