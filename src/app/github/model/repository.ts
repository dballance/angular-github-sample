/**
 * A GitHub Repository
 *
 * @export
 * @class GitHubRepository
 */
export class GitHubRepository {
  public id: number;
  public name: string;
  public url: string;
  public description: string;
  public html_url: string;
  // DateTime
  public created_at: string;
  // DateTime
  public updated_at: string;
  // DateTime
  public pushed_at: string;
  public stargazers_count: number;
}
