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
        permissionConfirm =
          this.userService.currentUserValue &&
          this.userService.currentUserValue.role === 'admin';
        break;
      case 'user':
        permissionConfirm = this.userService.currentUserValue != null;

        break;
      default:
        throw new Error('parameter not valid: ' + permissionRequired);
    }
    return permissionConfirm;
  }
}
