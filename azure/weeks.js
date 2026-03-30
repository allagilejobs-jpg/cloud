export const WEEKS = [
  {
    week: 1,
    phase: "Foundation",
    title: "Cloud Foundations, Azure Setup & Cost Awareness",
    cert: "AZ-900",
    color: "#0078D4",
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
        steps: [
          "Navigate to azure.microsoft.com/free and sign up",
          "Verify identity with phone number and credit card (no charge)",
          "Explore the Azure Portal dashboard — pin key services",
          "Open Azure Cloud Shell (Bash) and run: az account show",
          "Navigate to Cost Management → set a $10 monthly budget with email alerts at 50%, 80%, 100%"
        ]
      },
      {
        name: "Lab 2: Install Azure CLI & VS Code",
        steps: [
          "Download VS Code from code.visualstudio.com",
          "Install Azure CLI from Microsoft docs",
          "Open terminal → run: az login → authenticate via browser",
          "Run: az group list -o table → verify empty list",
          "Install VS Code extensions: Azure Account, Azure Resources, Azure CLI Tools"
        ]
      },
      {
        name: "Lab 3: Create Resource Groups with Proper Tagging",
        steps: [
          "In Portal: Create rg-learning-portal in East US",
          "Add tags: Environment=Learning, Owner=YourName, CostCenter=Training, Week=1",
          "In CLI: az group create --name rg-learning-cli --location eastus --tags Environment=Learning Owner=YourName CostCenter=Training",
          "Run: az group list -o table → confirm both exist",
          "View tags: az tag list → understand the tagging structure",
          "Navigate to Cost Management → Cost Analysis → group by Tag:CostCenter",
          "Clean up: az group delete --name rg-learning-cli --yes --no-wait"
        ]
      }
    ],
    resources: [
      { type: "doc", name: "Microsoft Learn: Azure Fundamentals (AZ-900 Path)", url: "https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/" },
      { type: "doc", name: "Azure Architecture Center", url: "https://learn.microsoft.com/en-us/azure/architecture/" },
      { type: "doc", name: "Azure Tagging Best Practices", url: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/naming-and-tagging" },
      { type: "video", name: "FreeCodeCamp AZ-900 Full Course (YouTube)", url: "https://www.youtube.com/watch?v=NKEFWyqJ5XA" }
    ],
    project: null,
    askClaude: [
      "Explain the shared responsibility model in Azure with a diagram",
      "Design a tagging strategy for a 50-person startup — what tags should they enforce?",
      "Quiz me on 10 AZ-900 practice questions about cloud concepts"
    ]
  },
  {
    week: 2,
    phase: "Identity & Governance",
    title: "Entra ID, RBAC & Azure Policy Fundamentals",
    cert: "AZ-104 / AZ-500",
    color: "#5C2D91",
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
        steps: [
          "Go to Portal → Microsoft Entra ID → Users → New User",
          "Create user: alice@yourtenant.onmicrosoft.com ('Cloud Admin')",
          "Create user: bob@yourtenant.onmicrosoft.com ('Developer')",
          "Create Security Group: 'Azure-Admins' → add Alice",
          "Create Security Group: 'Developers' → add Bob",
          "Sign in as Alice in private browser → change temp password"
        ]
      },
      {
        name: "Lab 2: Configure RBAC",
        steps: [
          "Create resource group: rg-rbac-lab in East US (with proper tags)",
          "Assign 'Reader' role to Bob on rg-rbac-lab",
          "Sign in as Bob → verify read-only access",
          "Change Bob to 'Contributor' → verify create access",
          "Assign 'Reader' to 'Developers' group at subscription level",
          "Clean up all assignments"
        ]
      },
      {
        name: "Lab 3: Implement Your First Azure Policies",
        steps: [
          "Navigate to Azure Policy → Definitions → browse built-in policies",
          "Assign policy: 'Allowed locations' → restrict to East US and West US",
          "Test: try creating a resource in Europe → verify DENIED",
          "Assign policy: 'Require a tag and its value' → enforce CostCenter tag",
          "Test: create resource without CostCenter tag → verify DENIED",
          "Create resource WITH CostCenter tag → verify ALLOWED",
          "View Policy Compliance dashboard → understand compliance state"
        ]
      },
      {
        name: "Lab 4: Create a Service Principal",
        steps: [
          "Run: az ad sp create-for-rbac --name sp-week2-demo --role Contributor --scopes /subscriptions/<sub-id>",
          "Save appId, password, tenant from JSON output",
          "Login as SP: az login --service-principal -u <appId> -p <password> --tenant <tenant>",
          "Verify access: az group list -o table",
          "Delete SP: az ad sp delete --id <appId>"
        ]
      }
    ],
    resources: [
      { type: "doc", name: "Microsoft Learn: Manage identities in Entra ID", url: "https://learn.microsoft.com/en-us/training/modules/manage-users-and-groups-in-aad/" },
      { type: "doc", name: "RBAC Documentation", url: "https://learn.microsoft.com/en-us/azure/role-based-access-control/overview" },
      { type: "doc", name: "Azure Policy Overview", url: "https://learn.microsoft.com/en-us/azure/governance/policy/overview" }
    ],
    project: null,
    askClaude: [
      "Create a dummy org chart for 'Contoso Corp' with 5 departments and recommend RBAC roles for each",
      "Explain Entra ID roles vs Azure RBAC roles with real examples",
      "Write 3 Azure Policy definitions I should assign on Day 1 of any new subscription"
    ]
  },
  {
    week: 3,
    phase: "Networking I",
    title: "Virtual Networks, Subnets, NSGs & DNS",
    cert: "AZ-104",
    color: "#0078D4",
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
        steps: [
          "Create VNet: vnet-main, 10.0.0.0/16, East US (tag: Environment=Learning)",
          "Add Subnet: snet-web (10.0.1.0/24) — web tier",
          "Add Subnet: snet-app (10.0.2.0/24) — application tier",
          "Add Subnet: snet-db (10.0.3.0/24) — database tier",
          "Verify: az network vnet subnet list --vnet-name vnet-main -g rg-network -o table"
        ]
      },
      {
        name: "Lab 2: Configure NSG Rules",
        steps: [
          "Create nsg-web → associate with snet-web",
          "Add inbound: Allow HTTP (80) from Internet, Priority 100",
          "Add inbound: Allow HTTPS (443) from Internet, Priority 110",
          "Add inbound: Deny ALL other, Priority 4000",
          "Create nsg-db → associate with snet-db",
          "Add rule: Allow SQL (1433) ONLY from 10.0.2.0/24 (app subnet)",
          "Deploy VMs and test connectivity between subnets"
        ]
      },
      {
        name: "Lab 3: Deploy Azure Bastion",
        steps: [
          "Add AzureBastionSubnet (10.0.4.0/26) to vnet-main",
          "Deploy Bastion and associate with vnet-main",
          "Deploy a VM in snet-web WITHOUT a public IP",
          "Connect via Bastion (Portal → VM → Connect → Bastion)",
          "Verify secure access without exposing public IP"
        ]
      }
    ],
    resources: [
      { type: "doc", name: "Azure Networking Fundamentals", url: "https://learn.microsoft.com/en-us/training/modules/azure-networking-fundamentals/" },
      { type: "doc", name: "NSG Documentation", url: "https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview" }
    ],
    project: null,
    askClaude: [
      "Generate a CIDR subnetting exercise: plan subnets for a 4-department company using 10.0.0.0/16",
      "Explain NSG rule evaluation order and how priority numbers work",
      "Draw an ASCII network diagram for a 3-tier architecture with NSGs"
    ]
  },
  {
    week: 4,
    phase: "Networking II",
    title: "Load Balancing, VPN Gateway & Peering",
    cert: "AZ-104 / AZ-305",
    color: "#00A4EF",
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
        steps: [
          "Create 2 VMs (vm-web-1, vm-web-2) in availability set, running nginx",
          "Create Load Balancer: lb-web, SKU: Standard",
          "Configure frontend IP, backend pool (both VMs)",
          "Add health probe: HTTP on port 80, interval 5s",
          "Add LB rule: port 80 → backend port 80",
          "Browse to LB public IP → refresh to see traffic alternate",
          "Stop vm-web-1 → verify failover to vm-web-2"
        ]
      },
      {
        name: "Lab 2: Configure VNet Peering (Hub-Spoke)",
        steps: [
          "Create vnet-spoke1 (10.1.0.0/16) and vnet-spoke2 (10.2.0.0/16)",
          "Deploy a VM in each VNet",
          "Set up peering: spoke1 ↔ vnet-main, spoke2 ↔ vnet-main",
          "From spoke1 VM, ping vnet-main VM → should succeed",
          "From spoke1 VM, ping spoke2 VM → should FAIL (non-transitive)",
          "Document the hub-spoke topology"
        ]
      }
    ],
    resources: [
      { type: "doc", name: "Azure Load Balancer Docs", url: "https://learn.microsoft.com/en-us/azure/load-balancer/load-balancer-overview" },
      { type: "doc", name: "VNet Peering", url: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview" }
    ],
    project: {
      name: "PROJECT 1: Deploy a 3-Tier Architecture in Azure",
      description: "Design and deploy a full 3-tier app (web → app → database) with load balancing, NSGs between tiers, and Bastion access. The database tier will use a simple VM-based setup for now — you'll upgrade to managed databases in Weeks 6-7.",
      dummyData: "Contoso Retail — e-commerce with 500 daily users. Web tier serves static assets, App tier runs business logic APIs, DB tier hosts product catalog (50,000 SKUs).",
      steps: [
        "Design the architecture diagram with Claude",
        "Create VNet with 3 subnets: web, app, db",
        "Deploy 2 web VMs behind a public Load Balancer",
        "Deploy 1 app VM running a Node.js API",
        "Deploy 1 VM with PostgreSQL in the db subnet (managed DB upgrade coming Week 7)",
        "Configure NSGs: web allows 80/443, app allows 8080 from web only, db allows 5432 from app only",
        "Deploy Bastion for management access",
        "Test end-to-end and document architecture"
      ]
    },
    askClaude: [
      "Compare Load Balancer vs Application Gateway vs Front Door — when to use each",
      "Design a hub-spoke topology for 'Contoso Corp' with 3 regional offices",
      "Explain Site-to-Site VPN setup step by step"
    ]
  },
  {
    week: 5,
    phase: "Compute",
    title: "VMs, App Service & Serverless Compute Intro",
    cert: "AZ-104 / AZ-204",
    color: "#F25022",
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
        steps: [
          "Create Windows VM: vm-win-01, B2s, Windows Server 2022",
          "RDP in → install IIS via Server Manager",
          "Create Linux VM: vm-linux-01, B1s, Ubuntu 22.04",
          "SSH in → sudo apt update && sudo apt install nginx -y",
          "Verify both serve web pages via public IPs",
          "Resize vm-linux-01 to B2s → observe restart"
        ]
      },
      {
        name: "Lab 2: VM Scale Set with Autoscaling",
        steps: [
          "Create VMSS with cloud-init for nginx, 2 initial instances",
          "Attach Load Balancer",
          "Set autoscale: out at CPU > 70%, in at CPU < 30%",
          "Stress test: stress --cpu 4 --timeout 300",
          "Watch VMSS scale out in Activity Log"
        ]
      },
      {
        name: "Lab 3: Azure App Service with Deployment Slots",
        steps: [
          "Create App Service Plan (B1, Linux) + Web App (Node.js 18)",
          "Connect to sample GitHub repo for deployment",
          "Enable staging slot → deploy v2 to staging",
          "Browse both slots → verify different versions",
          "Swap staging → production → zero-downtime deployment"
        ]
      },
      {
        name: "Lab 4: Your First Azure Function",
        steps: [
          "Create Function App: func-week5, Node.js, Consumption plan",
          "Create HTTP trigger function: GetGreeting → returns personalized JSON",
          "Test in Portal with query parameters",
          "Test via curl: curl https://func-week5.azurewebsites.net/api/GetGreeting?name=Azure",
          "View Monitor tab → see invocation logs",
          "Note: we'll go deep on Functions triggers and patterns in Week 16"
        ]
      },
      {
        name: "Lab 5: Deploy a Static Web App",
        steps: [
          "Create a simple React or HTML app (ask Claude to generate it)",
          "Push to a GitHub repository",
          "Create Azure Static Web App → link to GitHub",
          "Verify auto-deployment on push",
          "Create a PR → see preview environment auto-created",
          "Note: we'll add API backends and auth in Week 16"
        ]
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
      description: "Deploy the same portfolio website three ways: Blob Storage static site, App Service with slots, and Static Web App with GitHub integration. Compare the approaches.",
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
    askClaude: [
      "Generate a cloud-init script for nginx with a custom landing page",
      "Compare all Azure compute options in a decision matrix: VMs, VMSS, App Service, Functions, ACI, AKS",
      "When should I use Functions vs App Service vs Static Web Apps? Give me 5 scenarios for each"
    ]
  },
  {
    week: 6,
    phase: "Data Services I",
    title: "Storage, Key Vault & SQL Database Fundamentals",
    cert: "AZ-104 / AZ-204",
    color: "#7FBA00",
    infused: ["Azure SQL Database basics (create, connect, query)", "Database firewall rules & basic security", "SQL as a natural extension of data services"],
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
        steps: [
          "Create storage account: stweek6demo, Standard, LRS (with proper tags)",
          "Create containers: 'documents' (private), 'images' (blob access)",
          "Upload files via Portal and CLI",
          "Generate SAS token with 1-hour expiry",
          "Access blob via SAS URL in browser"
        ]
      },
      {
        name: "Lab 2: Blob Lifecycle Management",
        steps: [
          "Navigate to Lifecycle Management → Add Rule",
          "Move to Cool after 30 days, Archive after 90, Delete after 365",
          "Review JSON policy structure",
          "Verify via CLI: az storage account management-policy show"
        ]
      },
      {
        name: "Lab 3: Azure Key Vault",
        steps: [
          "Create Key Vault: kv-week6-demo",
          "Add secret: DatabasePassword = 'P@ssw0rd!2025-DEMO'",
          "Add access policy: Get + List for your user",
          "Retrieve via CLI: az keyvault secret show",
          "Create VM with managed identity → grant Key Vault access",
          "From VM, retrieve secret using managed identity + REST API"
        ]
      },
      {
        name: "Lab 4: Create Your First Azure SQL Database",
        steps: [
          "Create Azure SQL Server: sql-week6.database.windows.net",
          "Create database: db-products, DTU tier: Basic (5 DTUs)",
          "Configure server firewall: add your client IP",
          "Connect from VS Code with SQL Server extension",
          "Create tables: Products (id, name, price, category, stock_qty)",
          "Ask Claude to generate 30 INSERT statements → run them",
          "Run queries: SELECT with WHERE, GROUP BY, ORDER BY",
          "Store the SQL connection string in Key Vault (tie it together!)"
        ]
      }
    ],
    resources: [
      { type: "doc", name: "Azure Storage Docs", url: "https://learn.microsoft.com/en-us/azure/storage/" },
      { type: "doc", name: "Key Vault Docs", url: "https://learn.microsoft.com/en-us/azure/key-vault/" },
      { type: "doc", name: "Azure SQL Database Quickstart", url: "https://learn.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart" }
    ],
    project: null,
    askClaude: [
      "Design a storage + database strategy for a healthcare company with 10TB of patient records",
      "Generate 30 INSERT statements for a products table with realistic e-commerce data",
      "Explain how to securely connect an App Service to SQL Database using Key Vault + managed identity"
    ]
  },
  {
    week: 7,
    phase: "Data Services II",
    title: "Cosmos DB, PostgreSQL & Database Security",
    cert: "AZ-204 / AZ-305",
    color: "#E8A400",
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
        steps: [
          "Enable Transparent Data Encryption on db-products → verify on by default",
          "Enable Auditing → send logs to Storage Account",
          "Configure Entra ID authentication for the SQL server",
          "Disable public access → create Private Endpoint in snet-db",
          "Configure Private DNS Zone: privatelink.database.windows.net",
          "From VNet VM: nslookup → verify private IP resolution",
          "From local machine: verify access is DENIED"
        ]
      },
      {
        name: "Lab 2: Deploy PostgreSQL Flexible Server",
        steps: [
          "Create PostgreSQL: pg-week7-demo, Burstable B1ms",
          "Configure VNet integration in snet-db",
          "Connect via psql from a VNet VM",
          "Create inventory_db with products, warehouses, stock_levels tables",
          "Insert dummy data: 5 warehouses, 100 products",
          "Run aggregation queries across tables",
          "Enable point-in-time restore and verify backup settings"
        ]
      },
      {
        name: "Lab 3: Cosmos DB Deep Dive",
        steps: [
          "Create Cosmos DB: cosmos-week7, API: NoSQL",
          "Create database: ecommerce, container: user_sessions, partition: /userId",
          "Insert 20 JSON session documents (ask Claude for data)",
          "Query with SQL syntax → check RU consumption per query",
          "Change consistency: Strong → Session → observe tradeoffs",
          "Add second region (West US) → test global distribution",
          "Create container with TTL (auto-delete after 24 hours)"
        ]
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
        "Upgrade the Week 4 3-tier project to use managed databases",
        "Document the data architecture with a flow diagram"
      ]
    },
    askClaude: [
      "Explain Cosmos DB consistency levels with real-world analogies for each",
      "Compare Azure SQL vs PostgreSQL vs Cosmos DB — decision matrix with 10 criteria",
      "Design a database migration plan: on-prem SQL Server 2019 to Azure SQL",
      "Generate 20 JSON documents for a user_sessions Cosmos DB container"
    ]
  },
  {
    week: 8,
    phase: "Containers I",
    title: "Docker, ACR & Azure Container Instances",
    cert: "AZ-204",
    color: "#0078D4",
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
        steps: [
          "Create a Node.js express server returning 'Hello Azure!'",
          "Write Dockerfile: FROM node:18-alpine, COPY, RUN npm install, EXPOSE 3000, CMD",
          "Build: docker build -t myapp:v1 .",
          "Create ACR: az acr create --name acrweek8 --sku Basic",
          "Login, tag, push to ACR",
          "Verify: az acr repository list --name acrweek8"
        ]
      },
      {
        name: "Lab 2: Deploy to Azure Container Instances",
        steps: [
          "Enable ACR admin user",
          "Deploy ACI: az container create --name aci-myapp --image acrweek8.azurecr.io/myapp:v1 --ports 3000",
          "Browse to the public URL",
          "View logs: az container logs --name aci-myapp",
          "Clean up: az container delete --name aci-myapp --yes"
        ]
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
    askClaude: [
      "Generate a multi-stage Dockerfile that minimizes image size",
      "Explain ACR tasks for auto-build on git push",
      "Compare ACI vs App Service vs AKS — decision matrix"
    ]
  },
  {
    week: 9,
    phase: "Containers II",
    title: "AKS, Kubernetes & API Management",
    cert: "AZ-204 / AZ-400",
    color: "#326CE5",
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
        steps: [
          "az aks create --name aks-week9 --node-count 2 --node-vm-size Standard_B2s --generate-ssh-keys",
          "az aks get-credentials --name aks-week9",
          "kubectl get nodes → verify 2 ready nodes",
          "kubectl create deployment nginx --image=nginx --replicas=3",
          "kubectl expose deployment nginx --type=LoadBalancer --port=80",
          "Browse to external IP",
          "kubectl scale deployment nginx --replicas=5"
        ]
      },
      {
        name: "Lab 2: Deploy Multi-Container App with YAML",
        steps: [
          "Ask Claude for K8s YAML: frontend (nginx), backend (Node API), redis",
          "kubectl apply -f app-manifest.yaml",
          "Verify: kubectl get pods, kubectl get svc",
          "View logs: kubectl logs <pod-name>",
          "Exec into pod: kubectl exec -it <pod> -- /bin/sh",
          "Delete: kubectl delete -f app-manifest.yaml"
        ]
      },
      {
        name: "Lab 3: API Management for Your AKS APIs",
        steps: [
          "Deploy a simple API to AKS (the task API from Week 8)",
          "Create APIM instance: apim-week9 (Developer tier)",
          "Import the AKS API endpoint into APIM",
          "Add policies: rate limiting (10 calls/min), response caching (60s)",
          "Create a product and subscription key",
          "Test via APIM developer portal with subscription key",
          "Compare: direct API access vs APIM-mediated access"
        ]
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
    askClaude: [
      "Generate K8s YAML for a voting app with resource limits, health checks, and HPA",
      "Explain AKS networking: kubenet vs Azure CNI",
      "When should I use APIM vs just a LoadBalancer for my APIs?"
    ]
  },
  {
    week: 10,
    phase: "DevOps I",
    title: "Azure DevOps & CI/CD Pipelines",
    cert: "AZ-400",
    color: "#F25022",
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
        steps: [
          "Create account at dev.azure.com and project: 'AzureLearning'",
          "Initialize Git repo with sample Node.js app",
          "Create azure-pipelines.yml: trigger on main, steps: npm install, test, build",
          "Commit → watch pipeline run automatically",
          "Check logs for each step"
        ]
      },
      {
        name: "Lab 2: CI/CD to Azure App Service",
        steps: [
          "Create App Service: app-devops-demo",
          "Create service connection to your Azure subscription",
          "Add deployment stage with AzureWebApp@1 task",
          "Commit code change → watch auto-build and deploy",
          "Add staging environment with manual approval gate",
          "Test: commit → build → deploy staging → approve → deploy prod"
        ]
      }
    ],
    resources: [
      { type: "doc", name: "Azure DevOps Docs", url: "https://learn.microsoft.com/en-us/azure/devops/" },
      { type: "doc", name: "YAML Pipeline Reference", url: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema" }
    ],
    project: {
      name: "PROJECT 6: Netflix Clone CI/CD Pipeline",
      description: "Full CI/CD pipeline: build, test, scan, deploy a web app to AKS with quality gates.",
      dummyData: "Movie catalog: 50 movies (title, genre, rating, thumbnail_url, description). React frontend, Express API.",
      steps: [
        "Scaffold project with Claude (React + Express)",
        "Set up Azure DevOps with Boards, Repos, Pipelines",
        "YAML pipeline: Build → Docker push → Deploy staging → Test → Approve → Prod",
        "Add branch policies: PR reviews, build validation"
      ]
    },
    askClaude: [
      "Generate azure-pipelines.yml for a Node.js app deploying to AKS with staging + prod",
      "Explain service connections and how they securely authenticate",
      "Create a branching strategy for a 5-developer team"
    ]
  },
  {
    week: 11,
    phase: "DevOps II",
    title: "IaC: Bicep, Terraform & GitHub Actions",
    cert: "AZ-400",
    color: "#FF7139",
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
        steps: [
          "az bicep install",
          "Create main.bicep: VNet + Subnet + NSG + VM",
          "Preview: az deployment group what-if --template-file main.bicep",
          "Deploy: az deployment group create --template-file main.bicep",
          "Modify to add second VM → re-deploy (incremental)",
          "Decompile ARM to Bicep: az bicep decompile"
        ]
      },
      {
        name: "Lab 2: Terraform for Azure",
        steps: [
          "Install Terraform CLI",
          "Create main.tf: provider, resource group, VNet, subnet, VM",
          "terraform init → plan → apply",
          "Inspect: terraform state list",
          "Modify VM size → plan (see diff) → apply",
          "terraform destroy"
        ]
      },
      {
        name: "Lab 3: GitHub Actions CI/CD",
        steps: [
          "Create GitHub repo with web app",
          "Create .github/workflows/deploy.yml",
          "Define trigger on push, jobs: build, test, deploy to Azure",
          "Set GitHub secrets: AZURE_CREDENTIALS",
          "Push → watch Action run",
          "Add Terraform step for infrastructure provisioning"
        ]
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
    askClaude: [
      "Generate a Terraform module for AKS with networking",
      "Compare ARM vs Bicep vs Terraform — pros/cons for Azure-only",
      "Write GitHub Actions: Terraform plan on PR, apply on merge"
    ]
  },
  {
    week: 12,
    phase: "Monitoring & Cost",
    title: "Monitoring, Observability & Cost Management Deep Dive",
    cert: "AZ-104 / AZ-305",
    color: "#FFB900",
    infused: ["Cost Management deep dive (11 weeks of spend data)", "Azure Advisor recommendations", "FinOps principles"],
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
        steps: [
          "Create Log Analytics Workspace: law-week12",
          "Deploy VM → enable Azure Monitor Agent",
          "Configure data collection: Syslog + Performance counters",
          "Wait 15 min → run KQL for CPU utilization and error logs",
          "Create alert: CPU > 80% for 5 minutes"
        ]
      },
      {
        name: "Lab 2: Application Insights",
        steps: [
          "Create App Insights → connect to a web app",
          "Generate traffic including /error endpoints",
          "Explore Live Metrics, Performance, Failures panels",
          "Custom KQL: requests | where duration > 2000",
          "Set up availability test from 5 regions"
        ]
      },
      {
        name: "Lab 3: Network Watcher",
        steps: [
          "Enable Network Watcher",
          "Connection Troubleshoot: test VM-to-VM connectivity",
          "IP Flow Verify: check NSG allows port 443",
          "Capture 60 seconds of packets",
          "Review NSG flow logs and visualize topology"
        ]
      },
      {
        name: "Lab 4: Cost Management & FinOps Deep Dive",
        steps: [
          "Navigate to Cost Management → Cost Analysis",
          "View costs by: resource group, service, location, tag (CostCenter)",
          "Identify your top 3 cost drivers over the past 11 weeks",
          "Create a budget: $100/month with alerts at 50%, 80%, 100%",
          "Go to Azure Advisor → Cost tab → review all recommendations",
          "Identify underutilized VMs and right-sizing opportunities",
          "Export cost data to CSV → ask Claude to analyze and summarize trends",
          "Calculate: what would Reserved Instances save you for always-on VMs?"
        ]
      }
    ],
    resources: [
      { type: "doc", name: "Azure Monitor Docs", url: "https://learn.microsoft.com/en-us/azure/azure-monitor/" },
      { type: "doc", name: "KQL Reference", url: "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/" },
      { type: "doc", name: "Cost Management Docs", url: "https://learn.microsoft.com/en-us/azure/cost-management-billing/" },
      { type: "doc", name: "FinOps Framework", url: "https://www.finops.org/framework/" }
    ],
    project: null,
    askClaude: [
      "Write 10 useful KQL queries for monitoring a production web app",
      "Design an alerting strategy for a 3-tier app: what to monitor, thresholds, action groups",
      "Create a FinOps cheat sheet: top 15 ways to reduce Azure costs immediately",
      "Analyze this cost breakdown and suggest optimizations: [paste your Cost Analysis export]"
    ]
  },
  {
    week: 13,
    phase: "Security",
    title: "Zero Trust, Firewall, Private Endpoints & Defender",
    cert: "AZ-500",
    color: "#D83B01",
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
        steps: [
          "Create hub VNet with AzureFirewallSubnet",
          "Deploy Azure Firewall → route table forcing spoke traffic through FW",
          "Add app rule: allow *.microsoft.com",
          "Add network rule: allow DNS (UDP 53)",
          "Test: curl microsoft.com (allowed), google.com (denied)",
          "Enable DDoS Protection plan"
        ]
      },
      {
        name: "Lab 2: Private Endpoints for PaaS",
        steps: [
          "Create storage account with public access disabled",
          "Create Private Endpoint + Private DNS Zone",
          "From VM: nslookup → verify private IP resolution",
          "Upload from VM (success) vs local machine (denied)",
          "Compare behavior: Private Endpoint vs Service Endpoint"
        ]
      },
      {
        name: "Lab 3: Zero Trust Web App",
        steps: [
          "Deploy App Service with Private Endpoint (no public access)",
          "Enable Entra ID authentication",
          "Create Conditional Access: require MFA + compliant device",
          "Database behind Private Endpoint",
          "Key Vault with managed identity only",
          "Verify: every layer requires identity + private networking",
          "Document Zero Trust implementation per pillar"
        ]
      },
      {
        name: "Lab 4: Defender for Cloud",
        steps: [
          "Enable Defender for Cloud on your subscription",
          "Review current Secure Score and recommendations",
          "Implement top 5 recommendations",
          "Enable Defender for Servers on your VMs",
          "Review vulnerability assessment results",
          "Set a target: improve Secure Score by 20 points"
        ]
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
    askClaude: [
      "Explain the 6 pillars of Zero Trust mapped to Azure services",
      "Create a Conditional Access policy matrix for a financial services company",
      "Compare Private Endpoints vs Service Endpoints with network diagrams",
      "Generate an Azure Policy that requires encryption on all resources"
    ]
  },
  {
    week: 14,
    phase: "Governance & SIEM",
    title: "Sentinel SIEM, Advanced Policy & Governance at Scale",
    cert: "AZ-500 / AZ-305",
    color: "#008575",
    infused: ["Microsoft Sentinel deep dive", "Advanced custom policies & initiatives", "Azure Blueprints", "Azure Arc for hybrid"],
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
        steps: [
          "Enable Sentinel on Log Analytics Workspace",
          "Connect data sources: Activity Logs, Entra ID sign-ins",
          "Enable analytics rule: 'Brute force against Portal'",
          "Create custom rule: 5+ failed logins in 10 min",
          "Simulate failed logins → watch incident appear",
          "Create Playbook (Logic App) for alert notification",
          "Explore Sentinel workbooks for visualization"
        ]
      },
      {
        name: "Lab 2: Advanced Azure Policy",
        steps: [
          "Create custom policy: 'Deny public IP on VMs'",
          "Write policy rule JSON (ask Claude to generate)",
          "Create custom policy: 'Require specific tag values'",
          "Bundle policies into a Policy Initiative (set)",
          "Assign initiative at Management Group level",
          "Review compliance dashboard → remediate non-compliant resources"
        ]
      },
      {
        name: "Lab 3: Azure Blueprints",
        steps: [
          "Create Blueprint: bp-secure-landing-zone",
          "Add artifacts: Resource Group, VNet, NSG, Key Vault, Storage",
          "Add policy assignment: 'Require encryption at rest'",
          "Add RBAC: Contributor to specific group",
          "Publish v1.0 → assign to subscription",
          "Verify all resources created with correct policies and RBAC"
        ]
      },
      {
        name: "Lab 4: Azure Arc — Hybrid Management",
        steps: [
          "Install Arc agent on a local VM or WSL instance",
          "Register as Arc-enabled server",
          "View in Portal → verify properties",
          "Apply Azure Policy to the Arc server",
          "Apply tags and explore management capabilities"
        ]
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
        "Apply policies to Arc-managed servers",
        "Document the complete governance + security framework"
      ]
    },
    askClaude: [
      "Generate custom Azure Policy JSON that denies VMs larger than Standard_D4s_v3",
      "Design a Management Group hierarchy for 3 subsidiaries with 4 environments each",
      "Design a Sentinel deployment: data connectors, analytics rules, and playbooks",
      "Explain Azure Arc: what can it manage, when would a company use it?"
    ]
  },
  {
    week: 15,
    phase: "Architecture",
    title: "Solutions Architecture, DR & Migration (AZ-305)",
    cert: "AZ-305",
    color: "#0078D4",
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
        steps: [
          "Scenario: E-commerce for 100K daily users, global presence",
          "Design with Claude: compute, networking, data, security, DR",
          "Create architecture diagram using draw.io or Mermaid",
          "Calculate costs with Azure Pricing Calculator",
          "Document SLA targets, RPO/RTO, scaling strategy, security controls",
          "Present the design as a CTO pitch"
        ]
      },
      {
        name: "Lab 2: Disaster Recovery with Site Recovery",
        steps: [
          "Deploy VM in East US with a web application",
          "Set up Azure Site Recovery to replicate to West US",
          "Configure recovery plan with pre/post scripts",
          "Run test failover → verify app works in West US",
          "Clean up test failover resources",
          "Document RPO and RTO achieved"
        ]
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
    askClaude: [
      "Design a globally distributed SaaS architecture for 1M users across 5 regions",
      "Create a detailed cost estimate for a 3-tier app in Azure",
      "Walk me through the Well-Architected Framework review"
    ]
  },
  {
    week: 16,
    phase: "Serverless Advanced",
    title: "Functions Deep Dive, Logic Apps, Event Grid & Service Bus",
    cert: "AZ-204",
    color: "#5C2D91",
    infused: [],
    topics: [
      "Azure Functions — Timer, Blob, Queue, Event Grid triggers",
      "Durable Functions for stateful workflows",
      "Azure Service Bus — queues & topics (pub/sub)",
      "Azure Event Grid — event-driven architecture",
      "Azure Logic Apps — workflow automation without code",
      "Azure CDN — content delivery & caching",
      "OpenID Connect & MSAL authentication in apps",
      "Static Web Apps with API backends (building on Week 5 intro)"
    ],
    labs: [
      {
        name: "Lab 1: Azure Functions — All Trigger Types",
        steps: [
          "Revisit func-week5 from Week 5 (or create new)",
          "Add Timer trigger: cleanup job every 5 minutes",
          "Add Blob trigger: fires when file uploaded to 'uploads' container",
          "Add Queue trigger: processes messages from a Storage Queue",
          "Add Event Grid trigger: responds to resource events",
          "Monitor all triggers via Application Insights"
        ]
      },
      {
        name: "Lab 2: Service Bus & Event Grid",
        steps: [
          "Create Service Bus: queue 'orders', topic 'notifications' with 2 subscriptions",
          "Write sender app: 10 messages to queue",
          "Write receiver app: process messages",
          "Create Event Grid topic → subscribe Azure Function",
          "Send custom event → watch Function fire",
          "Verify dead-letter queue for failed messages"
        ]
      },
      {
        name: "Lab 3: Logic Apps Workflow Automation",
        steps: [
          "Workflow 1: Blob upload → conditional email (if size > 5MB → manager, else → team)",
          "Workflow 2: HTTP trigger → query Azure SQL → return formatted response",
          "Workflow 3: Daily recurrence → call Cost Management API → email cost report",
          "Test all workflows and review run history"
        ]
      },
      {
        name: "Lab 4: Static Web App with Full API Backend",
        steps: [
          "Build on the Static Web App from Week 5",
          "Add API folder with multiple Azure Functions endpoints",
          "Add Entra ID authentication to the Static Web App",
          "Configure environment variables and app settings",
          "Deploy and test the full-stack serverless application"
        ]
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
      description: "Full event-driven app: Static Web App frontend, Functions API, Service Bus for async processing, Logic Apps for notifications, APIM gateway (from Week 9).",
      dummyData: "Alpine Coffee Roasters: orders flow through validation → payment → fulfillment → notification. 30 products, 200 customers, 500 historical orders.",
      steps: [
        "Ask Claude for React frontend (order form + status page)",
        "Build Functions: CreateOrder, ProcessPayment, FulfillOrder, GetStatus",
        "Service Bus queue for async order processing",
        "Event Grid: 'OrderCompleted' → triggers Logic App",
        "Logic App: sends email + updates blob",
        "Deploy as Static Web App (building on Week 5 skills)",
        "Connect APIM from Week 9 for rate limiting",
        "CDN for static assets",
        "Monitor with Application Insights",
        "Document the event-driven architecture"
      ]
    },
    askClaude: [
      "Design an event-driven architecture diagram with Event Grid + Service Bus + Functions",
      "Generate a Logic App workflow JSON for expense approvals based on amount thresholds",
      "Compare Azure Functions vs Logic Apps vs Power Automate — when to use each",
      "Explain Durable Functions: fan-out/fan-in, chaining, and human interaction patterns"
    ]
  },
  {
    week: 17,
    phase: "Capstone",
    title: "Capstone Project, Cert Prep & Career Readiness",
    cert: "ALL CERTS",
    color: "#107C10",
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
        steps: [
          "Ask Claude for 20 AZ-900 practice questions → take quiz",
          "Ask Claude for 20 AZ-104 questions → take quiz",
          "15 scenario-based AZ-305 questions",
          "15 AZ-500 security scenario questions",
          "Review wrong answers → study specific topics",
          "Time yourself: 2 min per question max",
          "Identify 3 weakest areas → focused study plan"
        ]
      },
      {
        name: "Lab 2: Build Your Azure Portfolio",
        steps: [
          "Compile all 11 projects on GitHub with READMEs",
          "Add screenshots and architecture diagrams to each",
          "Write a blog post about your favorite project (use Claude)",
          "Update LinkedIn with certifications and project descriptions",
          "Ask Claude to review your resume for Azure roles"
        ]
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
        "Present as portfolio piece — this is your interview showpiece"
      ]
    },
    askClaude: [
      "Quiz me on 50 mixed questions across all 6 certification exams",
      "Review my resume for Azure Cloud Engineer positions",
      "Give me 20 common Azure interview questions with detailed answers",
      "Help me write a case study document for my capstone project",
      "Simulate a technical interview: ask me 10 scenario-based Azure questions one at a time"
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
