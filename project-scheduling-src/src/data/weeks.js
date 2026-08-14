// Project Scheduling Mastery - Data & Constants

export const PHASES = [
  { num: 1, title: "SCHEDULE FOUNDATIONS", weeks: "1-3", color: "#14B8A6", icon: "📋" },
  { num: 2, title: "NETWORK LOGIC & CONTROL", weeks: "4-6", color: "#2563EB", icon: "🔗" },
  { num: 3, title: "RESOURCE, RISK & HYBRID PLANNING", weeks: "7-9", color: "#7C3AED", icon: "⚙️" },
  { num: 4, title: "EXECUTIVE READINESS", weeks: "10-12", color: "#F59E0B", icon: "🎯" }
];

export const CERTS = [
  { name: "Schedule Foundations", code: "BASE", weeks: "1-3", icon: "📋" },
  { name: "Critical Path", code: "CPM", weeks: "4-5", icon: "🔗" },
  { name: "Scheduling Tools", code: "TOOLS", weeks: "1, 5-6, 12", icon: "🧰" },
  { name: "Resource Planning", code: "RES", weeks: "7", icon: "👥" },
  { name: "Risk & Recovery", code: "RISK", weeks: "8-10", icon: "⚠️" },
  { name: "Agile Hybrid", code: "HYBRID", weeks: "9-10", icon: "🔁" },
  { name: "Portfolio Reporting", code: "EXEC", weeks: "11-12", icon: "📊" }
];

export const CERT_COLORS = {
  BASE: "#14B8A6",
  CPM: "#2563EB",
  TOOLS: "#B7791F",
  RES: "#7C3AED",
  RISK: "#EF4444",
  HYBRID: "#06B6D4",
  EXEC: "#F59E0B"
};

export const FEATURED_LEARNING = [
  {
    title: "Scheduling Tool Fluency",
    week: "Weeks 1, 5-6, 12",
    detail: "Practice the same scheduling workflow in Microsoft Project, Smartsheet, Excel, and optional Primavera P6 so the skill transfers across roles."
  },
  {
    title: "WBS Development",
    week: "Week 2",
    detail: "Turn project scope into a 3-level WBS, work packages, activity lists, deliverables, and acceptance criteria."
  },
  {
    title: "CPM Scheduling & Logic",
    week: "Weeks 3-4",
    detail: "Create dependency networks, calculate critical path and float, clean constraints, and explain logic clearly."
  },
  {
    title: "Schedule Updating & Baselines",
    week: "Weeks 1, 5-6",
    detail: "Save baselines, update actuals and remaining durations, compare variance, and produce forecast narratives."
  },
  {
    title: "Schedule Health Checks",
    week: "Week 5",
    detail: "Run practical quality checks covering missing logic, constraints, long tasks, negative float, invalid dates, owners, and baseline readiness."
  },
  {
    title: "Interview Preparation",
    week: "Weeks 10, 12",
    detail: "Practice scheduler scenarios with portfolio artifacts, STAR stories, recovery plans, stakeholder tradeoffs, and critical path explanations."
  }
];

export const GAP_INFUSIONS = [
  { gap: "Scheduling Tool Workflow", where: "Weeks 1, 5-6, 12", why: "Scheduler roles expect comfort with schedule tables, Gantt views, baselines, updates, filters, and exports across common tools", severity: "critical" },
  { gap: "Realistic Estimation", where: "Week 2", why: "Bad duration assumptions break every schedule that follows", severity: "critical" },
  { gap: "Dependency Logic", where: "Week 3", why: "Finish-to-start is not enough for real projects", severity: "critical" },
  { gap: "Critical Path Method", where: "Week 4", why: "You need float, constraints, and baseline logic before status reporting", severity: "critical" },
  { gap: "Schedule Quality Review", where: "Week 5", why: "Quality checks catch weak logic, unclear ownership, and baseline problems before leaders see them", severity: "critical" },
  { gap: "Schedule Updating & Baseline Variance", where: "Week 6", why: "Scheduler credibility depends on clean actuals, remaining duration, variance, and forecast control", severity: "critical" },
  { gap: "Resource Loading", where: "Week 7", why: "A plan without capacity is wishful thinking", severity: "critical" },
  { gap: "Risk Buffers", where: "Week 8", why: "Contingency needs visible logic, not vague padding", severity: "important" },
  { gap: "Agile/Hybrid Planning", where: "Week 9", why: "Modern PM roles expect sprint, milestone, and release plans to connect", severity: "important" },
  { gap: "Recovery Planning", where: "Week 10", why: "Interviewers love slipping schedules and executive rescue scenarios", severity: "important" },
  { gap: "Executive Reporting", where: "Week 11", why: "The schedule must become a clear decision story", severity: "edge" },
  { gap: "Portfolio Artifact", where: "Week 12", why: "A polished schedule package is useful for interviews and real work", severity: "edge" }
];

