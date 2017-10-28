import { Component, OnInit } from '@angular/core';

// user class
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // users: User[] = [];
  users: Array<User> = [];

  constructor() { }

  ngOnInit() {
  }

}
