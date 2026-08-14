// P6 Construction Scheduler - Data & Constants

export const PHASES = [
  { num: 1, title: "P6 & CONSTRUCTION FOUNDATIONS", weeks: "1-6", color: "#B7791F", icon: "🏗️" },
  { num: 2, title: "FIELD UPDATES, CONTROLS & REPORTING", weeks: "7-12", color: "#2563EB", icon: "📈" },
  { num: 3, title: "ADVANCED CONTROLS & DELAY READINESS", weeks: "13-18", color: "#7C3AED", icon: "🚧" },
  { num: 4, title: "RECOVERY, PORTFOLIO & JOB READINESS", weeks: "19-24", color: "#F59E0B", icon: "🎯" }
];

export const CERTS = [
  { name: "Primavera P6 Setup", code: "P6", weeks: "1-6", icon: "🏗️" },
  { name: "WBS & Construction Scope", code: "WBS", weeks: "2-7", icon: "🧱" },
  { name: "CPM Scheduling & Logic", code: "CPM", weeks: "8-11", icon: "🔗" },
  { name: "Baselines & Schedule Quality", code: "QUAL", weeks: "10-13", icon: "✅" },
  { name: "Progress Updates", code: "UPD", weeks: "13-16", icon: "📈" },
  { name: "Delay, Recovery & Claims Support", code: "REC", weeks: "17-21", icon: "⚠️" },
  { name: "Construction Scheduler Interviews", code: "JOB", weeks: "22-24", icon: "💼" }
];

export const CERT_COLORS = {
  P6: "#B7791F",
  WBS: "#0F766E",
  CPM: "#2563EB",
  QUAL: "#10B981",
  UPD: "#7C3AED",
  REC: "#EF4444",
  JOB: "#F59E0B"
};

export const FEATURED_LEARNING = [
  {
    title: "Primavera P6",
    week: "Weeks 1-6, 13-16, 24",
    detail: "Create EPS/OBS/WBS structures, activities, relationships, calendars, baselines, layouts, filters, updates, reports, imports, exports, and professional schedule packages."
  },
  {
    title: "WBS Development",
    week: "Weeks 2-7",
    detail: "Break a construction project into mobilization, procurement, submittals, sitework, structure, MEP, interiors, commissioning, punch, turnover, and closeout."
  },
  {
    title: "CPM Scheduling & Logic",
    week: "Weeks 8-11",
    detail: "Build construction dependency logic, calculate critical path and float, clean open ends, handle calendars/constraints, and explain sequencing like a scheduler."
  },
  {
    title: "Schedule Updating & Baselines",
    week: "Weeks 10-16",
    detail: "Create baseline schedules, set data dates, enter actual starts/finishes, update remaining durations, track percent complete, and report variance."
  },
  {
    title: "DCMA 14-Point Check",
    week: "Weeks 12-13",
    detail: "Audit logic, leads/lags, constraints, high float, negative float, high duration, invalid dates, missing logic, and critical path integrity."
  },
  {
    title: "Interview Preparation",
    week: "Weeks 22-24",
    detail: "Practice construction scheduler scenarios with portfolio exports, STAR stories, delay narratives, recovery plans, P6 terminology, and recruiter-ready positioning."
  },
];

export const GAP_INFUSIONS = [
  { gap: "P6 EPS/OBS/WBS Setup", where: "Weeks 1-2", why: "Construction scheduler roles expect you to know where projects live and how schedule structures are organized", severity: "critical" },
  { gap: "Construction WBS and CSI-style Scope", where: "Weeks 2-4", why: "A scheduler must understand real construction work, not just generic tasks", severity: "critical" },
  { gap: "Procurement and Submittal Logic", where: "Weeks 5-6", why: "Long-lead items, shop drawings, approvals, and delivery dates drive construction schedules", severity: "critical" },
  { gap: "CPM Relationships and Float", where: "Weeks 8-11", why: "Critical path, total float, free float, constraints, and calendars are core interview topics", severity: "critical" },
  { gap: "DCMA 14-Point Schedule Quality", where: "Weeks 12-13", why: "Quality checks separate a credible schedule from a pretty Gantt chart", severity: "critical" },
  { gap: "Monthly Update Cycle", where: "Weeks 14-16", why: "Schedulers live on data dates, actuals, remaining duration, percent complete, and narrative reports", severity: "critical" },
  { gap: "Lookahead and Field Coordination", where: "Weeks 16-17", why: "Superintendents need short-interval plans that connect to the master schedule", severity: "important" },
  { gap: "Delay and Recovery Narratives", where: "Weeks 18-21", why: "Schedulers support time-extension, acceleration, resequencing, and leadership decisions", severity: "important" },
  { gap: "Construction Controls Reporting", where: "Weeks 22-23", why: "Variance, milestones, critical activities, RFIs, submittals, and procurement status must become a clear report", severity: "edge" },
  { gap: "Portfolio and Interview Proof", where: "Week 24", why: "You need artifacts that show you can build, update, audit, and explain a P6-style schedule", severity: "edge" }
];

export const RESOURCES = [
  { icon: "🏗️", text: "Oracle Primavera P6 construction scheduling resources", url: "https://www.oracle.com/industries/construction-engineering/primavera-p6/" },
  { icon: "📘", text: "PMI Practice Standard for Scheduling", url: "https://www.pmi.org/" },
  { icon: "✅", text: "DCMA schedule assessment public resources", url: "https://www.dcma.mil/" },
  { icon: "📗", text: "AACE International recommended practices", url: "https://web.aacei.org/resources/recommended-practices" },
  { icon: "🧱", text: "CSI MasterFormat overview", url: "https://www.csiresources.org/standards/masterformat" },
  { icon: "📊", text: "Microsoft Project training for backup practice", url: "https://support.microsoft.com/office/project-training" },
  { icon: "🤖", text: "Claude - schedule critique, P6 vocabulary, and interview drills", url: "https://claude.ai" }
];

export const TUTOR_PROMPTS = [
  '"Teach me Primavera P6 for construction scheduling. Explain EPS, OBS, WBS, activities, relationships, calendars, constraints, activity codes, baselines, data date, layouts, filters, and schedule logs."',
  '"Turn this construction scope into a WBS, procurement log, submittal log, activity list, and milestone schedule."',
  '"Review my construction schedule for missing logic, open ends, bad lags, hard constraints, high float, negative float, and unrealistic sequencing."',
  '"Calculate the critical path and total float for this construction activity table, then explain it in interview language."',
  '"Audit this schedule using the DCMA 14-point check and explain every failed check in plain English."',
  '"Create a monthly schedule update narrative from this data date, actuals, delays, variance, and forecast finish."',
  '"Create a recovery plan for a construction project that is 20 working days behind because of submittal delays and MEP coordination issues."',
  '"Interview me for a P6 construction scheduler role and ask scenario questions about baselines, updates, critical path, delay, and recovery."'
];

