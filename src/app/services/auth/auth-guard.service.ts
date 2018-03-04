import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      localStorage.removeItem('token');
    }
    return this.authService.isLoggedIn();
  }

}
