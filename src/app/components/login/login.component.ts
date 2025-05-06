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

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get fc() {
    return this.loginForm.controls;
  }

  submitLogin() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    console.log(' form values ', this.fc);

    if(this.fc['email']?.value === "emily.johnson@x.dummyjson.com" && this.fc['password']?.value ==="emilyspass"){
      sessionStorage.setItem("isLoggin", 'true');
    }
    else sessionStorage.setItem("isLoggin", 'false');
    
  }
}
