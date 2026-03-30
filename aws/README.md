# ⚡ AWS Cloud Mastery — 18-Week Learning Plan

An interactive, progress-tracking learning plan for mastering AWS from zero to guru. Built with React + Vite, deployed on GitHub Pages.

## Features

- **18 weeks** of structured curriculum across 6 phases
- **50+ hands-on labs** with step-by-step walkthroughs
- **15+ projects** with copy-paste Claude prompts and dummy data
- **Gap analysis** — covers everything K21 Academy misses (Terraform, AI/ML, Linux, Python/boto3, etc.)
- **Progress tracking** that persists in your browser (localStorage)
- **6 AWS certifications** mapped to curriculum weeks
- **Interview prep** with system design exercises and STAR templates

## 🚀 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

```bash
# Create a new repo on GitHub called "aws-mastery-plan" (or whatever you want)
# Then clone it locally:
git clone https://github.com/YOUR_USERNAME/aws-mastery-plan.git
cd aws-mastery-plan
```

### Step 2: Copy Project Files

Copy all the files from this project into your repo folder.

### Step 3: Update the Base Path

Open `vite.config.js` and change the `base` to match your repo name:

```js
base: '/your-repo-name/',
```

### Step 4: Install Dependencies & Test Locally

```bash
npm install
npm run dev
# Open http://localhost:5173/aws-mastery-plan/ in your browser
```

### Step 5: Push to GitHub

```bash
git add .
git commit -m "Initial deploy: AWS Mastery Plan"
git push origin main
```

### Step 6: Enable GitHub Pages

1. Go to your repo on GitHub
2. **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will auto-run on push and deploy your site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/aws-mastery-plan/
```

## 🛠 Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📁 Project Structure

```
aws-mastery-plan/
├── .github/workflows/deploy.yml   # Auto-deploy on push
├── src/
│   ├── App.jsx                    # Main application (all 18 weeks)
│   └── main.jsx                   # React entry point
├── index.html                     # HTML shell
├── vite.config.js                 # Vite config with GH Pages base
├── package.json                   # Dependencies
└── README.md
```

## License

Free to use for personal learning. Built with Claude.
