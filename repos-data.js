 // repos-data.js
// Single source for portfolio cards.
// Add repos here - auto-renders them.

export const REPO_SECTIONS = [
  export const REPO_SECTIONS = [
  {
    id: "pro-cyber",
    title: "Professional · Cybersecurity",
    subtitle: "Bootcamp work + applied investigations",
    items: [
      {
        name: "WUSTL Cybersecurity Boot Camp",
        href: "https://github.com/ginesthoii/WUSTL-VIRT-CYBER-PT-01-2024-U-LOLC-main",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/wash-u.png?raw=1",
        description:
          "Structured labs, capstone work, and assessments from an intensive cybersecurity program. Focus on blue-team ops, incident response, malware analysis, and system hardening.",
        tech: ["Wireshark", "Kali Linux", "Metasploit", "Bash", "Windows", "Linux Hardening"],
        status: "Completed (A+)",
        tags: ["Cybersecurity", "Blue Team", "IR", "Labs"],
      },
      {
        name: "WashU Projects",
        href: "https://github.com/ginesthoii/WashU-Projects",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/washu.webp?raw=1",
        description:
          "Applied cybersecurity projects across networking, vulnerability assessment, cloud security, pentesting, and digital forensics.",
        tech: ["Azure", "Cryptography", "IAM", "Cloud Security"],
        status: "Completed (A+)",
        tags: ["Cybersecurity", "Cloud", "Forensics", "Pentest"],
      },
    ],
  },

  {
    id: "sim-model",
    title: "Simulation & Systems Modeling",
    subtitle: "Stochastic + agent simulations for real-world planning",
    items: [
      {
        name: "ScenarioEngine",
        href: "https://github.com/ginesthoii/ScenarioEngine",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/scenario-engine.png?raw=1",
        description:
          "Timeline-based stochastic simulation engine for modeling risk, failure, and long-term outcomes across complex systems. Used for finance, energy systems, and real-world planning problems.",
        tech: ["Python", "Monte Carlo", "State Modeling"],
        status: "Active",
        tags: ["Simulation", "Systems", "Risk", "Python"],
      },
      {
        name: "Mini-Massive",
        href: "https://github.com/ginesthoii/Mini-Massive",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/mini-massive.png?raw=1",
        description:
          "Lightweight agent-based simulation framework for modeling emergent system behavior (crowds, traffic, tactical interactions). Inspired by Weta Digital’s Massive system.",
        tech: ["Python", "WebGL", "Three.js"],
        status: "Active",
        tags: ["Agents", "Simulation", "WebGL", "Three.js"],
      },
    ],
  },

  {
    id: "knowledge-systems",
    title: "Knowledge, Metadata & Information Systems",
    subtitle: "Local-first tools for organizing files, docs, and ideas",
    items: [
      {
        name: "metadata-librarian",
        href: "https://github.com/ginesthoii/metadata_librarian",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/metadata-librarian.png?raw=1",
        description:
          "Local-first archival and metadata extraction system for documents, media, and images.",
        tech: ["Python", "YAML", "OCR", "SQLite"],
        status: "Active",
        tags: ["Local-first", "Metadata", "Archive", "OCR"],
      },
      {
        name: "mini-metadata",
        href: "https://github.com/ginesthoii/mini-metadata",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/mini-metadata.gif?raw=1",
        description:
          "Lightweight metadata utilities shared across projects.",
        tech: ["Python", "SQLite"],
        status: "Active",
        tags: ["Metadata", "Utilities", "Python"],
      },
      {
        name: "smart-tag-system",
        href: "https://github.com/ginesthoii/smart-tag-system",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/smart-tag.png?raw=1",
        description:
          "Universal hierarchical tagging framework for cross-domain organization.",
        tech: ["Python", "PyQt6", "OCR", "SQLite3"],
        status: "Active",
        tags: ["Tagging", "Taxonomy", "Local-first"],
      },
      {
        name: "catalog-orchestrator",
        href: "https://github.com/ginesthoii/catalog-orchestrator",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/catalog.jpg?raw=1",
        description:
          "Offline system for inventorying and publishing repository metadata.",
        tech: ["Automation", "Metadata"],
        status: "Active",
        tags: ["Automation", "Catalog", "Metadata"],
      },
      {
        name: "tree-me",
        href: "https://github.com/ginesthoii/tree-me",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/tree-me.jpg?raw=1",
        description:
          "A fully offline desktop app that reconstructs folder and file structures from pasted text, uploaded images, PDFs, or dropped files.",
        tech: ["Python", "PyQt6", "SQLite"],
        status: "Active",
        tags: ["Offline", "Utilities", "Parsing"],
      },
      {
        name: "framework",
        href: "https://github.com/ginesthoii/framework",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/framework.jpg?raw=1",
        description:
          "A personal operating system for ideas, projects, and research. Provides starter files, project templates, automation, and consistent reproducible structure.",
        tech: ["Python", "PyQt6", "SQLite", "Markdown"],
        status: "Active",
        tags: ["Templates", "Automation", "Systems"],
      },
      {
        name: "storyteller",
        href: "https://github.com/ginesthoii/storyteller",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/storyteller.png?raw=1",
        description:
          "Resumable offline audiobook generator for text, PDF, DOCX, MOBI, and EPUB files.",
        tech: ["Python", "TTS", "SQLite", "Document Parsing"],
        status: "Active",
        tags: ["TTS", "Offline", "Media", "Docs"],
      },
    ],
  },
{
  id: "appsec-automation",
  title: "Application Security & Automation",
  subtitle: "Security tooling + safety systems for local-first environments",
  items: [
    {
      name: "homestead-control-plane-hardener",
      href: "https://github.com/ginesthoii/homestead-control-plane-hardener",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/1.png?raw=1",
      description:
        "Local security auditing tool that scans homestead control systems for exposed services, weak authentication, and unsafe defaults that could allow unintended control of physical equipment or data leakage.",
      tech: ["Python", "Nmap", "Config File Parsing", "SQLite"],
      status: "Active",
      tags: ["AppSec", "Automation", "Hardening", "Local-first"],
    },
    {
      name: "remote-access-gatekeeper",
      href: "https://github.com/ginesthoii/remote-access-gatekeeper",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/2.png?raw=1",
      description:
        "Perimeter-aware access control system that governs remote access to homestead systems by checking network exposure, service state, and connection context before allowing control or data access.",
      tech: ["Python", "Network Inspection", "Token Enforcement", "Policy Logic"],
      status: "Active",
      tags: ["AppSec", "Access Control", "Policy", "Local-first"],
    },
    {
      name: "automation-safety-interlock-system",
      href: "https://github.com/ginesthoii/automation-safety-interlock-system",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/3.jpg?raw=1",
      description:
        "Rule-based safety layer that blocks automation actions when system state or environmental conditions are unsafe, preventing equipment damage, resource loss, or hazardous behavior caused by bad assumptions.",
      tech: ["Python", "Rule Engines", "State Validation"],
      status: "Active",
      tags: ["Automation", "Safety", "Rules", "Reliability"],
    },
    {
      name: "sensor-data-integrity-monitor",
      href: "https://github.com/ginesthoii/sensor-data-integrity-monitor",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/4.jpg?raw=1",
      description:
        "Sensor data integrity subsystem that validates environmental readings for plausibility, continuity, and consistency, preventing corrupted data from influencing automation, alerts, or operational decisions.",
      tech: ["Python", "Rule-Based Checks", "Time-Series Validation", "SQLite"],
      status: "Active",
      tags: ["Sensors", "Integrity", "Automation", "Monitoring"],
    },
    {
      name: "SecureMaestro",
      href: "https://github.com/ginesthoii/SecureMaestro",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/5.png?raw=1",
      description:
        "Secure, automated practice tools for musicians with looping and YouTube API integration, designed with application security boundaries and sandboxed execution in mind.",
      tech: ["Python", "AppSec Sandboxing", "Semgrep"],
      status: "Active",
      tags: ["AppSec", "Sandboxing", "Automation", "Tools"],
    },
  ],
},

{
  id: "dev-tools-platforms",
  title: "Developer Tools, Platforms & Interactive Demos",
  subtitle: "Frontends, interactive apps, and developer utilities",
  items: [
    {
      name: "phantom-terminal",
      href: "https://github.com/ginesthoii/phantom-terminal",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/phantom-terminal.gif?raw=1",
      description:
        "Animated self-typing terminal emulator for creating realistic command-line demos. Type, edit, or script commands and export the performance as PNG, GIF, or video.",
      tech: ["JavaScript", "HTML", "CSS"],
      status: "Active",
      tags: ["Developer Tools", "Demos", "UI", "JavaScript"],
    },
    {
      name: "license-wizard",
      href: "https://github.com/ginesthoii/license-wizard",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/license.jpg?raw=1",
      description:
        "Interactive multi-step license generation platform using a rules-based decision tree to recommend standard licenses or generate custom hybrid licenses with strict usage clauses.",
      tech: ["HTML", "CSS", "JavaScript", "Decision Trees", "GitHub Actions"],
      status: "Active",
      tags: ["Developer Tools", "Platform", "Licensing", "Automation"],
    },
    {
      name: "Notflix",
      href: "https://github.com/ginesthoii/Notflix",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/notflix.png?raw=1",
      description:
        "Fully local Netflix-style streaming demo for learning full-stack development and DevSecOps. Runs locally with containerized services and security tooling using Node, React, Docker, and GitHub Actions.",
      tech: ["Python", "JavaScript", "HTML", "Dockerfile"],
      status: "Active",
      tags: ["Full Stack", "DevSecOps", "Docker", "Local-first"],
    },
    {
      name: "DevGaze",
      href: "https://github.com/ginesthoii/DevGaze",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/devgaze.png?raw=1",
      description:
        "Mobile-friendly developer playground to instantly preview code. Paste HTML/CSS/JS, upload a file, or OCR code via camera and preview it live inside one app.",
      tech: ["HTML", "CSS", "JavaScript", "OCR"],
      status: "Active",
      tags: ["Developer Tools", "OCR", "Playground", "Web"],
    },
    {
      name: "build-a-board",
      href: "https://github.com/ginesthoii/build-a-board",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/build-a-board.jpg?raw=1",
      description:
        "Scrollable digital posterboard for creating, arranging, and collecting visual ideas in a freeform workspace.",
      tech: ["HTML", "CSS", "JavaScript", "TypeScript"],
      status: "Active",
      tags: ["Productivity", "Board", "UI", "TypeScript"],
    },
    {
      name: "kanban-post-it",
      href: "https://github.com/ginesthoii/kanban-post-it",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/kanban.svg?raw=1",
      description:
        "Lightweight visual task and idea board inspired by physical Post-it workflows for quick planning and organization.",
      tech: ["JavaScript", "HTML", "CSS"],
      status: "Active",
      tags: ["Productivity", "Kanban", "UI", "JavaScript"],
    },
  ],
},

{
  id: "specialized-modeling",
  title: "Specialized Modeling & Computational Systems",
  subtitle: "High-intensity computation + domain-specific modeling tools",
  items: [
    {
      name: "hypercalculia",
      href: "https://github.com/ginesthoii/hypercalculia",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/hypercalculia.png?raw=1",
      description:
        "High-intensity offline computation engine for complex numerical processing.",
      tech: ["Perl", "Python"],
      status: "Active",
      tags: ["Computation", "Offline", "Math", "Tools"],
    },
    {
      name: "morph-tracker",
      href: "https://github.com/ginesthoii/morph-tracker",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/morph-calc.png?raw=1",
      description:
        "Ball python morph genetics tracker with morph IDs and a breeding outcome calculator. Designed to model inheritance, visualize outcomes, and manage pairing data.",
      tech: ["Python", "Google Sheets", "Appscript", "JSON", "CSV", "SQLite"],
      status: "Active",
      tags: ["Modeling", "Genetics", "Data", "Python"],
    },
  ],
},

{
  id: "web-data-collection",
  title: "Web Data Collection & Systems",
  subtitle: "Scrapers, monitoring pipelines, and structured collection tools",
  items: [
    {
      name: "search-review-scraper",
      href: "https://github.com/ginesthoii/search-review-scraper",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/search-review-scraper.jpg?raw=1",
      description:
        "Personalized search review scraper.",
      tech: ["Python"],
      status: "Active",
      tags: ["Scraping", "Web", "Data", "Python"],
    },
    {
      name: "search-review-tracker",
      href: "https://github.com/ginesthoii/search-review-tracker",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/search-review-tracker.jpg?raw=1",
      description:
        "SEO and reputation monitoring with alerts.",
      tech: ["Python", "SQLite", "Plotly"],
      status: "Active",
      tags: ["Monitoring", "SEO", "Alerts", "Python"],
    },
    {
      name: "real-estate-scraper",
      href: "https://github.com/ginesthoii/real-estate-scraper",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/real-estate.jpg?raw=1",
      description:
        "Real estate listing data collection and analysis system.",
      tech: ["Python"],
      status: "Active",
      tags: ["Scraping", "Real Estate", "Data", "Python"],
    },
    {
      name: "sql-xslx-csv-scraper",
      href: "https://github.com/ginesthoii/sql-xslx-csv-scraper",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/scraper-sql-xslx.jpg?raw=1",
      description:
        "Structured data extraction and transformation utilities.",
      tech: ["Python"],
      status: "Active",
      tags: ["Data", "ETL", "Parsing", "Python"],
    },
  ],
},

{
  id: "local-intelligence",
  title: "Local Intelligence, Assistants & Reasoning",
  subtitle: "Offline-first assistants, prompt tools, and local reasoning systems",
  items: [
    {
      name: "Muses",
      href: "https://github.com/ginesthoii/Muses",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/muses.png?raw=1",
      description:
        "Personalized prompt builder and idea generator for local language models.",
      tech: ["Python", "SQLite", "PyQt6"],
      status: "Active",
      tags: ["LLMs", "Local-first", "Prompts", "Tools"],
    },
    {
      name: "PromptPal",
      href: "https://github.com/ginesthoii/PromptPal",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/prompt-pal.png?raw=1",
      description:
        "Prompt discovery, categorization, and remix tool for local LLM interaction.",
      tech: ["Python", "SQLite", "PyQt6"],
      status: "Active",
      tags: ["LLMs", "Local-first", "Prompts", "Organizer"],
    },
    {
      name: "Enyo",
      href: "https://github.com/ginesthoii/Enyo",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/enyo.gif?raw=1",
      description:
        "Offline-capable reference and learning system for first-aid and emergency knowledge, combining curated manuals with local-only query and reasoning support.",
      tech: ["Streamlit", "LangGraph", "Ollama"],
      status: "Active",
      tags: ["Offline", "Knowledge", "LLMs", "Safety"],
    },
    {
      name: "bobby-duck",
      href: "https://github.com/ginesthoii/bobby-duck",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/bobby-duck.png?raw=1",
      description:
        "Fully offline personal AI assistant with document ingestion, vector storage, and long-term memory.",
      tech: ["Python", "Vector Databases"],
      status: "Active",
      tags: ["Assistant", "Offline", "RAG", "Memory"],
    },
  ],
}
{
  id: "doc-processing-media",
  title: "Document Processing & Media Automation",
  subtitle: "Offline document tooling, PDF utilities, and automated media workflows",
  items: [
    {
      name: "paperwitch",
      href: "https://github.com/ginesthoii/paperwitch",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/paper-witch.png?raw=1",
      description:
        "Offline desktop app for merging PDFs and images with GUI and CLI support.",
      tech: ["Python", "PyQt6", "Pillow"],
      status: "Active",
      tags: ["Documents", "PDF", "Offline", "Automation"],
    },
    {
      name: "pdf-engine",
      href: "https://github.com/ginesthoii/pdf-engine",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/pdf-engine.jpg?raw=1",
      description:
        "Core PDF processing utilities and tools shared across multiple projects.",
      tech: ["Python"],
      status: "Active",
      tags: ["PDF", "Documents", "Utilities", "Automation"],
    },
    {
      name: "smart-page-downloader",
      href: "https://github.com/ginesthoii/smart-page-downloader",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/smart-downloader.gif?raw=1",
      description:
        "Automated PDF, image, and media downloader for dynamic web flows.",
      tech: ["Python", "Selenium"],
      status: "Active",
      tags: ["Downloader", "Automation", "Media", "Web"],
    },
  ],
},

{
  id: "language-translation-communication",
  title: "Language, Translation & Communication",
  subtitle: "Offline translation, accessibility tools, and local communication systems",
  items: [
    {
      name: "offline-translator",
      href: "https://github.com/ginesthoii/offline-translator",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/offline-translator.jpg?raw=1",
      description:
        "Fully offline translation engine for browser, terminal, and desktop use.",
      tech: ["Python", "MarianMT", "M2M100"],
      status: "Active",
      tags: ["Translation", "Offline", "Language", "NLP"],
    },
    {
      name: "backtalk",
      href: "https://github.com/ginesthoii/backtalk",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/backtalk.webp?raw=1",
      description:
        "Offline communication suite supporting text, speech, OCR, and document workflows.",
      tech: ["Python", "OCR", "TTS"],
      status: "Active",
      tags: ["Accessibility", "Offline", "Communication", "Documents"],
    },
    {
      name: "ASL-interpreter",
      href: "https://github.com/ginesthoii/ASL-interpreter",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/asl.png?raw=1",
      description:
        "Offline American Sign Language recognition and translation system without cloud dependency.",
      tech: ["Python", "Computer Vision", "Pose Estimation"],
      status: "Active",
      tags: ["ASL", "Accessibility", "Offline", "Computer Vision"],
    },
    {
      name: "offline-maps",
      href: "https://github.com/ginesthoii/offline-maps",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/offline-maps.png?raw=1",
      description:
        "Fully offline navigation and spatial communication system comparable to offline Google Maps, supporting local map tiles, routing, and interactive map rendering without external services.",
      tech: ["Python", "PHP", "JavaScript", "Leaflet", "OSM Map Tiles", "MapTiler"],
      status: "Active",
      tags: ["Maps", "Offline", "Navigation", "Spatial"],
    },
    {
      name: "morse-code-master",
      href: "https://github.com/ginesthoii/morse-code-master/tree/main",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/morse-code-master.jpg?raw=1",
      description:
        "Offline Raspberry Pi Pico Morse-code encoder/decoder with autonomous timing analysis and accuracy scoring.",
      tech: ["MicroPython", "Raspberry Pi Pico", "GPIO", "LEDs"],
      status: "Active",
      tags: ["Hardware", "Training", "Offline", "Learning"],
    },
    {
      name: "MorseCodeMentor",
      href: "https://github.com/ginesthoii/MorseCodeMentor",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/morse-code-mentor.gif?raw=1",
      description:
        "Offline Morse-code training app focused on guided practice and rhythm mastery.",
      tech: ["JavaScript", "HTML", "CSS"],
      status: "Active",
      tags: ["Learning", "Offline", "Training", "Web"],
    },
  ],
},

{
  id: "maker-diy",
  title: "Maker & DIY",
  subtitle: "Build plans, physical systems, hardware projects, and creative fabrication",
  items: [
    {
      name: "WoodenItBeNice",
      href: "https://github.com/ginesthoii/WoodenItBeNice",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/toolbench.png?raw=1",
      description:
        "DIY woodworking projects and build designs paired with parametric design and tooling scripts.",
      tech: ["Python", "Java", "Blender", "YAML"],
      status: "Active",
      tags: ["DIY", "Woodworking", "Design", "Fabrication"],
    },
    {
      name: "pvc-builds",
      href: "https://github.com/ginesthoii/pvc-builds",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/pvc.jpg?raw=1",
      description:
        "DIY PVC-based designs for irrigation, animals, utilities, and infrastructure builds — low-cost, durable, and repairable systems.",
      tech: ["PVC Systems", "Gravity-Fed Design", "Pressure-Rated Plumbing"],
      status: "Active",
      tags: ["DIY", "PVC", "Infrastructure", "Homestead"],
    },
    {
      name: "ShelfScapes",
      href: "https://github.com/ginesthoii/ShelfScapes",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/shelf-scapes.png?raw=1",
      description:
        "Immersive book-nook and display builds combining physical fabrication and electronics.",
      tech: ["CAD", "Arduino/ESP32", "FreeCAD"],
      status: "Active",
      tags: ["DIY", "Electronics", "Fabrication", "Design"],
    },
    {
      name: "digital_loom",
      href: "https://github.com/ginesthoii/digital_loom",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/digital-loom.png?raw=1",
      description:
        "Offline desktop tool for generating printable needlepoint and cross-stitch patterns from images, producing tiled PDFs with DMC color matching, symbols, and stitch grids.",
      tech: ["Python", "Pillow", "Tkinter", "PDF Export", "CSV Export"],
      status: "Active",
      tags: ["Crafting", "Offline", "Patterns", "Automation"],
    },
    {
      name: "ModelMiddleEarth",
      href: "https://github.com/ginesthoii/ModelMiddleEarth",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/model-middle-earth.jpg?raw=1",
      description:
        "3D explorations of Middle-earth environments and terrain focused on spatial layout and worldbuilding fidelity.",
      tech: ["Python", "Blender", "FreeCAD"],
      status: "Active",
      tags: ["3D", "Worldbuilding", "Design", "Blender"],
    },
    {
      name: "smart-display-frame",
      href: "https://github.com/ginesthoii/smart-display-frame",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/smart-display-frame.png?raw=1",
      description:
        "DIY wall-mounted smart display dashboard using a repurposed monitor to show calendars, to-dos, reminders, and local weather.",
      tech: ["Raspberry Pi 4"],
      status: "Active",
      tags: ["DIY", "Dashboard", "Raspberry Pi", "Home Ops"],
    },
    {
      name: "esp32-panic-assist-button",
      href: "https://github.com/ginesthoii/esp32-panic-assist-button",
      image: "https://raw.githubusercontent.com/ginesthoii/ginesthoii/main/assets/esp32-panic-assist-button.png",
      description:
        "ESP32-based assist/panic button: press once to notify caregivers/family via MQTT → Home Assistant → SMS/email/push.",
      tech: ["ESP32", "MQTT", "Home Assistant"],
      status: "Active",
      tags: ["ESP32", "Assistive Tech", "IoT", "Home Assistant"],
    },
    {
      name: "thermal-imaging-camera",
      href: "https://github.com/ginesthoii/thermal-imaging-camera",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/thermal-imaging-camera.png?raw=1",
      description:
        "Buildable FLIR-style thermal imaging camera using an MLX90640 sensor, ESP32-S3, and 3.5″ ILI9488 display, including CAD and build docs.",
      tech: ["OpenSCAD", "MLX Sensors", "ESP32-S3"],
      status: "Active",
      tags: ["Hardware", "Thermal", "ESP32", "CAD"],
    },
    {
      name: "guided-vertical-platform-lift",
      href: "https://github.com/ginesthoii/guided-vertical-platform-lift",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/gvpl.png?raw=1",
      description:
        "Wall-mounted rail-guided vertical platform lift system (GVPL) with enclosed carriage and hinged door, designed around a 2,000 lb target load for safely moving heavy items.",
      tech: ["OpenSCAD", "Crafty Amigo"],
      status: "Active",
      tags: ["Mechanical", "DIY", "CAD", "Engineering"],
    },
    {
      name: "foldable-axe-throwing-board",
      href: "https://github.com/ginesthoii/foldable-axe-throwing-board",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/axe.png?raw=1",
      description:
        "DIY foldable freestanding wooden axe-throwing target built for stability, durability, and easy transport with compact storage.",
      tech: ["Crafty Amigo"],
      status: "Active",
      tags: ["DIY", "Woodworking", "Build Plans", "Backyard"],
    },
    {
      name: "project-greenhouse",
      href: "https://github.com/ginesthoii/project-greenhouse",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/greenhouse.png?raw=1",
      description:
        "DIY plans, material lists, and automation software for building scalable greenhouse systems.",
      tech: ["Raspberry Pi", "Arduino", "Crafty Amigo", "LDR", "DHT22"],
      status: "Active",
      tags: ["Greenhouse", "Automation", "Homestead", "Sensors"],
    },
    {
      name: "diy-kiln-designs",
      href: "https://github.com/ginesthoii/diy-kiln-designs",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/kiln.png?raw=1",
      description:
        "Resources and plans for DIY pottery and ceramic kilns, ranging from primitive and raku designs to electric, wood-fired, and gas-fired builds.",
      tech: ["OpenSCAD", "CAD", "Crafty Amigo", "Markdown"],
      status: "Active",
      tags: ["Kiln", "DIY", "Ceramics", "Design"],
    },
    {
      name: "dog-food-dispenser",
      href: "https://github.com/ginesthoii/dog-food-dispenser",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/rotary-drum-dog-dispenser.png?raw=1",
      description:
        "Simple, reliable dog food rotary drum dispenser build with measured portions, low-jam design, and easy refill/clean access.",
      tech: ["Crafty Amigo", "Mechanical Build", "Portioning Design"],
      status: "Active",
      tags: ["DIY", "Pets", "Mechanical", "Build Plans"],
    },
    {
      name: "iot-pet-food-dispenser",
      href: "https://github.com/ginesthoii/iot-pet-food-dispenser",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/iot-pet-food-dispenser.png?raw=1",
      description:
        "IoT pet feeder with scheduled dispensing, manual override, and logging for consistent fail-safe feeding.",
      tech: ["ESP32", "Raspberry Pi", "Motor Control", "Scheduling"],
      status: "Active",
      tags: ["IoT", "Pets", "ESP32", "Automation"],
    },
    {
      name: "hutch-designs",
      href: "https://github.com/ginesthoii/hutch-designs",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/hutch.png?raw=1",
      description:
        "Modular rabbit hutch designs with clean access, weather protection, and scalable layouts for humane, low-maintenance care.",
      tech: ["CAD Plans", "Cut Lists", "Hardware Layouts"],
      status: "Active",
      tags: ["DIY", "Animals", "Design", "Plans"],
    },
    {
      name: "coop-enclosure-designs",
      href: "https://github.com/ginesthoii/coop-enclosure-designs",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/chicken-coops.png?raw=1",
      description:
        "Coop + run enclosure designs focused on predator-proofing, airflow, and easy cleaning — from backyard builds to larger setups.",
      tech: ["CAD Plans", "Structural Design", "Hardware Layouts"],
      status: "Active",
      tags: ["DIY", "Chickens", "Design", "Homestead"],
    },
    {
      name: "rolling-coop-sifter",
      href: "https://github.com/ginesthoii/rolling-coop-sifter",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/rolling-coop-sifter.png?raw=1",
      description:
        "Automated coop-cleaning sifter on rails with a winch drive and timed IoT control to separate manure from sand/bedding hands-free.",
      tech: ["ESP32", "Motor Control", "IoT Timers", "Automation"],
      status: "Active",
      tags: ["Automation", "Homestead", "ESP32", "Cleaning"],
    },
    {
      name: "diy-incubator",
      href: "https://github.com/ginesthoii/diy-incubator",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/diy-incubator.png?raw=1",
      description:
        "Modular egg incubator build system from small countertop units to 100+ egg rack setups with stable heat/humidity control.",
      tech: ["ESP32/Raspberry Pi", "Sensors", "Control Loops", "Automation"],
      status: "Active",
      tags: ["Incubator", "Automation", "Homestead", "Sensors"],
    },
    {
      name: "incubator-actuator",
      href: "https://github.com/ginesthoii/incubator-actuator",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/incubator-actuator.png?raw=1",
      description:
        "Motorized egg-turning actuator (roller + divider grid) designed for gentle, consistent turning and scalable trays from small batches to rack systems.",
      tech: ["Motor Drive", "Timing Control", "Mechanical Design", "3D Parts"],
      status: "Active",
      tags: ["Incubator", "Mechanical", "Automation", "Design"],
    },
    {
      name: "diy-brooder",
      href: "https://github.com/ginesthoii/diy-brooder",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/diy-brooder.png?raw=1",
      description:
        "Safe practical chick brooder build with controlled heat, airflow, and easy-clean design optimized for repeatable setups.",
      tech: ["Heat Control", "Ventilation", "Safety Design", "Sensors (Optional)"],
      status: "Active",
      tags: ["Brooder", "Chicks", "DIY", "Safety"],
    },
  ],
},

{
  id: "ops-asset-management",
  title: "Operational Tools & Asset Management",
  subtitle: "Inventory systems, equipment tracking, and planning tools for long-term operations",
  items: [
    {
      name: "tool-equipment-tracker",
      href: "https://github.com/ginesthoii/tool-equipment-tracker",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/tool.png?raw=1",
      description:
        "Tool and equipment tracking system for inventory, maintenance, and usage management. Desktop app for cataloging tools and materials with metadata scraping, image previews, offline caching, structured categories, and optional syncing to Google Sheets.",
      tech: ["Python", "SQLite", "Google Sheets", "App Scripts", "Google Workspace"],
      status: "Active",
      tags: ["Inventory", "Operations", "Offline", "Tracking"],
    },
    {
      name: "seed-ledger",
      href: "https://github.com/ginesthoii/seed-ledger",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/seed-ledger.png?raw=1",
      description:
        "Structured seed inventory and viability tracking system to prevent duplicate purchases, manage aging stock, and support long-term garden planning and seasonal planting decisions.",
      tech: [
        "Google Sheets",
        "Excel",
        "Structured Data Modeling",
        "Python",
        "SQLite",
        "CSV Import/Export",
        "Inventory State Modeling",
        "Rule-Based Scheduling",
        "USDA Zone Data",
        "Frost-Date Tables",
        "Cached Weather Datasets",
      ],
      status: "Active",
      tags: ["Gardening", "Inventory", "Planning", "Local-first"],
    },
  ],
},

{
  id: "games-interactive-systems",
  title: "Games & Interactive Systems",
  subtitle: "Teaching-first game systems, toolchains, and interactive prototypes",
  items: [
    {
      name: "CheckMate",
      href: "https://github.com/ginesthoii/CheckMate",
      image: "https://github.com/user-attachments/assets/905ead19-3392-4fe8-bbb6-8904cef3ae3b",
      description:
        "Teaching-first chess coach powered by Stockfish. Play against the engine or watch AI self-play duels with overlays explaining mistakes, tactics, and best-move plans in real time.",
      tech: ["Python", "Pygame", "Stockfish", "python-chess"],
      status: "Active",
      tags: ["Games", "Teaching", "Chess", "AI"],
    },
    {
      name: "CutCoach",
      href: "https://github.com/ginesthoii/CutCoach",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/cut-coach.png?raw=1",
      description:
        "Augmented-reality app that teaches DIY haircuts in real time using structured steps for sectioning, cut planes, calibration, and mirrored UI modes.",
      tech: ["Unity", "C#", "AR Foundation", "ARKit", "ARCore"],
      status: "Active",
      tags: ["AR", "Teaching", "Mobile", "Computer Vision"],
    },
    {
      name: "OlivisionWorks",
      href: "https://github.com/ginesthoii/OlivisionWorks",
      image: "https://github.com/user-attachments/assets/1a73e9c5-bc52-47b0-ad8a-3a5c2187b064",
      description:
        "Tooling workshop for sprite, animation, and visual asset workflows. Editors and utilities for sprite slicing, palette work, and animation assets.",
      tech: ["Python", "Tkinter", "Pillow", "PyGame"],
      status: "Active",
      tags: ["Tools", "Game Dev", "Art", "Assets"],
    },
    {
      name: "PixelPortfolio",
      href: "https://github.com/ginesthoii/PixelPortfolio",
      image: "https://github.com/user-attachments/assets/b0a0fe50-8934-40a1-a102-f3171b689ba8",
      description:
        "Retro-inspired interactive gallery of bite-sized games and mechanics experiments showcasing arcade demos, puzzle loops, and sprite-driven feedback.",
      tech: ["Python", "Pygame", "JavaScript", "HTML", "CSS", "C#"],
      status: "Active",
      tags: ["Games", "Portfolio", "Retro", "Experiments"],
    },
    {
      name: "hook-and-ring",
      href: "https://github.com/ginesthoii/hook-and-ring",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/hook-and-ring.png?raw=1",
      description:
        "Hybrid build: browser physics mini-game plus an Arduino scorer for a real hook & ring setup.",
      tech: ["JavaScript", "HTML", "CSS", "Arduino (C++)", "OpenSCAD"],
      status: "Active",
      tags: ["Games", "Hardware", "Arduino", "Physics"],
    },
    {
      name: "unity-csharp-games",
      href: "https://github.com/ginesthoii/unity-csharp-games",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/csharpunity.jpg?raw=1",
      description:
        "Unity gameplay experiments exploring C# systems, component patterns, and engine-level mechanics.",
      tech: ["Unity", "C#", "Gameplay Systems", "Component Patterns"],
      status: "Active",
      tags: ["Game Dev", "Unity", "C#", "Prototypes"],
    },
    {
      name: "thats-what-im-tolkien-about",
      href: "https://github.com/ginesthoii/thats-what-im-tolkien-about",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/thatwhattolkienabout.png?raw=1",
      description:
        "Retro-arcade mini-games inspired by Tolkien’s legendarium: platforming, maze chase, logic puzzles, and more.",
      tech: ["Python", "2D Game Loops", "State Machines", "Arcade Logic"],
      status: "Active",
      tags: ["Games", "Tolkien", "Retro", "Arcade"],
    },
    {
      name: "2D-character-creator",
      href: "https://github.com/ginesthoii/2D-character-creator",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/character-creator.gif?raw=1",
      description:
        "Visual + biographical character builder for complete characters (appearance, outfits, background, identity) designed to pair with CyberPersona so characters stay coherent in look and behavior.",
      tech: ["Python"],
      status: "Active",
      tags: ["Writing", "Characters", "Tools", "Worldbuilding"],
    },
    {
      name: "CyberPersona",
      href: "https://github.com/ginesthoii/CyberPersona",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/cyber-persona.gif?raw=1",
      description:
        "Personality + psychology engine for character logic (MBTI, Enneagram, attachment, values, stress behavior) to govern decisions and voice for writing and worldbuilding.",
      tech: ["Python", "YAML", "Taxonomy Design"],
      status: "Active",
      tags: ["Psychology", "Writing", "Worldbuilding", "Generators"],
    },
  ],
}
{
  id: "nutrition-fitness-health",
  title: "Nutrition, Fitness & Health Systems",
  subtitle: "Offline-first trackers for training, nutrition, symptoms, supplements, and habit automation",
  items: [
    {
      name: "StretchStud-io",
      href: "https://github.com/ginesthoii/StretchStud-io",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/stretchstud-io.jpg?raw=1",
      description: "Yoga + stretching routines + dashboards.",
      tech: ["Python", "Google Sheets", "Dashboards"],
      status: "Active",
      tags: ["Fitness", "Mobility", "Routines", "Tracking"],
    },
    {
      name: "TheHungerGains",
      href: "https://github.com/ginesthoii/TheHungerGains",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/hunger-gains.png?raw=1",
      description: "Minimalist intermittent fasting tracker.",
      tech: ["Python", "AppSheet", "Google Apps Script"],
      status: "Active",
      tags: ["Nutrition", "Fasting", "Tracking", "Lightweight"],
    },
    {
      name: "StrokeOfGenius",
      href: "https://github.com/ginesthoii/StrokeOfGenius",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/stroke-of-genius.png?raw=1",
      description: "Swimming logbook + analyzer.",
      tech: ["Python", "Pandas", "Dashboards"],
      status: "Active",
      tags: ["Fitness", "Swimming", "Analytics", "Tracking"],
    },
    {
      name: "SweatScript",
      href: "https://github.com/ginesthoii/SweatScript",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/sweat-scripts.png?raw=1",
      description: "CLI workout tracker with dashboards.",
      tech: ["Python", "Bash", "Google Sheets"],
      status: "Active",
      tags: ["Fitness", "Workouts", "CLI", "Dashboards"],
    },
    {
      name: "protein-plus",
      href: "https://github.com/ginesthoii/protein-plus",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/protein-plus.png?raw=1",
      description:
        "Protein-first nutrition tracker (calories + macros) with fast food search, barcode scanning, and a robust food database.",
      tech: ["Google Sheets", "Apps Script", "SQLite3"],
      status: "Active",
      tags: ["Nutrition", "Macros", "Tracking", "Database"],
    },
    {
      name: "food-for-thought",
      href: "https://github.com/ginesthoii/food-for-thought",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/food-for-thought.jpg?raw=1",
      description:
        "Offline food + symptom tracker based on the FODMAP system to identify tolerable foods and recipes.",
      tech: ["Python", "PyQt6", "Google Sheets", "SQLite"],
      status: "Active",
      tags: ["Nutrition", "FODMAP", "Symptoms", "Offline"],
    },
    {
      name: "sourdough-starter",
      href: "https://github.com/ginesthoii/sourdough-starter",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/sourdough.png?raw=1",
      description:
        "Offline sourdough starter manager with diagnostics, calculations, stability tracking, and corrective ratio logic.",
      tech: ["Python", "PyQt6", "SQLite"],
      status: "Active",
      tags: ["Food", "Baking", "Tracking", "Offline"],
    },
    {
      name: "CulinaryCodex",
      href: "https://github.com/ginesthoii/CulinaryCodex",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/culinarycodex.png?raw=1",
      description:
        "Ancient + modern food research codex exploring food history and cultural context.",
      tech: ["Python", "JavaScript", "HTML", "CSS", "Flask", "SQLite"],
      status: "Active",
      tags: ["Food History", "Research", "Knowledge Base", "Offline-first"],
    },
    {
      name: "PillPal-VitaPro",
      href: "https://github.com/ginesthoii/PillPal-VitaPro",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/pillpal.png?raw=1",
      description: "Supplement + prescription interaction checker.",
      tech: ["Python", "Vite", "AppSec Sandbox"],
      status: "Active",
      tags: ["Health", "Supplements", "Safety", "Checker"],
    },
    {
      name: "HabitHelpers",
      href: "https://github.com/ginesthoii/HabitHelpers",
      image:
        "https://github.com/user-attachments/assets/af64bd67-a436-4b4c-b443-7c624f036c30",
      description: "Modular habit suite with API + automation.",
      tech: ["React", "Python", "Docker", "GitHub API"],
      status: "Active",
      tags: ["Habits", "Automation", "API", "Modular"],
    },
  ],
}

{
  id: "animal-care-livestock-biosecurity",
  title: "Animal Care, Livestock & Biosecurity Systems",
  subtitle: "Automation, monitoring, analytics, and safety systems for small livestock operations",
  items: [
    {
      name: "automated-chicken-coop",
      href: "https://github.com/ginesthoii/automated-chicken-coop",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/automated-chicken-coop.png?raw=1",
      description: "ESP32-powered poultry coop automation system.",
      tech: ["ESP32", "C"],
      status: "Active",
      tags: ["Chickens", "Automation", "Embedded", "IoT"],
    },
    {
      name: "chicken-auto-waterer",
      href: "https://github.com/ginesthoii/chicken-auto-waterer",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/chicken-auto-waterer.png?raw=1",
      description: "Automated poultry watering system.",
      tech: ["Embedded Systems"],
      status: "Active",
      tags: ["Chickens", "Water", "Automation", "Reliability"],
    },
    {
      name: "incubator",
      href: "https://github.com/ginesthoii/incubator",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/incubator2.png?raw=1",
      description: "Temperature, light, and humidity controlled incubator system.",
      tech: ["ESP32", "C++"],
      status: "Active",
      tags: ["Incubation", "Sensors", "Embedded", "Control"],
    },
    {
      name: "hen-manager",
      href: "https://github.com/ginesthoii/hen-manager",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/hen-manager.png?raw=1",
      description: "Poultry analytics for egg production, molt cycles, and breeding.",
      tech: ["Python"],
      status: "Active",
      tags: ["Chickens", "Analytics", "Breeding", "Tracking"],
    },
    {
      name: "livestock-log",
      href: "https://github.com/ginesthoii/livestock-log",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/livestock-log.png?raw=1",
      description: "Comprehensive livestock management and analytics system.",
      tech: ["Python", "PyQt6", "SQLite"],
      status: "Active",
      tags: ["Livestock", "Management", "Offline", "Analytics"],
    },
    {
      name: "livestock-locator",
      href: "https://github.com/ginesthoii/livestock-locator",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/livestock-locator.jpg?raw=1",
      description: "Livestock location, sensors, and identification utilities.",
      tech: ["Python", "Raspberry Pi"],
      status: "Active",
      tags: ["Livestock", "Sensors", "Identification", "Tracking"],
    },
    {
      name: "guardian",
      href: "https://github.com/ginesthoii/guardian",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/guardian.png?raw=1",
      description:
        "ESP32 environmental safety monitor with alarms, logging, WiFi alerts, and LTE SMS backup.",
      tech: ["ESP32", "C++", "Sensors"],
      status: "Active",
      tags: ["Safety", "Monitoring", "Alerts", "Embedded"],
    },
    {
      name: "dog-logs",
      href: "https://github.com/ginesthoii/dog-logs",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/dog-logs.gif?raw=1",
      description: "Canine health and activity tracking system.",
      tech: ["Python", "PyQt6", "Google Sheets", "Apps Script", "SQLite"],
      status: "Active",
      tags: ["Dogs", "Health", "Tracking", "Offline-first"],
    },
  ],
}

{
  id: "environment-agriculture-infrastructure",
  title: "Environmental Monitoring, Agriculture & Infrastructure Systems",
  subtitle:
    "Sensor networks, offline decision systems, irrigation automation, and scalable water/power planning",
  items: [
    {
      name: "weather-oracle",
      href: "https://github.com/ginesthoii/weather-oracle",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/weather-oracle.gif?raw=1",
      description:
        "Fully offline weather monitoring + forecasting using an ESP32 station, Raspberry Pi collector, SQLite climate database, and hybrid ML + trend-based forecasting.",
      tech: ["ESP32", "Raspberry Pi", "SQLite", "Python", "ML"],
      status: "Active",
      tags: ["Weather", "Offline", "Sensors", "Forecasting"],
    },
    {
      name: "green-machine",
      href: "https://github.com/ginesthoii/green-machine",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/green-machine.jpg?raw=1",
      description:
        "Offline-first horticulture decision system modeling plant lifecycle states and applying zone/season/soil rules with explainable guidance and optional sensor inputs.",
      tech: [
        "Python",
        "PyQt6",
        "SQLite",
        "USDA Zone Data",
        "Markdown/YAML Manuals",
        "Optional ESP32 Sensors",
      ],
      status: "Active",
      tags: ["Gardening", "Decision System", "Offline", "Knowledge Base"],
    },
    {
      name: "soil-guard",
      href: "https://github.com/ginesthoii/soil-guard",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/soil-guard.jpg?raw=1",
      description:
        "Closed-loop plant monitoring + sensor-driven irrigation with adaptive thresholds and fail-safes to prevent over/under-watering.",
      tech: ["ESP32"],
      status: "Active",
      tags: ["Irrigation", "Sensors", "Automation", "Plants"],
    },
    {
      name: "auto-drip-irrigation",
      href: "https://github.com/ginesthoii/auto-drip-irrigation",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/auto-drip-irrigation.png?raw=1",
      description: "Sensor-driven irrigation automation.",
      tech: ["Python", "Raspberry Pi", "ESP32", "C++"],
      status: "Active",
      tags: ["Irrigation", "Automation", "Sensors", "Hydro"],
    },
    {
      name: "automated-olives",
      href: "https://github.com/ginesthoii/automated-olives",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/automated-olives.png?raw=1",
      description: "ESP32 irrigation + monitoring system for indoor olive trees.",
      tech: ["ESP32", "C++"],
      status: "Active",
      tags: ["Irrigation", "Indoor Growing", "Sensors", "ESP32"],
    },
    {
      name: "simple-plant-sensor",
      href: "https://github.com/ginesthoii/simple-plant-sensor",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/simple-sensor.png?raw=1",
      description:
        "Simple Arduino plant sensor system tracking soil moisture and light/temp, sending signals to a dashboard. Optional ESP32 upgrade.",
      tech: ["Python", "Arduino", "ESP32", "C++"],
      status: "Active",
      tags: ["Sensors", "Plants", "Arduino", "Dashboards"],
    },
    {
      name: "hydro-systems-lab",
      href: "https://github.com/ginesthoii/hydro-systems-lab",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/hydro-systems-lab.png?raw=1",
      description:
        "Water infrastructure planning + automation lab covering pump logic, flow/pressure patterns, sensors, and control modules for real-world hydro systems.",
      tech: ["Python", "Raspberry Pi", "ESP32"],
      status: "Active",
      tags: ["Water", "Infrastructure", "Automation", "Planning"],
    },
    {
      name: "cistern-water-sensors",
      href: "https://github.com/ginesthoii/cistern-water-sensors",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/cistern-water-sensor.png?raw=1",
      description:
        "Sensor setups for monitoring cistern levels with logging, alerts, and shutoff logic patterns.",
      tech: ["ESP32"],
      status: "Active",
      tags: ["Water", "Sensors", "Safety", "Monitoring"],
    },
    {
      name: "the-waterworks",
      href: "https://github.com/ginesthoii/the-waterworks",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/water3.gif?raw=1",
      description:
        "Guide to designing scalable modular waterwheel systems for residential/remote power generation, including scripts for power calculations and flow simulation.",
      tech: ["Python", "ESP32", "C++"],
      status: "Active",
      tags: ["Water Power", "Renewables", "Simulation", "Infrastructure"],
    },
  ],
}

{
  id: "hive-hq",
  title: "Hive HQ",
  subtitle: "Central operations hub + offline-first systems layer for the mini-farm",
  items: [
    {
      name: "the-hive",
      href: "https://github.com/ginesthoii/the-hive",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/the-hive.png?raw=1",
      description:
        "All-in-one operations building for the mini-farm: processing/preservation, storage, sanitation, office/admin, grow rooms, incubation/brooders, and connected animal care including sick-care.",
      tech: ["Markdown", "Diagrams", "SOPs", "Layout Specs"],
      status: "Active",
      tags: ["Operations", "Facilities", "SOPs", "Infrastructure"],
    },
    {
      name: "hive-os",
      href: "https://github.com/ginesthoii/hive-os",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/hive-os.png?raw=1",
      description:
        "Operations software for the Hive: dashboards, schedules, logs, alerts, and workflows across processing, storage, sanitation, grow rooms, incubation, infrastructure, security, and sensor monitoring.",
      tech: ["Python", "PyQt6", "SQLite", "Raspberry Pi", "ESP32"],
      status: "Active",
      tags: ["Operations OS", "Offline-first", "Dashboards", "Automation"],
    },
  ],
}

{
  id: "diy-animal-feed",
  title: "DIY Animal Feed",
  subtitle: "Low-cost protein and greens systems for poultry and small livestock",
  items: [
    {
      name: "bsfl-protein-system",
      href: "https://github.com/ginesthoii/bsfl-protein-system",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/bsfl.png?raw=1",
      description:
        "Black Soldier Fly Larvae system converting food waste into high-protein feed for poultry and waterfowl.",
      tech: ["Bins", "Drainage", "Heat", "Lifecycle Control", "Optional Automation"],
      status: "Active",
      tags: ["Protein", "Poultry Feed", "Composting", "Closed Loop"],
    },
    {
      name: "mealworm-grow-system",
      href: "https://github.com/ginesthoii/mealworm-grow-system",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/mealworm.png?raw=1",
      description:
        "Indoor mealworm grow system for low-odor protein feed, useful for winter and controlled supplementation.",
      tech: ["Trays", "Climate Control", "Lifecycle Tracking", "Optional Automation"],
      status: "Active",
      tags: ["Protein", "Indoor", "Feed", "Winter"],
    },
    {
      name: "vermiculture-compost-integration",
      href: "https://github.com/ginesthoii/vermiculture-compost-integration",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/compost.jpg?raw=1",
      description:
        "Vermiculture system converting organic waste into soil inputs, with excess worms usable as occasional live feed.",
      tech: ["Bins", "Moisture Balance", "Compost Loops", "Optional Automation"],
      status: "Active",
      tags: ["Compost", "Soil", "Closed Loop", "Waste Reduction"],
    },
    {
      name: "fodder-system",
      href: "https://github.com/ginesthoii/fodder-system",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/fodder1.png?raw=1",
      description:
        "Sprouted fodder tray system with watering schedules, mold prevention, yields, and storage patterns.",
      tech: [
        "Trays/Racks",
        "ESP32",
        "Temp/Humidity Sensors",
        "Timed Watering",
        "Drainage",
        "Airflow/Fan Control",
        "Yield Tracking",
      ],
      status: "Active",
      tags: ["Fodder", "Greens", "Automation", "Feed"],
    },
  ],
}

{
  id: "grow-systems",
  title: "Grow Systems",
  subtitle: "Hydroponics, aquaponics, pond filtration, indoor starts, and modular structures",
  items: [
    {
      name: "aquaponics",
      href: "https://github.com/ginesthoii/aquaponics",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/aquaponics.jpg?raw=1",
      description:
        "Aquaponics builds + system design docs covering fish tanks, grow beds, plumbing loops, and routines.",
      tech: ["Markdown", "Diagrams", "Sensors (Optional)"],
      status: "Active",
      tags: ["Aquaponics", "Water Systems", "Growing", "Design Docs"],
    },
    {
      name: "hydroponics",
      href: "https://github.com/ginesthoii/hydroponics",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/hydroponics.jpg?raw=1",
      description:
        "Hydroponics designs + grow methods including DWC, NFT, Kratky, nutrients, and monitoring basics.",
      tech: ["Markdown", "Diagrams", "Sensors (Optional)"],
      status: "Active",
      tags: ["Hydroponics", "Growing", "Nutrients", "Design Docs"],
    },
    {
      name: "bog-filter",
      href: "https://github.com/ginesthoii/bog-filter",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/bog-filter.png?raw=1",
      description:
        "Bog filter builds for ponds covering media layers, flow math, pump sizing, and clarity strategy.",
      tech: ["Markdown", "Diagrams", "Pump/Flow Notes"],
      status: "Active",
      tags: ["Ponds", "Filtration", "Water", "Design"],
    },
    {
      name: "seedling-starter",
      href: "https://github.com/ginesthoii/seedling-starter",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/seedling-starter.jpg?raw=1",
      description:
        "Indoor seedling starter workflow with shelf setup, lighting plan, watering/soil routines, sensor monitoring, transplant tracking, schedules, alerts, and reminders.",
      tech: [
        "Trays/Racks",
        "ESP32",
        "Temp/Humidity Sensors",
        "Timed Watering",
        "Yield Tracking",
        "Markdown Docs",
        "CAD Diagrams",
      ],
      status: "Active",
      tags: ["Seed Starting", "Indoor Growing", "Automation", "Scheduling"],
    },
    {
      name: "geodesic-dome-designs",
      href: "https://github.com/ginesthoii/geodesic-dome-designs",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/dome1.gif?raw=1",
      description:
        "Geodesic dome plans + calculators to generate strut cut lists, estimate materials/cover area, and build DIY greenhouse/shelter domes from documented designs.",
      tech: ["Python (Calculator + Exports)", "CAD/SVG Diagrams", "Markdown Docs", "JSON Templates"],
      status: "Active",
      tags: ["Structures", "DIY", "Greenhouse", "Planning"],
    },
  ],
}

{
  id: "creative-worldbuilding",
  title: "Creative & Worldbuilding",
  subtitle: "Myth systems, compendiums, and structured narrative datasets",
  items: [
    {
      name: "MythicalMenagerie",
      href: "https://github.com/ginesthoii/MythicalMenagerie",
      image: "https://github.com/user-attachments/assets/f20d13dd-7c84-4388-8c51-bfba42ebdaf3",
      description:
        "Digital bestiary for global myth creatures with search, learning, comparisons, maps, and an interactive mash-up generator.",
      tech: ["JavaScript", "JSON", "HTML", "CSS"],
      status: "Active",
      tags: ["Mythology", "Bestiary", "Generator", "Worldbuilding"],
    },
    {
      name: "compiled-bestiary",
      href: "https://github.com/ginesthoii/compiled-bestiary",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/bestiary.jpg?raw=1",
      description:
        "Structured searchable compiled bestiary dataset normalized into a consistent schema with tags, habitats, behaviors, exports, and contextual analysis.",
      tech: ["Python", "PyQt6", "SQLite", "CSV/XLSX"],
      status: "Active",
      tags: ["Dataset", "Bestiary", "Research", "Field Guide"],
    },
  ],
}

{
  id: "spreadsheets",
  title: "Spreadsheets",
  subtitle: "Operational templates for planning, tracking, reporting, and spreadsheet security",
  items: [
    {
      name: "project-management-ops-sheets",
      href: "https://github.com/ginesthoii/project-management-ops-sheets",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/project-management-spreadsheet.jpg?raw=1",
      description:
        "Lightweight project planning templates for tracking tasks, milestones, dependencies, Kanban boards, and simple Gantt views.",
      tech: [
        "Google Sheets",
        "Excel (XLSX)",
        "Apps Script",
        "AppSheet",
        "Zapier/Make",
        "JavaScript",
        "Google Drive",
        "Optional Google Cloud",
      ],
      status: "Active",
      tags: ["Project Management", "Templates", "Ops", "Planning"],
    },
    {
      name: "inventory-ops-sheets",
      href: "https://github.com/ginesthoii/inventory-ops-sheets",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/inventory-spreadsheet.png?raw=1",
      description:
        "Operational inventory systems for tracking stock, supplies, assets, and consumables with reorder thresholds, spoilage, and seasonal usage.",
      tech: [
        "Google Sheets",
        "Excel (XLSX)",
        "Apps Script",
        "AppSheet",
        "Zapier/Make",
        "JavaScript",
        "Google Drive",
        "Optional Google Cloud",
      ],
      status: "Active",
      tags: ["Inventory", "Operations", "Tracking", "Systems"],
    },
    {
      name: "life-tracking-ops-sheet",
      href: "https://github.com/ginesthoii/life-tracking-ops-sheet",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/life-tracking-spreadsheet.gif?raw=1",
      description:
        "Flexible life-ops templates for habits, health, routines, goals, meals, workouts, and personal planning (offline-ish or automated).",
      tech: [
        "Google Sheets",
        "Excel (XLSX)",
        "Apps Script",
        "AppSheet",
        "Zapier/Make",
        "JavaScript",
        "Google Drive",
        "Optional Google Cloud",
      ],
      status: "Active",
      tags: ["Life Ops", "Habits", "Health", "Planning"],
    },
    {
      name: "time-management-ops-sheets",
      href: "https://github.com/ginesthoii/time-management-ops-sheets",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/time-management-sheet.png?raw=1",
      description:
        "Time planning templates for weekly planning, time blocking, timeline views, and capacity tracking (simple or automated).",
      tech: [
        "Google Sheets",
        "Excel (XLSX)",
        "Apps Script",
        "Google Calendar Integrations",
        "Zapier/Make",
        "JavaScript",
        "Optional AppSheet",
        "Optional Google Cloud",
      ],
      status: "Active",
      tags: ["Time", "Planning", "Capacity", "Scheduling"],
    },
    {
      name: "finance-ops-sheets",
      href: "https://github.com/ginesthoii/finance-ops-sheets",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/finance-ops-sheets.jpg?raw=1",
      description:
        "Personal + operational finance tracking systems for budgeting, cash flow, forecasting, and reporting (standalone or automated).",
      tech: [
        "Google Sheets",
        "Excel (XLSX)",
        "Apps Script",
        "Zapier/Make",
        "JavaScript",
        "Optional AppSheet",
        "Google Drive",
        "Optional Google Cloud",
      ],
      status: "Active",
      tags: ["Finance", "Budgeting", "Forecasting", "Ops"],
    },
    {
      name: "sales-ops-sheets",
      href: "https://github.com/ginesthoii/sales-ops-sheets",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/sales-ops-sheet.gif?raw=1",
      description:
        "Sales tracking + lightweight CRM templates for leads, customers, follow-ups, invoices, and revenue.",
      tech: [
        "Google Sheets",
        "Excel (XLSX)",
        "Apps Script",
        "AppSheet",
        "Zapier/Make",
        "JavaScript",
        "Email/Calendar Integrations",
        "Optional Google Cloud",
      ],
      status: "Active",
      tags: ["Sales", "CRM", "Tracking", "Templates"],
    },
    {
      name: "small-business-sheets",
      href: "https://github.com/ginesthoii/small-business-sheets",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/small-business-sheet.gif?raw=1",
      description:
        "Small business templates adapting core ops sheets for pricing, basic bookkeeping patterns, fulfillment, and repeatable operations.",
      tech: [
        "Google Sheets",
        "Excel (XLSX)",
        "Apps Script",
        "AppSheet",
        "Zapier/Make",
        "JavaScript",
        "Optional Google Cloud",
        "Documentation/Templates",
      ],
      status: "Active",
      tags: ["Small Business", "Ops", "Templates", "Systems"],
    },
    {
      name: "dashboard-ops-sheets",
      href: "https://github.com/ginesthoii/dashboard-ops-sheets",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/dashboards-spreadsheet.gif?raw=1",
      description:
        "Cross-system dashboards summarizing multiple ops sheets into a single operational view focused on decisions.",
      tech: [
        "Google Sheets",
        "Excel (XLSX)",
        "Connected Ranges/Query Pulls",
        "Apps Script",
        "Optional Looker Studio",
        "Zapier/Make",
        "JavaScript",
        "Optional Google Cloud",
      ],
      status: "Active",
      tags: ["Dashboards", "Reporting", "Ops", "Visibility"],
    },
    {
      name: "sheets-logic-library",
      href: "https://github.com/ginesthoii/sheets-logic-library",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/sheet-logic-library.jpg?raw=1",
      description:
        "Practical spreadsheet logic reference: formulas, functions, patterns, and decision rules for Sheets + Excel (and when to use Apps Script).",
      tech: [
        "Google Sheets",
        "Excel",
        "QUERY",
        "ARRAYFORMULA",
        "XLOOKUP",
        "LAMBDA",
        "Apps Script",
        "Logic Patterns",
      ],
      status: "Active",
      tags: ["Reference", "Formulas", "Patterns", "Automation"],
    },
    {
      name: "secure-sheets",
      href: "https://github.com/ginesthoii/secure-sheets",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/secure-sheets.webp?raw=1",
      description:
        "AppSec + OpSec patterns for spreadsheet security: permissions, protected ranges, Apps Script hardening, threat models, and safe integrations.",
      tech: [
        "Google Sheets",
        "Excel (XLSX)",
        "Google Apps Script (JavaScript)",
        "AES-128/256 Encryption",
        "Protected Ranges",
        "LockService",
        "Version History/Audit Logs",
        "AppSheet",
        "Zapier",
        "Webhooks/APIs",
      ],
      status: "Active",
      tags: ["Security", "AppSec", "OpSec", "Hardening"],
    },
  ],
}

{
  id: "language-foundations-experiments",
  title: "Language Foundations & Experiments",
  subtitle: "Archived language practice repos for core syntax, structure, and systems fundamentals",
  items: [
    {
      name: "php-projects",
      href: "https://github.com/ginesthoii/php-projects",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/php.png?raw=1",
      description:
        "Archived language experiments exploring core PHP syntax, control flow, and application structure.",
      tech: ["PHP"],
      status: "Archived",
      tags: ["Language Practice", "Archived", "PHP", "Fundamentals"],
    },
    {
      name: "java-projects",
      href: "https://github.com/ginesthoii/java-projects",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/java.jpg?raw=1",
      description:
        "Archived Java exercises focused on object-oriented design, type systems, and basic application patterns.",
      tech: ["Java"],
      status: "Archived",
      tags: ["Language Practice", "Archived", "Java", "OOP"],
    },
    {
      name: "c-cpp-csharp-projects",
      href: "https://github.com/ginesthoii/c-cpp-csharp-projects",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/c.webp?raw=1",
      description:
        "Archived systems-language practice covering memory management, compilation models, and low-level program structure.",
      tech: ["C", "C++", "C#"],
      status: "Archived",
      tags: ["Language Practice", "Archived", "Systems", "Low-level"],
    },
  ],
}
{
  id: "mini-projects",
  title: "Mini Projects",
  subtitle:
    "Small, self-contained front-end apps + terminal Python scripts for rapid practice and shipping tiny tools fast",
  items: [
    {
      name: "Mini JavaScript • HTML • CSS",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/js-html-css.png?raw=1",
      description:
        "Self-contained front-end apps that run directly in the browser via index.html.",
      tech: ["JavaScript", "HTML", "CSS", "Web APIs", "localStorage"],
      status: "Active",
      tags: ["Mini Projects", "Frontend", "Browser Apps", "Practice"],
    },
    {
      name: "TextToSpeech",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/text-to-speech.png?raw=1",
      description:
        "Convert text to speech with pitch, speed, volume, and voice controls (Web Speech API).",
      tech: ["JavaScript", "Web Speech API", "HTML", "CSS"],
      status: "Active",
      tags: ["Accessibility", "Audio", "Web API", "Tool"],
    },
    {
      name: "Pomodoro Timer",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/js-html-css.png?raw=1",
      description:
        "25-minute Pomodoro timer with progress ring, notes, and CSV export.",
      tech: ["JavaScript", "HTML", "CSS", "localStorage"],
      status: "Active",
      tags: ["Productivity", "Timer", "UI", "Export"],
    },
    {
      name: "Basic Calculator",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/js-html-css.png?raw=1",
      description:
        "Four-function calculator (optional history via localStorage).",
      tech: ["JavaScript", "HTML", "CSS"],
      status: "Active",
      tags: ["UI", "Logic", "Beginner", "Practice"],
    },
    {
      name: "Hex Color Generator",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/hex-colors.jpg?raw=1",
      description: "Pick a color and get its hex instantly.",
      tech: ["JavaScript", "HTML", "CSS"],
      status: "Active",
      tags: ["Colors", "UI", "Utility", "Frontend"],
    },
    {
      name: "Image Color Hex Extractor",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/js-html-css.png?raw=1",
      description:
        "Extract dominant colors from an uploaded image (k-means clustering).",
      tech: ["JavaScript", "HTML", "CSS", "K-means"],
      status: "Active",
      tags: ["Colors", "Image Processing", "Utility", "Algorithms"],
    },
    {
      name: "PlayablePiano",
      href: "",
      image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/piano.png?raw=1",
      description:
        "Browser piano with recording/playback, metronome, and pitch detection.",
      tech: ["JavaScript", "HTML", "CSS", "Web Audio"],
      status: "Active",
      tags: ["Music", "Audio", "Interactive", "Web App"],
    },
    {
      name: "Typing Speed Test Game",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/js-html-css.png?raw=1",
      description:
        "Typing test with WPM/CPM, accuracy, mistakes, and dark mode.",
      tech: ["JavaScript", "HTML", "CSS"],
      status: "Active",
      tags: ["Game", "Typing", "Metrics", "UI"],
    },
    {
      name: "Dog Clicker Trainer",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/js-html-css.png?raw=1",
      description: "Digital dog training clicker with sound + session stats.",
      tech: ["JavaScript", "HTML", "CSS", "Audio"],
      status: "Active",
      tags: ["Dogs", "Training", "Audio", "Utility"],
    },
    {
      name: "basic-post-it-notes",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/js-html-css.png?raw=1",
      description:
        "Sticky-notes app: create/edit/delete notes in-browser with persistence.",
      tech: ["JavaScript", "HTML", "CSS", "localStorage"],
      status: "Active",
      tags: ["Notes", "Persistence", "UI", "Productivity"],
    },
    {
      name: "dog age calculator",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/js-html-css.png?raw=1",
      description: "Estimate a dog’s “human age” adjusted by dog size.",
      tech: ["JavaScript", "HTML", "CSS"],
      status: "Active",
      tags: ["Dogs", "Calculator", "Utility", "Frontend"],
    },
    {
      name: "netflix-clone",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/js-html-css.png?raw=1",
      description: "Netflix-style UI clone (layout + styling practice).",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Active",
      tags: ["UI Clone", "Layout", "Styling", "Practice"],
    },
    {
      name: "pricing-table",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/js-html-css.png?raw=1",
      description: "Responsive pricing table component (layout + CSS practice).",
      tech: ["HTML", "CSS"],
      status: "Active",
      tags: ["Component", "Responsive", "CSS", "UI"],
    },
    {
      name: "StoryShield-Pricing",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/js-html-css.png?raw=1",
      description:
        "Pricing page/component experiment for StoryShield (UI layout + iteration).",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Active",
      tags: ["Pricing", "UI", "Component", "Experiment"],
    },

    {
      name: "Mini Python",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Self-contained Python scripts runnable from terminal with one command.",
      tech: ["Python", "CLI"],
      status: "Active",
      tags: ["Mini Projects", "Python", "CLI Tools", "Practice"],
    },
    {
      name: "password_generator",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Random secure password generator.",
      tech: ["Python"],
      status: "Active",
      tags: ["Security", "Utility", "CLI", "Beginner"],
    },
    {
      name: "countdown",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Simple timer using time.sleep.",
      tech: ["Python"],
      status: "Active",
      tags: ["Timer", "CLI", "Utility", "Practice"],
    },
    {
      name: "dice",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Six-sided dice roller.",
      tech: ["Python"],
      status: "Active",
      tags: ["Random", "CLI", "Game", "Practice"],
    },
    {
      name: "custom-start-day-calendar",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description:
        "Generate calendars with any chosen start day (ex: Sunday instead of Monday).",
      tech: ["Python"],
      status: "Active",
      tags: ["Calendar", "CLI", "Utility", "Dates"],
    },
    {
      name: "monthly-calendar",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Print a single month’s calendar in the terminal.",
      tech: ["Python"],
      status: "Active",
      tags: ["Calendar", "CLI", "Utility", "Dates"],
    },
    {
      name: "yearly-calendar",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Display an entire year’s calendar in text format.",
      tech: ["Python"],
      status: "Active",
      tags: ["Calendar", "CLI", "Utility", "Dates"],
    },
    {
      name: "reverse_text",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Reverse any input string.",
      tech: ["Python"],
      status: "Active",
      tags: ["Strings", "CLI", "Utility", "Practice"],
    },
    {
      name: "weather",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Minimal OpenWeather client (API key required).",
      tech: ["Python", "OpenWeather API"],
      status: "Active",
      tags: ["Weather", "API", "CLI", "Networking"],
    },
    {
      name: "number_guess",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Number guessing game (1–50).",
      tech: ["Python"],
      status: "Active",
      tags: ["Game", "CLI", "Logic", "Beginner"],
    },
    {
      name: "currency_converter",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "USD → EUR/GBP/JPY converter (sample rates).",
      tech: ["Python"],
      status: "Active",
      tags: ["Finance", "CLI", "Utility", "Practice"],
    },
    {
      name: "file_organizer",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Sort files into subfolders by extension.",
      tech: ["Python"],
      status: "Active",
      tags: ["Files", "Automation", "CLI", "Utility"],
    },
    {
      name: "qr_generator",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Create QR code PNGs from text or URL.",
      tech: ["Python"],
      status: "Active",
      tags: ["QR", "Utility", "CLI", "Images"],
    },
    {
      name: "todo_json",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Minimal to-do list with JSON storage.",
      tech: ["Python", "JSON"],
      status: "Active",
      tags: ["Tasks", "CLI", "Persistence", "Utility"],
    },
    {
      name: "stopwatch",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Basic stopwatch with Enter to start/stop.",
      tech: ["Python"],
      status: "Active",
      tags: ["Timer", "CLI", "Utility", "Practice"],
    },
    {
      name: "word_frequency",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description: "Count words using collections.Counter.",
      tech: ["Python"],
      status: "Active",
      tags: ["Text", "CLI", "Utility", "Data"],
    },
    {
      name: "mini_metronome",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description:
        "Lightweight CLI metronome with downbeat accents (afplay/simpleaudio backend).",
      tech: ["Python"],
      status: "Active",
      tags: ["Music", "CLI", "Audio", "Utility"],
    },
    {
      name: "Watermark",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description:
        "Modern PDF watermarking: single PDF or batch folders, default watermark, and customizable pages/location/rotation.",
      tech: ["Python", "PDF"],
      status: "Active",
      tags: ["PDF", "Documents", "CLI", "Batch"],
    },
    {
      name: "Detect-Plagiarism",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description:
        "Compare two text files with Dice + Jaccard similarity, stopword filtering, and a simple Tkinter UI.",
      tech: ["Python", "Tkinter", "NLP"],
      status: "Active",
      tags: ["Text", "Similarity", "NLP", "Utility"],
    },
    {
      name: "Domain-Lookup",
      href: "",
      image:
        "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/python.png?raw=1",
      description:
        "CLI domain registration lookup across modern TLDs (RDAP-first, WHOIS fallback).",
      tech: ["Python", "RDAP", "WHOIS"],
      status: "Active",
      tags: ["Networking", "Domains", "CLI", "Utility"],
    },
  ],
}
