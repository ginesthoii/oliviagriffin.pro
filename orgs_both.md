---


# aFungusAmongUs

## Tagline
Grow, cook, forage, and learn — an open-source fungal ecosystem.

## Summary
Open-source ecosystem for fungal cultivation, foraging, food, and mycological knowledge, with an emphasis on automation and data.

## Description
aFungusAmongUs is a modular, technically grounded project focused on fungi as a complete system: how mushrooms are grown, identified, foraged, cooked, and studied. The organization blends embedded systems, environmental data, mapping, and structured knowledge into practical tooling rather than hobbyist content.

The project emphasizes reproducibility, real-world use, and incremental automation. Components range from ESP32-based grow controllers to foraging datasets, recipes, and educational reference material. Each repository addresses a specific part of the fungal lifecycle or knowledge stack while remaining interoperable.

## Repositories

### esp32_mushroom_controller
- Visibility: Private
- Summary: ESP32-based controller for mushroom grow environments
- Description: Embedded controller for monitoring and managing environmental conditions such as humidity and temperature in mushroom grow setups. Designed for automation and sensor-driven workflows.
- Primary languages: C, C++
- Tags: esp32, embedded-systems, automation, mushroom-cultivation, sensors

### Automated-Grow-Box-for-mushrooms-project
- Visibility: Public (fork)
- Summary: Automated mushroom grow box reference implementation
- Description: C++ reference project demonstrating automated grow box control logic. Used as a baseline for hardware layout, control flow, and automation concepts.
- Primary languages: C++
- Tags: automation, grow-box, mushrooms, hardware-control

### MorelMaps
- Visibility: Private
- Summary: Seasonal and geographic mapping of mushroom flushes
- Description: Foraging-focused dataset and tooling for tracking mushroom flushes, with an emphasis on morels. Includes seasonal timing, habitat indicators, and tree–fungi associations.
- Primary languages: JavaScript
- Tags: foraging, mapping, ecology, seasonal-data, mushrooms

### ShroomAndSpoon
- Visibility: Private
- Summary: Mushroom-based recipe collection
- Description: Curated recipe repository focused on mushroom species, preparation techniques, and substitutions, bridging foraging and culinary use.
- Primary languages: Markdown
- Tags: recipes, food, mushrooms, cooking

### SporeLore
- Visibility: Private
- Summary: Educational fungal knowledge repository
- Description: Field guides, research notes, and educational material covering fungal biology, identification, cultivation, and mycology fundamentals.
- Primary languages: Markdown
- Tags: education, mycology, reference, field-guides

### SporeLog
- Visibility: Private
- Summary: CLI tool for logging mushroom finds
- Description: Lightweight command-line tool for recording mushroom discoveries, including metadata, look-alike warnings, and exportable data formats.
- Primary languages: Python
- Tags: cli, foraging, logging, data-collection

### MorelSupportSheets
- Visibility: Private
- Summary: Google Sheets automation for mushroom tracking
- Description: Google Sheets and Apps Script templates for logging, tracking, and lightweight analysis of foraging and cultivation data.
- Primary languages: JavaScript
- Tags: googlesheets, appscript, tracking, data

### SmallScripts
- Visibility: Private
- Summary: Utility scripts supporting the ecosystem
- Description: Small helper scripts used for data cleanup, experimentation, and support tasks across the aFungusAmongUs ecosystem.
- Primary languages: Mixed
- Tags: utilities, scripts

### .github
- Visibility: Public
- Summary: Organization-level GitHub configuration
- Description: Shared configuration files and defaults for repositories within the aFungusAmongUs organization.
- Primary languages: N/A
- Tags: infrastructure, github-config



---




# aFungusAmongUs

## Summary
Open-source fungal ecosystem combining cultivation automation, foraging data, food knowledge, and fungal education.

## Description
aFungusAmongUs is a modular, technically grounded project focused on fungi as a system: how mushrooms are grown, identified, foraged, cooked, and studied. The organization blends embedded systems (ESP32/Arduino), environmental data, mapping, and structured knowledge repositories. It emphasizes practical tooling, reproducible data, and real-world use rather than hobbyist blogging.

## Repositories

### esp32_mushroom_controller
- Visibility: Private
- Summary: ESP32-based controller for mushroom grow environments
- Description: Controls and monitors environmental conditions such as humidity and temperature for mushroom cultivation. Intended for automation and sensor-driven grow setups.
- Primary languages: C, C++
- Tags: esp32, arduino, automation, mushroom-cultivation, sensors

### Automated-Grow-Box-for-mushrooms-project
- Visibility: Public (fork)
- Summary: Automated mushroom grow box reference implementation
- Description: C++ project demonstrating automated grow box control logic. Used as a reference for hardware layout, control flow, and automation concepts.
- Primary languages: C++
- Tags: automation, grow-box, mushrooms, embedded-systems

### MorelMaps
- Visibility: Private
- Summary: Seasonal and geographic mapping of mushroom flushes
- Description: Tracks mushroom foraging data with an emphasis on morels, including habitat signals, seasonal timing, and tree–fungi associations.
- Primary languages: JavaScript
- Tags: foraging, maps, mushrooms, ecology, seasonal-data

### ShroomAndSpoon
- Visibility: Private
- Summary: Mushroom-based recipe collection
- Description: Curated recipes focused on mushroom species, preparation methods, and substitutions, bridging foraging and culinary use.
- Primary languages: Markdown
- Tags: recipes, food, mushrooms, cooking

### SporeLore
- Visibility: Private
- Summary: Educational fungal knowledge repository
- Description: Field guides, research notes, and educational resources covering fungal biology, identification, and cultivation.
- Primary languages: Markdown
- Tags: education, mycology, reference, field-guides

### SporeLog
- Visibility: Private
- Summary: CLI tool for logging mushroom finds
- Description: Lightweight command-line utility for recording foraging discoveries, including look-alike warnings and exportable data formats.
- Primary languages: Python
- Tags: cli, foraging, logging, mushrooms

### MorelSupportSheets
- Visibility: Private
- Summary: Google Sheets automation for mushroom tracking
- Description: AppScript and spreadsheet templates used for logging, analysis, and lightweight data visualization.
- Primary languages: JavaScript
- Tags: googlesheets, appscript, tracking, data

### SmallScripts
- Visibility: Private
- Summary: Utility scripts supporting the ecosystem
- Description: Small helper scripts used across cultivation, data handling, and experimentation.
- Primary languages: Mixed
- Tags: utilities, scripts

### .github
- Visibility: Public
- Summary: Organization-level GitHub configuration
- Description: Shared configuration files and defaults for repositories within the aFungusAmongUs organization.
- Primary languages: N/A
- Tags: infrastructure, github-config









---



# AlexandriaArchiveAPI

## Tagline
Preserving and exploring ancient and medieval history in digital form — not only how wars were fought, but how people lived, ate, loved, and believed.

## Summary
Code-first historical archive focused on ancient and medieval history through structured data, documentation, and APIs.

## Description
AlexandriaArchiveAPI is a modular historical systems project designed to preserve and analyze how civilizations lived, fought, built, and remembered. It treats history as structured data rather than narrative prose alone, emphasizing reproducibility, traceability, and extensibility.

