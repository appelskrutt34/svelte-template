<script>
  import Tooltip from "./Tooltip.svelte";
  const { data } = $props();

  function getBrightness(value) {
    if (value < 3) return 60;
    if (value < 9) return 80;
    if (value < 12) return 100;
    if (value < 15) return 125;
    if (value < 18) return 150;
    return 200;
  }
</script>

{#each data as value}
  <Tooltip title={value}>
    <div
      class="bg-green-700 w-3 h-3 hover:cursor-pointer"
      style="filter: brightness({getBrightness(value)}%)"
    ></div>
  </Tooltip>
{/each}
