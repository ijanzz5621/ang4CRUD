import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  create(user: User) {
    return this._http.post('/users', user).toPromise();
  }

  destroy(user: User) {
    return this._http.delete('/users/' + user._id).toPromise();
  }

  update(user: User) {
    return this._http.put('/users/' + user._id, user).toPromise();
  }

  getUsers() {
    return this._http.get('/users').toPromise();
  }

  getUser(user: User) {
    return this._http.get('/users/' + user._id).toPromise();
  }

}
