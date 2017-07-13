import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { GitHubSortField, GitHubSortOrder, GitHubRepository } from './model';

@Injectable()
export class RepositorySearchService {

  private API_BASE = 'https://api.github.com/search/repositories';

  constructor(
    private http: Http
  ) { }

  getRepositoriesForKeyword(
    keyword: string,
    sortField: GitHubSortField = GitHubSortField.Stars,
    sortOrder: GitHubSortOrder = GitHubSortOrder.Descending,
  ): Observable<GitHubRepository[]> {
    return this.http
      .get(`${this.API_BASE}?q=${keyword}&sort=${sortField}&order=${sortOrder}`)
      .map(res => res.json().items || []);
  }

}
