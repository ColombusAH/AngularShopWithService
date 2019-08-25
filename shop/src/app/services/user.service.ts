import { User } from './../models/user.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  usersList: User[];
  private _userLoggedIn: boolean = false;
  constructor() {
    this.usersList = [new User('avner', '1234', 'admin')];
  }

  login(username: string, pass: string): boolean {
    const user = this.usersList.find(
      u => u.username === username && u.password === pass
    );
    if (user) {
      localStorage.setItem(
        'user',
        JSON.stringify({ user: username, role: user.role })
      );
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }

  userLoggedIn(): boolean {
    return (this._userLoggedIn = localStorage.getItem('user') !== null);
  }

  ngOnInit(): void {
    this._userLoggedIn = this.userLoggedIn();
  }
}