The organization spans military history, wartime technology, timelines, cultural artifacts, and everyday life. Public repositories focus on datasets, schemas, and APIs, while private repositories preserve narrative memory, social history, and primary-source material. Together, they form a digital archive intended to grow incrementally over time.

## Repositories

### WarChest
- Visibility: Public
- Summary: Codex of battles and warfare
- Description: Markdown-first archive of wars and battles from antiquity onward, supported by structured datasets and consistent templates for historical documentation.
- Primary languages: Markdown, Python
- Tags: history, warfare, battles, military-history, datasets

### EnginesOfWar
- Visibility: Public
- Summary: Catalogue of wartime technological advances
- Description: Code-first dataset and API covering weapons, armor, siege engines, logistics, and doctrine. Includes CSV data, a SQLite schema, a FastAPI service, and example analyses.
- Primary languages: Python
- Tags: history, warfare, technology, sqlite, fastapi, datasets

### AlexandrianChronicles-
- Visibility: Private
- Summary: Historical timelines and evolving records
- Description: Timelines, fragments, reflections, and discoveries forming the long-term narrative memory of the Alexandria Archive.
- Primary languages: Markdown
- Tags: timelines, chronicles, historical-records

### ThoseWhoRarelyMakeHistory
- Visibility: Private
- Summary: Social history of ordinary people
- Description: Documents the lives of non-elite historical figures such as artisans, laborers, healers, and builders whose work formed the substance of history.
- Primary languages: Markdown
- Tags: social-history, culture, everyday-life

### FacesOfHistory
- Visibility: Private
- Summary: Profiles of historical individuals
- Description: Curated records of thinkers, rulers, innovators, and makers who shaped historical events and ideas.
- Primary languages: Markdown
- Tags: biography, people, history

### ThatsWhatTheySaid
- Visibility: Private
- Summary: Historical quotations and excerpts
- Description: Collection of quotations, war cries, excerpts, and notable statements from ancient to medieval sources.
- Primary languages: Markdown
- Tags: quotes, rhetoric, philosophy, primary-sources

### BanquetScrolls
- Visibility: Private
- Summary: Historical food and recipes
- Description: Recipes and food practices from antiquity to the medieval period, treated as cultural and historical evidence rather than novelty.
- Primary languages: Markdown
- Tags: food-history, recipes, culture

### .github
- Visibility: Public
- Summary: Organization-level GitHub configuration
- Description: Shared configuration files and defaults for repositories within the AlexandriaArchiveAPI organization.
- Primary languages: N/A
- Tags: infrastructure, github-config



---

# AlexandriaArchiveAPI

## Summary
Code-first historical archive focused on ancient and medieval history through structured data, documentation, and APIs.

## Description
AlexandriaArchiveAPI is a modular historical systems project dedicated to preserving and exploring ancient and medieval history in digital form. The organization emphasizes structured datasets, schemas, and APIs over narrative publishing, enabling reproducible analysis and long-term archival growth.

## Repositories

### WarChest
- Visibility: Public
- Summary: Codex of battles and warfare
- Description: Markdown-first archive of wars and battles from antiquity onward, supported by structured datasets and templates.
- Primary languages: Markdown, Python
- Tags: history, warfare, battles, datasets, military-history

### EnginesOfWar
- Visibility: Public
- Summary: Catalogue of wartime technological advances
- Description: Code-first catalogue covering weapons, armor, siege engines, logistics, and doctrine, including CSV datasets, SQLite schema, and a FastAPI service.
- Primary languages: Python
- Tags: history, technology, warfare, sqlite, fastapi, datasets

### AlexandrianChronicles-
- Visibility: Private
- Summary: Historical timelines and evolving records
- Description: Timelines, fragments, and internal historical notes forming the long-term archive record.
- Primary languages: Markdown
- Tags: timelines, chronicles, history

### ThoseWhoRarelyMakeHistory
- Visibility: Private
- Summary: Social history of ordinary people
- Description: Records of non-elite historical figures whose lives and labor shaped civilizations.
- Primary languages: Markdown
- Tags: social-history, culture, everyday-life

### FacesOfHistory
- Visibility: Private
- Summary: Profiles of historical individuals
- Description: Curated records of individuals who influenced historical events and ideas.
- Primary languages: Markdown
- Tags: biography, history, people

### ThatsWhatTheySaid
- Visibility: Private
- Summary: Historical quotations and excerpts
- Description: Collection of quotations and notable statements from ancient to medieval sources.
- Primary languages: Markdown
- Tags: quotes, philosophy, rhetoric, primary-sources

### BanquetScrolls
- Visibility: Private
- Summary: Historical food and recipes
- Description: Food practices and recipes treated as cultural and historical artifacts.
- Primary languages: Markdown
- Tags: food-history, recipes, culture

### .github
- Visibility: Public
- Summary: Organization-level GitHub configuration
- Description: Shared configuration files and defaults for repositories within the organization.
- Primary languages: N/A
- Tags: infrastructure, github-config


---


# ares-assist

## Tagline
Defensive systems, security tooling, and resilience patterns — the protective layer of the LORIE ecosystem.

## Summary
Security and defense-focused tooling designed to protect systems, data, and operational integrity.

## Description
ares-assist is an evolving defensive systems organization focused on security, resilience, and protection patterns across software and infrastructure. It functions as the defensive counterpart to LORIE, emphasizing safeguarding, monitoring, and system hardening rather than user-facing assistance.

The organization serves as a research and prototyping space for security tooling, threat modeling, and defensive architecture. Scope is intentionally flexible, allowing ideas to mature before being split into focused projects. Design decisions prioritize correctness, auditability, and long-term maintainability.

## Status
In development. Architecture and scope are not yet finalized.

## Repositories

### ares
- Visibility: Private
- Summary: Core experimental repository for ares-assist
- Description: Primary sandbox for exploring defensive tooling, security concepts, and system protection patterns. Used for prototyping and architectural exploration.
- Primary languages: Python
- Tags: security, defense, experimentation, systems

### ares-knowledge-os
- Visibility: Private
- Summary: Knowledge base for security and defensive systems
- Description: Structured notes, references, and documentation covering security principles, threat modeling, resilience strategies, and defensive architecture.
- Primary languages: Markdown
- Tags: security, knowledge-base, threat-modeling, resilience

### .github
- Visibility: Public
- Summary: Organization-level GitHub configuration
- Description: Shared configuration files and defaults for repositories within the ares-assist organization.
- Primary languages: N/A
- Tags: infrastructure, github-config

## Relationship to Other Orgs
- Complements LORIE as its defensive and protective layer
- Serves as an incubation space for future security-focused tooling
- Not intended as a consumer-facing product

---


# ares-assist

## Summary
Defense and security-focused organization for building resilient systems and protective tooling.

## Description
ares-assist is a modular security and defense project focused on protecting systems, data, and infrastructure. The organization emphasizes security research, defensive architecture, and resilience patterns rather than end-user applications. Scope is intentionally flexible to support experimentation and long-term evolution.

## Repositories

### ares
- Visibility: Private
- Summary: Experimental security and defense tooling
- Description: Core repository for prototyping defensive systems, security mechanisms, and protection strategies.
- Primary languages: Python
- Tags: security, defense, systems, experimentation

### ares-knowledge-os
- Visibility: Private
- Summary: Security knowledge base
- Description: Structured documentation and references related to security principles, threat modeling, and resilience.
- Primary languages: Markdown
- Tags: security, knowledge-base, threat-modeling

