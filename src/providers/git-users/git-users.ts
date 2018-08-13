import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from '../../models/users.interface';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class GitUsersProvider {

  constructor(public http: HttpClient) {

  }

  getUsers(user): Observable<users>{
    console.log("Enbtrii anufg");
    return this.http.get<users>('https://api.github.com/users/' + user);
  }

}
