import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../models/user.model";
import {Observable} from "rxjs/Observable";

const ENDPOINT_BASE = '/api';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  fetchFollower(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(ENDPOINT_BASE + '/' + 'followers');
  }

  fetchFollowing(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(ENDPOINT_BASE + '/' + 'following');
  }
  fetchForUser() {
      return this.http.get<UserModel>(ENDPOINT_BASE + '/' + 'user');
    }

}
