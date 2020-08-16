import { Component } from '@angular/core';
import { usuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public usuarioService: usuarioService) { }

  logOut() {
    this.usuarioService.deleteToken();

  }


}
