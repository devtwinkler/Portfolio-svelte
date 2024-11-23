<script>
  /** Get current URI */
  import { page } from "$app/stores";

  /** Load menu icons*/
  import iconHome from "../../assets/icons/home.png";
  import iconAbout from "../../assets/icons/about.png";
  import iconPortfolio from "../../assets/icons/portfolio.png";
  import iconWins from "../../assets/icons/wins.png";
  import iconContact from "../../assets/icons/contact.png";
</script>

<div class="menu sm:pt-[1em] xs:pt-[0.5em] exs:pt-[0.2em]
            md:w-[6em] sm:w-[4em] xs:w-[2.5em] exs:w-[2.5em]">
  <nav
    class="flex md:p-[1em] sm:p-[0.5em] xs:p-[0.2em] exs:p-[0.2em] gap-[1em]"
  >
    <a href="/home" class={$page.url.pathname === "/home" ? "select" : ""}>
      <img
        src={iconHome}
        alt="..."
        class="md:w-[4em] sm:w-[3em] xs:w-[2em] exs:w-[1.5em]"
      />
      <p class="hidden md:block">Home</p>
    </a>

    <a href="/about" class={$page.url.pathname === "/about" ? "select" : ""}>
      <img
        src={iconAbout}
        alt="..."
        class="md:w-[4em] sm:w-[3em] xs:w-[2em] exs:w-[1.5em]"
      />
      <p class="hidden md:block">About</p>
    </a>

    <a
      href="/portfolio"
      class={$page.url.pathname === "/portfolio" ? "select" : ""}
    >
      <img
        src={iconPortfolio}
        alt="..."
        class="md:w-[4em] sm:w-[3em] xs:w-[2em] exs:w-[1.5em]"
      />
      <p class="hidden md:block">Portfolio</p>
    </a>

    <a href="/wins" class={$page.url.pathname === "/wins" ? "select" : ""}>
      <img
        src={iconWins}
        alt="..."
        class="md:w-[4em] sm:w-[3em] xs:w-[2em] exs:w-[1.5em]"
      />
      <p class="hidden md:block">Wins</p>
    </a>

    <a
      href="/contact"
      class={$page.url.pathname === "/contact" ? "select" : ""}
    >
      <img
        src={iconContact}
        alt="..."
        class="md:w-[4em] sm:w-[3em] xs:w-[2em] exs:w-[1.5em]"
      />
      <p class="hidden md:block">Contact</p>
    </a>
  </nav>
</div>
