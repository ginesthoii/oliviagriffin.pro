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

---

# mini-farm-animals

## Identity Version

### Tagline
Animal husbandry as a system, not a hobby.

### Summary
mini-farm-animals is a structured husbandry knowledge system for every animal on a future small-scale, mixed-use farm.

### Description
mini-farm-animals exists to document animal care as applied biology, logistics, and infrastructure rather than sentiment or folklore.

Each repository represents a single animal category and serves as a living husbandry manual. The focus is on biological requirements, housing, feed, health, reproduction, labor load, seasonal planning, and integration into a larger farm system.

The goal is not maximal production or aesthetic farming. The goal is survivable, repeatable, low-drama animal systems that align with land limits, climate, labor capacity, and long-term sustainability.

This organization treats animals as real biological systems with constraints. Emotional attachment does not override biology, but good husbandry produces calm, healthy animals and reduces human stress.

All information is written to support offline use, long-term reference, and eventual integration with planning and automation tools.

### Philosophy
Animals are infrastructure.
Biology sets the rules.
Routine prevents crisis.
Design beats improvisation.
Small farms fail from overload, not ignorance.

### Repositories

water-and-feed
Private repository.
Covers water access, hydration systems, feeding schedules, seasonal adjustments, and failure modes shared across species.

bees
Private repository.
Husbandry reference for honeybees including seasonal management, hive health, forage, overwintering, and colony stress factors.

cats
Private repository.
Working and companion cat care focused on health, territory management, feeding, and integration with livestock environments.

dogs
Private repository.
Livestock guardian and companion dog care including training, nutrition, behavioral stability, and workload balance.

guinea-fowl
Private repository.
Husbandry notes for guinea fowl including predator control roles, noise management, breeding, and flock behavior.

turkeys
Private repository.
Turkey husbandry covering brooding, growth stages, disease risk, feed requirements, and processing considerations.

quail
Private repository.
Quail production and care including housing density, egg production, incubation, and feed efficiency.

geese
Private repository.
Goose husbandry focused on grazing, guarding behavior, breeding cycles, and water requirements.

ducks
Private repository.
Duck care including water management, feed conversion, egg production, and wet-environment health risks.

sheep
Private repository.
Small-flock sheep management including parasite control, pasture rotation, lambing, and breed-specific notes.

donkeys
Private repository.
Donkey care focusing on hoof health, diet sensitivity, guardian roles, and integration with livestock.

rabbits
Private repository.
Rabbit husbandry covering breeding, housing, feed, health, and meat production systems.

guinea-pigs
Private repository.
Guinea pig care including breeding, housing, diet, and dual roles as livestock or companions.

cattle
Private repository.
Small-scale cattle management including feed planning, fencing, health, and seasonal labor impact.

chickens
Private repository.
Chicken husbandry including layers and dual-purpose birds, housing, predator mitigation, and egg production cycles.

goats
Private repository.
Goat management covering browsing behavior, fencing realities, health risks, and labor demands.

## Normalized Version

### Tagline
Structured animal husbandry documentation for a mixed-species mini farm.

### Summary
mini-farm-animals is a modular documentation system covering care, management, and planning for each animal species on a small diversified farm.

### Description
mini-farm-animals provides species-specific husbandry references designed for practical farm use rather than hobbyist guidance. Each repository focuses on biological requirements, housing, nutrition, health, reproduction, and system integration.

The organization emphasizes realistic labor capacity, land constraints, climate considerations, and long-term sustainability. Content is designed to be usable offline and to support future integration with farm planning, automation, and recordkeeping systems.

### Scope
The organization includes documentation for poultry, livestock, working animals, and companion species relevant to a mixed-use mini farm.

Each repository is maintained independently to allow focused updates while remaining consistent in structure and philosophy across species.

### Status
Active development.
All repositories are private and intended for long-term internal use and system planning.

---

# mini-farm-plants

## Identity Version

### Tagline
Plants as systems, not vibes.

