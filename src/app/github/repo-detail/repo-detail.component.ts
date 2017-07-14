import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { GitHubRepository } from '../model';


@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss'],
})
export class RepoDetailComponent implements OnChanges {

  constructor() { }

  /**
   * The repo
   *
   * @public
   * @type {GitHubRepo}
   * @memberof RepoPreviewComponent
   */
  @Input()
  public repo: GitHubRepository;

  /**
   * The filtered repository props
   *
   * @public
   * @type {Partial<GitHubRepository>}
   * @memberof RepoDetailComponent
   */
  public filteredRepo: Partial<GitHubRepository>;

  /**
   * The current filter value
   *
   * @public
   * @type {string}
   * @memberof RepoDetailComponent
   */
  public filter: string;


  ngOnChanges() {
    this.filterRepoProps(this.filter);
  }

  /**
   * Filters props from the current repo which
   * don't contain the filter.
   *
   * @private
   * @param {string} [filter]
   * @returns
   * @memberof RepoDetailComponent
   */
  private filterRepoProps(filter?: string) {
    if (!filter) { return this.filteredRepo = this.repo; }
    this.filter = filter;
    this.filteredRepo = Object.keys(this.repo)
      .filter(key => key.indexOf(filter) > -1)
      .reduce((repo, key) => {
        repo[key] = this.repo[key];
        return repo;
      } , {} );
  }

}