export const RESOURCES = [
  { icon: "📘", text: "PMI Practice Standard for Scheduling", url: "https://www.pmi.org/" },
  { icon: "📗", text: "PMBOK Guide scheduling topics", url: "https://www.pmi.org/pmbok-guide-standards" },
  { icon: "🧮", text: "Microsoft Project training", url: "https://support.microsoft.com/office/project-training" },
  { icon: "📊", text: "Smartsheet project schedule templates", url: "https://www.smartsheet.com/project-management" },
  { icon: "📈", text: "ProjectManager schedule management guides", url: "https://www.projectmanager.com/guides/project-scheduling" },
  { icon: "🧰", text: "Optional Primavera P6 reference for advanced scheduler roles", url: "https://www.oracle.com/industries/construction-engineering/primavera-p6/" },
  { icon: "🔁", text: "Scrum Guide", url: "https://scrumguides.org/" },
  { icon: "🤖", text: "Claude - schedule critique, scenario drills, and reporting assistant", url: "https://claude.ai" }
];

export const TUTOR_PROMPTS = [
  '"Teach me project scheduling tool vocabulary across MS Project, Smartsheet, Excel, and optional Primavera P6: tasks, milestones, WBS, relationships, calendars, baselines, status date, data date, filters, and layouts."',
  '"Turn this project scope into a WBS, activity list, and milestone schedule."',
  '"Review my schedule for missing dependencies, constraints, and unrealistic sequencing."',
  '"Calculate the critical path and explain total float using this activity table."',
  '"Audit this schedule for quality issues and explain every failed check in plain English."',
  '"Create a recovery plan for a project that is 3 weeks behind with no budget increase."',
  '"Convert this waterfall timeline into an agile/hybrid release plan."',
  '"Write an executive schedule status update with risks, decisions needed, and next milestones."'
];

