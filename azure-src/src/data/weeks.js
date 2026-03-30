export const WEEKS = [
  {
    week: 1,
    phase: "Foundation",
    title: "Cloud Foundations, Azure Setup & Cost Awareness",
    cert: "AZ-900",
    color: "#0078D4",
    gapBadges: [],
    objectives: [
      "Understand cloud computing models (IaaS, PaaS, SaaS)",
      "Navigate the Azure Portal and use Cloud Shell",
      "Create and manage resource groups with proper tagging",
      "Set up cost budgets and billing alerts from Day 1",
      "Install and configure Azure CLI locally"
    ],
    services: ["Azure Portal", "Azure CLI", "Resource Groups", "Cost Management", "Tags", "Subscriptions"],
    infused: ["Resource tagging from Day 1", "Budget alerts & cost basics", "Cost Management introduction"],
    topics: [
      "Cloud computing overview (IaaS, PaaS, SaaS)",
      "Cloud deployment models (Public, Private, Hybrid)",
      "Azure global infrastructure (Regions, Availability Zones)",
      "Azure account, subscriptions & resource groups",
      "Azure Portal walkthrough & Azure CLI basics",
      "Resource tagging strategy — tag everything from Day 1",
      "Azure Cost Management — budgets, billing alerts, cost awareness"
    ],
    labs: [
      {
        name: "Lab 1: Create a Free Azure Account",
        duration: "20 min",
        difficulty: "Beginner",
        steps: [
          "Navigate to azure.microsoft.com/free and sign up",
          "Verify identity with phone number and credit card (no charge)",
          "Explore the Azure Portal dashboard — pin key services",
          "Open Azure Cloud Shell (Bash) and run: az account show",
          "Navigate to Cost Management → set a $10 monthly budget with email alerts at 50%, 80%, 100%"
        ],
        verify: "You can access the Portal and Cloud Shell. Budget alert is active."
      },
      {
        name: "Lab 2: Install Azure CLI & VS Code",
        duration: "25 min",
        difficulty: "Beginner",
        steps: [
          "Download VS Code from code.visualstudio.com",
          "Install Azure CLI from Microsoft docs",
          "Open terminal → run: az login → authenticate via browser",
          "Run: az group list -o table → verify empty list",
          "Install VS Code extensions: Azure Account, Azure Resources, Azure CLI Tools"
        ],
        verify: "az account show returns your subscription. VS Code extensions installed."
      },
      {
        name: "Lab 3: Create Resource Groups with Proper Tagging",
        duration: "20 min",
        difficulty: "Beginner",
        steps: [
          "In Portal: Create rg-learning-portal in East US",
          "Add tags: Environment=Learning, Owner=YourName, CostCenter=Training, Week=1",
          "In CLI: az group create --name rg-learning-cli --location eastus --tags Environment=Learning Owner=YourName CostCenter=Training",
          "Run: az group list -o table → confirm both exist",
          "View tags: az tag list → understand the tagging structure",
          "Navigate to Cost Management → Cost Analysis → group by Tag:CostCenter",
          "Clean up: az group delete --name rg-learning-cli --yes --no-wait"
        ],
        verify: "Both resource groups exist with proper tags. Cost Analysis shows tag grouping."
      }
    ],
    resources: [
      { type: "doc", name: "Microsoft Learn: Azure Fundamentals (AZ-900 Path)", url: "https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/" },
      { type: "doc", name: "Azure Architecture Center", url: "https://learn.microsoft.com/en-us/azure/architecture/" },
      { type: "doc", name: "Azure Tagging Best Practices", url: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/naming-and-tagging" },
      { type: "video", name: "FreeCodeCamp AZ-900 Full Course (YouTube)", url: "https://www.youtube.com/watch?v=NKEFWyqJ5XA" }
    ],
    project: null,
    prompts: [
      { title: "Azure Shared Responsibility Model", prompt: `Explain the Azure shared responsibility model like I'm preparing for AZ-900. Create a detailed table showing what Microsoft manages vs what I manage for: IaaS (VMs), PaaS (App Service, Azure SQL), and SaaS (Microsoft 365). For each layer, list specific security responsibilities. Then give me 5 real-world scenarios and ask me to identify who's responsible.` },
      { title: "Tagging Strategy Design", prompt: `I'm setting up Azure for a 50-person startup called 'TechNova' with 3 departments: Engineering, Marketing, and Finance. Design a complete tagging strategy including:\n1. Mandatory tags (Environment, Owner, CostCenter, Project, etc.)\n2. Tag naming conventions\n3. Azure Policy to enforce required tags\n4. How to use tags for cost allocation and showback\n5. Example az cli commands to create resources with proper tags\nMake it production-ready.` },
      { title: "AZ-900 Practice Questions", prompt: `Quiz me on 15 AZ-900 practice questions covering: cloud concepts (5 questions), Azure architecture (5 questions), and Azure pricing/support (5 questions). For each question:\n1. Give me the question with 4 options\n2. Wait for my answer\n3. Explain why the correct answer is right AND why the others are wrong\n4. Reference the specific Azure service or concept\nMake them exam-difficulty level.` },
      { title: "Azure Regions & Availability", prompt: `Teach me Azure global infrastructure in depth. Cover:\n1. Regions vs Availability Zones vs Availability Sets — when to use each\n2. Region pairs and their disaster recovery benefits\n3. How to choose the right region (latency, compliance, services, cost)\n4. Sovereign clouds (Government, China)\n5. Create a decision tree for: 'TechNova' needs to deploy a web app serving US and EU customers with 99.99% SLA\nInclude az cli examples.` }
    ]
  },
  {
    week: 2,
    phase: "Identity & Governance",
    title: "Entra ID, RBAC & Azure Policy Fundamentals",
    cert: "AZ-104 / AZ-500",
    color: "#5C2D91",
    gapBadges: [],
    objectives: [
      "Create and manage users and groups in Entra ID",
      "Implement RBAC with built-in and custom roles",
      "Create and assign Azure Policies for governance",
      "Understand Management Groups hierarchy",
      "Set up Service Principals and Managed Identities"
    ],
    services: ["Entra ID", "RBAC", "Azure Policy", "Management Groups", "PIM", "Managed Identity"],
    infused: ["Azure Policy basics (allowed locations, require tags)", "Management Groups hierarchy", "Conditional Access introduction"],
    topics: [
      "Active Directory vs Microsoft Entra ID",
      "Tenants, subscriptions & management groups hierarchy",
      "Users, groups & guest accounts",
      "Role-Based Access Control (RBAC) — built-in vs custom",
      "Privileged Identity Management (PIM)",
      "Managed Identities & Service Principals",
      "Azure Policy basics — built-in policies & assignments",
      "Management Groups for organizational governance",
      "Conditional Access introduction"
    ],
    labs: [
      {
        name: "Lab 1: Create Users & Groups in Entra ID",
        duration: "20 min",
        difficulty: "Beginner",
        steps: [
          "Go to Portal → Microsoft Entra ID → Users → New User",
          "Create user: alice@yourtenant.onmicrosoft.com ('Cloud Admin')",
          "Create user: bob@yourtenant.onmicrosoft.com ('Developer')",
          "Create Security Group: 'Azure-Admins' → add Alice",
          "Create Security Group: 'Developers' → add Bob",
          "Sign in as Alice in private browser → change temp password"
        ],
        verify: "Both users exist. Alice can sign in and is in Azure-Admins group."
      },
      {
        name: "Lab 2: Configure RBAC",
        duration: "25 min",
        difficulty: "Intermediate",
        steps: [
          "Create resource group: rg-rbac-lab in East US (with proper tags)",
          "Assign 'Reader' role to Bob on rg-rbac-lab",
          "Sign in as Bob → verify read-only access",
          "Change Bob to 'Contributor' → verify create access",
          "Assign 'Reader' to 'Developers' group at subscription level",
          "Clean up all assignments"
        ],
        verify: "Bob has correct access at each step. Group-based RBAC works."
      },
      {
        name: "Lab 3: Implement Your First Azure Policies",
        duration: "30 min",
        difficulty: "Intermediate",
        steps: [
          "Navigate to Azure Policy → Definitions → browse built-in policies",
          "Assign policy: 'Allowed locations' → restrict to East US and West US",
          "Test: try creating a resource in Europe → verify DENIED",
          "Assign policy: 'Require a tag and its value' → enforce CostCenter tag",
          "Test: create resource without CostCenter tag → verify DENIED",
          "Create resource WITH CostCenter tag → verify ALLOWED",
          "View Policy Compliance dashboard → understand compliance state"
        ],
        verify: "Resources blocked in wrong regions. Untagged resources denied."
      },
      {
        name: "Lab 4: Create a Service Principal",
        duration: "20 min",
        difficulty: "Intermediate",
        steps: [
          "Run: az ad sp create-for-rbac --name sp-week2-demo --role Contributor --scopes /subscriptions/<sub-id>",
          "Save appId, password, tenant from JSON output",
          "Login as SP: az login --service-principal -u <appId> -p <password> --tenant <tenant>",
          "Verify access: az group list -o table",
          "Delete SP: az ad sp delete --id <appId>"
        ],
        verify: "Service principal can authenticate and list resources."
      }
    ],
    resources: [
      { type: "doc", name: "Microsoft Learn: Manage identities in Entra ID", url: "https://learn.microsoft.com/en-us/training/modules/manage-users-and-groups-in-aad/" },
      { type: "doc", name: "RBAC Documentation", url: "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview" },
      { type: "doc", name: "Azure Policy Overview", url: "https://learn.microsoft.com/en-us/azure/governance/policy/overview" }
    ],
    project: null,
    prompts: [
      { title: "Enterprise IAM Design", prompt: `I'm designing IAM for 'Contoso Corp' — a 200-person company with these departments:\n- IT (15 people): need full Azure admin\n- Development (50): need to deploy apps, can't touch networking\n- Data Team (20): need access to databases and storage only\n- Finance (30): read-only cost reports\n- Executives (5): dashboards only\n\nDesign the complete Entra ID structure:\n1. Groups and nested groups\n2. RBAC role assignments (built-in roles)\n3. Custom role if needed\n4. Management Group hierarchy\n5. Conditional Access policies (MFA for admins, block risky sign-ins)\n\nGive me the az cli commands to implement this.` },
      { title: "Entra ID vs Azure RBAC", prompt: `I'm confused about Entra ID roles vs Azure RBAC roles. Explain with a clear comparison table:\n1. What each controls (Entra ID objects vs Azure resources)\n2. Where they're assigned\n3. 10 common roles from each with their purpose\n4. Real scenarios: 'User needs to reset passwords' vs 'User needs to create VMs'\n5. How they work together\n\nThen quiz me with 5 scenarios where I have to pick the right role type.` },
      { title: "Azure Policy Deep Dive", prompt: `Teach me Azure Policy like I'm implementing governance for a regulated company. Cover:\n1. Policy vs Initiative (policy set) — when to use each\n2. Effect types (Deny, Audit, Append, Modify, DeployIfNotExists) with examples\n3. Write 5 custom policies:\n   - Deny public IP addresses on VMs\n   - Require specific tag values (Environment must be dev/staging/prod)\n   - Audit storage accounts without HTTPS\n   - Deploy diagnostics settings automatically\n   - Deny resources outside approved regions\n4. How to test policies before enforcement\n5. Remediation tasks\n\nProvide the full JSON for each policy.` },
      { title: "Managed Identity Patterns", prompt: `Explain Azure Managed Identities with real architecture patterns:\n1. System-assigned vs User-assigned — decision tree\n2. Pattern: VM accessing Key Vault secrets\n3. Pattern: App Service connecting to Azure SQL\n4. Pattern: Azure Function writing to Storage\n5. Pattern: AKS pods accessing Azure resources\n\nFor each pattern, show:\n- The az cli commands to set it up\n- The RBAC role assignments needed\n- The application code to use the identity\n- Security benefits over service principals with secrets` }
    ]
  },
  {
    week: 3,
    phase: "Networking I",
    title: "Virtual Networks, Subnets, NSGs & DNS",
    cert: "AZ-104",
    color: "#0078D4",
    gapBadges: ["NETWORKING"],
    objectives: [
      "Design VNets with proper CIDR addressing",
      "Create subnets for multi-tier architectures",
      "Configure NSG rules and understand rule evaluation",
      "Deploy Azure Bastion for secure VM access",
      "Set up Azure DNS zones (public and private)"
    ],
    services: ["VNet", "Subnets", "NSG", "ASG", "Azure DNS", "Bastion", "Public IP"],
    infused: [],
    topics: [
      "Virtual Networks (VNets) & address spaces (CIDR notation)",
      "Subnets, public IPs, private IPs",
      "Network Security Groups (NSGs) & rule evaluation",
      "Application Security Groups (ASGs)",
      "Azure DNS (public & private zones)",
      "Azure Bastion for secure VM access"
    ],
    labs: [
      {
        name: "Lab 1: Build a VNet with 3 Subnets",
        duration: "25 min",
        difficulty: "Beginner",
        steps: [
          "Create VNet: vnet-main, 10.0.0.0/16, East US (tag: Environment=Learning)",
          "Add Subnet: snet-web (10.0.1.0/24) — web tier",
          "Add Subnet: snet-app (10.0.2.0/24) — application tier",
          "Add Subnet: snet-db (10.0.3.0/24) — database tier",
          "Verify: az network vnet subnet list --vnet-name vnet-main -g rg-network -o table"
        ],
        verify: "VNet exists with 3 subnets. CIDR ranges don't overlap."
      },
      {
        name: "Lab 2: Configure NSG Rules",
        duration: "30 min",
        difficulty: "Intermediate",
        steps: [
          "Create nsg-web → associate with snet-web",
          "Add inbound: Allow HTTP (80) from Internet, Priority 100",
          "Add inbound: Allow HTTPS (443) from Internet, Priority 110",
          "Add inbound: Deny ALL other, Priority 4000",
          "Create nsg-db → associate with snet-db",
          "Add rule: Allow SQL (1433) ONLY from 10.0.2.0/24 (app subnet)",
          "Deploy VMs and test connectivity between subnets"
        ],
        verify: "Web allows 80/443. DB only accepts traffic from app subnet."
      },
      {
        name: "Lab 3: Deploy Azure Bastion",
        duration: "25 min",
        difficulty: "Intermediate",
        steps: [
          "Add AzureBastionSubnet (10.0.4.0/26) to vnet-main",
          "Deploy Bastion and associate with vnet-main",
          "Deploy a VM in snet-web WITHOUT a public IP",
          "Connect via Bastion (Portal → VM → Connect → Bastion)",
          "Verify secure access without exposing public IP"
        ],
        verify: "VM has no public IP but is accessible via Bastion."
      }
    ],
    resources: [
      { type: "doc", name: "Azure Networking Fundamentals", url: "https://learn.microsoft.com/en-us/training/modules/azure-networking-fundamentals/" },
      { type: "doc", name: "NSG Documentation", url: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview" }
    ],
    project: null,
    prompts: [
      { title: "CIDR Subnetting Exercise", prompt: `I need to master Azure subnetting. Give me a complete exercise:\n\nScenario: 'MegaCorp' has 4 departments needing isolated networks within 10.0.0.0/16:\n- Web tier: 200 hosts\n- App tier: 100 hosts  \n- Database tier: 50 hosts\n- Management: 25 hosts\n- Plus room for Bastion, Gateway, and future growth\n\n1. Calculate the optimal subnet sizes (show the binary math)\n2. Assign CIDR blocks for each\n3. Identify the network address, broadcast address, and usable range for each\n4. Show az cli commands to create the VNet and all subnets\n5. Quiz me with 5 subnetting problems of increasing difficulty` },
      { title: "NSG Rule Evaluation", prompt: `Teach me NSG rule evaluation in Azure with visual diagrams:\n1. Inbound vs Outbound rule processing\n2. Priority numbers — lower wins, explain with examples\n3. Default rules and why they exist\n4. Subnet NSG vs NIC NSG — which wins?\n5. Application Security Groups — when and why\n\nScenario: Design NSG rules for a 3-tier app where:\n- Web tier accepts 80/443 from internet, can talk to app tier on 8080\n- App tier accepts 8080 from web only, talks to DB on 1433\n- DB tier accepts 1433 from app only, no internet\n- All tiers need SSH from Bastion subnet only\n\nWrite all the rules with priorities and explain the flow.` },
      { title: "Network Architecture Diagram", prompt: `Create a complete ASCII network diagram for a secure 3-tier Azure architecture including:\n- Hub VNet with Bastion, Azure Firewall, VPN Gateway\n- Spoke VNet with web/app/db subnets\n- NSGs on each subnet with traffic flow arrows\n- Route tables showing traffic paths\n- Private DNS zones\n\nThen explain each component's purpose and how traffic flows from:\n1. Internet user → Web tier → App tier → Database\n2. Admin → Bastion → VM in private subnet\n3. On-prem user → VPN → Internal app` },
      { title: "Azure DNS Deep Dive", prompt: `Explain Azure DNS completely:\n1. Public DNS zones — hosting your domain in Azure\n2. Private DNS zones — internal name resolution\n3. DNS record types (A, AAAA, CNAME, MX, TXT, SRV) with examples\n4. Auto-registration with VNets\n5. Split-horizon DNS pattern\n\nHands-on: I own 'technova.io'. Walk me through:\n- Delegating to Azure DNS\n- Creating records for web app, mail, and SPF/DKIM\n- Private zone for internal VMs\n- All the az cli commands` }
    ]
  },
  {
    week: 4,
    phase: "Networking II",
    title: "Load Balancing, VPN Gateway & Peering",
    cert: "AZ-104 / AZ-305",
    color: "#00A4EF",
    gapBadges: [],
    objectives: [
      "Deploy Azure Load Balancer (Layer 4) with health probes",
      "Configure VNet Peering for hub-spoke topology",
      "Understand Application Gateway vs Load Balancer",
      "Set up VPN Gateway for hybrid connectivity",
      "Design multi-region traffic routing"
    ],
    services: ["Load Balancer", "Application Gateway", "Traffic Manager", "Front Door", "VNet Peering", "VPN Gateway"],
    infused: [],
    topics: [
      "Azure Load Balancer (Layer 4) — public & internal",
      "Application Gateway (Layer 7) with WAF",
      "Azure Traffic Manager & Front Door",
      "VNet Peering (regional & global)",
      "VPN Gateway (Site-to-Site, Point-to-Site)",
      "ExpressRoute overview"
    ],
    labs: [
      {
        name: "Lab 1: Deploy a Public Load Balancer",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Create 2 VMs (vm-web-1, vm-web-2) in availability set, running nginx",
          "Create Load Balancer: lb-web, SKU: Standard",
          "Configure frontend IP, backend pool (both VMs)",
          "Add health probe: HTTP on port 80, interval 5s",
          "Add LB rule: port 80 → backend port 80",
          "Browse to LB public IP → refresh to see traffic alternate",
          "Stop vm-web-1 → verify failover to vm-web-2"
        ],
        verify: "Traffic alternates between VMs. Failover works when one VM stops."
      },
      {
        name: "Lab 2: Configure VNet Peering (Hub-Spoke)",
        duration: "30 min",
        difficulty: "Intermediate",
        steps: [
          "Create vnet-spoke1 (10.1.0.0/16) and vnet-spoke2 (10.2.0.0/16)",
          "Deploy a VM in each VNet",
          "Set up peering: spoke1 ↔ vnet-main, spoke2 ↔ vnet-main",
          "From spoke1 VM, ping vnet-main VM → should succeed",
          "From spoke1 VM, ping spoke2 VM → should FAIL (non-transitive)",
          "Document the hub-spoke topology"
        ],
        verify: "Peered VNets can communicate. Non-peered cannot (without hub routing)."
      }
    ],
    resources: [
      { type: "doc", name: "Azure Load Balancer Docs", url: "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview" },
      { type: "doc", name: "VNet Peering", url: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview" }
    ],
    project: {
      name: "PROJECT 1: Deploy a 3-Tier Architecture in Azure",
      description: "Design and deploy a full 3-tier app (web → app → database) with load balancing, NSGs between tiers, and Bastion access.",
      dummyData: "Contoso Retail — e-commerce with 500 daily users. Web tier serves static assets, App tier runs business logic APIs, DB tier hosts product catalog (50,000 SKUs).",
      steps: [
        "Design the architecture diagram with Claude",
        "Create VNet with 3 subnets: web, app, db",
        "Deploy 2 web VMs behind a public Load Balancer",
        "Deploy 1 app VM running a Node.js API",
        "Deploy 1 VM with PostgreSQL in the db subnet",
        "Configure NSGs: web allows 80/443, app allows 8080 from web only, db allows 5432 from app only",
        "Deploy Bastion for management access",
        "Test end-to-end and document architecture"
      ]
    },
    prompts: [
      { title: "Load Balancer Comparison", prompt: `Compare ALL Azure load balancing options in a detailed table:\n- Azure Load Balancer (Layer 4)\n- Application Gateway (Layer 7)\n- Traffic Manager (DNS-based)\n- Azure Front Door (global Layer 7)\n\nFor each, cover:\n1. OSI layer and how it routes traffic\n2. Health probe options\n3. SSL termination capability\n4. WAF support\n5. Global vs regional\n6. Pricing model\n7. Best use cases (3 each)\n\nThen give me a decision tree: Given these 5 scenarios, which should I use?\n- Internal API load balancing\n- Global web app with WAF\n- Multi-region failover\n- UDP game server\n- Microservices with path-based routing` },
      { title: "Hub-Spoke Network Design", prompt: `Design a hub-spoke network topology for 'Contoso Corp' with:\n- 1 hub VNet (shared services: Bastion, Firewall, VPN Gateway)\n- 3 spoke VNets (Production, Development, Test)\n- On-premises connectivity via VPN\n\nInclude:\n1. Complete CIDR addressing plan\n2. VNet peering configuration (with transit)\n3. Route tables for spoke-to-spoke via hub\n4. NSG rules for each spoke\n5. Azure Firewall rules\n6. DNS resolution strategy\n\nProvide all az cli commands and draw an ASCII diagram showing traffic flows.` },
      { title: "VPN Gateway Setup", prompt: `Walk me through setting up Azure VPN Gateway step by step:\n\n1. Site-to-Site VPN to on-premises:\n   - Gateway subnet sizing\n   - SKU selection guide\n   - Local network gateway config\n   - IPsec/IKE parameters\n   - All az cli commands\n\n2. Point-to-Site VPN for remote workers:\n   - Certificate vs Azure AD authentication\n   - Client configuration\n   - Split tunneling setup\n\n3. Troubleshooting guide:\n   - Common issues and fixes\n   - How to read VPN logs\n   - Testing connectivity\n\nScenario: Connect Azure VNet (10.0.0.0/16) to on-prem (192.168.0.0/24) with BGP.` },
      { title: "ExpressRoute vs VPN", prompt: `Compare ExpressRoute vs VPN Gateway for hybrid connectivity:\n\n1. Architecture differences (with diagrams)\n2. Bandwidth and latency comparison\n3. Pricing breakdown (realistic monthly costs)\n4. Security considerations\n5. Redundancy options\n6. Setup complexity\n\nDecision framework: A company has:\n- 500 employees\n- 10TB monthly data transfer to Azure\n- Latency-sensitive ERP application\n- $5,000/month connectivity budget\n\nRecommend the best option with justification.` }
    ]
  },
  {
    week: 5,
    phase: "Compute",
    title: "VMs, App Service & Serverless Compute Intro",
    cert: "AZ-104 / AZ-204",
    color: "#F25022",
    gapBadges: ["LINUX"],
    objectives: [
      "Deploy and manage Windows and Linux VMs",
      "Configure VM Scale Sets with autoscaling",
      "Deploy web apps to Azure App Service with slots",
      "Create your first Azure Function (HTTP trigger)",
      "Deploy Static Web Apps with GitHub integration"
    ],
    services: ["VMs", "VMSS", "App Service", "Azure Functions", "Static Web Apps", "Availability Sets/Zones"],
    infused: ["Azure Functions basics (HTTP trigger)", "Static Web Apps introduction", "Serverless as a compute model"],
    topics: [
      "Azure VM sizes, families & pricing tiers",
      "Availability Sets vs Zones vs Scale Sets",
      "VM extensions, custom data & cloud-init",
      "Azure App Service plans & tiers",
      "Deployment slots & zero-downtime swaps",
      "Azure Functions — serverless compute introduction",
      "Azure Static Web Apps — full-stack serverless hosting",
      "Compute decision tree: VM → App Service → Functions → ACI → AKS"
    ],
    labs: [
      {
        name: "Lab 1: Deploy Windows & Linux VMs",
        duration: "30 min",
        difficulty: "Beginner",
        steps: [
          "Create Windows VM: vm-win-01, B2s, Windows Server 2022",
          "RDP in → install IIS via Server Manager",
          "Create Linux VM: vm-linux-01, B1s, Ubuntu 22.04",
          "SSH in → sudo apt update && sudo apt install nginx -y",
          "Verify both serve web pages via public IPs",
          "Resize vm-linux-01 to B2s → observe restart"
        ],
        verify: "Both VMs serve web pages. Resize completes successfully."
      },
      {
        name: "Lab 2: VM Scale Set with Autoscaling",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Create VMSS with cloud-init for nginx, 2 initial instances",
          "Attach Load Balancer",
          "Set autoscale: out at CPU > 70%, in at CPU < 30%",
          "Stress test: stress --cpu 4 --timeout 300",
          "Watch VMSS scale out in Activity Log"
        ],
        verify: "VMSS scales out under load, scales in when load drops."
      },
      {
        name: "Lab 3: Azure App Service with Deployment Slots",
        duration: "30 min",
        difficulty: "Intermediate",
        steps: [
          "Create App Service Plan (B1, Linux) + Web App (Node.js 18)",
          "Connect to sample GitHub repo for deployment",
          "Enable staging slot → deploy v2 to staging",
          "Browse both slots → verify different versions",
          "Swap staging → production → zero-downtime deployment"
        ],
        verify: "Production shows new version after swap. No downtime occurred."
      },
      {
        name: "Lab 4: Your First Azure Function",
        duration: "25 min",
        difficulty: "Beginner",
        steps: [
          "Create Function App: func-week5, Node.js, Consumption plan",
          "Create HTTP trigger function: GetGreeting → returns personalized JSON",
          "Test in Portal with query parameters",
          "Test via curl: curl https://func-week5.azurewebsites.net/api/GetGreeting?name=Azure",
          "View Monitor tab → see invocation logs",
          "Note: we'll go deep on Functions triggers and patterns in Week 16"
        ],
        verify: "Function returns personalized greeting. Logs show invocations."
      },
      {
        name: "Lab 5: Deploy a Static Web App",
        duration: "25 min",
        difficulty: "Beginner",
        steps: [
          "Create a simple React or HTML app (ask Claude to generate it)",
          "Push to a GitHub repository",
          "Create Azure Static Web App → link to GitHub",
          "Verify auto-deployment on push",
          "Create a PR → see preview environment auto-created"
        ],
        verify: "Site deploys automatically. PR creates preview environment."
      }
    ],
    resources: [
      { type: "doc", name: "VM Documentation", url: "https://learn.microsoft.com/en-us/azure/virtual-machines/" },
      { type: "doc", name: "App Service Documentation", url: "https://learn.microsoft.com/en-us/azure/app-service/" },
      { type: "doc", name: "Azure Functions Overview", url: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview" },
      { type: "doc", name: "Static Web Apps", url: "https://learn.microsoft.com/en-us/azure/static-web-apps/" }
    ],
    project: {
      name: "PROJECT 2: Host a Portfolio on Azure (3 Ways)",
      description: "Deploy the same portfolio website three ways: Blob Storage static site, App Service with slots, and Static Web App with GitHub integration.",
      dummyData: "Portfolio: About Me, 5 projects with screenshots, Skills section, Contact form. Use placeholder images and dummy descriptions.",
      steps: [
        "Ask Claude to generate a responsive HTML/CSS portfolio",
        "Deploy v1 to Blob Storage as a static website + CDN",
        "Deploy v2 to App Service with staging/production slots",
        "Deploy v3 to Azure Static Web App linked to GitHub",
        "Add a simple Azure Function API endpoint: /api/contact",
        "Compare: cost, deployment speed, features of each approach",
        "Document your recommendation for different use cases"
      ]
    },
    prompts: [
      { title: "VM Size Selection Guide", prompt: `Create a complete Azure VM sizing guide:\n\n1. Explain all VM families with real-world analogies:\n   - B-series (burstable)\n   - D-series (general purpose)\n   - E-series (memory optimized)\n   - F-series (compute optimized)\n   - N-series (GPU)\n   - L-series (storage optimized)\n\n2. Decision matrix for these workloads:\n   - WordPress blog (100 visitors/day)\n   - .NET API (1000 requests/min)\n   - PostgreSQL database (500GB)\n   - Machine learning training\n   - Video transcoding batch job\n\n3. Cost optimization strategies:\n   - Reserved instances vs Spot vs Pay-as-you-go\n   - When to use each\n   - Savings calculator example\n\nInclude az cli commands to deploy each.` },
      { title: "Compute Decision Tree", prompt: `Help me choose the right Azure compute service. Create a detailed decision tree covering:\n- Azure VMs\n- VM Scale Sets\n- App Service\n- Azure Functions\n- Container Instances (ACI)\n- Azure Kubernetes Service (AKS)\n- Azure Container Apps\n\nFor each, explain:\n1. Best use cases (3 examples)\n2. Pricing model\n3. Scaling capabilities\n4. Management overhead\n5. When NOT to use it\n\nThen give me 10 scenarios and quiz me on which compute service to choose.` },
      { title: "Cloud-Init Script Generator", prompt: `Generate production-ready cloud-init scripts for Azure VMs:\n\n1. Web Server Setup (nginx + certbot + monitoring agent)\n2. Docker Host (Docker, Docker Compose, cleanup cron)\n3. Development VM (Node.js, Python, Git, VS Code Server)\n4. Database Server (PostgreSQL with proper security)\n\nFor each script:\n- Full YAML cloud-init format\n- Explanation of every section\n- Security hardening steps\n- How to pass it via az cli\n- How to troubleshoot if it fails\n\nAlso show how to use custom data vs cloud-init and when to use each.` },
      { title: "App Service vs Functions vs Static Web Apps", prompt: `Deep comparison of Azure's PaaS compute options:\n\n| Feature | App Service | Functions | Static Web Apps |\n|---------|-------------|-----------|------------------|\n\nFill in the table for:\n- Pricing tiers and costs\n- Scaling (min/max instances)\n- Cold start behavior\n- Custom domains & SSL\n- Authentication options\n- CI/CD integration\n- Networking (VNet integration)\n- Runtime support\n\nThen 5 scenarios:\n1. E-commerce storefront\n2. Webhook processor\n3. Company blog\n4. REST API for mobile app\n5. Event-driven image processor\n\nRecommend the best option for each with justification.` }
    ]
  },
  {
    week: 6,
    phase: "Data Services I",
    title: "Storage, Key Vault & SQL Database Fundamentals",
    cert: "AZ-104 / AZ-204",
    color: "#7FBA00",
    gapBadges: ["SQL"],
    objectives: [
      "Create storage accounts with proper redundancy",
      "Manage blob lifecycle policies and access tiers",
      "Store and retrieve secrets from Key Vault",
      "Create and query Azure SQL Database",
      "Implement SAS tokens for secure access"
    ],
    services: ["Storage Account", "Blob", "Files", "Key Vault", "Azure SQL", "SAS Tokens"],
    infused: ["Azure SQL Database basics (create, connect, query)", "Database firewall rules & basic security"],
    topics: [
      "Storage accounts: Blob, File, Table, Queue",
      "Storage tiers: Hot, Cool, Cold, Archive",
      "Blob lifecycle management policies",
      "Managed vs unmanaged disks",
      "Azure Files & File Sync",
      "Azure Key Vault — secrets, keys, certificates",
      "SAS tokens, encryption, access policies",
      "Azure SQL Database — creating, connecting, querying",
      "SQL firewall rules & basic security"
    ],
    labs: [
      {
        name: "Lab 1: Storage Account & Blob Containers",
        duration: "25 min",
        difficulty: "Beginner",
        steps: [
          "Create storage account: stweek6demo, Standard, LRS (with proper tags)",
          "Create containers: 'documents' (private), 'images' (blob access)",
          "Upload files via Portal and CLI",
          "Generate SAS token with 1-hour expiry",
          "Access blob via SAS URL in browser"
        ],
        verify: "Private blob accessible via SAS URL. Public blob accessible directly."
      },
      {
        name: "Lab 2: Blob Lifecycle Management",
        duration: "20 min",
        difficulty: "Intermediate",
        steps: [
          "Navigate to Lifecycle Management → Add Rule",
          "Move to Cool after 30 days, Archive after 90, Delete after 365",
          "Review JSON policy structure",
          "Verify via CLI: az storage account management-policy show"
        ],
        verify: "Lifecycle policy is active and shows in CLI output."
      },
      {
        name: "Lab 3: Azure Key Vault",
        duration: "30 min",
        difficulty: "Intermediate",
        steps: [
          "Create Key Vault: kv-week6-demo",
          "Add secret: DatabasePassword = 'P@ssw0rd!2025-DEMO'",
          "Add access policy: Get + List for your user",
          "Retrieve via CLI: az keyvault secret show",
          "Create VM with managed identity → grant Key Vault access",
          "From VM, retrieve secret using managed identity + REST API"
        ],
        verify: "Secret retrievable via CLI. VM can access via managed identity."
      },
      {
        name: "Lab 4: Create Your First Azure SQL Database",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Create Azure SQL Server: sql-week6.database.windows.net",
          "Create database: db-products, DTU tier: Basic (5 DTUs)",
          "Configure server firewall: add your client IP",
          "Connect from VS Code with SQL Server extension",
          "Create tables: Products (id, name, price, category, stock_qty)",
          "Ask Claude to generate 30 INSERT statements → run them",
          "Run queries: SELECT with WHERE, GROUP BY, ORDER BY",
          "Store the SQL connection string in Key Vault"
        ],
        verify: "Database has 30 products. Connection string stored in Key Vault."
      }
    ],
    resources: [
      { type: "doc", name: "Azure Storage Docs", url: "https://learn.microsoft.com/en-us/azure/storage/" },
      { type: "doc", name: "Key Vault Docs", url: "https://learn.microsoft.com/en-us/azure/key-vault/" },
      { type: "doc", name: "Azure SQL Database Quickstart", url: "https://learn.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart" }
    ],
    project: null,
    prompts: [
      { title: "Storage Strategy Design", prompt: `Design a complete Azure Storage strategy for a healthcare company 'MediCare Solutions' with:\n- 10TB patient records (HIPAA compliant, 7-year retention)\n- 500GB medical images (accessed daily for 30 days, then rarely)\n- 50GB daily logs (keep 90 days)\n- Shared files for 100 employees\n\nProvide:\n1. Storage account design (how many, what types, redundancy)\n2. Container/share structure\n3. Access tier strategy with lifecycle policies\n4. Encryption and access control\n5. Cost estimate (monthly)\n6. Disaster recovery plan\n7. All az cli commands to implement\n\nEnsure HIPAA compliance throughout.` },
      { title: "Key Vault Patterns", prompt: `Teach me Azure Key Vault patterns for enterprise use:\n\n1. Secret management patterns:\n   - Storing database connection strings\n   - API keys rotation\n   - Certificate management for TLS\n\n2. Access patterns:\n   - App Service with managed identity\n   - Azure Functions accessing secrets\n   - VM using Key Vault for disk encryption\n   - CI/CD pipeline accessing secrets\n\n3. Security:\n   - RBAC vs access policies\n   - Soft delete and purge protection\n   - Private endpoints for Key Vault\n   - Monitoring and alerting\n\nFor each pattern, provide:\n- Architecture diagram (ASCII)\n- az cli commands\n- Code sample to retrieve secrets` },
      { title: "Generate SQL Test Data", prompt: `Generate realistic test data for an e-commerce database:\n\n1. Schema:\n   - Products (id, name, description, price, category_id, stock_qty, created_at)\n   - Categories (id, name, parent_id)\n   - Customers (id, email, name, created_at)\n   - Orders (id, customer_id, total, status, created_at)\n   - OrderItems (id, order_id, product_id, quantity, price)\n\n2. Data:\n   - 10 categories (with 3 having parent categories)\n   - 50 products across categories\n   - 30 customers\n   - 100 orders with varying statuses\n   - 250 order items\n\n3. Provide:\n   - CREATE TABLE statements\n   - All INSERT statements\n   - 10 useful analytical queries (top sellers, revenue by category, etc.)\n\nMake the data realistic with proper names and prices.` },
      { title: "Secure App to SQL Connection", prompt: `Walk me through the most secure way to connect an Azure App Service to Azure SQL Database:\n\n1. Managed Identity approach:\n   - Enable system-assigned identity on App Service\n   - Grant SQL access to the identity\n   - Connection string without password\n   - C#/Node.js code examples\n\n2. Key Vault approach:\n   - Store connection string in Key Vault\n   - App Service references Key Vault\n   - Connection string rotation strategy\n\n3. Private networking:\n   - VNet integration for App Service\n   - Private endpoint for SQL\n   - DNS configuration\n\n4. Additional security:\n   - SQL firewall rules\n   - TDE encryption\n   - Auditing\n   - Threat detection\n\nProvide complete az cli commands for the entire setup.` }
    ]
  },
  {
    week: 7,
    phase: "Data Services II",
    title: "Cosmos DB, PostgreSQL & Database Security",
    cert: "AZ-204 / AZ-305",
    color: "#E8A400",
    gapBadges: ["NOSQL"],
    objectives: [
      "Secure Azure SQL with TDE, auditing, and private endpoints",
      "Deploy PostgreSQL Flexible Server with VNet integration",
      "Create Cosmos DB with proper partitioning strategy",
      "Understand Cosmos DB consistency levels",
      "Choose the right database for different workloads"
    ],
    services: ["Cosmos DB", "PostgreSQL Flexible Server", "MySQL", "Private Endpoints", "Database Migration Service"],
    infused: [],
    topics: [
      "Azure SQL security deep dive: TDE, auditing, Entra ID auth",
      "Azure Database for PostgreSQL Flexible Server",
      "Azure Database for MySQL Flexible Server",
      "Azure Cosmos DB — multi-model, global distribution",
      "Cosmos DB consistency levels & partitioning",
      "Database Private Endpoints — secure data access",
      "Choosing the right database (decision tree)",
      "Azure Database Migration Service"
    ],
    labs: [
      {
        name: "Lab 1: Secure Azure SQL (from Week 6)",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Enable Transparent Data Encryption on db-products → verify on by default",
          "Enable Auditing → send logs to Storage Account",
          "Configure Entra ID authentication for the SQL server",
          "Disable public access → create Private Endpoint in snet-db",
          "Configure Private DNS Zone: privatelink.database.windows.net",
          "From VNet VM: nslookup → verify private IP resolution",
          "From local machine: verify access is DENIED"
        ],
        verify: "SQL only accessible via private endpoint. Auditing logs appear."
      },
      {
        name: "Lab 2: Deploy PostgreSQL Flexible Server",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Create PostgreSQL: pg-week7-demo, Burstable B1ms",
          "Configure VNet integration in snet-db",
          "Connect via psql from a VNet VM",
          "Create inventory_db with products, warehouses, stock_levels tables",
          "Insert dummy data: 5 warehouses, 100 products",
          "Run aggregation queries across tables",
          "Enable point-in-time restore and verify backup settings"
        ],
        verify: "PostgreSQL accessible from VNet only. Queries return expected data."
      },
      {
        name: "Lab 3: Cosmos DB Deep Dive",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Create Cosmos DB: cosmos-week7, API: NoSQL",
          "Create database: ecommerce, container: user_sessions, partition: /userId",
          "Insert 20 JSON session documents (ask Claude for data)",
          "Query with SQL syntax → check RU consumption per query",
          "Change consistency: Strong → Session → observe tradeoffs",
          "Add second region (West US) → test global distribution",
          "Create container with TTL (auto-delete after 24 hours)"
        ],
        verify: "Cosmos DB queries work. Multi-region replication visible."
      }
    ],
    resources: [
      { type: "doc", name: "Azure SQL Security", url: "https://learn.microsoft.com/en-us/azure/azure-sql/database/security-overview" },
      { type: "doc", name: "Cosmos DB Docs", url: "https://learn.microsoft.com/en-us/azure/cosmos-db/" },
      { type: "doc", name: "PostgreSQL Flexible Server", url: "https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/" }
    ],
    project: {
      name: "PROJECT 3: Multi-Database E-Commerce Backend",
      description: "Build a complete data layer: Azure SQL for transactions, Cosmos DB for user sessions, Blob Storage for product images — all secured with Private Endpoints and Key Vault.",
      dummyData: "Northwind Traders: 500 products, 12 categories, 1,000 customers, 5,000 orders, session data (cart, recently viewed). Product images in blob storage.",
      steps: [
        "Ask Claude to generate full SQL schema (products, customers, orders, order_items)",
        "Ask Claude for Cosmos DB document model for sessions",
        "Deploy Azure SQL + insert all dummy data (use Key Vault for connection string)",
        "Deploy Cosmos DB + insert session documents",
        "Deploy Blob Storage for product images with lifecycle policy",
        "Secure everything with Private Endpoints",
        "Build a Node.js API that reads from all 3 stores using managed identity",
        "Deploy API to App Service",
        "Document the data architecture with a flow diagram"
      ]
    },
    prompts: [
      { title: "Cosmos DB Consistency Levels", prompt: `Explain Cosmos DB's 5 consistency levels using real-world analogies:\n\n1. Strong\n2. Bounded Staleness  \n3. Session\n4. Consistent Prefix\n5. Eventual\n\nFor each:\n- Simple analogy (like a coffee shop or library)\n- Technical explanation\n- RU cost impact\n- Latency impact\n- When to use it\n- When NOT to use it\n\nScenario exercise: For each of these apps, recommend the best consistency level and explain why:\n- Banking transaction system\n- Social media news feed\n- Shopping cart\n- IoT sensor data\n- Gaming leaderboard` },
      { title: "Database Decision Matrix", prompt: `Create a comprehensive Azure database decision matrix:\n\n| Database | Azure SQL | PostgreSQL | MySQL | Cosmos DB | Table Storage |\n|----------|-----------|------------|-------|-----------|---------------|\n\nCompare on:\n- Data model\n- Query language\n- Scaling (vertical vs horizontal)\n- Global distribution\n- Pricing model\n- Max size\n- High availability options\n- Best for (3 use cases each)\n- Avoid when\n\nThen create a decision tree flowchart:\n'I need a database for X' → follow the questions → recommendation\n\nInclude 5 scenario-based questions to test my understanding.` },
      { title: "Generate Cosmos DB Documents", prompt: `Generate realistic Cosmos DB documents for an e-commerce user session system:\n\n1. Design the document schema for:\n   - User sessions (cart items, recently viewed, preferences)\n   - Product catalog (for fast reads)\n   - User activity events\n\n2. Generate:\n   - 20 user session documents\n   - 30 product documents\n   - 50 activity event documents\n\n3. Include:\n   - Partition key strategy explanation\n   - TTL settings for sessions\n   - Sample queries with RU estimates\n   - Index policy recommendations\n\nMake the data realistic with proper user IDs, timestamps, and product details.` },
      { title: "Database Migration Planning", prompt: `Help me plan a migration from on-premises SQL Server to Azure:\n\nCurrent state:\n- SQL Server 2019 with 500GB database\n- 100 stored procedures\n- 50 tables with foreign keys\n- Linked servers to 2 other databases\n- SSIS packages for ETL\n- Reporting Services reports\n\nCreate a detailed migration plan:\n1. Assessment phase (tools, compatibility check)\n2. Target architecture options (SQL MI vs Azure SQL DB vs SQL on VM)\n3. Migration method (online vs offline, DMS vs backup/restore)\n4. Schema migration steps\n5. Data migration with minimal downtime\n6. Stored procedure compatibility\n7. SSIS → Data Factory migration\n8. SSRS alternatives\n9. Testing and validation\n10. Cutover plan\n11. Rollback strategy\n\nInclude timeline estimates and risk mitigation.` }
    ]
  },
  {
    week: 8,
    phase: "Containers I",
    title: "Docker, ACR & Azure Container Instances",
    cert: "AZ-204",
    color: "#0078D4",
    gapBadges: ["DOCKER"],
    objectives: [
      "Write production-ready Dockerfiles",
      "Build and push images to Azure Container Registry",
      "Deploy containers to Azure Container Instances",
      "Configure multi-container groups with sidecars",
      "Understand container networking and volumes"
    ],
    services: ["Docker", "ACR", "ACI", "Container Groups"],
    infused: [],
    topics: [
      "Docker fundamentals: images, containers, Dockerfile",
      "Multi-stage Docker builds for production",
      "Azure Container Registry (ACR)",
      "Azure Container Instances (ACI) — serverless containers",
      "Multi-container groups in ACI",
      "Container networking & volumes"
    ],
    labs: [
      {
        name: "Lab 1: Build & Push Docker Image to ACR",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Create a Node.js express server returning 'Hello Azure!'",
          "Write Dockerfile: FROM node:18-alpine, COPY, RUN npm install, EXPOSE 3000, CMD",
          "Build: docker build -t myapp:v1 .",
          "Create ACR: az acr create --name acrweek8 --sku Basic",
          "Login, tag, push to ACR",
          "Verify: az acr repository list --name acrweek8"
        ],
        verify: "Image appears in ACR repository list."
      },
      {
        name: "Lab 2: Deploy to Azure Container Instances",
        duration: "25 min",
        difficulty: "Intermediate",
        steps: [
          "Enable ACR admin user",
          "Deploy ACI: az container create --name aci-myapp --image acrweek8.azurecr.io/myapp:v1 --ports 3000",
          "Browse to the public URL",
          "View logs: az container logs --name aci-myapp",
          "Clean up: az container delete --name aci-myapp --yes"
        ],
        verify: "App accessible via ACI public IP. Logs show requests."
      }
    ],
    resources: [
      { type: "doc", name: "Docker Getting Started", url: "https://docs.docker.com/get-started/" },
      { type: "doc", name: "ACR Docs", url: "https://learn.microsoft.com/en-us/azure/container-registry/" }
    ],
    project: {
      name: "PROJECT 4: Containerize & Deploy a Task API",
      description: "Containerize a REST API with Docker, push to ACR, deploy on ACI with Redis sidecar.",
      dummyData: "Task management API: id, title, description, status (todo/in-progress/done), created_at. Pre-seed with 20 tasks.",
      steps: [
        "Ask Claude to generate a REST API with in-memory data",
        "Write multi-stage Dockerfile",
        "Build and test locally",
        "Push to ACR and deploy to ACI",
        "Test all CRUD endpoints",
        "Add Redis as multi-container group",
        "Document the architecture"
      ]
    },
    prompts: [
      { title: "Dockerfile Best Practices", prompt: `Teach me Docker best practices for production Azure deployments:\n\n1. Multi-stage builds:\n   - Build stage vs runtime stage\n   - Reducing image size\n   - Example for Node.js, Python, .NET, Go\n\n2. Security:\n   - Non-root user\n   - Minimal base images (alpine, distroless)\n   - Scanning for vulnerabilities\n   - Secret handling (don't bake in!)\n\n3. Optimization:\n   - Layer caching strategy\n   - .dockerignore\n   - Health checks\n   - Proper signal handling\n\n4. Write optimized Dockerfiles for:\n   - Node.js Express API\n   - Python FastAPI\n   - .NET 8 Web API\n\nExplain every line and why it matters.` },
      { title: "ACR Tasks & Automation", prompt: `Explain Azure Container Registry advanced features:\n\n1. ACR Tasks:\n   - Quick tasks (build on push)\n   - Multi-step tasks\n   - Scheduled tasks\n   - Triggered builds from GitHub\n\n2. Security:\n   - Content trust (image signing)\n   - Vulnerability scanning\n   - Private endpoints\n   - Managed identity authentication\n\n3. Geo-replication:\n   - When to use Premium SKU\n   - Replication setup\n   - Pull from nearest region\n\n4. Create a complete CI/CD pipeline:\n   - GitHub push triggers ACR build\n   - Scan for vulnerabilities\n   - Push to ACR\n   - Deploy to ACI/AKS\n\nProvide az cli commands and sample acr-task.yaml.` },
      { title: "ACI vs AKS vs Container Apps", prompt: `Compare Azure container hosting options:\n\n| Feature | ACI | AKS | Container Apps |\n|---------|-----|-----|----------------|\n\nCompare on:\n- Use case (when to use)\n- Pricing model\n- Scaling (manual vs auto)\n- Networking options\n- Startup time\n- Management overhead\n- Persistent storage\n- Sidecar support\n- Service mesh\n\nDecision scenarios:\n1. Run a batch job for 10 minutes daily\n2. Microservices app with 20 services\n3. Simple API with auto-scaling\n4. Dev/test environment spin-up\n5. Event-driven container processing\n\nRecommend the best option for each.` },
      { title: "Multi-Container ACI Patterns", prompt: `Teach me multi-container patterns in Azure Container Instances:\n\n1. Sidecar pattern:\n   - Logging sidecar (Fluentd)\n   - Monitoring sidecar (Prometheus exporter)\n   - Proxy sidecar (Envoy)\n\n2. Ambassador pattern:\n   - API gateway container\n\n3. Adapter pattern:\n   - Legacy app with modern API wrapper\n\nFor each pattern:\n- Architecture diagram\n- YAML deployment file\n- Networking between containers\n- Shared volume configuration\n- Real-world use case\n\nCreate a complete example: Node.js API + Redis cache + Nginx reverse proxy in one container group.` }
    ]
  },
  {
    week: 9,
    phase: "Containers II",
    title: "AKS, Kubernetes & API Management",
    cert: "AZ-204 / AZ-400",
    color: "#326CE5",
    gapBadges: ["KUBERNETES"],
    objectives: [
      "Create and manage AKS clusters",
      "Deploy applications with kubectl and YAML manifests",
      "Configure services, ingress, and HPA",
      "Set up Azure API Management as gateway",
      "Implement APIM policies (rate limiting, caching)"
    ],
    services: ["AKS", "Kubernetes", "kubectl", "Helm", "APIM", "Ingress"],
    infused: ["API Management basics (gateway, policies)", "Exposing AKS services via APIM"],
    topics: [
      "Kubernetes architecture: nodes, pods, services, deployments",
      "AKS cluster creation & configuration",
      "kubectl commands & YAML manifests",
      "Services: ClusterIP, NodePort, LoadBalancer",
      "ConfigMaps, Secrets, Persistent Volumes",
      "Ingress controllers",
      "Azure API Management — gateway in front of your APIs",
      "APIM policies: rate limiting, caching, JWT validation"
    ],
    labs: [
      {
        name: "Lab 1: Create & Access AKS Cluster",
        duration: "30 min",
        difficulty: "Intermediate",
        steps: [
          "az aks create --name aks-week9 --node-count 2 --node-vm-size Standard_B2s --generate-ssh-keys",
          "az aks get-credentials --name aks-week9",
          "kubectl get nodes → verify 2 ready nodes",
          "kubectl create deployment nginx --image=nginx --replicas=3",
          "kubectl expose deployment nginx --type=LoadBalancer --port=80",
          "Browse to external IP",
          "kubectl scale deployment nginx --replicas=5"
        ],
        verify: "3 nginx pods running. LoadBalancer has external IP serving traffic."
      },
      {
        name: "Lab 2: Deploy Multi-Container App with YAML",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Ask Claude for K8s YAML: frontend (nginx), backend (Node API), redis",
          "kubectl apply -f app-manifest.yaml",
          "Verify: kubectl get pods, kubectl get svc",
          "View logs: kubectl logs <pod-name>",
          "Exec into pod: kubectl exec -it <pod> -- /bin/sh",
          "Delete: kubectl delete -f app-manifest.yaml"
        ],
        verify: "All pods running. Services communicate correctly."
      },
      {
        name: "Lab 3: API Management for Your AKS APIs",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Deploy a simple API to AKS (the task API from Week 8)",
          "Create APIM instance: apim-week9 (Developer tier)",
          "Import the AKS API endpoint into APIM",
          "Add policies: rate limiting (10 calls/min), response caching (60s)",
          "Create a product and subscription key",
          "Test via APIM developer portal with subscription key",
          "Compare: direct API access vs APIM-mediated access"
        ],
        verify: "API accessible via APIM. Rate limiting works."
      }
    ],
    resources: [
      { type: "doc", name: "AKS Documentation", url: "https://learn.microsoft.com/en-us/azure/aks/" },
      { type: "doc", name: "Kubernetes Basics", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
      { type: "doc", name: "API Management Docs", url: "https://learn.microsoft.com/en-us/azure/api-management/" }
    ],
    project: {
      name: "PROJECT 5: Voting App on AKS with API Management",
      description: "Deploy a voting app to AKS with autoscaling, expose it through API Management with policies.",
      dummyData: "Cats vs Dogs voting app. Flask frontend, Redis backend. Pre-seeded: 150 cat, 120 dog votes.",
      steps: [
        "Build container images and push to ACR",
        "Create 3-node AKS cluster",
        "Write K8s YAML with Deployments and Services",
        "Deploy and verify: kubectl get all",
        "Set up HPA for frontend",
        "Load test and watch pods scale",
        "Expose the voting API through APIM with rate limiting",
        "Add JWT validation policy for authenticated voting"
      ]
    },
    prompts: [
      { title: "Kubernetes YAML Generator", prompt: `Generate production-ready Kubernetes YAML for a voting app:\n\nComponents:\n- Frontend: nginx serving React app\n- Backend API: Node.js Express\n- Redis: for vote storage\n\nRequirements:\n1. Deployments with:\n   - Resource limits and requests\n   - Liveness and readiness probes\n   - Pod disruption budgets\n   - Anti-affinity rules\n\n2. Services:\n   - Frontend: LoadBalancer\n   - Backend: ClusterIP\n   - Redis: ClusterIP\n\n3. ConfigMaps for environment variables\n4. Secrets for Redis password\n5. HorizontalPodAutoscaler for frontend\n6. NetworkPolicy to restrict traffic\n\nExplain every field in the YAML.` },
      { title: "AKS Networking Deep Dive", prompt: `Explain AKS networking comprehensively:\n\n1. Network plugins:\n   - kubenet vs Azure CNI\n   - When to use each\n   - IP address planning\n\n2. Service types:\n   - ClusterIP, NodePort, LoadBalancer\n   - Internal vs external load balancers\n\n3. Ingress:\n   - NGINX Ingress Controller\n   - Application Gateway Ingress Controller (AGIC)\n   - Path-based routing\n   - TLS termination\n\n4. Network Policies:\n   - Calico vs Azure NPM\n   - Example policies for 3-tier app\n\n5. DNS:\n   - CoreDNS configuration\n   - External DNS integration\n\nDesign the network architecture for a microservices app with 5 services, some internal-only, some external.` },
      { title: "APIM Policy Deep Dive", prompt: `Teach me Azure API Management policies in depth:\n\n1. Inbound policies:\n   - Rate limiting (by key, by IP)\n   - JWT validation\n   - Header transformation\n   - Request body validation\n   - IP filtering\n\n2. Backend policies:\n   - Load balancing\n   - Circuit breaker\n   - Retry logic\n\n3. Outbound policies:\n   - Response caching\n   - Header manipulation\n   - Response transformation\n\n4. Error handling:\n   - Custom error responses\n   - Logging to Event Hub\n\nFor each, provide:\n- XML policy snippet\n- Explanation\n- Real-world use case\n\nCreate a complete policy set for a production API with auth, rate limiting, caching, and logging.` },
      { title: "AKS vs App Service vs Container Apps", prompt: `I'm confused about when to use AKS vs Azure App Service vs Azure Container Apps. Create a detailed comparison:\n\n1. Management overhead (1-10 scale)\n2. Scaling capabilities\n3. Networking flexibility\n4. CI/CD integration\n5. Cost at different scales (10, 100, 1000 containers)\n6. Team skills required\n7. Migration effort from Docker Compose\n\nScenarios:\n- Startup MVP (3 services, 2 developers)\n- Enterprise microservices (50 services, 20 developers)\n- Batch processing system\n- Event-driven serverless\n- Legacy app modernization\n\nFor each scenario, recommend the best option with detailed justification.` }
    ]
  },
  {
    week: 10,
    phase: "DevOps I",
    title: "Azure DevOps & CI/CD Pipelines",
    cert: "AZ-400",
    color: "#F25022",
    gapBadges: ["GIT", "YAML"],
    objectives: [
      "Set up Azure DevOps organization and projects",
      "Create YAML-based CI/CD pipelines",
      "Configure build triggers and deployment stages",
      "Implement approval gates and environments",
      "Use service connections securely"
    ],
    services: ["Azure DevOps", "Pipelines", "Repos", "Boards", "Artifacts", "Service Connections"],
    infused: [],
    topics: [
      "Azure DevOps organization, projects, repos",
      "Azure Boards — work items, sprints, tracking",
      "Azure Repos — Git workflow",
      "Azure Pipelines — YAML-based CI/CD",
      "Build triggers, stages, jobs, steps",
      "Release pipelines & deployment gates"
    ],
    labs: [
      {
        name: "Lab 1: Set Up Azure DevOps & First Pipeline",
        duration: "30 min",
        difficulty: "Beginner",
        steps: [
          "Create account at dev.azure.com and project: 'AzureLearning'",
          "Initialize Git repo with sample Node.js app",
          "Create azure-pipelines.yml: trigger on main, steps: npm install, test, build",
          "Commit → watch pipeline run automatically",
          "Check logs for each step"
        ],
        verify: "Pipeline runs on commit. All steps pass."
      },
      {
        name: "Lab 2: CI/CD to Azure App Service",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Create App Service: app-devops-demo",
          "Create service connection to your Azure subscription",
          "Add deployment stage with AzureWebApp@1 task",
          "Commit code change → watch auto-build and deploy",
          "Add staging environment with manual approval gate",
          "Test: commit → build → deploy staging → approve → deploy prod"
        ],
        verify: "Deployment to staging requires approval. Prod deploys after approval."
      }
    ],
    resources: [
      { type: "doc", name: "Azure DevOps Docs", url: "https://learn.microsoft.com/en-us/azure/devops/" },
      { type: "doc", name: "YAML Pipeline Reference", url: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema" }
    ],
    project: {
      name: "PROJECT 6: Full CI/CD Pipeline",
      description: "Full CI/CD pipeline: build, test, scan, deploy a web app to App Service with quality gates.",
      dummyData: "Movie catalog: 50 movies (title, genre, rating, thumbnail_url, description). React frontend, Express API.",
      steps: [
        "Scaffold project with Claude (React + Express)",
        "Set up Azure DevOps with Boards, Repos, Pipelines",
        "YAML pipeline: Build → Test → Deploy staging → Approve → Prod",
        "Add branch policies: PR reviews, build validation"
      ]
    },
    prompts: [
      { title: "Azure Pipelines YAML Mastery", prompt: `Teach me Azure Pipelines YAML from basic to advanced:\n\n1. Structure:\n   - trigger, pool, stages, jobs, steps\n   - Variables and variable groups\n   - Parameters for reusable pipelines\n   - Templates (step, job, stage templates)\n\n2. Common tasks:\n   - Build (npm, dotnet, maven)\n   - Test with code coverage\n   - Docker build and push\n   - Deploy to App Service, AKS, Functions\n\n3. Advanced patterns:\n   - Matrix builds (multiple Node versions)\n   - Conditional execution\n   - Dependencies between stages\n   - Manual approvals and gates\n   - Environments and deployment strategies (blue-green, canary)\n\nGenerate a complete pipeline for a Node.js app deploying to AKS with staging and production environments.` },
      { title: "Service Connection Security", prompt: `Explain Azure DevOps service connections and security best practices:\n\n1. Connection types:\n   - Azure Resource Manager (what scopes?)\n   - Docker Registry\n   - Kubernetes\n   - SSH\n   - Generic (for APIs)\n\n2. Authentication options:\n   - Service Principal (automatic vs manual)\n   - Managed Identity\n   - Workload Identity Federation (passwordless!)\n\n3. Security best practices:\n   - Principle of least privilege\n   - Scoping to resource groups\n   - Connection sharing across projects\n   - Audit and rotation\n\n4. Troubleshooting:\n   - Common errors and fixes\n   - Testing connections\n\nSet up a secure service connection for deploying to AKS using Workload Identity Federation.` },
      { title: "Branching Strategy Design", prompt: `Design a Git branching strategy for a 10-developer team:\n\nContext:\n- 2-week sprints\n- Production releases every sprint\n- Hotfix capability needed\n- Feature flags available\n\nCompare:\n1. GitFlow\n2. GitHub Flow\n3. Trunk-based development\n\nFor each:\n- Branch diagram\n- When to use\n- Pros and cons\n\nThen recommend the best strategy for this team with:\n- Branch naming conventions\n- Branch policies (reviewers, builds)\n- PR template\n- Merge strategy (squash vs merge vs rebase)\n- Azure DevOps branch policy configuration` },
      { title: "Pipeline Templates & Reuse", prompt: `Teach me Azure Pipelines templates for enterprise-scale:\n\n1. Template types:\n   - Step templates\n   - Job templates\n   - Stage templates\n   - Variable templates\n\n2. Template repository pattern:\n   - Central templates repo\n   - Versioning templates\n   - Consuming from other projects\n\n3. Create a template library:\n   - build-node.yml (any Node.js app)\n   - build-dotnet.yml (any .NET app)\n   - deploy-appservice.yml (any App Service)\n   - deploy-aks.yml (any AKS deployment)\n   - security-scan.yml (SAST/DAST)\n\n4. Show how to use them:\n   - Simple project using templates\n   - Overriding parameters\n   - Extending templates\n\nProvide complete YAML for all templates.` }
    ]
  },
  {
    week: 11,
    phase: "DevOps II",
    title: "IaC: Bicep, Terraform & GitHub Actions",
    cert: "AZ-400",
    color: "#FF7139",
    gapBadges: ["TERRAFORM", "BICEP"],
    objectives: [
      "Write Bicep templates for Azure resources",
      "Use Terraform for infrastructure provisioning",
      "Create GitHub Actions workflows for CI/CD",
      "Manage Terraform state in Azure Storage",
      "Compare IaC tools and choose the right one"
    ],
    services: ["ARM Templates", "Bicep", "Terraform", "GitHub Actions", "GitOps"],
    infused: [],
    topics: [
      "ARM Templates — structure, parameters, variables",
      "Bicep — Azure's native IaC DSL (deep dive)",
      "Terraform basics for Azure",
      "GitHub Actions for CI/CD",
      "Azure Pipelines vs GitHub Actions comparison",
      "GitOps concepts & Flux in AKS"
    ],
    labs: [
      {
        name: "Lab 1: Deploy with Bicep",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "az bicep install",
          "Create main.bicep: VNet + Subnet + NSG + VM",
          "Preview: az deployment group what-if --template-file main.bicep",
          "Deploy: az deployment group create --template-file main.bicep",
          "Modify to add second VM → re-deploy (incremental)",
          "Decompile ARM to Bicep: az bicep decompile"
        ],
        verify: "Resources deployed. What-if shows accurate preview."
      },
      {
        name: "Lab 2: Terraform for Azure",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Install Terraform CLI",
          "Create main.tf: provider, resource group, VNet, subnet, VM",
          "terraform init → plan → apply",
          "Inspect: terraform state list",
          "Modify VM size → plan (see diff) → apply",
          "terraform destroy"
        ],
        verify: "Terraform creates and destroys resources cleanly."
      },
      {
        name: "Lab 3: GitHub Actions CI/CD",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Create GitHub repo with web app",
          "Create .github/workflows/deploy.yml",
          "Define trigger on push, jobs: build, test, deploy to Azure",
          "Set GitHub secrets: AZURE_CREDENTIALS",
          "Push → watch Action run",
          "Add Terraform step for infrastructure provisioning"
        ],
        verify: "Push triggers workflow. App deploys to Azure."
      }
    ],
    resources: [
      { type: "doc", name: "Bicep Documentation", url: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/" },
      { type: "doc", name: "Terraform Azure Provider", url: "https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs" }
    ],
    project: {
      name: "PROJECT 7: Automate Infrastructure with Terraform + Pipelines",
      description: "Terraform-defined infrastructure deployed via Azure Pipelines on every commit.",
      dummyData: "Northwind Traders: dev + prod envs with VNet, AKS, SQL, Key Vault, App Gateway.",
      steps: [
        "Design infrastructure with Claude",
        "Write Terraform modules: networking, compute, database, security",
        "Create tfvars for dev and prod",
        "Pipeline: init → plan → approve → apply",
        "Store state in Azure Blob Storage",
        "Test: PR changes a resource → auto-apply on merge"
      ]
    },
    prompts: [
      { title: "Bicep Module Library", prompt: `Create a production-ready Bicep module library:\n\n1. Module: networking.bicep\n   - VNet with configurable subnets\n   - NSGs with common rules\n   - Bastion host (optional)\n\n2. Module: compute.bicep\n   - VM with managed identity\n   - VMSS with autoscaling\n\n3. Module: database.bicep\n   - Azure SQL with private endpoint\n   - Key Vault for connection strings\n\n4. Module: monitoring.bicep\n   - Log Analytics workspace\n   - Application Insights\n   - Alert rules\n\nFor each module:\n- Parameters with descriptions and defaults\n- Outputs for chaining\n- Validation and conditions\n- Usage example\n\nThen show a main.bicep that uses all modules to deploy a complete environment.` },
      { title: "Terraform vs Bicep Decision", prompt: `Compare Terraform vs Bicep for Azure infrastructure:\n\n| Aspect | Terraform | Bicep |\n|--------|-----------|-------|\n\nCompare on:\n- Learning curve\n- Multi-cloud support\n- State management\n- Module ecosystem\n- IDE support\n- Azure feature coverage (day-0 support)\n- Community and documentation\n- Enterprise features\n- Cost\n\nDecision framework:\n1. Azure-only shop, 5 engineers\n2. Multi-cloud (Azure + AWS)\n3. Existing Terraform codebase\n4. New Azure project, quick start needed\n5. Strict compliance requirements\n\nRecommend the best IaC tool for each with justification.` },
      { title: "GitHub Actions for Azure", prompt: `Create a complete GitHub Actions workflow for Azure deployment:\n\nProject: Node.js API deploying to Azure App Service\n\nWorkflow requirements:\n1. Trigger on push to main and PR\n2. Jobs:\n   - lint (ESLint)\n   - test (Jest with coverage)\n   - security-scan (npm audit, Snyk)\n   - build (Docker image)\n   - deploy-staging (on PR merge)\n   - deploy-production (manual approval)\n\n3. Features:\n   - Caching node_modules\n   - Artifact upload/download\n   - Environment secrets\n   - Reusable workflows\n   - Status checks for PRs\n   - Slack notification on failure\n\nProvide complete YAML with explanations for every section.` },
      { title: "Terraform State Management", prompt: `Teach me Terraform state management for teams:\n\n1. State basics:\n   - What's in the state file\n   - Why it's critical\n   - Local vs remote state\n\n2. Azure backend:\n   - Storage account setup\n   - Container and blob configuration\n   - Access control (SAS vs Managed Identity)\n   - State locking\n\n3. State operations:\n   - terraform state list/show/mv/rm\n   - Importing existing resources\n   - State migration\n\n4. Team workflows:\n   - Workspaces for environments\n   - State file per environment vs workspace\n   - CI/CD pipeline with state\n   - Handling state conflicts\n\n5. Disaster recovery:\n   - State backup\n   - Recovering from corrupted state\n   - State versioning\n\nProvide az cli commands and Terraform configuration for a secure team setup.` }
    ]
  },
  {
    week: 12,
    phase: "Monitoring & Cost",
    title: "Monitoring, Observability & Cost Management Deep Dive",
    cert: "AZ-104 / AZ-305",
    color: "#FFB900",
    gapBadges: ["KQL"],
    objectives: [
      "Configure Azure Monitor and Log Analytics",
      "Write KQL queries for logs and metrics",
      "Set up Application Insights for web apps",
      "Create alerts and action groups",
      "Analyze costs and implement FinOps practices"
    ],
    services: ["Azure Monitor", "Log Analytics", "Application Insights", "Alerts", "Cost Management", "Advisor"],
    infused: ["Cost Management deep dive", "Azure Advisor recommendations", "FinOps principles"],
    topics: [
      "Azure Monitor overview & metrics",
      "Log Analytics workspaces & KQL queries",
      "Application Insights for web apps",
      "Azure Alerts & Action Groups",
      "Network Watcher — troubleshoot, packet capture",
      "Cost Management deep dive — analysis, budgets, exports",
      "Azure Advisor — cost, performance, security recommendations",
      "FinOps principles — right-sizing, reserved instances, spot VMs"
    ],
    labs: [
      {
        name: "Lab 1: Log Analytics & VM Monitoring",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Create Log Analytics Workspace: law-week12",
          "Deploy VM → enable Azure Monitor Agent",
          "Configure data collection: Syslog + Performance counters",
          "Wait 15 min → run KQL for CPU utilization and error logs",
          "Create alert: CPU > 80% for 5 minutes"
        ],
        verify: "KQL returns VM metrics. Alert fires when CPU is high."
      },
      {
        name: "Lab 2: Application Insights",
        duration: "30 min",
        difficulty: "Intermediate",
        steps: [
          "Create App Insights → connect to a web app",
          "Generate traffic including /error endpoints",
          "Explore Live Metrics, Performance, Failures panels",
          "Custom KQL: requests | where duration > 2000",
          "Set up availability test from 5 regions"
        ],
        verify: "App Insights shows requests, errors, and performance data."
      },
      {
        name: "Lab 3: Network Watcher",
        duration: "25 min",
        difficulty: "Intermediate",
        steps: [
          "Enable Network Watcher",
          "Connection Troubleshoot: test VM-to-VM connectivity",
          "IP Flow Verify: check NSG allows port 443",
          "Capture 60 seconds of packets",
          "Review NSG flow logs and visualize topology"
        ],
        verify: "Network issues diagnosed. Packet capture successful."
      },
      {
        name: "Lab 4: Cost Management & FinOps",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Navigate to Cost Management → Cost Analysis",
          "View costs by: resource group, service, location, tag (CostCenter)",
          "Identify your top 3 cost drivers over the past weeks",
          "Create a budget: $100/month with alerts at 50%, 80%, 100%",
          "Go to Azure Advisor → Cost tab → review all recommendations",
          "Identify underutilized VMs and right-sizing opportunities",
          "Export cost data to CSV → analyze trends"
        ],
        verify: "Budget active. Advisor recommendations reviewed."
      }
    ],
    resources: [
      { type: "doc", name: "Azure Monitor Docs", url: "https://learn.microsoft.com/en-us/azure/azure-monitor/" },
      { type: "doc", name: "KQL Reference", url: "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/" },
      { type: "doc", name: "Cost Management Docs", url: "https://learn.microsoft.com/en-us/azure/cost-management-billing/" }
    ],
    project: null,
    prompts: [
      { title: "KQL Query Library", prompt: `Create a KQL query library for production monitoring:\n\n1. Infrastructure queries:\n   - Top 10 VMs by CPU usage (last 24h)\n   - Memory utilization trend by VM\n   - Disk space warnings (<20% free)\n   - Network traffic anomalies\n\n2. Application queries:\n   - Slowest requests (P95 latency)\n   - Error rate by endpoint\n   - Dependency failures (database, APIs)\n   - User session analysis\n\n3. Security queries:\n   - Failed login attempts\n   - Unusual access patterns\n   - Resource modifications by user\n\n4. Cost queries:\n   - Daily spend trend\n   - Spend by resource group\n   - Unused resources\n\nFor each query:\n- Complete KQL syntax\n- Explanation of operators\n- How to create an alert from it\n- Dashboard visualization suggestion` },
      { title: "Alerting Strategy Design", prompt: `Design a complete alerting strategy for a 3-tier production app:\n\nComponents:\n- 2 Web App Services\n- 1 Azure SQL Database\n- 1 Redis Cache\n- 1 Storage Account\n\nCreate alerts for:\n1. Availability (is it up?)\n2. Performance (is it fast?)\n3. Errors (is it working?)\n4. Saturation (is it full?)\n\nFor each alert:\n- Metric or log query\n- Threshold and evaluation period\n- Severity level\n- Action group (email, SMS, webhook)\n- Runbook or auto-remediation\n\nAlso design:\n- Alert noise reduction strategy\n- On-call rotation integration\n- Incident management workflow\n- Post-incident review process` },
      { title: "FinOps Cost Optimization", prompt: `Create a FinOps cheat sheet for Azure cost optimization:\n\n1. Quick wins (implement today):\n   - Right-size VMs (identify and fix)\n   - Delete unused resources\n   - Use auto-shutdown for dev/test\n   - Storage tier optimization\n\n2. Medium-term (this month):\n   - Reserved Instances analysis\n   - Spot VMs for batch workloads\n   - Hybrid Benefit activation\n   - Dev/Test subscription pricing\n\n3. Long-term (this quarter):\n   - Architecture optimization\n   - Serverless migration candidates\n   - Multi-region cost review\n   - Tagging and showback\n\n4. Governance:\n   - Budget alerts by team\n   - Policy to prevent expensive SKUs\n   - Regular cost review cadence\n\nFor each, provide:\n- Potential savings %\n- Implementation steps\n- az cli commands where applicable` },
      { title: "Monitoring Dashboard Design", prompt: `Design Azure Monitor dashboards for different audiences:\n\n1. Executive Dashboard:\n   - Overall health (green/yellow/red)\n   - Cost vs budget\n   - SLA compliance %\n   - Key business metrics\n\n2. Operations Dashboard:\n   - Infrastructure health (VMs, DBs, networks)\n   - Active alerts by severity\n   - Recent deployments\n   - Performance trends\n\n3. Developer Dashboard:\n   - Application performance\n   - Error rates and details\n   - Dependency health\n   - Deployment success rate\n\n4. Security Dashboard:\n   - Failed authentications\n   - Threat detections\n   - Compliance score\n   - Recent security events\n\nFor each dashboard:\n- Specific tiles/widgets\n- Data sources\n- Refresh frequency\n- KQL queries for custom visuals\n\nProvide ARM/Bicep to deploy the dashboards.` }
    ]
  },
  {
    week: 13,
    phase: "Security",
    title: "Zero Trust, Firewall, Private Endpoints & Defender",
    cert: "AZ-500",
    color: "#D83B01",
    gapBadges: ["SECURITY"],
    objectives: [
      "Implement Zero Trust architecture in Azure",
      "Deploy and configure Azure Firewall",
      "Secure PaaS services with Private Endpoints",
      "Create Conditional Access policies",
      "Achieve 80%+ Defender for Cloud Secure Score"
    ],
    services: ["Azure Firewall", "Private Endpoints", "DDoS Protection", "Conditional Access", "Defender for Cloud"],
    infused: [],
    topics: [
      "Zero Trust Architecture — 6 pillars in Azure",
      "Network security: Azure Firewall, DDoS Protection",
      "Service Endpoints vs Private Endpoints (deep dive)",
      "Conditional Access policies (advanced)",
      "Multi-Factor Authentication (MFA)",
      "Microsoft Defender for Cloud — secure score",
      "Secure DevOps — shifting security left"
    ],
    labs: [
      {
        name: "Lab 1: Azure Firewall with DDoS Protection",
        duration: "40 min",
        difficulty: "Advanced",
        steps: [
          "Create hub VNet with AzureFirewallSubnet",
          "Deploy Azure Firewall → route table forcing spoke traffic through FW",
          "Add app rule: allow *.microsoft.com",
          "Add network rule: allow DNS (UDP 53)",
          "Test: curl microsoft.com (allowed), google.com (denied)",
          "Enable DDoS Protection plan"
        ],
        verify: "Traffic filtered by firewall rules. DDoS protection active."
      },
      {
        name: "Lab 2: Private Endpoints for PaaS",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Create storage account with public access disabled",
          "Create Private Endpoint + Private DNS Zone",
          "From VM: nslookup → verify private IP resolution",
          "Upload from VM (success) vs local machine (denied)",
          "Compare behavior: Private Endpoint vs Service Endpoint"
        ],
        verify: "Storage only accessible via private endpoint."
      },
      {
        name: "Lab 3: Zero Trust Web App",
        duration: "45 min",
        difficulty: "Advanced",
        steps: [
          "Deploy App Service with Private Endpoint (no public access)",
          "Enable Entra ID authentication",
          "Create Conditional Access: require MFA + compliant device",
          "Database behind Private Endpoint",
          "Key Vault with managed identity only",
          "Verify: every layer requires identity + private networking",
          "Document Zero Trust implementation per pillar"
        ],
        verify: "Complete Zero Trust implementation verified."
      },
      {
        name: "Lab 4: Defender for Cloud",
        duration: "30 min",
        difficulty: "Intermediate",
        steps: [
          "Enable Defender for Cloud on your subscription",
          "Review current Secure Score and recommendations",
          "Implement top 5 recommendations",
          "Enable Defender for Servers on your VMs",
          "Review vulnerability assessment results"
        ],
        verify: "Secure Score improved. Recommendations addressed."
      }
    ],
    resources: [
      { type: "doc", name: "Azure Security Docs", url: "https://learn.microsoft.com/en-us/azure/security/" },
      { type: "doc", name: "Zero Trust Model", url: "https://learn.microsoft.com/en-us/security/zero-trust/" },
      { type: "doc", name: "Defender for Cloud", url: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/" }
    ],
    project: {
      name: "PROJECT 8: Secure Corporate Environment (Zero Trust)",
      description: "Implement enterprise-grade Zero Trust: Conditional Access, Private Endpoints for all PaaS, Azure Firewall, and Defender for Cloud.",
      dummyData: "Woodgrove Bank — 200 employees, 3 offices. SOC 2 compliant. US regions only. No public PaaS endpoints. MFA for all admins.",
      steps: [
        "Design Zero Trust architecture with Claude",
        "Conditional Access: MFA for admin roles",
        "Azure Firewall in hub VNet with spoke routing",
        "Convert all PaaS to Private Endpoints",
        "Enable Defender for Cloud → achieve 80%+ Secure Score",
        "Create Azure Policies for security enforcement",
        "Run vulnerability assessment and remediate",
        "Document security architecture"
      ]
    },
    prompts: [
      { title: "Zero Trust Architecture", prompt: `Explain Azure Zero Trust architecture mapped to the 6 pillars:\n\n1. Identity:\n   - Entra ID configuration\n   - Conditional Access\n   - PIM\n\n2. Devices:\n   - Intune/Endpoint Manager\n   - Compliance policies\n\n3. Applications:\n   - App registration\n   - OAuth/OIDC\n\n4. Data:\n   - Classification\n   - Encryption\n   - DLP\n\n5. Infrastructure:\n   - Network segmentation\n   - Private endpoints\n\n6. Network:\n   - Azure Firewall\n   - NSGs\n   - Microsegmentation\n\nFor each pillar:\n- Azure services involved\n- Configuration recommendations\n- Common misconfigurations\n- How to validate\n\nDesign a Zero Trust implementation for a healthcare company processing PHI.` },
      { title: "Conditional Access Matrix", prompt: `Create a Conditional Access policy matrix for enterprise security:\n\n| Policy Name | Users | Apps | Conditions | Grant Controls |\n|-------------|-------|------|------------|----------------|\n\nCreate policies for:\n1. Require MFA for admins (always)\n2. Require MFA for all users (risky sign-in)\n3. Block legacy authentication\n4. Require compliant device for sensitive apps\n5. Block access from high-risk countries\n6. Require app protection for mobile\n7. Session controls for guest access\n8. Require MFA for Azure management\n\nFor each policy:\n- Complete configuration\n- Named locations needed\n- Exclusions and why\n- Testing approach\n- Monitoring\n\nProvide PowerShell/Graph API to deploy all policies.` },
      { title: "Private Endpoint Architecture", prompt: `Design a complete Private Endpoint architecture:\n\nServices to secure:\n- Azure SQL Database\n- Storage Account (blob + files)\n- Key Vault\n- Azure Container Registry\n- Azure Cosmos DB\n- App Service\n\nFor the architecture:\n1. Private DNS zone strategy:\n   - Zone names for each service\n   - VNet links\n   - On-premises DNS forwarding\n\n2. Network design:\n   - Dedicated subnet for private endpoints\n   - NSG rules (are they needed?)\n   - UDR considerations\n\n3. Diagrams:\n   - DNS resolution flow\n   - Network traffic flow\n   - Hybrid connectivity scenario\n\n4. Implementation:\n   - az cli commands for each service\n   - Terraform module\n\n5. Troubleshooting:\n   - Common issues\n   - Diagnostic commands` },
      { title: "Security Policy Generator", prompt: `Generate Azure Policies for security enforcement:\n\n1. Network security:\n   - Deny public IP on VMs\n   - Require NSG on subnets\n   - Deny storage public access\n\n2. Encryption:\n   - Require storage encryption\n   - Require SQL TDE\n   - Require Key Vault soft-delete\n\n3. Identity:\n   - Require managed identity on VMs\n   - Audit resources without tags\n\n4. Monitoring:\n   - Require diagnostic settings\n   - Require Azure Defender\n\n5. Compliance:\n   - Allowed locations\n   - Allowed VM SKUs\n   - Require HTTPS on storage\n\nFor each policy:\n- Complete JSON definition\n- Initiative grouping\n- Remediation task\n- Exemption scenarios\n\nBundle into a 'Security Baseline' initiative.` }
    ]
  },
  {
    week: 14,
    phase: "Governance & SIEM",
    title: "Sentinel SIEM, Advanced Policy & Governance at Scale",
    cert: "AZ-500 / AZ-305",
    color: "#008575",
    gapBadges: ["SIEM"],
    objectives: [
      "Deploy Microsoft Sentinel and connect data sources",
      "Create analytics rules and incident playbooks",
      "Write custom Azure Policy definitions",
      "Design Azure Blueprints for repeatable environments",
      "Manage hybrid resources with Azure Arc"
    ],
    services: ["Microsoft Sentinel", "Azure Policy", "Blueprints", "Management Groups", "Azure Arc"],
    infused: ["Microsoft Sentinel deep dive", "Advanced custom policies", "Azure Blueprints"],
    topics: [
      "Microsoft Sentinel — SIEM & SOAR setup",
      "Sentinel analytics rules, incidents & playbooks",
      "Azure Policy advanced — custom definitions & initiatives",
      "Azure Blueprints for repeatable environments",
      "Management Groups at scale",
      "Azure Arc — hybrid & multi-cloud management",
      "Compliance frameworks in Azure"
    ],
    labs: [
      {
        name: "Lab 1: Microsoft Sentinel SIEM",
        duration: "45 min",
        difficulty: "Advanced",
        steps: [
          "Enable Sentinel on Log Analytics Workspace",
          "Connect data sources: Activity Logs, Entra ID sign-ins",
          "Enable analytics rule: 'Brute force against Portal'",
          "Create custom rule: 5+ failed logins in 10 min",
          "Simulate failed logins → watch incident appear",
          "Create Playbook (Logic App) for alert notification",
          "Explore Sentinel workbooks for visualization"
        ],
        verify: "Incidents generated from analytics rules. Playbook triggers."
      },
      {
        name: "Lab 2: Advanced Azure Policy",
        duration: "35 min",
        difficulty: "Advanced",
        steps: [
          "Create custom policy: 'Deny public IP on VMs'",
          "Write policy rule JSON (ask Claude to generate)",
          "Create custom policy: 'Require specific tag values'",
          "Bundle policies into a Policy Initiative (set)",
          "Assign initiative at Management Group level",
          "Review compliance dashboard → remediate non-compliant resources"
        ],
        verify: "Custom policies working. Initiative assigned at scale."
      },
      {
        name: "Lab 3: Azure Blueprints",
        duration: "30 min",
        difficulty: "Intermediate",
        steps: [
          "Create Blueprint: bp-secure-landing-zone",
          "Add artifacts: Resource Group, VNet, NSG, Key Vault, Storage",
          "Add policy assignment: 'Require encryption at rest'",
          "Add RBAC: Contributor to specific group",
          "Publish v1.0 → assign to subscription",
          "Verify all resources created with correct policies and RBAC"
        ],
        verify: "Blueprint deploys complete environment with policies."
      },
      {
        name: "Lab 4: Azure Arc",
        duration: "25 min",
        difficulty: "Intermediate",
        steps: [
          "Install Arc agent on a local VM or WSL instance",
          "Register as Arc-enabled server",
          "View in Portal → verify properties",
          "Apply Azure Policy to the Arc server",
          "Apply tags and explore management capabilities"
        ],
        verify: "Arc server visible in Azure Portal with policies applied."
      }
    ],
    resources: [
      { type: "doc", name: "Sentinel Docs", url: "https://learn.microsoft.com/en-us/azure/sentinel/" },
      { type: "doc", name: "Azure Policy Docs", url: "https://learn.microsoft.com/en-us/azure/governance/policy/" },
      { type: "doc", name: "Azure Arc Docs", url: "https://learn.microsoft.com/en-us/azure/azure-arc/" }
    ],
    project: {
      name: "PROJECT 9: Enterprise Governance & SIEM Framework",
      description: "Design and implement a complete governance framework with Sentinel SIEM, custom policies, Blueprints, and Arc for a multi-team enterprise.",
      dummyData: "Fabrikam Inc — 500 people, 4 business units (Eng, Marketing, Sales, Finance). Each has dev/staging/prod. Currently no policies, no SIEM, no tagging enforcement.",
      steps: [
        "Design Management Group hierarchy with Claude",
        "Create custom policies: deny public IPs, require encryption, allowed VM sizes, require tags",
        "Bundle into Policy Initiative",
        "Create Blueprints for each environment type (dev, staging, prod)",
        "Deploy Sentinel: connect data sources, enable analytics rules",
        "Create 3 Sentinel playbooks for automated incident response",
        "Set up Azure Arc for 2 on-prem servers",
        "Document the complete governance + security framework"
      ]
    },
    prompts: [
      { title: "Sentinel Deployment Guide", prompt: `Design a Microsoft Sentinel deployment for a 500-person company:\n\n1. Data connectors to enable:\n   - Azure Activity Logs\n   - Entra ID (sign-ins, audit)\n   - Microsoft 365\n   - Azure Defender alerts\n   - Syslog from Linux servers\n   - Windows Security Events\n\n2. Analytics rules (20 essential rules):\n   - Identity threats (brute force, impossible travel)\n   - Data exfiltration\n   - Malware indicators\n   - Privilege escalation\n   - Suspicious Azure operations\n\n3. Playbooks (5 automated responses):\n   - Block user on multiple failed logins\n   - Notify SOC on high-severity alert\n   - Isolate compromised VM\n   - Revoke session tokens\n   - Create ServiceNow ticket\n\n4. Workbooks for dashboards\n\n5. Cost estimation\n\nProvide KQL for custom rules and Logic App definitions for playbooks.` },
      { title: "Management Group Hierarchy", prompt: `Design a Management Group hierarchy for a large enterprise:\n\nCompany: GlobalTech Industries\n- 3 subsidiaries (different countries)\n- 4 environments per subsidiary (sandbox, dev, staging, prod)\n- Shared services (identity, networking, security)\n- Compliance requirements: GDPR (EU), SOX (US)\n\nCreate:\n1. Complete hierarchy diagram\n2. Policy assignments at each level:\n   - Root: tagging, allowed regions\n   - Subsidiary: country-specific compliance\n   - Environment: cost controls, security\n3. RBAC assignments strategy\n4. Subscription naming convention\n5. Budget alerts structure\n\nProvide az cli commands to create the entire hierarchy and assign policies.` },
      { title: "Custom Policy Generator", prompt: `Generate advanced Azure Policy definitions:\n\n1. Deny VM sizes larger than Standard_D4s_v3:\n   - Full policy JSON\n   - Parameter for allowed sizes\n   - Exclusion for specific resource groups\n\n2. Require specific tag values (Environment must be dev/staging/prod):\n   - Validate against allowed values\n   - Case-insensitive matching\n\n3. Deploy diagnostic settings automatically:\n   - DeployIfNotExists effect\n   - Log Analytics workspace parameter\n   - Apply to all supported resources\n\n4. Deny storage accounts without private endpoints:\n   - Check for existing private endpoints\n   - Allow exemptions via tag\n\n5. Audit VMs without backup configured:\n   - Check Recovery Services vault\n   - Report non-compliant\n\nFor each: complete JSON, test scenarios, and exemption strategy.` },
      { title: "Azure Arc Use Cases", prompt: `Explain Azure Arc and its use cases in depth:\n\n1. Arc-enabled servers:\n   - What it does\n   - Installation methods\n   - Supported OS\n   - Features enabled (Policy, Update Mgmt, Defender)\n   - Security considerations\n\n2. Arc-enabled Kubernetes:\n   - Connecting on-prem/other cloud K8s\n   - GitOps with Flux\n   - Azure Policy for Kubernetes\n\n3. Arc-enabled data services:\n   - SQL Managed Instance anywhere\n   - PostgreSQL Hyperscale\n\n4. Real scenarios:\n   - Hybrid cloud management\n   - Edge computing\n   - Multi-cloud governance\n   - Regulatory compliance\n\nFor a company with:\n- 50 on-prem Windows/Linux servers\n- 2 Kubernetes clusters (VMware)\n- 20 servers in AWS\n\nDesign the Arc implementation with all commands.` }
    ]
  },
  {
    week: 15,
    phase: "Architecture",
    title: "Solutions Architecture, DR & Migration (AZ-305)",
    cert: "AZ-305",
    color: "#0078D4",
    gapBadges: ["ARCHITECTURE"],
    objectives: [
      "Apply the Well-Architected Framework 5 pillars",
      "Design high availability and disaster recovery",
      "Set up Azure Site Recovery for DR",
      "Plan migrations using Azure Migrate",
      "Create architecture diagrams and cost estimates"
    ],
    services: ["Well-Architected Framework", "Site Recovery", "Azure Migrate", "Traffic Manager", "Front Door"],
    infused: [],
    topics: [
      "Well-Architected Framework (5 pillars)",
      "Design for high availability & disaster recovery",
      "Design for cost optimization",
      "Design identity, governance & monitoring solutions",
      "Design data storage solutions",
      "Design infrastructure solutions",
      "Migration strategies (rehost, refactor, rearchitect)",
      "Azure Migrate & Site Recovery"
    ],
    labs: [
      {
        name: "Lab 1: Design a Complete Architecture",
        duration: "60 min",
        difficulty: "Advanced",
        steps: [
          "Scenario: E-commerce for 100K daily users, global presence",
          "Design with Claude: compute, networking, data, security, DR",
          "Create architecture diagram using draw.io or Mermaid",
          "Calculate costs with Azure Pricing Calculator",
          "Document SLA targets, RPO/RTO, scaling strategy, security controls",
          "Present the design as a CTO pitch"
        ],
        verify: "Complete architecture document with diagrams and cost estimates."
      },
      {
        name: "Lab 2: Disaster Recovery with Site Recovery",
        duration: "45 min",
        difficulty: "Advanced",
        steps: [
          "Deploy VM in East US with a web application",
          "Set up Azure Site Recovery to replicate to West US",
          "Configure recovery plan with pre/post scripts",
          "Run test failover → verify app works in West US",
          "Clean up test failover resources",
          "Document RPO and RTO achieved"
        ],
        verify: "Test failover successful. App runs in DR region."
      }
    ],
    resources: [
      { type: "doc", name: "Well-Architected Framework", url: "https://learn.microsoft.com/en-us/azure/well-architected/" },
      { type: "doc", name: "AZ-305 Learning Path", url: "https://learn.microsoft.com/en-us/training/paths/design-identity-governance-monitor-solutions/" }
    ],
    project: {
      name: "PROJECT 10: On-Premises to Azure Migration",
      description: "Plan and execute a simulated migration using Azure Migrate and Site Recovery.",
      dummyData: "Legacy Corp: 3 Windows Servers (AD, File, SQL), 2 Linux web servers, 10.10.0.0/16 network. Budget: $5K/month.",
      steps: [
        "Create migration assessment with Claude",
        "Map each server to Azure equivalents",
        "Design target architecture (hub-spoke)",
        "Set up Azure Migrate project",
        "Simulate: deploy VMs → replicate via ASR",
        "Execute cutover: DNS, verify applications",
        "Optimize: right-size VMs, enable autoscaling",
        "Create migration report with cost comparison"
      ]
    },
    prompts: [
      { title: "Global SaaS Architecture", prompt: `Design a globally distributed SaaS architecture for 1M users across 5 regions:\n\nRequirements:\n- 99.99% availability SLA\n- <100ms latency for all users\n- Multi-tenant with data isolation\n- GDPR compliance for EU users\n- Cost-optimized\n\nDesign:\n1. Compute layer (app tier)\n   - Regional vs global deployment\n   - Container orchestration\n   - Auto-scaling strategy\n\n2. Data layer\n   - Database per tenant vs shared\n   - Global distribution\n   - Replication strategy\n\n3. Networking\n   - Traffic Manager vs Front Door\n   - CDN strategy\n   - DDoS protection\n\n4. Identity\n   - Multi-tenant Entra ID\n   - B2C for customers\n\n5. Monitoring & DR\n   - Regional monitoring\n   - Failover strategy\n\nProvide architecture diagram and monthly cost estimate.` },
      { title: "Well-Architected Review", prompt: `Conduct a Well-Architected Framework review for this architecture:\n\nCurrent state:\n- 2 VMs running web app (no load balancer)\n- 1 Azure SQL Database (Basic tier)\n- Storage account (LRS)\n- No backup configured\n- Secrets in app config files\n- No monitoring\n\nReview against all 5 pillars:\n1. Reliability\n2. Security\n3. Cost Optimization\n4. Operational Excellence\n5. Performance Efficiency\n\nFor each pillar:\n- Current score (1-5)\n- Findings (what's wrong)\n- Recommendations (prioritized)\n- Implementation effort\n- Expected improvement\n\nCreate an action plan with quick wins and long-term improvements.` },
      { title: "DR Strategy Design", prompt: `Design disaster recovery strategies for different RPO/RTO requirements:\n\n| Tier | RPO | RTO | Example Workload |\n|------|-----|-----|------------------|\n| Tier 1 | 0 | <15 min | Core banking |\n| Tier 2 | 1 hr | <1 hr | E-commerce |\n| Tier 3 | 4 hr | <4 hr | Internal apps |\n| Tier 4 | 24 hr | <24 hr | Dev/test |\n\nFor each tier, design:\n1. Azure services to use\n2. Replication method\n3. Failover process (automated vs manual)\n4. Failback procedure\n5. Testing frequency\n6. Monthly cost estimate\n\nThen create a DR runbook for Tier 2 e-commerce site with:\n- Pre-failover checklist\n- Failover steps\n- Validation tests\n- Communication plan\n- Failback procedure` },
      { title: "Migration Assessment", prompt: `Create a migration assessment for this on-premises environment:\n\nCurrent infrastructure:\n- 5 Windows Server 2016 VMs (AD, File, SQL, App, Web)\n- 3 Linux VMs (Apache, MySQL, Redis)\n- VMware vSphere 6.7\n- 10TB total storage\n- 192.168.0.0/16 network\n- Site-to-site VPN to branch office\n\nAssess and recommend:\n1. Discovery phase:\n   - Azure Migrate setup\n   - Dependency mapping\n   - Performance data collection\n\n2. For each server:\n   - Azure equivalent (VM, PaaS, or retire)\n   - Sizing recommendation\n   - Migration method (rehost, refactor, rearchitect)\n   - Dependencies and migration order\n\n3. Network design:\n   - Azure VNet design\n   - Hybrid connectivity\n   - DNS migration\n\n4. Timeline:\n   - Phases and milestones\n   - Risk mitigation\n\n5. Cost comparison:\n   - On-prem vs Azure (3-year TCO)\n   - Optimization opportunities` }
    ]
  },
  {
    week: 16,
    phase: "Serverless Advanced",
    title: "Functions Deep Dive, Logic Apps, Event Grid & Service Bus",
    cert: "AZ-204",
    color: "#5C2D91",
    gapBadges: ["SERVERLESS", "EVENT-DRIVEN"],
    objectives: [
      "Create Functions with multiple trigger types",
      "Build stateful workflows with Durable Functions",
      "Use Service Bus for reliable messaging",
      "React to events with Event Grid",
      "Automate workflows with Logic Apps"
    ],
    services: ["Azure Functions", "Durable Functions", "Logic Apps", "Event Grid", "Service Bus", "CDN"],
    infused: [],
    topics: [
      "Azure Functions — Timer, Blob, Queue, Event Grid triggers",
      "Durable Functions for stateful workflows",
      "Azure Service Bus — queues & topics (pub/sub)",
      "Azure Event Grid — event-driven architecture",
      "Azure Logic Apps — workflow automation without code",
      "Azure CDN — content delivery & caching",
      "OpenID Connect & MSAL authentication in apps",
      "Static Web Apps with API backends"
    ],
    labs: [
      {
        name: "Lab 1: Azure Functions — All Trigger Types",
        duration: "40 min",
        difficulty: "Intermediate",
        steps: [
          "Revisit func-week5 from Week 5 (or create new)",
          "Add Timer trigger: cleanup job every 5 minutes",
          "Add Blob trigger: fires when file uploaded to 'uploads' container",
          "Add Queue trigger: processes messages from a Storage Queue",
          "Add Event Grid trigger: responds to resource events",
          "Monitor all triggers via Application Insights"
        ],
        verify: "All trigger types working and visible in App Insights."
      },
      {
        name: "Lab 2: Service Bus & Event Grid",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Create Service Bus: queue 'orders', topic 'notifications' with 2 subscriptions",
          "Write sender app: 10 messages to queue",
          "Write receiver app: process messages",
          "Create Event Grid topic → subscribe Azure Function",
          "Send custom event → watch Function fire",
          "Verify dead-letter queue for failed messages"
        ],
        verify: "Messages flow through queues/topics. Event Grid triggers functions."
      },
      {
        name: "Lab 3: Logic Apps Workflow Automation",
        duration: "30 min",
        difficulty: "Intermediate",
        steps: [
          "Workflow 1: Blob upload → conditional email (if size > 5MB → manager, else → team)",
          "Workflow 2: HTTP trigger → query Azure SQL → return formatted response",
          "Workflow 3: Daily recurrence → call Cost Management API → email cost report",
          "Test all workflows and review run history"
        ],
        verify: "All workflows trigger correctly. Emails sent."
      },
      {
        name: "Lab 4: Static Web App with Full API Backend",
        duration: "35 min",
        difficulty: "Intermediate",
        steps: [
          "Build on the Static Web App from Week 5",
          "Add API folder with multiple Azure Functions endpoints",
          "Add Entra ID authentication to the Static Web App",
          "Configure environment variables and app settings",
          "Deploy and test the full-stack serverless application"
        ],
        verify: "Static Web App with working authenticated API."
      }
    ],
    resources: [
      { type: "doc", name: "Azure Functions Docs", url: "https://learn.microsoft.com/en-us/azure/azure-functions/" },
      { type: "doc", name: "Logic Apps Docs", url: "https://learn.microsoft.com/en-us/azure/logic-apps/" },
      { type: "doc", name: "Service Bus Docs", url: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/" },
      { type: "doc", name: "Event Grid Docs", url: "https://learn.microsoft.com/en-us/azure/event-grid/" }
    ],
    project: {
      name: "PROJECT 11: Event-Driven Serverless Order System",
      description: "Full event-driven app: Static Web App frontend, Functions API, Service Bus for async processing, Logic Apps for notifications.",
      dummyData: "Alpine Coffee Roasters: orders flow through validation → payment → fulfillment → notification. 30 products, 200 customers, 500 historical orders.",
      steps: [
        "Ask Claude for React frontend (order form + status page)",
        "Build Functions: CreateOrder, ProcessPayment, FulfillOrder, GetStatus",
        "Service Bus queue for async order processing",
        "Event Grid: 'OrderCompleted' → triggers Logic App",
        "Logic App: sends email + updates blob",
        "Deploy as Static Web App",
        "CDN for static assets",
        "Monitor with Application Insights",
        "Document the event-driven architecture"
      ]
    },
    prompts: [
      { title: "Event-Driven Architecture Design", prompt: `Design an event-driven architecture for an order processing system:\n\nFlow:\n1. Customer places order (REST API)\n2. Order validation\n3. Payment processing\n4. Inventory check\n5. Fulfillment\n6. Notification (email + SMS)\n\nUsing:\n- Azure Functions for compute\n- Event Grid for events\n- Service Bus for reliable messaging\n- Cosmos DB for state\n- Logic Apps for notifications\n\nDesign:\n1. Event schema for each event type\n2. Service Bus topology (queues vs topics)\n3. Dead-letter handling\n4. Retry policies\n5. Saga pattern for transactions\n6. Monitoring and tracing\n\nProvide architecture diagram and sample code for each function.` },
      { title: "Durable Functions Patterns", prompt: `Teach me Durable Functions patterns with implementations:\n\n1. Function Chaining:\n   - Sequential processing\n   - Error handling in chain\n\n2. Fan-out/Fan-in:\n   - Parallel processing\n   - Aggregating results\n\n3. Async HTTP APIs:\n   - Long-running operations\n   - Status polling endpoint\n\n4. Monitor Pattern:\n   - Polling external service\n   - Timeout and retry\n\n5. Human Interaction:\n   - Approval workflows\n   - Timeout handling\n\n6. Aggregator (Stateful Entities):\n   - Counter entity\n   - Shopping cart\n\nFor each pattern:\n- When to use it\n- Complete C# or JavaScript code\n- Orchestrator + Activity functions\n- Testing approach\n- Cost considerations` },
      { title: "Logic App Workflow Library", prompt: `Create a Logic App workflow library for common enterprise scenarios:\n\n1. Approval Workflow:\n   - HTTP trigger with approval request\n   - Send approval email\n   - Wait for response (timeout 24h)\n   - Process approved/rejected\n\n2. File Processing:\n   - Blob trigger\n   - Parse CSV/JSON\n   - Transform data\n   - Insert to SQL\n   - Error handling\n\n3. Integration:\n   - Salesforce to Azure SQL sync\n   - ServiceNow ticket creation\n   - Teams notification\n\n4. Scheduled Reports:\n   - Query multiple data sources\n   - Generate PDF\n   - Email with attachment\n\nFor each:\n- Complete workflow JSON\n- Connector configuration\n- Error handling\n- Monitoring setup` },
      { title: "Messaging Comparison", prompt: `Compare Azure messaging services in depth:\n\n| Feature | Storage Queue | Service Bus Queue | Service Bus Topic | Event Grid | Event Hub |\n|---------|--------------|-------------------|-------------------|------------|------------|\n\nCompare on:\n- Message size limit\n- Ordering guarantees\n- Delivery guarantees\n- Dead-letter support\n- Sessions/FIFO\n- Throughput\n- Pricing model\n- Best use case\n\nDecision scenarios:\n1. Task queue for background jobs\n2. Order processing with strict ordering\n3. Pub/sub for multiple subscribers\n4. React to Azure resource events\n5. High-volume IoT telemetry\n6. Log aggregation\n\nRecommend the best service for each with justification.` }
    ]
  },
  {
    week: 17,
    phase: "Capstone",
    title: "Capstone Project, Cert Prep & Career Readiness",
    cert: "ALL CERTS",
    color: "#107C10",
    gapBadges: [],
    objectives: [
      "Build a complete enterprise Azure environment",
      "Pass certification practice exams",
      "Create a portfolio on GitHub",
      "Prepare for technical interviews",
      "Document your capstone project"
    ],
    services: ["Everything from Weeks 1-16"],
    infused: [],
    topics: [
      "Certification exam strategies & study tips",
      "AZ-900, AZ-104, AZ-204, AZ-305, AZ-400, AZ-500 review",
      "Resume building for Azure roles",
      "Interview preparation — scenario-based questions",
      "Building your Azure portfolio on GitHub",
      "Capstone project combining ALL 17 weeks"
    ],
    labs: [
      {
        name: "Lab 1: Certification Practice Exams",
        duration: "90 min",
        difficulty: "Mixed",
        steps: [
          "Ask Claude for 20 AZ-900 practice questions → take quiz",
          "Ask Claude for 20 AZ-104 questions → take quiz",
          "15 scenario-based AZ-305 questions",
          "15 AZ-500 security scenario questions",
          "Review wrong answers → study specific topics",
          "Time yourself: 2 min per question max",
          "Identify 3 weakest areas → focused study plan"
        ],
        verify: "Identified weak areas with study plan created."
      },
      {
        name: "Lab 2: Build Your Azure Portfolio",
        duration: "120 min",
        difficulty: "Advanced",
        steps: [
          "Compile all 11 projects on GitHub with READMEs",
          "Add screenshots and architecture diagrams to each",
          "Write a blog post about your favorite project (use Claude)",
          "Update LinkedIn with certifications and project descriptions",
          "Ask Claude to review your resume for Azure roles"
        ],
        verify: "GitHub portfolio complete. LinkedIn updated."
      }
    ],
    resources: [
      { type: "doc", name: "Microsoft Certification Dashboard", url: "https://learn.microsoft.com/en-us/certifications/" },
      { type: "doc", name: "Azure Architecture Browse", url: "https://learn.microsoft.com/en-us/azure/architecture/browse/" }
    ],
    project: {
      name: "CAPSTONE: Full Enterprise Azure Deployment",
      description: "Build a complete enterprise-grade Azure environment from scratch using EVERY skill from all 17 weeks. This is your portfolio crown jewel.",
      dummyData: "GlobalTech Solutions — SaaS project management tool. 500 employees, 10K customers year 1. SOC 2, multi-region, CI/CD, monitoring, DR.",
      steps: [
        "Design complete architecture with Claude (all layers)",
        "Terraform: hub-spoke network, AKS, SQL, Cosmos DB, Key Vault, Firewall",
        "Entra ID: RBAC, Conditional Access, MFA (Week 2 skills)",
        "Governance: Management Groups, Policies, tags, budgets (Weeks 1-2, 14)",
        "Databases: SQL + Cosmos DB with Private Endpoints (Weeks 6-7)",
        "Containerize app → ACR → AKS with APIM (Weeks 8-9)",
        "Full CI/CD: Azure DevOps pipeline (Weeks 10-11)",
        "Serverless: Functions for background jobs, Logic Apps for notifications (Weeks 5, 16)",
        "Security: Private Endpoints, Firewall, Defender 90%+ Score (Week 13)",
        "Sentinel: analytics rules and incident playbooks (Week 14)",
        "Monitoring: Log Analytics, App Insights, alerts (Week 12)",
        "Cost Management: budgets, Advisor optimization (Weeks 1, 12)",
        "DR: Site Recovery to secondary region (Week 15)",
        "Well-Architected Framework review with Claude",
        "Comprehensive documentation and architecture diagrams",
        "Present as portfolio piece"
      ]
    },
    prompts: [
      { title: "Certification Quiz (50 Questions)", prompt: `Quiz me on 50 mixed questions across all Azure certifications:\n\n- 10 AZ-900 (fundamentals)\n- 10 AZ-104 (admin)\n- 10 AZ-204 (developer)\n- 10 AZ-305 (architect)\n- 5 AZ-400 (DevOps)\n- 5 AZ-500 (security)\n\nFor each question:\n1. State the question with 4 options\n2. Wait for my answer\n3. Tell me if correct/incorrect\n4. Explain the right answer\n5. Link to relevant documentation\n\nTrack my score and identify weak areas at the end.` },
      { title: "Resume Review", prompt: `Review my resume for Azure Cloud Engineer positions:\n\n[I'll paste my resume]\n\nAnalyze:\n1. Technical skills section:\n   - Are Azure skills prominent?\n   - Missing certifications to add?\n   - Skills to emphasize/remove?\n\n2. Experience bullets:\n   - Are they achievement-focused with metrics?\n   - Do they use Azure terminology correctly?\n   - Suggestions for stronger wording?\n\n3. Projects section:\n   - Are portfolio projects listed?\n   - Do they demonstrate hands-on Azure skills?\n\n4. Format and ATS optimization:\n   - Keywords for Azure roles\n   - Length and formatting\n\nProvide a rewritten version optimized for Azure positions.` },
      { title: "Interview Preparation", prompt: `Prepare me for Azure Cloud Engineer interviews with 20 scenario-based questions:\n\nFormat for each:\n1. Interviewer asks the question\n2. I provide my answer\n3. You critique and provide the ideal answer\n\nCategories:\n- Architecture design (5 questions)\n- Troubleshooting (5 questions)\n- Security scenarios (3 questions)\n- Cost optimization (3 questions)\n- DevOps and CI/CD (4 questions)\n\nMake them realistic senior-level questions that test both knowledge and problem-solving ability.\n\nAlso include:\n- 5 behavioral questions specific to cloud roles\n- Questions I should ask the interviewer\n- Red flags to watch for` },
      { title: "Capstone Architecture Review", prompt: `Review my capstone project architecture for completeness:\n\n[I'll describe my architecture]\n\nCheck against all 17 weeks:\n\n☐ Week 1: Tagging, budgets, cost awareness\n☐ Week 2: Entra ID, RBAC, policies\n☐ Week 3: VNets, subnets, NSGs, Bastion\n☐ Week 4: Load balancing, peering\n☐ Week 5: Compute (VMs/App Service/Functions)\n☐ Week 6: Storage, Key Vault, SQL\n☐ Week 7: Cosmos DB, PostgreSQL, Private Endpoints\n☐ Week 8: Docker, ACR, ACI\n☐ Week 9: AKS, APIM\n☐ Week 10: Azure DevOps CI/CD\n☐ Week 11: IaC (Bicep/Terraform)\n☐ Week 12: Monitoring, cost management\n☐ Week 13: Security, Zero Trust, Defender\n☐ Week 14: Sentinel, governance at scale\n☐ Week 15: DR, Well-Architected review\n☐ Week 16: Serverless, event-driven\n\nFor any gaps, suggest how to incorporate them.\nRate the architecture 1-10 and provide improvement suggestions.` }
    ]
  }
];

export const CERT_COLORS = {
  "AZ-900": "#0078D4",
  "AZ-104": "#5C2D91",
  "AZ-204": "#00A4EF",
  "AZ-305": "#F25022",
  "AZ-400": "#FF7139",
  "AZ-500": "#D83B01",
  "ALL CERTS": "#107C10"
};
