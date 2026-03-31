import { useState, useEffect, useCallback } from "react";

const WEEKS = [
  // ═══════ PHASE 1: NETWORKING FOUNDATIONS (Weeks 1-3) ═══════
  {
    week: 1, phase: 1, phaseTitle: "NETWORKING FOUNDATIONS",
    title: "Networking Fundamentals & the OSI Model",
    gapBadges: ["LINUX"],
    objectives: [
      "Understand the OSI 7-layer model and TCP/IP stack",
      "Learn how routers, switches, and hubs work",
      "Master DNS, DHCP, ARP, and how name resolution works",
      "Understand common ports and services (HTTP, HTTPS, SSH, DNS, etc.)",
      "Learn essential Linux commands — firewalls run on Linux",
      "Understand routing protocols (OSPF, BGP, static routing)"
    ],
    services: ["OSI Model", "TCP/IP", "Routers", "Switches", "DNS", "DHCP", "Linux CLI"],
    resources: [
      { name: "Cisco Networking Basics (Free)", url: "https://skillsforall.com/course/networking-basics" },
      { name: "Linux Journey (Free)", url: "https://linuxjourney.com/" },
      { name: "Professor Messer Network+ (YouTube)", url: "https://www.youtube.com/c/professormesser" }
    ],
    prompts: [
      { title: "OSI Model Deep Dive", prompt: `Teach me the OSI 7-layer model like I'll be configuring a Palo Alto Firewall. For EACH layer:\n1. What it does in one sentence\n2. Protocols at that layer\n3. What a firewall can inspect/block at that layer\n4. A real-world analogy\n5. A Wireshark filter example\n\nThen explain: Why does a "Next-Generation Firewall" operate at Layer 7 while traditional firewalls only work at Layer 3-4? Why does this matter for security?` },
      { title: "Linux for Network Security", prompt: `I'm training to be a firewall engineer and need Linux fundamentals. Teach me the 35 most critical commands for network security work:\n- File navigation: ls, cd, cat, less, find, grep, tail -f\n- Networking: ip addr, ip route, ss, netstat, ping, traceroute, dig, nslookup, curl, tcpdump, nmap\n- Process/system: ps, top, systemctl, journalctl, kill\n- Permissions: chmod, chown, sudo, useradd\n- Text processing: awk, sed, sort, uniq, wc\nFor each, give me the syntax and a real firewall/security use case.` },
      { title: "DNS & DHCP Explained", prompt: `Explain DNS and DHCP in detail for a network security student. Cover:\n1. DNS resolution process (recursive vs iterative, root → TLD → authoritative)\n2. DNS record types (A, AAAA, CNAME, MX, TXT, PTR, SOA, NS)\n3. DNS security issues: cache poisoning, DNS tunneling, typosquatting\n4. DHCP DORA process (Discover, Offer, Request, Acknowledge)\n5. DHCP security: rogue DHCP servers, DHCP snooping\n6. How attackers abuse DNS and DHCP — and how firewalls detect it` },
      { title: "Ports & Services", prompt: `Give me a complete reference of the 30 most important ports every network security engineer must know. For each: port number, protocol (TCP/UDP), service name, what it does, and the security risk if left open. Include: 20/21, 22, 23, 25, 53, 67/68, 80, 110, 123, 135, 137-139, 143, 161, 389, 443, 445, 465, 514, 587, 636, 993, 995, 1433, 1521, 3306, 3389, 5060, 5432, 8080, 8443.` }
    ],
    labs: [
      { id: "lab-1-1", title: "Linux Command Line for Security Engineers", duration: "60 min", difficulty: "Beginner",
        steps: [
          "Download and install VirtualBox from https://www.virtualbox.org/wiki/Downloads — click the download link for your OS (Windows, macOS, or Linux)",
          "Download Ubuntu Server 22.04 LTS ISO from https://ubuntu.com/download/server — this is a ~2GB file, so let it download while you proceed",
          "Open VirtualBox → click 'New' to create a new virtual machine",
          "Name: 'SecurityLab-Ubuntu', Type: Linux, Version: Ubuntu (64-bit), click Next",
          "Memory: allocate at least 2048 MB (2 GB) of RAM, click Next",
          "Hard disk: select 'Create a virtual hard disk now', click Create",
          "Hard disk file type: VDI (default), click Next → Dynamically allocated → Next",
          "Set size to 20 GB, click Create — your VM is now created",
          "With your new VM selected, click 'Settings' → Storage → click the empty disk icon under Controller: IDE",
          "Click the disk icon on the right → 'Choose a disk file' → select your Ubuntu ISO → OK",
          "Click 'Start' to boot the VM — Ubuntu installer will launch",
          "Select language 'English', then 'Install Ubuntu Server'",
          "Follow the prompts: keyboard layout, network (use DHCP), storage (use entire disk), create user (remember your username and password!)",
          "Wait for installation to complete (5-10 minutes), then 'Reboot Now'",
          "When prompted, press Enter to remove installation media (VirtualBox handles this automatically)",
          "Login with your username and password — you now have a working Linux server!",
          "First command: whoami — this shows your current username",
          "Run: pwd — shows your current directory (should be /home/yourusername)",
          "Run: ls -la — lists all files including hidden ones (files starting with .)",
          "Run: ip addr — shows all network interfaces and IP addresses. Find 'inet' under your main interface (eth0 or enp0s3)",
          "Run: ip route — shows the routing table. Note the 'default via' line — this is your gateway",
          "Run: cat /etc/resolv.conf — shows your DNS servers. You should see nameserver entries",
          "Run: ss -tlnp — shows all listening TCP ports. You'll see sshd on port 22",
          "Run: ping -c 4 8.8.8.8 — tests connectivity to Google DNS. 4 packets should succeed",
          "Run: ping -c 4 google.com — tests DNS resolution. If this works, DNS is functioning",
          "Install useful tools: sudo apt update && sudo apt install -y net-tools nmap tcpdump dnsutils curl wget",
          "Run: netstat -tlnp — now you can use the classic netstat command (from net-tools)",
          "Run: dig google.com — performs a DNS lookup, shows query time and server used",
          "Run: nslookup 8.8.8.8 — reverse DNS lookup, shows the hostname for Google's DNS",
          "Run: dig MX gmail.com — shows mail exchange records for Gmail",
          "Run: nmap -sT localhost — TCP connect scan on yourself, shows open ports",
          "Run: nmap -sV localhost — version detection scan, shows what services are running",
          "Run: sudo tcpdump -i any -c 10 — capture 10 packets on all interfaces (Ctrl+C to stop early)",
          "Run: sudo tcpdump -i any -c 20 port 53 & then dig cloudflare.com — capture DNS traffic!",
          "Run: find /var/log -name '*.log' -mtime -1 — find log files modified in the last day",
          "Run: sudo tail -f /var/log/syslog — watch live log entries (Ctrl+C to stop)",
          "Run: ps aux | grep ssh — find SSH-related processes",
          "Run: systemctl status sshd — check the SSH daemon status",
          "Create a test user: sudo useradd -m testuser && sudo passwd testuser (set a simple password)",
          "Test the user: su - testuser — switch to the new user, then exit to return",
          "Clean up: sudo userdel -r testuser — delete the test user and their home directory"
        ],
        verify: "You have a working Linux VM. You can check network config (ip addr, ip route), perform DNS lookups (dig, nslookup), scan ports (nmap), capture packets (tcpdump), and manage users." },
      { id: "lab-1-2", title: "Map the OSI Model with Real Traffic", duration: "45 min", difficulty: "Beginner",
        steps: [
          "Download Wireshark from https://www.wireshark.org/download.html — choose the installer for your OS",
          "For Windows: run the .exe installer, accept defaults, install WinPcap/Npcap when prompted (required for packet capture)",
          "For macOS: open the .dmg file, drag Wireshark to Applications, grant accessibility permissions when prompted",
          "For Linux: sudo apt install wireshark — when asked about non-superusers, select 'Yes'",
          "Open Wireshark — you'll see a list of network interfaces with live activity graphs",
          "Identify your main interface: it's usually the one with the most activity (Wi-Fi or Ethernet)",
          "Before capturing, open a terminal/command prompt and run: ping -c 5 example.com (or ping example.com on Windows)",
          "This 'primes' your DNS cache so we can capture fresh DNS queries later",
          "In Wireshark, double-click your main interface to start capturing — you'll see packets flowing immediately",
          "IMPORTANT: Open a browser and go to http://neverssl.com — this is a deliberately non-HTTPS site for testing",
          "Let the page load completely, then click around on the site to generate more HTTP traffic",
          "Back in Wireshark, click the red square 'Stop' button to stop capturing",
          "You should have hundreds or thousands of packets — don't worry, we'll filter them",
          "In the filter bar at the top, type: http — press Enter",
          "You now see only HTTP traffic! Look for packets with 'GET / HTTP/1.1' in the Info column",
          "Click on one of these GET requests to select it",
          "Look at the middle pane — you'll see the packet dissected into layers. Expand each section:",
          "Frame: This is Layer 1 (Physical) metadata — the raw capture info",
          "Ethernet II: This is Layer 2 (Data Link) — notice 'Source' and 'Destination' MAC addresses",
          "Internet Protocol Version 4: This is Layer 3 (Network) — notice 'Source' and 'Destination' IP addresses",
          "Transmission Control Protocol: This is Layer 4 (Transport) — notice 'Source Port' and 'Destination Port' (port 80 for HTTP)",
          "Hypertext Transfer Protocol: This is Layer 7 (Application) — notice 'GET / HTTP/1.1', 'Host:', 'User-Agent:' headers",
          "Right-click the HTTP packet → Follow → TCP Stream — this shows the entire HTTP conversation in readable text!",
          "You'll see the HTTP request (blue) and response (red) including HTML content",
          "Close the stream window and clear the filter — click the X next to the filter bar",
          "Now filter: dns — you'll see DNS queries and responses",
          "Find a query for 'neverssl.com' — expand it and look at the 'Queries' section showing the domain name",
          "Find the response packet — expand 'Answers' to see the IP address returned",
          "Clear filter and type: arp — these are Layer 2 ARP packets used to resolve IP to MAC addresses",
          "Expand an ARP packet — you'll see 'Sender MAC address', 'Sender IP address', 'Target MAC address', 'Target IP address'",
          "Clear filter and type: icmp — if you pinged earlier, you'll see ICMP Echo requests and replies",
          "Create a complex filter: ip.addr == 93.184.216.34 && tcp — this shows all TCP traffic to/from example.com's IP",
          "Go to Statistics → Protocol Hierarchy — see the percentage breakdown of all protocols captured",
          "Go to Statistics → Conversations → TCP tab — see all TCP connections sorted by bytes transferred",
          "Save your capture: File → Save As → choose a location and save as .pcapng",
          "This saved file can be reopened later for analysis — security investigators do this constantly"
        ],
        verify: "You can identify all OSI layers in real packets. You can expand Ethernet (L2), IP (L3), TCP (L4), and HTTP (L7) headers. You can follow TCP streams, filter by protocol, and analyze DNS/ARP/ICMP traffic." },
      { id: "lab-1-3", title: "DNS & DHCP Hands-On", duration: "40 min", difficulty: "Beginner",
        steps: [
          "Open a terminal (Linux/Mac) or Command Prompt (Windows)",
          "Run: dig google.com — this performs a basic DNS lookup",
          "Look at the output: find 'ANSWER SECTION' — this shows google.com's IP addresses (A records)",
          "Note the 'Query time' at the bottom — this is how long the DNS lookup took (usually <100ms)",
          "Note 'SERVER' at the bottom — this is which DNS server answered your query",
          "Run: dig google.com +trace — this shows the ENTIRE DNS resolution chain!",
          "Watch the output: it starts with root servers (.), then .com TLD servers, then Google's authoritative servers",
          "This is exactly how DNS works: Root → TLD → Authoritative → Answer",
          "Run: dig A google.com — explicitly request A records (IPv4 addresses)",
          "Run: dig AAAA google.com — request AAAA records (IPv6 addresses)",
          "Run: dig MX gmail.com — request Mail Exchanger records (shows Google's mail servers)",
          "Run: dig TXT google.com — request TXT records (shows SPF, verification records, etc.)",
          "Run: dig NS google.com — request Name Server records (shows Google's authoritative DNS servers)",
          "Run: dig SOA google.com — request Start of Authority (shows primary DNS server and refresh timers)",
          "Run: nslookup google.com — alternative DNS tool, simpler output",
          "Run: nslookup 8.8.8.8 — reverse DNS lookup! Shows dns.google as the hostname for this IP",
          "Run: dig -x 8.8.8.8 — same reverse lookup using dig (PTR record)",
          "Run: dig txt _dmarc.google.com — shows DMARC email authentication policy",
          "Run: dig txt _spf.google.com — shows SPF email sender policy",
          "These TXT records are security-critical — they prevent email spoofing!",
          "Now let's explore DHCP. On Linux run: cat /var/lib/dhcp/dhclient.leases",
          "If the file exists, you'll see your DHCP lease: IP address, subnet mask, router (gateway), DNS servers, lease time",
          "On Windows run: ipconfig /all — find 'DHCP Enabled: Yes' and 'Lease Obtained/Expires' dates",
          "On macOS run: ipconfig getpacket en0 — shows raw DHCP information (en0 is usually your main interface)",
          "Now let's capture DHCP in Wireshark! Open Wireshark and start capturing on your main interface",
          "In the filter bar, type: bootp (DHCP uses the BOOTP protocol identifier in Wireshark)",
          "On Linux, force a DHCP renewal: sudo dhclient -r && sudo dhclient",
          "On Windows: ipconfig /release then ipconfig /renew",
          "On macOS: sudo ipconfig set en0 DHCP",
          "Watch Wireshark — you should see the DORA process: Discover, Offer, Request, Acknowledge!",
          "Click on the DHCP Discover packet — expand 'Bootstrap Protocol' → 'Option: DHCP Message Type' shows 'Discover'",
          "Find your client's 'Client MAC address' — this is how the DHCP server identifies you",
          "Click on DHCP Offer — see the 'Your (client) IP address' field, this is what the server is offering",
          "Click on DHCP Request — your client is formally requesting that offered IP",
          "Click on DHCP ACK — the server confirms, lease is granted!",
          "Note the lease time in the ACK packet: 'Option: IP Address Lease Time' shows how long you can use this IP",
          "Security note: A rogue DHCP server could offer a malicious gateway/DNS — this is why DHCP snooping exists on switches"
        ],
        verify: "You can trace full DNS resolution (dig +trace), lookup all record types (A, AAAA, MX, TXT, NS, SOA, PTR), check DHCP leases, and capture the full DHCP DORA exchange in Wireshark." }
    ],
    project: null
  },
  {
    week: 2, phase: 1,
    title: "IP Addressing, Subnetting & Routing",
    gapBadges: [],
    objectives: [
      "Master IPv4 addressing and binary conversion",
      "Calculate subnets using CIDR notation",
      "Understand public vs private IP ranges",
      "Learn static routing, OSPF, and BGP fundamentals",
      "Understand NAT and PAT"
    ],
    services: ["CIDR", "Subnetting", "NAT/PAT", "OSPF", "BGP", "Static Routes"],
    resources: [
      { name: "Subnet Calculator", url: "https://www.subnet-online.com/subnet_calculator.php" },
      { name: "Subnetting Practice", url: "https://subnettingpractice.com/" }
    ],
    prompts: [
      { title: "Subnetting Mastery", prompt: `Teach me subnetting from scratch for network security. Cover:\n1. Binary math: converting IP to binary and back\n2. Subnet masks and CIDR notation (/24, /25, /26, /27, /28)\n3. Calculating: network address, broadcast address, usable hosts, first/last IP\n4. Private IP ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16\n5. VLSM (Variable Length Subnet Masking)\n\nThen give me 10 practice problems like: "Given 192.168.10.0/24, create 4 subnets. What are the ranges?" and "A host has IP 172.16.45.67/20 — what's the network address?"` },
      { title: "Routing for Firewall Engineers", prompt: `Explain routing protocols for a firewall engineer:\n1. Static routes: when to use, next-hop vs interface\n2. OSPF: areas, LSAs, adjacencies, cost metric — how firewalls participate\n3. BGP: eBGP vs iBGP, AS numbers, path selection — when a firewall runs BGP\n4. Policy-Based Forwarding (PBF): how Palo Alto uses it instead of traditional routing\n5. Virtual Routers: why Palo Alto uses them (separate routing tables per zone)\n\nGive me a network diagram scenario: 3 VLANs, 2 firewalls, 1 ISP link — design the routing.` },
      { title: "NAT Explained", prompt: `Teach me NAT for firewalls. Cover:\n1. Source NAT (SNAT): hide internal IPs behind public IP\n2. Destination NAT (DNAT): expose internal servers externally\n3. Bidirectional NAT: simultaneous source + destination translation\n4. PAT (Port Address Translation): many-to-one\n5. NAT on Palo Alto: how it differs from Cisco (pre-NAT vs post-NAT rule matching)\n\nDraw a packet flow showing source IP, dest IP, and ports at each stage.` }
    ],
    labs: [
      { id: "lab-2-1", title: "Subnetting Speed Drill", duration: "50 min", difficulty: "Intermediate",
        steps: [
          "Before we start, understand the basics: an IP address is 32 bits, written as 4 octets (8 bits each) separated by dots",
          "Open a text editor or grab paper — we'll do binary math by hand first",
          "Convert 192.168.1.1 to binary step by step:",
          "  192 → 128+64 = 192 → binary: 11000000",
          "  168 → 128+32+8 = 168 → binary: 10101000",
          "  1 → binary: 00000001",
          "  1 → binary: 00000001",
          "  Full binary: 11000000.10101000.00000001.00000001",
          "Now convert 10.0.0.255 to binary:",
          "  10 → 8+2 = 10 → binary: 00001010",
          "  0 → binary: 00000000",
          "  0 → binary: 00000000",
          "  255 → all bits on → binary: 11111111",
          "  Full binary: 00001010.00000000.00000000.11111111",
          "Convert 172.16.128.0 to binary:",
          "  172 → 128+32+8+4 = 172 → binary: 10101100",
          "  16 → binary: 00010000",
          "  128 → binary: 10000000",
          "  0 → binary: 00000000",
          "  Full binary: 10101100.00010000.10000000.00000000",
          "Now understand CIDR notation: /24 means the first 24 bits are the network, remaining 8 bits are hosts",
          "/24 subnet mask in binary: 11111111.11111111.11111111.00000000 = 255.255.255.0",
          "/16 subnet mask: 11111111.11111111.00000000.00000000 = 255.255.0.0",
          "/8 subnet mask: 11111111.00000000.00000000.00000000 = 255.0.0.0",
          "KEY FORMULA: Number of hosts = 2^(32-CIDR) - 2 (subtract 2 for network and broadcast addresses)",
          "/24 → 2^8 - 2 = 254 usable hosts",
          "/25 → 2^7 - 2 = 126 usable hosts",
          "/26 → 2^6 - 2 = 62 usable hosts",
          "/27 → 2^5 - 2 = 30 usable hosts",
          "/28 → 2^4 - 2 = 14 usable hosts",
          "Now let's subnet 10.10.0.0/16 into 8 equal subnets:",
          "We need 8 subnets, so we need 3 more network bits (2^3 = 8)",
          "/16 + 3 = /19 for each subnet",
          "Each /19 has 2^13 - 2 = 8190 usable hosts",
          "Block size = 2^(32-19) = 8192 addresses = 8192/256 = 32 in the third octet",
          "Subnet 1: 10.10.0.0/19 (range: 10.10.0.1 - 10.10.31.254, broadcast: 10.10.31.255)",
          "Subnet 2: 10.10.32.0/19 (range: 10.10.32.1 - 10.10.63.254)",
          "Subnet 3: 10.10.64.0/19 (range: 10.10.64.1 - 10.10.95.254)",
          "Subnet 4: 10.10.96.0/19 (range: 10.10.96.1 - 10.10.127.254)",
          "Subnet 5: 10.10.128.0/19 (range: 10.10.128.1 - 10.10.159.254)",
          "Subnet 6: 10.10.160.0/19 (range: 10.10.160.1 - 10.10.191.254)",
          "Subnet 7: 10.10.192.0/19 (range: 10.10.192.1 - 10.10.223.254)",
          "Subnet 8: 10.10.224.0/19 (range: 10.10.224.1 - 10.10.255.254)",
          "Now subnet 192.168.50.0/24 into /26 subnets:",
          "/24 → /26 means 2 more bits → 4 subnets",
          "Each /26 has 2^6 - 2 = 62 usable hosts",
          "Block size = 64 addresses in the fourth octet",
          "Subnet 1: 192.168.50.0/26 (network), 192.168.50.1-62 (usable), 192.168.50.63 (broadcast)",
          "Subnet 2: 192.168.50.64/26 (network), 192.168.50.65-126 (usable), 192.168.50.127 (broadcast)",
          "Subnet 3: 192.168.50.128/26 (network), 192.168.50.129-190 (usable), 192.168.50.191 (broadcast)",
          "Subnet 4: 192.168.50.192/26 (network), 192.168.50.193-254 (usable), 192.168.50.255 (broadcast)",
          "Open your browser and go to https://subnettingpractice.com",
          "Click 'Start' and practice 20 questions — aim to complete them under 10 minutes",
          "After each question, check your work using the calculator at subnet-online.com if needed",
          "Private IP ranges to memorize: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
          "Quiz yourself: Which are private? 8.8.8.8 (PUBLIC - Google DNS), 10.5.3.2 (PRIVATE), 172.32.1.1 (PUBLIC - 172.16-31 only), 192.168.0.1 (PRIVATE), 169.254.1.1 (LINK-LOCAL - special)",
          "CHALLENGE: Given host 172.16.45.67/20, find the network address:",
          "/20 mask = 255.255.240.0 (first 20 bits)",
          "45 in binary = 00101101, AND with 240 (11110000) = 00100000 = 32",
          "Network address: 172.16.32.0/20"
        ],
        verify: "You can convert IP to binary, calculate subnets by hand, determine network/broadcast/usable ranges, and identify private vs public IPs. Target: subnet a /24 in under 30 seconds." },
      { id: "lab-2-2", title: "Routing Table Analysis", duration: "40 min", difficulty: "Intermediate",
        steps: [
          "Open a terminal on your Linux VM (or use WSL on Windows)",
          "Run: ip route show — this displays your complete routing table",
          "You should see output like: 'default via 192.168.1.1 dev eth0 proto dhcp metric 100'",
          "Let's break down each field:",
          "  'default' = destination 0.0.0.0/0 (matches everything not matched by other routes)",
          "  'via 192.168.1.1' = next-hop router (your gateway)",
          "  'dev eth0' = the network interface to use",
          "  'proto dhcp' = this route was learned via DHCP",
          "  'metric 100' = route priority (lower = preferred)",
          "You'll also see connected routes like: '192.168.1.0/24 dev eth0 proto kernel scope link'",
          "  'proto kernel' = directly connected network (you're on this subnet)",
          "  'scope link' = only valid for this link",
          "Run: ip route get 8.8.8.8 — this shows which route would be used to reach Google DNS",
          "Output shows: '8.8.8.8 via 192.168.1.1 dev eth0 src 192.168.1.100' — meaning it uses the default route",
          "Run: ip route get 192.168.1.50 — this should use the directly connected route (no 'via')",
          "Now let's add a static route. First, let's pretend network 10.10.0.0/16 exists via a router at 192.168.1.1",
          "Run: sudo ip route add 10.10.0.0/16 via 192.168.1.1 dev eth0",
          "Run: ip route show — you should now see '10.10.0.0/16 via 192.168.1.1 dev eth0' in the list",
          "Run: ip route get 10.10.5.5 — it should show 'via 192.168.1.1' (using our new static route)",
          "Try adding a more specific route: sudo ip route add 10.10.5.0/24 via 192.168.1.1 dev eth0",
          "Run: ip route get 10.10.5.5 — still shows 192.168.1.1, but now via the /24 route (more specific wins!)",
          "Run: ip route get 10.10.6.5 — this uses the /16 route since it doesn't match the /24",
          "This demonstrates LONGEST PREFIX MATCH: more specific routes (longer masks) take priority",
          "Clean up: sudo ip route del 10.10.5.0/24 — remove the more specific route",
          "Clean up: sudo ip route del 10.10.0.0/16 — remove the /16 route",
          "Run: ip route show — verify both routes are gone",
          "Now let's trace the path to a destination: traceroute 8.8.8.8",
          "Each line shows a 'hop' (router) along the path, with three RTT (round-trip time) measurements",
          "Count the hops — this shows how many routers your packets traverse",
          "If you see '* * *' it means that router didn't respond to traceroute probes (often firewalled)",
          "Try: traceroute google.com — notice DNS resolution happens first, then tracing begins",
          "Alternative: mtr 8.8.8.8 — this is a better traceroute with continuous statistics (Ctrl+C to exit)",
          "Install if needed: sudo apt install mtr-tiny",
          "Understanding routing is critical: firewalls ARE routers, and misconfigurations cause outages",
          "BONUS: View the kernel's routing cache: ip route show cache",
          "BONUS: Check routing decisions in real-time: ip route show table all | head -30"
        ],
        verify: "You can read and understand routing tables, add/delete static routes, verify routes with 'ip route get', use traceroute/mtr to map network paths, and understand longest-prefix-match behavior." }
    ],
    project: { id: "proj-subnet", title: "Design a Corporate Network",
      description: "Design a full IP addressing scheme for a 500-person company with 6 departments.",
      prompt: `Help me design a complete network addressing scheme for 'SecureCorp' (500 people):\n- Given: 10.10.0.0/16\n- Departments: Engineering (120 hosts), Sales (80), HR (30), Finance (40), IT/Security (50), Guest WiFi (200)\n- Each department needs its own subnet\n- Servers need a separate /28 subnet\n- Management network (switches, firewalls) needs a /29\n\nCalculate: subnet address, mask, usable range, broadcast for each. Then draw the routing table for the core firewall.` }
  },
  {
    week: 3, phase: 1,
    title: "Cloud Networking (AWS) & Wireshark",
    gapBadges: ["WIRESHARK"],
    objectives: [
      "Understand AWS VPC, subnets, and security groups",
      "Launch EC2 instances and configure networking",
      "Master Wireshark for deep packet analysis",
      "Understand how cloud firewalls differ from physical NGFWs"
    ],
    services: ["AWS VPC", "EC2", "Security Groups", "NACLs", "Elastic IPs", "Wireshark"],
    resources: [
      { name: "AWS VPC Guide", url: "https://docs.aws.amazon.com/vpc/latest/userguide/" },
      { name: "Wireshark User Guide", url: "https://www.wireshark.org/docs/wsug_html/" }
    ],
    prompts: [
      { title: "AWS VPC for Firewall Engineers", prompt: `Teach me AWS VPC like I'm a firewall engineer. I understand physical networks — now map those concepts to cloud:\n1. VPC = your private datacenter (CIDR block)\n2. Subnets = VLANs (public vs private, AZ placement)\n3. Security Groups = stateful firewall rules (like Palo Alto security policies)\n4. NACLs = stateless ACLs (like traditional router ACLs)\n5. Internet Gateway = ISP uplink\n6. NAT Gateway = source NAT for private subnets\n7. Route Tables = virtual router\n\nFor each, compare to the physical/Palo Alto equivalent. Then design a VPC with DMZ, internal, and DB tiers.` },
      { title: "Wireshark Deep Dive", prompt: `Teach me Wireshark for security investigations. Cover:\n1. Capture filters vs display filters (syntax differences)\n2. Essential display filters: ip.addr==, tcp.port==, http.request, dns, tls.handshake, tcp.flags.syn==1\n3. How to follow TCP/HTTP/TLS streams\n4. How to identify: port scans, DNS tunneling, data exfiltration, malware callbacks\n5. TLS handshake analysis: what you can see even in encrypted traffic\n6. Statistics → Conversations → identify top talkers\n\nGive me 5 practice scenarios with sample filters.` }
    ],
    labs: [
      { id: "lab-3-1", title: "AWS VPC with DMZ Architecture", duration: "60 min", difficulty: "Intermediate",
        steps: [
          "Go to https://aws.amazon.com and click 'Sign In to the Console' (top right)",
          "If you don't have an account, click 'Create a new AWS account' — you'll need a credit card but won't be charged for Free Tier usage",
          "After signing in, use the search bar at the top and type 'VPC' — click 'VPC' under Services",
          "Click the orange 'Create VPC' button",
          "Select 'VPC and more' — this wizard creates VPC, subnets, route tables, and gateways in one step",
          "Under 'Name tag auto-generation', enter: security-lab",
          "IPv4 CIDR block: leave as 10.0.0.0/16 — this gives us 65,536 IP addresses",
          "Number of Availability Zones: select 2 (for redundancy)",
          "Number of public subnets: 2",
          "Number of private subnets: 2",
          "NAT gateways: select 'In 1 AZ' (saves cost, $32/month — for production, use 'In each AZ')",
          "VPC endpoints: None (we'll skip this for now)",
          "Click 'Create VPC' — wait 2-3 minutes for all resources to be created",
          "You'll see a success page showing all created resources — note the VPC ID and subnet IDs",
          "Now let's launch a web server in the public subnet. Search for 'EC2' and click it",
          "Click the orange 'Launch instance' button",
          "Name: web-server-public",
          "Under 'Application and OS Images', select 'Amazon Linux 2023' (Free Tier eligible)",
          "Instance type: t2.micro (Free Tier eligible)",
          "Under 'Key pair', click 'Create new key pair'",
          "Key pair name: security-lab-key, Type: RSA, Format: .pem (for Mac/Linux) or .ppk (for Windows PuTTY)",
          "Click 'Create key pair' — the file downloads automatically. SAVE THIS FILE — you need it to SSH!",
          "Under 'Network settings', click 'Edit'",
          "VPC: select 'security-lab-vpc' (the one we just created)",
          "Subnet: select 'security-lab-subnet-public1' (a public subnet)",
          "Auto-assign public IP: Enable",
          "Under 'Firewall (security groups)', select 'Create security group'",
          "Security group name: web-server-sg",
          "Description: Allow HTTP/HTTPS/SSH from internet",
          "The default rule allows SSH from 0.0.0.0/0 — for a real server, restrict this to your IP!",
          "Click 'Add security group rule' — Type: HTTP, Source: 0.0.0.0/0",
          "Click 'Add security group rule' — Type: HTTPS, Source: 0.0.0.0/0",
          "Leave storage as default (8 GB), click 'Launch instance'",
          "Click 'View all instances' — wait for Instance State to show 'Running' and Status Checks to show '2/2 checks passed'",
          "Now launch an app server in the private subnet. Click 'Launch instance' again",
          "Name: app-server-private",
          "Same AMI (Amazon Linux 2023) and instance type (t2.micro)",
          "Key pair: select the same 'security-lab-key' you created",
          "Network settings → Edit → VPC: security-lab-vpc",
          "Subnet: select 'security-lab-subnet-private1' (a PRIVATE subnet)",
          "Auto-assign public IP: Disable (private subnets don't get public IPs)",
          "Create security group: app-server-sg",
          "Delete the default SSH rule (we'll add a specific one)",
          "Add rule: Type: All traffic, Source: Custom — and enter 'web-server-sg' (type it and select from dropdown)",
          "This means: only traffic from the web server's security group is allowed!",
          "Click 'Launch instance'",
          "Now test! Copy the public IP of web-server-public from the EC2 console",
          "On Mac/Linux terminal: chmod 400 security-lab-key.pem (set correct permissions)",
          "SSH to the web server: ssh -i security-lab-key.pem ec2-user@<PUBLIC-IP>",
          "On Windows with PuTTY: use the .ppk file in PuTTY > SSH > Auth > Credentials",
          "Once connected to the web server, try pinging the app server's private IP:",
          "First, find the app server's private IP from the EC2 console (something like 10.0.128.xxx)",
          "On the web server: ping 10.0.128.xxx — it should work! (same VPC, security group allows it)",
          "Try: curl http://10.0.128.xxx:80 — connection refused (no web server running on app server)",
          "The NAT Gateway lets the private app server reach the internet (for updates). Test it by SSHing to the app server FROM the web server:",
          "On web server, create a key file: nano app-key.pem, paste your key contents, save, chmod 400 app-key.pem",
          "SSH to app server: ssh -i app-key.pem ec2-user@10.0.128.xxx",
          "On app server: ping 8.8.8.8 — it works! Traffic goes through NAT Gateway",
          "This is exactly like a Palo Alto DMZ: public subnet = DMZ, private subnet = internal, NAT Gateway = source NAT",
          "Security Groups are like stateful firewall rules — they track connections and allow return traffic automatically",
          "CLEAN UP to avoid charges: Terminate both EC2 instances, delete NAT Gateway (it costs money!), then delete the VPC"
        ],
        verify: "VPC created with public/private subnets. Web server accessible from internet via SSH. App server only reachable from web server. App server can reach internet via NAT Gateway." },
      { id: "lab-3-2", title: "Wireshark: Capture & Analyze Real Traffic", duration: "60 min", difficulty: "Intermediate",
        steps: [
          "Open Wireshark — if not installed, download from https://www.wireshark.org/download.html",
          "You'll see a list of network interfaces — double-click your active interface (Wi-Fi or Ethernet)",
          "Capture begins immediately — you'll see packets streaming in real-time",
          "Open a browser and visit several websites: google.com, amazon.com, reddit.com",
          "Let it capture for about 2 minutes with normal browsing activity",
          "Click the red square 'Stop' button to stop capturing",
          "You should have thousands of packets — let's filter them down",
          "In the display filter bar (green bar at top), type: dns — press Enter",
          "This shows only DNS traffic. Examine the 'Info' column — you'll see queries and responses",
          "Look at the 'Destination' column — most DNS queries go to your configured DNS server",
          "Click on a DNS query, expand 'Domain Name System (query)' → 'Queries' — see the domain being looked up",
          "Find the corresponding response packet — expand 'Answers' to see the returned IP addresses",
          "Security check: Look for any unusual domains in your DNS queries. Malware often uses weird domain names!",
          "Clear filter (X button) and type new filter: tcp.flags.syn==1 && tcp.flags.ack==0",
          "This shows only TCP SYN packets — the START of every new TCP connection",
          "Every line is a new connection being initiated. Check the 'Destination' column for ports being connected to",
          "You'll see lots of port 443 (HTTPS) — that's normal. Port 80 (HTTP) is less common now",
          "Clear filter and type: http.request",
          "This shows only HTTP requests (unencrypted) — hopefully you see very few! Most traffic is encrypted now",
          "If you see HTTP requests, you can see exactly what data was sent — a security/privacy concern",
          "Clear filter and type: tls.handshake.type==1",
          "This shows TLS Client Hello packets — the start of every HTTPS connection",
          "Click on one and expand 'Transport Layer Security' → 'Handshake Protocol' → 'Extension: server_name'",
          "This shows the SNI (Server Name Indication) — the website domain being connected to, even though traffic is encrypted!",
          "Firewalls use SNI to block websites without decrypting traffic — this is how 'web filtering' works",
          "Go to Statistics → Protocol Hierarchy — this shows percentage breakdown of all protocols",
          "Note the percentage of TLS/SSL vs plain HTTP — modern networks should be 90%+ encrypted",
          "Go to Statistics → Conversations → TCP tab",
          "Click the 'Bytes' column header to sort by traffic volume — find the 'top talkers'",
          "These are the connections transferring the most data — useful for finding unusual data exfiltration",
          "Clear all filters. Now let's follow a complete conversation",
          "Filter: http (if you have any HTTP traffic) or pick any TCP stream",
          "Click on an HTTP GET request, right-click → Follow → TCP Stream",
          "A new window opens showing the complete conversation in readable text (blue = sent, red = received)",
          "For HTTP, you can see headers, cookies, and full page content — this is why HTTPS matters!",
          "Close the stream window",
          "Go to File → Export Objects → HTTP",
          "This shows all files transferred via HTTP — images, scripts, HTML pages",
          "Select any file and click 'Save' — you've just extracted a file from network traffic! (forensics skill)",
          "Now let's look for potential security issues. Filter: tcp.analysis.retransmission",
          "These are retransmitted packets — could indicate network problems or packet loss",
          "Filter: tcp.analysis.duplicate_ack",
          "Duplicate ACKs often indicate congestion or packet loss",
          "Filter: icmp.type==3",
          "ICMP Type 3 is 'Destination Unreachable' — shows what connections are being blocked",
          "Expand the packet to see the code: Code 3 = port unreachable, Code 1 = host unreachable, etc.",
          "Save your capture: File → Save As → choose location, save as .pcapng",
          "This capture file can be analyzed later or shared with other security analysts",
          "BONUS filter: frame contains 'password' — searches for the literal string 'password' in packets (scary!)"
        ],
        verify: "You can capture traffic, filter by protocol (DNS, HTTP, TLS), identify new connections (SYN flags), extract SNI from HTTPS, analyze conversations and top talkers, export transferred files, and identify network issues (retransmissions, unreachables)." }
    ],
    project: { id: "proj-wireshark", title: "Packet Analysis Investigation",
      description: "Analyze a suspicious PCAP file and write a security incident report.",
      prompt: `I need to practice network forensics with Wireshark. Create a scenario:\n\nSCENARIO: SecureCorp's IDS flagged unusual DNS traffic from 10.10.5.42. You have a PCAP to analyze.\n\nHelp me practice by telling me:\n1. What Wireshark filters to use to investigate DNS tunneling\n2. How to identify data exfiltration via DNS TXT records\n3. How to trace the source IP and find all connections it made\n4. What indicators of compromise (IOCs) to look for\n5. How to write a security incident report with findings\n\nGive me a report template and example findings with dummy IPs and domains.` }
  },
  // ═══════ PHASE 2: CYBERSECURITY CORE (Weeks 4-5) ═══════
  {
    week: 4, phase: 2, phaseTitle: "CYBERSECURITY CORE CONCEPTS",
    title: "Cybersecurity Fundamentals & Cryptography",
    gapBadges: ["COMPLIANCE"],
    objectives: [
      "Master the CIA Triad and security principles",
      "Understand encryption: symmetric, asymmetric, hashing",
      "Learn TLS/SSL handshake in detail",
      "Understand VPNs (IPSec and SSL VPN)",
      "Learn Zero Trust architecture principles",
      "Understand compliance frameworks (NIST, PCI-DSS, HIPAA basics)"
    ],
    services: ["CIA Triad", "Encryption", "TLS/SSL", "VPN", "PKI", "Zero Trust", "IAM"],
    resources: [
      { name: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
      { name: "TLS 1.3 Explained", url: "https://tls13.xargs.org/" }
    ],
    prompts: [
      { title: "Encryption & PKI for Firewall Engineers", prompt: `Teach me encryption as it applies to firewalls:\n1. Symmetric (AES-256): when/why — bulk data encryption\n2. Asymmetric (RSA, ECDSA): when/why — key exchange, digital signatures\n3. Hashing (SHA-256, MD5): integrity verification\n4. Public vs Private keys: who holds what, signing vs encrypting\n5. PKI: Certificate Authorities, certificate chains, trust stores\n6. TLS 1.3 handshake: step-by-step with what happens at each stage\n7. Why SSL decryption on a firewall is necessary — and the ethical/legal concerns\n\nFor each concept, explain how a Palo Alto Firewall uses or interacts with it.` },
      { title: "Zero Trust Architecture", prompt: `Explain Zero Trust for a network security engineer:\n1. Core principle: "Never trust, always verify"\n2. How it differs from perimeter-based security\n3. Micro-segmentation: why and how\n4. Identity-based access vs network-based access\n5. How Palo Alto implements Zero Trust (User-ID, App-ID, zone-based policies)\n6. NIST SP 800-207 Zero Trust Architecture reference\n\nDesign a Zero Trust policy set for SecureCorp: employees, contractors, guests — different access levels.` },
      { title: "Compliance Frameworks", prompt: `Give me a practical overview of security compliance frameworks that a network security engineer needs to know:\n1. NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover)\n2. PCI-DSS: the key requirements that affect firewall configuration (segmentation, logging, default deny)\n3. HIPAA: network security requirements for healthcare\n4. CIS Controls: the top 18 controls and which ones firewalls address\n\nFor each, tell me: what's required, how a Palo Alto Firewall helps meet it, and what auditors look for.` }
    ],
    labs: [
      { id: "lab-4-1", title: "TLS Handshake Analysis", duration: "30 min", difficulty: "Intermediate",
        steps: ["Open Wireshark, start capture", "Visit https://google.com in your browser", "Filter: tls.handshake → see the full TLS 1.3 handshake", "Identify: Client Hello (SNI, cipher suites), Server Hello, Certificate", "Note: you CANNOT see HTTP data inside TLS — this is why SSL decryption exists", "Compare TLS 1.2 vs 1.3: filter by tls.handshake.version", "Document: what can a firewall see without SSL decryption? (SNI, cert, IP only)"],
        verify: "You can identify every stage of a TLS handshake in Wireshark." },
      { id: "lab-4-2", title: "VPN Concepts — IPSec Phases", duration: "25 min", difficulty: "Intermediate",
        steps: ["Ask Claude: 'Walk me through IPSec IKEv1 Phase 1 and Phase 2 step by step'", "Draw the process: IKE SA negotiation → authentication → IPSec SA → tunnel up", "Key terms to know: ISAKMP, DH Group, ESP, AH, PFS", "Compare: IPSec (site-to-site) vs SSL VPN (remote access)", "Document: what settings must MATCH on both sides for a tunnel to come up?"],
        verify: "You can explain both IPSec phases and troubleshoot mismatches." }
    ],
    project: null
  },
  {
    week: 5, phase: 2,
    title: "Network Security Concepts & Firewall Theory",
    gapBadges: ["THREAT INTEL"],
    objectives: [
      "Understand firewall types: packet filter, stateful, NGFW, WAF",
      "Learn how App-ID, User-ID, Content-ID work on Palo Alto",
      "Understand IPS vs IDS — and why NGFWs replaced both",
      "Learn common attack types and how firewalls defend against them",
      "Understand threat intelligence and IOCs"
    ],
    services: ["NGFW", "App-ID", "User-ID", "Content-ID", "IPS/IDS", "WAF", "Threat Intel"],
    resources: [
      { name: "Palo Alto NGFW Overview", url: "https://www.paloaltonetworks.com/network-security/next-generation-firewall" },
      { name: "MITRE ATT&CK Framework", url: "https://attack.mitre.org/" }
    ],
    prompts: [
      { title: "Firewall Evolution", prompt: `Explain the evolution of firewalls for a security student:\n1. Packet filter (Layer 3-4): ACLs on routers — what it can/can't do\n2. Stateful inspection (Layer 4): connection tracking — how it improved security\n3. NGFW (Layer 7): Palo Alto's approach — App-ID, User-ID, Content-ID\n4. WAF: web application firewall — how it differs from NGFW\n5. Cloud firewalls: AWS Security Groups, Azure NSGs\n\nFor each: what it inspects, what it misses, and a real attack it can/can't stop.` },
      { title: "Common Network Attacks", prompt: `Teach me the top 20 network attacks every firewall engineer must know:\nFor each: what it is, how it works, what layer it targets, and how a Palo Alto NGFW detects/blocks it.\n\nCategories:\n- Reconnaissance: port scanning, ping sweeps, OSINT\n- DoS/DDoS: SYN flood, UDP flood, amplification\n- Man-in-the-Middle: ARP spoofing, DNS hijacking, SSL stripping\n- Application: SQL injection, XSS, command injection\n- Lateral movement: pass-the-hash, RDP brute force\n- Data exfil: DNS tunneling, ICMP tunneling, encrypted channels\n- Malware: C2 callbacks, ransomware, cryptominers\n\nInclude MITRE ATT&CK technique IDs where applicable.` },
      { title: "Palo Alto App-ID, User-ID, Content-ID", prompt: `Explain the three pillars of Palo Alto's NGFW technology:\n\n1. App-ID: How does Palo Alto identify applications regardless of port/protocol/encryption? Walk through the App-ID process: traffic → known protocol check → SSL decryption → signatures → heuristics. How is this different from port-based rules?\n\n2. User-ID: How does Palo Alto map IP addresses to usernames? Methods: AD integration, captive portal, GlobalProtect, Syslog. Why is this important for Zero Trust?\n\n3. Content-ID: How does Palo Alto inspect content? Threat Prevention (IPS signatures), URL Filtering, File Blocking, Data Filtering (DLP), WildFire (sandbox). How do Security Profiles attach to policies?\n\nFor each, give me a real scenario where it catches something a traditional firewall would miss.` }
    ],
    labs: [
      { id: "lab-5-1", title: "Identify Applications in Traffic", duration: "25 min", difficulty: "Intermediate",
        steps: ["Capture traffic with Wireshark for 3 minutes of normal browsing", "Try to identify which applications are running based on ports alone", "Notice: port 443 traffic could be YouTube, Slack, malware C2 — you can't tell!", "Now filter by TLS SNI: tls.handshake.extensions_server_name", "This is what App-ID does at scale — identifies the actual application", "Document: List 5 apps that use port 443 but are completely different applications"],
        verify: "You understand why port-based rules are insufficient for modern security." },
      { id: "lab-5-2", title: "MITRE ATT&CK Mapping Exercise", duration: "30 min", difficulty: "Intermediate",
        steps: ["Go to attack.mitre.org → Enterprise Matrix", "Pick 5 techniques from Initial Access → map to firewall defenses", "Pick 5 from Lateral Movement → which does a firewall detect?", "Pick 5 from Exfiltration → how would Palo Alto's Content-ID help?", "Create a table: Technique → MITRE ID → Detection Method → Palo Alto Feature", "Identify gaps: what can't a firewall detect? (requires EDR/SIEM)"],
        verify: "You can map attacks to MITRE ATT&CK and identify firewall detection points." }
    ],
    project: { id: "proj-security-design", title: "Security Architecture for SecureCorp",
      description: "Design a complete network security architecture with zones, policies, and defenses.",
      prompt: `Help me design a complete network security architecture for SecureCorp:\n\nENVIRONMENT:\n- 500 employees, 3 offices, 1 datacenter\n- Web servers (DMZ), app servers (internal), database servers (restricted)\n- Remote workers (VPN), guest WiFi, IoT devices\n\nDELIVERABLES:\n1. Network zone diagram: Trust, Untrust, DMZ, Internal, Restricted, Guest\n2. Security policy matrix: source zone → dest zone → allowed apps/services\n3. NAT strategy: source NAT for outbound, dest NAT for DMZ servers\n4. VPN design: site-to-site between offices, GlobalProtect for remote users\n5. Threat prevention: which Security Profiles on which policies\n6. Compliance: how this meets PCI-DSS and NIST requirements\n\nGive me the complete design with dummy IPs and rule names.` }
  },
  // ═══════ PHASE 3: PALO ALTO NGFW (Weeks 6-11) ═══════
  {
    week: 6, phase: 3, phaseTitle: "PALO ALTO NGFW MASTERY",
    title: "Palo Alto Initial Setup, Zones & Interfaces",
    gapBadges: [],
    objectives: [
      "Understand Palo Alto hardware and PAN-OS architecture",
      "Perform initial configuration (mgmt IP, admin access, licensing)",
      "Configure zones: Trust, Untrust, DMZ",
      "Set up Layer 3 interfaces with IP addressing",
      "Understand Virtual Wire (vWire) and Layer 2 modes",
      "Configure Virtual Routers and basic routing"
    ],
    services: ["PAN-OS", "Zones", "Interfaces", "Virtual Router", "vWire", "Layer 3"],
    resources: [
      { name: "PAN-OS Admin Guide", url: "https://docs.paloaltonetworks.com/pan-os" },
      { name: "Palo Alto EDU (Free)", url: "https://beacon.paloaltonetworks.com/" }
    ],
    prompts: [
      { title: "Palo Alto Initial Configuration", prompt: `Walk me through the complete initial setup of a Palo Alto NGFW from factory default:\n1. Console cable connection → set management IP\n2. Access web GUI → change default admin password\n3. Register device → activate licenses (Threat Prevention, URL, WildFire, GlobalProtect, DNS Security)\n4. PAN-OS update: check for latest, download, install, reboot\n5. Content update: download latest App-ID, Threat signatures\n6. Configure management profile (which services: HTTPS, SSH, ping)\n7. Create zones: Trust, Untrust, DMZ\n8. Configure interfaces: eth1/1 (Untrust, DHCP from ISP), eth1/2 (Trust, 10.0.1.1/24), eth1/3 (DMZ, 172.16.1.1/24)\n9. Create Virtual Router, add interfaces, set default route\n10. First security policy: allow Trust→Untrust for testing\n11. Commit!\n\nExplain what each step does and common mistakes.` },
      { title: "Zones & Interface Types", prompt: `Explain Palo Alto zone-based architecture:\n1. What is a zone? Why zone-based is more secure than interface-based\n2. Zone types: Layer 3, Layer 2, Virtual Wire, Tap, Tunnel\n3. When to use each: L3 for routing, vWire for inline transparent, Tap for monitoring\n4. Intra-zone vs inter-zone traffic — default behavior\n5. Zone Protection Profiles: what attacks they prevent (flood, recon, packet-based)\n\nDesign zones for SecureCorp: Trust, Untrust, DMZ, Server, Guest, VPN — explain each.` }
    ],
    labs: [
      { id: "lab-6-1", title: "Palo Alto Initial Configuration (Simulated)", duration: "60 min", difficulty: "Intermediate",
        steps: ["Option A: Use Palo Alto EVE-NG lab image or GNS3", "Option B: Use Palo Alto's free Beacon learning environment", "Option C: Follow along with Claude describing each step (dry run)", "Set management IP: set deviceconfig system ip-address 192.168.1.1", "Access WebGUI at https://192.168.1.1 → change admin password", "Device → Licenses → Activate (or use eval license)", "Device → Dynamic Updates → download latest content", "Network → Zones → Create: Trust, Untrust, DMZ", "Network → Interfaces → Configure eth1/1 (Untrust), eth1/2 (Trust)", "Network → Virtual Routers → default → add interfaces + default route", "Commit → verify interface status shows green"],
        verify: "Firewall has zones, interfaces, routes, and can pass traffic." },
      { id: "lab-6-2", title: "Zone Protection Profiles", duration: "25 min", difficulty: "Intermediate",
        steps: ["Network → Network Profiles → Zone Protection", "Create profile: protect-untrust", "Enable: SYN Flood protection (SYN cookies), ICMP Flood, UDP Flood", "Enable: Reconnaissance Protection (TCP/UDP port scans, host sweeps)", "Set thresholds: Alert at 1000 CPS, Activate at 5000, Maximum at 10000", "Apply profile to Untrust zone", "Commit → verify profile is active"],
        verify: "Untrust zone is protected against floods and port scans." }
    ],
    project: null
  },
  {
    week: 7, phase: 3,
    title: "Security Policies, Objects & NAT",
    gapBadges: [],
    objectives: [
      "Write security policies with proper rule logic",
      "Create address objects, service objects, and groups",
      "Understand rule shadowing and policy ordering",
      "Configure Source NAT, Destination NAT, and Bidirectional NAT",
      "Implement the principle of least privilege in policies"
    ],
    services: ["Security Policies", "Address Objects", "NAT", "App-ID Rules", "Service Objects"],
    resources: [{ name: "Security Policy Best Practices", url: "https://docs.paloaltonetworks.com/best-practices/10-0/security-policy-best-practices" }],
    prompts: [
      { title: "Security Policy Design", prompt: `Teach me Palo Alto security policy design from scratch:\n1. Anatomy of a rule: Source Zone/IP → Dest Zone/IP → Application → Service → Action → Security Profile\n2. Rule types: universal, intrazone, interzone\n3. Rule ordering: top-to-bottom, first match wins — why order matters\n4. Rule shadowing: how to detect and fix it\n5. Best practices: explicit deny-all at bottom, log at session end, use App-ID not port\n6. Default rules: interzone-default (deny), intrazone-default (allow)\n\nDesign a complete policy set for SecureCorp:\n- Allow Trust → Untrust: web-browsing, ssl, dns, office365 (App-ID!)\n- Allow DMZ → Untrust: only specific server apps\n- Allow Trust → DMZ: admin access only from IT subnet\n- Deny everything else (explicit)\n\nFor each rule, explain WHY and include Security Profiles.` },
      { title: "NAT on Palo Alto", prompt: `Teach me NAT on Palo Alto (it's different from Cisco!):\n1. Source NAT: dynamic IP/port (PAT) for internet access\n2. Static NAT: 1-to-1 for public servers\n3. Destination NAT: port forwarding (external IP → internal server)\n4. Bidirectional NAT: combined source + destination translation\n5. U-Turn NAT: internal users accessing internal servers via public IP\n6. NAT rule ordering: most specific first\n\nCRITICAL: Palo Alto evaluates security policies on ORIGINAL (pre-NAT) IPs for destination and POST-NAT for source. Explain this with packet flow examples.` }
    ],
    labs: [
      { id: "lab-7-1", title: "Build Complete Security Policies", duration: "45 min", difficulty: "Intermediate",
        steps: ["Create Address Objects: internal-servers (10.0.2.0/24), dmz-servers (172.16.1.0/24), it-admins (10.0.1.0/28)", "Create Address Group: all-internal containing Trust + Server subnets", "Create Service Object: custom-app-8443 (TCP/8443)", "Policy 1: Trust→Untrust: Allow web-browsing, ssl, dns (App-ID) — with URL Filtering profile", "Policy 2: Untrust→DMZ: Allow web-browsing, ssl to dmz-servers (Dest NAT)", "Policy 3: Trust→DMZ: Allow ssh, rdp from it-admins only", "Policy 4: DMZ→Trust: Deny (explicit) — DMZ should NOT reach internal", "Policy 5: Explicit deny-all-all with logging", "Review: Policy Optimizer → check for unused rules, shadowed rules"],
        verify: "5 policies created. No shadowing. Logs show traffic matching correct rules." },
      { id: "lab-7-2", title: "NAT Configuration", duration: "30 min", difficulty: "Intermediate",
        steps: ["Source NAT: Trust→Untrust, translate to interface IP (dynamic IP/port)", "Destination NAT: Untrust→DMZ, external IP 203.0.113.10 → internal 172.16.1.10 (web server)", "Verify: Traffic Monitor → check NAT translations in log", "Test U-Turn: internal user → 203.0.113.10 → should reach internal 172.16.1.10", "Create bidirectional NAT for a server that needs consistent public IP"],
        verify: "Internet access works (SNAT). Web server reachable from outside (DNAT)." }
    ],
    project: null
  },
  {
    week: 8, phase: 3,
    title: "VPNs — IPSec Site-to-Site & GlobalProtect",
    gapBadges: [],
    objectives: [
      "Configure IPSec site-to-site VPN between two firewalls",
      "Set up GlobalProtect for remote user VPN",
      "Understand IKE Phase 1 and Phase 2 negotiation",
      "Configure split tunneling vs full tunnel",
      "Troubleshoot VPN issues"
    ],
    services: ["IPSec VPN", "GlobalProtect", "IKE", "Crypto Profiles", "Tunnel Interface"],
    resources: [{ name: "GlobalProtect Admin Guide", url: "https://docs.paloaltonetworks.com/globalprotect" }],
    prompts: [
      { title: "IPSec VPN Configuration", prompt: `Walk me through configuring an IPSec site-to-site VPN on Palo Alto:\n1. Create IKE Crypto Profile: DH group 20, AES-256-CBC, SHA-256, lifetime 8h\n2. Create IPSec Crypto Profile: ESP, AES-256-GCM, PFS DH group 20, lifetime 1h\n3. Create IKE Gateway: peer IP, pre-shared key, local/peer identification\n4. Create Tunnel Interface: tunnel.1, assign to VPN zone, assign IP\n5. Create IPSec Tunnel: link IKE gateway + IPSec profile + tunnel interface\n6. Create static route: remote subnet → tunnel.1\n7. Security policies: allow traffic between VPN zone and Trust zone\n8. Commit and test!\n\nThen: what to check when the tunnel won't come up — systematic troubleshooting.` },
      { title: "GlobalProtect Setup", prompt: `Walk me through setting up GlobalProtect for remote access VPN:\n1. SSL/TLS Certificate: generate or import for the portal/gateway\n2. Configure Portal: authentication profile (LDAP/RADIUS), agent config\n3. Configure Gateway: tunnel settings, IP pool for clients, split tunnel config\n4. Security policies: GlobalProtect zone → Trust/Untrust access rules\n5. HIP (Host Information Profile): check if client has antivirus, disk encryption\n6. Split tunnel vs full tunnel: when to use each\n7. Always-On VPN: what it is and when to enforce it\n\nDesign for SecureCorp: 200 remote users, split tunnel for Zoom/Teams, full tunnel for sensitive data.` }
    ],
    labs: [
      { id: "lab-8-1", title: "IPSec Site-to-Site VPN", duration: "50 min", difficulty: "Advanced",
        steps: ["Create IKE Crypto Profile: aes-256-cbc, sha256, dh-group20, 8h lifetime", "Create IPSec Crypto Profile: aes-256-gcm, PFS dh-group20, 1h lifetime", "Create Tunnel Interface: tunnel.1, zone: VPN, IP: 169.254.1.1/30", "Create IKE Gateway: peer IP, PSK, local-id=left, peer-id=right", "Create IPSec Tunnel: link IKE GW + IPSec profile + proxy IDs", "Static route: 10.20.0.0/16 → tunnel.1", "Security policy: VPN↔Trust allow any", "Commit → Monitor → IPSec Tunnels → verify Phase 1 + 2 are UP", "Test: ping remote subnet through tunnel"],
        verify: "IPSec tunnel shows green. Traffic flows between sites." },
      { id: "lab-8-2", title: "GlobalProtect Remote Access VPN", duration: "45 min", difficulty: "Advanced",
        steps: ["Generate self-signed SSL certificate for GP portal/gateway", "Configure Authentication Profile: local DB (for lab) or LDAP", "Configure GlobalProtect Portal: agent config, gateway address", "Configure Gateway: tunnel mode, IP pool 10.100.0.0/24, DNS settings", "Configure split tunnel: exclude Zoom/Teams from tunnel", "Create security policies for GP zone", "Download GP client → connect → verify IP in pool range", "Check Monitor → GlobalProtect → see connected users"],
        verify: "GP client connects. User gets IP from pool. Split tunnel works." }
    ],
    project: { id: "proj-vpn", title: "Multi-Site VPN Design",
      description: "Design and configure VPN architecture for 3 offices + remote workers.",
      prompt: `Design VPN architecture for SecureCorp:\n- HQ (Atlanta): Hub firewall, 10.10.0.0/16\n- Branch 1 (Chicago): Spoke, 10.20.0.0/16\n- Branch 2 (Denver): Spoke, 10.30.0.0/16\n- 200 remote workers: GlobalProtect\n\nDesign:\n1. Hub-and-spoke IPSec VPNs between all sites\n2. Crypto settings (justify each choice)\n3. Routing: how branches reach each other through hub\n4. GlobalProtect: IP pools, split tunnel policy, HIP checks\n5. Failover: what happens if HQ firewall goes down?\n6. All security policies needed\n\nGive me complete configurations and a network diagram description.` }
  },
  {
    week: 9, phase: 3,
    title: "SSL Decryption, URL Filtering & Security Profiles",
    gapBadges: [],
    objectives: [
      "Configure SSL Forward Proxy decryption",
      "Understand SSL Inbound Inspection for servers",
      "Set up URL Filtering with custom categories",
      "Configure all Security Profiles: Antivirus, Anti-Spyware, Vulnerability, File Blocking, WildFire, Data Filtering",
      "Create Security Profile Groups for consistent application"
    ],
    services: ["SSL Decryption", "URL Filtering", "Antivirus", "Anti-Spyware", "WildFire", "File Blocking", "Data Filtering"],
    resources: [{ name: "SSL Decryption Best Practices", url: "https://docs.paloaltonetworks.com/best-practices/10-0/decryption-best-practices" }],
    prompts: [
      { title: "SSL Decryption Deep Dive", prompt: `Teach me SSL Decryption on Palo Alto in detail:\n1. Why it's necessary: 90%+ of traffic is encrypted — can't inspect what you can't see\n2. Forward Proxy: how it works (MITM with trusted CA), what clients see, certificate generation\n3. Inbound Inspection: how to decrypt traffic to your own servers (need server's private key)\n4. SSL No-Decrypt rules: what should NEVER be decrypted (healthcare, financial, privacy)\n5. Certificate management: generating the CA cert, deploying to endpoints via GPO/MDM\n6. Troubleshooting: certificate errors, performance impact, exemptions\n7. Legal/ethical considerations: employee notification, privacy laws\n\nStep-by-step configuration on Palo Alto with the complete policy set.` },
      { title: "Security Profiles Complete Guide", prompt: `Walk me through ALL Palo Alto Security Profiles:\n1. Antivirus: what it catches, signature-based + WildFire, decoder scope\n2. Anti-Spyware: C2 detection, DNS sinkhole configuration, botnet detection\n3. Vulnerability Protection: IPS signatures, severity-based actions\n4. URL Filtering: categories, custom URLs, credential phishing protection\n5. File Blocking: by type, direction, action (alert/block/continue)\n6. WildFire: sandbox analysis, file forwarding, verdict types\n7. Data Filtering: DLP patterns (SSN, credit cards, custom regex)\n\nCreate 3 profile groups: "strict" (for servers), "standard" (for employees), "basic" (for guests). For each, specify every profile setting.` }
    ],
    labs: [
      { id: "lab-9-1", title: "SSL Forward Proxy Decryption", duration: "45 min", difficulty: "Advanced",
        steps: ["Device → Certificate Management → Generate self-signed CA cert", "Check 'Forward Trust' and 'Forward Untrust' on the CA cert", "Create Decryption Profile: set allowed TLS versions, check cert revocation", "Create Decryption Policy: Trust→Untrust, SSL Forward Proxy", "Create No-Decrypt rules FIRST: healthcare sites, financial sites", "Deploy CA cert to test machine (manual import to browser trust store)", "Commit → browse HTTPS site → check Monitor → verify decrypted traffic", "Verify: Wireshark shows firewall's cert, not google.com's original cert"],
        verify: "HTTPS traffic is decrypted. No certificate errors on client. No-decrypt rules work." },
      { id: "lab-9-2", title: "Security Profiles & URL Filtering", duration: "40 min", difficulty: "Intermediate",
        steps: ["Create Antivirus Profile: block on all decoders, enable WildFire inline", "Create Anti-Spyware Profile: block severity critical+high, DNS sinkhole enabled", "Create Vulnerability Profile: block critical+high, alert medium", "Create URL Filtering Profile: block malware/phishing/adult, alert streaming-media", "Create File Blocking Profile: block PE/DLL uploads, alert on EXE downloads", "Create Profile Group: 'standard-protection' with all 5 profiles", "Attach profile group to your Trust→Untrust security policy", "Commit → test: try accessing a blocked URL category", "Verify in logs: URL Filtering logs show blocks"],
        verify: "All profiles active. Blocked URLs show in logs. WildFire forwards files." }
    ],
    project: null
  },
  {
    week: 10, phase: 3,
    title: "High Availability, Panorama & Advanced Features",
    gapBadges: [],
    objectives: [
      "Configure Active/Passive HA between two firewalls",
      "Understand Panorama centralized management",
      "Configure Device Groups, Templates, and Template Stacks",
      "Set up Policy-Based Forwarding (PBF)",
      "Configure path monitoring and link monitoring"
    ],
    services: ["HA", "Panorama", "Device Groups", "Templates", "PBF", "Path Monitoring"],
    resources: [{ name: "Panorama Admin Guide", url: "https://docs.paloaltonetworks.com/panorama" }],
    prompts: [
      { title: "HA Configuration", prompt: `Walk me through Palo Alto Active/Passive HA setup:\n1. Requirements: same model, same PAN-OS, same licenses\n2. HA1 link: control plane (hello, heartbeat, config sync)\n3. HA2 link: data plane (session sync)\n4. HA3 link (optional): packet forwarding\n5. Configuration: HA group ID, mode, election settings, preemption\n6. Failover triggers: link monitoring, path monitoring, heartbeat failure\n7. Session sync: which sessions survive failover?\n8. Split brain: what it is and how to prevent it\n\nStep-by-step config for two PA-460s in A/P mode.` },
      { title: "Panorama Management", prompt: `Teach me Panorama for managing multiple firewalls:\n1. What Panorama does: centralized config, logging, reporting\n2. Device Groups: shared policies pushed to firewall groups\n3. Templates: shared network/device config (interfaces, zones, routes)\n4. Template Stacks: layered templates (base + site-specific)\n5. Pre-rules and Post-rules: what runs before/after local rules\n6. Log Collectors: centralized logging architecture\n\nDesign for SecureCorp: 3 sites, 6 firewalls. How to organize Device Groups and Templates?` }
    ],
    labs: [
      { id: "lab-10-1", title: "HA Active/Passive Configuration", duration: "50 min", difficulty: "Advanced",
        steps: ["On FW-A: Device → High Availability → General: HA Group 1, Mode A/P", "Configure HA1: dedicated interface, peer IP", "Configure HA2: dedicated interface, peer IP", "Enable: Link Monitoring (ethernet1/1), Path Monitoring (ping 8.8.8.8)", "Set election settings: FW-A priority 100 (primary), preemptive=yes", "On FW-B: mirror config with priority 200 (secondary)", "Commit BOTH → Dashboard → HA shows active/passive", "Test: disconnect FW-A uplink → FW-B takes over in <1 second", "Reconnect → FW-A preempts back (if configured)"],
        verify: "HA pair formed. Failover works. Sessions survive." },
      { id: "lab-10-2", title: "Panorama Basics", duration: "40 min", difficulty: "Advanced",
        steps: ["Deploy Panorama VM (or follow along with Claude dry run)", "Add managed firewalls: Panorama → Managed Devices → Add", "Create Device Group: 'All-Sites' with pre-rules (shared policies)", "Create Template: 'Base-Config' with DNS, NTP, syslog settings", "Create Template Stack: 'HQ-Stack' = Base-Config + HQ-Specific", "Push a pre-rule policy to all firewalls from Panorama", "Verify: on managed firewall, see Panorama-pushed rules (greyed out, can't edit locally)"],
        verify: "Panorama manages firewalls. Pushed policies appear on devices." }
    ],
    project: { id: "proj-ha-panorama", title: "Enterprise HA + Panorama Deployment",
      description: "Design and configure HA pairs managed by Panorama across 3 sites.",
      prompt: `Design and configure enterprise deployment for SecureCorp:\n1. 3 sites, each with HA pair (6 firewalls total)\n2. Panorama managing all devices\n3. Device Group hierarchy: Global (shared threat policies) → Regional → Site\n4. Template Stacks: Base → Region → Site-specific\n5. HA design: active/passive, link+path monitoring\n6. Logging: all logs to Panorama log collectors\n\nGive me complete Panorama config, Device Group structure, Template hierarchy, and shared security policies.` }
  },
  {
    week: 11, phase: 3,
    title: "Troubleshooting, Logs & Packet Captures",
    gapBadges: [],
    objectives: [
      "Master Palo Alto Traffic, Threat, URL, and System logs",
      "Perform packet captures on the firewall (pcap)",
      "Use CLI debugging commands",
      "Troubleshoot common issues: rules not matching, NAT failures, VPN down",
      "Understand packet flow through the firewall"
    ],
    services: ["Traffic Logs", "Threat Logs", "Packet Capture", "CLI Debug", "Packet Flow"],
    resources: [{ name: "PAN-OS CLI Reference", url: "https://docs.paloaltonetworks.com/pan-os/11-1/pan-os-cli-quick-start" }],
    prompts: [
      { title: "Palo Alto Packet Flow", prompt: `Explain the complete packet flow through a Palo Alto NGFW — this is THE most important concept for troubleshooting:\n\n1. Ingress interface → Zone lookup\n2. Flow lookup (existing session?)\n3. If new session: Forwarding lookup (routing, PBF)\n4. NAT policy lookup (pre-NAT dest for security policy)\n5. Security policy lookup (zone/IP/app/user)\n6. Session allocation\n7. Content inspection (Security Profiles: AV, IPS, URL, etc.)\n8. Forwarding → Egress interface → NAT translation → out\n\nFor each stage, tell me: what can go wrong, what log to check, and what CLI command to debug it.` },
      { title: "Troubleshooting Methodology", prompt: `Give me a systematic troubleshooting methodology for Palo Alto:\n\nScenario 1: "Traffic is being dropped" — step-by-step to find why\nScenario 2: "NAT isn't translating" — how to verify and fix\nScenario 3: "VPN tunnel won't come up" — Phase 1 vs Phase 2 issues\nScenario 4: "SSL decryption causing certificate errors" — common causes\nScenario 5: "User says website is slow" — how to check if firewall is the bottleneck\n\nFor each: exact CLI commands, log filters, and resolution steps.` }
    ],
    labs: [
      { id: "lab-11-1", title: "Packet Capture on Palo Alto", duration: "35 min", difficulty: "Advanced",
        steps: ["CLI: debug dataplane packet-diag set filter match source 10.0.1.100", "debug dataplane packet-diag set filter match destination 8.8.8.8", "debug dataplane packet-diag set capture stage firewall file cap1.pcap", "debug dataplane packet-diag set capture on", "Generate traffic from 10.0.1.100 → 8.8.8.8", "debug dataplane packet-diag set capture off", "scp export cap1.pcap to your workstation", "Open in Wireshark → analyze what the firewall sees"],
        verify: "You captured live traffic from the firewall's perspective." },
      { id: "lab-11-2", title: "Log Analysis & Troubleshooting", duration: "40 min", difficulty: "Advanced",
        steps: ["Monitor → Traffic: filter by source 10.0.1.100", "Check: action (allow/deny), rule name, application, bytes", "Monitor → Threat: filter last 24 hours → review any threats detected", "CLI: show session all filter source 10.0.1.100 → see active sessions", "CLI: show running security-policy → verify policy order", "CLI: test security-policy-match → simulate a packet and see which rule hits", "CLI: show counter global filter delta yes severity drop → find drop reasons", "Identify: which counter is incrementing? That's your problem!"],
        verify: "You can identify why traffic is allowed/denied and find the root cause." }
    ],
    project: { id: "proj-troubleshoot", title: "Troubleshooting Challenge Lab",
      description: "Given 5 broken scenarios, diagnose and fix each using systematic methodology.",
      prompt: `Create 5 troubleshooting scenarios for a Palo Alto firewall where I need to find and fix the problem:\n\n1. Users can't browse the internet (everything was working yesterday)\n2. IPSec VPN tunnel shows Phase 1 up but Phase 2 down\n3. Web server in DMZ is unreachable from outside despite NAT rule existing\n4. SSL decryption is causing certificate errors for banking websites only\n5. A specific application (Slack) is blocked but no deny rule exists for it\n\nFor each scenario: describe the symptoms, then guide me through the troubleshooting process using CLI commands and log analysis. Don't give me the answer immediately — make me work through it step by step.` }
  },
  // ═══════ PHASE 4: ADJACENT SECURITY TOOLS (Weeks 12-13) ═══════
  {
    week: 12, phase: 4, phaseTitle: "SECURITY ECOSYSTEM & AUTOMATION",
    title: "Cisco ISE, Zscaler & Cisco ASA",
    gapBadges: ["SIEM"],
    objectives: [
      "Understand Cisco ISE for network access control (NAC)",
      "Learn Zscaler cloud proxy architecture",
      "Understand Cisco ASA basics and how it compares to Palo Alto",
      "Understand SIEM concepts and log correlation with Splunk/Cortex"
    ],
    services: ["Cisco ISE", "Zscaler", "Cisco ASA", "SIEM", "Splunk", "Cortex XSIAM"],
    resources: [
      { name: "Cisco ISE Overview", url: "https://www.cisco.com/site/us/en/products/security/identity-services-engine/index.html" },
      { name: "Zscaler Architecture", url: "https://www.zscaler.com/resources/security-terms-glossary/what-is-zscaler-internet-access" }
    ],
    prompts: [
      { title: "Cisco ISE & NAC", prompt: `Teach me Cisco ISE for a firewall engineer:\n1. What ISE does: network access control (who can connect to the network)\n2. 802.1X authentication: supplicant, authenticator (switch), auth server (ISE)\n3. RADIUS: how it works with ISE and Palo Alto (User-ID source)\n4. Posture assessment: is the device compliant before allowing access?\n5. Guest access: captive portal, sponsor portal\n6. How ISE integrates with Palo Alto: pxGrid → User-ID mapping\n\nWhen would a company use ISE + Palo Alto together?` },
      { title: "Zscaler Proxy Architecture", prompt: `Explain Zscaler for a firewall engineer:\n1. What Zscaler is: cloud-based secure web gateway (SWG)\n2. Architecture: ZIA (Internet Access) and ZPA (Private Access)\n3. How it differs from Palo Alto: cloud proxy vs on-prem NGFW\n4. GRE/IPSec tunnels from branch offices to Zscaler\n5. Zscaler Client Connector: endpoint agent for remote users\n6. When companies use BOTH Palo Alto + Zscaler (complementary roles)\n\nCompare: if a company has Palo Alto at the edge and Zscaler for cloud — what does each handle?` },
      { title: "SIEM & Log Correlation", prompt: `Teach me SIEM fundamentals for a network security engineer:\n1. What a SIEM does: collect, correlate, alert on security events\n2. Log sources: firewall, IDS/IPS, endpoints, servers, AD, DNS, email\n3. Correlation rules: example — failed logins from same IP + port scan = alert\n4. Common SIEMs: Splunk, Cortex XSIAM, QRadar, Sentinel\n5. How Palo Alto logs feed into SIEM (syslog, Cortex Data Lake)\n6. Key metrics: MTTD (Mean Time to Detect), MTTR (Mean Time to Respond)\n\nBuild 5 correlation rules that combine Palo Alto firewall logs with other sources to detect real attacks.` }
    ],
    labs: [
      { id: "lab-12-1", title: "Compare Palo Alto vs ASA vs Zscaler", duration: "30 min", difficulty: "Intermediate",
        steps: ["Create a comparison table with Claude:", "Columns: Feature, Palo Alto NGFW, Cisco ASA, Zscaler ZIA", "Rows: Inspection depth, VPN, URL Filtering, App Control, Deployment, Management, Cloud-native", "Research: when would you recommend each? (Cost, use case, architecture)", "Document: how they can work together in a defense-in-depth strategy"],
        verify: "You can articulate when to use each product and how they complement each other." },
      { id: "lab-12-2", title: "SIEM Correlation Rules Design", duration: "35 min", difficulty: "Intermediate",
        steps: ["Design 5 SIEM correlation rules using Palo Alto logs as a source:", "Rule 1: Brute force — 10+ deny logs from same source in 5 minutes", "Rule 2: Data exfil — outbound DNS TXT queries > 500 bytes to unusual domains", "Rule 3: Lateral movement — internal→internal traffic on ports 445/3389 from non-admin source", "Rule 4: Malware — Threat log + WildFire malware verdict + C2 callback", "Rule 5: Account compromise — successful VPN login from impossible travel location", "For each: log source, filter, threshold, severity, response action"],
        verify: "5 correlation rules documented with logic, thresholds, and response actions." }
    ],
    project: null
  },
  {
    week: 13, phase: 4,
    title: "Python for Security Automation & Network Automation",
    gapBadges: ["PYTHON", "AUTOMATION"],
    objectives: [
      "Write Python scripts for firewall automation",
      "Use Palo Alto's PAN-OS XML API and pan-os-python SDK",
      "Automate: bulk rule creation, config backup, user blocking",
      "Understand Ansible for network device configuration",
      "Introduction to Palo Alto XSOAR for SOAR automation"
    ],
    services: ["Python", "PAN-OS API", "pan-os-python", "Ansible", "XSOAR", "REST API"],
    resources: [
      { name: "PAN-OS Python SDK", url: "https://pan-os-python.readthedocs.io/" },
      { name: "PAN-OS API Guide", url: "https://docs.paloaltonetworks.com/pan-os/11-1/pan-os-panorama-api" }
    ],
    prompts: [
      { title: "PAN-OS Python Automation", prompt: `Teach me Python automation for Palo Alto firewalls:\n1. pan-os-python SDK: install, connect, basic operations\n2. Script 1: Backup running config to local file (daily cron job)\n3. Script 2: Bulk create 50 address objects from a CSV file\n4. Script 3: Find and report all unused security rules\n5. Script 4: Emergency block — add an IP to a block list during an incident\n6. Script 5: Generate a report of all rules, sorted by hit count\n\nFor each, give me complete working Python code with error handling. Also show me the equivalent PAN-OS XML API calls with curl for when Python isn't available.` },
      { title: "Ansible for Firewalls", prompt: `Teach me Ansible basics for Palo Alto network automation:\n1. Ansible overview: agentless, YAML playbooks, idempotent\n2. Palo Alto Ansible collection: paloaltonetworks.panos\n3. Playbook 1: Configure interfaces and zones on a new firewall\n4. Playbook 2: Push a standard set of security policies\n5. Playbook 3: Update PAN-OS across 10 firewalls with rolling restarts\n\nGive me complete playbook YAML for each. When should I use Ansible vs Python scripts?` }
    ],
    labs: [
      { id: "lab-13-1", title: "PAN-OS API — First Automation Scripts", duration: "50 min", difficulty: "Advanced",
        steps: ["Install: pip install pan-os-python", "Create api_connect.py: connect to firewall, print system info", "Create backup_config.py: export running config to timestamped file", "Create bulk_objects.py: read IPs from CSV, create address objects", "Create emergency_block.py: add IP to 'blocked-ips' address group", "Create rule_audit.py: list all rules with hit count, flag rules with 0 hits", "Test each script against your lab firewall", "Set up cron: backup_config.py runs every 6 hours"],
        verify: "All 5 scripts work. Config backup runs on schedule." },
      { id: "lab-13-2", title: "Ansible Playbook for Firewall Config", duration: "40 min", difficulty: "Advanced",
        steps: ["Install Ansible + Palo Alto collection: ansible-galaxy collection install paloaltonetworks.panos", "Create inventory.yml with firewall IP and credentials", "Create playbook: configure_base.yml → set DNS, NTP, syslog servers", "Create playbook: deploy_policies.yml → push 5 security rules", "Run: ansible-playbook -i inventory.yml configure_base.yml", "Verify: check firewall → settings applied correctly", "Idempotency test: run again → no changes (already applied)"],
        verify: "Ansible configures firewall. Re-run shows no changes (idempotent)." }
    ],
    project: { id: "proj-automation", title: "Security Automation Toolkit",
      description: "Build a Python toolkit for daily firewall operations and incident response.",
      prompt: `Build a complete "Palo Alto Security Automation Toolkit" in Python:\n\n1. daily_backup.py: backup all firewall configs, retain 30 days\n2. rule_audit.py: find unused rules, shadow rules, overly permissive rules → HTML report\n3. threat_report.py: pull last 24h threat logs, summarize top threats/sources/destinations\n4. incident_response.py: CLI tool that takes an IP → blocks it on all firewalls → creates ticket\n5. compliance_check.py: verify all policies have Security Profiles attached, no any/any rules\n6. panorama_push.py: push config from Panorama to all devices with validation\n\nGive me all code with argparse CLI, error handling, logging, and a README.` }
  },
  // ═══════ PHASE 5: CERTIFICATION & CAREER (Weeks 14-16) ═══════
  {
    week: 14, phase: 5, phaseTitle: "CERTIFICATION & CAREER LAUNCH",
    title: "Incident Response & Advanced Threat Hunting",
    gapBadges: ["INCIDENT RESPONSE", "FORENSICS"],
    objectives: [
      "Understand the incident response lifecycle (NIST)",
      "Perform threat hunting using Palo Alto logs",
      "Create incident response playbooks",
      "Understand forensic evidence preservation",
      "Build a complete SOC workflow"
    ],
    services: ["Incident Response", "Threat Hunting", "NIST Framework", "IOCs", "Playbooks"],
    resources: [
      { name: "NIST Incident Response Guide", url: "https://csrc.nist.gov/pubs/sp/800-61/r2/final" },
      { name: "SANS Incident Handler's Handbook", url: "https://www.sans.org/white-papers/33901/" }
    ],
    prompts: [
      { title: "Incident Response for Firewall Engineers", prompt: `Teach me incident response from a network security/firewall engineer's perspective:\n\n1. NIST IR Lifecycle: Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned\n\n2. For each phase, what does the FIREWALL ENGINEER do?\n- Preparation: baseline normal traffic, configure alerts, create block lists\n- Detection: what firewall logs indicate compromise? (C2 callbacks, data exfil, lateral movement)\n- Containment: emergency blocks, quarantine zones, VPN disconnection\n- Eradication: rule changes, malware signature updates, certificate revocation\n- Recovery: restore configs, verify clean traffic, remove emergency rules\n- Lessons Learned: rule improvements, new Security Profiles, gap analysis\n\n3. Build 3 incident response playbooks:\n- Playbook 1: Malware infection detected by WildFire\n- Playbook 2: Suspicious VPN login from foreign country\n- Playbook 3: Data exfiltration via DNS tunneling\n\nFor each: triggers, steps, commands, escalation criteria, evidence to preserve.` },
      { title: "Threat Hunting on Palo Alto", prompt: `Teach me threat hunting using Palo Alto firewall logs:\n1. What threat hunting IS vs reactive monitoring\n2. Hypothesis-based hunting: "There may be C2 traffic hiding in DNS"\n3. Key log fields to hunt in: app, bytes-sent, bytes-received, category, threat-name\n4. Hunt 1: Find beaconing behavior (regular intervals to same dest)\n5. Hunt 2: Find DNS tunneling (high volume TXT queries, long domain names)\n6. Hunt 3: Find shadow IT (unknown apps bypassing proxy)\n7. Hunt 4: Find lateral movement (internal→internal on suspicious ports)\n8. Hunt 5: Find data exfil (large outbound transfers to cloud storage)\n\nFor each: the hypothesis, the log query/filter, what to look for, and what a finding means.` }
    ],
    labs: [
      { id: "lab-14-1", title: "Threat Hunting Exercises", duration: "45 min", difficulty: "Advanced",
        steps: ["Hunt 1 - Beaconing: Monitor → Traffic → filter outbound, sort by repeat-count", "Look for same source→dest with consistent byte counts (automated C2)", "Hunt 2 - DNS Tunneling: Monitor → Traffic → filter app=dns, bytes-sent > 500", "Flag: DNS queries with abnormally long subdomain names (encoded data)", "Hunt 3 - Shadow IT: ACC (Application Command Center) → Unknown apps", "Filter: apps not in your approved list with significant data transfer", "Hunt 4 - Data Exfil: Traffic logs → filter outbound, bytes-sent > 10MB", "Check: is this to a known cloud storage? During off-hours?", "Document all findings in a threat hunt report template"],
        verify: "You've performed 4 hunts and documented findings with evidence." },
      { id: "lab-14-2", title: "Build Incident Response Playbook", duration: "35 min", difficulty: "Intermediate",
        steps: ["Create playbook template: Trigger → Severity → Steps → Escalation → Evidence", "Playbook: 'Malware Detected by WildFire'", "  Step 1: Verify alert in Threat logs → get source IP, file hash, verdict", "  Step 2: Block source IP immediately (emergency block script from Week 13!)", "  Step 3: Check WildFire report for IOCs (C2 domains, dropped files)", "  Step 4: Search logs for other hosts communicating with same C2", "  Step 5: Notify SOC lead if >3 hosts affected (escalation)", "  Step 6: Preserve evidence: export pcap, logs, WildFire report", "  Step 7: Containment confirmed → begin eradication"],
        verify: "Complete playbook with triggers, steps, commands, and escalation criteria." }
    ],
    project: null
  },
  {
    week: 15, phase: 5,
    title: "Full Enterprise Lab Build & Capstone",
    gapBadges: [],
    objectives: [
      "Build a complete enterprise network security environment",
      "Integrate all skills: zones, policies, VPN, HA, SSL decryption, monitoring",
      "Create operational documentation",
      "Practice change management procedures"
    ],
    services: ["All Palo Alto Features", "Enterprise Architecture"],
    resources: [{ name: "Palo Alto Reference Architecture", url: "https://www.paloaltonetworks.com/resources/reference-architectures" }],
    prompts: [
      { title: "Enterprise Capstone Design", prompt: `Help me build the ultimate capstone lab — a complete enterprise security deployment:\n\nSECURECORP ENTERPRISE:\n- HQ: HA pair, 500 users, 3 zones (Trust/DMZ/Server)\n- Branch: single firewall, 50 users, IPSec VPN to HQ\n- Remote workers: 200 via GlobalProtect\n- Panorama managing everything\n\nCOMPLETE CONFIG:\n1. IP scheme: all subnets documented\n2. Zones + interfaces on all firewalls\n3. Security policies: 20+ rules covering all traffic flows\n4. NAT: SNAT for internet, DNAT for DMZ servers\n5. SSL Decryption: forward proxy with no-decrypt exceptions\n6. ALL Security Profiles: AV, AS, VP, URL, FB, WF on every rule\n7. IPSec VPN: HQ↔Branch with crypto profiles\n8. GlobalProtect: full config with split tunnel + HIP checks\n9. HA: A/P pair at HQ with link+path monitoring\n10. Panorama: Device Groups + Templates for both sites\n11. Logging: syslog to SIEM + Panorama log collection\n12. Automation: Python backup script + Ansible base config\n\nGive me the COMPLETE configuration, documentation template, and testing checklist.` }
    ],
    labs: [
      { id: "lab-15-1", title: "Enterprise Capstone Build", duration: "240 min", difficulty: "Advanced",
        steps: ["Build the complete SecureCorp environment from the capstone prompt", "Configure HQ firewall: zones, interfaces, routing, base policies", "Configure HA pair: sync, failover test", "Configure NAT: SNAT + DNAT for DMZ servers", "Configure SSL Decryption: CA cert, policies, exceptions", "Configure Security Profiles: create and attach to all rules", "Configure VPN: IPSec to branch + GlobalProtect for remote users", "Configure Panorama: import both firewalls, push shared policies", "Run Python automation: backup config, rule audit", "Create operational runbook documenting the entire deployment", "Test every traffic flow against your policy design"],
        verify: "Complete enterprise environment working. All features operational. Documentation complete." }
    ],
    project: { id: "proj-capstone-netsec", title: "SecureCorp Enterprise Capstone",
      description: "Full enterprise deployment with HA, VPN, Panorama, automation, and documentation.",
      prompt: `This is my capstone. Help me build and document the complete SecureCorp enterprise with every feature configured, tested, and documented. Include a presentation-ready architecture diagram description and operational runbook.` }
  },
  {
    week: 16, phase: 5,
    title: "Certification Prep & Interview Mastery",
    gapBadges: ["INTERVIEW PREP", "SYSTEM DESIGN"],
    objectives: [
      "Prepare for Palo Alto Network Security Professional certification",
      "Prepare for NGFW Engineer Specialist certification",
      "Master network security interview questions",
      "Practice whiteboard security architecture design",
      "Build your interview portfolio from 16 weeks of projects"
    ],
    services: ["Certification Prep", "Interview Skills", "Architecture Design"],
    resources: [
      { name: "Palo Alto Beacon Learning", url: "https://beacon.paloaltonetworks.com/" },
      { name: "Palo Alto Certification Portal", url: "https://www.paloaltonetworks.com/services/education/certification" },
      { name: "Pearson VUE Scheduling", url: "https://www.pearsonvue.com/us/en/paloaltonetworks.html" }
    ],
    prompts: [
      { title: "Palo Alto Cert Practice Questions", prompt: `Give me 25 practice questions for the Palo Alto Network Security Professional certification covering:\n- PAN-OS architecture and packet flow (5 questions)\n- Security policies, zones, NAT (5 questions)\n- VPN configuration and troubleshooting (4 questions)\n- SSL Decryption and Security Profiles (4 questions)\n- HA and Panorama (4 questions)\n- Troubleshooting scenarios (3 questions)\n\nFor each: question, 4 answer choices, correct answer, and explanation of WHY.` },
      { title: "Network Security Interview Questions", prompt: `Help me prepare for network security / firewall engineer interviews:\n\nTECHNICAL QUESTIONS (15):\n1. Explain Palo Alto packet flow from ingress to egress\n2. Difference between Security Groups and NACLs on AWS\n3. How does SSL decryption work and what are the privacy concerns?\n4. Walk me through IPSec VPN Phase 1 and Phase 2\n5. How would you investigate a suspected data breach using firewall logs?\n... (give me 10 more)\n\nSCENARIO QUESTIONS (5):\n1. "Users report the internet is slow — walk me through your troubleshooting"\n2. "We need to migrate from Cisco ASA to Palo Alto — what's your plan?"\n3. "Design a network for our new office with 200 users from scratch"\n\nBEHAVIORAL (STAR) QUESTIONS (5):\n1. "Tell me about a time you resolved a critical outage"\n2. "How do you handle a security incident at 3 AM?"\n\nFor each: the answer framework, key points to hit, and red flags to avoid.` },
      { title: "Architecture Whiteboard Practice", prompt: `Give me 5 network security architecture design exercises:\n\n1. "Design secure remote access for 1,000 employees across 5 countries"\n2. "Design a PCI-DSS compliant network segment for credit card processing"\n3. "Design a multi-cloud security architecture (AWS + Azure + on-prem)"\n4. "Design a SASE migration plan from on-prem Palo Alto to Prisma Access"\n5. "Design incident detection and response architecture for a hospital"\n\nFor each: walk me through the approach, draw the architecture (describe it), specify every component, and discuss trade-offs.` },
      { title: "Top 50 Services & Concepts", prompt: `Give me rapid-fire review of the 50 concepts every network security interview tests:\nFor each: one-sentence definition, when it matters, common interview gotcha.\n\nCover: OSI model, TCP 3-way handshake, subnetting, VLAN, NAT, PAT, IPSec, SSL/TLS, PKI, RADIUS, TACACS+, 802.1X, NGFW, IPS/IDS, WAF, DLP, SIEM, SOAR, EDR, XDR, Zero Trust, micro-segmentation, least privilege, defense in depth, DMZ, bastion host, jump server, honeypot, NIST CSF, CIS Controls, PCI-DSS, HIPAA, SOC 2, kill chain, MITRE ATT&CK, APT, C2, DNS tunneling, SSL decryption, App-ID, HA, BGP, OSPF, SD-WAN, SASE, ZTNA, and more.` }
    ],
    labs: [
      { id: "lab-16-1", title: "Whiteboard Architecture Practice", duration: "90 min", difficulty: "Advanced",
        steps: ["EXERCISE 1: Secure remote access for 1,000 employees", "  5 min requirements, 15 min design, 10 min trade-offs", "  Components: GlobalProtect, split tunnel, MFA, posture checks", "EXERCISE 2: PCI-DSS compliant network segment", "  Design: isolated VLAN, encrypted transit, logging, no direct internet", "  Palo Alto features: zone isolation, SSL decryption, Security Profiles", "EXERCISE 3: Multi-cloud security (AWS + on-prem)", "  Design: Palo Alto VM-Series in AWS, IPSec VPN to on-prem, Panorama", "Ask Claude to review each design and critique it"],
        verify: "You can whiteboard 3 security architectures with trade-off discussions." },
      { id: "lab-16-2", title: "Build Interview Portfolio", duration: "60 min", difficulty: "Intermediate",
        steps: ["List ALL projects from 16 weeks with technologies used", "For each project: 3-sentence 'interview-ready' description (STAR format)", "Highlight: Palo Alto (zones, policies, VPN, HA, SSL, Panorama)", "Highlight: Python automation, Wireshark analysis, AWS VPC", "Highlight: incident response, threat hunting, SIEM correlation", "Update LinkedIn with network security skills and certifications", "Prepare: 30-second elevator pitch about your security background"],
        verify: "Portfolio complete. LinkedIn updated. Elevator pitch practiced." }
    ],
    project: { id: "proj-interview-netsec", title: "Interview Prep + Certification Blitz",
      description: "Complete portfolio, mock exams, and interview preparation.",
      prompt: `Create my final deliverables:\n\nPART 1 — Portfolio Document:\nSummarize all 16 weeks of projects with interview descriptions:\n- Corporate network design, VPC architecture, Wireshark forensics\n- Palo Alto: policies, NAT, VPN, SSL, HA, Panorama, troubleshooting\n- Automation: Python toolkit, Ansible playbooks\n- Incident response playbooks, threat hunting exercises\n- Enterprise capstone deployment\n\nPART 2 — Cert Study Guide:\n- Network Security Professional: 30 key concepts with practice Qs\n- NGFW Engineer: PAN-OS deep dive questions\n- Common exam traps and how to avoid them\n\nPART 3 — Interview Cheat Sheet:\n- Top 20 technical questions with concise answers\n- 5 scenario-based questions with methodology\n- 5 behavioral answers using my project experience` }
  }
];

const PHASES = [
  { num: 1, title: "NETWORKING FOUNDATIONS", weeks: "1–3", color: "#FF6B35", icon: "🌐" },
  { num: 2, title: "CYBERSECURITY CORE", weeks: "4–5", color: "#1A73E8", icon: "🔐" },
  { num: 3, title: "PALO ALTO NGFW MASTERY", weeks: "6–11", color: "#E53935", icon: "🔥" },
  { num: 4, title: "SECURITY ECOSYSTEM & AUTOMATION", weeks: "12–13", color: "#00C853", icon: "⚙️" },
  { num: 5, title: "CERTIFICATION & CAREER LAUNCH", weeks: "14–16", color: "#AA00FF", icon: "🎯" }
];

const CERTS = [
  { name: "Cybersecurity Practitioner (Foundational)", code: "CySA+/Palo Foundational", weeks: "1-5", icon: "🏅" },
  { name: "Network Security Professional", code: "Palo Alto Professional", weeks: "6-11", icon: "🛡️" },
  { name: "NGFW Engineer (Specialist)", code: "Palo Alto Specialist", weeks: "6-11, 15", icon: "🔥" },
  { name: "CompTIA Security+", code: "SY0-701", weeks: "4-5, 14", icon: "🔐" },
  { name: "CompTIA Network+", code: "N10-009", weeks: "1-3", icon: "🌐" }
];

const GAPS = [
  { gap: "Linux Fundamentals", where: "Week 1", why: "Firewall engineers SSH into devices constantly", severity: "critical" },
  { gap: "Wireshark / Packet Analysis", where: "Week 3", why: "1 mention in syllabus but zero depth. Deep dive needed.", severity: "critical" },
  { gap: "Python / Automation Scripting", where: "Week 13", why: "Syllabus says 'bonus' — it's not optional in 2026", severity: "critical" },
  { gap: "Compliance (NIST, PCI-DSS, HIPAA)", where: "Week 4", why: "Zero mention. Auditors ask about this in every security role.", severity: "critical" },
  { gap: "SIEM / Log Correlation", where: "Week 12", why: "Firewalls don't exist in isolation — logs go to SIEM", severity: "important" },
  { gap: "Incident Response Procedures", where: "Week 14", why: "Zero mention. This is your job during a breach.", severity: "important" },
  { gap: "Threat Intelligence & MITRE ATT&CK", where: "Week 5", why: "Understanding attacks is fundamental to defense", severity: "important" },
  { gap: "Threat Hunting", where: "Week 14", why: "Proactive security — separates junior from senior engineers", severity: "important" },
  { gap: "Interview Preparation", where: "Week 16", why: "Skills without interview prep = no job offer", severity: "edge" },
  { gap: "Architecture Whiteboard Skills", where: "Week 16", why: "Every senior role interview includes this", severity: "edge" },
  { gap: "Updated Certifications (2026 role-based)", where: "Week 16", why: "PCNSA/PCNSE retired — new certs are role-based", severity: "edge" }
];

// ─── App Component ───
function App() {
  const [progress, setProgress] = useState({});
  const [activeWeek, setActiveWeek] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [copiedId, setCopiedId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("dashboard");
  const [expandedLab, setExpandedLab] = useState(null);

  useEffect(() => {
    try { const s = localStorage.getItem("netsec-progress"); if (s) setProgress(JSON.parse(s)); } catch {}
    setLoaded(true);
  }, []);

  const save = useCallback((p) => { setProgress(p); try { localStorage.setItem("netsec-progress", JSON.stringify(p)); } catch {} }, []);
  const toggle = useCallback((id) => save({ ...progress, [id]: !progress[id] }), [progress, save]);
  const copy = useCallback((t, id) => { navigator.clipboard.writeText(t); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); }, []);

  const tL = WEEKS.reduce((s, w) => s + w.labs.length, 0);
  const cL = WEEKS.reduce((s, w) => s + w.labs.filter(l => progress[l.id]).length, 0);
  const tP = WEEKS.filter(w => w.project).length;
  const cP = WEEKS.filter(w => w.project && progress[w.project.id]).length;
  const pct = tL + tP > 0 ? Math.round(((cL + cP) / (tL + tP)) * 100) : 0;

  if (!loaded) return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0e17", color: "#E53935", fontFamily: "monospace" }}><div style={{ textAlign: "center" }}><div style={{ fontSize: 40, marginBottom: 16 }}>🔥</div>Initializing...</div></div>;

  const sel = activeWeek !== null ? WEEKS[activeWeek] : null;
  const ph = sel ? PHASES.find(p => p.num === sel.phase) : null;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0e17", color: "#e2e8f0", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=DM+Sans:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#0f1424}::-webkit-scrollbar-thumb{background:#2a3352;border-radius:3px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideIn{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
        .cd{background:#111827;border:1px solid #1e293b;border-radius:12px;transition:all .2s}.cd:hover{border-color:#334155}
        .bt{border:none;cursor:pointer;border-radius:8px;font-family:inherit;font-weight:600;transition:all .15s}.bt:active{transform:scale(.97)}
        .tg{display:inline-block;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;letter-spacing:.5px}
        .ck{width:22px;height:22px;border-radius:6px;border:2px solid #334155;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;flex-shrink:0}.ck.dn{background:#E53935;border-color:#E53935}.ck:hover{border-color:#E53935}
        .tb{padding:10px 16px;border-radius:8px;border:none;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;transition:all .15s;background:transparent;color:#64748b;white-space:nowrap}.tb:hover{color:#e2e8f0;background:#1e293b}.tb.ac{background:#E53935;color:#fff}
        .gb{font-size:9px;padding:2px 7px;border-radius:10px;font-weight:700;letter-spacing:.5px;display:inline-block;margin-left:4px}
        .gc{background:#ef444430;color:#ef4444}.gi{background:#FF990030;color:#FF9900}.ge{background:#AA00FF30;color:#CE93D8}
      `}</style>

      <div style={{ background: "linear-gradient(135deg,#0f1420,#1a1028)", borderBottom: "1px solid #1e293b", padding: "14px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, background: "linear-gradient(135deg,#E53935,#B71C1C)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🛡️</div>
            <div><div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Network Security Mastery</div><div style={{ fontSize: 11, color: "#64748b" }}>16 Weeks · Palo Alto NGFW · 5 Certs · All Gaps Infused</div></div>
          </div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {[["dashboard","Dashboard"],["gaps","🔥 Gap Map"],["certs","Certs"]].map(([v,l])=>(
              <button key={v} className="bt" onClick={()=>{setView(v);setActiveWeek(null)}} style={{padding:"6px 12px",background:view===v?"#E53935":"#1e293b",color:view===v?"#fff":"#94a3b8",fontSize:12}}>{l}</button>
            ))}
            <button className="bt" onClick={()=>{if(confirm("Reset?")){setProgress({});try{localStorage.removeItem("netsec-progress")}catch{}}}} style={{padding:"6px 12px",background:"#1e293b",color:"#ef4444",fontSize:12}}>Reset</button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 20px 60px" }}>
        {view === "gaps" && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Gap Infusion Map — What Your Syllabus Was Missing</h2>
            <p style={{ fontSize: 12, color: "#64748b", marginBottom: 18 }}>Every gap identified and infused at the right pedagogical moment.</p>
            {[
              { label: "CRITICAL — Would hurt you in interviews", cls: "gc", color: "#ef4444", items: GAPS.filter(g=>g.severity==="critical") },
              { label: "IMPORTANT — Separates junior from senior", cls: "gi", color: "#FF9900", items: GAPS.filter(g=>g.severity==="important") },
              { label: "COMPETITIVE EDGE — Makes you stand out", cls: "ge", color: "#CE93D8", items: GAPS.filter(g=>g.severity==="edge") }
            ].map((group,gi)=>(
              <div key={gi} className="cd" style={{ padding: 16, marginBottom: 12, borderLeft: `3px solid ${group.color}` }}>
                <span className={`tg ${group.cls}`} style={{ marginBottom: 10, display: "inline-block" }}>{group.label}</span>
                {group.items.map((item,i)=>(
                  <div key={i} style={{ display: "flex", gap: 10, padding: "6px 0", borderBottom: i<group.items.length-1?"1px solid #1e293b":"none" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: group.color, marginTop: 7, flexShrink: 0 }} />
                    <div><span style={{ fontWeight: 700, color: "#fff", fontSize: 13 }}>{item.gap}</span><span style={{ fontSize: 12, color: "#22c55e", marginLeft: 8 }}>→ {item.where}</span><div style={{ fontSize: 11, color: "#64748b", marginTop: 1 }}>{item.why}</div></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {view === "certs" && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Certification Track (2026 Updated)</h2>
            <div style={{ padding: 12, background: "#E5393520", border: "1px solid #E5393540", borderRadius: 10, fontSize: 12, color: "#EF9A9A", marginBottom: 16 }}>⚠️ PCNSA & PCNSE are retired as of 2025. The new Palo Alto certifications are role-based: Network Security Professional and NGFW Engineer (Specialist).</div>
            {CERTS.map((c,i)=>(
              <div key={i} className="cd" style={{ padding: 16, marginBottom: 10, display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ fontSize: 22 }}>{c.icon}</div>
                <div style={{ flex: 1 }}><div style={{ fontWeight: 700, color: "#fff", fontSize: 14 }}>{c.name}</div><div style={{ fontSize: 12, color: "#64748b" }}>{c.code} · Weeks {c.weeks}</div></div>
              </div>
            ))}
          </div>
        )}

        {view === "dashboard" && !sel && (
          <div style={{ animation: "fadeUp .4s ease" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(155px,1fr))", gap: 12, marginBottom: 22 }}>
              {[{ l:"Progress",v:`${pct}%`,bar:true },{ l:"Labs",v:`${cL}/${tL}` },{ l:"Projects",v:`${cP}/${tP}` },{ l:"Weeks",v:`${WEEKS.filter(w=>{const a=w.labs.every(l=>progress[l.id]);const p=!w.project||progress[w.project?.id];return w.labs.length>0?a&&p:p}).length}/16`}].map((s,i)=>(
                <div key={i} className="cd" style={{ padding: 14 }}>
                  <div style={{ fontSize: 10, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: .8, marginBottom: 4 }}>{s.l}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: i===0?"#E53935":"#fff", fontFamily: "'JetBrains Mono',monospace" }}>{s.v}</div>
                  {s.bar && <div style={{ marginTop: 6, height: 4, background: "#1e293b", borderRadius: 2 }}><div style={{ height: "100%", background: "linear-gradient(90deg,#E53935,#B71C1C)", borderRadius: 2, width: `${pct}%`, transition: "width .5s" }} /></div>}
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
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(285px,1fr))", gap: 10 }}>
                    {pw.map(w=>{
                      const t=w.labs.length+(w.project?1:0),d=w.labs.filter(l=>progress[l.id]).length+(w.project&&progress[w.project?.id]?1:0),wp=t>0?Math.round(d/t*100):0;
                      return (
                        <div key={w.week} className="cd" onClick={()=>{setActiveWeek(w.week-1);setActiveTab("overview");setExpandedLab(null)}}
                          style={{ padding: 14, cursor: "pointer", borderLeft: `3px solid ${p.color}`, animation: `fadeUp .4s ease ${w.week*.02}s both` }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                            <div>
                              <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
                                <span style={{ fontSize: 10, fontWeight: 700, color: p.color, fontFamily: "'JetBrains Mono',monospace" }}>WK {w.week}</span>
                                {(w.gapBadges||[]).map(g=><span key={g} className={`gb ${["LINUX","WIRESHARK","PYTHON","COMPLIANCE","AUTOMATION","INCIDENT RESPONSE","FORENSICS","INTERVIEW PREP","SYSTEM DESIGN"].includes(g)?(["LINUX","WIRESHARK","PYTHON","COMPLIANCE"].includes(g)?"gc":"gi"):"ge"}`}>{g}</span>)}
                              </div>
                              <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 3, lineHeight: 1.3 }}>{w.title}</div>
                            </div>
                            <div style={{ position: "relative", width: 36, height: 36, flexShrink: 0 }}>
                              <svg width="36" height="36" style={{ transform: "rotate(-90deg)" }}><circle cx="18" cy="18" r="14" fill="none" stroke="#1e293b" strokeWidth="3"/><circle cx="18" cy="18" r="14" fill="none" stroke={wp===100?"#22c55e":p.color} strokeWidth="3" strokeDasharray={`${2*Math.PI*14}`} strokeDashoffset={`${2*Math.PI*14*(1-wp/100)}`} strokeLinecap="round" style={{transition:"stroke-dashoffset .5s"}}/></svg>
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
                {(sel.gapBadges||[]).map(g=><span key={g} className="gb gc">GAP FIX: {g}</span>)}
              </div>
              <h1 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{sel.title}</h1>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>{sel.services.map(s=><span key={s} className="tg" style={{background:"#E5393510",color:"#EF9A9A",border:"1px solid #E5393528"}}>{s}</span>)}</div>
            </div>

            <div style={{ display: "flex", gap: 5, marginBottom: 14, flexWrap: "wrap", overflowX: "auto" }}>
              {["overview","prompts","labs",...(sel.project?["project"]:[]),"resources"].map(t=>(
                <button key={t} className={`tb ${activeTab===t?"ac":""}`} onClick={()=>setActiveTab(t)}>
                  {t==="overview"?"📋 Overview":t==="prompts"?`💬 Prompts (${sel.prompts.length})`:t==="labs"?`🔬 Labs (${sel.labs.length})`:t==="project"?"🚀 Project":"📚 Resources"}
                </button>
              ))}
            </div>

            {activeTab==="overview"&&<div className="cd" style={{padding:16}}><h3 style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:10}}>Learning Objectives</h3>{sel.objectives.map((o,i)=><div key={i} style={{display:"flex",gap:8,padding:"5px 0",borderBottom:i<sel.objectives.length-1?"1px solid #1e293b":"none"}}><span style={{color:"#22c55e",fontSize:12,flexShrink:0}}>✓</span><span style={{fontSize:13,color:"#cbd5e1",lineHeight:1.5}}>{o}</span></div>)}</div>}

            {activeTab==="prompts"&&<div style={{display:"grid",gap:10}}>
              <div style={{padding:10,background:"#E5393510",border:"1px solid #E5393528",borderRadius:10,fontSize:12,color:"#EF9A9A"}}>💡 Copy prompts → paste into Claude → learn interactively.</div>
              {sel.prompts.map((p,i)=>{const pid=`p-${sel.week}-${i}`;return(
                <div key={i} className="cd" style={{padding:16,animation:`slideIn .3s ease ${i*.03}s both`}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                    <h4 style={{fontSize:13,fontWeight:700,color:"#fff"}}>{p.title}</h4>
                    <button className="bt" onClick={()=>copy(p.prompt,pid)} style={{padding:"4px 10px",background:copiedId===pid?"#22c55e":"#E53935",color:"#fff",fontSize:11}}>{copiedId===pid?"✓ Copied":"Copy"}</button>
                  </div>
                  <pre style={{background:"#0a0e17",borderRadius:8,padding:10,fontSize:11,color:"#94a3b8",lineHeight:1.6,whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:"'JetBrains Mono',monospace",border:"1px solid #1e293b",maxHeight:160,overflow:"auto"}}>{p.prompt}</pre>
                </div>
              );})}
            </div>}

            {activeTab==="labs"&&<div style={{display:"grid",gap:10}}>
              {sel.labs.map((lab,i)=>{const dn=!!progress[lab.id];const op=expandedLab===lab.id;return(
                <div key={lab.id} className="cd" style={{overflow:"hidden",animation:`slideIn .3s ease ${i*.03}s both`}}>
                  <div style={{padding:14,display:"flex",alignItems:"center",gap:10,cursor:"pointer"}} onClick={()=>setExpandedLab(op?null:lab.id)}>
                    <div className={`ck ${dn?"dn":""}`} onClick={e=>{e.stopPropagation();toggle(lab.id)}}>{dn&&<span style={{color:"#fff",fontSize:11,fontWeight:700}}>✓</span>}</div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:13,fontWeight:700,color:dn?"#22c55e":"#fff"}}>{lab.title}</div>
                      <div style={{display:"flex",gap:5,marginTop:3}}>
                        <span className="tg" style={{background:"#1e293b",color:"#64748b"}}>⏱{lab.duration}</span>
                        <span className="tg" style={{background:lab.difficulty==="Beginner"?"#22c55e16":lab.difficulty==="Intermediate"?"#FF990016":"#ef444416",color:lab.difficulty==="Beginner"?"#22c55e":lab.difficulty==="Intermediate"?"#FF9900":"#ef4444"}}>{lab.difficulty}</span>
                      </div>
                    </div>
                    <span style={{color:"#475569",fontSize:14,transition:"transform .2s",transform:op?"rotate(180deg)":"rotate(0)"}}>▾</span>
                  </div>
                  {op&&<div style={{padding:"0 14px 14px",animation:"fadeUp .2s ease"}}><div style={{background:"#0a0e17",borderRadius:10,padding:12,border:"1px solid #1e293b"}}>
                    <div style={{fontSize:10,fontWeight:700,color:"#E53935",textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>Step-by-Step</div>
                    {lab.steps.map((s,si)=><div key={si} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:si<lab.steps.length-1?6:0}}>
                      <div style={{width:24,height:24,borderRadius:"50%",background:"#E5393516",color:"#E53935",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,flexShrink:0,fontFamily:"'JetBrains Mono',monospace",marginTop:1}}>{si+1}</div>
                      <div style={{fontSize:12,color:"#cbd5e1",lineHeight:1.5,paddingTop:2}}>{s}</div>
                    </div>)}
                    <div style={{marginTop:10,padding:"7px 10px",background:"#22c55e0a",border:"1px solid #22c55e28",borderRadius:8,fontSize:12,color:"#22c55e"}}>✓ <strong>Verify:</strong> {lab.verify}</div>
                  </div></div>}
                </div>
              );})}
            </div>}

            {activeTab==="project"&&sel.project&&(
              <div className="cd" style={{overflow:"hidden"}}>
                <div style={{padding:16,borderBottom:"1px solid #1e293b",display:"flex",alignItems:"center",gap:10}}>
                  <div className={`ck ${progress[sel.project.id]?"dn":""}`} onClick={()=>toggle(sel.project.id)}>{progress[sel.project.id]&&<span style={{color:"#fff",fontSize:11,fontWeight:700}}>✓</span>}</div>
                  <div style={{flex:1}}><h3 style={{fontSize:14,fontWeight:700,color:"#fff"}}>{sel.project.title}</h3><p style={{fontSize:12,color:"#94a3b8",marginTop:2}}>{sel.project.description}</p></div>
                </div>
                <div style={{padding:16}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                    <span style={{fontSize:10,fontWeight:700,color:"#E53935",textTransform:"uppercase",letterSpacing:1}}>Claude Prompt</span>
                    <button className="bt" onClick={()=>copy(sel.project.prompt,sel.project.id)} style={{padding:"4px 10px",background:copiedId===sel.project.id?"#22c55e":"#E53935",color:"#fff",fontSize:11}}>{copiedId===sel.project.id?"✓ Copied":"Copy"}</button>
                  </div>
                  <pre style={{background:"#0a0e17",borderRadius:8,padding:10,fontSize:11,color:"#94a3b8",lineHeight:1.5,whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:"'JetBrains Mono',monospace",border:"1px solid #1e293b",maxHeight:180,overflow:"auto"}}>{sel.project.prompt}</pre>
                </div>
              </div>
            )}

            {activeTab==="resources"&&<div style={{display:"grid",gap:8}}>
              {(sel.resources||[]).map((r,i)=>(
                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="cd" style={{padding:12,display:"flex",alignItems:"center",gap:10,textDecoration:"none",color:"inherit"}}>
                  <div style={{width:34,height:34,borderRadius:8,background:"#E5393510",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0}}>📄</div>
                  <div style={{flex:1,minWidth:0}}><div style={{fontSize:13,fontWeight:600,color:"#fff"}}>{r.name}</div><div style={{fontSize:11,color:"#64748b",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.url}</div></div>
                  <span style={{color:"#E53935"}}>→</span>
                </a>
              ))}
            </div>}

            <div style={{display:"flex",justifyContent:"space-between",marginTop:18}}>
              {sel.week>1?<button className="bt" onClick={()=>{setActiveWeek(sel.week-2);setActiveTab("overview");setExpandedLab(null)}} style={{padding:"7px 14px",background:"#1e293b",color:"#94a3b8",fontSize:12}}>← Wk {sel.week-1}</button>:<div/>}
              {sel.week<16?<button className="bt" onClick={()=>{setActiveWeek(sel.week);setActiveTab("overview");setExpandedLab(null)}} style={{padding:"7px 14px",background:"#E53935",color:"#fff",fontSize:12}}>Wk {sel.week+1} →</button>:<div/>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
