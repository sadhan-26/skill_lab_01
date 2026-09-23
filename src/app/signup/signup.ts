import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  styleUrl: './signup.css',
  templateUrl: './signup.html',
})
export class Signup {
  submitted = false;
  signupNotice = '';

  readonly signupForm = new FormGroup({
    fullName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  constructor(route: ActivatedRoute, private readonly router: Router) {
    if (route.snapshot.queryParamMap.get('reason') === 'invalid-credentials') {
      this.signupNotice = 'We could not verify those credentials. Create an account to continue.';
    }
  }

  submit(): void {
    this.submitted = true;
    this.signupForm.markAllAsTouched();

    if (this.signupForm.valid) {
      this.signupForm.reset();
      this.router.navigate(['/home']);
    }
  }
}
