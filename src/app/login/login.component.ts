import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  usuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(public usuarioService: usuarioService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]
      ),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {

  }

  async login() {
    let email = this.formLogin.controls.email.value;
    let pass = this.formLogin.controls.password.value;
    const user = { "email": email, "password": pass };
    this.usuarioService.login(user).subscribe(data => {
      this.usuarioService.setToken(data.token);
      this.router.navigate(['new'])
    },
      error => {
        console.log(error)
      })
  }
}
