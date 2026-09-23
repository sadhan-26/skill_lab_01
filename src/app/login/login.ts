import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  submitted = false;
  loginError = '';

  readonly loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(private readonly router: Router) {}

  submit(): void {
    this.submitted = true;
    this.loginError = '';
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.getRawValue();
    const validCredentials = email === 'demo@myapp.com' && password === 'password123';

    if (validCredentials) {
      this.router.navigate(['/home']);
      return;
    }

    this.router.navigate(['/signup'], {
      queryParams: { reason: 'invalid-credentials' },
    });
  }
}
