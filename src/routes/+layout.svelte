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
  <slot />

  <!-- Render menu -->
  <Menu />
</main>

<!-- Render Footer component -->
<Footer />
