import { UserService } from '../../core/services/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.userService.currentUserValue;
    if (currentUser) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    console.log('not logged in, want to access ', state.url);
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
