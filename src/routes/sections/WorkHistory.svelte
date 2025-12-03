<script>
  import BorderBox from "$lib/components/BorderBox.svelte";

  const jobs = [
    {
      company: "Bonigi",
      role: "Fullstack Developer",
      time: "1.5 years",
      skills: [
        "C#",
        "JavaScript",
        "HTML",
        "CSS",
        "Linux",
        "SQL",
        "Vue",
        ".NET Webforms",
        "Nodejs",
        "Azure DevOps",
      ],
      description: [
        "Built a web application using Vue and Strapi.",
        "Set up CI/CD pipelines in Azure DevOps.",
        "Wrote SQL procedures to handle large volumes of transactional and customer data.",
      ],
    },
    {
      company: "Sogeti",
      role: "Fullstack Developer",
      time: "1.5 years",
      skills: [
        "C#",
        "JavaScript",
        "React",
        "Optimizely",
        "SQL",
        ".NET Core",
        "Azure DevOps",
      ],
      description: [
        "Refactored large code bases and fixed technical debt.",
        "Set up CI/CD pipelines in Azure Devops.",
        "Fixed accessibility issues across multiple web pages (WCAG).",
        "Migrated .NET framework projects to .NET Core.",
        "Doing code reviews and mentoring junior developers",
      ],
    },
    {
      company: "Forefront",
      role: "Fullstack Developer",
      time: "1.5 years",
      skills: [
        "C#",
        "JavaScript",
        "Svelte",
        "Tailwind",
        "React",
        "SQL",
        "Azure DevOps",
      ],
      description: [
        "Built a payment website with a frontend in Svelte and backend in .NET, integrated with Nets Payments.",
        "Set up CI/CD pipelines using GitHub Actions.",
        "Fixed accessibility issues across multiple web pages. (WCAG)",
        "Migrated CI/CD pipelines from TeamCity to Azure DevOps.",
        "Migrated .NET framework projects to .NET Core.",
        "Doing code reviews and mentoring junior developers.",
      ],
    },
    {
      company: "Kryptokrona",
      role: "Frontend Developer",
      time: "3 years",
      skills: ["JavaScript", "TypeScript", "Svelte", "Tailwind", "ApexCharts"],
      description: [
        "Developed data tables displaying real-time mining statistics such as hash rate, block height, and active miners.",
        "Created pages listing all blockchain nodes and their associated metadata.",
        "Built interactive charts using ApexCharts.",
        "Contributed to various frontend tasks in the company’s crypto wallet and chat application.",
      ],
    },
    {
      company: "Modoyo",
      role: "Backend Developer",
      time: "1.5 years",
      skills: [
        "C#",
        "JavaScript",
        "Python",
        "React",
        ".NET",
        "AWS",
        "Terraform",
        "Telemetry",
        "Snowflake",
        "MySQL/MariaDB",
        "Github Actions",
        "Linux",
        "Snowlit",
      ],
      description: [
        "Building a .NET API to manage players, weapons, matches, and related game data.",
        "Writing tests using .NET and Cypress.",
        "Setting up CI/CD pipelines with GitHub Actions.",
        "Creating Terraform scripts to manage AWS infrastructure.",
        "Visualizing telemetry data using Python and Snowlit.",
      ],
    },
    {
      company: "Hack The Box",
      role: "Cyber Defense & Exploitation Practitioner",
      time: "3 years and ongoing",
      skills: [
        "BurpSuite",
        "Linux",
        "SQLi",
        "XSS",
        "CSRF",
        "HTTP/HTTPS attacks",
      ],
      description: "307 targets compromised. Global ranking: Top 1%.",
    },
  ];
</script>

