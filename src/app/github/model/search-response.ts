/**
 * The search response from the GitHub API.
 *
 * @export
 * @class GitHubSearchResults
 * @template T
 */
export class GitHubSearchResults<T> {
  public total_count: number;
  public imcomplete_results: number;
  public items: T[];
}
