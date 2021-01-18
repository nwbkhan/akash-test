import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserActiveGuard implements CanActivate {


  constructor(public router: Router,
              public userService: UserService,
              public route: ActivatedRoute) {
  }

  collectRouteParams(router: Router): any {
    let params = {};
    const stack: ActivatedRouteSnapshot[] = [router.routerState.snapshot.root];
    while (stack.length > 0) {
      // tslint:disable-next-line:no-non-null-assertion
      const route = stack.pop()!;
      params = {...params, ...route.params};
      stack.push(...route.children);
    }
    return params;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userPresent = false;
    const params = this.collectRouteParams(this.router);

    const usernameLoggedIn = params.username;
    // navigate to user-add component
    if (!usernameLoggedIn) {
      this.gotoUserAddScreen();
    }
    // check the user present in the system or not
    if (this.userService.isUserPresent(usernameLoggedIn)) {
      // user not found, redirect to user-add
      this.gotoUserAddScreen();
    }

    userPresent = true;

    return userPresent;
  }


  private gotoUserAddScreen(): void {
    this.router.navigate(['/']);
  }
}
