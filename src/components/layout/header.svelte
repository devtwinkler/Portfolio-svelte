<script>
  import avatar from "../../assets/imgs/mine-01.png";
  import logo from "../../assets/icons/logo.png";
  import { NAME, QUALIFICATION } from "../../lib/personal";
</script>

<header class="flex flex-col">
  <div class="flex w-full justify-between">
    <img
      src={avatar}
      alt="..."
      class=" md:w-[6em] md:h-[6em] md:p-[1em]
              sm:w-[4em] sm:h-[4em] sm:p-[0.5em]
              xs:w-[2.5em] xs:h-[2.5em] xs:p-[0.2em]
              exs:w-[2.5em] exs:h-[2.5em] exs:p-[0.2em]"
    />

    <div
      class="flex items-center justify-center items-center flex-col
                md:text-[1.5em] sm:text-[1em] xs:text-[0.8em]
                hidden xs:flex"
    >
      <h1>{NAME}</h1>
      <h2>{QUALIFICATION}</h2>
    </div>

    <img
      src={logo}
      alt="..."
      class=" md:w-[6em] md:h-[6em] md:p-[1em]
              sm:w-[4em] sm:h-[4em] sm:p-[0.5em]
              xs:w-[2.5em] xs:h-[2.5em] xs:p-[0.2em]
              exs:w-[2.5em] exs:h-[2.5em] exs:p-[0.2em]"
    />
  </div>

  <div class="text-center exs:block xs:hidden text-[0.8em]">
    <h1>{NAME}</h1>
    <h2>{QUALIFICATION}</h2>
  </div>
</header>