### Summary
mini-farm-plants is a structured plant-care and crop-management knowledge system for a future mini farm.

### Description
mini-farm-plants exists to treat plants the same way animals and infrastructure are treated: as biological systems with constraints, dependencies, and failure modes.

This organization documents crops, perennial plants, and food-producing systems with an emphasis on soil, water, climate, timing, labor, and long-term yield rather than aesthetic gardening or trend-driven advice.

The focus is on survivability, repeatability, and integration. Plants are not isolated beds or pots; they are part of a larger system involving animals, weather, irrigation, soil regeneration, and human workload.

Content is written to support offline use, seasonal planning, and eventual automation. The goal is to know what grows, why it grows, when it fails, and how to design plant systems that do not require constant human intervention.

### Philosophy
Plants respond to inputs, not intention.
Soil is infrastructure.
Water is the bottleneck.
Timing matters more than variety.
Automation should reduce labor, not increase complexity.

### Repositories

automation
Private repository.
Embedded and systems-level tooling for plant care automation including irrigation control, environmental monitoring, and sensor-driven decision support. Intended to interface with future grow systems and broader farm automation infrastructure.

## Normalized Version

### Tagline
Structured plant and crop documentation for a mini farm.

### Summary
mini-farm-plants is a documentation and automation-focused organization covering crops, plants, and their care within a small-scale farm system.

### Description
mini-farm-plants provides practical, system-oriented documentation for plant care, crop planning, and growing environments. The organization emphasizes soil health, irrigation, seasonal timing, climate constraints, and labor efficiency.

The included automation repository supports future integration with sensors and control systems to reduce manual workload and increase reliability.

All content is designed for long-term reference, offline use, and compatibility with broader farm planning and automation efforts.

### Status
Active development.
Current focus on automation foundations and system design.



---


# Olivision

## Identity Version

### Tagline
A suite of reflective apps for visual journaling, habit tracking, and gentle insights that turn data into self-understanding.

### Summary
Olivision is a private-first suite of reflective applications designed to help you capture moments, track patterns, and see your life clearly without performative social features.

### Description
Olivision exists to make reflection feel natural instead of forced.

The tools in this org are built for people who want private, calm, durable self-tracking. The point is not streaks or public posts. The point is noticing what repeats, preserving what matters, and letting the data serve understanding instead of anxiety.

Olivision is designed around gentle capture and long-term recall. It prioritizes clarity, personal meaning, and simple workflows that still scale into deeper analysis when you want it.

### Philosophy
Reflection should be private.
The tool should adapt to the user.
Patterns matter more than perfection.
Data should serve understanding, not performance.

### Repositories
O-Snap
Private repository.
Capture one good thing a day. Snap a photo, add a thought if you want, check a habit when it feels right, simple or detailed.

O-Man
Private repository.
Track patterns, spot red flags, and reflect on connection across dating, friendships, or any relationship stage. Focused on noticing patterns before they repeat.

O-Baby
Private repository.
Capture beginnings and milestones such as first steps, first words, and first anything. Turns milestones into memories you can keep and revisit.

.github
Public repository.
Organization profile and shared defaults for the Olivision organization.

## Normalized Version

### Tagline
Private-first reflective apps for journaling, relationship insight, and memory keeping.

### Summary
Olivision is a suite of private applications for visual journaling, relationship reflection, and milestone tracking, designed for long-term personal clarity.

### Description
Olivision builds lightweight reflective tools that help users record moments, track habits, and recognize patterns over time. The focus is on privacy, usability, and emotional realism rather than social sharing or engagement mechanics.

The suite includes a visual diary app, a relationship reflection tool, and a milestone tracker. Each product is designed to support both quick capture and deeper review, depending on the user’s needs.

### Status
Active development.
Current focus on maintaining a cohesive private-first suite with durable data and simple workflows.

---


# PhantomScanner

## Identity Version

