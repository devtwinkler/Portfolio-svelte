<script lang="ts">
  import "../styles/style.scss"; //Import style-sheet
  import { page } from "$app/stores";
  import Header from "../components/layout/header.svelte";  //Header component
  import Footer from "../components/layout/footer.svelte";  //Footer component

  let uri = $page.url.pathname.toString();
</script>

<div class="background"></div>  <!-- Redner background photo -->
<Header></Header> <!-- Render Header component -->
<main>
  <slot />  <!-- Dynamic rednering per page -->
</main>
<Footer></Footer> <!-- Render Footer component -->

