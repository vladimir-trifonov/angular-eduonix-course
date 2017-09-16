import { Component, Input } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {
  _username: string;
  user: any[];
  repos: any[];

  @Input()
  set username(username: string) {
    this._username = username;
    this.searchUser();
  }

  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  searchUser() {
    this._githubService.updateUser(this._username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
}
