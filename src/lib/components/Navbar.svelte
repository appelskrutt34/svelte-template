<script>
  import { fade, slide } from "svelte/transition";
  import Menu from "$lib/components/icons/Menu.svelte";
  import Close from "$lib/components/icons/Close.svelte";
  import Linkedin from "./icons/Linkedin.svelte";
  import ToggleOff from "./icons/ToggleOff.svelte";
  import { onMount } from "svelte";
  import ToggleOn from "./icons/ToggleOn.svelte";
  import { isDarkMode } from "$lib/stores/data";

  let y = $state(0);
  let openMenu = $state(false);

  function scrollInto(id) {
    let element = document.getElementById(id);
    window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
  }

  function toggleDarkMode() {
    $isDarkMode = document.body.classList.toggle("dark");
  }

  $effect(() => {
    $isDarkMode = document.documentElement.classList.contains("dark");
  });
</script>

<a href="#main" class="sr-only focus:not-sr-only p-2"> Skip to main content </a>
<header class="fixed w-full top-0 z-20">
  {#if y < 50}
    <!-- Monitor -->
    <div
      in:fade
      class="w-full justify-center hidden md:flex bg-zinc-100 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-900"
    >
      <nav
        class="max-w-5xl w-full gap-6 md:gap-0 flex flex-col md:flex-row justify-between p-6"
      >
        <div class="flex gap-8">
          <a
            class="hover:scale-125 transition-transform duration-200"
            href="https://www.linkedin.com/in/ebba-svensson-6a295b187/"
            aria-label="Linkedin"
            ><Linkedin
              customClass={$isDarkMode ? "fill-zinc-100" : "fill-zinc-900"}
            ></Linkedin></a
          >
          <button
            class="group"
            onclick={() => {
              scrollInto("svelte-github");
            }}
            >Svelte
            <div
              class="bg-zinc-900 dark:bg-zinc-100 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-sm"
            ></div></button
          >
          <button
            class="group"
            onclick={() => {
              scrollInto("skills");
            }}
            >Skills
            <div
              class="bg-zinc-900 dark:bg-zinc-100 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-sm"
            ></div></button
          >
          <button
            class="group"
            onclick={() => {
              scrollInto("work-history");
            }}
            >Work History
            <div
              class="bg-zinc-900 dark:bg-zinc-100 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-sm"
            ></div></button
          >
        </div>

        <button onclick={toggleDarkMode} aria-pressed={$isDarkMode}
          >{#if $isDarkMode}<ToggleOn
              customClass="fill-zinc-100 hover:scale-125 transition-transform duration-200"
            ></ToggleOn>{:else}<ToggleOff
              customClass="fill-zinc-900 hover:scale-125 transition-transform duration-200"
            ></ToggleOff>{/if} Dark Mode
        </button>
      </nav>
    </div>
    <!-- Mobile -->
    <nav in:fade class="md:hidden w-full">
      <div
        class="flex justify-between p-6 bg-zinc-100 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-900"
      >
        <button onclick={toggleDarkMode} aria-pressed={$isDarkMode}
          >{#if $isDarkMode}<ToggleOn customClass="fill-zinc-100"
            ></ToggleOn>{:else}<ToggleOff customClass="fill-zinc-900"
            ></ToggleOff>{/if} Dark Mode
        </button>
        <button
          aria-label="Toggle main menu"
          aria-expanded={openMenu}
          onclick={() => {
            openMenu = !openMenu;
          }}
        >
          {#if openMenu}
            <Close customClass={$isDarkMode ? "fill-zinc-100" : "fill-zinc-900"}
            ></Close>
          {:else}
            <Menu customClass={$isDarkMode ? "fill-zinc-100" : "fill-zinc-900"}
            ></Menu>
          {/if}
        </button>
      </div>
      {#if openMenu}
        <div
          in:slide={{ y: -10, duration: 300 }}
          out:slide={{ y: -10, duration: 300 }}
          class="w-full text-center pb-4 flex flex-col gap-4 bg-zinc-100 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-900"
          style="margin-top: -1px"
        >
          <button
            onclick={() => {
              openMenu = false;
              scrollInto("svelte-github");
            }}>Svelte</button
          >
          <button
            onclick={() => {
              openMenu = false;
              scrollInto("skills");
            }}>Skills</button
          >
          <button
            onclick={() => {
              openMenu = false;
              scrollInto("work-history");
            }}>Work History</button
          >
        </div>
      {/if}
    </nav>
  {:else}
    <!-- Monitor -->
    <div
      in:fade
      class="w-full bg-zinc-900 text-zinc-100 dark:text-zinc-900 dark:bg-zinc-100 justify-center border-b hidden md:flex"
    >
      <nav
        class="max-w-5xl w-full gap-6 md:gap-0 flex flex-col md:flex-row justify-between p-6"
      >
        <div class="flex gap-8">
          <a
            class="hover:scale-125 transition-transform duration-300"
            href="https://www.linkedin.com/in/ebba-svensson-6a295b187/"
            aria-label="Linkedin"
            ><Linkedin
              customClass={$isDarkMode ? "fill-zinc-900" : "fill-zinc-100"}
            ></Linkedin></a
          >
          <button
            class="group"
            onclick={() => {
              scrollInto("svelte-github");
            }}
            >Svelte
            <div
              class="bg-zinc-100 dark:bg-zinc-900 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-sm"
            ></div></button
          >
          <button
            class="group"
            onclick={() => {
              scrollInto("skills");
            }}
            >Skills
            <div
              class="bg-zinc-100 dark:bg-zinc-900 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-sm"
            ></div></button
          >
          <button
            class="group"
            onclick={() => {
              scrollInto("work-history");
            }}
            >Work History
            <div
              class="bg-zinc-100 dark:bg-zinc-900 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-sm"
            ></div></button
          >
        </div>

        <button onclick={toggleDarkMode} aria-pressed={$isDarkMode}
          >{#if $isDarkMode}<ToggleOn
              customClass="fill-zinc-900 hover:scale-125 transition-transform duration-200"
            ></ToggleOn>{:else}<ToggleOff
              customClass="fill-zinc-100 hover:scale-125 transition-transform duration-200"
            ></ToggleOff>{/if} Dark Mode
        </button>
      </nav>
    </div>
    <!-- Mobile -->
    <nav
      in:fade
      class="md:hidden w-full bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
      aria-label="Main mobile navigation"
    >
      <div class="container flex justify-between p-6">
        <button onclick={toggleDarkMode} aria-pressed={$isDarkMode}
          >{#if $isDarkMode}<ToggleOn customClass="fill-zinc-900"
            ></ToggleOn>{:else}<ToggleOff customClass="fill-zinc-100"
            ></ToggleOff>{/if} Dark Mode
        </button>
        <button
          aria-label="Toggle main menu"
          aria-expanded={openMenu}
          onclick={() => {
            openMenu = !openMenu;
          }}
        >
          {#if openMenu}
            <Close customClass={$isDarkMode ? "fill-zinc-900" : "fill-zinc-100"}
            ></Close>
          {:else}
            <Menu customClass={$isDarkMode ? "fill-zinc-900" : "fill-zinc-100"}
            ></Menu>
          {/if}
        </button>
      </div>
      {#if openMenu}
        <div
          in:slide={{ y: -10, duration: 300 }}
          out:slide={{ y: -10, duration: 300 }}
          class="w-full text-center pb-4 flex flex-col gap-4"
          style="margin-top: -1px"
        >
          <button
            onclick={() => {
              openMenu = false;
              scrollInto("svelte-github");
            }}>Svelte</button
          >
          <button
            onclick={() => {
              openMenu = false;
              scrollInto("skills");
            }}>Skills</button
          >
          <button
            onclick={() => {
              openMenu = false;
              scrollInto("work-history");
            }}>Work History</button
          >
        </div>
      {/if}
    </nav>
  {/if}
</header>

<svelte:window bind:scrollY={y} />
