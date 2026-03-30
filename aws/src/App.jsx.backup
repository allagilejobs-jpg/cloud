import { useState, useEffect, useCallback } from "react";

const WEEKS = [
  // ═══════════════ PHASE 1: FOUNDATIONS (Weeks 1-3) ═══════════════
  {
    week: 1, phase: 1, phaseTitle: "FOUNDATIONS",
    title: "Cloud Fundamentals, Linux Essentials & AWS Core",
    gapBadges: ["LINUX"],
    objectives: [
      "Understand cloud computing, shared responsibility model, IaaS/PaaS/SaaS",
      "Navigate the AWS Management Console and Global Infrastructure",
      "Master essential Linux commands — you'll use these every day on EC2",
      "Create and manage IAM users, groups, policies, and roles",
      "Launch your first EC2 instance and S3 bucket",
      "Install and configure AWS CLI"
    ],
    services: ["IAM", "EC2", "S3", "CloudWatch", "AWS CLI", "Linux"],
    resources: [
      { name: "AWS Cloud Practitioner Essentials", url: "https://skillbuilder.aws" },
      { name: "Linux Journey (Free)", url: "https://linuxjourney.com/" },
      { name: "IAM User Guide", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/" }
    ],
    prompts: [
      { title: "Cloud Computing Basics", prompt: `Explain AWS cloud computing to me like I'm switching from on-premises IT. Cover: IaaS vs PaaS vs SaaS, the shared responsibility model, and why companies migrate to AWS. Give me real-world analogies for each concept.` },
      { title: "Linux for AWS Engineers", prompt: `I'm starting my AWS career and need Linux fundamentals NOW because I'll be managing EC2 servers. Teach me the 40 most essential Linux commands organized by: file management (ls, cd, mkdir, cp, mv, rm, find, chmod, chown), text processing (cat, grep, awk, sed, head, tail, wc), networking (curl, wget, ping, ss, dig, ip addr), process management (ps, top, kill, systemctl, journalctl), and disk/storage (df, du, lsblk, mount, fdisk). For each command give me the syntax, 2 common flags, and a real AWS use case.` },
      { title: "IAM Deep Dive", prompt: `Teach me IAM from scratch. Explain users, groups, roles, and policies with a real company example. A startup called 'CloudBrew Coffee' has a CEO, 2 developers, 1 DBA, and 1 DevOps engineer — design their IAM structure with least privilege.` },
      { title: "EC2 Instance Types", prompt: `Explain EC2 instance types (t2, m5, c5, r5, etc.) using real-world analogies. When would I pick each one? Create a comparison table showing use cases, vCPUs, memory, and cost estimates.` }
    ],
    labs: [
      { id: "lab-1-1", title: "Create AWS Account & Billing Alerts", duration: "20 min", difficulty: "Beginner",
        steps: ["Go to https://aws.amazon.com/free → Create a Free Account", "Enter email, password, account name, payment info", "Go to Billing → Budgets → Create Cost Budget at $5/month", "CloudWatch → Billing Alarms → Create alarm at $3 threshold"],
        verify: "Budget alert confirmation email received." },
      { id: "lab-1-2", title: "Linux Command Line Mastery on EC2", duration: "40 min", difficulty: "Beginner",
        steps: ["Launch EC2: Amazon Linux 2023, t2.micro, allow SSH from your IP", "Connect via EC2 Instance Connect", "File ops: mkdir projects && cd projects && touch app.js && ls -la", "Text processing: echo 'Hello AWS' > test.txt && cat test.txt && grep 'AWS' test.txt", "Disk: df -h (check free space), lsblk (list block devices), du -sh /var (folder sizes)", "Networking: curl ifconfig.me (your public IP), ss -tlnp (listening ports), dig google.com", "Processes: ps aux | head -20, top (press q to exit), systemctl status sshd", "Users: whoami, id, sudo useradd devuser, sudo passwd devuser", "Permissions: chmod 755 test.txt, chmod 600 ~/.ssh/authorized_keys (explain why)", "Practice: Find all files larger than 1MB: find / -size +1M -type f 2>/dev/null | head -20"],
        verify: "You can navigate, inspect, and manage a Linux server confidently." },
      { id: "lab-1-3", title: "Create IAM Users & Groups", duration: "25 min", difficulty: "Beginner",
        steps: ["IAM Console → Users → Create admin-user with Console access", "Create group 'Admins' with AdministratorAccess policy", "Add admin-user to Admins group", "Create group 'Developers' with PowerUserAccess", "Create dev-user, add to Developers", "Enable MFA on admin-user", "Log out of root, log in as admin-user"],
        verify: "admin-user has full access. dev-user cannot access IAM." },
      { id: "lab-1-4", title: "Create S3 Bucket & AWS CLI Setup", duration: "25 min", difficulty: "Beginner",
        steps: ["S3 Console → Create Bucket: cloudbrew-[initials]-2026, us-east-1", "Upload a test file, note the S3 URI", "Try Object URL in browser → Access Denied (good!)", "Install AWS CLI v2, create Access Key for admin-user", "Run: aws configure (key, secret, us-east-1, json)", "Test: aws s3 ls, aws ec2 describe-instances, aws iam list-users"],
        verify: "CLI commands return data. S3 file is uploaded and private." }
    ],
    project: null
  },
  {
    week: 2, phase: 1,
    title: "Storage Deep Dive — S3, EBS, EFS, Glacier",
    gapBadges: [],
    objectives: [
      "Master S3 bucket policies, ACLs, versioning, and lifecycle rules",
      "Understand all storage classes and when to use each",
      "Work with EBS volumes, snapshots, and encryption",
      "Set up EFS for shared file storage",
      "Configure CloudFront CDN"
    ],
    services: ["S3", "EBS", "EFS", "Glacier", "CloudFront", "Snow Family"],
    resources: [
      { name: "S3 User Guide", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/" },
      { name: "EBS Volume Types", url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html" }
    ],
    prompts: [
      { title: "S3 Storage Classes", prompt: `Explain all S3 storage classes with a cost comparison table. I'm storing user photos (accessed daily), monthly reports (occasional), and legal docs (7 years, rarely accessed). Which class for each? Include lifecycle rules.` },
      { title: "S3 Security Policies", prompt: `Teach me S3 bucket policies vs ACLs vs IAM policies. When do I use each? Write an example bucket policy that: 1) allows public read on /public, 2) restricts uploads to a specific IAM role, 3) denies access from outside the US.` },
      { title: "EBS Volume Types", prompt: `Compare EBS volume types (gp3, io2, st1, sc1) in a table. My app needs: a boot volume, a high-IOPS database volume, and a log storage volume. Recommend the best type for each with cost estimates.` }
    ],
    labs: [
      { id: "lab-2-1", title: "S3 Versioning & Lifecycle Policies", duration: "25 min", difficulty: "Beginner",
        steps: ["Enable Bucket Versioning on your S3 bucket", "Upload config.json with {\"version\": 1}", "Upload SAME file with {\"version\": 2} → Show versions toggle", "Delete the file → see Delete Marker → delete the marker → file restored!", "Management → Create lifecycle rule: Standard-IA at 30 days, Glacier at 90, delete at 365"],
        verify: "Versioning shows both versions. Lifecycle rule is active." },
      { id: "lab-2-2", title: "S3 Cross-Region Replication", duration: "25 min", difficulty: "Intermediate",
        steps: ["Create destination bucket in eu-west-1 with versioning enabled", "Source bucket → Management → Replication Rules → Create", "Source: entire bucket, Destination: eu-west-1 bucket, auto-create IAM role", "Upload a NEW file to source bucket", "Check destination bucket in eu-west-1"],
        verify: "New uploads replicate to eu-west-1 automatically." },
      { id: "lab-2-3", title: "EBS Volumes & Snapshots", duration: "30 min", difficulty: "Intermediate",
        steps: ["EC2 → Volumes → Create gp3, 10GB, same AZ as your EC2", "Attach to EC2 → SSH in", "Linux skills: lsblk, sudo mkfs -t xfs /dev/xvdf, sudo mkdir /data, sudo mount /dev/xvdf /data", "echo 'Hello EBS' | sudo tee /data/test.txt", "Create snapshot from console → name: data-snapshot-1"],
        verify: "cat /data/test.txt works. Snapshot appears in console." },
      { id: "lab-2-4", title: "EFS & CloudFront Setup", duration: "30 min", difficulty: "Intermediate",
        steps: ["EFS → Create file system: shared-storage", "SSH into EC2: sudo yum install -y amazon-efs-utils", "sudo mkdir /efs && sudo mount -t efs [fs-id]:/ /efs", "Upload image to S3 → CloudFront → Create Distribution with S3 origin", "Set up OAC, add bucket policy, access via CloudFront URL"],
        verify: "EFS mounted. Image loads fast via CloudFront." }
    ],
    project: { id: "proj-storage", title: "LensVault Photography Storage Architecture",
      description: "Design S3 storage for a photography business with RAW photos, edited JPEGs, and contracts.",
      prompt: `Help me build a project: I'm 'LensVault Photography'. Design my S3 storage architecture with: RAW photos bucket (rarely accessed after 30 days), edited JPEGs bucket (CDN-delivered), and client contracts bucket (7-year legal retention). Give me complete bucket policies, lifecycle rules, and CloudFront setup.` }
  },
  {
    week: 3, phase: 1,
    title: "EC2, Bash Scripting, Load Balancers & Auto Scaling",
    gapBadges: ["BASH"],
    objectives: [
      "Write Bash scripts for EC2 User Data and automation",
      "Understand EC2 metadata, AMIs, and purchasing options",
      "Configure Application and Network Load Balancers",
      "Set up Auto Scaling Groups with scaling policies"
    ],
    services: ["EC2", "ALB", "NLB", "Auto Scaling", "AMI", "Bash"],
    resources: [
      { name: "EC2 Auto Scaling", url: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/" },
      { name: "Bash Scripting Tutorial", url: "https://linuxconfig.org/bash-scripting-tutorial" }
    ],
    prompts: [
      { title: "Bash Scripting for AWS", prompt: `I'm writing EC2 User Data scripts and need to learn Bash properly. Teach me: variables, conditionals (if/else), loops (for/while), functions, exit codes, piping (|), redirects (> >>), and error handling (set -e, trap). Then write 3 real scripts:\n1. Web server setup script (install httpd, configure, start, verify)\n2. Health check script that pings 5 IPs from a file and logs failures\n3. Log rotation script that compresses logs older than 7 days\nExplain every line.` },
      { title: "Load Balancers Explained", prompt: `Explain Load Balancers like I'm designing a food delivery app. Cover: ALB vs NLB vs Classic. When do I use each? Include health checks and cross-zone load balancing.` },
      { title: "Auto Scaling Deep Dive", prompt: `Teach me EC2 Auto Scaling end-to-end. Explain launch templates, ASG config, scaling policies (target tracking, step, scheduled). Design scaling for 100 users normally, 10,000 during sales events.` }
    ],
    labs: [
      { id: "lab-3-1", title: "Bash Scripts for EC2 User Data", duration: "35 min", difficulty: "Intermediate",
        steps: ["Create setup-webserver.sh locally with proper Bash structure:", "  #!/bin/bash, set -euo pipefail (strict error handling)", "  Variables: HOSTNAME=$(hostname), REGION=$(curl -s metadata/placement/region)", "  Install: yum update -y && yum install -y httpd", "  Configure: create index.html with hostname and region dynamically", "  Start: systemctl start httpd && systemctl enable httpd", "  Verify: curl -s localhost | grep -q 'Hello' && echo 'SUCCESS' || echo 'FAIL'", "Launch EC2 with this script as User Data", "SSH in and check: systemctl status httpd, cat /var/www/html/index.html", "Create health-check.sh: reads IPs from file, pings each, logs failures to /var/log/health.log"],
        verify: "Web server running. Health check script logs results correctly." },
      { id: "lab-3-2", title: "ALB with 2 EC2 Instances", duration: "35 min", difficulty: "Intermediate",
        steps: ["Launch 2 EC2 instances with your Bash User Data script", "EC2 → Target Groups → Create: web-targets, port 80", "Register both instances, configure health check on /", "Load Balancers → Create ALB: web-alb, internet-facing, 2 AZs", "Listener: HTTP:80 → Forward to web-targets", "Wait for 'Active', copy ALB DNS", "Refresh browser repeatedly — hostname alternates"],
        verify: "Load balancing works — different hostnames on refresh." },
      { id: "lab-3-3", title: "Auto Scaling Group", duration: "30 min", difficulty: "Intermediate",
        steps: ["Launch Templates → Create with your User Data script", "Auto Scaling Groups → Create: web-asg, 2 AZs", "Attach to ALB target group, Desired: 2, Min: 1, Max: 4", "Scaling policy: Target Tracking → CPU > 50%", "Terminate one instance → watch ASG auto-replace it"],
        verify: "ASG replaces terminated instances automatically." }
    ],
    project: { id: "proj-3tier", title: "Deploy 3-Tier Architecture (ShopStream)",
      description: "Build a 3-tier app with web tier, app tier, and database.",
      prompt: `Build Project 1: 3-Tier Architecture for 'ShopStream'. I need:\n- Web Tier: 2 EC2 with Bash User Data behind ALB\n- App Tier: Node.js API on private subnet\n- Data Tier: RDS MySQL with 10 dummy products\nGive me all Bash scripts, code, security groups, and architecture.`,
      dummyData: `INSERT INTO products VALUES\n(1,'Wireless Headphones','Electronics',79.99,150),\n(2,'Running Shoes','Footwear',129.99,200),\n(3,'Coffee Beans','Food',14.99,500),\n(4,'Yoga Mat','Fitness',39.99,300),\n(5,'Laptop Stand','Accessories',49.99,100);` }
  },
  // ═══════════════ PHASE 2: NETWORKING, DATABASES & MONITORING (Weeks 4-6) ═══════════════
  {
    week: 4, phase: 2, phaseTitle: "NETWORKING, DATABASES & MONITORING",
    title: "VPC & Networking Deep Dive",
    gapBadges: [],
    objectives: [
      "Design custom VPCs with public and private subnets",
      "Configure Internet Gateways, NAT Gateways, Route Tables",
      "Understand Security Groups vs NACLs",
      "Set up VPC Peering, Endpoints, and Route 53"
    ],
    services: ["VPC", "Subnets", "IGW", "NAT GW", "NACLs", "Route 53", "VPN"],
    resources: [
      { name: "VPC User Guide", url: "https://docs.aws.amazon.com/vpc/latest/userguide/" },
      { name: "Route 53 Guide", url: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/" }
    ],
    prompts: [
      { title: "VPC Architecture Design", prompt: `Teach me VPC from scratch. I'm building 'MediTrack' healthcare app needing: public web servers, private app servers, isolated databases. Design the complete VPC with CIDR blocks, subnets across 2 AZs, route tables, and all gateways. Explain every decision.` },
      { title: "Security Groups vs NACLs", prompt: `Explain SGs vs NACLs with a comparison table. Give me 5 scenarios for each. Write NACL rules for: allow HTTP/HTTPS, allow SSH from one IP, deny all else.` },
      { title: "Route 53 Policies", prompt: `Teach me Route 53 routing policies (Simple, Weighted, Latency, Failover, Geolocation, Multi-Value). Real-world use case and dummy config for each.` }
    ],
    labs: [
      { id: "lab-4-1", title: "Build Custom VPC", duration: "30 min", difficulty: "Intermediate",
        steps: ["VPC Console → Create VPC → 'VPC and More'", "CIDR: 10.0.0.0/16, 2 AZs, 2 public + 2 private subnets", "NAT Gateway: 1, VPC Endpoint: S3 Gateway", "Verify: Public routes → igw, Private routes → nat"],
        verify: "VPC has correct subnets, routes, and gateways." },
      { id: "lab-4-2", title: "VPC Peering", duration: "25 min", difficulty: "Intermediate",
        steps: ["Create second VPC: 10.1.0.0/16 (no overlap)", "Create and accept peering connection", "Update BOTH route tables with cross-VPC routes", "Launch EC2 in each, allow ICMP, ping across VPCs"],
        verify: "Ping succeeds across VPCs." },
      { id: "lab-4-3", title: "VPC Endpoint for S3", duration: "15 min", difficulty: "Intermediate",
        steps: ["Create S3 Gateway endpoint for private subnets", "SSH into private EC2 → run aws s3 ls", "Traffic stays in AWS network — no NAT needed"],
        verify: "S3 commands work from private subnet without NAT." }
    ],
    project: { id: "proj-vpc", title: "Secure VPC for Production (FinSecure Bank)",
      description: "Production VPC with 3-tier subnets, bastion, NACLs, Flow Logs.",
      prompt: `Build Project 15: Secure VPC for 'FinSecure Bank'.\n- 3-tier subnets (public, private app, private DB)\n- Bastion host, NAT Gateway\n- NACLs + Security Groups (least privilege)\n- VPC Flow Logs → CloudWatch\nGive me all CIDR blocks, SG rules, NACL rules.` }
  },
  {
    week: 5, phase: 2,
    title: "Databases, Serverless & Python/boto3",
    gapBadges: ["PYTHON", "STEP FUNCTIONS", "EVENTBRIDGE"],
    objectives: [
      "Deploy RDS, DynamoDB, and ElastiCache",
      "Write Python with boto3 — the SDK behind every Lambda function",
      "Build serverless APIs with Lambda + API Gateway",
      "Orchestrate workflows with Step Functions and EventBridge",
      "Use SQS, SNS, and SES for messaging"
    ],
    services: ["RDS", "DynamoDB", "Lambda", "API Gateway", "SQS", "SNS", "Step Functions", "EventBridge", "boto3"],
    resources: [
      { name: "Boto3 Documentation", url: "https://boto3.amazonaws.com/v1/documentation/api/latest/" },
      { name: "Lambda Guide", url: "https://docs.aws.amazon.com/lambda/latest/dg/" },
      { name: "Step Functions Guide", url: "https://docs.aws.amazon.com/step-functions/latest/dg/" }
    ],
    prompts: [
      { title: "Python boto3 Crash Course", prompt: `I'm about to write Lambda functions in Python and need to learn boto3 NOW. Teach me:\n1. Setup: clients vs resources, sessions, credentials\n2. EC2: list/start/stop instances with filters\n3. S3: upload, download, list, presigned URLs\n4. DynamoDB: put_item, get_item, query, scan\n5. Error handling with botocore.exceptions\nFor each, give me working code I can paste into Lambda immediately. Then build a complete Lambda function that: reads from S3, processes JSON, stores results in DynamoDB.` },
      { title: "Database Decision Matrix", prompt: `Compare RDS vs DynamoDB vs ElastiCache vs Redshift. I'm building: e-commerce site, real-time leaderboard, data warehouse, session store. Which for each and why?` },
      { title: "Step Functions & EventBridge", prompt: `Teach me Step Functions + EventBridge. Build an order workflow: EventBridge receives 'OrderPlaced' → Step Functions: validate → charge → update inventory → send email. Give me the ASL definition with error handling and retries.` }
    ],
    labs: [
      { id: "lab-5-1", title: "RDS MySQL & DynamoDB", duration: "35 min", difficulty: "Intermediate",
        steps: ["RDS → Create MySQL (Free Tier), private subnets, no public access", "SSH into EC2 → mysql -h [endpoint] -u admin -p", "Create database, insert 5 dummy orders", "DynamoDB → Create UserSessions table (userId PK, sessionId SK)", "Add 3 items via console, query by userId"],
        verify: "SQL query returns 5 rows. DynamoDB query filters correctly." },
      { id: "lab-5-2", title: "Lambda with Python/boto3", duration: "40 min", difficulty: "Intermediate",
        steps: ["Lambda → Create: get-products, Python 3.12", "Write boto3 code: dynamodb.Table('Products').scan()", "Handle Decimal serialization with custom JSON encoder", "Add IAM policy for DynamoDB read access", "Test with empty event {} → verify JSON response", "Create a SECOND Lambda: process-order that writes to DynamoDB", "Use boto3 put_item with error handling (try/except ClientError)"],
        verify: "Both Lambdas execute successfully with proper boto3 calls." },
      { id: "lab-5-3", title: "API Gateway + Lambda REST API", duration: "30 min", difficulty: "Intermediate",
        steps: ["API Gateway → Create REST API", "Create /products (GET → get-products Lambda)", "Create /orders (POST → process-order Lambda)", "Deploy to stage: prod", "Test GET with browser, POST with curl"],
        verify: "Full REST API working: GET returns products, POST creates order." },
      { id: "lab-5-4", title: "Step Functions + EventBridge Workflow", duration: "40 min", difficulty: "Advanced",
        steps: ["Create 4 stub Lambdas: validate, charge, updateInventory, notify", "Step Functions → Create State Machine (Visual Workflow Studio)", "Chain states with error handling: Catch → RetryOrder / FailOrder", "EventBridge → Create Rule: source 'shopstream', detail-type 'OrderPlaced'", "Target: your Step Functions state machine", "Test: aws events put-events with dummy order JSON", "Watch execution in Step Functions console"],
        verify: "State machine runs all steps. Errors trigger retry/catch paths." }
    ],
    project: { id: "proj-serverless", title: "EC2 Start/Stop Automation with boto3 (Project 11)",
      description: "Python/boto3 Lambda functions to automate EC2 scheduling via EventBridge.",
      prompt: `Build Project 11: Automate EC2 Start/Stop using Python/boto3.\n1. Lambda start_instances and stop_instances with boto3 ec2 client\n2. EventBridge schedules: start 8AM, stop 8PM EST\n3. SNS notification on each action\n4. Tag-based targeting: only instances tagged AutoSchedule=true\n5. CloudWatch dashboard for instance state history\nGive me all Python code, IAM policies, and setup.` }
  },
  {
    week: 6, phase: 2,
    title: "Monitoring, Security & Observability",
    gapBadges: ["SECRETS MANAGER", "SSM", "X-RAY"],
    objectives: [
      "Master CloudWatch metrics, alarms, logs, dashboards",
      "Configure CloudTrail, AWS Config for compliance",
      "Manage secrets properly: Secrets Manager vs Parameter Store",
      "Replace SSH with SSM Session Manager",
      "Trace distributed apps with X-Ray",
      "Understand KMS, WAF, Shield, GuardDuty"
    ],
    services: ["CloudWatch", "CloudTrail", "AWS Config", "KMS", "WAF", "Secrets Manager", "SSM", "X-Ray", "GuardDuty"],
    resources: [
      { name: "CloudWatch Guide", url: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/" },
      { name: "Systems Manager Guide", url: "https://docs.aws.amazon.com/systems-manager/latest/userguide/" },
      { name: "X-Ray Guide", url: "https://docs.aws.amazon.com/xray/latest/devguide/" }
    ],
    prompts: [
      { title: "Monitoring Strategy", prompt: `Design monitoring for my 3-tier ShopStream app: CPU dashboards, billing alerts, log aggregation from EC2 + Lambda, custom metrics for order processing time, SNS phone alerts. Step-by-step.` },
      { title: "Secrets Manager vs SSM Parameter Store", prompt: `Compare Secrets Manager vs SSM Parameter Store. I have: DB passwords, API keys, feature flags, SSL certs. Which service for each? Show me: store a DB password in Secrets Manager with auto-rotation, retrieve it from Lambda with boto3. Then show Parameter Store for non-secret config.` },
      { title: "SSM Session Manager", prompt: `Teach me AWS Systems Manager: 1) Session Manager — SSH without key pairs or open ports, 2) Run Command — execute scripts across 100 instances, 3) Patch Manager — automated OS patching. Show me how to replace traditional SSH entirely.` },
      { title: "X-Ray Distributed Tracing", prompt: `Teach me X-Ray. My app: API Gateway → Lambda → DynamoDB + SQS → Lambda. How do I trace end-to-end? Show enabling X-Ray per service, adding annotations, using the Service Map.` }
    ],
    labs: [
      { id: "lab-6-1", title: "CloudWatch Alarms & CloudTrail", duration: "25 min", difficulty: "Intermediate",
        steps: ["Create dashboard: ShopStream-Dashboard with CPU + Billing widgets", "Create alarm: CPU > 80% → SNS email alert", "Stress test: stress --cpu 4 --timeout 300", "Enable CloudTrail: audit-trail, all regions, S3 + CloudWatch Logs", "Perform actions → check Event History"],
        verify: "CPU alert email received. CloudTrail shows your API calls." },
      { id: "lab-6-2", title: "Secrets Manager & Parameter Store", duration: "25 min", difficulty: "Intermediate",
        steps: ["Secrets Manager → Store secret: shopstream/db-creds (RDS credentials)", "Enable 30-day automatic rotation", "SSM → Parameter Store → Create: /shopstream/config/feature-flags (JSON string)", "Create Lambda that reads from BOTH using boto3:", "  secretsmanager.get_secret_value() and ssm.get_parameter()", "Test Lambda → verify it retrieves both values"],
        verify: "Lambda reads DB password from Secrets Manager and config from Parameter Store." },
      { id: "lab-6-3", title: "SSM Session Manager — Replace SSH", duration: "20 min", difficulty: "Intermediate",
        steps: ["Create IAM role with AmazonSSMManagedInstanceCore policy", "Attach to EC2 → verify instance appears in Fleet Manager", "Connect via Session Manager — no SSH key, no port 22!", "SSM → Run Command → AWS-RunShellScript: df -h && free -m", "Close port 22 in your Security Group — you don't need it!"],
        verify: "Connected without SSH. Port 22 closed. Run Command works across fleet." },
      { id: "lab-6-4", title: "X-Ray Distributed Tracing", duration: "30 min", difficulty: "Advanced",
        steps: ["Enable X-Ray on API Gateway: Stage → Logs/Tracing", "Add X-Ray SDK layer to Lambda, patch boto3", "Add custom subsegment annotations for database queries", "Make 10+ API calls to generate traces", "X-Ray Console → Service Map → view full request flow", "Identify highest-latency segment"],
        verify: "Service Map shows full path. You can identify the bottleneck." }
    ],
    project: { id: "proj-ssl", title: "SSL/TLS Certificate Management (Project 6)",
      description: "ACM certificates, ALB HTTPS, HTTP redirect, Route 53 custom domain.",
      prompt: `Build Project 6: SSL/TLS Certificate Management.\n1. Request SSL cert from ACM\n2. Attach to ALB for HTTPS\n3. HTTP→HTTPS redirect\n4. Custom domain via Route 53\nStep-by-step.` }
  },
  // ═══════════════ PHASE 3: IaC & DEVOPS (Weeks 7-9) ═══════════════
  {
    week: 7, phase: 3, phaseTitle: "INFRASTRUCTURE AS CODE & DEVOPS",
    title: "CloudFormation & Terraform — IaC Side-by-Side",
    gapBadges: ["TERRAFORM"],
    objectives: [
      "Write CloudFormation YAML templates with parameters and outputs",
      "Master Terraform: providers, resources, variables, state, plan/apply",
      "Compare CloudFormation vs Terraform head-to-head on the same infrastructure",
      "Understand remote state management with S3 + DynamoDB locking"
    ],
    services: ["CloudFormation", "Terraform", "S3 (state)", "DynamoDB (locking)"],
    resources: [
      { name: "CloudFormation Guide", url: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/" },
      { name: "Terraform AWS Provider", url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs" },
      { name: "Terraform Learn (Free)", url: "https://developer.hashicorp.com/terraform/tutorials" }
    ],
    prompts: [
      { title: "CloudFormation from Zero", prompt: `Teach me CloudFormation from zero. Write a YAML template that creates: VPC with 2 subnets, EC2 with web server, security group, and outputs the public IP. Explain every line. Add configurable parameters.` },
      { title: "Terraform from Zero", prompt: `Now teach me the EXACT same infrastructure in Terraform. I just learned CloudFormation — show me the Terraform equivalent side-by-side:\n1. Provider config (vs AWS::Region in CFn)\n2. Variables (vs Parameters)\n3. Resources (vs Resources — same names, different syntax)\n4. Outputs (vs Outputs)\n5. State (CFn manages this automatically; Terraform needs a backend)\n\nBuild the same VPC + EC2 + SG + outputs. Then show remote state with S3 + DynamoDB. For each block, add a comment showing the CloudFormation equivalent.` },
      { title: "Terraform Modules", prompt: `Teach me Terraform modules for reusable infrastructure. Create: modules/vpc, modules/ec2, modules/rds. Show me workspaces for dev/staging/prod with different .tfvars files. Include terraform fmt, validate, plan in a CI/CD context.` }
    ],
    labs: [
      { id: "lab-7-1", title: "CloudFormation: Deploy Web Server Stack", duration: "30 min", difficulty: "Intermediate",
        steps: ["Create infrastructure.yaml with Parameters, Resources, Outputs", "Define SecurityGroup + EC2 with UserData (your Bash script from Week 3!)", "CloudFormation → Create Stack → Upload template", "Set parameters → watch Events → check Outputs for URL", "Try Update Stack: change instance type → observe change set"],
        verify: "URL from Outputs shows your web page. Stack updates cleanly." },
      { id: "lab-7-2", title: "Terraform: Same Infrastructure, Different Tool", duration: "45 min", difficulty: "Advanced",
        steps: ["Install Terraform, create project directory", "Create provider.tf: AWS provider, us-east-1", "Create variables.tf: instance_type, key_pair (like CFn Parameters)", "Create main.tf: VPC + subnet + SG + EC2 (same infra as CFn lab!)", "Create outputs.tf: public IP, instance ID", "terraform init → terraform plan (review) → terraform apply", "Compare: how many lines CFn vs Terraform? Which felt easier?", "terraform destroy when done"],
        verify: "Terraform creates identical infrastructure to CloudFormation." },
      { id: "lab-7-3", title: "Terraform Remote State & Modules", duration: "35 min", difficulty: "Advanced",
        steps: ["Create S3 bucket for state + DynamoDB table for locking", "Add backend config to provider.tf", "terraform init -migrate-state → state now in S3", "Create modules/vpc/ (main.tf, variables.tf, outputs.tf)", "Refactor root to use: module 'vpc' { source = './modules/vpc' }", "Create dev.tfvars and prod.tfvars with different sizes", "terraform plan -var-file=dev.tfvars → compare to prod"],
        verify: "State in S3. Modules reusable. Dev and prod configs differ correctly." }
    ],
    project: null
  },
  {
    week: 8, phase: 3,
    title: "CI/CD Pipelines & Elastic Beanstalk",
    gapBadges: [],
    objectives: [
      "Deploy quickly with Elastic Beanstalk",
      "Configure CodeBuild, CodeDeploy, CodePipeline",
      "Create end-to-end CI/CD: GitHub → Build → Test → Deploy"
    ],
    services: ["Elastic Beanstalk", "CodeBuild", "CodeDeploy", "CodePipeline", "ECR"],
    resources: [
      { name: "CodePipeline Guide", url: "https://docs.aws.amazon.com/codepipeline/latest/userguide/" },
      { name: "Elastic Beanstalk Guide", url: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/" }
    ],
    prompts: [
      { title: "Beanstalk Deployments", prompt: `Explain Elastic Beanstalk deployment strategies: All-at-once, Rolling, Rolling with batch, Immutable, Blue/Green. Pizza delivery analogy. Comparison table with downtime, rollback speed, cost.` },
      { title: "CI/CD Pipeline Design", prompt: `Design CI/CD for ShopStream: 1) GitHub source, 2) CodeBuild tests + Docker build, 3) Push to ECR, 4) Deploy to ECS. Give me buildspec.yml and all configs.` }
    ],
    labs: [
      { id: "lab-8-1", title: "Deploy on Elastic Beanstalk", duration: "25 min", difficulty: "Intermediate",
        steps: ["Create Flask app.py + requirements.txt", "Zip into shopstream-app.zip", "Elastic Beanstalk → Create Application → Python platform", "Upload zip, single instance (Free Tier)", "Test the EB URL → see JSON response"],
        verify: "EB URL returns your API response." },
      { id: "lab-8-2", title: "CodeBuild Project", duration: "25 min", difficulty: "Intermediate",
        steps: ["Create GitHub repo with app + buildspec.yml", "buildspec: install deps, run tests, echo success", "CodeBuild → Create Project → GitHub source", "Start Build → watch logs"],
        verify: "Build succeeds with green status." },
      { id: "lab-8-3", title: "End-to-End CI/CD Pipeline", duration: "40 min", difficulty: "Advanced",
        steps: ["CodePipeline → Create: shopstream-pipeline", "Source: GitHub, Build: CodeBuild, Deploy: Elastic Beanstalk", "Push a code change → watch auto-trigger", "Verify new code deployed automatically"],
        verify: "Git push auto-deploys to production." }
    ],
    project: { id: "proj-cicd", title: "Full CI/CD Pipeline (TaskTracker)",
      description: "GitHub → CodeBuild → ECR → ECS Fargate end-to-end pipeline.",
      prompt: `Build complete CI/CD for 'TaskTracker' Node.js app:\n1. Source: GitHub\n2. CodeBuild: tests + Docker image\n3. Push to ECR\n4. Deploy to ECS Fargate\nGive me Dockerfile, buildspec.yml, task definition, pipeline setup.`,
      dummyData: `const tasks = [\n  {id:1, title:"Set up VPC", status:"done"},\n  {id:2, title:"Configure RDS", status:"in-progress"},\n  {id:3, title:"Deploy Lambda", status:"todo"}\n];` }
  },
  {
    week: 9, phase: 3,
    title: "Containers — Docker, ECS, EKS",
    gapBadges: [],
    objectives: [
      "Build Docker containers and push to ECR",
      "Deploy on ECS with Fargate",
      "Set up EKS (Kubernetes on AWS)",
      "Understand service discovery and task placement"
    ],
    services: ["Docker", "ECR", "ECS", "EKS", "Fargate"],
    resources: [
      { name: "ECS Guide", url: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/" },
      { name: "EKS Guide", url: "https://docs.aws.amazon.com/eks/latest/userguide/" }
    ],
    prompts: [
      { title: "Docker, ECS & EKS", prompt: `Explain Docker, ECS, and EKS like I'm 10, then like a senior engineer. When to use Fargate vs EC2 launch type vs EKS? I have 5 microservices — which to choose?` },
      { title: "ECS Fargate Deploy", prompt: `Deploy a 3-container app on ECS Fargate: web frontend, API backend, Redis cache. Include task definitions, service configs, ALB setup.` }
    ],
    labs: [
      { id: "lab-9-1", title: "Docker → ECR → ECS Fargate", duration: "45 min", difficulty: "Advanced",
        steps: ["Create Dockerfile for Node.js app", "Build and test: docker build && docker run -p 3000:3000", "Create ECR repo, authenticate, tag, push", "ECS → Create Fargate Cluster → Task Definition → Service", "Attach to ALB → access via DNS"],
        verify: "API responds from ECS Fargate behind ALB." },
      { id: "lab-9-2", title: "EKS Cluster & Kubernetes Deploy", duration: "60 min", difficulty: "Advanced",
        steps: ["Install eksctl, create cluster (15-20 min)", "kubectl get nodes → verify workers", "Create deployment.yaml (3 replicas) + service.yaml (LoadBalancer)", "kubectl apply → kubectl get svc → note external IP", "⚠️ DELETE cluster immediately after: eksctl delete cluster"],
        verify: "App running on Kubernetes. Cluster deleted to avoid charges." }
    ],
    project: null
  },
  // ═══════════════ PHASE 4: ARCHITECTURE, SECURITY & MIGRATION (Weeks 10-12) ═══════════════
  {
    week: 10, phase: 4, phaseTitle: "ARCHITECTURE, SECURITY & MIGRATION",
    title: "Security, Well-Architected & Multi-Account Strategy",
    gapBadges: ["MULTI-ACCOUNT", "ORGANIZATIONS"],
    objectives: [
      "Implement WAF, Shield, GuardDuty, Inspector",
      "Master 6 pillars of Well-Architected Framework",
      "Design enterprise multi-account strategy with AWS Organizations",
      "Write Service Control Policies (SCPs) for governance"
    ],
    services: ["WAF", "Shield", "GuardDuty", "Inspector", "Organizations", "Control Tower", "SCPs"],
    resources: [
      { name: "Well-Architected Framework", url: "https://aws.amazon.com/architecture/well-architected" },
      { name: "AWS Organizations Guide", url: "https://docs.aws.amazon.com/organizations/latest/userguide/" }
    ],
    prompts: [
      { title: "Well-Architected Framework", prompt: `All 6 pillars with real ShopStream examples. For each: 3 actions + 1 anti-pattern.` },
      { title: "Multi-Account Strategy", prompt: `Design multi-account for 'CloudCorp' (50 engineers):\n- Management, Security, Shared Services, Dev/Staging/Prod accounts\n- SCPs: prevent disabling CloudTrail, block unapproved regions, block public S3\nGive me OU structure and SCP JSON.` },
      { title: "Disaster Recovery", prompt: `Design DR for ShopStream. RPO: 1 hour, RTO: 4 hours. Cover: RDS backups, S3 cross-region, Route 53 failover, multi-region architecture.` }
    ],
    labs: [
      { id: "lab-10-1", title: "WAF & GuardDuty", duration: "25 min", difficulty: "Intermediate",
        steps: ["WAF → Create Web ACL with Core Rule Set + SQL Injection rules", "Associate with ALB, test SQL injection → blocked", "Enable GuardDuty → generate sample findings → review severity"],
        verify: "WAF blocks attacks. GuardDuty shows threat findings." },
      { id: "lab-10-2", title: "AWS Organizations & SCPs", duration: "30 min", difficulty: "Advanced",
        steps: ["Create Organization, create OUs: Security, Workloads, Sandbox", "Write SCP: deny disabling CloudTrail", "Write SCP: deny launching outside us-east-1/eu-west-1", "Write SCP: deny public S3 bucket policies", "Attach SCPs to Workloads OU → test restrictions"],
        verify: "SCPs block restricted actions in member accounts." }
    ],
    project: { id: "proj-backup", title: "AWS Backup & Recovery (Project 13)",
      description: "Automated backups with cross-region copies and compliance monitoring.",
      prompt: `Build Project 13: AWS Backup for ShopStream.\n1. Daily backups of EC2, EBS, EFS, RDS\n2. Retention: 7 daily, 4 weekly\n3. Cross-region copy to eu-west-1\n4. DR test: restore in different region\n5. Backup Audit Manager compliance framework` }
  },
  {
    week: 11, phase: 4,
    title: "Migration Strategies & DMS",
    gapBadges: [],
    objectives: ["Understand 7 Rs of migration", "Use DMS and SCT for database migration", "Migrate monolith to microservices"],
    services: ["Migration Hub", "DMS", "SCT", "Application Migration Service"],
    resources: [{ name: "DMS Guide", url: "https://docs.aws.amazon.com/dms/latest/userguide/" }],
    prompts: [
      { title: "7 Rs of Migration", prompt: `Explain 7 Rs with examples. 'RetailMax' has: Java monolith, Oracle DB, file server, reporting tool, PHP site. Which R for each?` },
      { title: "DMS End-to-End", prompt: `Walk through DMS: migrate PostgreSQL to Aurora. Cover: replication instance, endpoints, task, validation. Include dummy schema.` }
    ],
    labs: [
      { id: "lab-11-1", title: "Database Migration with DMS", duration: "60 min", difficulty: "Advanced",
        steps: ["Create SOURCE RDS MySQL with retail data", "Create TARGET Aurora PostgreSQL (empty)", "DMS → Replication Instance → Source/Target Endpoints", "Migration Task: Full load + CDC → start and monitor", "Verify data in target"],
        verify: "All tables migrated to Aurora successfully." }
    ],
    project: { id: "proj-micro", title: "Monolith to Microservices (Project 5)",
      description: "Decompose monolith into 4 microservices on ECS with SQS.",
      prompt: `Build Project 5: 'FoodRunner' monolith → 4 microservices (auth, restaurants, orders, delivery) on ECS with ALB path routing + SQS async messaging. All Dockerfiles and code.` }
  },
  {
    week: 12, phase: 4,
    title: "Host Real Applications on AWS",
    gapBadges: [],
    objectives: ["Host static sites (S3+CloudFront)", "Deploy dynamic sites (LAMP)", "Containerized apps with GitHub Actions CI/CD"],
    services: ["S3", "CloudFront", "Route 53", "ECS", "GitHub Actions"],
    resources: [{ name: "S3 Static Hosting", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html" }],
    prompts: [
      { title: "Portfolio on AWS", prompt: `Host my portfolio on AWS: S3 static hosting, CloudFront CDN, Route 53 DNS, Lambda contact form, SES emails. Complete step-by-step.` }
    ],
    labs: [
      { id: "lab-12-1", title: "Host Static Website", duration: "25 min", difficulty: "Beginner",
        steps: ["Create S3 bucket with static hosting", "Upload portfolio HTML, set bucket policy", "Create CloudFront distribution → S3 origin"],
        verify: "Portfolio loads via CloudFront with HTTPS." },
      { id: "lab-12-2", title: "ECS Deploy with GitHub Actions", duration: "45 min", difficulty: "Advanced",
        steps: ["Create .github/workflows/deploy.yml", "Configure AWS secrets, build/push to ECR", "Update ECS service on push to main", "Test: push change → watch auto-deploy"],
        verify: "Git push auto-deploys to ECS." }
    ],
    project: { id: "proj-webapp", title: "Deploy Web App with GitHub Actions (Project 14)",
      description: "Full CI/CD from GitHub to ECS Fargate.",
      prompt: `Build Project 14: React + Node.js on ECS with GitHub Actions CI/CD, ECR, ALB. All files and setup.` }
  },
  // ═══════════════ PHASE 5: ADVANCED PROJECTS (Weeks 13-15) ═══════════════
  {
    week: 13, phase: 5, phaseTitle: "ADVANCED PROJECTS & MASTERY",
    title: "Netflix Clone, DevSecOps & Advanced K8s",
    gapBadges: [],
    objectives: ["Deploy Netflix Clone on EKS", "Implement DevSecOps pipelines with security scanning", "Build end-to-end Kubernetes projects"],
    services: ["EKS", "Docker", "Ingress", "HPA", "WAF", "Trivy"],
    resources: [{ name: "EKS Best Practices", url: "https://aws.github.io/aws-eks-best-practices/" }],
    prompts: [
      { title: "Netflix Clone on EKS", prompt: `Deploy Netflix Clone on EKS: React frontend, Node.js backend, K8s manifests, HPA, Container Insights. All code and YAML.` },
      { title: "DevSecOps Pipeline", prompt: `Zomato clone with DevSecOps: GitHub Actions, SonarQube, Trivy container scanning, OWASP ZAP, deploy to ECS with WAF. Full workflow.` }
    ],
    labs: [
      { id: "lab-13-1", title: "Netflix Clone on EKS", duration: "90 min", difficulty: "Advanced",
        steps: ["Create EKS cluster, build frontend + backend containers", "Push to ECR, create K8s deployments (3 replicas each)", "Configure services, ingress controller, HPA at 50% CPU", "Enable Container Insights → ⚠️ DELETE cluster when done!"],
        verify: "Netflix clone accessible via ingress with auto-scaling." }
    ],
    project: { id: "proj-netflix", title: "Full K8s Microservices (Project 19)",
      description: "ShopStream microservices on EKS with full K8s resource set.",
      prompt: `Deploy ShopStream on EKS: Frontend, Product Service, Order Service, Payment Mock, MongoDB. Include deployments, services, ConfigMaps, Secrets, Ingress, HPA, PVCs. All YAML.` }
  },
  {
    week: 14, phase: 5,
    title: "Cost Optimization, FinOps & Automation",
    gapBadges: ["FINOPS"],
    objectives: ["Master FinOps practices and cost optimization", "Automate resource cleanup with Lambda + EventBridge", "Implement tagging compliance", "Use Compute Optimizer for right-sizing"],
    services: ["Cost Explorer", "Trusted Advisor", "Compute Optimizer", "Lambda", "EventBridge", "Budgets"],
    resources: [
      { name: "Cost Optimization Pillar", url: "https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/" },
      { name: "FinOps Foundation", url: "https://www.finops.org/framework/" }
    ],
    prompts: [
      { title: "FinOps & Cost Audit", prompt: `I spend $500/month on AWS. Audit and optimize:\n1. Find unused resources (EBS, idle EC2, old snapshots)\n2. Right-size with Compute Optimizer\n3. Reserved Instances vs Savings Plans\n4. Weekly cost report via SES\n5. FinOps: showback/chargeback, unit economics per customer\nGive me all Lambda functions, EventBridge rules, FinOps dashboard design.` }
    ],
    labs: [
      { id: "lab-14-1", title: "Cost Automation & FinOps", duration: "45 min", difficulty: "Advanced",
        steps: ["Create Lambda: delete unused EBS volumes (with 'keep' tag safety)", "Create Lambda: tag compliance checker (Environment, Team, CostCenter)", "Create Lambda: right-size EC2 where CPU < 10% for 14 days", "Schedule all with EventBridge (weekly/nightly)", "Enable Compute Optimizer → review recommendations", "Build CloudWatch dashboard for cost per team/environment"],
        verify: "Automations running. Non-compliant resources tagged. Cost dashboard live." }
    ],
    project: { id: "proj-cost", title: "AWS Automation & Cost Optimization (Project 12)",
      description: "Complete automated resource cleanup, right-sizing, and FinOps reporting.",
      prompt: `Build Project 12: Full cost automation.\n1. Delete unused EBS\n2. Tag compliance enforcement\n3. Right-sizing recommendations\n4. Weekly SES cost report with charts\n5. Cost Explorer API FinOps dashboard\nAll code, IAM policies, EventBridge rules.` }
  },
  {
    week: 15, phase: 5,
    title: "AWS CDK, GitOps & Advanced IaC",
    gapBadges: ["CDK", "GITOPS", "ARGOCD"],
    objectives: [
      "Build infrastructure with AWS CDK in Python",
      "Compare CDK vs Terraform vs CloudFormation (you know all 3 now)",
      "Implement GitOps with ArgoCD on EKS",
      "Understand modern K8s deployment patterns"
    ],
    services: ["AWS CDK", "Terraform (review)", "ArgoCD", "EKS", "GitHub"],
    resources: [
      { name: "AWS CDK Workshop", url: "https://cdkworkshop.com/" },
      { name: "ArgoCD Docs", url: "https://argo-cd.readthedocs.io/" },
      { name: "CDK API Reference", url: "https://docs.aws.amazon.com/cdk/api/v2/" }
    ],
    prompts: [
      { title: "AWS CDK in Python", prompt: `Teach me CDK with Python. I know CloudFormation and Terraform. Cover:\n1. App, Stack, Construct, L1/L2/L3 constructs\n2. cdk init → build same 3-tier architecture from Week 3\n3. cdk synth (see generated CFn), deploy, destroy\n4. When to choose Terraform vs CDK vs CloudFormation\nGive me complete Python code and line-by-line CFn comparison.` },
      { title: "GitOps with ArgoCD", prompt: `Explain GitOps + ArgoCD for EKS:\n1. What GitOps is vs traditional CI/CD\n2. Install ArgoCD on EKS cluster\n3. ArgoCD Application watching GitHub repo\n4. Auto-sync: push to main → auto-deploy to K8s\n5. Rollback: revert commit → auto-rollback\nDesign GitOps for ShopStream microservices.` }
    ],
    labs: [
      { id: "lab-15-1", title: "AWS CDK: 3-Tier Architecture", duration: "40 min", difficulty: "Advanced",
        steps: ["npm install -g aws-cdk, cdk init app --language python", "pip install constructs, build VPC + ALB + ASG + RDS in Python", "cdk synth → review the CloudFormation it generates", "cdk deploy → watch stack creation", "Compare: CDK Python vs Terraform HCL vs CloudFormation YAML", "cdk destroy when done"],
        verify: "CDK deploys same 3-tier arch. You can compare all 3 IaC tools." },
      { id: "lab-15-2", title: "Terraform Multi-Environment Project", duration: "45 min", difficulty: "Advanced",
        steps: ["Create production Terraform: modules/vpc, modules/ecs, modules/rds", "Remote state: S3 + DynamoDB per environment", "Create dev.tfvars (t3.micro, single-AZ) and prod.tfvars (t3.large, multi-AZ)", "GitHub Actions: terraform plan on PR, apply on merge", "Destroy both environments when done"],
        verify: "Dev and prod deploy from same modules with different configs." }
    ],
    project: { id: "proj-terraform", title: "Multi-Environment Terraform + CDK",
      description: "Production Terraform with modules, remote state, CI/CD, and CDK comparison.",
      prompt: `Build production Terraform for ShopStream:\n1. Modules: vpc, ecs, rds, alb, monitoring\n2. Environments: dev (small) and prod (HA)\n3. Remote state S3 + DynamoDB per env\n4. GitHub Actions: plan on PR, apply on merge\n5. BONUS: Same arch in CDK Python for comparison\nGive me complete directory structure, all .tf files, CDK code, and GitHub Actions.`,
      dummyData: `# dev.tfvars\nenvironment = "dev"\ninstance_type = "t3.micro"\nmulti_az = false\n\n# prod.tfvars\nenvironment = "prod"\ninstance_type = "t3.large"\nmulti_az = true` }
  },
  // ═══════════════ PHASE 6: AI/ML & CAREER LAUNCH (Weeks 16-18) ═══════════════
  {
    week: 16, phase: 6, phaseTitle: "AI/ML & CAREER LAUNCH",
    title: "AWS AI/ML — Bedrock, SageMaker & GenAI",
    gapBadges: ["AI/ML", "BEDROCK", "SAGEMAKER"],
    objectives: [
      "Understand all AWS AI/ML services and when to use each",
      "Build a GenAI application with Amazon Bedrock + RAG",
      "Explore SageMaker for custom ML models",
      "Prepare for the AWS AI Practitioner certification"
    ],
    services: ["Bedrock", "SageMaker", "Rekognition", "Comprehend", "Textract", "Polly", "Transcribe"],
    resources: [
      { name: "Amazon Bedrock Guide", url: "https://docs.aws.amazon.com/bedrock/latest/userguide/" },
      { name: "SageMaker Getting Started", url: "https://docs.aws.amazon.com/sagemaker/latest/dg/" },
      { name: "AWS AI Practitioner Cert", url: "https://aws.amazon.com/certification/certified-ai-practitioner/" }
    ],
    prompts: [
      { title: "AWS AI/ML Services Map", prompt: `Map ALL AWS AI/ML services:\n1. Pre-trained (no ML needed): Rekognition, Comprehend, Polly, Transcribe, Translate, Textract, Lex\n2. ML Platform: SageMaker (Studio, Canvas, Autopilot, endpoints)\n3. GenAI: Bedrock (foundation models, RAG, agents, guardrails)\nFor each: what it does, use case, pricing. Which cert should I get?` },
      { title: "Build with Bedrock", prompt: `Build a GenAI chatbot for CloudBrew Coffee using Bedrock:\n- Claude model via Bedrock API\n- RAG Knowledge Base with S3 product FAQs\n- Lambda backend calling invoke_model\n- API Gateway REST endpoint\n- Guardrails: block PII, limit to coffee/orders topics\nAll code: Lambda function, RAG setup, guardrails config.` }
    ],
    labs: [
      { id: "lab-16-1", title: "AWS AI Services Hands-On Tour", duration: "35 min", difficulty: "Intermediate",
        steps: ["Rekognition Console → upload photo → detect labels, faces, text", "Comprehend → paste customer review → sentiment analysis", "Textract → upload receipt → extract text and tables", "Polly → convert text to speech → download MP3", "Transcribe → upload audio → get transcription", "Discuss: which services would you add to ShopStream?"],
        verify: "You've used 5 AI services and understand when to use each." },
      { id: "lab-16-2", title: "Amazon Bedrock: GenAI Chatbot", duration: "60 min", difficulty: "Advanced",
        steps: ["Bedrock → Model access → request Claude model", "Bedrock Playground → test prompts", "Create Knowledge Base: upload coffee FAQs to S3", "Bedrock → Knowledge Bases → Create with S3 data source", "Test RAG: ask product questions → Bedrock answers from docs", "Create Lambda calling bedrock-runtime invoke_model with boto3", "Create API Gateway → Lambda → Bedrock", "Test: curl your API with questions", "Optional: add Guardrails for off-topic blocking"],
        verify: "Chatbot answers coffee questions using RAG from your knowledge base." }
    ],
    project: { id: "proj-aiml", title: "AI-Powered CloudBrew Chatbot",
      description: "Bedrock + RAG chatbot with Lambda, API Gateway, and guardrails.",
      prompt: `Build CloudBrew Coffee AI Chatbot:\n- Bedrock with Claude + RAG Knowledge Base (S3 product docs)\n- Lambda backend with boto3 bedrock-runtime\n- API Gateway REST endpoint\n- Guardrails: block non-coffee topics, mask PII\n- CloudFormation template for infrastructure\n- Simple React chat interface\nAll code and setup.`,
      dummyData: `# Knowledge Base Documents\nQ: What roasts do you offer?\nA: Light (Ethiopian Yirgacheffe), Medium (Colombian Supremo), Dark (Sumatra Mandheling).\n\nQ: Shipping cost?\nA: Free over $35. Standard $5.99.\n\nETH-001: Ethiopian Yirgacheffe, Light, 12oz, $18.99\nCOL-001: Colombian Supremo, Medium, 12oz, $15.99\nGRIND-001: Burr Grinder Pro, 40 settings, $89.99` }
  },
  {
    week: 17, phase: 6,
    title: "Cloud Resume Challenge & Capstone Project",
    gapBadges: ["CLOUD RESUME CHALLENGE"],
    objectives: [
      "Build the Cloud Resume Challenge — #1 portfolio project for hiring managers",
      "Build your full-stack capstone: CloudBrew Coffee e-commerce",
      "Demonstrate ALL 16 weeks of skills in one project"
    ],
    services: ["S3", "CloudFront", "Route 53", "Lambda", "DynamoDB", "API Gateway", "CloudFormation", "GitHub Actions", "Cognito", "SQS", "SES"],
    resources: [
      { name: "Cloud Resume Challenge", url: "https://cloudresumechallenge.dev/" },
      { name: "AWS Architecture Center", url: "https://aws.amazon.com/architecture/" }
    ],
    prompts: [
      { title: "Cloud Resume Challenge", prompt: `Build the Cloud Resume Challenge on AWS:\n1. HTML/CSS resume on S3 with CloudFront HTTPS\n2. Custom domain via Route 53\n3. Visitor counter: JavaScript → API Gateway → Lambda (Python/boto3) → DynamoDB\n4. IaC: CloudFormation OR Terraform for all backend resources\n5. CI/CD: GitHub Actions auto-deploy on push\n6. Python tests for Lambda\nGive me EVERYTHING: HTML, Lambda code, IaC template, GitHub Actions workflow.` },
      { title: "Capstone: CloudBrew Coffee", prompt: `Build 'CloudBrew Coffee' full-stack e-commerce:\n- React frontend on S3 + CloudFront\n- API Gateway + Lambda (serverless)\n- DynamoDB (products) + RDS (orders)\n- Cognito auth, S3 product images\n- SQS order queue, SNS+SES notifications\n- CloudWatch dashboards\n- Terraform for infrastructure\n- GitHub Actions CI/CD\n- WAF + KMS encryption\nAll code, templates, deployment instructions.` }
    ],
    labs: [
      { id: "lab-17-1", title: "Cloud Resume Challenge", duration: "120 min", difficulty: "Advanced",
        steps: ["Create HTML/CSS resume with your AWS projects list", "S3 bucket + static hosting + CloudFront distribution", "DynamoDB table: visitor-count, pk='visitors'", "Lambda (Python/boto3): increment and return count", "API Gateway → Lambda integration", "JavaScript in resume calls API, displays count", "Create Terraform/CloudFormation for all backend", "GitHub Actions: on push → sync S3 → invalidate CloudFront", "Write Python pytest for Lambda function", "Push to GitHub → verify auto-deploy works"],
        verify: "Resume live with working visitor counter. Auto-deploys on git push." },
      { id: "lab-17-2", title: "CloudBrew Capstone — Core Build", duration: "180 min", difficulty: "Advanced",
        steps: ["Terraform: VPC + DynamoDB + RDS + S3 + Cognito + API Gateway", "Lambda functions: getProducts, createOrder, processPayment (boto3)", "SQS queue between order creation and fulfillment Lambda", "SNS topic → SES email for order confirmation", "React frontend calling your API (Cognito auth)", "Deploy frontend to S3+CloudFront", "CloudWatch dashboard: orders/min, latency, errors", "GitHub Actions: frontend → S3, backend → Lambda update"],
        verify: "Full e-commerce app working end-to-end with monitoring." }
    ],
    project: { id: "proj-capstone", title: "CloudBrew Coffee Full-Stack Capstone",
      description: "Complete e-commerce demonstrating ALL AWS skills from 17 weeks.",
      prompt: `Build my capstone combining everything:\nReact + S3 + CloudFront + API Gateway + Lambda + DynamoDB + RDS + Cognito + SQS + SES + CloudWatch + Terraform + GitHub Actions + WAF + KMS\nThis is my portfolio centerpiece. Complete code and architecture.`,
      dummyData: `{\n  "products": [\n    {"id":"BEAN-001","name":"Ethiopian Yirgacheffe","price":18.99,"roast":"Light"},\n    {"id":"BEAN-002","name":"Colombian Supremo","price":15.99,"roast":"Medium"},\n    {"id":"EQUIP-001","name":"Pour Over Dripper","price":29.99},\n    {"id":"SUB-001","name":"Monthly Bean Box","price":24.99}\n  ]\n}` }
  },
  {
    week: 18, phase: 6,
    title: "Certification Prep & Interview Mastery",
    gapBadges: ["INTERVIEW PREP", "SYSTEM DESIGN"],
    objectives: [
      "Prepare for all 6 AWS certifications with targeted study",
      "Master AWS system design interview questions",
      "Practice whiteboard architecture exercises",
      "Build your interview portfolio from 18 weeks of projects",
      "Behavioral interview prep with STAR method"
    ],
    services: ["All Services — Exam Review"],
    resources: [
      { name: "AWS Skill Builder", url: "https://skillbuilder.aws" },
      { name: "AWS Certification", url: "https://aws.amazon.com/certification/" },
      { name: "AWS Architecture Center", url: "https://aws.amazon.com/architecture/" }
    ],
    prompts: [
      { title: "SAA-C03 Practice (20 Qs)", prompt: `Give me 20 scenario-based AWS Solutions Architect Associate questions covering: VPC, S3, EC2+ALB, RDS, Lambda, cost optimization. Explain every answer.` },
      { title: "Mock Cloud Practitioner Exam", prompt: `Simulate a 30-question mock CCP exam. Ask one at a time, wait for my answer, give score and domain breakdown at the end.` },
      { title: "System Design Interview", prompt: `Give me 10 AWS system design interview questions with complete answers:\n1. URL shortener (API GW + Lambda + DynamoDB + CloudFront)\n2. Real-time notifications (EventBridge + SNS + SQS + WebSocket)\n3. Multi-region e-commerce (Route 53 + Aurora Global)\n4. Video streaming platform\n5. IoT data pipeline\n6. CI/CD pipeline design\n7. Cost optimization exercise\n8. Security incident response\n9. On-prem migration plan\n10. Serverless data lake\nFor each: requirements → design → services → trade-offs → follow-up Qs.` },
      { title: "Behavioral Interview (STAR)", prompt: `Help me craft STAR answers using my bootcamp projects:\n1. "Tell me about debugging a complex issue" → use 3-tier architecture\n2. "Learned new tech quickly" → use Terraform + Kubernetes week\n3. "Handled a security issue" → use WAF/GuardDuty project\n4. "Optimized costs" → use FinOps automation project\n5. "Architecture disagreement" → use CloudFormation vs Terraform decision\nMake them specific and impressive.` },
      { title: "Top 50 Services Review", prompt: `Rapid-fire review of 50 AWS services for the SAA-C03 exam. For each: one-sentence description, when to use it, one exam gotcha.` }
    ],
    labs: [
      { id: "lab-18-1", title: "System Design Whiteboard Practice", duration: "90 min", difficulty: "Advanced",
        steps: ["EXERCISE 1: URL shortener → API GW + Lambda + DynamoDB + CloudFront", "  5 min requirements, 15 min design, 10 min trade-offs", "EXERCISE 2: Real-time notifications → EventBridge + SNS + SQS fan-out", "  Discuss: at-least-once delivery, DLQs, scaling", "EXERCISE 3: Multi-region active-active → Route 53 + Aurora Global DB", "  Discuss: data consistency, conflict resolution, failover", "Ask Claude to review each design and suggest improvements"],
        verify: "You can whiteboard 3 architectures with trade-off discussions." },
      { id: "lab-18-2", title: "Build Interview Portfolio Document", duration: "60 min", difficulty: "Intermediate",
        steps: ["List ALL projects from 18 weeks with services used", "For each project, write 3-sentence 'interview-ready' description", "Include: what you built, what AWS services, what you learned", "Highlight: Terraform, Kubernetes, Bedrock AI, CI/CD — the differentiators", "Format as clean document you can share with recruiters", "Update LinkedIn with AWS skills and project descriptions", "Add Cloud Resume Challenge URL to resume"],
        verify: "Portfolio document ready. LinkedIn updated. Resume live on AWS." }
    ],
    project: { id: "proj-interview", title: "Interview Portfolio + Mock Exam Blitz",
      description: "Complete interview portfolio and certification practice exam marathon.",
      prompt: `Create my final deliverables:\n\nPART 1 — Interview Portfolio:\nSummarize ALL 18 weeks of projects with interview-ready descriptions:\n- 3-Tier Architecture, CI/CD Pipeline, Kubernetes, Terraform, Bedrock AI Chatbot, Cloud Resume Challenge, FinOps Automation, CloudBrew Capstone\nFor each: 3-sentence STAR-ready description.\n\nPART 2 — Certification Study Guide:\n- CCP: 50 key facts flash cards\n- SAA: 10 hardest scenario questions with detailed answers\n- DVA: Lambda + API Gateway + DynamoDB gotchas\n- DevOps Pro: CI/CD + IaC deep questions\n- Security: KMS + IAM + VPC security scenarios\n- AI Practitioner: Bedrock + SageMaker + responsible AI\n\nFormat as a comprehensive study document.` }
  }
];

const PHASES = [
  { num: 1, title: "FOUNDATIONS", weeks: "1–3", color: "#FF9900", icon: "🏗️" },
  { num: 2, title: "NETWORKING, DATABASES & MONITORING", weeks: "4–6", color: "#1A73E8", icon: "🌐" },
  { num: 3, title: "IaC & DEVOPS", weeks: "7–9", color: "#00C853", icon: "⚙️" },
  { num: 4, title: "ARCHITECTURE, SECURITY & MIGRATION", weeks: "10–12", color: "#E040FB", icon: "🛡️" },
  { num: 5, title: "ADVANCED PROJECTS & MASTERY", weeks: "13–15", color: "#FF5252", icon: "🚀" },
  { num: 6, title: "AI/ML & CAREER LAUNCH", weeks: "16–18", color: "#00BCD4", icon: "🧠" }
];

const CERTS = [
  { name: "Cloud Practitioner", code: "CLF-C02", weeks: "1-3", icon: "🏅" },
  { name: "Solutions Architect Associate", code: "SAA-C03", weeks: "1-12, 15", icon: "🏆" },
  { name: "Developer Associate", code: "DVA-C02", weeks: "5-9, 15", icon: "💻" },
  { name: "DevOps Engineer Professional", code: "DOP-C02", weeks: "7-9, 15", icon: "🚀" },
  { name: "Security Specialty", code: "SCS-C02", weeks: "6, 10", icon: "🛡️" },
  { name: "AI Practitioner", code: "AIF-C01", weeks: "16", icon: "🧠" }
];

const GAP_INFUSIONS = [
  { gap: "Linux Fundamentals", where: "Week 1", why: "You SSH into EC2 immediately — need Linux NOW, not later", severity: "critical" },
  { gap: "Bash Scripting", where: "Week 3", why: "User Data scripts ARE Bash — teach it when you first write it", severity: "critical" },
  { gap: "Python / boto3", where: "Week 5", why: "First Lambda function is Python — learn boto3 at that moment", severity: "critical" },
  { gap: "Terraform", where: "Week 7", why: "Side-by-side with CloudFormation — compare while IaC is fresh", severity: "critical" },
  { gap: "AI/ML (Bedrock, SageMaker)", where: "Week 16", why: "After mastering serverless — build GenAI on top of Lambda skills", severity: "critical" },
  { gap: "Step Functions + EventBridge", where: "Week 5", why: "Part of serverless — learn with Lambda, not separately", severity: "important" },
  { gap: "Secrets Manager + SSM", where: "Week 6", why: "Security week — secrets belong with monitoring & security", severity: "important" },
  { gap: "X-Ray Tracing", where: "Week 6", why: "Observability with CloudWatch — complete the monitoring picture", severity: "important" },
  { gap: "Multi-Account / Organizations", where: "Week 10", why: "Enterprise security — pairs with Well-Architected Framework", severity: "important" },
  { gap: "AWS CDK", where: "Week 15", why: "After CloudFormation (W7) + Terraform (W7) — now compare all 3", severity: "edge" },
  { gap: "GitOps / ArgoCD", where: "Week 15", why: "After EKS (W9) + CI/CD (W8) — modern K8s deployment patterns", severity: "edge" },
  { gap: "Cloud Resume Challenge", where: "Week 17", why: "Capstone area — ties together S3, Lambda, DynamoDB, IaC, CI/CD", severity: "edge" },
  { gap: "FinOps Practices", where: "Week 14", why: "Enhanced cost week with real FinOps frameworks", severity: "edge" },
  { gap: "Interview Prep + System Design", where: "Week 18", why: "Final week — everything learned, now practice presenting it", severity: "edge" }
];

function App() {
  const [progress, setProgress] = useState({});
  const [activeWeek, setActiveWeek] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [copiedId, setCopiedId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("dashboard");
  const [expandedLab, setExpandedLab] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("aws-mastery-progress");
      if (saved) setProgress(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  const save = useCallback((p) => {
    setProgress(p);
    try { localStorage.setItem("aws-mastery-progress", JSON.stringify(p)); } catch {}
  }, []);

  const toggle = useCallback((id) => save({ ...progress, [id]: !progress[id] }), [progress, save]);
  const copy = useCallback((text, id) => { navigator.clipboard.writeText(text); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); }, []);

  const tLabs = WEEKS.reduce((s, w) => s + w.labs.length, 0);
  const cLabs = WEEKS.reduce((s, w) => s + w.labs.filter(l => progress[l.id]).length, 0);
  const tProj = WEEKS.filter(w => w.project).length;
  const cProj = WEEKS.filter(w => w.project && progress[w.project.id]).length;
  const pct = tLabs + tProj > 0 ? Math.round(((cLabs + cProj) / (tLabs + tProj)) * 100) : 0;

  if (!loaded) return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0e1a", color: "#FF9900", fontFamily: "monospace" }}><div style={{ textAlign: "center" }}><div style={{ fontSize: 40, marginBottom: 16 }}>⚡</div>Initializing...</div></div>;

  const sel = activeWeek !== null ? WEEKS[activeWeek] : null;
  const ph = sel ? PHASES.find(p => p.num === sel.phase) : null;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0e1a", color: "#e2e8f0", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=DM+Sans:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#0f1424}::-webkit-scrollbar-thumb{background:#2a3352;border-radius:3px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideIn{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
        .cd{background:#111827;border:1px solid #1e293b;border-radius:12px;transition:all .2s}.cd:hover{border-color:#334155}
        .bt{border:none;cursor:pointer;border-radius:8px;font-family:inherit;font-weight:600;transition:all .15s}.bt:active{transform:scale(.97)}
        .tg{display:inline-block;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;letter-spacing:.5px}
        .ck{width:22px;height:22px;border-radius:6px;border:2px solid #334155;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;flex-shrink:0}.ck.dn{background:#FF9900;border-color:#FF9900}.ck:hover{border-color:#FF9900}
        .tb{padding:10px 16px;border-radius:8px;border:none;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;transition:all .15s;background:transparent;color:#64748b;white-space:nowrap}.tb:hover{color:#e2e8f0;background:#1e293b}.tb.ac{background:#FF9900;color:#0a0e1a}
        .gb{font-size:9px;padding:2px 7px;border-radius:10px;font-weight:700;letter-spacing:.5px;display:inline-block;margin-left:4px}
        .gc{background:#ef444430;color:#ef4444}.gi{background:#FF990030;color:#FF9900}.ge{background:#00BCD430;color:#00BCD4}
      `}</style>

      <div style={{ background: "linear-gradient(135deg,#0f1424,#1a1f3a)", borderBottom: "1px solid #1e293b", padding: "14px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, background: "linear-gradient(135deg,#FF9900,#FF6600)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#0a0e1a" }}>⚡</div>
            <div><div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>AWS Cloud Mastery</div><div style={{ fontSize: 11, color: "#64748b" }}>18 Weeks · 6 Phases · 6 Certs · All Gaps Infused</div></div>
          </div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {[["dashboard","Dashboard"],["gaps","🔥 Gap Map"],["certs","Certs"]].map(([v,l])=>(
              <button key={v} className="bt" onClick={()=>{setView(v);setActiveWeek(null)}} style={{padding:"6px 12px",background:view===v?"#FF9900":"#1e293b",color:view===v?"#0a0e1a":"#94a3b8",fontSize:12}}>{l}</button>
            ))}
            <button className="bt" onClick={async()=>{if(confirm("Reset all progress?")){setProgress({});try{localStorage.removeItem("aws-mastery-progress")}catch{}}}} style={{padding:"6px 12px",background:"#1e293b",color:"#ef4444",fontSize:12}}>Reset</button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 20px 60px" }}>

        {/* GAP MAP */}
        {view === "gaps" && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Gap Infusion Map</h2>
            <p style={{ fontSize: 12, color: "#64748b", marginBottom: 18 }}>Every gap from K21's curriculum — infused into the exact week it belongs pedagogically.</p>
            {[
              { label: "CRITICAL — Would hurt you in interviews", cls: "gc", items: GAP_INFUSIONS.filter(g=>g.severity==="critical") },
              { label: "IMPORTANT — Separates good from guru", cls: "gi", items: GAP_INFUSIONS.filter(g=>g.severity==="important") },
              { label: "COMPETITIVE EDGE — Makes you stand out", cls: "ge", items: GAP_INFUSIONS.filter(g=>g.severity==="edge") }
            ].map((group,gi)=>(
              <div key={gi} className="cd" style={{ padding: 16, marginBottom: 12, borderLeft: `3px solid ${gi===0?"#ef4444":gi===1?"#FF9900":"#00BCD4"}` }}>
                <span className={`tg ${group.cls}`} style={{ marginBottom: 10, display: "inline-block" }}>{group.label}</span>
                {group.items.map((item,i)=>(
                  <div key={i} style={{ display: "flex", gap: 10, padding: "7px 0", borderBottom: i<group.items.length-1?"1px solid #1e293b":"none" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: gi===0?"#ef4444":gi===1?"#FF9900":"#00BCD4", marginTop: 7, flexShrink: 0 }} />
                    <div>
                      <span style={{ fontWeight: 700, color: "#fff", fontSize: 13 }}>{item.gap}</span>
                      <span style={{ fontSize: 12, color: "#22c55e", marginLeft: 8 }}>→ {item.where}</span>
                      <div style={{ fontSize: 11, color: "#64748b", marginTop: 1 }}>{item.why}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* CERTS */}
        {view === "certs" && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 16 }}>6 Certifications Track</h2>
            {CERTS.map((c,i)=>(
              <div key={i} className="cd" style={{ padding: 16, marginBottom: 10, display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ fontSize: 22 }}>{c.icon}</div>
                <div style={{ flex: 1 }}><div style={{ fontWeight: 700, color: "#fff", fontSize: 14 }}>{c.name}</div><div style={{ fontSize: 12, color: "#64748b" }}>{c.code} · Weeks {c.weeks}</div></div>
              </div>
            ))}
          </div>
        )}

        {/* DASHBOARD */}
        {view === "dashboard" && !sel && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12, marginBottom: 22 }}>
              {[{ l:"Progress",v:`${pct}%`,s:`${cLabs+cProj}/${tLabs+tProj}`,bar:true },{ l:"Labs",v:`${cLabs}/${tLabs}` },{ l:"Projects",v:`${cProj}/${tProj}` },{ l:"Weeks",v:`${WEEKS.filter(w=>{const a=w.labs.every(l=>progress[l.id]);const p=!w.project||progress[w.project?.id];return w.labs.length>0?a&&p:p}).length}/18` }].map((s,i)=>(
                <div key={i} className="cd" style={{ padding: 14 }}>
                  <div style={{ fontSize: 10, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: .8, marginBottom: 4 }}>{s.l}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: i===0?"#FF9900":"#fff", fontFamily: "'JetBrains Mono',monospace" }}>{s.v}</div>
                  {s.bar && <div style={{ marginTop: 6, height: 4, background: "#1e293b", borderRadius: 2 }}><div style={{ height: "100%", background: "linear-gradient(90deg,#FF9900,#FF6600)", borderRadius: 2, width: `${pct}%`, transition: "width .5s" }} /></div>}
                </div>
              ))}
            </div>

            {PHASES.map(p=>{
              const pw=WEEKS.filter(w=>w.phase===p.num);
              return (
                <div key={p.num} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 15 }}>{p.icon}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: p.color, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'JetBrains Mono',monospace" }}>Phase {p.num} · Wk {p.weeks}</span>
                    <span style={{ fontSize: 12, color: "#64748b" }}>{p.title}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: 10 }}>
                    {pw.map(w=>{
                      const t=w.labs.length+(w.project?1:0), d=w.labs.filter(l=>progress[l.id]).length+(w.project&&progress[w.project?.id]?1:0), wp=t>0?Math.round(d/t*100):0;
                      return (
                        <div key={w.week} className="cd" onClick={()=>{setActiveWeek(w.week-1);setActiveTab("overview");setExpandedLab(null)}}
                          style={{ padding: 14, cursor: "pointer", borderLeft: `3px solid ${p.color}`, animation: `fadeUp .4s ease ${w.week*.02}s both` }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                            <div>
                              <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
                                <span style={{ fontSize: 10, fontWeight: 700, color: p.color, fontFamily: "'JetBrains Mono',monospace" }}>WK {w.week}</span>
                                {(w.gapBadges||[]).map(g=><span key={g} className={`gb ${g==="LINUX"||g==="BASH"||g==="PYTHON"||g==="TERRAFORM"||g==="AI/ML"||g==="BEDROCK"||g==="SAGEMAKER"?"gc":g==="STEP FUNCTIONS"||g==="EVENTBRIDGE"||g==="SECRETS MANAGER"||g==="SSM"||g==="X-RAY"||g==="MULTI-ACCOUNT"||g==="ORGANIZATIONS"?"gi":"ge"}`}>{g}</span>)}
                              </div>
                              <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 3, lineHeight: 1.3 }}>{w.title}</div>
                            </div>
                            <div style={{ position: "relative", width: 36, height: 36, flexShrink: 0 }}>
                              <svg width="36" height="36" style={{ transform: "rotate(-90deg)" }}>
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#1e293b" strokeWidth="3"/>
                                <circle cx="18" cy="18" r="14" fill="none" stroke={wp===100?"#22c55e":p.color} strokeWidth="3" strokeDasharray={`${2*Math.PI*14}`} strokeDashoffset={`${2*Math.PI*14*(1-wp/100)}`} strokeLinecap="round" style={{transition:"stroke-dashoffset .5s"}}/>
                              </svg>
                              <span style={{ position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:wp===100?"#22c55e":"#94a3b8",fontFamily:"'JetBrains Mono',monospace" }}>{wp}%</span>
                            </div>
                          </div>
                          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                            {w.labs.length>0&&<span className="tg" style={{background:"#1e293b",color:"#94a3b8"}}>📝{w.labs.length}</span>}
                            {w.project&&<span className="tg" style={{background:"#1e293b",color:"#94a3b8"}}>🚀Proj</span>}
                            <span className="tg" style={{background:"#1e293b",color:"#94a3b8"}}>💬{w.prompts.length}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* WEEK DETAIL */}
        {view === "dashboard" && sel && (
          <div style={{ animation: "fadeUp .3s ease" }}>
            <button className="bt" onClick={()=>setActiveWeek(null)} style={{padding:"6px 12px",background:"#1e293b",color:"#94a3b8",fontSize:12,marginBottom:12}}>← Back</button>
            <div className="cd" style={{ padding: 18, marginBottom: 14, borderLeft: `4px solid ${ph.color}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6, flexWrap: "wrap" }}>
                <span className="tg" style={{background:ph.color+"22",color:ph.color}}>PHASE {ph.num}</span>
                <span className="tg" style={{background:"#1e293b",color:"#94a3b8"}}>WEEK {sel.week}</span>
                {(sel.gapBadges||[]).map(g=><span key={g} className={`gb ${g==="LINUX"||g==="BASH"||g==="PYTHON"||g==="TERRAFORM"||g==="AI/ML"||g==="BEDROCK"||g==="SAGEMAKER"?"gc":g==="STEP FUNCTIONS"||g==="EVENTBRIDGE"||g==="SECRETS MANAGER"||g==="SSM"||g==="X-RAY"||g==="MULTI-ACCOUNT"||g==="ORGANIZATIONS"?"gi":"ge"}`}>GAP FIX: {g}</span>)}
              </div>
              <h1 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{sel.title}</h1>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {sel.services.map(s=><span key={s} className="tg" style={{background:"#FF990010",color:"#FF9900",border:"1px solid #FF990028"}}>{s}</span>)}
              </div>
            </div>

            <div style={{ display: "flex", gap: 5, marginBottom: 14, flexWrap: "wrap" }}>
              {["overview","prompts","labs",...(sel.project?["project"]:[]),"resources"].map(t=>(
                <button key={t} className={`tb ${activeTab===t?"ac":""}`} onClick={()=>setActiveTab(t)}>
                  {t==="overview"?"📋 Overview":t==="prompts"?`💬 Prompts (${sel.prompts.length})`:t==="labs"?`🔬 Labs (${sel.labs.length})`:t==="project"?"🚀 Project":"📚 Resources"}
                </button>
              ))}
            </div>

            {activeTab==="overview"&&(
              <div className="cd" style={{padding:16}}>
                <h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:10}}>Learning Objectives</h3>
                {sel.objectives.map((o,i)=><div key={i} style={{display:"flex",gap:8,padding:"5px 0",borderBottom:i<sel.objectives.length-1?"1px solid #1e293b":"none"}}><span style={{color:"#22c55e",fontSize:12,flexShrink:0}}>✓</span><span style={{fontSize:13,color:"#cbd5e1",lineHeight:1.5}}>{o}</span></div>)}
              </div>
            )}

            {activeTab==="prompts"&&(
              <div style={{display:"grid",gap:10}}>
                <div style={{padding:10,background:"#FF990010",border:"1px solid #FF990028",borderRadius:10,fontSize:12,color:"#FF9900"}}>💡 Copy these prompts and paste into a new Claude chat.</div>
                {sel.prompts.map((p,i)=>{const pid=`p-${sel.week}-${i}`;return(
                  <div key={i} className="cd" style={{padding:16,animation:`slideIn .3s ease ${i*.03}s both`}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                      <h4 style={{fontSize:13,fontWeight:700,color:"#fff"}}>{p.title}</h4>
                      <button className="bt" onClick={()=>copy(p.prompt,pid)} style={{padding:"4px 10px",background:copiedId===pid?"#22c55e":"#FF9900",color:"#0a0e1a",fontSize:11}}>{copiedId===pid?"✓ Copied":"Copy"}</button>
                    </div>
                    <pre style={{background:"#0a0e1a",borderRadius:8,padding:10,fontSize:11,color:"#94a3b8",lineHeight:1.6,whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:"'JetBrains Mono',monospace",border:"1px solid #1e293b",maxHeight:160,overflow:"auto"}}>{p.prompt}</pre>
                  </div>
                );})}
              </div>
            )}

            {activeTab==="labs"&&(
              <div style={{display:"grid",gap:10}}>
                {sel.labs.length===0&&<div className="cd" style={{padding:24,textAlign:"center",color:"#64748b"}}>This week focuses on projects and certification prep.</div>}
                {sel.labs.map((lab,i)=>{const dn=!!progress[lab.id];const op=expandedLab===lab.id;return(
                  <div key={lab.id} className="cd" style={{overflow:"hidden",animation:`slideIn .3s ease ${i*.03}s both`}}>
                    <div style={{padding:14,display:"flex",alignItems:"center",gap:10,cursor:"pointer"}} onClick={()=>setExpandedLab(op?null:lab.id)}>
                      <div className={`ck ${dn?"dn":""}`} onClick={e=>{e.stopPropagation();toggle(lab.id)}}>{dn&&<span style={{color:"#0a0e1a",fontSize:11,fontWeight:700}}>✓</span>}</div>
                      <div style={{flex:1}}>
                        <div style={{fontSize:13,fontWeight:700,color:dn?"#22c55e":"#fff"}}>{lab.title}</div>
                        <div style={{display:"flex",gap:5,marginTop:3}}>
                          <span className="tg" style={{background:"#1e293b",color:"#64748b"}}>⏱{lab.duration}</span>
                          <span className="tg" style={{background:lab.difficulty==="Beginner"?"#22c55e16":lab.difficulty==="Intermediate"?"#FF990016":"#ef444416",color:lab.difficulty==="Beginner"?"#22c55e":lab.difficulty==="Intermediate"?"#FF9900":"#ef4444"}}>{lab.difficulty}</span>
                        </div>
                      </div>
                      <span style={{color:"#475569",fontSize:14,transition:"transform .2s",transform:op?"rotate(180deg)":"rotate(0)"}}>▾</span>
                    </div>
                    {op&&<div style={{padding:"0 14px 14px",animation:"fadeUp .2s ease"}}>
                      <div style={{background:"#0a0e1a",borderRadius:10,padding:12,border:"1px solid #1e293b"}}>
                        <div style={{fontSize:10,fontWeight:700,color:"#FF9900",textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>Step-by-Step</div>
                        {lab.steps.map((s,si)=><div key={si} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:si<lab.steps.length-1?6:0}}>
                          <div style={{width:24,height:24,borderRadius:"50%",background:"#FF990016",color:"#FF9900",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,flexShrink:0,fontFamily:"'JetBrains Mono',monospace",marginTop:1}}>{si+1}</div>
                          <div style={{fontSize:12,color:"#cbd5e1",lineHeight:1.5,paddingTop:2}}>{s}</div>
                        </div>)}
                        <div style={{marginTop:10,padding:"7px 10px",background:"#22c55e0a",border:"1px solid #22c55e28",borderRadius:8,fontSize:12,color:"#22c55e"}}>✓ <strong>Verify:</strong> {lab.verify}</div>
                      </div>
                    </div>}
                  </div>
                );})}
              </div>
            )}

            {activeTab==="project"&&sel.project&&(
              <div className="cd" style={{overflow:"hidden"}}>
                <div style={{padding:16,borderBottom:"1px solid #1e293b",display:"flex",alignItems:"center",gap:10}}>
                  <div className={`ck ${progress[sel.project.id]?"dn":""}`} onClick={()=>toggle(sel.project.id)}>{progress[sel.project.id]&&<span style={{color:"#0a0e1a",fontSize:11,fontWeight:700}}>✓</span>}</div>
                  <div style={{flex:1}}><h3 style={{fontSize:14,fontWeight:700,color:"#fff"}}>{sel.project.title}</h3><p style={{fontSize:12,color:"#94a3b8",marginTop:2}}>{sel.project.description}</p></div>
                </div>
                <div style={{padding:16}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                    <span style={{fontSize:10,fontWeight:700,color:"#FF9900",textTransform:"uppercase",letterSpacing:1}}>Claude Prompt</span>
                    <button className="bt" onClick={()=>copy(sel.project.prompt,sel.project.id)} style={{padding:"4px 10px",background:copiedId===sel.project.id?"#22c55e":"#FF9900",color:"#0a0e1a",fontSize:11}}>{copiedId===sel.project.id?"✓ Copied":"Copy"}</button>
                  </div>
                  <pre style={{background:"#0a0e1a",borderRadius:8,padding:10,fontSize:11,color:"#94a3b8",lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:"'JetBrains Mono',monospace",border:"1px solid #1e293b",maxHeight:180,overflow:"auto"}}>{sel.project.prompt}</pre>
                  {sel.project.dummyData&&<div style={{marginTop:12}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                      <span style={{fontSize:10,fontWeight:700,color:"#1A73E8",textTransform:"uppercase",letterSpacing:1}}>Dummy Data</span>
                      <button className="bt" onClick={()=>copy(sel.project.dummyData,"d-"+sel.project.id)} style={{padding:"4px 10px",background:copiedId==="d-"+sel.project.id?"#22c55e":"#1A73E8",color:"#fff",fontSize:11}}>{copiedId==="d-"+sel.project.id?"✓":"Copy"}</button>
                    </div>
                    <pre style={{background:"#0a0e1a",borderRadius:8,padding:10,fontSize:10,color:"#64748b",lineHeight:1.5,whiteSpace:"pre-wrap",fontFamily:"'JetBrains Mono',monospace",border:"1px solid #1e293b",maxHeight:120,overflow:"auto"}}>{sel.project.dummyData}</pre>
                  </div>}
                </div>
              </div>
            )}

            {activeTab==="resources"&&(
              <div style={{display:"grid",gap:8}}>
                {(sel.resources||[]).map((r,i)=>(
                  <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="cd" style={{padding:12,display:"flex",alignItems:"center",gap:10,textDecoration:"none",color:"inherit"}}>
                    <div style={{width:34,height:34,borderRadius:8,background:"#FF990010",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0}}>📄</div>
                    <div style={{flex:1,minWidth:0}}><div style={{fontSize:13,fontWeight:600,color:"#fff"}}>{r.name}</div><div style={{fontSize:11,color:"#64748b",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.url}</div></div>
                    <span style={{color:"#FF9900"}}>→</span>
                  </a>
                ))}
              </div>
            )}

            <div style={{display:"flex",justifyContent:"space-between",marginTop:18}}>
              {sel.week>1?<button className="bt" onClick={()=>{setActiveWeek(sel.week-2);setActiveTab("overview");setExpandedLab(null)}} style={{padding:"7px 14px",background:"#1e293b",color:"#94a3b8",fontSize:12}}>← Wk {sel.week-1}</button>:<div/>}
              {sel.week<18?<button className="bt" onClick={()=>{setActiveWeek(sel.week);setActiveTab("overview");setExpandedLab(null)}} style={{padding:"7px 14px",background:"#FF9900",color:"#0a0e1a",fontSize:12}}>Wk {sel.week+1} →</button>:<div/>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
