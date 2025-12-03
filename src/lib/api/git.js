const pull_requests_opened = [
  0, 0, 1, 5, 2, 1, 7, 6, 9, 2, 2, 3, 0, 1, 0, 0, 4, 3, 7, 2, 1, 0, 1, 1, 2, 0,
  3, 1, 2, 1,
];
const pull_requests_closed = [
  1, 1, 2, 3, 2, 0, 7, 9, 8, 10, 2, 10, 1, 4, 7, 7, 4, 3, 2, 2, 5, 0, 1, 3, 2,
  0, 7, 8, 4, 1,
];
const opened_issues = [
  0, 0, 0, 1, 0, 1, 2, 0, 0, 1, 2, 1, 0, 4, 2, 7, 0, 0, 1, 2, 1, 1, 1, 1, 2, 0,
  3, 1, 1, 1,
];
const closed_issues = [
  2, 2, 1, 0, 1, 0, 0, 1, 2, 4, 6, 2, 6, 6, 8, 7, 3, 0, 0, 1, 0, 0, 2, 3, 2, 0,
  8, 5, 5, 2,
];
const pushes = [
  4, 4, 7, 9, 1, 1, 12, 10, 3, 16, 16, 19, 15, 10, 8, 8, 9, 15, 17, 22, 3, 4,
  14, 19, 18, 16, 5, 7, 9, 5,
];
const commits = [
  10, 17, 12, 17, 21, 10, 11, 12, 19, 14, 14, 17, 15, 20, 12, 16, 11, 19, 18,
  22, 9, 8, 11, 22, 23, 14, 19, 7, 8, 3,
];
const top_contributors = [
  {
    name: "0xDev42",
    contributions: [
      10, 17, 0, 0, 21, 10, 0, 0, 19, 0, 0, 1, 5, 2, 12, 16, 11, 9, 8, 2, 9, 8,
      0, 0, 3, 4, 19, 7, 8, 3,
    ],
  },
  {
    name: "CodeNinja1337",
    contributions: [
      17, 7, 0, 13, 27, 14, 10, 2, 13, 10, 0, 1, 5, 2, 12, 16, 11, 9, 8, 2, 9,
      8, 0, 1, 0, 0, 9, 17, 18, 13,
    ],
  },
  {
    name: "HashKing",
    contributions: [
      4, 7, 4, 14, 21, 10, 32, 22, 19, 26, 43, 32, 5, 0, 0, 16, 11, 28, 28, 2,
      4, 17, 13, 2, 7, 4, 9, 17, 18, 3,
    ],
  },
];

function getMockCommits() {
  return commits;
}

function getMockIssues() {
  return { opened_by_date: opened_issues, closed_by_date: closed_issues };
}

function getMockPrs() {
  return {
    opened_by_date: pull_requests_opened,
    closed_by_date: pull_requests_closed,
  };
}

function getMockPushes() {
  return pushes;
}

function getMockContributors() {
  return top_contributors;
}

function getMockStats() {
  return {
    stars: 2300,
    watchers: 327,
    forks: 67,
    openIssues: 43,
    subscribers: 897,
    sizeKB: 116743,
  };
}

export async function getCommits() {
  const since_date = new Date();
  since_date.setDate(since_date.getDate() - 29);

  try {
    const res = await fetch(
      "https://api.github.com/repos/sveltejs/svelte/commits?per_page=100&since=" +
        since_date.toISOString()
    );

    if (!res.ok) {
      return getMockCommits();
    }

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
    return commits_by_date;
  } catch (error) {
    return getMockCommits();
  }
}
export async function getIssues() {
  const since_date = new Date();
  since_date.setDate(since_date.getDate() - 29);
  const date_str = since_date.toISOString().split("T")[0];
  try {
    const opened_res = await fetch(
      "https://api.github.com/search/issues?q=repo:sveltejs/svelte+type:issue+created:>" +
        date_str
    );

    if (!opened_res.ok) {
      return getMockIssues();
    }

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
    return { opened_by_date, closed_by_date };
  } catch (error) {
    return getMockIssues();
  }
}
export async function getPullRequests() {
  const since_date = new Date();
  since_date.setDate(since_date.getDate() - 29);
  const date_str = since_date.toISOString().split("T")[0];

  try {
    const opened_res = await fetch(
      "https://api.github.com/search/issues?q=repo:sveltejs/svelte+type:pr+created:>" +
        date_str
    );

    if (!opened_res.ok) {
      return getMockPrs();
    }

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
    return { opened_by_date, closed_by_date };
  } catch (error) {
    return getMockPrs();
  }
}
export async function getPushes() {
  const since_date = new Date();
  since_date.setDate(since_date.getDate() - 29);
  try {
    const res = await fetch(
      "https://api.github.com/repos/sveltejs/svelte/events?per_page=100"
    );

    if (!res.ok) {
      return getMockPushes();
    }

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
    return pushes_by_date;
  } catch (error) {
    return getMockPushes();
  }
}
export async function getTopContributors() {
  const sinceDate = new Date();
  sinceDate.setDate(sinceDate.getDate() - 29);
  try {
    const res = await fetch(
      `https://api.github.com/repos/sveltejs/svelte/commits?per_page=100&since=${sinceDate.toISOString()}`
    );

    if (!res.ok) {
      return getMockContributors();
    }

    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    const commits = await res.json();
    // Count commits per author
    const author_counts = {};
    for (const commit of commits) {
      const author = commit.commit.author.name;
      if (!(author in author_counts)) author_counts[author] = 0;
      author_counts[author]++;
    }
    // Get top 3 contributors
    const top_contributors = Object.entries(author_counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3)
      .map((c) => c.name);
    // Prepare daily counts for top contributors
    const contributions_by_date = top_contributors.map((name) => {
      const contributions = [];
      for (let i = 29; i >= 0; i--) {
        const day = new Date();
        day.setDate(day.getDate() - i);
        const count = commits.filter((c) => {
          const commit_date = new Date(c.commit.committer.date);
          return (
            c.commit.author.name === name &&
            commit_date.getFullYear() === day.getFullYear() &&
            commit_date.getMonth() === day.getMonth() &&
            commit_date.getDate() === day.getDate()
          );
        }).length;
        contributions.push(count);
      }
      return { name, contributions };
    });
    return contributions_by_date;
  } catch (error) {
    return getMockContributors();
  }
}
export async function getStats(owner, repo) {
  try {
    const res = await fetch(`https://api.github.com/repos/sveltejs/svelte`);
    if (!res.ok) return getMockStats();
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
    };
  } catch (error) {
    return getMockStats();
  }
}
