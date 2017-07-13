import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositorySearchService } from './repository-search.service';

import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoPreviewComponent } from './repo-preview/repo-preview.component';
import { ReposComponent } from './repos/repos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    RepositorySearchService
  ],
  declarations: [
    RepoListComponent,
    RepoPreviewComponent,
    ReposComponent
  ],
  exports: [
    ReposComponent
  ]
})
export class GitHubModule { }