export const WEEKS = [
  {
    week: 1,
    phase: 1,
    phaseTitle: "SCHEDULE FOUNDATIONS",
    title: "Project Scheduling Mindset, Calendar Setup & Baselines",
    cert: "BASE",
    color: "#14B8A6",
    gapBadges: ["BASELINE", "CALENDAR"],
    objectives: [
      "Understand what a schedule controls: scope, time, resources, risk, and decisions",
      "Understand how different scheduling tools support the same core workflow",
      "Set up working calendars, holidays, milestones, and project constraints",
      "Separate tasks, deliverables, milestones, deadlines, and dependencies",
      "Create a simple baseline and explain why baseline control matters"
    ],
    services: ["MS Project", "Smartsheet", "Excel", "Primavera P6 optional", "Baseline", "Milestones"],
    infused: ["Scheduling tool vocabulary", "PM language for interviews", "Baseline discipline", "Calendar assumptions"],
    topics: ["schedule model", "WBS", "tasks", "milestones", "constraints", "working calendar", "baseline", "status date"],
    resources: [
      { type: "doc", name: "Microsoft Project basic tasks", url: "https://support.microsoft.com/office/project-training" },
      { type: "doc", name: "PMI standards hub", url: "https://www.pmi.org/pmbok-guide-standards" }
    ],
    prompts: [
      { title: "Scheduling Concepts Tutor", prompt: "Teach me project scheduling like I am a project manager moving from task tracking to real schedule control. Explain tasks, deliverables, milestones, baselines, status dates, deadlines, constraints, dependencies, float, and critical path. Give a simple example project and show how each concept appears in the schedule." },
      { title: "Scheduling Tool Vocabulary Tutor", prompt: "Teach me scheduling vocabulary for project scheduler roles. Explain WBS, activities, task mode, predecessors, successors, relationships, calendars, baselines, status date, data date, layouts, filters, and schedule logs. Compare how the same idea appears in Microsoft Project, Smartsheet, Excel, and Primavera P6." },
      { title: "Baseline Explanation", prompt: "Explain how to defend a project schedule baseline in a leadership meeting. Include what changes should trigger re-baselining, what should only be tracked as variance, and how to avoid making the baseline meaningless." }
    ],
    labs: [
      {
        id: "ps-lab-1-1",
        title: "Build a Clean Starter Schedule",
        duration: "45 min",
        difficulty: "Beginner",
        steps: [
          "Pick a sample project: launch a client onboarding portal in 10 weeks.",
          "Create a new schedule in MS Project, Smartsheet, or Excel.",
          "If you have Primavera P6, optionally create the same starter structure with a project, WBS levels, and activities.",
          "Set the project start date and define a Monday-Friday working calendar.",
          "Add 8-10 high-level milestones: kickoff, discovery complete, design approved, build complete, UAT start, UAT complete, go-live, hypercare complete.",
          "Add 20-25 tasks under those milestones.",
          "Mark milestone rows with zero duration.",
          "Add task owners or role placeholders.",
          "Add an assumptions note for holidays, working hours, and approval turnaround.",
          "Save a baseline version before adding progress."
        ],
        verify: "Schedule has a start date, calendar, milestone list, task list, owners, assumptions, and a baseline copy. Optional P6 users can mirror the same structure in P6."
      },
      {
        id: "ps-lab-1-2",
        title: "Task vs Milestone Cleanup Drill",
        duration: "30 min",
        difficulty: "Beginner",
        steps: [
          "Copy the starter schedule.",
          "Identify rows that are actually deliverables, not tasks.",
          "Rewrite vague items like 'testing' into action tasks like 'execute UAT test scripts'.",
          "Convert decision points into milestones.",
          "Add acceptance criteria to at least 5 deliverables.",
          "Remove any task with a duration longer than 10 working days by breaking it into smaller tasks."
        ],
        verify: "Every row has a clear action, deliverable, milestone, or decision purpose."
      }
    ],
    project: {
      id: "ps-proj-1",
      title: "Starter Schedule Package",
      description: "Create the first version of a project schedule package for a client onboarding portal.",
      steps: [
        "Build a milestone roadmap.",
        "Create a task-level schedule.",
        "Document assumptions.",
        "Save baseline version 1."
      ],
      prompt: "Act as a senior PMO scheduler. Review my starter project schedule for a client onboarding portal. Find vague tasks, missing milestones, weak assumptions, and baseline risks. Return a cleaner schedule structure and explain what changed."
    }
  },
  {
    week: 2,
    phase: 1,
    phaseTitle: "SCHEDULE FOUNDATIONS",
    title: "Scope Breakdown, WBS & Duration Estimation",
    cert: "BASE",
    color: "#14B8A6",
    gapBadges: ["WBS", "ESTIMATION"],
    objectives: [
      "Turn a project charter into a work breakdown structure",
      "Develop WBS levels that can translate into any scheduling tool",
      "Estimate durations using analogous, parametric, three-point, and expert judgment methods",
      "Identify hidden work that makes schedules slip",
      "Document estimate basis and confidence level"
    ],
    services: ["WBS", "Schedule Structure", "Estimation", "PERT", "Scope Control"],
    infused: ["Realistic estimation", "Hidden work discovery", "Assumption documentation"],
    topics: ["WBS", "schedule structure", "activity decomposition", "three-point estimates", "estimate basis", "scope creep"],
    resources: [
      { type: "doc", name: "PMI Work Breakdown Structure guidance", url: "https://www.pmi.org/" }
    ],
    prompts: [
      { title: "WBS Builder", prompt: "Turn this project description into a 3-level WBS, activity list, deliverables, and acceptance criteria. Flag missing scope and assumptions that could affect the schedule." },
      { title: "Estimate Challenge", prompt: "Give me 10 project scheduling estimation scenarios. For each, ask whether I should use analogous, parametric, three-point, or expert judgment estimation, then explain the best answer." }
    ],
    labs: [
      {
        id: "ps-lab-2-1",
        title: "Convert Scope to WBS",
        duration: "50 min",
        difficulty: "Beginner",
        steps: [
          "Use the client onboarding portal scenario.",
          "Write the project objective in one sentence.",
          "List major deliverables: discovery, UX, integrations, security, testing, training, launch.",
          "Break each deliverable into smaller work packages.",
          "Convert each work package into schedule activities.",
          "Add a simple WBS code format, such as 1.0 Discovery, 2.0 Design, 3.0 Build, 4.0 Test, 5.0 Launch.",
          "Mirror the WBS levels inside your chosen scheduling tool before entering activities.",
          "Mark dependencies you already know.",
          "Flag unknown scope as assumptions or questions."
        ],
        verify: "WBS has at least 3 levels, each work package maps to one or more schedule activities, and the structure can be recreated in a scheduling tool."
      },
      {
        id: "ps-lab-2-2",
        title: "Three-Point Estimation Drill",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Pick 10 tasks from the WBS.",
          "For each task, estimate optimistic, most likely, and pessimistic durations.",
          "Calculate expected duration using (O + 4M + P) / 6.",
          "Compare expected duration with the original estimate.",
          "Add an estimate-basis note for the 5 riskiest tasks.",
          "Update the schedule with revised durations."
        ],
        verify: "At least 10 tasks have a calculated expected duration and estimate basis."
      }
    ],
    project: null
  },
  {
    week: 3,
    phase: 1,
    phaseTitle: "SCHEDULE FOUNDATIONS",
    title: "Dependency Mapping & Network Logic",
    cert: "BASE",
    color: "#14B8A6",
    gapBadges: ["LOGIC", "LEADS/LAGS"],
    objectives: [
      "Use finish-to-start, start-to-start, finish-to-finish, and start-to-finish dependencies correctly",
      "Build CPM-ready logic that can survive a schedule quality review",
      "Add leads and lags without hiding schedule risk",
      "Remove dangling activities and artificial logic",
      "Build a readable network diagram"
    ],
    services: ["CPM Logic", "Dependencies", "Network Diagram", "Leads", "Lags"],
    infused: ["CPM scheduling logic", "Dependency logic", "Schedule quality", "Approval sequencing"],
    topics: ["CPM", "FS", "SS", "FF", "SF", "lead", "lag", "external dependency", "handoff"],
    resources: [
      { type: "doc", name: "Microsoft Project dependencies", url: "https://support.microsoft.com/office/link-tasks-in-a-project" }
    ],
    prompts: [
      { title: "Dependency Critique", prompt: "Review this task list and recommend dependency logic. Identify finish-to-start, start-to-start, finish-to-finish, external dependencies, leads, lags, and risks created by approval waits." }
    ],
    labs: [
      {
        id: "ps-lab-3-1",
        title: "Build the Dependency Network",
        duration: "60 min",
        difficulty: "Intermediate",
        steps: [
          "Open the Week 2 schedule.",
          "Link every task to at least one predecessor unless it is a true start activity.",
          "Use finish-to-start for normal handoffs.",
          "Use start-to-start where work can overlap, such as UX and API discovery.",
          "Use finish-to-finish where deliverables must complete together.",
          "Add lag only when there is a real wait, such as vendor review.",
          "Mark external dependencies with a note.",
          "Use the network diagram or Gantt view to inspect flow."
        ],
        verify: "No major task is floating without a logical predecessor or successor."
      },
      {
        id: "ps-lab-3-2",
        title: "Approval Bottleneck Simulation",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Add a 5-day stakeholder approval lag after design review.",
          "Observe which downstream tasks move.",
          "Replace the lag with a named approval task.",
          "Assign an owner to the approval task.",
          "Compare which version communicates risk more clearly.",
          "Write a short recommendation."
        ],
        verify: "Schedule includes visible approval work instead of hidden unexplained lag."
      }
    ],
    project: {
      id: "ps-proj-3",
      title: "Network Logic Review",
      description: "Create a dependency-reviewed schedule and a list of top logic risks.",
      steps: [
        "Link all activities.",
        "Identify 5 risky handoffs.",
        "Convert hidden waits into named tasks.",
        "Prepare a one-page logic-risk memo."
      ],
      prompt: "Review my project schedule dependency logic. Find dangling tasks, hidden approval waits, excessive finish-to-start chains, risky overlaps, and missing external dependencies. Return specific fixes."
    }
  },
  {
    week: 4,
    phase: 2,
    phaseTitle: "NETWORK LOGIC & CONTROL",
    title: "Critical Path Method, Float & Constraint Management",
    cert: "CPM",
    color: "#2563EB",
    gapBadges: ["CPM", "FLOAT"],
    objectives: [
      "Calculate critical path and total float",
      "Explain CPM scheduling and logic in scheduler interview language",
      "Explain why the critical path can change",
      "Spot constraints that distort the schedule",
      "Use float to prioritize PM attention"
    ],
    services: ["Critical Path", "Float", "Constraints", "Status Date"],
    infused: ["Critical path reasoning", "Constraint hygiene", "Interview whiteboarding"],
    topics: ["critical path", "total float", "free float", "must finish on", "as soon as possible"],
    resources: [
      { type: "doc", name: "Project critical path training", url: "https://support.microsoft.com/office/show-the-critical-path-of-your-project" }
    ],
    prompts: [
      { title: "Critical Path Tutor", prompt: "Teach critical path method using a small activity table. Show forward pass, backward pass, early start, early finish, late start, late finish, total float, and how to explain the result to an executive." }
    ],
    labs: [
      {
        id: "ps-lab-4-1",
        title: "Manual CPM Calculation",
        duration: "60 min",
        difficulty: "Intermediate",
        steps: [
          "Create a 10-activity table with durations and predecessors.",
          "Calculate early start and early finish for each activity.",
          "Calculate late start and late finish.",
          "Calculate total float.",
          "Mark the critical path.",
          "Compare your manual result with MS Project, Smartsheet, or a spreadsheet formula."
        ],
        verify: "Manual critical path result matches the tool result."
      },
      {
        id: "ps-lab-4-2",
        title: "Constraint Cleanup",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Inspect your schedule for hard date constraints.",
          "Replace unnecessary date constraints with dependencies.",
          "Keep only true business constraints, such as a regulatory date.",
          "Add notes explaining any remaining hard constraints.",
          "Recalculate the critical path."
        ],
        verify: "Schedule uses logical dependencies first and hard constraints only when justified."
      }
    ],
    project: null
  },
  {
    week: 5,
    phase: 2,
    phaseTitle: "NETWORK LOGIC & CONTROL",
    title: "Schedule Quality Checks & Baseline Readiness",
    cert: "CPM",
    color: "#2563EB",
    gapBadges: ["QUALITY", "BASELINE"],
    objectives: [
      "Audit a schedule before sharing it with leadership",
      "Run practical schedule quality checks, including logic, leads/lags, constraints, float, high duration, invalid dates, resources, missed tasks, critical path behavior, and baseline execution",
      "Create a baseline approval checklist",
      "Explain schedule quality without overcomplicating it"
    ],
    services: ["Schedule Audit", "Quality Gate", "Baseline Review", "PMO Review", "Project Controls"],
    infused: ["Schedule quality checks", "Schedule log review", "Executive readiness", "Schedule defensibility"],
    topics: ["quality review", "missing logic", "leads", "lags", "negative float", "high duration", "invalid dates", "baseline approval"],
    resources: [
      { type: "doc", name: "Microsoft Project critical path training", url: "https://support.microsoft.com/office/show-the-critical-path-of-your-project" }
    ],
    prompts: [
      { title: "Schedule Quality Audit", prompt: "Act as a PMO schedule reviewer. Audit this schedule against practical schedule quality checks: missing predecessors, missing successors, hard constraints, negative float, high-duration tasks, unclear task names, missing owners, and missing baseline notes." },
      { title: "Quality Check Coach", prompt: "Teach me a practical schedule quality review in project scheduler language. Explain missing logic, excessive leads/lags, hard constraints, negative float, high-duration tasks, unclear task names, invalid dates, missing owners, and baseline issues. For each, explain why it matters and how to fix it without damaging the schedule." }
    ],
    labs: [
      {
        id: "ps-lab-5-1",
        title: "Run a Schedule Health Check",
        duration: "60 min",
        difficulty: "Intermediate",
        steps: [
          "Export your schedule to a table with task name, duration, predecessor, successor, owner, constraint, start, finish, and float.",
          "Filter for blank predecessors.",
          "Filter for blank successors.",
          "Check excessive leads and lags.",
          "Filter for tasks longer than 10 working days.",
          "Filter for hard constraints.",
          "Filter for negative float.",
          "Check invalid actual or forecast dates against the status date.",
          "Check whether critical path tasks respond correctly when you delay a major activity.",
          "Check baseline execution by comparing baseline dates to current forecast dates.",
          "Create a schedule health summary with counts and fixes."
        ],
        verify: "Schedule health summary lists quality defects, fixes, and remaining accepted risks."
      },
      {
        id: "ps-lab-5-2",
        title: "Baseline Approval Pack",
        duration: "45 min",
        difficulty: "Intermediate",
        steps: [
          "Create a one-page baseline approval note.",
          "Include project objective, timeline, milestone dates, assumptions, exclusions, top risks, and approval ask.",
          "Attach the schedule health summary.",
          "Write a short leadership summary in plain English."
        ],
        verify: "Baseline pack can be sent to a sponsor for approval."
      }
    ],
    project: {
      id: "ps-proj-5",
      title: "Baseline-Ready Schedule",
      description: "Prepare a defensible baseline schedule and approval package.",
      steps: [
        "Run quality checks.",
        "Fix schedule defects.",
        "Prepare baseline summary.",
        "Document risks and assumptions."
      ],
      prompt: "Help me write a baseline approval summary for this project schedule. Make it executive-friendly and include milestone dates, schedule risks, assumptions, exclusions, and the decision I need from leadership."
    }
  },
  {
    week: 6,
    phase: 2,
    phaseTitle: "NETWORK LOGIC & CONTROL",
    title: "Status Updates, Baselines & Forecasting",
    cert: "TOOLS",
    color: "#2563EB",
    gapBadges: ["STATUS", "FORECAST"],
    objectives: [
      "Apply the scheduler update cycle: set the status/data date, enter actuals, update remaining duration, and recalculate",
      "Update a schedule using actual start, actual finish, remaining duration, and percent complete",
      "Separate progress from forecast changes",
      "Explain variance to baseline",
      "Create weekly schedule status rhythm"
    ],
    services: ["MS Project", "Smartsheet", "Excel", "Data Date", "Status Date", "Variance", "Forecast", "Lookahead"],
    infused: ["Schedule updating", "Baseline variance", "Progress discipline", "Forecast language", "Weekly control cadence", "Optional P6 practice"],
    topics: ["data date", "status date", "actuals", "remaining duration", "baseline variance", "forecast finish", "lookahead"],
    resources: [
      { type: "doc", name: "Project progress tracking", url: "https://support.microsoft.com/office/track-progress-in-project" }
    ],
    prompts: [
      { title: "Update Cycle Tutor", prompt: "Teach me the weekly schedule update cycle for a project scheduler. Explain status date, data date, actual start, actual finish, remaining duration, percent complete, schedule recalculation, baseline variance, and what to review before publishing the updated schedule." },
      { title: "Variance Story", prompt: "Turn this schedule status data into a clear variance narrative. Explain what changed, why it changed, whether the critical path moved, and what decision or support is needed." }
    ],
    labs: [
      {
        id: "ps-lab-6-1",
        title: "Weekly Status Update Drill",
        duration: "50 min",
        difficulty: "Intermediate",
        steps: [
          "Set a status date one week after project start.",
          "If using Primavera P6, set the data date to the same update date. In other tools, use the status date or reporting date field.",
          "Mark 5 tasks complete.",
          "Set 3 in-progress tasks with remaining duration.",
          "Delay one critical task by 3 days.",
          "Recalculate the schedule.",
          "Compare baseline finish date vs forecast finish date.",
          "Export or screenshot the activity table showing baseline start/finish, current start/finish, and variance.",
          "Write a 5-sentence status narrative."
        ],
        verify: "Status update shows data/status date, actuals, remaining work, variance, and a forecast date."
      },
      {
        id: "ps-lab-6-2",
        title: "Two-Week Lookahead",
        duration: "35 min",
        difficulty: "Beginner",
        steps: [
          "Filter the schedule for tasks starting in the next 2 weeks.",
          "Add owner, prerequisite, risk, and decision-needed columns.",
          "Mark tasks blocked by missing inputs.",
          "Create a lookahead summary for the team."
        ],
        verify: "Lookahead report clearly shows upcoming work, owners, blockers, and decisions."
      }
    ],
    project: null
  },
  {
    week: 7,
    phase: 3,
    phaseTitle: "RESOURCE, RISK & HYBRID PLANNING",
    title: "Resource Loading, Capacity & Leveling",
    cert: "RES",
    color: "#7C3AED",
    gapBadges: ["CAPACITY", "LEVELING"],
    objectives: [
      "Assign roles and resource capacity to schedule tasks",
      "Identify overallocations and unrealistic parallel work",
      "Use resource leveling without destroying the plan",
      "Explain tradeoffs between date, scope, and staffing"
    ],
    services: ["Resource Plan", "Capacity", "Leveling", "RACI"],
    infused: ["Capacity-first scheduling", "Role-based estimates", "Staffing tradeoffs"],
    topics: ["resource loading", "overallocation", "leveling", "capacity", "RACI", "calendar"],
    resources: [
      { type: "doc", name: "Project resource management training", url: "https://support.microsoft.com/office/project-training" }
    ],
    prompts: [
      { title: "Capacity Review", prompt: "Review this project schedule and resource list. Identify overallocated roles, unrealistic multitasking, missing skills, and date risks. Suggest options: add resources, extend date, reduce scope, or resequence work." }
    ],
    labs: [
      {
        id: "ps-lab-7-1",
        title: "Load Roles and Find Overallocations",
        duration: "60 min",
        difficulty: "Intermediate",
        steps: [
          "Create role resources: PM, BA, UX, Developer, QA, Security, Trainer.",
          "Assign each task to at least one role.",
          "Set realistic availability for each role.",
          "Find overallocations by week.",
          "Fix one overallocation by resequencing.",
          "Fix another by adding support capacity.",
          "Document the tradeoff."
        ],
        verify: "Resource view shows capacity pressure and at least two documented fixes."
      },
      {
        id: "ps-lab-7-2",
        title: "Staffing Tradeoff Memo",
        duration: "30 min",
        difficulty: "Intermediate",
        steps: [
          "Pick a resource bottleneck.",
          "Create 3 options: keep date and add staff, keep staff and move date, keep date and reduce scope.",
          "List pros, cons, and risks for each.",
          "Recommend one option."
        ],
        verify: "Memo frames staffing as an executive decision, not just a schedule complaint."
      }
    ],
    project: {
      id: "ps-proj-7",
      title: "Resource-Loaded Schedule",
      description: "Convert the baseline schedule into a role-loaded plan with capacity risks.",
      steps: [
        "Add roles and availability.",
        "Assign work.",
        "Find overallocations.",
        "Prepare tradeoff memo."
      ],
      prompt: "Create an executive staffing tradeoff memo from this resource-loaded schedule. Show the bottleneck, impact, 3 options, recommendation, and decision needed."
    }
  },
  {
    week: 8,
    phase: 3,
    phaseTitle: "RESOURCE, RISK & HYBRID PLANNING",
    title: "Schedule Risk, Buffers & Contingency Planning",
    cert: "RISK",
    color: "#7C3AED",
    gapBadges: ["RISK", "BUFFER"],
    objectives: [
      "Identify schedule risks before they become delays",
      "Use buffers transparently instead of hiding padding in tasks",
      "Create risk triggers and response plans",
      "Connect risk register items to schedule impact"
    ],
    services: ["Risk Register", "Buffers", "Contingency", "Monte Carlo Basics"],
    infused: ["Transparent contingency", "Risk triggers", "Schedule impact thinking"],
    topics: ["risk register", "buffer", "contingency", "trigger", "mitigation", "fallback"],
    resources: [
      { type: "doc", name: "PMI risk resources", url: "https://www.pmi.org/" }
    ],
    prompts: [
      { title: "Risk Register Builder", prompt: "Build a schedule risk register for this project. Include risk, cause, impact, probability, schedule impact in days, trigger, owner, mitigation, contingency, and whether the risk affects the critical path." }
    ],
    labs: [
      {
        id: "ps-lab-8-1",
        title: "Create Schedule Risk Register",
        duration: "45 min",
        difficulty: "Intermediate",
        steps: [
          "List 10 schedule risks for the project.",
          "Estimate probability and impact.",
          "Identify which risks touch the critical path.",
          "Assign owners.",
          "Add triggers for the top 5 risks.",
          "Add mitigation and contingency actions."
        ],
        verify: "Risk register has owners, triggers, mitigations, contingencies, and schedule impact."
      },
      {
        id: "ps-lab-8-2",
        title: "Buffer Strategy Drill",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Remove hidden padding from 5 task durations.",
          "Add a visible management reserve or phase buffer.",
          "Explain when the buffer can be used.",
          "Add a rule for escalation when buffer burn exceeds 50 percent."
        ],
        verify: "Schedule contingency is visible, explained, and governed."
      }
    ],
    project: null
  },
  {
    week: 9,
    phase: 3,
    phaseTitle: "RESOURCE, RISK & HYBRID PLANNING",
    title: "Agile, Hybrid & Release Planning",
    cert: "HYBRID",
    color: "#7C3AED",
    gapBadges: ["AGILE", "RELEASE"],
    objectives: [
      "Map epics, features, sprints, releases, and milestones together",
      "Build an agile release plan that executives can understand",
      "Connect sprint-level work to roadmap commitments",
      "Handle dependencies between agile teams and waterfall milestones"
    ],
    services: ["Jira", "Sprint Plan", "Release Plan", "Roadmap"],
    infused: ["Agile/hybrid planning", "Release trains", "Dependency management"],
    topics: ["epics", "features", "sprints", "release plan", "PI planning", "dependencies"],
    resources: [
      { type: "doc", name: "Scrum Guide", url: "https://scrumguides.org/" },
      { type: "doc", name: "SAFe planning resources", url: "https://scaledagileframework.com/" }
    ],
    prompts: [
      { title: "Hybrid Plan Converter", prompt: "Convert this waterfall schedule into a hybrid delivery plan. Keep executive milestones, but organize build work into sprints, releases, dependencies, demos, UAT, deployment, and hypercare." }
    ],
    labs: [
      {
        id: "ps-lab-9-1",
        title: "Build a Hybrid Release Plan",
        duration: "55 min",
        difficulty: "Intermediate",
        steps: [
          "Pick 5 features from the portal project.",
          "Map each feature to 2-week sprints.",
          "Add sprint reviews and release demos.",
          "Map sprint output to executive milestones.",
          "Add dependencies from security, data, and training teams.",
          "Create a release readiness milestone."
        ],
        verify: "Hybrid plan connects sprint work to milestone commitments."
      },
      {
        id: "ps-lab-9-2",
        title: "Dependency Board",
        duration: "35 min",
        difficulty: "Beginner",
        steps: [
          "Create a dependency board with columns: needed from, needed by, date needed, status, risk, owner.",
          "Add at least 8 dependencies from the release plan.",
          "Flag late dependencies.",
          "Write an escalation note for the top blocker."
        ],
        verify: "Dependency board makes cross-team commitments visible."
      }
    ],
    project: {
      id: "ps-proj-9",
      title: "Hybrid Release Roadmap",
      description: "Create a sprint-to-milestone roadmap for a mixed delivery environment.",
      steps: [
        "Group work into sprints.",
        "Map sprints to releases.",
        "Add executive milestones.",
        "Create dependency board."
      ],
      prompt: "Review this hybrid release plan. Check whether sprint work, executive milestones, dependencies, UAT, release readiness, and hypercare are aligned. Suggest fixes."
    }
  },
  {
    week: 10,
    phase: 4,
    phaseTitle: "EXECUTIVE READINESS",
    title: "Schedule Recovery & What-If Scenarios",
    cert: "RISK",
    color: "#F59E0B",
    gapBadges: ["RECOVERY", "WHAT-IF"],
    objectives: [
      "Build recovery options for a slipping schedule",
      "Use crashing, fast-tracking, descoping, and resequencing responsibly",
      "Explain recovery tradeoffs clearly",
      "Prepare for PM interview scheduling scenarios"
    ],
    services: ["Recovery Plan", "Scenario Planning", "Crashing", "Fast-Tracking"],
    infused: ["Interview scenarios", "Executive options", "Schedule compression"],
    topics: ["crashing", "fast-tracking", "scope tradeoff", "resequence", "recovery plan"],
    resources: [
      { type: "doc", name: "PMI schedule compression concepts", url: "https://www.pmi.org/" }
    ],
    prompts: [
      { title: "Recovery Scenario Coach", prompt: "Give me a realistic project scheduling recovery scenario for a technical project manager interview. Let me answer first, then critique my answer for tradeoffs, stakeholder management, critical path thinking, and executive communication." }
    ],
    labs: [
      {
        id: "ps-lab-10-1",
        title: "Three-Week Delay Recovery",
        duration: "60 min",
        difficulty: "Advanced",
        steps: [
          "Create a copy of the baseline schedule.",
          "Delay a critical-path build task by 3 weeks.",
          "Create recovery option 1: add resources.",
          "Create recovery option 2: fast-track overlapping work.",
          "Create recovery option 3: reduce scope for go-live.",
          "Compare impacts on cost, risk, quality, and stakeholder load.",
          "Recommend one option."
        ],
        verify: "Recovery plan includes at least 3 options with tradeoffs and a recommendation."
      },
      {
        id: "ps-lab-10-2",
        title: "Executive Recovery Brief",
        duration: "40 min",
        difficulty: "Advanced",
        steps: [
          "Write a short brief with current variance, cause, options, recommendation, and decision needed.",
          "Keep the brief under 250 words.",
          "Add a one-line risk statement.",
          "Add a one-line ask."
        ],
        verify: "Brief is short enough for a sponsor and specific enough to make a decision."
      }
    ],
    project: null
  },
  {
    week: 11,
    phase: 4,
    phaseTitle: "EXECUTIVE READINESS",
    title: "Executive Dashboards, RAID & Portfolio Reporting",
    cert: "EXEC",
    color: "#F59E0B",
    gapBadges: ["DASHBOARD", "RAID"],
    objectives: [
      "Turn schedule data into executive reporting",
      "Create RAG status based on objective criteria",
      "Connect schedule, RAID, decisions, and financial impact",
      "Build a portfolio-style dashboard"
    ],
    services: ["Dashboard", "RAID", "RAG", "Portfolio"],
    infused: ["Executive communication", "Decision-driven reporting", "Portfolio view"],
    topics: ["RAG status", "RAID", "milestone report", "portfolio dashboard", "decision log"],
    resources: [
      { type: "doc", name: "Smartsheet dashboard examples", url: "https://www.smartsheet.com/project-management" }
    ],
    prompts: [
      { title: "Executive Status Writer", prompt: "Turn this schedule data into an executive status update. Include RAG status, milestone movement, critical path risk, decisions needed, RAID highlights, next 2 weeks, and sponsor asks." }
    ],
    labs: [
      {
        id: "ps-lab-11-1",
        title: "Build a Schedule Dashboard",
        duration: "60 min",
        difficulty: "Intermediate",
        steps: [
          "Create dashboard sections: milestone trend, RAG status, critical path risk, upcoming decisions, top RAID items, next 2-week lookahead.",
          "Add 5 milestone dates and baseline variance.",
          "Define RAG thresholds.",
          "Add top 5 risks/issues.",
          "Add 3 executive decisions needed.",
          "Write a one-paragraph summary."
        ],
        verify: "Dashboard helps a leader decide where attention is needed."
      },
      {
        id: "ps-lab-11-2",
        title: "Portfolio Rollup",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Create 3 sample projects with RAG, finish date, variance, risk, and decision needed.",
          "Rank projects by schedule risk.",
          "Write a portfolio summary.",
          "Flag shared resource bottlenecks."
        ],
        verify: "Portfolio view shows which projects need leadership intervention."
      }
    ],
    project: {
      id: "ps-proj-11",
      title: "Executive Schedule Dashboard",
      description: "Build a decision-ready dashboard for a project or mini portfolio.",
      steps: [
        "Define RAG criteria.",
        "Add milestone trend.",
        "Add RAID and decisions.",
        "Write executive narrative."
      ],
      prompt: "Critique this executive project dashboard. Is the RAG status evidence-based? Are risks tied to schedule impact? Are the decision asks clear? What should be removed, added, or rewritten?"
    }
  },
  {
    week: 12,
    phase: 4,
    phaseTitle: "EXECUTIVE READINESS",
    title: "Capstone: End-to-End Scheduling Portfolio",
    cert: "EXEC",
    color: "#F59E0B",
    gapBadges: ["CAPSTONE", "INTERVIEW"],
    objectives: [
      "Package a complete schedule artifact set",
      "Practice explaining schedule decisions in interviews",
      "Create reusable templates for future projects",
      "Build confidence in scheduling, recovery, and reporting conversations"
    ],
    services: ["Portfolio", "Templates", "Interview Prep", "Lessons Learned"],
    infused: ["Portfolio artifact", "Interview story", "Reusable templates"],
    topics: ["capstone", "portfolio", "STAR stories", "templates", "lessons learned"],
    resources: [
      { type: "doc", name: "PMI career resources", url: "https://www.pmi.org/certifications/career-central" }
    ],
    prompts: [
      { title: "Mock Interview", prompt: "Interview me for a Technical Project Manager role with a focus on project scheduling. Ask scenario questions about critical path, missed milestones, stakeholder delays, resource constraints, agile/hybrid planning, and executive reporting. Wait for my answer, then critique it." },
      { title: "Portfolio Polish", prompt: "Review my project scheduling portfolio package. Make it concise, professional, and interview-ready. Suggest how to describe it on my resume and LinkedIn without overstating." }
    ],
    labs: [
      {
        id: "ps-lab-12-1",
        title: "Assemble the Scheduling Portfolio",
        duration: "75 min",
        difficulty: "Advanced",
        steps: [
          "Collect the baseline schedule, WBS, dependency-risk memo, schedule health summary, resource plan, risk register, recovery plan, and executive dashboard.",
          "Remove sensitive or unrealistic sample data.",
          "Add a short project summary page.",
          "Add a lessons-learned page.",
          "Export the package as PDF or a clean folder of artifacts.",
          "Write 3 interview talking points."
        ],
        verify: "Portfolio package is clean enough to discuss in an interview or adapt for real work."
      },
      {
        id: "ps-lab-12-2",
        title: "Scheduling Interview Practice",
        duration: "45 min",
        difficulty: "Advanced",
        steps: [
          "Write answers to 5 scheduling interview questions.",
          "Use STAR format for at least 2 answers.",
          "Include one answer about recovering a late project.",
          "Include one answer about resource constraints.",
          "Practice explaining critical path in under 60 seconds."
        ],
        verify: "You have interview-ready answers tied to real scheduling artifacts."
      }
    ],
    project: {
      id: "ps-proj-12",
      title: "Project Scheduling Capstone",
      description: "An end-to-end scheduling toolkit for a technical project manager or PMO role.",
      steps: [
        "Finalize schedule package.",
        "Create executive summary.",
        "Prepare interview talking points.",
        "Save reusable templates."
      ],
      prompt: "Help me turn this scheduling capstone into a portfolio story for a Technical Project Manager interview. Include the business problem, schedule approach, tools used, risks managed, recovery options, executive reporting, and measurable outcome."
    }
  }
];
