import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {

  constructor(private httpClient: HttpClient, private cookies: CookieService, private router: Router) {


  }

  login(user: any): Observable<any> {
    return this.httpClient.post('https://reqres.in/api/login', user);
  };

  register(user: any): Observable<any> {
    return this.httpClient.post("https://reqres.in/api/register", user);
  };
  setToken(token: string) {
    this.cookies.set('token', token);
  };

  getToken() {
    return this.cookies.get('token');
  };

  deleteToken() {
    return this.cookies.delete('token');
  }


}
