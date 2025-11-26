import { opened_issues, closed_issues, commits, pushes } from "$lib/data/stats";

export async function getCommits() {
  return await commits;
  /*
  const since_date = new Date();
  since_date.setDate(since_date.getDate() - 15);

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
  since_date.setDate(since_date.getDate() - 15);
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
  const since_date = new Date();
  since_date.setDate(since_date.getDate() - 15);
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

  return { opened_by_date, closed_by_date };
}

export async function getPushes() {
  const since_date = new Date();
  since_date.setDate(since_date.getDate() - 15);

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

  return pushes_by_date;
}
