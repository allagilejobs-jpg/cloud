# Cloud Mastery Hub Changelog

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
