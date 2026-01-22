 // repos-data.js
// Single source for portfolio cards.
// Add repos here - auto-renders them.

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
          "Timeline-based stochastic simulation engine for modeling risk, failure, and long-term outcomes across complex systems.",
        tech: ["Python", "Monte Carlo", "State Modeling"],
        status: "Active",
        tags: ["Simulation", "Systems", "Risk", "Python"],
      },
      {
        name: "Mini-Massive",
        href: "https://github.com/ginesthoii/Mini-Massive",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/mini-massive.png?raw=1",
        description:
          "Lightweight agent-based simulation framework for emergent behavior (crowds, traffic, tactical interactions). Inspired by Weta Digital’s Massive system.",
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
          "Local-first archival + metadata extraction for documents, media, and images.",
        tech: ["Python", "YAML", "OCR", "SQLite"],
        status: "Active",
        tags: ["Local-first", "Metadata", "Archive", "OCR"],
      },
      {
        name: "mini-metadata",
        href: "https://github.com/ginesthoii/mini-metadata",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/mini-metadata.gif?raw=1",
        description:
          "Lightweight shared metadata utilities used across projects.",
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
          "Offline desktop app that reconstructs folder + file trees from pasted text, images, PDFs, or dropped files.",
        tech: ["Python", "PyQt6", "SQLite"],
        status: "Active",
        tags: ["Offline", "Utilities", "Parsing"],
      },
      {
        name: "framework",
        href: "https://github.com/ginesthoii/framework",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/framework.jpg?raw=1",
        description:
          "A personal OS for ideas/projects/research. Starter templates + automation for consistent, reproducible project structure.",
        tech: ["Python", "PyQt6", "SQLite", "Markdown"],
        status: "Active",
        tags: ["Templates", "Automation", "Systems"],
      },
      {
        name: "storyteller",
        href: "https://github.com/ginesthoii/storyteller",
        image: "https://github.com/ginesthoii/ginesthoii/blob/main/assets/two/storyteller.png?raw=1",
        description:
          "Resumable offline audiobook generator for text, PDF, DOCX, MOBI, and EPUB.",
        tech: ["Python", "TTS", "SQLite", "Document Parsing"],
        status: "Active",
        tags: ["TTS", "Offline", "Media", "Docs"],
      },
    ],
  },

  // Add more sections following the same shape.
];
