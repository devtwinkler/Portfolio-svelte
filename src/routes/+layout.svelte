<script lang="ts">
  import Header from "../components/header.svelte";
  import "../styles/style.scss"; //Import style-sheet
  import { page } from "$app/stores";
  
  let uri = $page.url.pathname.toString();
  </script>

<div class="background"></div>
<Header></Header>

<slot />
