import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { usuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutoGuard implements CanActivate {

  constructor(private usuarioervice: usuarioService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.usuarioervice.getToken()) {
      return true
    } else {
      return this.router.parseUrl('/login');
    }
  }

}
