# ☁️ Azure Mastery Learning Plan v3

A comprehensive **17-week interactive learning plan** to master Microsoft Azure — 6 certifications, 11 real-world projects, and 70+ hands-on labs.

Built with **Vite + React**, deployable to **GitHub Pages**.

![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat&logo=microsoftazure&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/YOUR-USERNAME/cloud/azure.git
cd cloud/azure

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Deploy to GitHub Pages

### First-time setup

1. **Create a GitHub repo** named `cloud/azure`

2. **Update `vite.config.js`** — set the `base` to match your repo name:
   ```js
   base: '/cloud/azure/',
   ```

3. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Azure Learning Plan v3"
   git remote add origin https://github.com/YOUR-USERNAME/cloud/azure.git
   git push -u origin main
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable Pages** — Go to repo **Settings → Pages → Source: Deploy from branch → Branch: `gh-pages`**

Your site will be live at:
```
https://YOUR-USERNAME.github.io/cloud/azure/
```

### Subsequent deploys

```bash
npm run deploy
```

That's it — `gh-pages` handles the build + push automatically.

## 🏗️ Project Structure

```
cloud/azure/
├── index.html              # Vite entry point
├── package.json            # Dependencies + scripts
├── vite.config.js          # Vite config with GH Pages base
├── .gitignore
├── README.md
├── public/                 # Static assets (if any)
└── src/
    ├── main.jsx            # React entry
    ├── index.css           # Global styles + dark mode
    ├── App.jsx             # Main app (views, state, layout)
    ├── data/
    │   └── weeks.js        # All 17 weeks of curriculum data
    └── components/
        ├── ProgressBar.jsx # Progress tracking bar
        └── WeekCard.jsx    # Expandable week card with labs/projects
```

## ✨ Features

- **17 weeks** of properly sequenced curriculum
- **70+ hands-on labs** with step-by-step walkthroughs
- **11 real-world projects** with dummy data scenarios
- **Progress tracking** persisted in localStorage
- **Filter by certification** (AZ-900, AZ-104, AZ-204, AZ-305, AZ-400, AZ-500)
- **Filter by infused content** to see what was redistributed
- **Dark mode** — auto-detects system preference
- **Click to copy** "Ask Claude" prompts to clipboard
- **Responsive** — works on desktop, tablet, and mobile

## 📋 Curriculum Overview

| Week | Phase | Title | Certs | Infused |
|------|-------|-------|-------|---------|
| 1 | Foundation | Cloud Foundations, Setup & Cost Awareness | AZ-900 | ✦ Tagging, Budget alerts, Cost basics |
| 2 | Identity & Governance | Entra ID, RBAC & Azure Policy | AZ-104/500 | ✦ Policy basics, Mgmt Groups |
| 3 | Networking I | VNets, Subnets, NSGs & DNS | AZ-104 | |
| 4 | Networking II | Load Balancing, VPN & Peering | AZ-104/305 | |
| 5 | Compute | VMs, App Service & Serverless Intro | AZ-104/204 | ✦ Functions, Static Web Apps |
| 6 | Data Services I | Storage, Key Vault & SQL Fundamentals | AZ-104/204 | ✦ Azure SQL basics |
| 7 | Data Services II | Cosmos DB, PostgreSQL & DB Security | AZ-204/305 | |
| 8 | Containers I | Docker, ACR & ACI | AZ-204 | |
| 9 | Containers II | AKS, Kubernetes & API Management | AZ-204/400 | ✦ APIM basics |
| 10 | DevOps I | Azure DevOps & CI/CD Pipelines | AZ-400 | |
| 11 | DevOps II | Bicep, Terraform & GitHub Actions | AZ-400 | |
| 12 | Monitoring & Cost | Monitoring, Observability & Cost Deep Dive | AZ-104/305 | ✦ FinOps, Advisor |
| 13 | Security | Zero Trust, Firewall & Defender | AZ-500 | |
| 14 | Governance & SIEM | Sentinel, Policy & Governance at Scale | AZ-500/305 | ✦ Sentinel, Blueprints, Arc |
| 15 | Architecture | Solutions Architecture, DR & Migration | AZ-305 | |
| 16 | Serverless Advanced | Functions, Logic Apps, Event Grid | AZ-204 | |
| 17 | Capstone | Enterprise Project + Cert Prep | ALL | |

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build + deploy to GitHub Pages |

## 📄 License

Free to use for personal learning. Built with Claude.
