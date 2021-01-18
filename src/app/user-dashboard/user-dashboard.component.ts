import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  timeToAdd: string;
  taskName: FormControl = new FormControl('');
  dateToAdd: string;
  username: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
    this.route.params.subscribe(params => {
      this.username = params.username;
    });
  }

  ngOnInit(): void {
  }

  addTask(): void {

  }

}
