import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = '233c08c48854f709cf4d';
  private client_secret = 'ae01576ba92ba775fc916cffbe23d4c724d21afb';

  constructor(private _http: Http) { }

  getUser() {
    if (!this.username) {
      return new EmptyObservable();
    }

    return this._http.get(`http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }

  getRepos() {
    if (!this.username) {
      return new EmptyObservable();
    }

    return this._http.get(`http://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&
    client_secret=${this.client_secret}`)
      .map(res => res.json());
  }

  updateUser(username) {
    this.username = username;
  }
}
