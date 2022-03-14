import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup =
    this.formBuilder.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
    });
  loading = false;
  isSubmitted = false;
  
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.loading = true;
    this.authService.login(this.loginForm.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
      () => {
        this.router.navigate(['home']);
      },
      (erro) => {
        console.log('deu erro', erro)
      }
    );
  }  
}
