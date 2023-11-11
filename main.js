import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <nav class="container d-flex justify-content-between align-items-center">
  <h2>D-IO</h2>
  <div class="right-nav">
    <a href="https://github.com/floxydio" class="text-decoration-none" target="_blank">Github</a>
    <a href="https://www.linkedin.com/in/dio-okta-rovelino/" style="margin-left:20px;" class="text-decoration-none" target="_blank">Linkedin</a>
    <a href="https://drive.google.com/file/d/1qJGkrTqb-jyrm3L4V-6Xznb936sMrLky/view?usp=sharing" class="my-3 btn btn-light text-decoration-none" target="_blank" style="margin-left:20px;">Resume</a>
  </div>
</nav>
<div class="container d-flex justify-content-center my-5 flex-column text-center">
  <img class="img-fluid m-auto"
    src="https://lh3.googleusercontent.com/a/AEdFTp7G3LzKsbKzjnpYBWv_HtIEv3TuJatTvDM-lGQS-g=s96-c-rg-br100"
    width="100" />
  <br />
  <h1 id="element"></h1>
</div>
<div class="container">
  <h4 class="my-xl-4 fw-bold">Tech Stack</h4>
  <p class="fw-light">Mobile: Flutter, React Native, Android (Kotlin) & SwiftUI</p>
  <p class="fw-light">State Management: Provider, Bloc, Zustand</p>
  <p class="fw-light">Front End Web: React (NextJS) & Astro</p>
  <p class="fw-light">Backend: Golang, Laravel & Express Typescript</p>
  <p class="fw-light">Database: MySQL,PostgreSQL,Redis,MongoDB & GraphQL</p>
  <p class="fw-light">Cloud: Google Cloud</p>
  <p class="fw-light">OS Linux: Centos & Ubuntu</p>
</div>
<div class="container">
  <h4 class="my-xl-4 fw-bold">Experience at Working</h4>
  <p class="fw-light">
    - Software Engineer at <a href="https://www.bni.co.id/id-id/" target="_blank">Bank BNI</a> (2022 - Now) (Flutter,
    NextJS, Golang, Minio, Firebase, Cordova)
  </p>
  <p class="fw-light">
    - Freelancer at <a href="https://baznas.go.id/" target="_blank">Baznas</a> (March 2022 - Now) (Flutter 3 + Bloc State
    Management)
  </p>
  <p class="fw-light">
    - Freelancer at <a href="https://uspatih.id/" target="_blank">Uspatih</a> (2023 February - Now) (Flutter 3 + Bloc State
    Management, Golang, Laravel & iOS)
  </p>
  <p class="fw-light">
    - Freelancer at <a href="https://www.linkedin.com/company/bhumi-rantau-energi?originalSubdomain=id" target="_blank">PT Bhumi Rantau Energy</a> (2023 March - Now) (Flutter 3 + GetX & Golang)
  </p>
  <p class="fw-light">
    - Software Engineer at <a href="https://reku.id/" target="_blank">Reku</a> (Jan 2022 - Okt 2022) (Flutter, Google Cloud Platform, Kafka, Redis, Golang, Elixir, Typescript, Fireblocks, NextjS)
  </p>
  <p class="fw-light">
    - Flutter Developer RnD at <a href="https://www.dmmgroup.id/" target="_blank">DMMX</a> (August 2021 - Nov 2021) (Flutter)
  </p>
  <p class="fw-light">
    - Junior Flutter Developer at <a href="https://www.crunchbase.com/organization/pt-pilar-infocom-nusantara" target="_blank">Pilar Infocom Nusantara</a> (March 2021 - August 2021) (Flutter & CodeIgniter 4)
  </p>
  <p class="fw-light">
    - Laravel Developer (Intern) at <a href="https://kamarpelajar.id/" target="_blank">Kamar Pelajar</a> (Des 2019 - July 2021) (Laravel 6)
  </p>
</div>
 <div class="container">
  <h4 class="my-xl-4 fw-bold">Experience for My Startup</h4>
  <p class="fw-light">
    - CTO at <a href="https://home.homefund-id.tech/" target="_blank">Homefunding (Fintech)</a> (Jan 2023 - Now) (Flutter 3,
    NextJS, Golang, Minio, Firebase, Astro, Redis, ExpressJS)
  </p>
</div>
<div style="margin-bottom: 100px;"></div>
  </div>
  
`

setupCounter(document.querySelector('#counter'))
