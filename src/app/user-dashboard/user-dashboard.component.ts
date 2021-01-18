import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  usernameLoggedIn: string;
  timeToAdd: string;
  taskName: string;
  dateToAdd: string;
  username: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addTask(): void {

  }

}
