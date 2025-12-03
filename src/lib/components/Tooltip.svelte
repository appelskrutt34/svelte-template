<script>
  let { title } = $props();

  let isHovered = $state(false);
  let x = $state(0);
  let y = $state(0);

  function mouseOver(event) {
    isHovered = true;
    x = event.pageX + 5;
    y = event.pageY + 5;
  }
  function mouseMove(event) {
    x = event.pageX + 5;
    y = event.pageY + 5;
  }
  function mouseLeave() {
    isHovered = false;
  }
</script>

<div
  aria-hidden="true"
  onmouseover={mouseOver}
  onmouseleave={mouseLeave}
  onmousemove={mouseMove}
  onfocus={mouseOver}
  onblur={mouseLeave}
>
  <slot></slot>
</div>

{#if isHovered}
  <div
    style="top: {y}px; left: {x}px;"
    class="chart-tooltip absolute z-50 hidden md:block"
  >
    {title}
  </div>
{/if}
