import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './../models/user.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _usersList: User[];
  private _currentUserSubject: BehaviorSubject<User>;
  public currentUserState: Observable<User>;
  constructor() {
    this._usersList = [
      new User('admin', 'admin', 'admin'),
      new User('user', 'user', 'user')
    ];
    this._currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user'))
    );
    this.currentUserState = this._currentUserSubject.asObservable();
  }

  login(username: string, pass: string): boolean {
    const user: User = this._usersList.find(
      u => u.username === username && u.password === pass
    );
    if (user) {
      localStorage.setItem(
        'user',
        JSON.stringify({ user: username, role: user.role })
      );
      this._currentUserSubject.next(user);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
    this._currentUserSubject.next(null);
  }

  public get currentUserValue() {
    return this._currentUserSubject.value;
  }
}
