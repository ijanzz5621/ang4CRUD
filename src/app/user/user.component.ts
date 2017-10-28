import { UserService } from './user.service';
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
  users: Array<User> = [
    new User(1, 'Sharizan', 'Redzuan', 'sharizan_81@yahoo.com'),
    new User(2, 'Azian', 'Majid', 'azianm73@gmail.com'),
    new User(3, 'Irfan', 'ZA', 'irfan@yahoo.com')
  ];

  constructor(private _userService: UserService) { }
  // constructor() { }

  ngOnInit() {
    // this.getUsers();
  }

  getUsers() {
    // this._userService.getUsers()
    // .then(users => this.users = users);
  }

  create(user: User) {
    console.log(user);
    this.users.push(user);
  }

  destroy(user: User) {
    const idx = this.users.indexOf(user);
    this.users.splice(idx, 1);
  }

}
