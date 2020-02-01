import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGaurd implements CanActivate {

  constructor(
    private router : Router,
    private authService : AuthService) { }

  canActivate( _route , state : RouterStateSnapshot) {
    if(this.authService.isLoggedIn()){
      return true;
    }
    this.router.navigate(['/login'], { queryParams : { returnUrl : state.url }});
    return false;
  }
}
