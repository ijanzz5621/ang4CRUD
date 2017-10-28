import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  newUser = new User();

  @Output() createNewUserEvent = new EventEmitter();

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  create() {
    // this.user = new User;
    // console.log(this.newUser);
    // this._userService.create(this.newUser);
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();
  }

}
