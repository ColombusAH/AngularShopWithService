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

    permissionConfirm =
      this.userService.currentUserValue.role === permissionRequired;

    return permissionConfirm;
  }
}
