<script>
  import Star from "$lib/components/icons/Star.svelte";
  import Eye from "$lib/components/icons/Eye.svelte";
  import Fork from "$lib/components/icons/Fork.svelte";
  import File from "$lib/components/icons/File.svelte";
  import BorderBox from "$lib/components/BorderBox.svelte";
  import Heatmap from "$lib/components/Heatmap.svelte";
  import ArrowDown from "$lib/components/icons/ArrowDown.svelte";
  import ArrowUp from "$lib/components/icons/ArrowUp.svelte";
  import Circle from "$lib/components/icons/Circle.svelte";
  import Commit from "$lib/components/icons/Commit.svelte";
  import Exclamation from "$lib/components/icons/Exclamation.svelte";
  import Heart from "$lib/components/icons/Heart.svelte";
  import PullRequest from "$lib/components/icons/PullRequest.svelte";
  import BarChart from "$lib/components/BarChart.svelte";
  import {
    black,
    white,
    pink,
    purple,
    blue,
    green,
    cyan,
    orange,
    red,
    yellow,
  } from "$lib/data/constants";

  let { data } = $props();
  let opened_issues = data.opened_issues;
  let closed_issues = data.closed_issues;
  let opened_prs = data.opened_prs;
  let closed_prs = data.closed_prs;
  let pushes = data.pushes;
  let commits = data.commits;
  let top_contributors = data.top_contributors;
  let stats = data.stats;
</script>

<section
  id="svelte-github"
  aria-label="Svelte github statistics"
  class="flex flex-col gap-4 w-full"
>
  <h1>We <Heart size="24" color={green}></Heart> Svelte</h1>
  <div class="flex flex-col md:flex-row gap-4 w-full">
    <BorderBox>
      <div class="flex flex-colrounded-sm p-4 gap-6">
        <p class="flex gap-1 items-center">
          <Star color={yellow}></Star>
          {stats.stars} Stars
        </p>
      </div>
    </BorderBox>

    <BorderBox>
      <div class="flex flex-col p-4 gap-6">
        <p class="flex gap-1 items-center">
          <Eye color={blue}></Eye>
          {stats.watchers} Watchers
        </p>
      </div>
    </BorderBox>

    <BorderBox>
      <div class="flex flex-col p-4 gap-6">
        <p class="flex gap-1 items-center">
          <Fork color={purple}></Fork>
          {stats.forks} Forks
        </p>
      </div>
    </BorderBox>
  </div>

  <div class="flex flex-col md:flex-row gap-4 w-full">
    <BorderBox>
      <div class="flex flex-col p-4 gap-6">
        <p class="flex gap-1 items-center">
          <Heart color={green}></Heart>
          {stats.subscribers} Subscribers
        </p>
      </div>
    </BorderBox>

    <BorderBox>
      <div class="flex flex-col p-4 gap-6">
        <p class="flex gap-1 items-center">
          <File color={orange}></File>
          {stats.sizeKB} Size (KB)
        </p>
      </div>
    </BorderBox>
  </div>

  <div class="flex flex-col md:flex-row gap-4 w-full">
    <BorderBox>
      <div class="flex justify-between flex-col pt-4 px-4 gap-6">
        <div class="flex justify-between">
          <p class="flex gap-1 items-center">
            <Exclamation color={blue}></Exclamation>
            {opened_issues.reduce((sum, value) => sum + value, 0)} Issues last 30
            Days
          </p>
          <div class="flex flex-col items-start">
            <div class="flex justify-center items-center gap-1">
              <Circle color={blue}></Circle>
              <p>Opened</p>
            </div>
            <div class="flex justify-center items-center gap-1">
              <Circle color={cyan}></Circle>
              <p>Closed</p>
            </div>
          </div>
        </div>
        <BarChart
          colors={[blue, cyan]}
          data={[
            {
              name: "Opened",
              data: opened_issues,
            },
            {
              name: "Closed",
              data: closed_issues,
            },
          ]}
        ></BarChart>
      </div>
    </BorderBox>
    <BorderBox>
      <div class="flex justify-between flex-col pt-4 px-4 gap-6">
        <div class="flex justify-between">
          <p class="flex gap-1 items-center">
            <PullRequest color={purple}></PullRequest>{opened_prs.reduce(
              (sum, value) => sum + value,
              0
            )} Pull Requests last 30 Days
          </p>
          <div class="flex flex-col items-start">
            <div class="flex justify-center items-center gap-1">
              <Circle color={purple}></Circle>
              <p>Opened</p>
            </div>
            <div class="flex justify-center items-center gap-1">
              <Circle color={pink}></Circle>
              <p>Closed</p>
            </div>
          </div>
        </div>
        <BarChart
          colors={[purple, pink]}
          data={[
            {
              name: "Opened",
              data: opened_prs,
            },
            {
              name: "Closed",
              data: closed_prs,
            },
          ]}
        ></BarChart>
      </div>
    </BorderBox>

    <BorderBox>
      <div class="flex justify-between flex-col pt-4 px-4 gap-6">
        <div class="flex justify-between">
          <p class="flex gap-1 items-center">
            <Commit color={orange}></Commit>{pushes.reduce(
              (sum, value) => sum + value,
              0
            ) + commits.reduce((sum, value) => sum + value, 0)} Pushes & Commits
            last 30 Days
          </p>
          <div class="flex flex-col items-start">
            <div class="flex justify-center items-center gap-1">
              <Circle color={orange}></Circle>
              <p>Pushes</p>
            </div>
            <div class="flex justify-center items-center gap-1">
              <Circle color={red}></Circle>
              <p>Commits</p>
            </div>
          </div>
        </div>
        <BarChart
          colors={[orange, red]}
          data={[
            {
              name: "Pushes",
              data: pushes,
            },
            {
              name: "Commits",
              data: commits,
            },
          ]}
        ></BarChart>
      </div>
    </BorderBox>
  </div>
  <BorderBox>
    <div
      class="flex flex-col md:flex-row items-start md:items-center gap-2 md:justify-between p-6"
    >
      <p class="flex gap-1 items-center">
        <Heart color={green}></Heart>{commits.reduce(
          (sum, value) => sum + value,
          0
        ) + pushes.reduce((sum, value) => sum + value, 0)} Contributions the last
        30 Days
      </p>
      <div class="md:flex gap-1 grid grid-cols-15">
        <Heatmap data={commits}></Heatmap>
      </div>
    </div>
  </BorderBox>

  <BorderBox>
    <div
      class="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-12 justify-between p-4"
    >
      <p class="flex gap-1 items-center">
        <Heart color={green}></Heart>Top Contributors
      </p>
      <div class="flex flex-col md:flex-row gap-4 md:gap-12">
        {#each top_contributors as contributor}
          <div class="flex flex-col gap-1">
            <p>{contributor.name}</p>
            <div class="gap-1 grid grid-cols-15">
              <Heatmap data={contributor.contributions}></Heatmap>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </BorderBox>
</section>
