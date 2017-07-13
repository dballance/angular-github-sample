import { Component, Input, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { GitHubRepository } from '../model';

@Component({
  selector: 'app-repo-preview',
  templateUrl: './repo-preview.component.html',
  styleUrls: ['./repo-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoPreviewComponent {

  /**
   * The repo
   *
   * @type {GitHubRepo}
   * @memberof RepoPreviewComponent
   */
  @Input()
  repo: GitHubRepository;

  @HostBinding()
  class = 'col-md-4';
}
