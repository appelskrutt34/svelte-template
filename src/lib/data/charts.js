import {
  commits,
  opened_issues,
  closed_issues,
  pull_requests_opened,
  pull_requests_closed,
  pushes,
} from "$lib/data/stats";

export const contributions = {
  chart: {
    type: "heatmap",
    height: "16px",
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
  colors: ["#1d4ed8"],
  stroke: {
    colors: ["#09090b"],
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `
      <div class="chart-tooltip">
        Commits: ${series[0][dataPointIndex]}
      </div>
    `;
    },
  },
  plotOptions: {
    heatmap: {
      radius: 1,
      dataLabels: {
        enabled: false,
      },
      shadeIntensity: 1,
    },
  },
  series: [
    {
      data: commits,
    },
  ],
};

export const pushes_and_commits = {
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
  colors: ["#c2410c", "#be123c"],
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `
      <div class="chart-tooltip">
        Pushes: ${series[0][dataPointIndex]}<br>
        Commits: ${series[1][dataPointIndex]}
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
  series: [
    {
      name: "Pushes",
      data: pushes,
    },
    {
      name: "Commits",
      data: commits,
    },
  ],
};
