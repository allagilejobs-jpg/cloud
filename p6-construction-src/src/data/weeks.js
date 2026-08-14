// P6 Construction Scheduler - Data & Constants

export const PHASES = [
  { num: 1, title: "P6 & CONSTRUCTION FOUNDATIONS", weeks: "1-3", color: "#B7791F", icon: "🏗️" },
  { num: 2, title: "CPM LOGIC, BASELINES & QUALITY", weeks: "4-6", color: "#2563EB", icon: "🔗" },
  { num: 3, title: "UPDATES, FIELD CONTROL & CLAIMS READINESS", weeks: "7-9", color: "#7C3AED", icon: "🚧" },
  { num: 4, title: "REPORTING, RECOVERY & JOB READINESS", weeks: "10-12", color: "#F59E0B", icon: "🎯" }
];

export const CERTS = [
  { name: "Primavera P6 Setup", code: "P6", weeks: "1-3", icon: "🏗️" },
  { name: "WBS & Construction Scope", code: "WBS", weeks: "2-3", icon: "🧱" },
  { name: "CPM Scheduling & Logic", code: "CPM", weeks: "4-5", icon: "🔗" },
  { name: "Baselines & Schedule Quality", code: "QUAL", weeks: "5-6", icon: "✅" },
  { name: "Progress Updates", code: "UPD", weeks: "7-8", icon: "📈" },
  { name: "Delay, Recovery & Claims Support", code: "REC", weeks: "9-10", icon: "⚠️" },
  { name: "Construction Scheduler Interviews", code: "JOB", weeks: "11-12", icon: "💼" }
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
    week: "Weeks 1-3, 6-8, 12",
    detail: "Create EPS/OBS/WBS structures, activities, relationships, calendars, baselines, layouts, filters, updates, and professional exports."
  },
  {
    title: "WBS Development",
    week: "Weeks 2-3",
    detail: "Break a construction project into mobilization, procurement, submittals, sitework, structure, MEP, finishes, commissioning, punch, and closeout."
  },
  {
    title: "CPM Scheduling & Logic",
    week: "Weeks 4-5",
    detail: "Build construction dependency logic, calculate critical path and float, clean open ends, and explain sequencing like a scheduler."
  },
  {
    title: "Schedule Updating & Baselines",
    week: "Weeks 6-8",
    detail: "Create baseline schedules, set data dates, enter actual starts/finishes, update remaining durations, and report variance."
  },
  {
    title: "DCMA 14-Point Check",
    week: "Week 6",
    detail: "Audit logic, leads/lags, constraints, high float, negative float, high duration, invalid dates, missing logic, and critical path integrity."
  },
  {
    title: "Interview Preparation",
    week: "Weeks 11-12",
    detail: "Practice construction scheduler scenarios with portfolio exports, STAR stories, delay narratives, recovery plans, and P6 terminology."
  }
];

export const GAP_INFUSIONS = [
  { gap: "P6 EPS/OBS/WBS Setup", where: "Week 1", why: "Construction scheduler roles expect you to know where projects live and how schedule structures are organized", severity: "critical" },
  { gap: "Construction WBS and CSI-style Scope", where: "Week 2", why: "A scheduler must understand real construction work, not just generic tasks", severity: "critical" },
  { gap: "Procurement and Submittal Logic", where: "Week 3", why: "Long-lead items, shop drawings, approvals, and delivery dates drive construction schedules", severity: "critical" },
  { gap: "CPM Relationships and Float", where: "Weeks 4-5", why: "Critical path, total float, free float, constraints, and calendars are core interview topics", severity: "critical" },
  { gap: "DCMA 14-Point Schedule Quality", where: "Week 6", why: "Quality checks separate a credible schedule from a pretty Gantt chart", severity: "critical" },
  { gap: "Monthly Update Cycle", where: "Week 7", why: "Schedulers live on data dates, actuals, remaining duration, percent complete, and narrative reports", severity: "critical" },
  { gap: "Lookahead and Field Coordination", where: "Week 8", why: "Superintendents need short-interval plans that connect to the master schedule", severity: "important" },
  { gap: "Delay and Recovery Narratives", where: "Weeks 9-10", why: "Schedulers support time-extension, acceleration, resequencing, and leadership decisions", severity: "important" },
  { gap: "Construction Controls Reporting", where: "Week 11", why: "Variance, milestones, critical activities, RFIs, submittals, and procurement status must become a clear report", severity: "edge" },
  { gap: "Portfolio and Interview Proof", where: "Week 12", why: "You need artifacts that show you can build, update, audit, and explain a P6-style schedule", severity: "edge" }
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
    phase: 2,
    phaseTitle: "CPM LOGIC, BASELINES & QUALITY",
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
    phase: 2,
    phaseTitle: "CPM LOGIC, BASELINES & QUALITY",
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
    phase: 2,
    phaseTitle: "CPM LOGIC, BASELINES & QUALITY",
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
    phase: 3,
    phaseTitle: "UPDATES, FIELD CONTROL & CLAIMS READINESS",
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
    phase: 3,
    phaseTitle: "UPDATES, FIELD CONTROL & CLAIMS READINESS",
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
    phase: 3,
    phaseTitle: "UPDATES, FIELD CONTROL & CLAIMS READINESS",
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
    phase: 4,
    phaseTitle: "REPORTING, RECOVERY & JOB READINESS",
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
    phase: 4,
    phaseTitle: "REPORTING, RECOVERY & JOB READINESS",
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
    phase: 4,
    phaseTitle: "REPORTING, RECOVERY & JOB READINESS",
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
  }
];
