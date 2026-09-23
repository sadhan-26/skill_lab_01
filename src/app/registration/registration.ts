import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  styleUrl: './registration.css',
  templateUrl: './registration.html',
})
export class Registration {
  submitted = false;

  readonly registrationForm = new FormGroup({
    workspaceName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    teamSize: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(private readonly router: Router) {}

  submit(): void {
    this.submitted = true;
    this.registrationForm.markAllAsTouched();

    if (this.registrationForm.valid) {
      this.registrationForm.reset();
      this.router.navigate(['/home']);
    }
  }
}