### .github
- Visibility: Public
- Summary: Organization-level GitHub configuration
- Description: Shared configuration files and defaults for repositories within the organization.
- Primary languages: N/A
- Tags: infrastructure, github-config

---




# CaregiverQR

## Tagline
Simple, transparent care tracking using QR codes — built for families, caregivers, and small facilities.

## Summary
Lightweight QR-based care tracking system for caregiving environments.

## Description
CaregiverQR is a minimalist care logging system designed to provide visibility and accountability without the complexity of full electronic medical record systems. It uses QR codes and lightweight web tooling to record meals, medications, and daily care events with quick scans.

The project prioritizes ease of use, low infrastructure requirements, and minimal sensitive data storage. It is intentionally not a full HIPAA-compliant EMR and is best suited for home care, assisted living, family coordination, and low-resource caregiving contexts.

## Repositories

### caregiver-qr
- Visibility: Private
- Summary: Core QR-based care tracking application
- Description: Primary application for generating QR codes and logging care events such as meals, medications, and daily activities. Supports timestamped entries and caregiver attribution.
- Primary languages: Python, HTML
- Tags: caregiving, qr-codes, care-tracking, accountability

### CareSheets
- Visibility: Private
- Summary: QR-enabled care sheet and template generator
- Description: Generates printable care sheets and QR codes used by the CaregiverQR system. Designed for rapid setup and non-technical caregivers.
- Primary languages: Python
- Tags: care-templates, qr-codes, caregiving

### SideScripts
- Visibility: Private
- Summary: Utility and support scripts
- Description: Helper scripts for automation, data handling, and experimentation related to the CaregiverQR ecosystem.
- Primary languages: Python
- Tags: utilities, scripts, automation

### .github
- Visibility: Private
- Summary: Organization-level GitHub configuration
- Description: Shared configuration files and defaults for repositories within the CaregiverQR organization.
- Primary languages: N/A
- Tags: infrastructure, github-config

## Architecture Overview
- Frontend: Simple HTML interfaces for scanning and logging
- Backend: Lightweight Python services and Google Apps Script integrations
- Storage: Google Sheets and flat-file persistence
- Reporting: Optional Looker Studio dashboards

## Design Principles
- Low friction for caregivers
- Minimal PHI storage
- Mobile- and offline-friendly workflows
- Transparency for families and administrators
- Low infrastructure and operational overhead

---

# CaregiverQR

## Summary
Lightweight QR-based system for tracking caregiving activities.

## Description
CaregiverQR is a simple care tracking platform that uses QR codes and lightweight tooling to log caregiving events. The project emphasizes transparency, ease of use, and low operational overhead rather than clinical complexity.

## Repositories

### caregiver-qr
- Visibility: Private
- Summary: Core QR-based care tracking application
- Description: Generates QR codes and records care events including meals, medications, and daily activities with timestamps and caregiver attribution.
- Primary languages: Python, HTML
- Tags: caregiving, qr-codes, care-tracking

### CareSheets
- Visibility: Private
- Summary: QR-enabled care sheet generator
- Description: Templates and tooling for generating printable care sheets and QR codes.
- Primary languages: Python
- Tags: caregiving, qr-codes, templates

### SideScripts
- Visibility: Private
- Summary: Utility scripts
- Description: Helper scripts supporting automation and data handling.
- Primary languages: Python
- Tags: utilities, scripts

### .github
- Visibility: Private
- Summary: Organization-level GitHub configuration
- Description: Shared configuration files and defaults for repositories within the organization.
- Primary languages: N/A
- Tags: infrastructure, github-config

---



# CatholicMedusa

## Tagline
Modular ecosystem for snake husbandry, genetics, and automation — inspired by myth, built with security and engineering discipline. Raised Catholic. Felt like Medusa.

## Summary
Integrated systems platform for snake husbandry, breeding genetics, and enclosure automation.

## Description
CatholicMedusa is a connected systems project that combines biology, data modeling, and software engineering to support serious snake keeping and breeding operations. Rather than a single application, it is designed as an ecosystem of interoperable tools, each responsible for a specific layer of functionality.

The project blends practical husbandry tracking, formal genetic modeling, feeding intelligence, and future-facing automation. Architecture emphasizes correctness, extensibility, and security-conscious design over consumer polish, enabling long-term collection management and reproducible decision-making.

## Repositories

### SerpentTracker
- Visibility: Private
- Summary: Husbandry and breeding log for snakes
- Description: Tracks feedings, sheds, pairings, clutches, and lifecycle events for individual animals. Serves as the authoritative historical record for collections.
- Primary languages: Python, Java
- Tags: snake-husbandry, logging, breeding, data-tracking

### GorgonGenetics
- Visibility: Private
- Summary: Morph inheritance and genetics simulation engine
- Description: Ball python morph genetics system with morph IDs and a rule-based inheritance engine. Generates Punnett squares and probability distributions for dominant, recessive, and co-dominant traits. Includes scrapers and tooling for building and validating morph datasets.
- Primary languages: Python
- Tags: genetics, ballpython, morphs, punnett-square, simulation

### SnakeSnack
- Visibility: Private
- Summary: Feeding intelligence toolkit for snake collections
- Description: Calculates ideal prey size from snake weight, recommends feeding intervals, tracks growth and refusals, predicts when to size up, and generates vendor order plans using Python and SQLite.
- Primary languages: Python
- Tags: feeding, husbandry, nutrition, sqlite, cli

### MedusasGaze
- Visibility: Private
- Summary: Vision and sensor toolkit for enclosure monitoring
- Description: Monitoring system using cameras and sensors for incubators and enclosures. Initial focus is image logging and environmental snapshots, with planned expansion into ML-based morph recognition and automated alerts.
- Primary languages: Python
- Tags: computer-vision, sensors, automation, monitoring

### ClutchKeeper
- Visibility: Private
- Summary: Clutch and hatch outcome analytics
- Description: Visualization and reporting tools for clutch data, hatch rates, and breeding outcomes to evaluate reproductive performance.
- Primary languages: Python
- Tags: breeding, analytics, visualization, clutches

### HydraHub
- Visibility: Private
- Summary: Integration and API layer
- Description: Integration layer connecting husbandry logs, genetics simulations, and sensor systems through shared models and APIs.
- Primary languages: Python
- Tags: api, integration, data-models

### MedusaCore
- Visibility: Private
- Summary: Shared core domain models
- Description: Common domain models and utilities representing snakes, morphs, genetics, and logs used across the CatholicMedusa ecosystem.
- Primary languages: Java
- Tags: core-library, shared-models

### SideScripts
- Visibility: Private
- Summary: Utility and support scripts
- Description: Helper scripts for data cleanup, scraping, migration, and experimentation across the ecosystem.
- Primary languages: Python
- Tags: utilities, scripts

### .github
- Visibility: Private
- Summary: Organization-level GitHub configuration
- Description: Shared configuration files and defaults for repositories within the CatholicMedusa organization.
- Primary languages: N/A
- Tags: infrastructure, github-config

## Ecosystem Structure
- SerpentTracker: Data layer (husbandry history and records)
- GorgonGenetics: Logic layer (genetics and outcome prediction)
- SnakeSnack: Nutrition and feeding intelligence layer
- MedusasGaze: Sensor and automation layer
- HydraHub: Integration layer
- MedusaCore: Shared domain models

