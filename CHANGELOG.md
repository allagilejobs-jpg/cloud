# Cloud Mastery Hub Changelog

## 2026-08-15

### P6 Construction Scheduler 64-Slide Deck Integration
Integrated the full `Planning and Scheduling Fundamentals` PowerPoint deck into the dedicated P6 Construction Scheduler page.

**Source Document Reviewed:**
- `Planning_and_Scheduling_Fundamentals.pptx`
- 64 slides reviewed in full
- Speaker notes checked; notes only contained slide numbers

**Curriculum Updates:**
- Added a visible dashboard "64-Slide Deck Coverage" section mapping all deck sections into the 24-week roadmap.
- Covered slide ranges for project triangle/lifecycle, scheduler teams, client/GC/trade roles, planner versus scheduler, FEL/FEED, core terms, P6 setup, nine WBS phases, and milestone discipline.
- Strengthened Week 1 with EPC and design-build award context.
- Strengthened Week 2 with the nine deck WBS phases: milestones, design and engineering, procurement, permit, preconstruction, construction, automation, testing and commissioning, and handover.
- Strengthened Week 3 with planning-phase technical document inputs such as P&IDs, drawing indexes, GA drawings, SLDs, isometrics, BOQs, and specifications.
- Strengthened Week 4 with activity IDs, predecessors, successors, leads/lags, and all four relationship types.
- Strengthened Week 7 with EVMS, planned value, earned value, and SPI.
- Strengthened Week 8 with risk-team language, Monte Carlo, P20, and P80 schedule confidence dates.
- Strengthened Week 17 with CQV and operational readiness handoffs.
- Strengthened Week 18 with extension-of-time support and evidence.
- Strengthened Week 21 with integrated master schedule and discipline schedule integration.
- Strengthened Week 24 with milestone defense and schedule evidence.

**Files Affected:**
- `p6-construction-src/src/data/weeks.js`
- `p6-construction-src/src/App.jsx`
- `p6-construction-src/dist/`
- `p6-construction/`
- `CHANGELOG.md`

**Verification:**
- Data import check passed with 24 weeks, 48 labs, 16 projects, 9 deck coverage sections, and 9 document table-of-contents topics.
- `npm run build` passed for `p6-construction-src`.

---

## 2026-08-14

### P6 Construction Scheduler Flyer Outcome Infusion
Moved the Chronopoint-style flyer outcomes into the dedicated P6 Construction Scheduler page instead of the general Project Scheduling page.

**Curriculum Updates:**
- Added a dashboard "Academy Flyer Outcomes" section with the six document outcomes: Primavera P6, WBS Development, CPM Scheduling & Logic, Schedule Updating & Baselines, DCMA 14-Point Check, and Interview Preparation.
- Added a dashboard "PDF Table of Contents Map" section from the ChronoPoint Academy Notes preview: Project Management Triangle, Project Team Scheduler Work, Scheduler Roles with Client/GC/Trade Partner, Planner and Scheduler Role, FEL and FEED, Core Scheduling Terms, Getting Started with Primavera P6, Work Breakdown Structure phases with practical examples, and Excel Spreadsheet.
- Mapped each outcome to the exact weeks where it is practiced across the 24-week construction scheduler plan.
- Added portfolio-proof artifacts for each outcome, including P6 schedule packages, WBS dictionaries, CPM narratives, baseline/update reports, DCMA audit tables, and interview kits.
- Strengthened Week 1 with the project management triangle, planner versus scheduler role, FEL/FEED, and client/GC/trade coordination.
- Strengthened Week 2 with an Excel-ready WBS and activity dictionary workflow.
- Strengthened Primavera P6 learning copy to explicitly include activity codes.

**Files Affected:**
- `p6-construction-src/src/data/weeks.js`
- `p6-construction-src/src/App.jsx`
- `p6-construction-src/dist/`
- `p6-construction/`
- `CHANGELOG.md`

**Verification:**
- Data import check passed with 24 weeks, 48 labs, 16 projects, 6 academy outcomes, 9 PDF table-of-contents topics, and 6 featured learning outcomes.
- `npm run build` passed for `p6-construction-src`.

---

### P6 Construction Scheduler Expanded to 6 Months
Expanded the dedicated P6 Construction Scheduler roadmap from 12 weeks to a full 6-month plan.

