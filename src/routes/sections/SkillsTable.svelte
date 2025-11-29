<script>
  import BorderBox from "$lib/components/BorderBox.svelte";
  import ArrowDown from "$lib/components/icons/ArrowDown.svelte";
  import Circle from "$lib/components/icons/Circle.svelte";
  import Search from "$lib/components/icons/Search.svelte";
  import { skills } from "$lib/data/skills";

  let filtered_skills = $state(skills);
  let current_sort = $state(null);

  function search(value) {
    filtered_skills = skills.filter(
      (item) =>
        item.skill.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase()) ||
        item.proficiency.toLowerCase().includes(value.toLowerCase())
    );
  }

  function sortByProficiency() {
    const proficiency_order = { High: 2, Medium: 1 };
    filtered_skills = filtered_skills.sort((a, b) => {
      return (
        (proficiency_order[b.proficiency] || 0) -
        (proficiency_order[a.proficiency] || 0)
      );
    });
  }

  function sortByCategory() {
    filtered_skills.sort((a, b) => a.category.localeCompare(b.category));
  }

  function sortBySkill() {
    filtered_skills.sort((a, b) => a.skill.localeCompare(b.skill));
  }
</script>

<section class="relative w-full gap-4 flex flex-col">
  <h1>Technical Skills</h1>
  <div class="relative">
    <input
      class="border border-zinc-900 dark:border-zinc-100 w-full rounded-sm pl-8 pr-3 py-3"
      type="text"
      placeholder="search ..."
      oninput={(e) => {
        search(e.target.value);
      }}
    />
    <div class="absolute left-2 top-3">
      <Search></Search>
    </div>
  </div>
  <BorderBox>
    <div class="h-96 overflow-scroll flex flex-col rounded-sm">
      <div
        class="flex sticky top-0 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-900 dark:border-zinc-100"
      >
        <div class="flex-1">
          <button
            class="w-full text-left p-3 md:hover:bg-zinc-900 md:hover:text-zinc-100 md:dark:hover:bg-zinc-100 md:dark:hover:text-zinc-900"
            onclick={sortBySkill}
          >
            Skill
          </button>
        </div>
        <div
          class="hidden md:flex flex-1 border-r border-l border-zinc-900 dark:border-zinc-100"
        >
          <button
            class="w-full text-center p-3 md:hover:bg-zinc-900 md:hover:text-zinc-100 md:dark:hover:bg-zinc-100 md:dark:hover:text-zinc-900"
            onclick={sortByCategory}
          >
            Category
          </button>
        </div>
        <div class="flex-1">
          <button
            class="w-full text-right p-3 md:hover:bg-zinc-900 md:hover:text-zinc-100 md:dark:hover:bg-zinc-100 md:dark:hover:text-zinc-900"
            onclick={sortByProficiency}
          >
            Proficiency
          </button>
        </div>
      </div>

      {#if filtered_skills.length == 0}
        <p class="p-3 border-b border-zinc-900 dark:border-zinc-100">
          Not a skill I've mastered yet — but give me a day and I'll get it done
        </p>
      {/if}

      {#each filtered_skills as item, i}
        <div class="flex border-b border-zinc-900 dark:border-zinc-100">
          <div class="flex-1 p-3">{item.skill}</div>

          <div
            class="hidden md:flex flex-1 p-3 text-center border-r border-l border-zinc-900 dark:border-zinc-100"
          >
            {item.category}
          </div>

          <div class="flex-1 p-3 text-right">
            <span
              class={"px-2 py-1 rounded-xl " +
                (item.proficiency == "High" ? "bg-green-700" : "bg-yellow-600")}
            >
              {item.proficiency}
            </span>
          </div>
        </div>
      {/each}
    </div>
  </BorderBox>
</section>