---

# CatholicMedusa

## Summary
Modular ecosystem for snake husbandry, genetics, and automation.

## Description
CatholicMedusa is a systems-oriented project focused on managing snake collections through structured data, genetic modeling, and automation tooling. The organization emphasizes correctness, extensibility, and long-term maintainability across husbandry, breeding, and monitoring workflows.

## Repositories

### SerpentTracker
- Visibility: Private
- Summary: Snake husbandry and breeding log
- Description: Records feedings, sheds, pairings, clutches, and lifecycle events for individual animals.
- Primary languages: Python, Java
- Tags: husbandry, breeding, logging, snakes

### GorgonGenetics
- Visibility: Private
- Summary: Morph inheritance simulation engine
- Description: Rule-based genetics engine for modeling ball python morph inheritance using Punnett squares and probability distributions.
- Primary languages: Python
- Tags: genetics, morphs, simulation, punnett-square

### SnakeSnack
- Visibility: Private
- Summary: Feeding intelligence toolkit
- Description: Calculates prey sizing, feeding schedules, growth trends, and vendor order planning from collection data.
- Primary languages: Python
- Tags: feeding, nutrition, husbandry, sqlite

### MedusasGaze
- Visibility: Private
- Summary: Enclosure monitoring and vision system
- Description: Camera- and sensor-based monitoring system for incubators and enclosures.
- Primary languages: Python
- Tags: monitoring, sensors, automation, vision

### ClutchKeeper
- Visibility: Private
- Summary: Breeding and hatch analytics
- Description: Analytics and visualization tools for clutch outcomes and reproductive performance.
- Primary languages: Python
- Tags: breeding, analytics, visualization

### HydraHub
- Visibility: Private
- Summary: Integration and API layer
- Description: Shared APIs and data flow connecting CatholicMedusa components.
- Primary languages: Python
- Tags: api, integration, data-models

### MedusaCore
- Visibility: Private
- Summary: Shared core models
- Description: Common domain models and utilities used across the ecosystem.
- Primary languages: Java
- Tags: core-library, shared-models

### SideScripts
- Visibility: Private
- Summary: Utility scripts
- Description: Helper scripts supporting data handling and experimentation.
- Primary languages: Python
- Tags: utilities, scripts

### .github
- Visibility: Private
- Summary: Organization-level GitHub configuration
- Description: Shared configuration files and defaults for repositories within the organization.
- Primary languages: N/A
- Tags: infrastructure, github-config

---



# CloakAndCipher

## Tagline
Security-minded development — AppSec, automation, and defensive tooling for modern software.

## Summary
Application security and DevSecOps tooling focused on automation, clarity, and actionable results.

## Description
CloakAndCipher is a security-focused organization dedicated to building practical, automation-first tools for application security and secure software delivery. The emphasis is on reducing friction between development and security by integrating checks directly into developer workflows rather than bolting on external processes.

The organization focuses on reusable security pipelines, vulnerability normalization, and lightweight analysis tools that surface clear, prioritized findings instead of overwhelming noise. Design decisions favor transparency, composability, and real-world usability over theoretical completeness.

CloakAndCipher serves as the security tooling backbone for broader systems while remaining usable as a standalone AppSec toolkit.

## Repositories

### security-pipeline
- Visibility: Public
- Summary: Reusable GitHub Actions security pipeline
- Description: Drop-in GitHub Actions workflows that run linting and security scans for Python and JavaScript projects. Executes tools such as Bandit, Semgrep, Trivy, CodeQL, and secret detection, failing builds on high-severity findings.
- Primary languages: YAML
- Tags: appsec, ci-cd, github-actions, security-pipeline, automation

### CovertScanner
- Visibility: Private
- Summary: Vulnerability aggregation and normalization platform
- Description: Lightweight static and dynamic vulnerability scanner that ingests results from multiple tools, normalizes findings, deduplicates issues, and presents actionable insights through an interactive dashboard.
- Primary languages: Python
- Tags: vulnerability-scanning, normalization, dashboards, appsec

### ClandestineReports
- Visibility: Private
- Summary: Security reporting and analysis utilities
- Description: Supporting tooling for generating structured security reports, summaries, and exports from normalized vulnerability data.
- Primary languages: Python
- Tags: reporting, security-analysis, automation

### SideScripts
- Visibility: Private
- Summary: Utility and experimental security scripts
- Description: Small scripts supporting ingestion, normalization, deduplication, and CI logic experiments across the CloakAndCipher ecosystem.
- Primary languages: Python
- Tags: utilities, scripts, security

### .github
- Visibility: Public
- Summary: Organization-level GitHub configuration
- Description: Shared GitHub configuration and profile documentation for the CloakAndCipher organization.
- Primary languages: N/A
- Tags: infrastructure, github-config

## Design Principles
- Security integrated into developer workflows
- Automation over manual review
- Clear, prioritized findings over raw scanner output
- Composable tools that work independently or together
- Practical defaults suitable for real-world teams


---


# CloakAndCipher

## Summary
Application security and DevSecOps tooling focused on automation and vulnerability management.

## Description
CloakAndCipher is a collection of tools designed to automate application security checks, normalize vulnerability data, and integrate security analysis into CI/CD pipelines.

## Repositories

### security-pipeline
- Visibility: Public
- Summary: Reusable GitHub Actions security workflows
- Description: GitHub Actions workflows for linting, dependency scanning, static analysis, and secret detection.
- Primary languages: YAML
- Tags: appsec, ci-cd, automation, github-actions

### CovertScanner
- Visibility: Private
- Summary: Vulnerability normalization and scanning platform
- Description: Aggregates and normalizes vulnerability scan results from multiple tools.
- Primary languages: Python
- Tags: vulnerability-scanning, normalization, dashboards

### ClandestineReports
- Visibility: Private
- Summary: Security reporting utilities
- Description: Tools for generating reports and summaries from vulnerability data.
- Primary languages: Python
- Tags: reporting, security-analysis

### SideScripts
- Visibility: Private
- Summary: Utility scripts
- Description: Helper scripts supporting ingestion, normalization, and CI logic.
- Primary languages: Python
- Tags: utilities, scripts

### .github
- Visibility: Public
- Summary: Organization-level GitHub configuration
- Description: Shared configuration and documentation for the organization.
- Primary languages: N/A
- Tags: infrastructure, github-config


---



# GargoyleOffGrid — Identity Version (Expressive)

## Tagline
No internet? Cool. Still operational.

Collection of open-source projects for explorers, campers & builders — anyone interested in resilience, self-sufficiency & systems that endure - on/off the grid


## Summary
A resilience-focused ecosystem for off-grid life, local-first systems, and “keep going anyway” engineering — equal parts survival library, civic tooling, and rugged electronics.

## Description
GargoyleOffGrid is a collection of projects built for people who don’t want their knowledge, plans, or critical systems to depend on a stable grid, stable internet, or stable society. It’s not “prepper cosplay.” It’s practical engineering and structured knowledge, designed to keep working when modern convenience fails.

This org treats resilience like a real systems problem:
- information must be portable, searchable, and offline
- tools must be buildable and repairable
- sensors and alerts should work without cloud dependencies
- community operations (food/water/infrastructure) need simple ledgers and repeatable manuals