**Curriculum Updates:**
- Expanded from 12 weeks to 24 weeks.
- Expanded from 24 labs to 48 labs.
- Expanded from 8 portfolio projects to 16 portfolio projects.
- Reworked the phase map into 4 six-week phases: P6/construction foundations, field updates/controls/reporting, advanced controls/delay readiness, and recovery/portfolio/job readiness.
- Added deeper coverage for baseline change control, percent complete, remaining duration, resource/cost loading, S-curves, weekly scheduler rhythm, MEP coordination, commissioning, delay documentation, weather days, time impact analysis, acceleration tradeoffs, multi-project rollups, resume/LinkedIn positioning, interview whiteboarding, and a final apply sprint.
- Updated the Cloud hub P6 card and total site stats.

**Files Affected:**
- `index.html`
- `p6-construction-src/src/data/weeks.js`
- `p6-construction-src/src/App.jsx`
- `p6-construction-src/index.html`
- `p6-construction-src/dist/`
- `p6-construction/`
- `CHANGELOG.md`

**Verification:**
- Data import check passed with 24 weeks, 48 labs, 16 projects, 4 phases, and 7 tracks.
- `npm run build` passed for `p6-construction-src`.

---

### P6 Construction Scheduler Added
Added a dedicated Primavera P6 construction scheduler track separate from the general Project Scheduling Mastery roadmap.

**New App:**
- Added `p6-construction-src/` Vite/React source app.
- Added `p6-construction/` static deployment output for GitHub Pages at `/cloud/p6-construction/`.
- Added P6 Construction Scheduler card to the main hub.
- Updated hub totals to 75 weeks, 30 tracks, 199+ labs, and 49 projects.

**Curriculum:**
- 12-week P6 construction scheduling roadmap.
- 4 phases: P6 and construction foundations, CPM logic/baselines/quality, updates/field control/claims readiness, reporting/recovery/job readiness.
- 7 skill tracks: P6, WBS, CPM, QUAL, UPD, REC, JOB.
- 24 hands-on labs and 8 portfolio projects.
- Covers Primavera P6, EPS/OBS/WBS, activity codes, construction WBS, procurement and submittals, RFIs, CPM logic, calendars, critical path, float, baseline control, DCMA 14-point checks, data-date updates, lookahead schedules, constraint logs, delay fragnets, recovery schedules, dashboards, resume language, and interview prep.

**Files Affected:**
- `index.html`
- `.gitignore`
- `p6-construction-src/`
- `p6-construction/`
- `CHANGELOG.md`

**Verification:**
- `npm run build` passed for `p6-construction-src`.
- Static `p6-construction/` output generated with `/cloud/p6-construction/` asset paths.

---

### Project Scheduling Mastery P6/DCMA Focus Update
Updated Project Scheduling Mastery to factor in the flyer-style "What You Will Learn" outcomes for project scheduler training.

**Commit:** `1e2c250`

**Curriculum Updates:**
- Added a visible "What You Will Learn" section to the dashboard.
- Added Primavera P6 as a seventh skill track.
- Strengthened P6 coverage across setup, WBS/activity structure, data date/status updates, baselines, and portfolio evidence.
- Expanded WBS development into P6-ready WBS codes and activity mapping.
- Strengthened CPM scheduling and logic language for scheduler interviews.
- Expanded Week 5 into a practical DCMA 14-point schedule health check.
- Renamed Week 6 around Primavera P6 status updates, baselines, variance, and forecasting.
- Added interview preparation emphasis for project scheduler and project controls roles.

**Files Affected:**
- `project-scheduling-src/src/data/weeks.js`
- `project-scheduling-src/src/App.jsx`
- `project-scheduling-src/dist/`
- `project-scheduling/`
- `CHANGELOG.md`

**Verification:**
- `npm run build` passed for `project-scheduling-src`.
- Local `/cloud/project-scheduling/` Vite route screenshot checked at desktop and mobile sizes.
- Static `project-scheduling/` route and new JS asset returned HTTP 200 locally.

---

### Project Scheduling Mastery Added
Added a fourth Cloud Mastery Hub track for project scheduling and PM delivery planning.