### Tagline
Core automation, normalization, and visibility for security scanning.

### Summary
PhantomScanner is a system for collecting, normalizing, and making sense of security scan data across many repositories without noise, vendor lock-in, or cloud dependence.

### Description
PhantomScanner exists because running scanners is easy, but turning their output into something actionable is not.

Modern security tools generate large volumes of findings that are duplicated, inconsistently scored, poorly prioritized, and difficult to track over time. PhantomScanner treats scan output as raw input that must be normalized, deduplicated, and contextualized before it is useful to engineers.

The organization is built around ingestion pipelines that accept results from multiple scanners, map them into a unified schema, and expose them through a backend service and a lightweight dashboard. The intent is clarity rather than theater, and ownership rather than alert fatigue.

PhantomScanner is designed to run locally or self-hosted. It avoids proprietary platforms and external services, emphasizing transparency, repeatability, and control.

### Philosophy
Scanning is cheap.
Signal is expensive.
Normalization creates leverage.
False positives waste engineering time.
Dashboards should support decisions, not impress stakeholders.

### Repositories

phantom  
Private repository.  
Core scanning and orchestration layer responsible for ingesting results from multiple security tools, handling fingerprinting, deduplication, and normalization logic, and preparing data for storage and reporting.

phantom-backend  
Private repository.  
FastAPI backend service that receives normalized scan data, enforces a consistent schema, stores findings, and exposes APIs for consumption by dashboards and other tooling.

phantom-dashboard  
Public repository.  
Frontend dashboard for visualizing normalized security findings across projects. Designed to provide summaries, trends, and visibility without overwhelming users with raw scan output.

.github  
Public repository.  
Organization-level configuration, workflows, and shared defaults for the PhantomScanner organization.

## Normalized Version

### Tagline
Automated normalization and reporting for multi-tool security scans.

### Summary
PhantomScanner is an automation-focused security scanning platform that aggregates, normalizes, and visualizes vulnerability data from multiple tools across many repositories.

### Description
PhantomScanner provides a structured approach to handling security scan results by converting disparate tool outputs into a unified, comparable format. The system emphasizes normalization, deduplication, and clear reporting to support engineering decision-making.

The backend service handles ingestion and storage of findings, while the dashboard presents aggregated views suitable for tracking issues over time. The platform is designed to be self-hosted, extensible, and suitable for continuous integration environments.

### Status
Active development.
Current focus on ingestion pipelines, normalization logic, and dashboard visibility.


---


# PhantomScanner

## Identity Version

### Tagline
Core automation, data collection, and scanning engine.

### Summary
PhantomScanner is a modular security automation platform designed to ingest, normalize, and reason over vulnerability scan data from multiple tools.

### Description
PhantomScanner exists to reduce scanner chaos by treating security findings as structured data instead of noisy alerts. It aggregates results from multiple scanners, normalizes them into a unified schema, deduplicates overlapping findings, and exposes the data through clear dashboards and APIs.

The system is built to support continuous scanning across many repositories without overwhelming engineers. It emphasizes normalization, attribution, and historical context so that vulnerabilities can be understood, prioritized, and tracked over time rather than reacted to in isolation.

PhantomScanner is designed as infrastructure, not a single tool. Each component can operate independently or as part of a full pipeline spanning ingestion, processing, storage, and visualization.

### Philosophy
Security findings are data, not events.
Normalization precedes prioritization.
Duplication hides signal.
History matters more than snapshots.
Automation should clarify responsibility, not obscure it.

### Repositories

phantom  
Private repository.  
Core scanning and normalization engine responsible for ingesting raw scanner outputs, mapping findings to unified severity and CWE models, deduplicating results, and producing actionable security data.

phantom-backend  
Private repository.  
FastAPI service for processing, storing, and serving normalized scan data. Provides APIs for dashboards, health checks, and integration with external systems. Handles schema enforcement, persistence, and backend logic.