Each repo is a module: some are libraries of know-how, some are offline portals, some are embedded builds, and some are “here’s how to keep your stuff alive” documentation. Together they form a living kit for people who want competence, not vibes.

## Repositories

### Offline
- Visibility: Public
- Summary: Offline-first toolkit — inventory, checklists, maps, and guides that still work when the grid doesn’t.
- Description: A local-first “Offline Toolkit” web app (Vite-based) that can run without connectivity, intended for field use and practical operations.
- Primary languages: JavaScript, HTML, CSS
- Tags: javascript, maps, offline-capable, inventory-management-system

### Bastion
- Visibility: Private
- Summary: Live-well-off-grid reference library
- Description: A curated library on living well off the grid — schematics, repair notes, survival systems, small comforts, and everyday engineering that works without electricity or Wi-Fi.
- Primary languages: N/A
- Tags: offgrid, resilience, manuals, reference

### RebuildOS
- Visibility: Private
- Summary: Civic knowledge + coordination framework for small communities
- Description: A modular civic knowledge and coordination framework that operates with or without internet access: governance, recordkeeping, local production, shared ledgers, and offline-first dashboards for managing water, food, and essential infrastructure.
- Primary languages: Python
- Tags: python, infrastructure, education, raspberry-pi, arduino, homestead, civic-tech, knowledge-base, resilience, manuals, offgrid, data-ledger-technology, sustainability, community-tools

### PocketGargoyle
- Visibility: Private
- Summary: Personal offline archive
- Description: A portable offline archive designed to live on a Pi/SD card: local portal pages plus structured docs (cooking, first aid, gardening, repairs, tools, PDFs), with options for indexing and offline browsing.
- Primary languages: N/A
- Tags: offline, archive, portability, local-first

### FoodGuardian
- Visibility: Private
- Summary: Offline-ready survival nutrition library
- Description: A modular nutrition library for off-grid and crisis conditions, focused on calorie efficiency, foraging safety, preservation, and emergency feeding protocols.
- Primary languages: N/A
- Tags: nutrition, offgrid, foraging, preservation, emergency

### Fortress
- Visibility: Private
- Summary: Blueprints + low-tech engineering archive
- Description: The build-and-repair workshop of the GargoyleOffGrid network — reproducible builds and low-tech engineering systems, structured as practical documentation.
- Primary languages: N/A
- Tags: blueprints, build-systems, low-tech, resilience

### Gargoyle
- Visibility: Private
- Summary: Off-grid sensors and monitoring systems
- Description: Practical sensor and control projects (Pi/Arduino/ESP32 + simple circuits) for water safety, motion/perimeter alerts, lighting control, and field-ready monitoring without Wi-Fi or mains power.
- Primary languages: C++, Python
- Tags: python, raspberry-pi, arduino, cpp, esp32, motion-detection, safety, control-systems, sensors, tinkercad, offgrid, lighting-controller

### SmallScripts
- Visibility: Private
- Summary: Utility scripts supporting the ecosystem
- Description: Small helper scripts and scratch tooling used across GargoyleOffGrid projects.
- Primary languages: Python
- Tags: utilities, scripts

### .github
- Visibility: Private
- Summary: Organization-level GitHub configuration
- Description: Shared configuration files and defaults for repositories within the GargoyleOffGrid organization.
- Primary languages: N/A
- Tags: infrastructure, github-config


---

# GargoyleOffGrid — Normalized Version (Professional)

## Tagline
Offline-first tooling and documentation for resilience engineering.

Collection of open-source projects for explorers, campers & builders — anyone interested in resilience, self-sufficiency & systems that endure - on/off the grid


## Summary
A modular open-source ecosystem for local-first knowledge, off-grid operations, and embedded monitoring — designed to function without reliable internet or power.

## Description
GargoyleOffGrid is a collection of repositories focused on resilience and offline-capable systems. The organization combines:
- offline-first web tools (inventory, checklists, map-based references)
- structured documentation libraries (repair, survival, nutrition, preparedness)
- lightweight civic coordination tooling (manuals, ledgers, dashboards)
- embedded and small-scale hardware projects (sensors, alerts, control systems)

The emphasis is on reproducible builds, clear documentation, and practical use. Projects are structured as interoperable modules so components can be adopted independently or combined into a broader offline operations toolkit.

## Repositories

### Offline
- Visibility: Public
- Scope: Offline-capable web toolkit for inventory, checklists, and map-backed reference material.
- Stack: JavaScript (Vite), HTML, CSS
- Topics: javascript, maps, offline-capable, inventory-management-system

### Bastion
- Visibility: Private
- Scope: Documentation library for off-grid living, including schematics, repair notes, and survival systems.
- Stack: Documentation-first (Markdown/structured folders)

### RebuildOS
- Visibility: Private
- Scope: Offline-capable civic knowledge and coordination framework supporting governance, recordkeeping, shared ledgers, and operational dashboards.
- Stack: Python + structured data/docs
- Topics: python, infrastructure, education, raspberry-pi, arduino, homestead, civic-tech, knowledge-base, resilience, manuals, offgrid, data-ledger-technology, sustainability, community-tools

### PocketGargoyle
- Visibility: Private
- Scope: Portable offline archive format for Pi/SD deployments, with a local portal and structured docs.
- Stack: Documentation + static portal structure

### FoodGuardian
- Visibility: Private
- Scope: Offline nutrition reference for crisis/off-grid conditions: calorie planning, preservation, foraging safety, and refeeding protocols.
- Stack: Documentation + structured data (as applicable)

### Fortress
- Visibility: Private
- Scope: Blueprint and build documentation repository for low-tech engineering systems.
- Stack: Documentation-first (Markdown/structured folders)

### Gargoyle
- Visibility: Private
- Scope: Embedded/sensor projects for off-grid monitoring and control (water safety, perimeter/motion detection, lighting control).
- Stack: C++ and Python (Pi/Arduino/ESP32)
- Topics: python, raspberry-pi, arduino, cpp, esp32, motion-detection, safety, control-systems, sensors, tinkercad, offgrid, lighting-controller

### SmallScripts
- Visibility: Private
- Scope: Utility scripts used across the organization for support tasks and experimentation.
- Stack: Python

### .github
- Visibility: Private
- Scope: Organization-level GitHub defaults and configuration.
- Stack: N/A


---

# GargoyleOffGrid

## Identity Version

### Tagline
No internet. No panic. Systems that endure.

### Summary
A survival-grade, offline-first ecosystem for people who assume infrastructure will fail — and plan accordingly.

### Description
GargoyleOffGrid is built on a simple premise: modern life is fragile, and resilience is a systems problem, not a personality trait.

This organization is not about cosplay survivalism or end-of-the-world fantasies. It is about calm redundancy, local control, and tools that continue to work when the grid, cloud services, or institutions disappear — temporarily or permanently.

The projects here focus on offline knowledge, low-tech engineering, embedded sensing, nutrition planning, and civic coordination that can be understood, repaired, and operated by a single competent person or a small group. Everything assumes constrained conditions: limited power, limited bandwidth, limited trust, and no external dependencies.

GargoyleOffGrid is deliberately unglamorous. It values boring systems that work, documentation that survives time, and architectures that degrade gracefully instead of collapsing. If something requires an account, a subscription, or continuous connectivity, it does not belong here.