**New App:**
- Added `project-scheduling-src/` Vite/React source app using the same structure as the AWS and Azure mastery plans.
- Added `project-scheduling/` static deployment output for GitHub Pages at `/cloud/project-scheduling/`.
- Added Project Scheduling card to the main hub.
- Updated hub totals to 63 weeks, 23 certs/tracks, 175+ labs, and 41 projects.

**Curriculum:**
- 12-week project scheduling roadmap.
- 4 phases: schedule foundations, network logic/control, resource/risk/hybrid planning, executive readiness.
- 6 skill tracks: BASE, CPM, RES, RISK, HYBRID, EXEC.
- 24 hands-on labs and 7 portfolio projects.
- Covers WBS, estimation, dependencies, critical path, schedule quality checks, baselines, variance, resource loading, buffers, agile/hybrid release planning, recovery, dashboards, RAID, and interview prep.

**Verification:**
- `npm run build` passed for `project-scheduling-src`.
- Local GitHub Pages-style route verified at `/cloud/project-scheduling/`.
- Desktop and mobile Playwright screenshots captured.
- Interaction smoke test passed for week detail, labs tab, and project tab.

---

## 2026-03-30 (Evening)

### NetSec Labs Major Expansion - All 22 Labs Fully Detailed
All labs across weeks 6-16 now have comprehensive, hands-on step-by-step instructions.

**Week 6-7 (Palo Alto Basics):**
- Lab 6-1: Initial Setup (30→55 min) - Full OOB setup, licensing
- Lab 6-2: Zones & Interfaces (25→55 min) - Complete L3 config with routing
- Lab 7-1: Security Policy (35→60 min) - 5 rules with ordering and logging
- Lab 7-2: NAT Config (30→55 min) - SNAT and DNAT with verification

**Week 8-9 (VPN & Security):**
- Lab 8-1: IPSec VPN (50→75 min) - Phase 1/Phase 2 with troubleshooting
- Lab 8-2: GlobalProtect (45→70 min) - Portal, Gateway, split tunnel
- Lab 9-1: SSL Decryption (45→70 min) - CA generation, no-decrypt rules
- Lab 9-2: Security Profiles (40→60 min) - All 6 profiles + Profile Group

**Week 10-11 (Enterprise):**
- Lab 10-1: HA Active/Passive (50→75 min) - Full HA config, failover testing
- Lab 10-2: Panorama (40→60 min) - Device Groups, Templates
- Lab 11-1: Packet Capture (35→55 min) - CLI commands, Wireshark
- Lab 11-2: Log Analysis (40→60 min) - show session, policy-match

**Week 12-14 (Ecosystem & IR):**
- Lab 12-1/12-2: Product comparison + SIEM correlation rules
- Lab 13-1/13-2: Python scripts + Ansible playbooks (with code)
- Lab 14-1/14-2: Threat hunting (4 hunts) + IR playbook

**Week 15-16 (Capstone & Career):**
- Lab 15-1: Enterprise build (240 min) - 11-phase deployment
- Lab 16-1/16-2: Whiteboard practice + interview portfolio

**Total:** 22 labs expanded, content doubled (~150KB → 310KB)

---

## 2026-03-30

### NetSec Refactored to Full Parity with Azure/AWS (1d3deaa)
Brought Network Security roadmap to full architectural parity with Azure Cloud Mastery and AWS Mastery.

**Structural Changes:**
- Created `data/weeks.js` with exported WEEKS, PHASES, CERTS, GAPS constants
- Created `components/ProgressBar.jsx` - reusable progress bar component
- Created `components/WeekCard.jsx` - week card for dashboard grid view
- Created `components/WeekDetail.jsx` - detailed week view with tabs
- Added `index.css` with shared CSS variables and utility classes
- Refactored `App.jsx` to use modular imports (reduced from 120KB monolith)

**Benefits:**
- Consistent codebase across all three roadmaps
- Easier maintenance and feature parity
- Smaller App.jsx focused on state/routing
- Reusable components for future roadmaps

---

## 2026-03-30

### Network Security Added to Cloud Hub + Detailed Labs (4644f4a)
Added Network Security track to Cloud Mastery Hub and expanded labs with step-by-step instructions.

**Cloud Hub Updates:**
- Added Network Security card to index.html
- Updated total stats: 51 weeks, 17 certs, 150+ labs, 34 projects
- Added card-netsec styling (red theme)

