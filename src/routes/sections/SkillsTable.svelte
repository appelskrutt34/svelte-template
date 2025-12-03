<script>
  import BorderBox from "$lib/components/BorderBox.svelte";
  import ArrowDown from "$lib/components/icons/ArrowDown.svelte";
  import Circle from "$lib/components/icons/Circle.svelte";
  import Heart from "$lib/components/icons/Heart.svelte";
  import Search from "$lib/components/icons/Search.svelte";
  import { onMount } from "svelte";

  const high = "High";
  const medium = "Medium";
  const web_security = "Web Security";
  const hosting = "Hosting";
  const language = "Programming Language";
  const devops = "DevOps / CI/CD";
  const backend = "Backend Framework";
  const frontend = "Frontend Framework";
  const markup = "Markup / Style Language";

  const skills = [
    { skill: "Type Juggling", category: web_security, proficiency: high },
    { skill: "Prototype Pollution", category: web_security, proficiency: high },
    { skill: "Timing Attacks", category: web_security, proficiency: high },
    { skill: "Race Conditions", category: web_security, proficiency: high },
    {
      skill: "Deserialization Attacks",
      category: web_security,
      proficiency: high,
    },
    {
      skill: "Parameter Logic Bugs",
      category: web_security,
      proficiency: high,
    },
    {
      skill: "Blind SQL Injections",
      category: web_security,
      proficiency: high,
    },
    {
      skill: "Boolean-Based SQL Injections",
      category: web_security,
      proficiency: high,
    },
    {
      skill: "Time-Based SQL Injections",
      category: web_security,
      proficiency: high,
    },
    {
      skill: "Error-Based SQL Injections",
      category: web_security,
      proficiency: high,
    },
    { skill: "DNS Rebinding", category: web_security, proficiency: high },
    { skill: "IDOR", category: web_security, proficiency: high },
    { skill: "Websocket Attacks", category: web_security, proficiency: medium },
    { skill: "CRLF Injection", category: web_security, proficiency: high },
    {
      skill: "HTTP Request Smuggling",
      category: web_security,
      proficiency: high,
    },
    { skill: "HTTP/2 Downgrading", category: web_security, proficiency: high },
    { skill: "Web Cache Poisoning", category: web_security, proficiency: high },
    { skill: "Host Header Attacks", category: web_security, proficiency: high },
    { skill: "Session Puzzling", category: web_security, proficiency: high },
    { skill: "XSS", category: web_security, proficiency: high },
    { skill: "JWT Attacks", category: web_security, proficiency: high },
    { skill: "OAuth Attacks", category: web_security, proficiency: medium },
    { skill: "SAML Attacks", category: web_security, proficiency: medium },
    { skill: "NOSQL Injections", category: web_security, proficiency: high },
    { skill: "XPath Injections", category: web_security, proficiency: high },
    { skill: "LDAP Injections", category: web_security, proficiency: high },
    { skill: "BurpSuit", category: web_security, proficiency: high },
    { skill: "Kali Linux", category: web_security, proficiency: high },
    { skill: "Ffuf", category: web_security, proficiency: high },
    { skill: "Wfuzz", category: web_security, proficiency: high },
    { skill: "C#", category: language, proficiency: high },
    { skill: "JavaScript", category: language, proficiency: high },
    { skill: "SQL", category: language, proficiency: medium },
    { skill: "Python", category: language, proficiency: medium },
    { skill: "Solidity", category: language, proficiency: medium },
    { skill: "HTML", category: markup, proficiency: high },
    { skill: "CSS", category: markup, proficiency: high },
    { skill: "Svelte", category: frontend, proficiency: high },
    { skill: "Vue", category: frontend, proficiency: medium },
    { skill: "React", category: frontend, proficiency: medium },
    { skill: ".NET", category: backend, proficiency: high },
    { skill: ".NET Core", category: backend, proficiency: high },
    { skill: "ASP.NET", category: backend, proficiency: high },
    { skill: "ASP.NET Core", category: backend, proficiency: high },
    { skill: "Azure DevOps", category: devops, proficiency: high },
    { skill: "Github Actions", category: devops, proficiency: high },
    { skill: "Linux", category: "Operating System", proficiency: high },
    { skill: "Tailwind", category: "Styling Framework", proficiency: high },
    { skill: "IIS", category: hosting, proficiency: high },
  ];

  let filtered_skills = $state(skills);
  let current_sort = $state(null);

  sortByCategory();

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

<section id="skills" class="relative w-full gap-4 flex flex-col">
  <h1>
    <Heart customClass="animate-bounce fill-green-600 mr-2" size="24"
    ></Heart>Technical Skills
  </h1>
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
          <div class="flex-1">
            <p class="w-full text-left p-3">
              {item.skill}
            </p>
          </div>
          <div
            class="hidden md:flex flex-1 border-r border-l border-zinc-900 dark:border-zinc-100"
          >
            <p class="w-full text-center p-3">
              {item.category}
            </p>
          </div>
          <div class="flex-1">
            <p class="w-full text-right p-3">
              <span
                class={"rounded-2xl px-2 py-1 border border-zinc-900 dark:border-zinc-100 " +
                  (item.proficiency == "High"
                    ? " bg-green-600"
                    : " bg-yellow-600")}
              >
                {item.proficiency}</span
              >
            </p>
          </div>
        </div>
      {/each}
    </div>
  </BorderBox>
</section>
