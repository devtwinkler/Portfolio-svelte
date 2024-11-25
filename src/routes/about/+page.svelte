<script>
  import avatar from "../../assets/imgs/mine-01.png";
  import { NAME, NATION, DEGREE, EXP_YEARS } from "../../lib/personal";
</script>

<div class="frame">
  <h1>WHOM YOU LOOK AT ?</h1>

  <div class="flex w-full flex gap-[1em] flex-row">
    <img src={avatar} alt="..." />

    <div class="flex flex-col">
      <p><b>Name:</b> {NAME}</p>
      <p><b>Nationality:</b> {NATION}</p>
      <p><b>Degree:</b> {DEGREE}</p>
      <p><b>Experience:</b> {EXP_YEARS}+ years</p>
      <p><b>Current role:</b> Senior Software Developer</p>
      <p><b>Technical Skills:</b></p>
      <p>&nbsp;✔Building AI solutions</p>
      <p>&nbsp;✔Developing web services</p>
      <p>&nbsp;✔Creating Mobile/Desktop Applications</p>
      <p>&nbsp;✔Launching Blockchain/smart contracts</p>
      <p>&nbsp;✔DevOps & CI/CD</p>
      <p>&nbsp;✔Database Design/Administration</p>
    </div>

    <div>
      <p><b>Key skills:</b></p>

    </div>
  </div>
</div>
