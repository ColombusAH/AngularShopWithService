import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  submited: boolean = false;
  loginSuccess: boolean = false;
  returnUrl: string;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.userService.currentUserValue) {
      this.router.navigate(['/']);
    }
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
        this.router.navigate([this.returnUrl]);
      }
    }
  }

  setSubmited() {
    this.submited = false;
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
}
