<script>
  let { title } = $props();

  let isHovered = $state(false);
  let x = $state(0);
  let y = $state(0);

  function mouseOver(event) {
    isHovered = true;
    x = event.pageX + 10;
    y = event.pageY + 10;
  }
  function mouseMove(event) {
    x = event.pageX + 10;
    y = event.pageY + 10;
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
    class="px-2 py-1 text-zinc-900 bg-zinc-100 border border-zinc-900 rounded-sm absolute z-50 hidden md:block"
  >
    {title}
  </div>
{/if}
