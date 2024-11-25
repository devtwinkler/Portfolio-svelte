<script lang="ts">
  import "../styles/style.scss"; //Import style-sheet
  import Header from "../components/layout/header.svelte"; //Header component
  import Footer from "../components/layout/footer.svelte"; //Footer component
  import Menu from "../components/layout/menu.svelte"; //Menu component
</script>

<!-- Redner background photo -->
<div class="background"></div>

<!-- Render Header component -->
<Header />

<main>
  <!-- Dynamic rednering per page -->
  <div
    class="page w-full pt-[1em] pb-[1em]
      md:pl-[2em] sm:pl-[1em] xs:pl-[0.5em] exs:pl-[0em]"
  >
    <slot />
  </div>

  <!-- Render menu -->
  <Menu />
</main>

<!-- Render Footer component -->
<Footer />
