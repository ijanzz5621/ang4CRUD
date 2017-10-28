import { User } from './../user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
