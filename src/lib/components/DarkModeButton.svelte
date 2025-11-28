<script>
  function toggleDarkMode() {
    window.document.body.classList.toggle("dark");
  }
</script>

<button
  class="text-xs absolute top-2 right-2 px-4 py-2 rounded-md bg-zinc-100 dark:text-zinc-950 dark:bg-zinc-100 bg-zinc-950 text-zinc-100 cursor-pointer"
  on:click={toggleDarkMode}>Toggle Dark Mode</button
>
