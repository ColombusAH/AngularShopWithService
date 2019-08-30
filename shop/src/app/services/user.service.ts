import { User } from './../models/user.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  private readonly _usersList: User[];
  private _userLoggedIn: boolean = false;
  constructor() {
    this._usersList = [
      new User('admin', 'admin', 'admin'),
      new User('user', 'user', 'user')
    ];
  }

  login(username: string, pass: string): boolean {
    const user = this._usersList.find(
      u => u.username === username && u.password === pass
    );
    if (user) {
      localStorage.setItem(
        'user',
        JSON.stringify({ user: username, role: user.role })
      );
      this._userLoggedIn = true;
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this._userLoggedIn = false;
  }

  userLoggedIn(): boolean {
    return (this._userLoggedIn = localStorage.getItem('user') !== null);
  }

  userIsAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && (<string>user.role).toLowerCase() === 'admin';
  }

  ngOnInit(): void {
    this._userLoggedIn = this.userLoggedIn();
  }
}
