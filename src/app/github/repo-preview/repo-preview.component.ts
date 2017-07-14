import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
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
   * @public
   * @type {GitHubRepo}
   * @memberof RepoPreviewComponent
   */
  @Input()
  public repo: GitHubRepository;

  /**
   * Event emitter when the "View" button is pressed
   *
   * @public
   * @type {EventEmitter<GitHubRepository>}
   * @memberof RepoPreviewComponent
   */
  @Output()
  public view: EventEmitter<GitHubRepository> = new EventEmitter<GitHubRepository>();
}
