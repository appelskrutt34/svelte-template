<script>
  import "../app.css";
  import Skills from "./sections/Skills.svelte";
  import Svelte from "./sections/Svelte.svelte";
  import Work from "./sections/Work.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { page } from "$app/stores";
</script>

<Navbar></Navbar>

<main
  id="main"
  class="flex flex-col justify-center items-center my-26 text-xs max-w-5xl mx-auto gap-22 px-6"
>
  <Work></Work>
  <Skills></Skills>
  <Svelte data={$page.data}></Svelte>
</main>
