import { Component, Input } from '@angular/core';

import { GitHubRepository } from '../model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {

  /**
   * The repos to display in the list
   *
   * @type {GitHubRepository[]}
   * @memberof RepoListComponent
   */
  @Input()
  repos: GitHubRepository[];
}
