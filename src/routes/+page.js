import {
  getPullRequests,
  getCommits,
  getIssues,
  getPushes,
  getStats,
  getTopContributors
} from "$lib/api/git";

export async function load() {
  const [prs, commits, issues, pushes, stats, top_contributors] = await Promise.all([
    getPullRequests(),
    getCommits(),
    getIssues(),
    getPushes(),
    getStats(),
    getTopContributors()
  ]);

  return {
    opened_issues: issues.opened_by_date,
    closed_issues: issues.closed_by_date,
    pushes,
    opened_prs: prs.opened_by_date,
    closed_prs: prs.closed_by_date,
    commits,
    stats,
    top_contributors
  };
}
