import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GitHubRepository } from '../model';
import { RepositorySearchService } from '../repository-search.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent {
  /**
   * The repos, fetched from the api.
   *
   * @type {Observable<GitHubRepository[]>}
   * @memberof ReposComponent
   */
  public repos$: Observable<GitHubRepository[]>;

  /**
   * The selected repo
   *
   * @public
   * @type {GitHubRepository}
   * @memberof ReposComponent
   */
  public selected: GitHubRepository;

  constructor(
    private repos: RepositorySearchService
  ) {
    this.repos$ = this.repos.getRepositoriesForKeyword('angular');
  }

  /**
   * Event handler when a repo is selected
   *
   * @param {GitHubRepository} repo
   * @memberof ReposComponent
   */
  public onRepoSelected(repo: GitHubRepository) {
    this.selected = repo;
  }

}
