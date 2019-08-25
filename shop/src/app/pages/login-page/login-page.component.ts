import { UserService } from './../../services/user.service';
import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  submited: boolean = false;
  loginSuccess: boolean = false;
  @Output() loginSuccessEvent = new EventEmitter();
  constructor(private userService: UserService, fb: FormBuilder) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get usernameControl(): AbstractControl {
    return this.loginForm.get('username');
  }

  get passwordControl(): AbstractControl {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.submited = true;

    if (this.loginForm.valid) {
      this.loginSuccess = this.userService.login(
        this.usernameControl.value,
        this.passwordControl.value
      );

      if (this.loginSuccess) {
        this.loginSuccessEvent.emit();
      }
    }
  }

  setSubmited() {
    this.submited = false;
  }
}
