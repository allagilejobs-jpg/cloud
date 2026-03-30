# Cloud Mastery Unified Spec

## Goal
Unify AWS and Azure apps to have feature parity while keeping platform-specific content.

---

## FILE STRUCTURE (Both apps)

```
{platform}-src/
├── src/
│   ├── App.jsx              # Main app with views
│   ├── data/
│   │   └── weeks.js         # All week data + constants
│   └── components/
│       ├── WeekCard.jsx     # Week card component
│       ├── ProgressBar.jsx  # Progress bar component
│       └── WeekDetail.jsx   # Week detail with tabs
├── index.html
├── package.json
└── vite.config.js
```

---

## CONSTANTS (in data/weeks.js)

### PHASES
```js
export const PHASES = [
  { num: 1, title: "FOUNDATIONS", weeks: "1–3", color: "#...", icon: "🏗️" },
  // ... 6 phases for AWS, varies for Azure
];
```

### CERTS
```js
export const CERTS = [
  { name: "Cloud Practitioner", code: "CLF-C02", weeks: "1-3", icon: "🏅" },
  // AWS: 6 certs, Azure: 6 certs
];
```

### CERT_COLORS
```js
export const CERT_COLORS = {
  "CLF-C02": "#FF9900",   // AWS
  "AZ-900": "#0078D4",    // Azure
  // ...
};
```

### GAP_INFUSIONS
```js
export const GAP_INFUSIONS = [
  { gap: "Linux Fundamentals", where: "Week 1", why: "...", severity: "critical" },
  // severity: "critical" | "important" | "edge"
];
```

### RESOURCES (global)
```js
export const RESOURCES = [
  { icon: "☁️", text: "Free Account — $200 credit", url: "..." },
  // ...
];
```

### TUTOR_PROMPTS (global)
```js
export const TUTOR_PROMPTS = [
  '"Explain [topic] like I\'m 5" — conceptual understanding',
  // ...
];
```

---

## WEEK DATA STRUCTURE

```js
{
  week: 1,
  phase: 1,                    // Number (maps to PHASES)
  phaseTitle: "FOUNDATIONS",   // String for display
  title: "Cloud Fundamentals...",
  cert: "CLF-C02",             // Primary cert for this week
  color: "#FF9900",            // Week accent color
  gapBadges: ["LINUX"],        // Skills introduced this week
  
  objectives: [
    "Understand cloud computing...",
  ],
  
  services: ["IAM", "EC2", "S3"],
  
  infused: [                   // Topics infused into this week
    "Resource tagging from Day 1",
    "Budget alerts & cost basics",
  ],
  
  topics: [                    // Topic tags
    "Cloud computing overview",
    "IaaS vs PaaS vs SaaS",
  ],
  
  labs: [
    {
      id: "lab-1-1",           // Unique ID for progress tracking
      name: "Create Account",  // Use 'name' consistently
      title: "Create Account", // Alias for compatibility
      duration: "30 min",
      difficulty: "Beginner",  // Beginner | Intermediate | Advanced
      steps: ["Step 1...", "Step 2..."],
      verify: "Verification statement"
    }
  ],
  
  project: {                   // null if no project
    id: "proj-1",              // Unique ID for progress tracking
    name: "Project Name",      // Use 'name' consistently
    title: "Project Name",     // Alias for compatibility
    description: "Description...",
    dummyData: "Scenario data...",
    prompt: "Claude prompt...",   // For copy-paste
    steps: ["Step 1...", "Step 2..."]  // Step-by-step guide
  },
  
  prompts: [                   // Ask Claude prompts
    {
      title: "Topic Name",
      prompt: "Full prompt text..."
    }
  ],
  
  resources: [
    {
      type: "doc",             // "doc" | "video"
      name: "Resource Name",
      url: "https://..."
    }
  ]
}
```

---

## MAIN VIEWS (App.jsx)

### Top-level tabs:
1. **Dashboard** - Phase-grouped week cards with progress
2. **Projects** - All projects in one view
3. **Resources** - Global resources + tutor prompts
4. **Gaps** - Gap infusion map by severity
5. **Certs** - Certification roadmap

### Filter chips (on Dashboard):
- All
- Infused
- Each cert (CLF-C02, SAA-C03, etc.)

---

## WEEK DETAIL VIEW (WeekDetail.jsx)

### Tabs within week:
1. **Overview** - Objectives
2. **Prompts** - Ask Claude prompts with copy buttons
3. **Labs** - Expandable labs with steps
4. **Project** - If exists, with prompt + steps + dummy data
5. **Resources** - Week-specific resources

### Features:
- Gap badges with severity colors
- Services tags
- Infused banner (if has infused topics)
- Topics tags
- Lab checkboxes (granular progress)
- Project checkbox
- Copy buttons with "✓ Copied" feedback
- Prev/Next week navigation

---

## PROGRESS TRACKING

```js
// localStorage key: "{platform}-mastery-v3"
{
  "lab-1-1": true,
  "lab-1-2": true,
  "proj-1": true,
  // ...
}
```

Progress calculated from completed labs + projects, not weeks.

---

## STYLING

- Dark theme base
- Platform accent color (AWS: #FF9900, Azure: #0078D4)
- Consistent component styling
- Responsive design
- Animations: fadeUp, slideIn

---

## IMPLEMENTATION ORDER

### Phase 1: AWS (current session)
1. Create data/weeks.js with all constants
2. Add missing fields to week data (cert, color, infused, topics)
3. Create components (WeekCard, ProgressBar, WeekDetail)
4. Update App.jsx with all views
5. Build and test

### Phase 2: Azure (next)
1. Add missing constants (PHASES, GAP_INFUSIONS)
2. Add missing fields to week data
3. Add missing views (Gaps, Certs tabs)
4. Update WeekCard with tabs
5. Build and test

---

## DEPLOYMENT

```bash
cd {platform}-src
npm run build
cp -r dist/* ../{platform}/
git add -A && git commit -m "Unify {platform} with spec" && git push
```
