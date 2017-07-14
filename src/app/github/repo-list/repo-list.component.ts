import { Component, Input, Output, EventEmitter } from '@angular/core';

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
   * @public
   * @type {GitHubRepository[]}
   * @memberof RepoListComponent
   */
  @Input()
  public repos: GitHubRepository[];

  /**
   * Emitted when a repo is selected from the list
   *
   * @public
   * @type {EventEmitter<GitHubRepository>}
   * @memberof RepoListComponent
   */
  @Output()
  public select: EventEmitter<GitHubRepository> = new EventEmitter();

  /**
   * Event handler for repo selection
   *
   * @private
   * @param {any} $event
   * @memberof RepoListComponent
   */
  private onSelect($event) {
    this.select.emit($event);
  }
}
