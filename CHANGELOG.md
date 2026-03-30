# Cloud Mastery Hub Changelog

## 2026-03-30

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
