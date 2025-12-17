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


# AlexandriaArchiveAPI

## Summary
Code-first historical archive focused on ancient and medieval history through structured data, documentation, and APIs.

## Description
AlexandriaArchiveAPI is a modular historical systems project designed to preserve and analyze how civilizations lived, fought, built, and remembered. It treats history as structured data: battles, technologies, people, timelines, and cultural artifacts. The organization prioritizes reproducibility, datasets, schemas, and APIs over narrative publishing.

## Repositories

### WarChest
- Visibility: Public
- Summary: Codex of battles and warfare
- Description: Markdown-first archive of wars and battles from antiquity onward, supported by structured datasets and consistent templates.
- Primary languages: Markdown, Python
- Tags: history, warfare, battles, datasets, military-history

### EnginesOfWar
- Visibility: Public
- Summary: Catalogue of wartime technological advances
- Description: Code-first dataset and API covering weapons, armor, siege engines, logistics, and doctrine. Includes CSV data, SQLite schema, FastAPI service, and analytical examples.
- Primary languages: Python
- Tags: history, technology, warfare, sqlite, fastapi, datasets

### AlexandrianChronicles-
- Visibility: Private
- Summary: Historical timelines and evolving records
- Description: Timelines, fragments, reflections, and internal historical notes forming the long-term memory of the archive.
- Primary languages: Markdown
- Tags: timelines, chronicles, history

### ThoseWhoRarelyMakeHistory
- Visibility: Private
- Summary: Social history of ordinary people
- Description: Documents the lives of non-elite historical figures such as artisans, laborers, healers, and builders whose contributions shaped civilizations.
- Primary languages: Markdown
- Tags: social-history, culture, everyday-life

### FacesOfHistory
- Visibility: Private
- Summary: Profiles of historical individuals
- Description: Curated records of thinkers, rulers, innovators, and makers who influenced historical events and ideas.
- Primary languages: Markdown
- Tags: biography, history, people

### ThatsWhatTheySaid
- Visibility: Private
- Summary: Historical quotations and excerpts
- Description: Collection of quotations, war cries, excerpts, and notable statements from ancient to medieval sources.
- Primary languages: Markdown
- Tags: quotes, philosophy, rhetoric, primary-sources

### BanquetScrolls
- Visibility: Private
- Summary: Historical food and recipes
- Description: Recipes and food practices from antiquity to the medieval period, treated as cultural and historical evidence.
- Primary languages: Markdown
- Tags: food-history, recipes, culture





# ares-assist

## Summary
Defense, security, and resilience tooling intended to support and extend the LORIE ecosystem.

## Description
ares-assist is an early-stage, evolving organization focused on defensive systems: security tooling, resilience patterns, and protective infrastructure. It is conceptually aligned with LORIE as the “defense layer” — concerned with safeguarding systems, data, and operations rather than user-facing assistance.

The scope is intentionally not finalized. Current work emphasizes foundational structure, knowledge organization, and exploratory prototypes rather than a fixed product surface.

This org is expected to evolve alongside LORIE as its security, monitoring, and defensive counterpart.

## Status
In development. Architecture and scope are not yet locked.

## Repositories

### ares
- Visibility: Private
- Summary: Core experimental repository for ares-assist
- Description: Primary sandbox for exploring defensive tooling, security concepts, and system protection patterns. Serves as a staging ground for ideas that may later be split into dedicated projects.
- Primary languages: Not finalized
- Tags: security, defense, systems, experimentation

### ares-knowledge-os
- Visibility: Private
- Summary: Knowledge base for defensive systems and security concepts
- Description: Structured notes, references, and conceptual documentation related to security, resilience, threat modeling, and defensive architecture. Intended to function as an internal knowledge operating system.
- Primary languages: Markdown
- Tags: security, knowledge-base, threat-modeling, resilience

### .github
- Visibility: Public
- Summary: Organization-level GitHub configuration
- Description: Shared configuration files and defaults for repositories within the ares-assist organization.
- Primary languages: N/A
- Tags: infrastructure, github-config

## Relationship to Other Orgs
- Designed to complement LORIE as a defensive and protective layer
- May later integrate with security-focused orgs or tools (e.g., scanning, monitoring, policy enforcement)
- Not intended as a standalone consumer-facing product

## Notes
- Naming, scope, and boundaries are subject to change
- Future repositories may be split by function (e.g., scanning, policy, monitoring)
- Public exposure will be limited until the architecture stabilizes





# CaregiverQR

## Summary
Lightweight QR-based care tracking system for caregivers, facilities, and families.

