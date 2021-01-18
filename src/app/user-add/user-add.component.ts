import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  username: string;

  constructor(public userService: UserService,
              public router: Router) { }

  ngOnInit(): void {
  }


  saveUser(): void {
    this.userService.saveUser(this.username);
    this.router.navigate([this.username]);
  }

}