**Network Security LANDs Expansion (Weeks 1-3):**
Expanded all labs with detailed step-by-step instructions matching Azure/AWS format:

**Week 1 Labs:**
- Lab 1-1: Linux Command Line (40 → 60 min) - 42 detailed steps covering VirtualBox setup, Ubuntu install, network commands, nmap, tcpdump, user management
- Lab 1-2: OSI Model with Real Traffic (30 → 45 min) - 36 steps covering Wireshark install, packet capture, layer identification, stream following
- Lab 1-3: DNS & DHCP Hands-On (25 → 40 min) - 37 steps covering dig, nslookup, record types, DHCP DORA capture

**Week 2 Labs:**
- Lab 2-1: Subnetting Speed Drill (30 → 50 min) - 55 steps with binary math examples, subnet calculations, practice exercises
- Lab 2-2: Routing Table Analysis (25 → 40 min) - 35 steps covering ip route, static routes, longest-prefix-match, traceroute/mtr

**Week 3 Labs:**
- Lab 3-1: AWS VPC with DMZ Architecture (40 → 60 min) - 60 steps covering full VPC creation, EC2 instances, security groups, NAT gateway
- Lab 3-2: Wireshark Traffic Analysis (45 → 60 min) - 52 steps covering advanced filters, TLS SNI analysis, file extraction, forensics techniques

---

### Light/Dark Mode Fix (fa19799, cff7d51)
Fixed readability issues in light mode for both apps:
- All text now uses CSS variables (var(--text), var(--text-muted), etc.)
- Card titles, objectives, prompts, lab steps all readable in both themes
- Progress rings use var(--border) for proper contrast
- Tags and badges use CSS variables for backgrounds and colors

---

### Major UI Unification + New Features (775a440)
Both AWS and Azure now have identical feature sets:

**New Features (Both Apps):**
- 🔍 **Search** - Filter weeks, labs, topics, services by keyword
- 🌙 **Dark/Light Mode** - Theme toggle with localStorage persistence
- 📥 **Export Progress** - Download progress as JSON file
- ⌨️ **Keyboard Shortcuts** - j/k navigate weeks, Esc close detail
- 📝 **Notes** - Add personal notes per lab/project (persisted locally)
- ⏱️ **Time Estimates** - Show total hours per week and overall
- 🖨️ **Print-friendly** - CSS media queries hide UI chrome for printing

**Azure UI Overhaul:**
- New `WeekDetail.jsx` component with tabbed interface
- Click-to-select weeks (like AWS) instead of inline expand
- Progress ring on week cards
- Matching dark theme styling
- Week navigation (Prev/Next buttons)

**Unified Structure:**
Both apps now have identical:
- 5 views: Dashboard, Projects, Resources, Gaps, Certs
- Filter chips by certification
- Progress tracking by lab/project ID
- WeekCard and WeekDetail components
- Constants: PHASES, CERTS, CERT_COLORS, GAP_INFUSIONS, RESOURCES, TUTOR_PROMPTS

---

### AWS Unified with Full Spec (3a80f56)
Major refactor to bring AWS to feature parity with Azure:

**New Structure:**
- Separated data into `src/data/weeks.js`
- Created reusable components: `ProgressBar.jsx`, `WeekCard.jsx`, `WeekDetail.jsx`

**New Fields Added to All 18 Weeks:**
- `cert` - Certification mapping (CLF-C02, SAA-C03, etc.)
- `color` - Week accent color
- `infused` - Topics infused into this week
- `topics` - Topic tags array
- Resources now have `type` field ("doc" or "video")

**New Constants:**
- `PHASES` - 6 phases with colors and icons
- `CERTS` - 6 certifications with codes and weeks
- `CERT_COLORS` - Color per certification
- `GAP_INFUSIONS` - 14 gaps with severity levels
- `RESOURCES` - Global resources list
- `TUTOR_PROMPTS` - Claude tutor prompt suggestions

**New Views:**
- 📅 Dashboard - Phase-grouped weeks with filter chips
- 🚀 Projects - All projects in one view
- 📚 Resources - Global resources + tutor prompts
- 🔥 Gaps - Gap infusion map by severity
- 🏅 Certs - Certification roadmap

