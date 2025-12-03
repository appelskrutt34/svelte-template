<script>
  import "../app.css";
  import SkillsTable from "./sections/SkillsTable.svelte";
  import Svelte from "./sections/Svelte.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { page } from "$app/stores";
  import WorkHistory from "./sections/WorkHistory.svelte";
</script>

<Navbar></Navbar>

<main
  class="flex flex-col justify-center items-center my-26 text-xs max-w-5xl mx-auto gap-22 px-6"
>
  <WorkHistory></WorkHistory>
  <SkillsTable></SkillsTable>
  <Svelte data={$page.data}></Svelte>
</main>
