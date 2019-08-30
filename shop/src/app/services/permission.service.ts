import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  constructor(private userService: UserService) {}

  userHavePermission(permissionRequired: string = 'admin'): boolean {
    permissionRequired = permissionRequired.toLowerCase();
    let permissionConfirm: boolean;
    switch (permissionRequired) {
      case 'admin':
        permissionConfirm = this.userService.userIsAdmin();
        break;
      case 'user':
        permissionConfirm = this.userService.userLoggedIn();
        console.log({ permissionConfirm });

        break;
      default:
        throw new Error('parameter not valid: ' + permissionRequired);
    }
    return permissionConfirm;
  }
}
