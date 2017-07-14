import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { GitHubSortField, GitHubSortOrder, GitHubRepository } from './model';

@Injectable()
export class RepositorySearchService {

  /**
   * The API Base url
   *
   * @private
   * @memberof RepositorySearchService
   */
  private API_BASE = 'https://api.github.com/search/repositories';

  constructor(
    private http: Http
  ) { }

  /**
   * Gets the first page of repos with the provided keyword.
   * By default, the collection is sorted by number of stars.
   *
   * @public
   * @param {string} keyword
   * @param {string} [filter]
   * @param {GitHubSortField} [sortField=GitHubSortField.Stars]
   * @param {GitHubSortOrder} [sortOrder=GitHubSortOrder.Descending]
   * @returns {Observable<GitHubRepository[]>}
   * @memberof RepositorySearchService
   */
  public getRepositoriesForKeyword(
    keyword: string,
    filter?: string,
    sortField: GitHubSortField = GitHubSortField.Stars,
    sortOrder: GitHubSortOrder = GitHubSortOrder.Descending,
  ): Observable<GitHubRepository[]> {

    let url = `${this.API_BASE}?q=${keyword}&sort=${sortField}&order=${sortOrder}`;

    if (filter) {
      url += `&filter=${filter}`;
    }

    return this.http
      .get(url)
      .map(res => res.json().items || []);
  }

}