## Description
CaregiverQR is a simple, transparent alternative to complex EMR systems. It uses QR codes and lightweight web tooling to log meals, medications, and daily activities with quick scans. The system is designed for clarity and accountability rather than regulatory-heavy medical record keeping.

CaregiverQR prioritizes ease of use, low infrastructure requirements, and minimal sensitive data storage. It is intentionally not a full HIPAA EMR and is best suited for home care, assisted living, family caregiving, and low-resource environments.

## Repositories

### caregiver-qr
- Visibility: Private
- Summary: Core QR-based care tracking application
- Description: Primary application for generating QR codes and logging care events such as meals, medications, and daily activities. Supports timestamped entries and caregiver attribution.
- Primary languages: HTML, Python
- Tags: caregiver-application, qr-codes, care-tracking, accountability

### CareSheets
- Visibility: Private
- Summary: Template-based QR and care sheet generator
- Description: Generates printable care sheets and QR codes used by the CaregiverQR system. Designed for rapid setup and non-technical caregivers.
- Primary languages: Not finalized
- Tags: care-templates, qr-codes, caregiving

### SideScripts
- Visibility: Private
- Summary: Utility and support scripts
- Description: Small helper scripts used for data handling, automation, and experimentation related to the CaregiverQR ecosystem.
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
- Backend: Google Apps Script and Google Sheets for automation and validation
- Visualization: Optional Looker Studio dashboards for reporting and trend analysis

## Design Principles
- Minimal PHI storage
- Fast, low-friction logging
- Offline- and mobile-friendly usage
- Transparency for families and administrators
- Low cost and low infrastructure overhead

## Intended Use
- Home caregiving
- Assisted living and small facilities
- Family care coordination
- Situations where full EMR systems are impractical

## Notes
- Not a full HIPAA EMR
- Designed for accountability and visibility, not clinical diagnosis
- Scope favors simplicity over feature completeness





# CatholicMedusa

## Summary
Modular ecosystem for snake husbandry, genetics, and automation.

## Description
CatholicMedusa is a connected systems project focused on snake husbandry, breeding genetics, and enclosure automation. It combines biological modeling, data tracking, and engineering discipline into a cohesive toolkit designed for long-term collection management.

The organization is structured as an ecosystem rather than a single application. Each repository represents a distinct layer—data collection, genetic logic, visualization, or sensing—designed to interoperate through shared models and APIs. The project emphasizes correctness, extensibility, and security-conscious design over consumer polish.

## Repositories

### SerpentTracker
- Visibility: Private
- Summary: Husbandry and breeding log for snakes
- Description: Tracks feedings, sheds, pairings, clutches, and related lifecycle events for individual animals. Designed as the primary historical record for collections.
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
- Description: Calculates ideal prey size from snake weight, recommends feeding intervals, tracks growth and refusals, predicts when to size up, and generates vendor order plans. Powered by Python and SQLite with a modular core.
- Primary languages: Python
- Tags: feeding, husbandry, nutrition, sqlite, cli

### MedusasGaze
- Visibility: Private
- Summary: Vision and sensor toolkit for enclosure monitoring
- Description: Early-stage system for incubator and enclosure monitoring using cameras and sensors. Initial focus is image logging and environmental snapshots, with planned expansion into ML-based morph recognition and automated alerts.
- Primary languages: Python
- Tags: computer-vision, sensors, automation, monitoring

### ClutchKeeper
- Visibility: Private
- Summary: Clutch and hatch outcome analytics dashboard
- Description: Visualization and reporting tools for clutch data, hatch rates, and breeding outcomes, providing high-level insight into reproductive success and trends.
- Primary languages: Python
- Tags: breeding, analytics, visualization, clutches

### HydraHub
- Visibility: Private
- Summary: Integration and API layer for CatholicMedusa
- Description: Connects trackers, genetics, and sensor systems through shared models and APIs. Intended to unify data flow between SerpentTracker and GorgonGenetics and future components.
- Primary languages: Python
- Tags: api, integration, data-models

### MedusaCore
- Visibility: Private
- Summary: Shared core models and utilities
- Description: Common domain models and utilities used across CatholicMedusa projects, including representations for snakes, morphs, genetics, and logs.
- Primary languages: Java
- Tags: core-library, shared-models

### SideScripts
- Visibility: Private
- Summary: Utility and support scripts
- Description: Helper scripts for data cleanup, migration, scraping, and experimentation across the ecosystem.
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
- MedusasGaze: Sensor layer (vision, monitoring, automation)
- HydraHub: Integration layer (shared APIs and data flow)
- MedusaCore: Shared domain models

## Notes
- Designed for serious keepers and long-term collections
- Emphasizes correctness and extensibility over UI polish
- Architecture supports future automation and ML expansion



