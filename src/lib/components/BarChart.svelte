<script>
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";

  let chart;
  let { data, colors } = $props();
  let chartElement;

  const options = {
    chart: {
      type: "bar",
      height: "100px",
      parentHeightOffset: 0,
      sparkline: {
        enabled: true,
      },
      legend: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: colors || ["#1d4ed8", "#0e7490"],
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `
      <div class="chart-tooltip">
      ${data[0].name}: ${series[0][dataPointIndex]}<br>
      ${data[1].name}: ${series[1][dataPointIndex]}
      </div>
    `;
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: data,
  };

  onMount(async () => {
    if (browser) {
      const ApexCharts = (await import("apexcharts")).default;
      chart = new ApexCharts(chartElement, options);
      await chart.render();
      chart.updateSeries(data);
    }
  });

  onDestroy(() => {
    if (chart) chart.destroy();
  });
</script>

<div bind:this={chartElement}></div>