<section class="flex flex-col gap-4">
  <h1>Work History</h1>
  <div class="flex gap-4">
    <BorderBox customClass="rounded-br-2xl dark:shadow-solid">
      <div class="p-4">
        <h2>{jobs[0].company}</h2>
        <p>{jobs[0].role}</p>
        <p class="mb-4">{jobs[0].time}</p>
        <ul class="list-disc px-4 mb-4">
          {#each jobs[0].description as desc}
            <li class="mb-1">{desc}</li>
          {/each}
        </ul>

        {#each jobs[0].skills as skill}
          <p
            class="inline-flex items-center gap-1 px-2 py-1 mr-2 mb-2 text-zinc-900 bg-green-700 border border-zinc-900 dark:border-zinc-100 dark:text-zinc-100 rounded-2xl text-xs"
          >
            {skill}
          </p>
        {/each}
      </div>
    </BorderBox>
    <BorderBox
      customClass="rounded-bl-2xl shadow-soft-transition dark:shadow-solid-md"
    >
      <div class="p-4">
        <h2>{jobs[1].role}</h2>
        <p>{jobs[1].company}</p>
        <p class="mb-4">{jobs[1].time}</p>
        <ul class="list-disc px-4 mb-4">
          {#each jobs[1].description as desc}
            <li class="mb-1">{desc}</li>
          {/each}
        </ul>

        {#each jobs[1].skills as skill}
          <p
            class="inline-flex items-center gap-1 px-2 py-1 mr-2 mb-2 text-zinc-900 bg-green-700 border border-zinc-900 dark:border-zinc-100 dark:text-zinc-100 rounded-2xl text-xs"
          >
            {skill}
          </p>
        {/each}
      </div>
    </BorderBox>
  </div>
  <div class="flex gap-4">
    <BorderBox
      customClass="rounded-tr-2xl hover:shadow-lg hover:shadow-zinc-500/50 transition ease-in-out duration-300 dark:hover:shadow-none"
    >
      <div class="p-4">
        <h2>{jobs[2].role}</h2>
        <p>{jobs[2].company}</p>
        <p class="mb-4">{jobs[2].time}</p>
        <ul class="list-disc px-4 mb-4">
          {#each jobs[2].description as desc}
            <li class="mb-1">{desc}</li>
          {/each}
        </ul>

        {#each jobs[2].skills as skill}
          <p
            class="inline-flex items-center gap-1 px-2 py-1 mr-2 mb-2 text-zinc-900 bg-green-700 border border-zinc-900 dark:border-zinc-100 dark:text-zinc-100 rounded-2xl text-xs"
          >
            {skill}
          </p>
        {/each}
      </div>
    </BorderBox>
    <BorderBox customClass="rounded-tl-2xl bg-zinc-200 dark:bg-zinc-800">
      <div class="p-4">
        <h2>{jobs[3].role}</h2>
        <p>{jobs[3].company}</p>
        <p class="mb-4">{jobs[3].time}</p>
        <ul class="list-disc px-4 mb-4">
          {#each jobs[3].description as desc}
            <li class="mb-1">{desc}</li>
          {/each}
        </ul>

        {#each jobs[3].skills as skill}
          <p
            class="inline-flex items-center gap-1 px-2 py-1 mr-2 mb-2 text-zinc-900 bg-green-700 border border-zinc-900 dark:border-zinc-100 dark:text-zinc-100 rounded-2xl text-xs"
          >
            {skill}
          </p>
        {/each}
      </div>
    </BorderBox>
  </div>
  <BorderBox
    customClass="rounded-t-2xl shadow-lg shadow-zinc-500/50 dark:shadow-none"
  >
    <div class="p-4">
      <h2>{jobs[4].role}</h2>
      <p>{jobs[4].company}</p>
      <p class="mb-4">{jobs[4].time}</p>
      <ul class="list-disc px-4 mb-4">
        {#each jobs[4].description as desc}
          <li class="mb-1">{desc}</li>
        {/each}
      </ul>

      {#each jobs[4].skills as skill}
        <p
          class="inline-flex items-center gap-1 px-2 py-1 mr-2 mb-2 text-zinc-900 bg-green-700 border border-zinc-900 dark:border-zinc-100 dark:text-zinc-100 rounded-2xl text-xs"
        >
          {skill}
        </p>
      {/each}
    </div>
  </BorderBox>
</section>
