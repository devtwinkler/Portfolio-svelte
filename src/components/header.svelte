<script>
  import avatar from "../assets/imgs/mine-01.png";
  import logo from "../assets/imgs/logo.png";
  import { NAME, QUALIFICATION } from "../lib/personal";
</script>

<header class="flex">
  <div>
    <div>
      <img src={avatar} alt="..." />
    </div>

    <div>
      <h1>{NAME}</h1>
      <h2>{QUALIFICATION}</h2>
    </div>

    <div>
      <img src={logo} alt="..." />
    </div>
  </div>

  <div>
    <h1>{NAME}</h1>
    <h2>{QUALIFICATION}</h2>
  </div>
</header>
