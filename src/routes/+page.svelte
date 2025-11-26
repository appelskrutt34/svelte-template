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

  let data = $page.data;
  let opened_issues = data.opened_issues;
  let closed_issues = data.closed_issues;
  let opened_prs = data.opened_prs;
  let closed_prs = data.closed_prs;
  let pushes = data.pushes;
  let commits = data.commits;
</script>

<section
  aria-label="github statistics"
  class="flex justify-center items-center my-12"
>
  <div class="container flex flex-col gap-4">
    <div
      class="flex flex-col items-center gap-2 justify-between p-6 border border-gray-400 rounded-sm"
    >
      <p class="flex gap-1 items-center">
        <Heart></Heart>{commits.reduce((sum, value) => sum + value, 0)} Contributions
        the last 15 Days
      </p>
      <div class="md:flex gap-1 grid grid-cols-15">
        <Heatmap data={commits}></Heatmap>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-4 w-full">
      <div
        class="flex flex-col border border-gray-400 rounded-sm p-4 gap-6 w-full"
      >
        <p>
          {opened_issues.reduce((sum, value) => sum + value, 0) +
            closed_issues.reduce((sum, value) => sum + value, 0)} Issues
        </p>
        <div class="flex justify-between">
          <p>+0.5 (100%)</p>
          <p class="flex justify-center items-center gap-1">
            <ArrowUp></ArrowUp> past month
          </p>
        </div>
      </div>
      <div
        class="flex flex-col border border-gray-400 rounded-sm p-4 gap-6 w-full"
      >
        <p>
          {opened_prs.reduce((sum, value) => sum + value, 0) +
            closed_prs.reduce((sum, value) => sum + value, 0)} Pull Requests Opened
        </p>
        <div class="flex justify-between">
          <p>-13 (-12%)</p>
          <p class="flex justify-center items-center gap-1">
            <ArrowDown></ArrowDown> past month
          </p>
        </div>
      </div>
      <div
        class="flex flex-col border border-gray-400 rounded-sm p-4 gap-6 w-full"
      >
        <p>
          {commits.reduce((sum, value) => sum + value, 0)} Commits
        </p>
        <div class="flex justify-between">
          <p>-122 (-35%)</p>
          <p class="flex justify-center items-center gap-1">
            <ArrowDown></ArrowDown> past month
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-4 w-full">
      <div
        class="flex justify-between flex-col border border-gray-400 rounded-sm pt-4 px-4 w-full gap-6"
      >
        <div class="flex justify-between">
          <p class="flex gap-1 items-center">
            <Exclamation></Exclamation> Issues
          </p>
          <div class="flex flex-col items-start">
            <div class="flex justify-center items-center gap-1">
              <Circle color="#1d4ed8"></Circle>
              <p>Opened</p>
            </div>
            <div class="flex justify-center items-center gap-1">
              <Circle color="#60a5fa"></Circle>
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
            <PullRequest></PullRequest>Pull Requests
          </p>
          <div class="flex flex-col items-start">
            <div class="flex justify-center items-center gap-1">
              <Circle color="#a21caf"></Circle>
              <p>Opened</p>
            </div>
            <div class="flex justify-center items-center gap-1">
              <Circle color="#6d28d9"></Circle>
              <p>Closed</p>
            </div>
          </div>
        </div>
        <BarChart
          colors={["#a21caf", "#7e22ce"]}
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
            <Commit></Commit>Pushes & Commits
          </p>
          <div class="flex flex-col items-start">
            <div class="flex justify-center items-center gap-1">
              <Circle color="#c2410c"></Circle>
              <p>Pushes</p>
            </div>
            <div class="flex justify-center items-center gap-1">
              <Circle color="#be123c"></Circle>
              <p>Commits</p>
            </div>
          </div>
        </div>
        <BarChart
          colors={["#c2410c", "#be123c"]}
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
      class="flex flex-col md:flex-row items-center gap-4 md:gap-12 justify-between p-4 border border-gray-400 rounded-sm"
    >
      <p class="flex gap-1 items-center">
        <Heart></Heart>Top Contributors
      </p>
      <!-- 
      <div class="flex flex-col md:flex-row gap-4 md:gap-12">
        {#each top_contributors as contributor}
          <div class="flex flex-col gap-1">
            <p>{contributor.name}</p>
            <div class="gap-1 grid grid-cols-15">
              <Heatmap data={contributor.contributions}></Heatmap>
            </div>
          </div>
        {/each}
      </div>-->
    </div>
  </div>
</section>
