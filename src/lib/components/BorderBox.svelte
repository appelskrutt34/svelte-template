<script>
  let { customClass } = $props();
</script>

<div
  class={customClass +
    " rounded-sm border border-zinc-900 dark:border-zinc-100 w-full min-w-0"}
>
  <slot></slot>
</div>