This is a long-memory project — designed for people who expect to still be solving problems when the lights go out.

---

## Normalized Version

### Tagline
Offline-first tools for resilience, self-sufficiency, and local systems.

### Summary
An open-source collection of offline-capable software, documentation, and embedded systems focused on resilience, self-sufficiency, and long-term maintainability under constrained conditions.

### Description
GargoyleOffGrid is an open-source organization focused on building offline-first tools and documentation for environments where connectivity, centralized infrastructure, or continuous power cannot be assumed.

Projects within the organization span offline knowledge archives, low-tech engineering manuals, embedded sensor systems, nutrition planning, and small-scale civic coordination frameworks. The emphasis is on simplicity, reproducibility, and local control rather than cloud-dependent or service-oriented architectures.

All systems are designed to function without accounts, external APIs, or always-on connectivity, making them suitable for field use, remote locations, emergency preparedness, and long-term resilience planning.

---

## Repositories

### Offline
- Visibility: Public
- Summary: Offline-first personal toolkit for inventory, maps, and guides
- Description: A static, offline-capable toolkit providing inventory tracking, checklists, maps, and reference material that runs locally in a browser and functions without internet access.
- Primary languages: JavaScript, HTML, CSS
- Tags: offline-first, inventory, maps, resilience, javascript

### Bastion
- Visibility: Private
- Summary: Off-grid living and survival knowledge library
- Description: A curated archive of schematics, repair notes, survival systems, and practical documentation designed to remain usable without electricity or Wi-Fi.
- Primary languages: Markdown
- Tags: offgrid, documentation, repair, survival, manuals

### RebuildOS
- Visibility: Private
- Summary: Offline civic knowledge and coordination framework
- Description: A modular framework for small communities to manage governance, recordkeeping, and local production using offline-first documentation, ledgers, and dashboards.
- Primary languages: Markdown, CSV, Python
- Tags: civic-tech, community-tools, governance, offgrid

### PocketGargoyle
- Visibility: Private
- Summary: Personal offline archive system
- Description: A portable offline archive designed to run on small hardware (e.g., Raspberry Pi) and serve local HTML, Markdown, and PDF content without cloud services.
- Primary languages: Markdown, HTML
- Tags: offline-archive, personal-knowledge-base, raspberry-pi

### FoodGuardian
- Visibility: Private
- Summary: Offline survival nutrition and feeding library
- Description: A structured nutrition system focused on calorie efficiency, foraging safety, food preservation, and emergency feeding protocols, designed for offline access.
- Primary languages: Markdown, CSV, Python
- Tags: nutrition, food-security, foraging, emergency-prep, offgrid

### Fortress
- Visibility: Private
- Summary: Reproducible low-tech engineering blueprints
- Description: An archive of reproducible builds, storage systems, power layouts, and synchronization strategies for long-term resilience and maintainability.
- Primary languages: Markdown
- Tags: engineering, blueprints, low-tech, resilience

### Gargoyle
- Visibility: Private
- Summary: Off-grid sensing and monitoring systems
- Description: Embedded sensor and monitoring projects using Raspberry Pi, Arduino, ESP32, or simple circuits to provide environmental awareness without Wi-Fi or mains power.
- Primary languages: C++, Python
- Tags: embedded-systems, esp32, raspberry-pi, sensors, offgrid

### SmallScripts
- Visibility: Private
- Summary: Utility scripts for offline and resilience tooling
- Description: Small Python utilities supporting inventory management, automation, and data handling across the GargoyleOffGrid ecosystem.
- Primary languages: Python
- Tags: utilities, automation, scripts

### .github
- Visibility: Private
- Summary: Organization-level GitHub configuration
- Description: Shared GitHub workflows and configuration used across the GargoyleOffGrid organization.
- Primary languages: N/A
- Tags: infrastructure, github-config


---


# Hypercalculia

## Identity Version

### Tagline
A high-intensity, offline-first computation engine for real life.

### Summary
Hypercalculia is not a calculator. It is a private, deterministic thinking machine for people who build, plan, grow, and maintain real systems.

### Description
Hypercalculia exists because spreadsheets lie, cloud tools forget, and most math software assumes abstract users instead of physical reality.

This organization is centered on offline computation, human-readable mathematics, and transparent logic. It is designed for situations where numbers are tied directly to dirt, water, weight, heat, volume, material strength, time, and hard limits.

Hypercalculia treats mathematics as infrastructure rather than academia. The goal is to let people reason clearly about farms, buildings, systems, inventory, food, land, and logistics without sending data anywhere or hiding logic behind black boxes.

Everything runs locally. Nothing phones home. Results are deterministic, inspectable, and explainable step by step.

This organization also serves as a curated computational substrate. Trusted math libraries, algorithm collections, and scientific tooling are intentionally pulled together into a single offline-capable ecosystem.

### Philosophy
Hypercalculia is built for people solving real problems in the physical world. It supports homesteading and land planning, engineering fundamentals, carpentry and construction, water systems such as cisterns and pumps, agriculture and animal systems, greenhouse and HVAC reasoning, cooking and food scaling, inventory management, rationing, logistics, and teaching mathematics using real context.

The system is intentionally offline, private, fast, deterministic, and extensible. There is no artificial intelligence, no cloud dependency, and no hidden logic.

### Repositories

### hypercalculia
Visibility is private.  
This repository contains the core offline math and planning engine.  
It is a modular general-purpose computation system covering algebra, calculus, linear algebra, statistics, geometry, optimization, engineering math, agriculture math, fluid systems, thermodynamics, and practical unit conversions.  
Every calculation is designed to explain itself in human terms.  
Primary language is Python.

### .github
Visibility is public.  
This repository contains organization-level documentation, contribution standards, and shared configuration for the Hypercalculia organization.

### libqalculate
Visibility is public and forked.  
This repository provides a mature symbolic and numeric calculator engine used as a reference and dependency for expression parsing and evaluation.  
Primary language is C++.

### qalc
Visibility is public and forked.  
This repository provides the command-line interface for libqalculate and is used for testing and behavioral comparison.  
Primary language is C++.

### qalculate-gtk
Visibility is public and forked.  
This repository provides a GTK-based graphical interface for Qalculate and is maintained as a usability and interaction reference.  
Primary language is C++.

### qalculate-qt
Visibility is public and forked.  
This repository provides a Qt-based graphical interface for Qalculate and is used for interface comparison and testing.  
Primary language is C++.

### numpy
Visibility is public and forked.  
This repository provides foundational numerical computing capabilities used as a trusted backend.  
Primary language is Python.

### scipy
Visibility is public and forked.  
This repository provides numerical algorithms for optimization, statistics, integration, and scientific computation.  
Primary language is Python.

### sympy
Visibility is public and forked.  
This repository provides symbolic mathematics capabilities for algebraic manipulation and verification.  
Primary language is Python.

### jax
Visibility is public and forked.  
This repository provides advanced numerical computation techniques that are evaluated carefully for deterministic applicability.  
Primary language is Python.

### OpenFOAM-dev
Visibility is public and forked.  
This repository provides computational fluid dynamics reference material for physical modeling and simulation.  
Primary language is C++.

### Rust
Visibility is public and forked.  
This repository contains algorithm implementations in Rust for cross-language comparison and reference.

### Java
Visibility is public and forked.  
This repository contains algorithm implementations in Java for educational and comparative purposes.

