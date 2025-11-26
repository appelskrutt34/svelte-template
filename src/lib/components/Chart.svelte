<script>
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";

  let chart;
  let { options } = $props();
  let chartElement;

  onMount(async () => {
    if (browser) {
      const ApexCharts = (await import("apexcharts")).default;
      chart = new ApexCharts(chartElement, options);
      await chart.render();
    }
  });

  onDestroy(() => {
    if (chart) chart.destroy();
  });
</script>

<div bind:this={chartElement}></div>
