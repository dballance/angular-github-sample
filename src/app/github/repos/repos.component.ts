import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GitHubRepository } from '../model';
import { RepositorySearchService } from '../repository-search.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  repos$: Observable<GitHubRepository[]>;

  constructor(
    private repos: RepositorySearchService
  ) {
    this.repos$ = this.repos.getRepositoriesForKeyword('angular');
  }

  ngOnInit() {

  }

}
