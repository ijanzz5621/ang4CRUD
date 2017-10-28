import { User } from './../user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users;

  @Output() destroyUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  destroy(user: User) {
    console.log('send user to main component!');
    return this.destroyUserEvent.emit(user);
  }

}