export const WEEKS = [
  {
    week: 1,
    phase: 1,
    phaseTitle: "P6 & CONSTRUCTION FOUNDATIONS",
    title: "P6 Environment, Scheduler Role & Construction Lifecycle",
    cert: "P6",
    color: "#B7791F",
    gapBadges: ["P6", "ROLE"],
    objectives: [
      "Understand what construction schedulers control across planning, execution, and closeout",
      "Learn Primavera P6 vocabulary: EPS, OBS, WBS, activities, calendars, layouts, baselines, and data date",
      "Set up a realistic construction project shell and professional naming conventions",
      "Separate design, procurement, construction, commissioning, punch, and closeout milestones"
    ],
    services: ["Primavera P6", "EPS", "OBS", "WBS", "Calendars", "Milestones"],
    infused: ["P6 vocabulary", "Construction lifecycle", "Scheduler interview language"],
    topics: ["Primavera P6", "construction lifecycle", "EPS", "OBS", "WBS", "data date", "baseline", "milestones"],
    resources: [
      { type: "doc", name: "Oracle Primavera P6", url: "https://www.oracle.com/industries/construction-engineering/primavera-p6/" }
    ],
    prompts: [
      { title: "P6 Vocabulary Tutor", prompt: "Teach me P6 construction scheduling vocabulary with examples for EPS, OBS, WBS, activities, relationships, calendars, constraints, baselines, data date, layouts, filters, and schedule logs." },
      { title: "Construction Scheduler Role", prompt: "Explain what a construction project scheduler does each week on an active jobsite. Include meetings, update cycles, superintendent coordination, subcontractor inputs, reporting, and delay tracking." }
    ],
    labs: [
      {
        id: "p6-lab-1-1",
        title: "Create a P6-Style Project Shell",
        duration: "45 min",
        difficulty: "Beginner",
        steps: [
          "Use a sample project: 40,000 sq ft medical office build-out.",
          "Create an EPS path such as Portfolio > Healthcare > Medical Office.",
          "Create the project name, project ID, planned start date, and responsible manager.",
          "Define at least two calendars: standard 5-day workweek and weekend shutdown calendar.",
          "Create milestone placeholders for NTP, mobilization, permits, long-lead procurement, dry-in, MEP rough-in, finishes, inspections, substantial completion, and closeout."
        ],
        verify: "You can explain the project shell, calendar assumptions, milestone list, and where the project lives in a P6 environment."
      },
      {
        id: "p6-lab-1-2",
        title: "Construction Lifecycle Map",
        duration: "35 min",
        difficulty: "Beginner",
        steps: [
          "Map the project lifecycle into preconstruction, mobilization, procurement, sitework, structure, enclosure, MEP, interiors, commissioning, punch, and closeout.",
          "Add 2-3 risks or coordination needs under each stage.",
          "Mark which stages involve owner decisions, AHJ inspections, subcontractors, or vendors.",
          "Turn the map into a one-page scheduler reference."
        ],
        verify: "Lifecycle map shows construction phases, major stakeholders, risks, and milestone dependencies."
      }
    ],
    project: {
      id: "p6-proj-1",
      title: "P6 Project Setup Portfolio Artifact",
      description: "Create a polished starter package for a medical office construction schedule.",
      steps: [
        "Document EPS/OBS/WBS setup assumptions.",
        "Create calendars and milestone list.",
        "Write a scheduler role summary for this project.",
        "Export screenshots or tables as portfolio evidence."
      ],
      prompt: "Act as a senior construction scheduler. Review my P6-style project setup for a 40,000 sq ft medical office build-out and tell me what is missing before I build the full baseline schedule."
    }
  },
  {
    week: 2,
    phase: 1,
    phaseTitle: "P6 & CONSTRUCTION FOUNDATIONS",
    title: "Construction WBS, Activity Codes & Scope Breakdown",
    cert: "WBS",
    color: "#0F766E",
    gapBadges: ["WBS", "CODES"],
    objectives: [
      "Build a construction WBS that can support P6 layouts and reporting",
      "Translate scope into activities without losing procurement, submittals, inspections, or closeout",
      "Use activity codes for area, discipline, subcontractor, phase, and responsibility",
      "Create a coding structure that supports filtering and dashboard reporting"
    ],
    services: ["P6 WBS", "Activity Codes", "CSI Divisions", "Scope Breakdown"],
    infused: ["WBS development", "Construction scope", "Activity coding"],
    topics: ["WBS", "activity codes", "CSI", "work packages", "subcontractors", "areas", "disciplines"],
    resources: [
      { type: "doc", name: "CSI MasterFormat", url: "https://www.csiresources.org/standards/masterformat" }
    ],
    prompts: [
      { title: "WBS Builder", prompt: "Turn this medical office build-out scope into a 3-level construction WBS and activity code plan for area, discipline, phase, subcontractor, and responsible party." },
      { title: "Missing Scope Finder", prompt: "Review this construction WBS for missing procurement, submittals, inspections, testing, commissioning, punch list, turnover, and closeout activities." }
    ],
    labs: [
      {
        id: "p6-lab-2-1",
        title: "Build a 3-Level Construction WBS",
        duration: "55 min",
        difficulty: "Beginner",
        steps: [
          "Create level 1 WBS buckets for preconstruction, procurement, sitework, structure, enclosure, MEP, interiors, commissioning, and closeout.",
          "Create level 2 areas such as first floor, second floor, roof, exterior, and site.",
          "Create level 3 work packages such as framing, rough-in, drywall, ceiling grid, flooring, fixtures, testing, and inspections.",
          "Add deliverables and acceptance criteria to each major work package."
        ],
        verify: "WBS has at least 3 levels and covers construction, procurement, inspections, commissioning, punch, and closeout."
      },
      {
        id: "p6-lab-2-2",
        title: "Create Activity Code Dictionary",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Create activity code fields for area, discipline, phase, subcontractor, priority, and responsible party.",
          "Define at least 5 values for each code.",
          "Assign example codes to 20 activities.",
          "Create three filters: MEP only, critical area, and next 30 days."
        ],
        verify: "Activity code dictionary supports filtering by area, discipline, phase, subcontractor, and responsibility."
      }
    ],
    project: null
  },
  {
    week: 3,
    phase: 1,
    phaseTitle: "P6 & CONSTRUCTION FOUNDATIONS",
    title: "Procurement, Submittals, RFIs & Long-Lead Planning",
    cert: "WBS",
    color: "#0F766E",
    gapBadges: ["PROCUREMENT", "SUBMITTALS"],
    objectives: [
      "Connect procurement, submittals, RFIs, approvals, fabrication, delivery, and installation",
      "Plan long-lead items before field work is blocked",
      "Build procurement logic into the baseline schedule",
      "Create a submittal and procurement tracker that supports schedule updates"
    ],
    services: ["Submittal Log", "Procurement Log", "RFI Log", "Long-Lead Items"],
    infused: ["Procurement logic", "Submittal workflow", "Vendor coordination"],
    topics: ["submittals", "RFIs", "procurement", "fabrication", "delivery", "long lead", "approvals"],
    resources: [
      { type: "template", name: "Smartsheet construction templates", url: "https://www.smartsheet.com/construction-project-management" }
    ],
    prompts: [
      { title: "Procurement Logic Tutor", prompt: "Explain how submittals, approvals, procurement, fabrication, delivery, and installation should be linked in a construction CPM schedule." },
      { title: "Long-Lead Risk Finder", prompt: "Review this construction scope and identify long-lead items, approval risks, procurement constraints, and schedule activities I should add." }
    ],
    labs: [
      {
        id: "p6-lab-3-1",
        title: "Build a Procurement and Submittal Log",
        duration: "50 min",
        difficulty: "Intermediate",
        steps: [
          "List 12 long-lead or approval-heavy items: switchgear, air handlers, elevators, storefront, roofing, fire alarm, flooring, casework, medical gas, lighting, generators, and controls.",
          "Add columns for spec section, responsible subcontractor, planned submittal date, approval duration, procurement duration, delivery date, and linked install activity.",
          "Flag the top 5 schedule-critical items.",
          "Create a weekly update column for current status and forecast impact."
        ],
        verify: "Log shows planned dates, owners, durations, status, and linked installation activities."
      },
      {
        id: "p6-lab-3-2",
        title: "Link Procurement to Install Activities",
        duration: "45 min",
        difficulty: "Intermediate",
        steps: [
          "Create activity chains for submittal prepare, submit, review, revise, approve, procure, fabricate, deliver, and install.",
          "Assign realistic durations to each step.",
          "Link each chain to the relevant field installation activity.",
          "Identify at least 3 points where late approvals would delay field work."
        ],
        verify: "Procurement chains connect to field installation and reveal schedule risk before work starts."
      }
    ],
    project: {
      id: "p6-proj-3",
      title: "Procurement and Submittal Schedule Package",
      description: "Create a construction procurement schedule with submittal approval, fabrication, delivery, and install logic.",
      steps: [
        "Build a procurement and submittal log.",
        "Create schedule activities for long-lead items.",
        "Link procurement chains to field installation.",
        "Write a risk note for the top 5 long-lead items."
      ],
      prompt: "Act as a construction project controls lead. Review my procurement and submittal schedule package and tell me which long-lead items are most likely to delay the project."
    }
  },
  {
    week: 4,
    phase: 1,
    phaseTitle: "P6 & CONSTRUCTION FOUNDATIONS",
    title: "CPM Relationships, Calendars, Lags & Constraints",
    cert: "CPM",
    color: "#2563EB",
    gapBadges: ["CPM", "LOGIC"],
    objectives: [
      "Use FS, SS, FF, and SF relationships correctly in construction schedules",
      "Understand total float, free float, negative float, driving logic, and open ends",
      "Use leads, lags, and constraints only when defensible",
      "Explain how calendars affect critical path and forecast finish"
    ],
    services: ["CPM", "Relationships", "Calendars", "Constraints", "Float"],
    infused: ["CPM logic", "Critical path", "Schedule quality"],
    topics: ["finish-to-start", "start-to-start", "finish-to-finish", "lag", "constraint", "total float", "free float", "calendar"],
    resources: [
      { type: "doc", name: "PMI scheduling standards", url: "https://www.pmi.org/" }
    ],
    prompts: [
      { title: "CPM Logic Coach", prompt: "Teach me construction CPM logic with FS, SS, FF, SF, leads, lags, constraints, total float, free float, and driving relationships. Use a drywall and MEP example." },
      { title: "Logic Review", prompt: "Review this schedule logic table and identify open starts, open finishes, questionable lags, hard constraints, calendar issues, and weak sequencing." }
    ],
    labs: [
      {
        id: "p6-lab-4-1",
        title: "Create a CPM Logic Network",
        duration: "60 min",
        difficulty: "Intermediate",
        steps: [
          "Build a 40-activity network for one building area.",
          "Include layout, rough-in, inspections, insulation, drywall, paint, ceiling grid, flooring, trim, fixtures, testing, and punch.",
          "Use FS, SS, and FF relationships where appropriate.",
          "Identify the critical path and at least 5 near-critical activities.",
          "Document why any lag or constraint exists."
        ],
        verify: "Network has full logic, a visible critical path, near-critical work, and documented lags or constraints."
      },
      {
        id: "p6-lab-4-2",
        title: "Calendar Impact Drill",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Create separate calendars for standard work, weekend work, inspections, and owner approvals.",
          "Apply calendars to relevant activities.",
          "Compare finish dates before and after calendar assignment.",
          "Write a short note explaining how calendars changed float and finish forecast."
        ],
        verify: "You can explain why calendars changed activity dates, float, and critical path."
      }
    ],
    project: null
  },
  {
    week: 5,
    phase: 1,
    phaseTitle: "P6 & CONSTRUCTION FOUNDATIONS",
    title: "Critical Path, Float Analysis & Schedule Narrative",
    cert: "CPM",
    color: "#2563EB",
    gapBadges: ["CRITICAL PATH", "FLOAT"],
    objectives: [
      "Identify critical, near-critical, and longest path activities",
      "Explain float without sounding like a textbook",
      "Create a schedule narrative that explains drivers and risks",
      "Prepare for common scheduler interview questions about critical path"
    ],
    services: ["Longest Path", "Total Float", "Near-Critical", "Narrative"],
    infused: ["Critical path explanation", "Float analysis", "Interview language"],
    topics: ["critical path", "longest path", "total float", "near critical", "schedule narrative", "forecast finish"],
    resources: [
      { type: "doc", name: "AACE recommended practices", url: "https://web.aacei.org/resources/recommended-practices" }
    ],
    prompts: [
      { title: "Critical Path Interview Drill", prompt: "Interview me on construction critical path and float. Ask me scenario questions and correct my answers in scheduler language." },
      { title: "Narrative Writer", prompt: "Write a monthly schedule narrative from this critical path, near-critical path, float, milestone, and risk information." }
    ],
    labs: [
      {
        id: "p6-lab-5-1",
        title: "Critical Path Explanation Sheet",
        duration: "45 min",
        difficulty: "Intermediate",
        steps: [
          "Select the top 10 critical activities from your schedule.",
          "Identify the predecessor and successor driving each one.",
          "Mark near-critical activities with 0-10 days float.",
          "Write a plain-English explanation of the current critical path.",
          "Create 5 interview answers using your schedule as evidence."
        ],
        verify: "Critical path explanation names the work, drivers, float position, and forecast finish impact."
      },
      {
        id: "p6-lab-5-2",
        title: "Float Abuse Cleanup",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Find activities with unusually high float.",
          "Find activities with negative float.",
          "Find tasks with missing predecessors or successors.",
          "Replace weak logic with real construction sequence.",
          "Update the narrative with what changed."
        ],
        verify: "Schedule has fewer open ends, fewer questionable float values, and a cleaner critical path."
      }
    ],
    project: {
      id: "p6-proj-5",
      title: "CPM Logic and Critical Path Package",
      description: "Create a CPM schedule section with logic review, critical path explanation, and interview-ready narrative.",
      steps: [
        "Build or refine a 40-activity CPM network.",
        "Identify critical and near-critical paths.",
        "Clean open ends and questionable constraints.",
        "Write a one-page critical path narrative."
      ],
      prompt: "Act as a P6 construction scheduler hiring manager. Review my CPM logic and critical path package, then ask 8 interview questions based on it."
    }
  },
  {
    week: 6,
    phase: 1,
    phaseTitle: "P6 & CONSTRUCTION FOUNDATIONS",
    title: "Baseline Schedule, DCMA 14-Point Check & Quality Audit",
    cert: "QUAL",
    color: "#10B981",
    gapBadges: ["BASELINE", "DCMA"],
    objectives: [
      "Create a baseline schedule and protect it from casual changes",
      "Run a DCMA-style 14-point schedule quality check",
      "Find missing logic, leads, lags, constraints, high float, negative float, high duration, and invalid dates",
      "Create a quality audit report that explains issues and fixes"
    ],
    services: ["Baseline", "DCMA 14-Point", "Schedule Quality", "Audit Report"],
    infused: ["DCMA quality checks", "Baseline control", "Schedule audit"],
    topics: ["baseline", "DCMA 14-point", "missing logic", "negative float", "high float", "leads", "lags", "constraints"],
    resources: [
      { type: "doc", name: "DCMA public site", url: "https://www.dcma.mil/" }
    ],
    prompts: [
      { title: "DCMA Tutor", prompt: "Teach me the DCMA 14-point schedule assessment in plain English. For each point, explain what it checks, why it matters, and how I would fix a failed item in P6." },
      { title: "Audit Report Writer", prompt: "Turn these schedule quality findings into a concise construction schedule audit report with issue, risk, fix, and owner." }
    ],
    labs: [
      {
        id: "p6-lab-6-1",
        title: "Run a DCMA-Style Schedule Audit",
        duration: "70 min",
        difficulty: "Advanced",
        steps: [
          "Check for missing predecessors and successors.",
          "Check for excessive leads, lags, hard constraints, high float, negative float, and high-duration activities.",
          "Check invalid forecast dates and baseline execution issues.",
          "Create a pass/fail table for each quality point.",
          "Assign corrective actions and owners."
        ],
        verify: "Audit report shows each check, result, schedule risk, and corrective action."
      },
      {
        id: "p6-lab-6-2",
        title: "Create and Defend the Baseline",
        duration: "45 min",
        difficulty: "Intermediate",
        steps: [
          "Save the clean version as baseline 1.",
          "Create a baseline assumptions page.",
          "Define when re-baselining is allowed.",
          "Compare current plan against baseline.",
          "Write a 5-sentence baseline defense for leadership."
        ],
        verify: "Baseline package includes assumptions, change rules, comparison logic, and a leadership explanation."
      }
    ],
    project: {
      id: "p6-proj-6",
      title: "Baseline and DCMA Quality Report",
      description: "Create a baseline schedule package with DCMA-style quality findings and corrective actions.",
      steps: [
        "Save the baseline.",
        "Run schedule quality checks.",
        "Document failed items and fixes.",
        "Create a baseline defense narrative."
      ],
      prompt: "Act as a project controls manager. Review my baseline and DCMA-style quality report and tell me whether this schedule is credible enough to submit."
    }
  },
  {
    week: 7,
    phase: 2,
    phaseTitle: "FIELD UPDATES, CONTROLS & REPORTING",
    title: "Monthly Update Cycle, Data Date & Actuals",
    cert: "UPD",
    color: "#7C3AED",
    gapBadges: ["UPDATE", "DATA DATE"],
    objectives: [
      "Run a monthly schedule update cycle",
      "Collect progress from superintendent, subcontractors, procurement, and project manager",
      "Enter actual starts, actual finishes, remaining duration, and percent complete",
      "Move the data date and explain variance from baseline"
    ],
    services: ["Data Date", "Actuals", "Remaining Duration", "Percent Complete", "Variance"],
    infused: ["Schedule updating", "Progress collection", "Forecast control"],
    topics: ["data date", "actual start", "actual finish", "remaining duration", "percent complete", "baseline variance", "forecast finish"],
    resources: [
      { type: "doc", name: "Oracle Primavera P6", url: "https://www.oracle.com/industries/construction-engineering/primavera-p6/" }
    ],
    prompts: [
      { title: "Update Cycle Tutor", prompt: "Teach me the monthly construction schedule update process in P6 from progress collection to data date movement, actuals, remaining duration, variance, and narrative reporting." },
      { title: "Variance Explainer", prompt: "Given this baseline, current update, and data date, explain schedule variance, forecast finish, critical path changes, and decisions needed." }
    ],
    labs: [
      {
        id: "p6-lab-7-1",
        title: "Run Update Period 1",
        duration: "60 min",
        difficulty: "Intermediate",
        steps: [
          "Set the data date one month after project start.",
          "Enter actual starts and finishes for completed activities.",
          "Update remaining duration for in-progress activities.",
          "Update procurement and submittal status.",
          "Reschedule and compare forecast finish against baseline."
        ],
        verify: "Updated schedule has a data date, actuals, remaining durations, baseline comparison, and forecast finish."
      },
      {
        id: "p6-lab-7-2",
        title: "Monthly Update Narrative",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Summarize work completed this period.",
          "List work planned next period.",
          "Identify critical path changes.",
          "Explain milestone variance and top risks.",
          "Write decisions needed from leadership."
        ],
        verify: "Narrative connects actual progress, variance, critical path, risks, and decisions."
      }
    ],
    project: null
  },
  {
    week: 8,
    phase: 2,
    phaseTitle: "FIELD UPDATES, CONTROLS & REPORTING",
    title: "Lookahead Schedules, Constraints & Field Coordination",
    cert: "UPD",
    color: "#7C3AED",
    gapBadges: ["LOOKAHEAD", "FIELD"],
    objectives: [
      "Create 2-week and 6-week lookahead schedules from the master schedule",
      "Track field constraints before they block crews",
      "Coordinate sequencing with superintendent and trade partners",
      "Connect short-interval plans back to the baseline and monthly update"
    ],
    services: ["Lookahead", "Constraint Log", "Trade Coordination", "Superintendent Meetings"],
    infused: ["Field coordination", "Short-interval planning", "Constraint removal"],
    topics: ["lookahead", "constraints", "trade coordination", "superintendent", "crew flow", "make-ready"],
    resources: [
      { type: "template", name: "Smartsheet construction planning", url: "https://www.smartsheet.com/construction-project-management" }
    ],
    prompts: [
      { title: "Lookahead Builder", prompt: "Create a 6-week construction lookahead from this master schedule. Include activities, owners, constraints, needed decisions, and readiness status." },
      { title: "Field Coordination Coach", prompt: "Help me prepare for a superintendent schedule meeting. Give me questions to ask about constraints, crew flow, procurement, inspections, and near-critical work." }
    ],
    labs: [
      {
        id: "p6-lab-8-1",
        title: "Build a 6-Week Lookahead",
        duration: "50 min",
        difficulty: "Intermediate",
        steps: [
          "Filter the master schedule for activities starting or finishing in the next 6 weeks.",
          "Group by area and trade.",
          "Add columns for owner, constraint, readiness, material status, and inspection need.",
          "Highlight critical and near-critical activities.",
          "Create a meeting-ready PDF or table."
        ],
        verify: "Lookahead shows upcoming work by area/trade with owners, constraints, readiness, and criticality."
      },
      {
        id: "p6-lab-8-2",
        title: "Constraint Log Drill",
        duration: "35 min",
        difficulty: "Beginner",
        steps: [
          "Create a constraint log for access, design, materials, labor, inspections, permits, owner decisions, and coordination.",
          "Link each constraint to a schedule activity.",
          "Assign owner and required-by date.",
          "Mark impact if the constraint is not cleared.",
          "Use it to update the lookahead."
        ],
        verify: "Constraint log links blockers to schedule activities and required-by dates."
      }
    ],
    project: {
      id: "p6-proj-8",
      title: "6-Week Lookahead and Constraint Package",
      description: "Create a field coordination package that converts the master schedule into near-term execution control.",
      steps: [
        "Create a 6-week lookahead.",
        "Build a linked constraint log.",
        "Flag critical and near-critical field work.",
        "Write superintendent meeting talking points."
      ],
      prompt: "Act as a construction superintendent and critique my 6-week lookahead. Tell me what is unclear, what constraints are missing, and what could fail in the field."
    }
  },
  {
    week: 9,
    phase: 2,
    phaseTitle: "FIELD UPDATES, CONTROLS & REPORTING",
    title: "Delay Tracking, Fragnets & Time Impact Thinking",
    cert: "REC",
    color: "#EF4444",
    gapBadges: ["DELAY", "FRAGNET"],
    objectives: [
      "Track delays without turning every issue into a claim",
      "Understand fragnets, time impact analysis, and contemporaneous documentation",
      "Connect RFIs, submittals, weather, procurement, inspections, and change orders to schedule impact",
      "Write neutral delay notes that support decision-making"
    ],
    services: ["Delay Log", "Fragnet", "TIA", "RFI", "Change Orders"],
    infused: ["Delay tracking", "Claims support", "Schedule impact logic"],
    topics: ["delay", "fragnet", "time impact analysis", "RFI", "change order", "weather", "documentation"],
    resources: [
      { type: "doc", name: "AACE recommended practices", url: "https://web.aacei.org/resources/recommended-practices" }
    ],
    prompts: [
      { title: "Delay Analysis Tutor", prompt: "Teach me construction delay tracking, fragnets, time impact analysis, contemporaneous documentation, excusable delay, compensable delay, and recovery options in practical scheduler language." },
      { title: "Delay Narrative", prompt: "Write a neutral schedule delay narrative from this issue log, impacted activities, critical path status, and forecast finish change." }
    ],
    labs: [
      {
        id: "p6-lab-9-1",
        title: "Create a Delay Impact Log",
        duration: "45 min",
        difficulty: "Intermediate",
        steps: [
          "Create 8 sample delay events: late submittal approval, weather, permit delay, design change, inspection failure, material shortage, owner decision delay, and trade stacking.",
          "Link each delay to impacted activities.",
          "Mark whether the activity is critical, near-critical, or non-critical.",
          "Estimate current and potential forecast impact.",
          "Add required documentation for each event."
        ],
        verify: "Delay log links events to activities, criticality, impact, and documentation."
      },
      {
        id: "p6-lab-9-2",
        title: "Build a Simple Fragnet",
        duration: "50 min",
        difficulty: "Advanced",
        steps: [
          "Pick one delay event such as owner-directed scope change in exam rooms.",
          "Create fragnet activities for redesign, approval, procurement, install, inspection, and turnover.",
          "Insert the fragnet into the impacted area logic.",
          "Compare finish dates before and after insertion.",
          "Write the time impact summary."
        ],
        verify: "Fragnet shows the added work, logic ties, before/after finish impact, and a short narrative."
      }
    ],
    project: null
  },
  {
    week: 10,
    phase: 2,
    phaseTitle: "FIELD UPDATES, CONTROLS & REPORTING",
    title: "Recovery Scheduling, Acceleration & Resequencing",
    cert: "REC",
    color: "#EF4444",
    gapBadges: ["RECOVERY", "ACCELERATION"],
    objectives: [
      "Create recovery options when the schedule slips",
      "Compare resequencing, overtime, second shift, added crews, prefabrication, and scope prioritization",
      "Understand recovery tradeoffs: cost, safety, quality, crew stacking, and rework",
      "Write a recovery plan leadership can actually act on"
    ],
    services: ["Recovery Plan", "Acceleration", "Resequencing", "What-If Analysis"],
    infused: ["Recovery planning", "Executive decisions", "Tradeoff analysis"],
    topics: ["recovery", "acceleration", "resequencing", "overtime", "crew stacking", "what-if", "forecast finish"],
    resources: [
      { type: "doc", name: "PMI scheduling standards", url: "https://www.pmi.org/" }
    ],
    prompts: [
      { title: "Recovery Options Coach", prompt: "Create recovery options for a construction project that is 20 working days behind. Compare resequencing, overtime, second shift, added crews, prefabrication, and scope prioritization with cost, risk, and schedule benefit." },
      { title: "Executive Recovery Memo", prompt: "Write an executive recovery memo with current delay, root cause, options, recommendation, risks, and decisions needed." }
    ],
    labs: [
      {
        id: "p6-lab-10-1",
        title: "Create Three Recovery Scenarios",
        duration: "60 min",
        difficulty: "Advanced",
        steps: [
          "Use a project that is 20 working days behind.",
          "Create scenario A: resequence non-critical interiors.",
          "Create scenario B: add weekend work for critical MEP testing.",
          "Create scenario C: add a second shift for finishes and punch.",
          "Compare finish date, risk, cost implication, and field feasibility.",
          "Choose one recommendation."
        ],
        verify: "Recovery scenarios show schedule benefit, tradeoffs, and a clear recommendation."
      },
      {
        id: "p6-lab-10-2",
        title: "Recovery Narrative Drill",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Write the current status in 3 sentences.",
          "Explain why the project slipped.",
          "Describe the selected recovery approach.",
          "List owner, GC, and subcontractor decisions needed.",
          "Add risks that remain after recovery."
        ],
        verify: "Narrative is factual, decision-oriented, and tied to schedule evidence."
      }
    ],
    project: {
      id: "p6-proj-10",
      title: "Recovery Schedule and Executive Memo",
      description: "Create a recovery plan package with what-if scenarios and a leadership recommendation.",
      steps: [
        "Build three recovery options.",
        "Compare dates, risks, and cost implications.",
        "Pick a recommended path.",
        "Write an executive memo."
      ],
      prompt: "Act as an owner representative. Review my recovery schedule and executive memo, then challenge the assumptions, risks, and decision request."
    }
  },
  {
    week: 11,
    phase: 2,
    phaseTitle: "FIELD UPDATES, CONTROLS & REPORTING",
    title: "Construction Controls Dashboard & Leadership Reporting",
    cert: "JOB",
    color: "#F59E0B",
    gapBadges: ["REPORTING", "DASHBOARD"],
    objectives: [
      "Turn P6 schedule data into a leadership-ready dashboard",
      "Report milestones, critical path, variance, risks, constraints, procurement, RFIs, submittals, and decisions",
      "Create a scheduler narrative that is concise and credible",
      "Prepare artifacts for recruiter screens and interviews"
    ],
    services: ["Dashboard", "Variance", "Milestones", "Risk Report", "Executive Summary"],
    infused: ["Leadership reporting", "Project controls language", "Portfolio evidence"],
    topics: ["dashboard", "variance", "milestones", "critical path", "RFI", "submittal", "procurement", "constraints"],
    resources: [
      { type: "template", name: "Construction project management templates", url: "https://www.smartsheet.com/construction-project-management" }
    ],
    prompts: [
      { title: "Dashboard Designer", prompt: "Design a construction schedule dashboard with milestone variance, critical path, near-critical work, procurement status, submittals, RFIs, constraints, risks, and decisions needed." },
      { title: "Scheduler Status Writer", prompt: "Write a construction scheduler status report from these schedule metrics. Keep it concise, factual, and leadership-ready." }
    ],
    labs: [
      {
        id: "p6-lab-11-1",
        title: "Build a Schedule Dashboard",
        duration: "60 min",
        difficulty: "Intermediate",
        steps: [
          "Create dashboard sections for milestone status, baseline variance, critical path, near-critical work, procurement, submittals, RFIs, constraints, and decisions needed.",
          "Use simple red/yellow/green status logic.",
          "Add one chart or table for milestone variance.",
          "Add one table for top 10 critical activities.",
          "Add a concise executive summary."
        ],
        verify: "Dashboard tells leaders what changed, what is at risk, and what decisions are needed."
      },
      {
        id: "p6-lab-11-2",
        title: "Recruiter Screen Story Prep",
        duration: "30 min",
        difficulty: "Beginner",
        steps: [
          "Write a 45-second explanation of your P6 construction scheduler training plan.",
          "Write 5 bullets describing your schedule artifacts.",
          "Prepare answers for baseline, critical path, DCMA, data date, and recovery questions.",
          "Practice explaining your dashboard without reading it."
        ],
        verify: "You have interview-ready talking points tied to concrete artifacts."
      }
    ],
    project: {
      id: "p6-proj-11",
      title: "Construction Controls Dashboard",
      description: "Create a dashboard that summarizes schedule health, risks, variance, and decisions for leadership.",
      steps: [
        "Build the dashboard layout.",
        "Add milestone and variance metrics.",
        "Add critical path, procurement, submittal, RFI, and constraint sections.",
        "Write the executive summary."
      ],
      prompt: "Act as a VP of construction. Review my schedule dashboard and tell me what I would ask in the meeting, what looks weak, and what I should improve."
    }
  },
  {
    week: 12,
    phase: 2,
    phaseTitle: "FIELD UPDATES, CONTROLS & REPORTING",
    title: "Portfolio, Resume Language & P6 Scheduler Interview Prep",
    cert: "JOB",
    color: "#F59E0B",
    gapBadges: ["PORTFOLIO", "INTERVIEW"],
    objectives: [
      "Package your P6 construction scheduler artifacts into a clean portfolio",
      "Translate existing PM/Scrum experience into scheduler and project controls language",
      "Practice P6, CPM, baseline, DCMA, update, delay, recovery, and reporting interview questions",
      "Create job-search language for Project Scheduler, P6 Scheduler, Project Controls Analyst, and PMO Scheduler roles"
    ],
    services: ["Portfolio", "Resume", "Interview Prep", "STAR Stories"],
    infused: ["Interview preparation", "Resume positioning", "Portfolio evidence"],
    topics: ["portfolio", "resume", "interview", "P6 scheduler", "project controls", "STAR stories", "construction scheduling"],
    resources: [
      { type: "doc", name: "Oracle Primavera P6", url: "https://www.oracle.com/industries/construction-engineering/primavera-p6/" },
      { type: "doc", name: "AACE International", url: "https://web.aacei.org/" }
    ],
    prompts: [
      { title: "P6 Interview Simulator", prompt: "Interview me for a P6 construction scheduler role. Ask 20 questions across P6 setup, WBS, CPM logic, baseline, DCMA 14-point check, monthly updates, delays, recovery planning, reporting, and superintendent coordination." },
      { title: "Resume Translator", prompt: "Translate my PM/Scrum delivery background into construction scheduler and project controls resume bullets. Emphasize schedules, dependencies, baselines, risks, milestone reporting, stakeholders, recovery plans, and executive updates without lying about direct construction experience." }
    ],
    labs: [
      {
        id: "p6-lab-12-1",
        title: "Assemble the P6 Scheduler Portfolio",
        duration: "75 min",
        difficulty: "Advanced",
        steps: [
          "Collect your project setup, WBS, procurement log, CPM logic, baseline audit, update narrative, lookahead, delay log, recovery memo, and dashboard.",
          "Create a one-page portfolio index.",
          "Export screenshots, PDFs, or tables that do not expose private data.",
          "Write a short caption explaining each artifact.",
          "Add a lessons-learned page."
        ],
        verify: "Portfolio package proves you can build, update, audit, report, and explain a P6-style construction schedule."
      },
      {
        id: "p6-lab-12-2",
        title: "Mock Interview Sprint",
        duration: "60 min",
        difficulty: "Advanced",
        steps: [
          "Answer 10 P6 terminology questions.",
          "Answer 10 construction scheduling scenario questions.",
          "Explain your portfolio in 3 minutes.",
          "Explain a schedule delay and recovery plan.",
          "Refine weak answers into STAR stories."
        ],
        verify: "You can discuss P6, CPM, updates, DCMA checks, delays, recovery, and reporting with specific examples."
      }
    ],
    project: {
      id: "p6-proj-12",
      title: "P6 Construction Scheduler Interview Portfolio",
      description: "Package every artifact into a job-search-ready portfolio and interview prep kit.",
      steps: [
        "Assemble all artifacts.",
        "Write portfolio captions.",
        "Create resume bullets and LinkedIn language.",
        "Complete mock interview practice."
      ],
      prompt: "Act as a construction scheduling hiring panel. Review my P6 construction scheduler portfolio, ask hard questions, and tell me whether I am ready to apply for entry-level or transitional scheduler roles."
    }
  },
  {
    week: 13,
    phase: 3,
    phaseTitle: "ADVANCED CONTROLS & DELAY READINESS",
    title: "Advanced Baseline Management & Change Control",
    cert: "QUAL",
    color: "#10B981",
    gapBadges: ["BASELINE", "CHANGE"],
    objectives: [
      "Compare original baseline, current baseline, and working forecast schedules",
      "Track approved changes without corrupting the baseline",
      "Create a baseline change log with reason, approval, and schedule impact",
      "Explain re-baseline versus forecast update decisions"
    ],
    services: ["Baseline Change Log", "Variance", "Change Orders", "Forecast"],
    infused: ["Baseline governance", "Change control", "Variance discipline"],
    topics: ["baseline", "re-baseline", "change order", "forecast", "variance", "approved change"],
    resources: [
      { type: "doc", name: "PMI scheduling standards", url: "https://www.pmi.org/" }
    ],
    prompts: [
      { title: "Baseline Governance Coach", prompt: "Teach me how construction schedulers manage original baseline, current baseline, working forecast, re-baselining, and approved change orders without losing schedule control." },
      { title: "Change Log Reviewer", prompt: "Review this baseline change log and tell me whether each item should be a baseline change, forecast update, delay event, or management reserve item." }
    ],
    labs: [
      {
        id: "p6-lab-13-1",
        title: "Build a Baseline Change Log",
        duration: "50 min",
        difficulty: "Intermediate",
        steps: [
          "Create 8 sample change events: owner scope change, AHJ requirement, design clarification, added equipment, weather day, late procurement, failed inspection, and acceleration directive.",
          "Add columns for requested-by, approval status, impacted activities, baseline impact, forecast impact, and documentation.",
          "Classify each event as baseline change, forecast update, or delay tracking item.",
          "Write a one-paragraph governance rule for when re-baselining is allowed."
        ],
        verify: "Change log separates approved baseline movement from forecast variance and delay tracking."
      },
      {
        id: "p6-lab-13-2",
        title: "Baseline vs Forecast Variance Table",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Pick 12 milestones from your schedule.",
          "Add baseline finish, current forecast finish, variance days, reason code, and action owner.",
          "Highlight milestones with more than 10 working days variance.",
          "Write the variance explanation for leadership."
        ],
        verify: "Variance table shows milestone movement, reasons, owners, and management actions."
      }
    ],
    project: {
      id: "p6-proj-13",
      title: "Baseline Governance Package",
      description: "Create a baseline change log and variance report that proves you can control approved changes and forecast movement.",
      steps: [
        "Build the baseline change log.",
        "Create milestone variance table.",
        "Write re-baseline rules.",
        "Create leadership explanation."
      ],
      prompt: "Act as a construction project controls director. Review my baseline governance package and tell me whether my baseline change decisions are defensible."
    }
  },
  {
    week: 14,
    phase: 3,
    phaseTitle: "ADVANCED CONTROLS & DELAY READINESS",
    title: "P6 Progress Updates, Percent Complete & Earned Progress",
    cert: "UPD",
    color: "#7C3AED",
    gapBadges: ["UPDATE", "EARNED"],
    objectives: [
      "Understand physical percent complete, duration percent complete, and units percent complete",
      "Collect progress from field teams without accepting vague status",
      "Update remaining duration and forecast finish based on real work progress",
      "Explain why percent complete can be misleading if remaining duration is wrong"
    ],
    services: ["Percent Complete", "Remaining Duration", "Progress Rules", "Field Input"],
    infused: ["Progress discipline", "Earned progress", "Field verification"],
    topics: ["percent complete", "remaining duration", "actuals", "progress", "earned value", "field verification"],
    resources: [
      { type: "doc", name: "Oracle Primavera P6", url: "https://www.oracle.com/industries/construction-engineering/primavera-p6/" }
    ],
    prompts: [
      { title: "Percent Complete Tutor", prompt: "Explain physical percent complete, duration percent complete, units percent complete, remaining duration, and why field progress must be validated in construction scheduling." },
      { title: "Progress Question Builder", prompt: "Give me field update questions to ask a superintendent and subcontractors so I can update actuals and remaining duration accurately." }
    ],
    labs: [
      {
        id: "p6-lab-14-1",
        title: "Progress Collection Sheet",
        duration: "45 min",
        difficulty: "Intermediate",
        steps: [
          "Create a progress collection sheet for 20 active activities.",
          "Add fields for actual start, actual finish, percent complete, remaining duration, crew count, constraint, and forecast finish.",
          "Create field verification questions for each trade.",
          "Flag any activity where percent complete and remaining duration do not agree."
        ],
        verify: "Progress sheet gives enough evidence to update the P6 schedule without guessing."
      },
      {
        id: "p6-lab-14-2",
        title: "Remaining Duration Correction Drill",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Pick 10 in-progress activities.",
          "Assign original duration, percent complete, and reported remaining duration.",
          "Find activities where remaining duration is unrealistic.",
          "Correct the remaining duration and explain forecast impact.",
          "Update the monthly narrative."
        ],
        verify: "Corrected update explains how remaining duration changed forecast dates."
      }
    ],
    project: null
  },
  {
    week: 15,
    phase: 3,
    phaseTitle: "ADVANCED CONTROLS & DELAY READINESS",
    title: "Cost Loading, Resource Loading & S-Curve Basics",
    cert: "UPD",
    color: "#7C3AED",
    gapBadges: ["RESOURCE", "COST"],
    objectives: [
      "Understand the difference between resource loading and cost loading",
      "Create labor, equipment, and cost assumptions for schedule activities",
      "Build a simple planned versus actual S-curve",
      "Explain how schedule progress connects to earned value and cash flow"
    ],
    services: ["Resource Loading", "Cost Loading", "S-Curve", "Earned Value"],
    infused: ["Project controls", "Cost-schedule integration", "S-curve reporting"],
    topics: ["resource loading", "cost loading", "S-curve", "earned value", "labor", "cash flow"],
    resources: [
      { type: "doc", name: "AACE International recommended practices", url: "https://web.aacei.org/resources/recommended-practices" }
    ],
    prompts: [
      { title: "Resource Loading Tutor", prompt: "Teach me construction schedule resource loading and cost loading. Explain labor units, equipment, cost curves, planned value, earned value, and S-curves in beginner-friendly terms." },
      { title: "S-Curve Builder", prompt: "Create a simple planned versus actual S-curve table from this activity list, planned dates, budget weights, and actual progress." }
    ],
    labs: [
      {
        id: "p6-lab-15-1",
        title: "Create a Resource Loading Table",
        duration: "55 min",
        difficulty: "Intermediate",
        steps: [
          "Select 25 construction activities.",
          "Assign trade, crew size, planned duration, labor hours, and equipment needs.",
          "Identify peak labor weeks and possible crew stacking.",
          "Adjust sequencing to smooth unrealistic resource demand."
        ],
        verify: "Resource table exposes labor peaks, crew stacking, and sequencing tradeoffs."
      },
      {
        id: "p6-lab-15-2",
        title: "Build a Basic S-Curve",
        duration: "50 min",
        difficulty: "Intermediate",
        steps: [
          "Assign simple budget weights to 20 activities.",
          "Spread planned value by week.",
          "Add actual earned progress for the first update period.",
          "Create a planned versus actual table.",
          "Write a summary of whether progress is ahead or behind plan."
        ],
        verify: "S-curve table connects schedule dates, budget weight, and actual progress."
      }
    ],
    project: {
      id: "p6-proj-15",
      title: "Resource and S-Curve Controls Package",
      description: "Create a resource loading and S-curve package that connects construction schedule work to labor and progress reporting.",
      steps: [
        "Create resource loading table.",
        "Build planned versus actual S-curve.",
        "Identify labor peaks and constraints.",
        "Write controls summary."
      ],
      prompt: "Act as a project controls analyst. Review my resource loading and S-curve package and tell me what a construction PM would challenge."
    }
  },
  {
    week: 16,
    phase: 3,
    phaseTitle: "ADVANCED CONTROLS & DELAY READINESS",
    title: "Rolling Updates, Lookahead Control & Superintendent Rhythm",
    cert: "UPD",
    color: "#7C3AED",
    gapBadges: ["LOOKAHEAD", "RHYTHM"],
    objectives: [
      "Run a repeatable weekly scheduling rhythm",
      "Connect weekly lookaheads to the monthly master schedule update",
      "Use constraints, commitments, and missed commitments to improve forecast accuracy",
      "Prepare superintendent-ready meeting notes"
    ],
    services: ["Weekly Rhythm", "Lookahead", "Commitments", "Constraint Log"],
    infused: ["Field rhythm", "Weekly control", "Make-ready planning"],
    topics: ["weekly update", "lookahead", "constraint log", "commitments", "superintendent", "make-ready"],
    resources: [
      { type: "template", name: "Construction project management templates", url: "https://www.smartsheet.com/construction-project-management" }
    ],
    prompts: [
      { title: "Weekly Rhythm Coach", prompt: "Design a weekly construction scheduler rhythm that includes superintendent check-ins, subcontractor progress, procurement status, constraints, lookahead updates, and master schedule impacts." },
      { title: "Meeting Prep", prompt: "Prepare superintendent meeting questions based on this 6-week lookahead, constraints, critical activities, missed commitments, and next milestones." }
    ],
    labs: [
      {
        id: "p6-lab-16-1",
        title: "Create a Weekly Scheduler Rhythm",
        duration: "40 min",
        difficulty: "Beginner",
        steps: [
          "Create a weekly calendar for Monday schedule review, Tuesday trade inputs, Wednesday lookahead update, Thursday risk review, and Friday report prep.",
          "Define what data is collected each day.",
          "Create a standard meeting agenda.",
          "Create a weekly output checklist."
        ],
        verify: "Weekly rhythm shows what the scheduler does, when, with whom, and what outputs are produced."
      },
      {
        id: "p6-lab-16-2",
        title: "Missed Commitment Analysis",
        duration: "45 min",
        difficulty: "Intermediate",
        steps: [
          "List 12 planned activities from last week.",
          "Mark completed, partially completed, or missed.",
          "Assign reason codes for misses.",
          "Link missed commitments to forecast impact.",
          "Update next week's lookahead with recovery actions."
        ],
        verify: "Missed commitment log explains why work slipped and how next week changes."
      }
    ],
    project: {
      id: "p6-proj-16",
      title: "Weekly Scheduler Operating System",
      description: "Create your repeatable weekly scheduler workflow with meetings, inputs, outputs, and lookahead controls.",
      steps: [
        "Build weekly rhythm calendar.",
        "Create meeting agenda.",
        "Create missed commitment log.",
        "Write weekly scheduler checklist."
      ],
      prompt: "Act as a construction superintendent. Review my weekly scheduler operating system and tell me whether it would actually help field execution."
    }
  },
  {
    week: 17,
    phase: 3,
    phaseTitle: "ADVANCED CONTROLS & DELAY READINESS",
    title: "MEP Coordination, Inspections & Commissioning Logic",
    cert: "REC",
    color: "#EF4444",
    gapBadges: ["MEP", "CX"],
    objectives: [
      "Build schedule logic for MEP rough-in, above-ceiling, testing, inspections, and commissioning",
      "Understand coordination risks between mechanical, electrical, plumbing, fire protection, controls, and low voltage",
      "Create inspection and commissioning milestone chains",
      "Identify common MEP drivers of late project finish"
    ],
    services: ["MEP", "Commissioning", "Inspections", "Testing"],
    infused: ["MEP sequencing", "Commissioning logic", "Inspection readiness"],
    topics: ["MEP", "commissioning", "testing", "inspection", "above ceiling", "controls", "fire alarm"],
    resources: [
      { type: "doc", name: "AACE International", url: "https://web.aacei.org/" }
    ],
    prompts: [
      { title: "MEP Logic Tutor", prompt: "Teach me how to schedule MEP rough-in, inspections, above-ceiling close-in, testing, commissioning, controls, fire alarm, and owner training in a construction CPM schedule." },
      { title: "Commissioning Chain Builder", prompt: "Create commissioning logic for HVAC, electrical, plumbing, fire alarm, controls, TAB, functional testing, owner training, punch, and turnover." }
    ],
    labs: [
      {
        id: "p6-lab-17-1",
        title: "Build an MEP Coordination Chain",
        duration: "60 min",
        difficulty: "Advanced",
        steps: [
          "Create activities for MEP coordination drawings, rough-in, inspections, above-ceiling close-in, startup, TAB, controls, functional testing, and owner training.",
          "Add predecessors and successors for each activity.",
          "Mark AHJ inspection dependencies.",
          "Identify near-critical MEP activities.",
          "Write a risk note for the top 3 coordination issues."
        ],
        verify: "MEP chain shows coordination, inspections, testing, commissioning, and turnover logic."
      },
      {
        id: "p6-lab-17-2",
        title: "Commissioning Readiness Tracker",
        duration: "45 min",
        difficulty: "Intermediate",
        steps: [
          "Create a commissioning tracker with systems, prerequisites, owner, planned date, actual date, status, and blocker.",
          "Add HVAC, electrical, fire alarm, plumbing, controls, life safety, and security systems.",
          "Link tracker items to schedule activities.",
          "Highlight blockers that affect substantial completion."
        ],
        verify: "Commissioning tracker connects system readiness to schedule milestones."
      }
    ],
    project: null
  },
  {
    week: 18,
    phase: 3,
    phaseTitle: "ADVANCED CONTROLS & DELAY READINESS",
    title: "Delay Documentation, Weather Days & Owner Decisions",
    cert: "REC",
    color: "#EF4444",
    gapBadges: ["DELAY", "DOCS"],
    objectives: [
      "Document delay events contemporaneously",
      "Separate weather, owner decisions, design issues, subcontractor delay, and procurement delay",
      "Tie delay events to activities and critical path status",
      "Create a neutral narrative without sounding emotional or accusatory"
    ],
    services: ["Delay Log", "Weather Log", "Decision Log", "Documentation"],
    infused: ["Delay documentation", "Claims readiness", "Neutral narrative"],
    topics: ["delay", "weather", "owner decision", "documentation", "critical path", "narrative"],
    resources: [
      { type: "doc", name: "AACE recommended practices", url: "https://web.aacei.org/resources/recommended-practices" }
    ],
    prompts: [
      { title: "Delay Documentation Coach", prompt: "Teach me how construction schedulers document delay events, weather days, owner decisions, design issues, procurement delay, critical path impact, and supporting evidence." },
      { title: "Neutral Narrative Writer", prompt: "Write a neutral construction delay narrative from this delay log, weather log, owner decision log, affected activities, and critical path status." }
    ],
    labs: [
      {
        id: "p6-lab-18-1",
        title: "Create a Delay Evidence Matrix",
        duration: "50 min",
        difficulty: "Intermediate",
        steps: [
          "Create delay events for weather, owner decision delay, drawing conflict, late equipment, failed inspection, and trade manpower shortage.",
          "Add event date, affected activity, criticality, documentation source, responsible party, and forecast impact.",
          "Attach evidence types such as meeting minutes, photos, RFI, submittal log, weather report, or daily report.",
          "Write the evidence gap for each event."
        ],
        verify: "Delay matrix ties events to activities, criticality, evidence, and forecast impact."
      },
      {
        id: "p6-lab-18-2",
        title: "Weather Day Analysis",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Create a weather calendar for one month.",
          "Mark days with rain, high wind, temperature issue, or site access impact.",
          "Identify which scheduled activities were weather-sensitive.",
          "Separate weather delay from non-weather productivity issues.",
          "Write a short weather impact note."
        ],
        verify: "Weather analysis explains which days mattered, which activities were affected, and what documentation supports the impact."
      }
    ],
    project: {
      id: "p6-proj-18",
      title: "Delay Documentation Package",
      description: "Create a delay evidence matrix and neutral narrative that ties events to schedule impact.",
      steps: [
        "Build delay evidence matrix.",
        "Create weather analysis.",
        "Tie events to schedule activities.",
        "Write neutral delay narrative."
      ],
      prompt: "Act as a claims-conscious project controls manager. Review my delay documentation package and tell me what evidence is missing."
    }
  },
  {
    week: 19,
    phase: 4,
    phaseTitle: "RECOVERY, PORTFOLIO & JOB READINESS",
    title: "Time Impact Analysis & Fragnet Refinement",
    cert: "REC",
    color: "#EF4444",
    gapBadges: ["TIA", "FRAGNET"],
    objectives: [
      "Build clean fragnets for added work and delay events",
      "Insert fragnets into the right schedule update period",
      "Compare pre-impact and post-impact finish dates",
      "Explain time impact analysis in plain interview language"
    ],
    services: ["TIA", "Fragnet", "Impacted Schedule", "Before/After"],
    infused: ["Time impact analysis", "Fragnet logic", "Claims support"],
    topics: ["time impact analysis", "fragnet", "pre-impact", "post-impact", "critical path", "schedule impact"],
    resources: [
      { type: "doc", name: "AACE recommended practices", url: "https://web.aacei.org/resources/recommended-practices" }
    ],
    prompts: [
      { title: "TIA Tutor", prompt: "Teach me time impact analysis for construction scheduling. Explain fragnets, data date selection, pre-impact update, post-impact update, critical path impact, and narrative reporting." },
      { title: "Fragnet Reviewer", prompt: "Review this fragnet and tell me whether the activity sequence, durations, ties, and claimed impact are defensible." }
    ],
    labs: [
      {
        id: "p6-lab-19-1",
        title: "Create a Formal Fragnet",
        duration: "60 min",
        difficulty: "Advanced",
        steps: [
          "Choose an owner-directed scope change.",
          "Create fragnet activities for design, approval, procurement, installation, inspection, and turnover.",
          "Tie the fragnet into predecessor and successor activities.",
          "Run before and after finish comparisons.",
          "Document assumptions."
        ],
        verify: "Fragnet has complete logic, defensible durations, before/after comparison, and assumptions."
      },
      {
        id: "p6-lab-19-2",
        title: "TIA Explanation Drill",
        duration: "35 min",
        difficulty: "Advanced",
        steps: [
          "Write a 5-sentence explanation of time impact analysis.",
          "Explain why the data date matters.",
          "Explain why the fragnet must be tied into the live schedule.",
          "Explain how critical path impact is proven.",
          "Practice the answer as an interview response."
        ],
        verify: "You can explain TIA without sounding like you memorized definitions."
      }
    ],
    project: null
  },
  {
    week: 20,
    phase: 4,
    phaseTitle: "RECOVERY, PORTFOLIO & JOB READINESS",
    title: "Acceleration, Compression & Recovery Cost Tradeoffs",
    cert: "REC",
    color: "#EF4444",
    gapBadges: ["ACCELERATION", "COST"],
    objectives: [
      "Compare crashing, fast-tracking, overtime, added crews, weekend work, and resequencing",
      "Understand recovery risk: safety, quality, rework, stacking, supervision, and procurement",
      "Estimate schedule benefit versus cost and feasibility",
      "Write a recovery recommendation that leaders can approve"
    ],
    services: ["Crashing", "Fast Tracking", "Overtime", "Recovery Cost"],
    infused: ["Recovery analysis", "Cost tradeoffs", "Leadership decision support"],
    topics: ["acceleration", "compression", "crashing", "fast tracking", "overtime", "recovery", "cost tradeoff"],
    resources: [
      { type: "doc", name: "PMI schedule compression concepts", url: "https://www.pmi.org/" }
    ],
    prompts: [
      { title: "Compression Coach", prompt: "Teach me schedule compression in construction: crashing, fast-tracking, overtime, weekend work, second shift, added crews, resequencing, risk, and cost tradeoffs." },
      { title: "Recovery Recommendation", prompt: "Create a recovery recommendation comparing three acceleration options with schedule gain, cost implication, field risk, quality risk, and decision needed." }
    ],
    labs: [
      {
        id: "p6-lab-20-1",
        title: "Recovery Option Comparison Matrix",
        duration: "55 min",
        difficulty: "Advanced",
        steps: [
          "Create three recovery options for a 25-day slip.",
          "Estimate schedule gain, cost impact, safety risk, quality risk, and field feasibility.",
          "Identify dependencies that must be protected.",
          "Choose a recommendation and backup option."
        ],
        verify: "Matrix compares recovery options with dates, cost, risk, and decision logic."
      },
      {
        id: "p6-lab-20-2",
        title: "Compression Logic Cleanup",
        duration: "45 min",
        difficulty: "Advanced",
        steps: [
          "Revise a schedule to reflect selected recovery option.",
          "Add weekend work or crew changes only where realistic.",
          "Check whether critical path changed.",
          "Identify new near-critical risks.",
          "Update recovery narrative."
        ],
        verify: "Compressed schedule has realistic logic and a revised risk story."
      }
    ],
    project: {
      id: "p6-proj-20",
      title: "Acceleration and Recovery Decision Package",
      description: "Create a recovery decision package that compares schedule compression options and cost/risk tradeoffs.",
      steps: [
        "Build recovery matrix.",
        "Revise schedule logic.",
        "Compare critical path before and after.",
        "Write recommendation memo."
      ],
      prompt: "Act as an executive sponsor. Challenge my acceleration recommendation and ask what risks, costs, and field assumptions I may be underestimating."
    }
  },
  {
    week: 21,
    phase: 4,
    phaseTitle: "RECOVERY, PORTFOLIO & JOB READINESS",
    title: "Multi-Project Controls, Portfolio Milestones & Program Reporting",
    cert: "REC",
    color: "#EF4444",
    gapBadges: ["PROGRAM", "PORTFOLIO"],
    objectives: [
      "Understand how P6 supports multiple projects, portfolios, and programs",
      "Roll up milestones across multiple construction projects",
      "Create cross-project dependency and resource risk summaries",
      "Prepare for program scheduler and integrated master scheduler language"
    ],
    services: ["Portfolio", "Program Schedule", "Milestone Rollup", "IMS"],
    infused: ["Program scheduling", "Portfolio reporting", "Integrated master schedule"],
    topics: ["program schedule", "portfolio", "milestone rollup", "IMS", "cross-project dependency", "project controls"],
    resources: [
      { type: "doc", name: "Oracle Primavera P6", url: "https://www.oracle.com/industries/construction-engineering/primavera-p6/" }
    ],
    prompts: [
      { title: "Program Scheduler Tutor", prompt: "Teach me how a P6 construction scheduler manages multiple projects, milestone rollups, cross-project dependencies, shared resources, and program reporting." },
      { title: "Portfolio Report Writer", prompt: "Create a program schedule report for three construction projects with milestone status, critical risks, shared resources, dependencies, and executive decisions needed." }
    ],
    labs: [
      {
        id: "p6-lab-21-1",
        title: "Create a Three-Project Milestone Rollup",
        duration: "50 min",
        difficulty: "Intermediate",
        steps: [
          "Create three sample construction projects: clinic build-out, warehouse expansion, and school renovation.",
          "List 10 milestones for each project.",
          "Add baseline date, forecast date, variance, owner, and status.",
          "Create a rollup view showing red/yellow/green status.",
          "Identify shared resource or procurement risks."
        ],
        verify: "Rollup report shows portfolio milestone health and cross-project risks."
      },
      {
        id: "p6-lab-21-2",
        title: "Integrated Master Schedule Summary",
        duration: "45 min",
        difficulty: "Advanced",
        steps: [
          "Create an integrated summary with key milestones across all three projects.",
          "Add cross-project dependencies or shared constraints.",
          "Identify top 5 executive risks.",
          "Write a program scheduler status note."
        ],
        verify: "IMS summary gives leaders a clear picture across projects."
      }
    ],
    project: {
      id: "p6-proj-21",
      title: "Program Schedule Rollup",
      description: "Create a multi-project schedule report that shows portfolio milestone health and cross-project risks.",
      steps: [
        "Create three-project milestone table.",
        "Build rollup view.",
        "Identify shared risks.",
        "Write program status note."
      ],
      prompt: "Act as a program controls manager. Review my multi-project rollup and tell me if it gives enough information for executive decisions."
    }
  },
  {
    week: 22,
    phase: 4,
    phaseTitle: "RECOVERY, PORTFOLIO & JOB READINESS",
    title: "Construction Scheduler Resume, LinkedIn & Job Targeting",
    cert: "JOB",
    color: "#F59E0B",
    gapBadges: ["RESUME", "JOBS"],
    objectives: [
      "Translate PM/Scrum delivery experience into scheduler and project controls language",
      "Create resume bullets that are honest but scheduler-aligned",
      "Target Project Scheduler, P6 Scheduler, Project Controls Analyst, PMO Scheduler, and Integrated Master Scheduler roles",
      "Prepare LinkedIn headline, About section, and recruiter message"
    ],
    services: ["Resume", "LinkedIn", "Job Search", "Recruiter Message"],
    infused: ["Career positioning", "Scheduler language", "Job targeting"],
    topics: ["resume", "LinkedIn", "job titles", "P6 scheduler", "project controls", "PMO scheduler"],
    resources: [
      { type: "doc", name: "AACE International career resources", url: "https://web.aacei.org/" }
    ],
    prompts: [
      { title: "Resume Bullet Translator", prompt: "Translate my project management and Scrum background into honest construction scheduler and project controls resume bullets. Use terms like baseline, forecast finish, milestone variance, dependencies, critical path, risk, recovery plan, and executive reporting." },
      { title: "Recruiter Message", prompt: "Write a concise recruiter message for an entry-level or transitional P6 construction scheduler role based on my PM background and P6 construction scheduler portfolio." }
    ],
    labs: [
      {
        id: "p6-lab-22-1",
        title: "Scheduler Resume Rewrite",
        duration: "60 min",
        difficulty: "Intermediate",
        steps: [
          "Write a scheduler-focused professional summary.",
          "Rewrite 8 PM/Scrum bullets into project controls language.",
          "Add a skills section with P6, CPM, WBS, baseline, data date, variance, lookahead, and reporting terms.",
          "Create a portfolio project section.",
          "Remove anything that overclaims direct construction experience."
        ],
        verify: "Resume language fits scheduler roles while staying accurate to your background."
      },
      {
        id: "p6-lab-22-2",
        title: "Job Search Keyword Map",
        duration: "35 min",
        difficulty: "Beginner",
        steps: [
          "Create a list of 30 target job titles and keywords.",
          "Group roles into construction P6, project controls, PMO scheduler, and integrated master scheduler.",
          "Identify required tools and recurring responsibilities.",
          "Create a search string for LinkedIn and Indeed.",
          "Mark roles that are realistic now versus after portfolio completion."
        ],
        verify: "Keyword map gives clear search targets and realistic role filters."
      }
    ],
    project: null
  },
  {
    week: 23,
    phase: 4,
    phaseTitle: "RECOVERY, PORTFOLIO & JOB READINESS",
    title: "Interview Scenarios, Whiteboard Scheduling & Portfolio Defense",
    cert: "JOB",
    color: "#F59E0B",
    gapBadges: ["INTERVIEW", "WHITEBOARD"],
    objectives: [
      "Practice scenario interviews for P6 construction scheduler roles",
      "Whiteboard WBS, CPM logic, update cycle, and recovery plan examples",
      "Defend portfolio artifacts with clear schedule reasoning",
      "Prepare stories for schedule slip, conflict, missing logic, bad baseline, and recovery decisions"
    ],
    services: ["Mock Interview", "Whiteboard", "STAR Stories", "Portfolio Defense"],
    infused: ["Interview practice", "Whiteboard scheduling", "Scenario fluency"],
    topics: ["interview", "whiteboard", "STAR", "portfolio", "critical path", "delay", "recovery"],
    resources: [
      { type: "doc", name: "PMI career resources", url: "https://www.pmi.org/" }
    ],
    prompts: [
      { title: "Mock Interview Panel", prompt: "Act as a hiring panel for a P6 construction scheduler role. Ask me scenario questions on WBS, CPM logic, baselines, DCMA checks, monthly updates, lookaheads, delay events, recovery, reporting, and field coordination." },
      { title: "Whiteboard Coach", prompt: "Give me whiteboard exercises for explaining WBS, dependency logic, critical path, baseline variance, data date updates, and recovery planning in a scheduler interview." }
    ],
    labs: [
      {
        id: "p6-lab-23-1",
        title: "Build 12 Interview Stories",
        duration: "55 min",
        difficulty: "Intermediate",
        steps: [
          "Create STAR stories for baseline control, dependency management, risk escalation, stakeholder conflict, delayed milestone, reporting, recovery planning, and executive communication.",
          "Tie each story to a portfolio artifact.",
          "Add scheduler vocabulary to each answer.",
          "Practice each answer in under 90 seconds."
        ],
        verify: "You have 12 concise stories that connect your background to scheduler responsibilities."
      },
      {
        id: "p6-lab-23-2",
        title: "Whiteboard CPM Drill",
        duration: "45 min",
        difficulty: "Advanced",
        steps: [
          "Draw a 12-activity construction network by hand.",
          "Identify dependencies and critical path.",
          "Explain float and near-critical risk.",
          "Add one delay event and explain forecast impact.",
          "Explain the recovery option."
        ],
        verify: "You can explain CPM logic without relying on software."
      }
    ],
    project: {
      id: "p6-proj-23",
      title: "Interview Defense Kit",
      description: "Create a set of interview stories, whiteboard drills, and portfolio talking points for P6 construction scheduler roles.",
      steps: [
        "Write 12 STAR stories.",
        "Create whiteboard CPM drill.",
        "Map stories to portfolio artifacts.",
        "Practice mock interview answers."
      ],
      prompt: "Act as a skeptical construction scheduler interviewer. Challenge my portfolio, ask scenario questions, and score my answers."
    }
  },
  {
    week: 24,
    phase: 4,
    phaseTitle: "RECOVERY, PORTFOLIO & JOB READINESS",
    title: "Capstone P6 Construction Scheduler Portfolio & Apply Sprint",
    cert: "JOB",
    color: "#F59E0B",
    gapBadges: ["CAPSTONE", "APPLY"],
    objectives: [
      "Assemble a complete 6-month P6 construction scheduler portfolio",
      "Create final artifacts for baseline, update, DCMA audit, lookahead, delay, recovery, dashboard, and interview evidence",
      "Prepare application package and job-search rhythm",
      "Start applying to realistic scheduler and project controls roles"
    ],
    services: ["Portfolio", "Apply Sprint", "Capstone", "Job Tracker"],
    infused: ["Portfolio completion", "Application readiness", "Scheduler credibility"],
    topics: ["capstone", "portfolio", "job applications", "P6 scheduler", "project controls", "interview prep"],
    resources: [
      { type: "doc", name: "Oracle Primavera P6", url: "https://www.oracle.com/industries/construction-engineering/primavera-p6/" },
      { type: "doc", name: "AACE International", url: "https://web.aacei.org/" }
    ],
    prompts: [
      { title: "Portfolio Final Review", prompt: "Act as a construction scheduling hiring manager. Review my complete P6 construction scheduler portfolio and tell me what is strong, what is weak, and what I should fix before applying." },
      { title: "Apply Sprint Planner", prompt: "Create a 30-day job application sprint for P6 Scheduler, Project Scheduler, Project Controls Analyst, PMO Scheduler, and Integrated Master Scheduler roles. Include daily actions, search strings, outreach, and interview prep." }
    ],
    labs: [
      {
        id: "p6-lab-24-1",
        title: "Assemble Final Portfolio Binder",
        duration: "90 min",
        difficulty: "Advanced",
        steps: [
          "Collect the project setup, WBS, procurement log, CPM logic, baseline audit, update narrative, lookahead, delay evidence, TIA, recovery plan, S-curve, dashboard, and interview kit.",
          "Create a table of contents.",
          "Write a one-page portfolio summary.",
          "Create captions for every artifact.",
          "Export a clean PDF package."
        ],
        verify: "Portfolio binder shows the full scheduler workflow from setup through reporting, delay, recovery, and job readiness."
      },
      {
        id: "p6-lab-24-2",
        title: "30-Day Apply Sprint Setup",
        duration: "60 min",
        difficulty: "Intermediate",
        steps: [
          "Create a job tracker with company, title, location, salary, tool requirements, construction sector, resume version, status, and follow-up date.",
          "Create 5 saved searches.",
          "Prepare a tailored resume template.",
          "Write 3 recruiter outreach messages.",
          "Schedule weekly interview practice."
        ],
        verify: "Apply sprint has tracker, searches, resume language, outreach messages, and weekly practice routine."
      }
    ],
    project: {
      id: "p6-proj-24",
      title: "6-Month P6 Construction Scheduler Capstone",
      description: "Package the full 6-month study plan into a finished portfolio and application sprint.",
      steps: [
        "Assemble portfolio binder.",
        "Finalize resume and LinkedIn language.",
        "Create job tracker and saved searches.",
        "Begin 30-day apply sprint."
      ],
      prompt: "Act as my project scheduler career coach. Review my 6-month P6 construction scheduler capstone, identify gaps, and give me a final apply-or-polish recommendation."
    }
  }
];