### C
Visibility is public and forked.  
This repository contains low-level algorithm implementations focused on performance and clarity.

# Hypercalculia

## Normalized Version

### Tagline
Offline-first computation engine for applied mathematics and planning.

### Summary
Hypercalculia is a private, deterministic computation platform designed for real-world planning, engineering, agriculture, and education.

### Description
Hypercalculia is an offline-first math and planning engine focused on transparency, reproducibility, and practical applicability. Unlike cloud-based or opaque tools, it emphasizes deterministic results, local execution, and human-readable logic.

The organization combines a custom computation core with carefully curated scientific and mathematical libraries to support applied domains such as engineering, construction, agriculture, logistics, and education.

Hypercalculia prioritizes reliability, explainability, extensibility, and strict data privacy.

### Core Principles
The platform operates entirely offline. Results are deterministic and reproducible. Calculations are transparent and inspectable. Explanations are designed to be human-readable. The architecture is modular and extensible. There are no cloud dependencies.

### Repositories

### hypercalculia
Visibility is private.  
This repository contains the core modular computation engine supporting applied mathematics, engineering calculations, agriculture planning, fluid systems, thermodynamics, geometry, statistics, and unit conversions.  
Primary language is Python.

### .github
Visibility is public.  
This repository contains organization-level configuration and documentation.

### libqalculate
Visibility is public and forked.  
This repository provides symbolic and numeric calculator functionality used for evaluation and reference.  
Primary language is C++.

### qalc
Visibility is public and forked.  
This repository provides a command-line interface for mathematical evaluation.  
Primary language is C++.

### qalculate-gtk
Visibility is public and forked.  
This repository provides a GTK-based graphical interface for calculator functionality.  
Primary language is C++.

### qalculate-qt
Visibility is public and forked.  
This repository provides a Qt-based graphical interface for calculator functionality.  
Primary language is C++.

### numpy
Visibility is public and forked.  
This repository provides numerical computing foundations.  
Primary language is Python.

### scipy
Visibility is public and forked.  
This repository provides scientific algorithms and numerical methods.  
Primary language is Python.

### sympy
Visibility is public and forked.  
This repository provides symbolic mathematics capabilities.  
Primary language is Python.

### jax
Visibility is public and forked.  
This repository provides advanced numerical computation techniques evaluated for applicability.  
Primary language is Python.

### OpenFOAM-dev
Visibility is public and forked.  
This repository provides computational fluid dynamics reference material.  
Primary language is C++.

### Rust Java C repositories
Visibility is public and forked.  
These repositories provide algorithm implementations across multiple languages for reference and education.



---


# Hypercalculia

## Identity Version

### Tagline
A high-intensity, robust offline computation engine.

### Summary
Hypercalculia is not a calculator. It is a private, deterministic thinking machine for people who build, plan, grow, and maintain real systems.

### Description
Hypercalculia exists because spreadsheets lie, cloud tools forget, and most math software assumes abstract users instead of physical reality.

This organization is centered on offline computation, human-readable mathematics, and transparent logic. It is designed for situations where numbers are tied directly to dirt, water, weight, heat, volume, material strength, time, and limits.

Hypercalculia treats mathematics as infrastructure rather than academia. The goal is to let people reason clearly about farms, buildings, systems, inventory, food, land, and logistics without sending data anywhere or hiding logic behind black boxes.

Everything runs locally. Nothing phones home. Results are deterministic, inspectable, and explainable step by step.

This organization also serves as a curated computational substrate. Trusted math libraries, algorithm collections, and scientific tooling are intentionally pulled together into a single offline-capable ecosystem.

### Philosophy
Hypercalculia is built for people solving real problems in the physical world. It supports homesteading and land planning, engineering fundamentals, carpentry and construction, water systems such as cisterns and pumps, agriculture and animal systems, greenhouse and HVAC reasoning, cooking and food scaling, inventory management, rationing, logistics, and teaching mathematics using real context.

The system is intentionally offline, private, fast, deterministic, and extensible. There is no artificial intelligence, no cloud dependency, and no hidden logic.

### Repositories

### hypercalculia
Visibility is private.  
This repository contains the core offline math and planning engine.  
It is a modular general-purpose computation system covering algebra, calculus, linear algebra, statistics, geometry, optimization, engineering math, agriculture math, fluid systems, thermodynamics, and practical unit conversions.  
Every calculation is designed to explain itself in human terms.  
Primary language is Python.

### .github
Visibility is public.  
This repository contains organization-level documentation, contribution standards, and shared configuration for the Hypercalculia organization.

### libqalculate
Visibility is public and forked.  
This repository provides a mature symbolic and numeric calculator engine used as a reference and dependency for expression parsing and evaluation.  
Primary language is C++.

### qalc
Visibility is public and forked.  
This repository provides the command-line interface for libqalculate and is used for testing and behavioral comparison.  
Primary language is C++.

### qalculate-gtk
Visibility is public and forked.  
This repository provides a GTK-based graphical interface for Qalculate and is maintained as a usability and interaction reference.  
Primary language is C++.

### qalculate-qt
Visibility is public and forked.  
This repository provides a Qt-based graphical interface for Qalculate and is used for interface comparison and testing.  
Primary language is C++.

### numpy
Visibility is public and forked.  
This repository provides foundational numerical computing capabilities used as a trusted backend.  
Primary language is Python.

### scipy
Visibility is public and forked.  
This repository provides numerical algorithms for optimization, statistics, integration, and scientific computation.  
Primary language is Python.

### sympy
Visibility is public and forked.  
This repository provides symbolic mathematics capabilities for algebraic manipulation and verification.  
Primary language is Python.

### jax
Visibility is public and forked.  
This repository provides advanced numerical computation techniques that are evaluated carefully for deterministic applicability.  
Primary language is Python.

### OpenFOAM-dev
Visibility is public and forked.  
This repository provides computational fluid dynamics reference material for physical modeling and simulation.  
Primary language is C++.

### Rust
Visibility is public and forked.  
This repository contains algorithm implementations in Rust for cross-language comparison and reference.

### Java
Visibility is public and forked.  
This repository contains algorithm implementations in Java for educational and comparative purposes.

### C
Visibility is public and forked.  
This repository contains low-level algorithm implementations focused on performance and clarity.

# Hypercalculia

## Normalized Version

### Tagline
A high-intensity, robust offline computation engine.

### Summary
Hypercalculia is a private, deterministic computation platform designed for real-world planning, engineering, agriculture, and education.

### Description
Hypercalculia is an offline-first math and planning engine focused on transparency, reproducibility, and practical applicability. Unlike cloud-based or opaque tools, it emphasizes deterministic results, local execution, and human-readable logic.

The organization combines a custom computation core with carefully curated scientific and mathematical libraries to support applied domains such as engineering, construction, agriculture, logistics, and education.

Hypercalculia prioritizes reliability, explainability, extensibility, and strict data privacy.

### Core Principles
The platform operates entirely offline. Results are deterministic and reproducible. Calculations are transparent and inspectable. Explanations are designed to be human-readable. The architecture is modular and extensible. There are no cloud dependencies.

### Repositories

### hypercalculia
Visibility is private.  
This repository contains the core modular computation engine supporting applied mathematics, engineering calculations, agriculture planning, fluid systems, thermodynamics, geometry, statistics, and unit conversions.  
Primary language is Python.

