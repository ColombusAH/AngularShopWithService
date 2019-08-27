import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  userHavePermission(permissionRequired: string = 'admin'): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
      user &&
      (<string>user.role).toLowerCase() === permissionRequired.toLowerCase()
    );
  }

  constructor() {}
}
