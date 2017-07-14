import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RepositorySearchService } from './repository-search.service';

import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoPreviewComponent } from './repo-preview/repo-preview.component';
import { ReposComponent } from './repos/repos.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    RepositorySearchService,
  ],
  declarations: [
    RepoListComponent,
    RepoPreviewComponent,
    ReposComponent,
    RepoDetailComponent,
  ],
  exports: [
    ReposComponent,
  ]
})
export class GitHubModule { }