phantom-dashboard  
Public repository.  
Frontend dashboard for visualizing scan results across projects. Aggregates daily scans, displays trends, highlights critical issues, and provides a clear interface for reviewing vulnerabilities over time.

## Normalized Version

### Tagline
Automated vulnerability ingestion and normalization platform.

### Summary
PhantomScanner is a security scanning platform that collects, normalizes, and visualizes vulnerability data from multiple tools.

### Description
PhantomScanner provides a structured approach to application security scanning by unifying outputs from different scanners into a consistent data model. It supports deduplication, severity normalization, historical tracking, and dashboard-based review.

The platform is designed for teams managing many repositories who need clear visibility without alert fatigue. Its modular architecture allows components to be deployed together or independently depending on scale and requirements.

### Status
Active development.
Used for multi-repository scanning, normalization pipelines, and security visibility dashboards.



---


# room-reader

## Identity Version

### Tagline
Objective room-level care verification without surveillance.

### Summary
room-reader is an offline-first room presence and activity verification system designed for care facilities to provide defensible, timestamped proof of care without cameras, audio recording, or invasive monitoring.

### Description
room-reader exists to answer a simple but critical question in care environments: did someone actually enter the room and provide care, and for how long.

The system uses physical checkpoints placed throughout a resident’s room to log entry, bedside presence, and exit events. Each interaction produces a timestamped record that can be reviewed locally and optionally synced later, creating an auditable trail of care activity.

room-reader is intentionally built to avoid cameras, microphones, or continuous surveillance. It prioritizes dignity, legality, and staff protection while still producing objective records that reduce disputes, false accusations, and documentation gaps.

All data is stored locally by default and can sync to per-resident Google Sheets or other exports when internet access is available. The design emphasizes reliability, offline operation, and clear accountability rather than behavioral inference or AI monitoring.

### Philosophy
Proof of care should be objective.
Privacy is non-negotiable.
Presence matters more than paperwork.
Offline-first systems are safer systems.
Technology should protect staff and residents equally.

### Repositories

firmware  
Private repository.  
Embedded firmware for room-reader hardware devices. Handles sensor input, NFC or badge detection, timing logic, and secure local logging.

backend  
Private repository.  
Local backend services for data aggregation, validation, and export. Manages room events, timestamps, and synchronization workflows.

enclosure-case  
Private repository.  
Hardware enclosure designs and physical housing specifications for room-reader devices, focused on durability, safety, and unobtrusive placement.

SideScripts  
Private repository.  
Supporting scripts and utilities for deployment, diagnostics, configuration, and data handling.

## Normalized Version

### Tagline
Offline room presence and care verification system.

### Summary
room-reader is a hardware-backed system that records room entry, bedside presence, and care duration without using cameras or audio.

### Description
room-reader provides care facilities with defensible, time-based records of staff presence using physical checkpoints and local logging. It supports offline operation, later synchronization, and per-resident data separation.

The system reduces documentation disputes, protects staff from false claims, and improves transparency for families while maintaining resident privacy.

### Status
Active development.
Focused on firmware stability, offline reliability, and care facility deployment.



---


# SeasonalSidekick

## Identity Version

### Tagline
Your all-season assistant for life’s recurring moments.

### Summary
SeasonalSidekick is a collection of small, practical tools designed to support recurring seasonal tasks, traditions, and rhythms across everyday life, holidays, and annual cycles.

### Description
SeasonalSidekick exists to reduce seasonal friction. It focuses on the things people repeatedly forget, scramble to organize, or rebuild every year: holidays, traditions, food, safety, reminders, and small automations tied to time rather than productivity metrics.

The organization treats seasons as systems. Each repository addresses a specific recurring problem, whether it is holiday lighting, seasonal first aid, family recipes, gift planning, or playful traditions. The emphasis is on usefulness, clarity, and reusability rather than novelty.

SeasonalSidekick is intentionally gentle. Tools are designed to assist without overwhelming, automate without removing human choice, and preserve memories rather than optimize behavior.