**New Features:**
- Filter by certification (CLF-C02, SAA-C03, etc.)
- Filter by infused topics
- Week detail with tabs (Overview, Prompts, Labs, Project, Resources)
- Infused banner in weeks
- Topics display
- Progress tracking by lab/project ID
- Week navigation buttons
- Reset progress button

---

### Azure Weeks 15-17 Detailed Labs (a7c8c98)
Expanded remaining Azure weeks with full step-by-step instructions:

**Week 15 - Architecture & DR:**
- Lab 1: Complete architecture design with draw.io, cost calculator, WAF review
- Lab 2: Site Recovery deployment with test failover (55 min)
- Lab 3: Azure Migrate assessment workflow

**Week 16 - Serverless Advanced:**
- Lab 1: All Function trigger types (Timer, Blob, Queue, HTTP) with App Insights
- Lab 2: Service Bus queues and topics with Python SDK
- Lab 3: Event Grid custom events and system events
- Lab 4: Logic Apps conditional workflows and scheduled reports

**Week 17 - Capstone & Career:**
- Lab 1: 70+ certification practice questions with study plan
- Lab 2: GitHub portfolio creation with README templates
- Lab 3: Interview preparation with mock scenarios
- Lab 4: Full capstone project execution guide

---

### Azure Weeks 14 Labs Expansion (88ae743)
Expanded Week 14 labs with detailed step-by-step instructions for Sentinel SIEM, custom Azure Policy, and Blueprints.

---

### AWS Plan Upgrade (230092c)
Brought AWS plan to feature parity with Azure:

**Added to all 18 weeks:**
- ✅ Certification mapping (`cert: "SAA-C03"`, etc.)
- ✅ Color coding per phase (`color: "#FF9900"`)
- ✅ Renamed `prompts` → `askClaude` for consistency

**Added to all resources:**
- ✅ Resource type (`type: "doc"` or `type: "video"`)

**Added constants:**
- ✅ `CERT_COLORS` for visual certification styling

**AWS Certification Mapping:**
| Weeks | Certification |
|-------|---------------|
| 1-3 | CLF-C02 (Cloud Practitioner) |
| 4-6 | SAA-C03 (Solutions Architect) |
| 7-9 | DVA-C02 / DOP-C02 (Developer / DevOps) |
| 10-12 | SAA-C03 / SCS-C02 (Architect / Security) |
| 13-15 | DOP-C02 (DevOps Professional) |
| 16 | AIF-C01 (AI Practitioner) |
| 17-18 | ALL CERTS (Capstone + Exam Prep) |

---

### Major Azure Plan Upgrade (2e8e829)
Brought Azure plan to feature parity with AWS plan:

**Added to all 42 Azure labs:**
- ✅ Lab IDs (e.g., `lab-1-1`, `lab-2-3`)
- ✅ Duration (e.g., "30 min", "45 min")
- ✅ Difficulty level (Beginner/Intermediate/Advanced)
- ✅ Verification steps ("verify:" statements)

**Added to all 17 weeks:**
- ✅ Services list per week
- ✅ gapBadges for prerequisite skills (DOCKER, KUBERNETES, TERRAFORM, BICEP, FINOPS)
- ✅ Project prompts (Claude-ready prompts for each project)

**Lab Counts by Week:**
| Week | Labs | Duration Range |
|------|------|----------------|
| 1 | 3 | 15-25 min |
| 2 | 4 | 20-35 min |
| 3 | 3 | 25-35 min |
| 4 | 2 | 35-40 min |
| 5 | 5 | 25-35 min |
| 6 | 4 | 20-35 min |
| 7 | 3 | 35-45 min |
| 8 | 2 | 25-35 min |
| 9 | 3 | 35-45 min |
| 10 | 2 | 30-40 min |
| 11 | 3 | 35-45 min |
| 12 | 4 | 25-35 min |
| 13 | 4 | 30-45 min |
| 14 | 4 | 30-45 min |
| 15 | 2 | 45-60 min |
| 16 | 4 | 30-40 min |
| 17 | 2 | 60-90 min |

**Total: 54 labs with ~30 hours of hands-on content**

### Initial Setup (earlier commits)
- Created Cloud Mastery Hub homepage
- Added .nojekyll for GitHub Pages
- Added static HTML versions of AWS and Azure study plans
- Pushed AWS and Azure source files
