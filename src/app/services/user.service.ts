import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly USER_PREFIX = 'U_';

  constructor() { }


  getUser(userId): string {
    return localStorage.getItem(this.USER_PREFIX + userId);
  }

  isUserPresent(userId): boolean {
    return !!localStorage.getItem(this.USER_PREFIX + userId);
  }

  saveUser(userId): void {
    localStorage.setItem(this.USER_PREFIX + userId, userId);
  }

}
