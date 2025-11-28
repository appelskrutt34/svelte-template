<script>
  import "../app.css";
  import Heatmap from "$lib/components/Heatmap.svelte";
  import ArrowDown from "$lib/components/icons/ArrowDown.svelte";
  import ArrowUp from "$lib/components/icons/ArrowUp.svelte";
  import Circle from "$lib/components/icons/Circle.svelte";
  import Commit from "$lib/components/icons/Commit.svelte";
  import Exclamation from "$lib/components/icons/Exclamation.svelte";
  import Heart from "$lib/components/icons/Heart.svelte";
  import PullRequest from "$lib/components/icons/PullRequest.svelte";
  import { onMount } from "svelte";
  import BarChart from "$lib/components/BarChart.svelte";
  import { page } from "$app/stores";
  import Star from "$lib/components/icons/Star.svelte";
  import Eye from "$lib/components/icons/Eye.svelte";
  import Fork from "$lib/components/icons/Fork.svelte";
  import File from "$lib/components/icons/File.svelte";
  let data = $page.data;
  let opened_issues = data.opened_issues;
  let closed_issues = data.closed_issues;
  let opened_prs = data.opened_prs;
  let closed_prs = data.closed_prs;
  let pushes = data.pushes;
  let commits = data.commits;
  let top_contributors = data.top_contributors;
  let stats = data.stats;

  function toggleDarkMode() {
    window.document.body.classList.toggle("dark");
  }
</script>

<button
  class="absolute top-2 right-2 px-4 py-2 rounded-md bg-zinc-100 dark:text-zinc-800 dark:bg-zinc-100 bg-zinc-800 text-zinc-100 cursor-pointer"
  on:click={toggleDarkMode}>Toggle Dark Mode</button
>
<div
  aria-label="Svelte github statistics"
  class="flex justify-center items-center my-12 mx-4 text-xs"
>
  <section class="flex flex-col gap-4 md:container-md w-full md:w-auto">
    <h1>We <Heart size="24"></Heart> Svelte</h1>

    <div class="flex flex-col md:flex-row gap-4 w-full">
      <div
        class="flex flex-col border border-gray-400 rounded-sm p-4 gap-6 w-full"
      >
        <p class="flex gap-1 items-center">
          <Star></Star>
          {stats.stars} Stars
        </p>
      </div>
      <div
        class="flex flex-col border border-gray-400 rounded-sm p-4 gap-6 w-full"
      >
        <p class="flex gap-1 items-center">
          <Eye></Eye>
          {stats.watchers} Watchers
        </p>
      </div>
      <div
        class="flex flex-col border border-gray-400 rounded-sm p-4 gap-6 w-full"
      >
        <p class="flex gap-1 items-center">
          <Fork></Fork>
          {stats.forks} Forks
        </p>
      </div>
      <div
        class="flex flex-col border border-gray-400 rounded-sm p-4 gap-6 w-full"
      >
        <p class="flex gap-1 items-center">
          <Heart></Heart>
          {stats.subscribers} Subscribers
        </p>
      </div>
      <div
        class="flex flex-col border border-gray-400 rounded-sm p-4 gap-6 w-full"
      >
        <p class="flex gap-1 items-center">
          <File></File>
          {stats.sizeKB} Size (KB)
        </p>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-4 w-full">
      <div
        class="flex justify-between flex-col border border-gray-400 rounded-sm pt-4 px-4 w-full gap-6"
      >
        <div class="flex justify-between">
          <p class="flex gap-1 items-center">
            <Exclamation></Exclamation>
            {opened_issues.reduce((sum, value) => sum + value, 0)} Issues last 30
            Days
          </p>
          <div class="flex flex-col items-start">
            <div class="flex justify-center items-center gap-1">
              <Circle color="#1D4ED8"></Circle>
              <p>Opened</p>
            </div>
            <div class="flex justify-center items-center gap-1">
              <Circle color="#60A5FA"></Circle>
              <p>Closed</p>
            </div>
          </div>
        </div>
        <BarChart
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
      <div
        class="flex justify-between flex-col border border-gray-400 rounded-sm pt-4 px-4 w-full gap-6"
      >
        <div class="flex justify-between">
          <p class="flex gap-1 items-center">
            <PullRequest></PullRequest>{opened_prs.reduce(
              (sum, value) => sum + value,
              0
            )} Pull Requests last 30 Days
          </p>
          <div class="flex flex-col items-start">
            <div class="flex justify-center items-center gap-1">
              <Circle color="#A21CAF"></Circle>
              <p>Opened</p>
            </div>
            <div class="flex justify-center items-center gap-1">
              <Circle color="#6D28D9"></Circle>
              <p>Closed</p>
            </div>
          </div>
        </div>
        <BarChart
          colors={["#A21CAF", "#7E22CE"]}
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
      <div
        class="flex justify-between flex-col border border-gray-400 rounded-sm pt-4 px-4 w-full gap-6"
      >
        <div class="flex justify-between">
          <p class="flex gap-1 items-center">
            <Commit></Commit>{pushes.reduce((sum, value) => sum + value, 0) +
              commits.reduce((sum, value) => sum + value, 0)} Pushes & Commits last
            30 Days
          </p>
          <div class="flex flex-col items-start">
            <div class="flex justify-center items-center gap-1">
              <Circle color="#C2410C"></Circle>
              <p>Pushes</p>
            </div>
            <div class="flex justify-center items-center gap-1">
              <Circle color="#BE123C"></Circle>
              <p>Commits</p>
            </div>
          </div>
        </div>
        <BarChart
          colors={["#C2410C", "#BE123C"]}
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
    </div>
    <div
      class="flex flex-col md:flex-row items-start md:items-center gap-2 md:justify-between p-6 border border-gray-400 rounded-sm"
    >
      <p class="flex gap-1 items-center">
        <Heart></Heart>{commits.reduce((sum, value) => sum + value, 0) +
          pushes.reduce((sum, value) => sum + value, 0)} Contributions the last 30
        Days
      </p>
      <div class="md:flex gap-1 grid grid-cols-15">
        <Heatmap data={commits}></Heatmap>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-12 justify-between p-4 border border-gray-400 rounded-sm"
    >
      <p class="flex gap-1 items-center">
        <Heart></Heart>Top Contributors
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
  </section>
</div>
