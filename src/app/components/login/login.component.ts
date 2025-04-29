import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isSubmitted = false;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOninit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get fc() {
    return this.loginForm.controls;
  }

  submitLogin() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    console.log(' form values ', this.fc['email'].value);
    
  }
}
