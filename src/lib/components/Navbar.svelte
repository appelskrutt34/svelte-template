<script>
  import { fade, slide } from "svelte/transition";
  import { black, white } from "$lib/data/constants";
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

<a href="#main" class="opacity-0" aria-label="Skip to main content"></a>
<header class="fixed w-full top-0 z-20">
  {#if y < 50}
    <!-- Monitor -->
    <div
      in:fade
      class="w-full justify-center hidden md:flex bg-zinc-100 text-zinc-950 dark:text-zinc-100 dark:bg-zinc-950"
    >
      <nav
        class="container gap-6 md:gap-0 flex flex-col md:flex-row justify-between py-6 px-4"
      >
        <div class="flex gap-8">
          <a
            href="https://www.linkedin.com/in/ebba-svensson-6a295b187/"
            aria-label="Linkedin"
            ><Linkedin color={$isDarkMode ? white : black}></Linkedin></a
          >
          <button
            onclick={() => {
              scrollInto("svelte-github");
            }}>svelte</button
          >
          <button
            onclick={() => {
              scrollInto("HTB");
            }}>HTB</button
          >
          <button
            onclick={() => {
              scrollInto("skills");
            }}>skills</button
          >
        </div>

        <button onclick={toggleDarkMode}
          >{#if $isDarkMode}<ToggleOn color={white}></ToggleOn>{:else}<ToggleOff
              color={black}
            ></ToggleOff>{/if} Dark Mode
        </button>
      </nav>
    </div>
    <!-- Mobile -->
    <nav in:fade class="md:hidden w-full">
      <div
        class="flex justify-between py-6 px-4 bg-zinc-100 text-zinc-950 dark:text-zinc-100 dark:bg-zinc-950"
      >
        <button onclick={toggleDarkMode}
          >{#if $isDarkMode}<ToggleOn color={white}></ToggleOn>{:else}<ToggleOff
              color={black}
            ></ToggleOff>{/if} Dark Mode
        </button>
        <button
          aria-label="Toggle main menu"
          onclick={() => {
            openMenu = !openMenu;
          }}
        >
          {#if openMenu}
            <Close color={$isDarkMode ? white : black}></Close>
          {:else}
            <Menu color={$isDarkMode ? white : black}></Menu>
          {/if}
        </button>
      </div>
      {#if openMenu}
        <div
          in:slide={{ y: -10, duration: 300 }}
          out:slide={{ y: -10, duration: 300 }}
          class="w-full text-center pb-4 flex flex-col gap-4 bg-zinc-100 text-zinc-950 dark:text-zinc-100 dark:bg-zinc-950"
          style="margin-top: -1px"
        >
          <button
            onclick={() => {
              openMenu = false;
              scrollInto("svelte-github");
            }}>svelte</button
          >
          <button
            onclick={() => {
              openMenu = false;
              scrollInto("HTB");
            }}>HTB</button
          >
          <button
            onclick={() => {
              openMenu = false;
              scrollInto("skills");
            }}>skills</button
          >
          <button
            onclick={() => {
              openMenu = false;
              scrollInto("projects");
            }}>hobby projects</button
          >
        </div>
      {/if}
    </nav>
  {:else}
    <!-- Monitor -->
    <div
      in:fade
      class="w-full bg-zinc-950 text-zinc-100 dark:text-zinc-950 dark:bg-zinc-100 justify-center border-b hidden md:flex"
    >
      <nav
        class="container gap-6 md:gap-0 flex flex-col md:flex-row justify-between py-6 px-4"
        aria-label="Main navigation"
      >
        <div class="flex gap-8">
          <a
            href="https://www.linkedin.com/in/ebba-svensson-6a295b187/"
            aria-label="Linkedin"
            ><Linkedin color={$isDarkMode ? black : white}></Linkedin></a
          >
          <button
            onclick={() => {
              scrollInto("svelte-github");
            }}>svelte</button
          >
          <button
            onclick={() => {
              scrollInto("HTB");
            }}>HTB</button
          >
          <button
            onclick={() => {
              scrollInto("skills");
            }}>skills</button
          >
        </div>

        <button onclick={toggleDarkMode}
          >{#if $isDarkMode}<ToggleOn color={black}></ToggleOn>{:else}<ToggleOff
              color={white}
            ></ToggleOff>{/if} Dark Mode
        </button>
      </nav>
    </div>
    <!-- Mobile -->
    <nav
      in:fade
      class="md:hidden w-full bg-zinc-950 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-950"
      aria-label="Main mobile navigation"
    >
      <div class="container flex justify-between py-6 px-4">
        <button onclick={toggleDarkMode}
          >{#if $isDarkMode}<ToggleOn color={black}></ToggleOn>{:else}<ToggleOff
              color={white}
            ></ToggleOff>{/if} Dark Mode
        </button>
        <button
          aria-label="Toggle main menu"
          onclick={() => {
            openMenu = !openMenu;
          }}
        >
          {#if openMenu}
            <Close color={$isDarkMode ? black : white}></Close>
          {:else}
            <Menu color={$isDarkMode ? black : white}></Menu>
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
            }}>svelte</button
          >
          <button
            onclick={() => {
              openMenu = false;
              scrollInto("HTB");
            }}>HTB</button
          >
          <button
            onclick={() => {
              openMenu = false;
              scrollInto("skills");
            }}>skills</button
          >
        </div>
      {/if}
    </nav>
  {/if}
</header>

<svelte:window bind:scrollY={y} />