### .github
Visibility is public.  
This repository contains organization-level configuration and documentation.

### libqalculate
Visibility is public and forked.  
This repository provides symbolic and numeric calculator functionality used for evaluation and reference.  
Primary language is C++.

### qalc
Visibility is public and forked.  
This repository provides a command-line interface for mathematical evaluation.  
Primary language is C++.

### qalculate-gtk
Visibility is public and forked.  
This repository provides a GTK-based graphical interface for calculator functionality.  
Primary language is C++.

### qalculate-qt
Visibility is public and forked.  
This repository provides a Qt-based graphical interface for calculator functionality.  
Primary language is C++.

### numpy
Visibility is public and forked.  
This repository provides numerical computing foundations.  
Primary language is Python.

### scipy
Visibility is public and forked.  
This repository provides scientific algorithms and numerical methods.  
Primary language is Python.

### sympy
Visibility is public and forked.  
This repository provides symbolic mathematics capabilities.  
Primary language is Python.

### jax
Visibility is public and forked.  
This repository provides advanced numerical computation techniques evaluated for applicability.  
Primary language is Python.

### OpenFOAM-dev
Visibility is public and forked.  
This repository provides computational fluid dynamics reference material.  
Primary language is C++.

### Rust Java C repositories
Visibility is public and forked.  
These repositories provide algorithm implementations across multiple languages for reference and education.



---


# LORIE

## Identity Version

### Tagline
Local Offline Reasoning Intelligence Engine.

### Summary
LORIE is a personal, offline reasoning system designed to think with you when the cloud is unavailable or undesirable.

### Description
LORIE exists to make deep reasoning, retrieval, and synthesis possible without relying on external services. It runs entirely on local hardware and is built to remain usable during outages, travel, camping, or emergency conditions.

The system combines a curated personal knowledge corpus with embeddings, domain-aware routing, and tool modules to generate detailed, cross-domain answers. It is designed to reason across history, psychology, sociology, medicine and first aid, coding and technology, mathematics, mechanics, animals and husbandry, land and gardening, DIY, engineering basics, ancient history, anthropology, forensics, and related domains.

LORIE treats reasoning as infrastructure. Knowledge is ingested locally from books, PDFs, notes, images using OCR, and transcripts. Retrieval is paired with deductive and cross-domain reasoning rather than simple search. A verification layer checks for internal consistency and contradictions. A persona layer adapts tone, clarity, and reasoning style to the user.

Everything runs locally. No cloud calls are required. Models are loaded from local GGUF files, Ollama, or other quantized formats. The system is designed to remain fast and responsive on consumer-grade hardware.

### Core Intent
LORIE is meant to be a long-term personal knowledge system. It is expandable, domain-aware, and designed to grow with the user over years rather than sessions.

### Repositories

### lorie-core
Visibility is private.  
This repository contains the core reasoning engine, retrieval logic, domain routing, metadata scoring, verification layer, and model orchestration that power LORIE.

### misc
Visibility is private.  
This repository contains experimental ideas, future components, and planned extensions for the LORIE system.

### .github
Visibility is public.  
This repository contains organization-level configuration and documentation.

## Normalized Version

### Tagline
Local offline reasoning and retrieval engine.

### Summary
LORIE is a fully offline reasoning system that provides retrieval-augmented, cross-domain answers using local models and documents.

### Description
LORIE is a personal offline LLM-based reasoning platform designed to operate entirely on local hardware. It combines retrieval-augmented generation, domain-aware routing, and verification layers to support structured reasoning across technical and non-technical domains.

The system supports ingestion of local documents including books, PDFs, notes, images through OCR, and transcripts. Queries are routed through domain-specific logic and scored using metadata weighting and relevance ranking. Outputs are checked for consistency and contradiction before being returned.

LORIE supports local model loading using GGUF files, Ollama, and other quantized model formats. A PyQt6 desktop interface is paired with a FastAPI backend to maintain a clean separation between user interface and core logic.

### Core Capabilities
LORIE provides offline reasoning comparable to cloud-based assistants. It remains usable without internet access. It is designed to be fast on consumer hardware and expandable as a long-term personal knowledge system.

### Repositories

### lorie-core
Visibility is private.  
This repository contains the core reasoning, retrieval, domain routing, verification, and model management logic.

### misc
Visibility is private.  
This repository contains auxiliary components, experimental features, and future development material.

### .github
Visibility is public.  
This repository contains organization-level configuration and documentation.


---

# LORIE

## Identity Version

### Tagline
Local Offline Reasoning Intelligence Engine.

### Summary
LORIE is a personal offline LLM system. It is a unified reasoning and retrieval engine that runs entirely on local hardware.

### Description
LORIE is designed to provide deep reasoning without relying on the cloud. It uses a curated personal knowledge corpus, embeddings, domain routing, and tool modules to generate detailed, cross-domain answers entirely offline.

The system is built to reason across history, psychology, sociology, medicine and first aid, coding and technology, mathematics, mechanics, animals and husbandry, land and gardening, DIY, engineering basics, ancient history, anthropology, forensics, and related domains.

LORIE combines retrieval-augmented generation using local documents with deductive and cross-domain reasoning. Queries are processed through domain-aware routing rather than generic search. Metadata scoring and relevance weighting are applied to prioritize trustworthy and contextually appropriate sources.

A verification layer performs internal consistency checks and contradiction filtering before responses are returned. A persona layer adapts tone, clarity, and reasoning style to the user rather than enforcing a generic assistant voice.

All models are loaded locally. Supported formats include GGUF, Ollama, and other quantized LLMs. The system uses a PyQt6 desktop interface paired with a FastAPI backend to maintain a clean separation between user interface and core reasoning logic.

LORIE is designed to remain functional during outages, travel, camping, or emergency conditions. It is intended to serve as a long-term personal knowledge system rather than a session-based assistant.

### Goals
The primary goal of LORIE is to provide ChatGPT-like reasoning fully offline. It is designed to remain fast and responsive on consumer-grade hardware while supporting continuous expansion of the knowledge corpus. The system supports ingestion of books, PDFs, notes, images using OCR, and transcripts.

### Status
LORIE is in active development. The current baseline release is version 0.1.0.

## Normalized Version

### Tagline
Local offline reasoning and retrieval engine.

### Summary
LORIE is a fully offline reasoning system that provides retrieval-augmented, cross-domain answers using local models and documents.

### Description
LORIE is a personal offline LLM-based reasoning platform designed to operate entirely on local hardware. It integrates retrieval-augmented generation, domain-aware routing, metadata scoring, and verification layers to support structured reasoning across technical and non-technical domains.

The system supports ingestion of local content including books, PDFs, notes, images through OCR, and transcripts. Queries are routed through domain-specific logic rather than generic search. Outputs are evaluated for internal consistency and contradictions before being returned.

LORIE supports local model loading using GGUF files, Ollama, and other quantized model formats. A PyQt6 desktop interface is paired with a FastAPI backend to separate user interface concerns from reasoning and retrieval logic.

### Objectives
LORIE is designed to provide reliable offline reasoning comparable to cloud-based assistants. It prioritizes local execution, privacy, extensibility, and long-term usability on consumer-grade hardware.

### Development Status
The project is under active development. The current baseline release is version 0.1.0.

---



