// repos-data.js
// Single source for portfolio cards.

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
        description: "Lightweight metadata utilities shared across projects.",
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
        description: "Personalized search review scraper.",
        tech: ["Python"],
        status: "Active",
        tags: ["Scraping", "Web", "Data", "Python"],
      },
      {
        name: "search-review-tracker",
        href: "https://github.com/ginesthoii/search-review-tracker",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/search-review-tracker.jpg?raw=1",
        description: "SEO and reputation monitoring with alerts.",
        tech: ["Python", "SQLite", "Plotly"],
        status: "Active",
        tags: ["Monitoring", "SEO", "Alerts", "Python"],
      },
      {
        name: "real-estate-scraper",
        href: "https://github.com/ginesthoii/real-estate-scraper",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/real-estate.jpg?raw=1",
        description: "Real estate listing data collection and analysis system.",
        tech: ["Python"],
        status: "Active",
        tags: ["Scraping", "Real Estate", "Data", "Python"],
      },
      {
        name: "sql-xslx-csv-scraper",
        href: "https://github.com/ginesthoii/sql-xslx-csv-scraper",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/scraper-sql-xslx.jpg?raw=1",
        description: "Structured data extraction and transformation utilities.",
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
  },

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
},
   {
    id: "nutrition-fitness-health",
    title: "Nutrition, Fitness & Health Systems",
    subtitle: "Offline-first trackers for training, nutrition, symptoms, supplements, and habit automation",
    items: [
      {
        name: "StretchStud-io",
        href: "https://github.com/ginesthoii/StretchStud-io",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/stretchstud-io.jpg?raw=1",
        description: "Yoga + stretching routines + dashboards.",
        tech: ["Python", "Google Sheets", "Dashboards"],
        status: "Active",
        tags: ["Fitness", "Mobility", "Routines", "Tracking"],
      },
      {
        name: "TheHungerGains",
        href: "https://github.com/ginesthoii/TheHungerGains",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/hunger-gains.png?raw=1",
        description: "Minimalist intermittent fasting tracker.",
        tech: ["Python", "AppSheet", "Google Apps Script"],
        status: "Active",
        tags: ["Nutrition", "Fasting", "Tracking", "Lightweight"],
      },
      {
        name: "StrokeOfGenius",
        href: "https://github.com/ginesthoii/StrokeOfGenius",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/stroke-of-genius.png?raw=1",
        description: "Swimming logbook + analyzer.",
        tech: ["Python", "Pandas", "Dashboards"],
        status: "Active",
        tags: ["Fitness", "Swimming", "Analytics", "Tracking"],
      },
      {
        name: "SweatScript",
        href: "https://github.com/ginesthoii/SweatScript",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/sweat-scripts.png?raw=1",
        description: "CLI workout tracker with dashboards.",
        tech: ["Python", "Bash", "Google Sheets"],
        status: "Active",
        tags: ["Fitness", "Workouts", "CLI", "Dashboards"],
      },
      {
        name: "protein-plus",
        href: "https://github.com/ginesthoii/protein-plus",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/protein-plus.png?raw=1",
        description:
          "Protein-first nutrition tracker (calories + macros) with fast food search, barcode scanning, and a robust food database.",
        tech: ["Google Sheets", "Apps Script", "SQLite3"],
        status: "Active",
        tags: ["Nutrition", "Macros", "Tracking", "Database"],
      },
      {
        name: "food-for-thought",
        href: "https://github.com/ginesthoii/food-for-thought",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/food-for-thought.jpg?raw=1",
        description:
          "Offline food + symptom tracker based on the FODMAP system to identify tolerable foods and recipes.",
        tech: ["Python", "PyQt6", "Google Sheets", "SQLite"],
        status: "Active",
        tags: ["Nutrition", "FODMAP", "Symptoms", "Offline"],
      },
      {
        name: "sourdough-starter",
        href: "https://github.com/ginesthoii/sourdough-starter",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/sourdough.png?raw=1",
        description:
          "Offline sourdough starter manager with diagnostics, calculations, stability tracking, and corrective ratio logic.",
        tech: ["Python", "PyQt6", "SQLite"],
        status: "Active",
        tags: ["Food", "Baking", "Tracking", "Offline"],
      },
      {
        name: "CulinaryCodex",
        href: "https://github.com/ginesthoii/CulinaryCodex",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/culinarycodex.png?raw=1",
        description:
          "Ancient + modern food research codex exploring food history and cultural context.",
        tech: ["Python", "JavaScript", "HTML", "CSS", "Flask", "SQLite"],
        status: "Active",
        tags: ["Food History", "Research", "Knowledge Base", "Offline-first"],
      },
      {
        name: "PillPal-VitaPro",
        href: "https://github.com/ginesthoii/PillPal-VitaPro",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/pillpal.png?raw=1",
        description: "Supplement + prescription interaction checker.",
        tech: ["Python", "Vite", "AppSec Sandbox"],
        status: "Active",
        tags: ["Health", "Supplements", "Safety", "Checker"],
      },
      {
        name: "HabitHelpers",
        href: "https://github.com/ginesthoii/HabitHelpers",
        image: "https://github.com/user-attachments/assets/af64bd67-a436-4b4c-b443-7c624f036c30",
        description: "Modular habit suite with API + automation.",
        tech: ["React", "Python", "Docker", "GitHub API"],
        status: "Active",
        tags: ["Habits", "Automation", "API", "Modular"],
      },
    ],
  },


