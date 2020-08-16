import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  constructor(public usuarioervice: usuarioService, private router: Router) {
    this.formRegister = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]
      ),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
  }
  register() {
    const user = { email: this.formRegister.controls.email.value, password: this.formRegister.controls.password.value };
    console.log(user);
    this.usuarioervice.register(user).subscribe(data => {
      this.usuarioervice.setToken(data.token);
      this.router.navigate(['new']);
    },
      error => {
        console.log(error)
      });
  }
}
