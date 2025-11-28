import {
  opened_issues,
  closed_issues,
  commits,
  pushes,
  pull_requests_opened,
  pull_requests_closed,
  top_contributors,
} from "$lib/data/stats";
export async function getCommits() {
  return await commits;
  /*
  const since_date = new Date();
  since_date.setDate(since_date.getDate() - 29);
  const res = await fetch(
    "https://api.github.com/repos/sveltejs/svelte/commits?per_page=100&since=" +
      since_date.toISOString()
  );
  const commits = await res.json();
  const commits_by_date = [];
  for (let i = 29; i >= 0; i--) {
    const day = new Date();
    day.setDate(day.getDate() - i);
    const count = commits.filter((c) => {
      const commitDate = new Date(c.commit.committer.date);
      return (
        commitDate.getFullYear() === day.getFullYear() &&
        commitDate.getMonth() === day.getMonth() &&
        commitDate.getDate() === day.getDate()
      );
    }).length;
    commits_by_date.push(count);
  }
  return commits_by_date;*/
}
export async function getIssues() {
  return await { opened_by_date: opened_issues, closed_by_date: closed_issues };
  /*
  const since_date = new Date();
  since_date.setDate(since_date.getDate() - 29);
  const date_str = since_date.toISOString().split("T")[0];
  const opened_res = await fetch(
    "https://api.github.com/search/issues?q=repo:sveltejs/svelte+type:issue+created:>" +
      date_str
  );
  const opened_data = await opened_res.json();
  const closed_res = await fetch(
    "https://api.github.com/search/issues?q=repo:sveltejs/svelte+type:issue+is:closed+created:>" +
      date_str
  );
  const closed_data = await closed_res.json();
  const openedIssues = opened_data.items || [];
  const closedIssues = closed_data.items || [];
  const opened_by_date = [];
  const closed_by_date = [];
  for (let i = 29; i >= 0; i--) {
    const day = new Date();
    day.setDate(day.getDate() - i);
    const openedCount = openedIssues.filter((issue) => {
      const created = new Date(issue.created_at);
      return (
        created.getFullYear() === day.getFullYear() &&
        created.getMonth() === day.getMonth() &&
        created.getDate() === day.getDate()
      );
    }).length;
    const closedCount = closedIssues.filter((issue) => {
      const closed = new Date(issue.closed_at);
      return (
        closed &&
        closed.getFullYear() === day.getFullYear() &&
        closed.getMonth() === day.getMonth() &&
        closed.getDate() === day.getDate()
      );
    }).length;
    opened_by_date.push(openedCount);
    closed_by_date.push(closedCount);
  }
  return { opened_by_date, closed_by_date };*/
}
export async function getPullRequests() {
  return await {
    opened_by_date: pull_requests_opened,
    closed_by_date: pull_requests_closed,
  };
  /*
  const since_date = new Date();
  since_date.setDate(since_date.getDate() - 29);
  const date_str = since_date.toISOString().split("T")[0];
  const opened_res = await fetch(
    "https://api.github.com/search/issues?q=repo:sveltejs/svelte+type:pr+created:>" +
      date_str
  );
  const opened_data = await opened_res.json();
  const closed_res = await fetch(
    "https://api.github.com/search/issues?q=repo:sveltejs/svelte+type:pr+is:closed+created:>" +
      date_str
  );
  const closed_data = await closed_res.json();
  const opened_prs = opened_data.items || [];
  const closed_prs = closed_data.items || [];
  const opened_by_date = [];
  const closed_by_date = [];
  for (let i = 29; i >= 0; i--) {
    const day = new Date();
    day.setDate(day.getDate() - i);
    const opened_count = opened_prs.filter((pr) => {
      const created = new Date(pr.created_at);
      return (
        created.getFullYear() === day.getFullYear() &&
        created.getMonth() === day.getMonth() &&
        created.getDate() === day.getDate()
      );
    }).length;
    const closed_count = closed_prs.filter((pr) => {
      const closed = new Date(pr.closed_at);
      return (
        closed &&
        closed.getFullYear() === day.getFullYear() &&
        closed.getMonth() === day.getMonth() &&
        closed.getDate() === day.getDate()
      );
    }).length;
    opened_by_date.push(opened_count);
    closed_by_date.push(closed_count);
  }
  return { opened_by_date, closed_by_date };*/
}
export async function getPushes() {
  return pushes;
  /*
  const since_date = new Date();
  since_date.setDate(since_date.getDate() - 29);
  const res = await fetch(
    "https://api.github.com/repos/sveltejs/svelte/events?per_page=100"
  );
  const events = await res.json();
  const pushes_by_date = [];
  for (let i = 29; i >= 0; i--) {
    const day = new Date();
    day.setDate(day.getDate() - i);
    const count = events.filter((e) => {
      if (e.type !== "PushEvent") return false;
      const pushDate = new Date(e.created_at);
      return (
        pushDate.getFullYear() === day.getFullYear() &&
        pushDate.getMonth() === day.getMonth() &&
        pushDate.getDate() === day.getDate() &&
        pushDate >= since_date
      );
    }).length;
    pushes_by_date.push(count);
  }
  return pushes_by_date;*/
}
export async function getTopContributors() {
  return top_contributors;
  /*
  const sinceDate = new Date();
  sinceDate.setDate(sinceDate.getDate() - 29);
  const res = await fetch(
    `https://api.github.com/repos/sveltejs/svelte/commits?per_page=100&since=${sinceDate.toISOString()}`
  );
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const commits = await res.json();
  // Count commits per author
  const author_counts = {};
  for (const commit of commits) {
    const author = commit.commit.author.name; // fallback if no GitHub username
    if (!(author in author_counts)) author_counts[author] = 0;
    author_counts[author]++;
  }
  // Get top 3 contributors
  const top_contributors = Object.entries(author_counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .map(c => c.name);
  // Prepare daily counts for top contributors
  const contributions_by_date = top_contributors.map(name => {
    const contributions = [];
    for (let i = 29; i >= 0; i--) {
      const day = new Date();
      day.setDate(day.getDate() - i);
      const count = commits.filter(c => {
        const commit_date = new Date(c.commit.committer.date);
        return (
          (c.commit.author.name === name) &&
          commit_date.getFullYear() === day.getFullYear() &&
          commit_date.getMonth() === day.getMonth() &&
          commit_date.getDate() === day.getDate()
        );
      }).length;
      contributions.push(count);
    }
    return { name, contributions };
  });
  return contributions_by_date;*/
}
export async function getStats(owner, repo) {
  return {
    stars: 2300,
    watchers: 327,
    forks: 67,
    openIssues: 43,
    subscribers: 897,
    sizeKB: 116743,
  };
  /* 
  const res = await fetch(`https://api.github.com/repos/sveltejs/svelte`);
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const data = await res.json();
  return {
    stars: data.stargazers_count,
    watchers: data.watchers_count,
    forks: data.forks_count,
    openIssues: data.open_issues_count,
    subscribers: data.subscribers_count,
    sizeKB: data.size,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };*/
}
