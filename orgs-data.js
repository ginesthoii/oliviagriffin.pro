export const ORGS = [

/* =========================
   SECURITY / CARE / INFRA
========================= */

{
  id: "room-reader",
  title: "room-reader",
  category: "Security",
  githubOrgSlug: "room-reader",
  orgUrl: "https://github.com/room-reader",
  image: "images/orgs/room-reader.png",
  about: "Room-level care visibility using intentional NFC badge taps to confirm real care events without cameras or invasive monitoring. Designed for dignity, caregiver transparency, and outage resilience.",
  tech: "ESP32 · PN532 NFC · NTAG213 · Raspberry Pi · FastAPI · SQLite · Python · Offline-first sync",
  tags: ["Healthcare","NFC","Offline-first","IoT"]
},

{
  id: "caregiverqr",
  title: "CaregiverQR",
  category: "Security",
  githubOrgSlug: "CaregiverQR",
  orgUrl: "https://github.com/CaregiverQR",
  image: "images/orgs/caregiver-qr1.png",
  about: "Lightweight QR-based care logging for meals, medications, ADLs, and daily activity. Built for transparency and low-friction use in homes and small care settings.",
  tech: "QR Codes · Google Sheets · Google Apps Script · AppSheet · JavaScript",
  tags: ["Care","QR","Low-friction"]
},

{
  id: "ares-assist",
  title: "ares-assist",
  category: "Security",
  githubOrgSlug: "ares-assist",
  orgUrl: "https://github.com/ares-assist",
  image: "images/orgs/ares.png",
  about: "Local-first cyber + physical perimeter layer for offline intelligence systems. Provides guardrails, monitoring, and control across software and real-world interfaces.",
  tech: "Python · Local security tooling · Sensors · Automation · Policy enforcement · Offline-first design",
  tags: ["Security","Automation","Perimeter"]
},

{
  id: "phantomscanner",
  title: "PhantomScanner",
  category: "Security",
  githubOrgSlug: "PhantomScanner",
  orgUrl: "https://github.com/PhantomScanner",
  image: "images/orgs/phantom.gif",
  about: "Multi-repository security scanning and normalization engine for continuous security visibility without SaaS dependency.",
  tech: "Python · Svelte · Semgrep · Bandit · Trivy · Gitleaks · SQLite · Postgres",
  tags: ["AppSec","Scanning","Automation"]
},

{
  id: "cloak-and-cipher",
  title: "CloakAndCipher",
  category: "Security",
  githubOrgSlug: "CloakAndCipher",
  orgUrl: "https://github.com/CloakAndCipher",
  image: "images/orgs/cloak-and-cipher.gif",
  about: "Developer-first AppSec automation pipelines and reusable security components for real-world CI workflows.",
  tech: "GitHub Actions · Python · Bandit · Semgrep · Trivy · Secret detection",
  tags: ["CI","Security","AppSec"]
},

/* =========================
   AI / COMPUTE / KNOWLEDGE
========================= */

{
  id: "lorie-ai",
  title: "lorie-ai",
  category: "AI",
  githubOrgSlug: "lorie-ai",
  orgUrl: "https://github.com/lorie-ai",
  image: "images/orgs/LORIE-FULL.gif",
  about: "Local Offline Reasoning Intelligence Engine — unified offline LLM + retrieval system for personal knowledge and cross-domain reasoning.",
  tech: "Local LLMs · RAG · Embeddings · Python · PyQt6 · FastAPI",
  tags: ["LLM","Offline","Knowledge"]
},

{
  id: "hypercalculia",
  title: "hypercalculia",
  category: "AI",
  githubOrgSlug: "hypercalculia",
  orgUrl: "https://github.com/hypercalculia",
  image: "images/orgs/hypercalculia.gif",
  about: "Offline-first scientific computation engine combining symbolic math, numerical analysis, and simulation frameworks.",
  tech: "Python · Rust · C++ · NumPy · SciPy · SymPy · JAX · OpenFOAM",
  tags: ["Scientific","Compute","Math"]
},

{
  id: "olivision",
  title: "Olivision",
  category: "AI",
  githubOrgSlug: "Olivision",
  orgUrl: "https://github.com/Olivision",
  image: "images/orgs/olivision.gif",
  about: "Reflective visual journaling and habit insight tools focused on pattern visibility without gamification.",
  tech: "Python · TypeScript · Privacy-respecting data models",
  tags: ["Reflection","Insight"]
},

/* =========================
   CREATIVE / HISTORY / STORY
========================= */

{
  id: "storyshield",
  title: "StoryShield",
  category: "Creative",
  githubOrgSlug: "StoryShield",
  orgUrl: "https://github.com/StoryShield",
  image: "images/orgs/storyshield.png",
  about: "Privacy-first reading and creative writing companion with encrypted library and metadata protection.",
  tech: "AppSheet · Google Sheets · AES-128 · JavaScript · HTML",
  tags: ["Privacy","Writing","Encryption"]
},

{
  id: "alexandria-archive",
  title: "AlexandriaArchiveAPI",
  category: "Creative",
  githubOrgSlug: "AlexandriaArchiveAPI",
  orgUrl: "https://github.com/AlexandriaArchiveAPI",
  image: "images/orgs/alexandria.png",
  about: "Code-first archive and API ecosystem for ancient and medieval historical knowledge and datasets.",
  tech: "Python · SQLite · Structured schemas · APIs",
  tags: ["History","Datasets"]
},

{
  id: "the-rest-of-us",
  title: "TheRestOfUs",
  category: "Creative",
  githubOrgSlug: "TheRestOfUsGame",
  orgUrl: "https://github.com/TheRestOfUsGame",
  image: "images/orgs/the-rest-of-us.png",
  about: "Narrative survival game focused on grounded environmental realism and human storytelling.",
  tech: "Godot 4 · Narrative systems · Environment design",
  tags: ["GameDev","Narrative"]
},

{
  id: "character-creator",
  title: "character-creator",
  category: "Creative",
  githubOrgSlug: "character-creator",
  orgUrl: "https://github.com/character-creator",
  image: "images/orgs/character-creator.gif",
  about: "Character engineering suite combining visual creation, automation workflows, and psychology frameworks.",
  tech: "Blender · Python · Automation · AI-assisted planning · Psychology",
  tags: ["Worldbuilding","Characters"]
},

/* =========================
   HOMESTEAD / ECOLOGY / INFRA
========================= */

{
  id: "gargoyle-offgrid",
  title: "GargoyleOffGrid",
  category: "Homestead",
  githubOrgSlug: "GargoyleOffGrid",
  orgUrl: "https://github.com/GargoyleOffGrid",
  image: "images/orgs/gargoyle.png",
  about: "Offline-first resilience tooling for infrastructure planning, resource tracking, and low-power system operation.",
  tech: "C++ · Python · JavaScript · Offline tooling · Resource tracking",
  tags: ["Off-grid","Infrastructure"]
},

{
  id: "a-fungus-among-us",
  title: "aFungusAmongUs",
  category: "Homestead",
  githubOrgSlug: "aFungusAmongUs",
  orgUrl: "https://github.com/aFungusAmongUs",
  image: "images/orgs/a-fungus-among-us.jpg",
  about: "Open-source fungi cultivation, foraging, and education ecosystem with logging and seasonal mapping tools.",
  tech: "Python · CLI · Arduino · ESP · Raspberry Pi · Data logging",
  tags: ["Fungi","Education"]
},

{
  id: "wicked-botany",
  title: "WickedBotany",
  category: "Homestead",
  githubOrgSlug: "WickedBotany",
  orgUrl: "https://github.com/WickedBotany",
  image: "images/orgs/wicked-botany.png",
  about: "Botanical research platform focused on toxicology, plant chemistry, and historical plant use.",
  tech: "Python · Data modeling · Simulation · Greenhouse automation",
  tags: ["Botany","Simulation"]
},

{
  id: "catholic-medusa",
  title: "CatholicMedusa",
  category: "Homestead",
  githubOrgSlug: "CatholicMedusa",
  orgUrl: "https://github.com/CatholicMedusa",
  image: "images/orgs/catholic-medusa.png",
  about: "Systems-driven ball python husbandry, genetics modeling, and environmental monitoring platform.",
  tech: "Python · Java · Data modeling · Genetics simulation · Sensors · APIs",
  tags: ["Genetics","Husbandry"]
},

{
  id: "snake-witch",
  title: "SnakeWitch",
  category: "Homestead",
  githubOrgSlug: "SnakeWitch",
  orgUrl: "https://github.com/SnakeWitch",
  image: "images/orgs/snake-witch.png",
  about: "Lightweight snake husbandry utilities for scheduling, calculations, logging, and record templates.",
  tech: "Python · CLI · Google Sheets · AppScript",
  tags: ["Reptiles","Tools"]
},

{
  id: "seasonal-sidekick",
  title: "SeasonalSidekick",
  category: "Homestead",
  githubOrgSlug: "SeasonalSidekick",
  orgUrl: "https://github.com/SeasonalSidekick",
  image: "images/orgs/seasonal-sidekick.png",
  about: "Seasonal planning and automation ecosystem for holidays, safety, logistics, and home workflows.",
  tech: "JavaScript · Web apps · JSON automation · Google Sheets · Smart-home integrations",
  tags: ["Planning","Automation"]
},

{
  id: "the-waterworks",
  title: "the-waterworks",
  category: "Homestead",
  githubOrgSlug: "the-waterworks",
  orgUrl: "https://github.com/the-waterworks",
  image: "images/orgs/the-waterworks.gif",
  about: "Tooling for water and utility infrastructure modeling, tracking, and operational documentation.",
  tech: "PHP · Utility scripting · Documentation systems",
  tags: ["Utilities","Infrastructure"]
},

{
  id: "mini-farm-animals",
  title: "mini-farm-animals",
  category: "Homestead",
  githubOrgSlug: "mini-farm-animals",
  orgUrl: "https://github.com/mini-farm-animals",
  image: "images/orgs/mini-farm-animals.gif",
  about: "Knowledge base for mixed-species animal husbandry with care workflows and species datasets.",
  tech: "Structured documentation · Care workflows · Species datasets",
  tags: ["Animals","Care"]
},

{
  id: "mini-farm-plants",
  title: "mini-farm-plants",
  category: "Homestead",
  githubOrgSlug: "mini-farm-plants",
  orgUrl: "https://github.com/mini-farm-plants",
  image: "images/orgs/mini-farm-plants.gif",
  about: "Plant and crop care system documenting soil, schedules, automation experiments, and seasonal cycles.",
  tech: "C++ · Agricultural data modeling · Care schedules",
  tags: ["Plants","Agriculture"]
},

{
  id: "self-sufficient-homestead",
  title: "self-sufficient-homestead",
  category: "Homestead",
  githubOrgSlug: "self-sufficient-homestead",
  orgUrl: "https://github.com/self-sufficient-homestead",
  image: "images/orgs/self-sufficient-homestead.gif",
  about: "Systems-first automation framework for resilient homestead infrastructure and operations.",
  tech: "Embedded systems · Automation · Offline-first design",
  tags: ["Resilience","Off-grid"]
},

{
  id: "small-land-management",
  title: "small-land-management",
  category: "Homestead",
  githubOrgSlug: "small-land-management",
  orgUrl: "https://github.com/small-land-management",
  image: "images/orgs/small-land-management.gif",
  about: "Integrated land operations framework combining animals, crops, sensors, infrastructure, and planning.",
  tech: "OpenSCAD · Sensors · Automation · AI planning",
  tags: ["Land","Planning"]
},

{
  id: "SelfTaughtSandbox",
  title: "SelfTaughtSandbox",
  category: "AI",
  githubOrgSlug: "SelfTaughtSandbox",
  orgUrl: "https://github.com/SelfTaughtSandbox",
  image: "images/orgs/sandbox.png",
  about: "Structured self-teaching lab organized into reusable skill tracks and project learning systems.",
  tech: "Learning tracks · Templates · Labs · Projects",
  tags: ["Learning","Development"]
},

{
  id: "LazyDaisyAcres",
  title: "LazyDaisyAcres",
  category: "Homestead",
  githubOrgSlug: "LazyDaisyAcres",
  orgUrl: "https://github.com/LazyDaisyAcres",
  image: "images/orgs/lazy-daisy-acres.png",
  about: "Automation-first homestead infrastructure ecosystem for animals, gardens, storage, and property operations.",
  tech: "Offline-first · Sensors · SOPs · Dashboards",
  tags: ["Homestead","Automation"]
},

{
  id: "HiveBeeWare",
  title: "HiveBeeWare",
  category: "Homestead",
  githubOrgSlug: "HiveBeeWare",
  orgUrl: "https://github.com/HiveBeeWare",
  image: "images/orgs/hive-bee-ware.gif",
  about: "Smart apiary telemetry platform with hive sensors, inspection dashboards, and seasonal automation.",
  tech: "ESP32 · Sensors · Telemetry · Offline dashboards · 3D printing",
  tags: ["Beekeeping","IoT"]
}

];