The mascot Moose represents steadiness and reliability across changing seasons, reinforcing the idea that structure can coexist with warmth and creativity.

### Philosophy
Seasons repeat even when people forget.
Small tools beat big platforms.
Traditions deserve infrastructure.
Automation should feel supportive, not intrusive.
Life rhythms matter as much as deadlines.

### Repositories

FestiveFirstAid  
Private repository.  
Seasonal safety and first-aid reference covering common holiday and weather-related injuries, designed for quick access and printable use.

SideScripts  
Private repository.  
Small supporting scripts and utilities used across SeasonalSidekick projects for automation, scheduling, and lightweight tooling.

holiday-bytes  
Private repository.  
Family recipe and memory-sharing platform for preserving dishes, photos, and traditions with exportable and printable formats.

elf-ops  
Private repository.  
Elf on the Shelf tracking and idea generator with reminders and calendars to reduce holiday stress for parents.

circuit-claus  
Private repository.  
Smart lighting and automation hub for holiday scenes using programmable LED or smart-light setups.

reboot-the-halls  
Private repository.  
Central holiday control dashboard for coordinating lights, music, recipes, and seasonal plans.

## Normalized Version

### Tagline
Seasonal tools for holidays, traditions, and recurring life tasks.

### Summary
SeasonalSidekick is a multi-repository organization providing lightweight tools for managing seasonal activities, safety, automation, and memory preservation.

### Description
SeasonalSidekick offers focused applications and utilities that support recurring annual needs such as holidays, seasonal safety, family traditions, and home automation. Each repository addresses a narrow problem space with an emphasis on simplicity, reuse, and human-centered design.

The tools are suitable for personal, family, and home use, and are designed to remain usable year after year without complex setup or ongoing maintenance.

### Status
Active development.
Focused on seasonal usability, automation support, and family-oriented tools.



---


# self-sufficient-homestead

## Identity Version

### Tagline
Infrastructure for living systems, not lifestyle aesthetics.

### Summary
self-sufficient-homestead is a systems-first organization focused on building practical, resilient, and automatable homestead infrastructure with an emphasis on animals, labor reduction, and long-term sustainability.

### Description
self-sufficient-homestead exists to treat homesteading as an engineering problem rather than a romantic ideal. The organization centers on repeatable systems that reduce daily labor, increase reliability, and scale with time rather than attention.

The focus is on animal care, physical infrastructure, automation, and decision support. Animals are treated as biological systems with constraints, failure modes, and care requirements that must be met consistently regardless of weather, mood, or human availability.

Documentation and tooling emphasize durability, offline use, and future expansion. The goal is to build homestead systems that continue to function under stress, absence, or partial automation, while remaining understandable and maintainable by humans.

This organization is foundational. It supports future integration with plant systems, environmental monitoring, and broader farm automation efforts.

### Philosophy
Resilience beats aesthetics.
Animals require systems, not improvisation.
Labor is the limiting factor.
Automation should remove fragility, not add it.
A homestead should survive bad weeks, not just good days.

### Repositories

animal-automation  
Private repository.  
Early-stage tooling and documentation for automating animal care workflows, including feeding schedules, monitoring concepts, and infrastructure planning. Intended as the backbone for future sensor-driven and embedded homestead systems.

## Normalized Version

### Tagline
Systems and automation for a self-sufficient homestead.

### Summary
self-sufficient-homestead is an organization focused on infrastructure, automation, and documentation for managing animals and homestead systems reliably and at scale.

### Description
self-sufficient-homestead provides a foundation for designing and maintaining homestead operations with an emphasis on animal care, reduced manual labor, and long-term sustainability. The organization prioritizes system design, automation readiness, and practical constraints over lifestyle presentation.

Repositories are designed to support future expansion into embedded systems, monitoring, and integration with broader farm and environmental tooling.

### Status
Early development.
Current focus on animal automation foundations and system architecture.


---


