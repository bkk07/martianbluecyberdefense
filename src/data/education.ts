/* Cyber Education page data — copy exactly as specified in the PDF. */

export interface EduProgram {
  slug: string;
  badge: string;
  level: string;
  duration: string;
  title: string;
  description: string;
  topics: string[];
  price: string;
}

export const EDU_PROGRAMS: EduProgram[] = [
  {
    slug: "fundamentals",
    badge: "Most Popular",
    level: "Beginner",
    duration: "4 Weeks",
    title: "Cyber Security Fundamentals",
    description: "Build your foundation in cybersecurity.",
    topics: ["Networking", "Linux & Windows", "Cryptography", "OWASP"],
    price: "₹4,999",
  },
  {
    slug: "ethical-hacking",
    badge: "Recommended",
    level: "Intermediate",
    duration: "6 Weeks",
    title: "Ethical Hacking & Penetration Testing",
    description: "Learn practical offensive security techniques.",
    topics: ["Recon & OSINT", "Nmap / Masscan", "Burp Suite", "Metasploit"],
    price: "₹6,999",
  },
  {
    slug: "soc-analyst",
    badge: "Expert Track",
    level: "Advanced",
    duration: "8 Weeks",
    title: "SOC Analyst & Threat Hunting",
    description: "Build defensive security skills.",
    topics: ["SIEM", "Threat Intel", "MITRE ATT&CK", "Forensics"],
    price: "₹12,999",
  },
];

export const EDU_STATS = [
  { value: "1000+", label: "Students Trained" },
  { value: "3", label: "Professional Programs" },
  { value: "Hands-On", label: "Practical Training" },
  { value: "Industry", label: "Expert-Led Instruction" },
];

export const EDU_COMPARE_ROWS: { label: string; values: [string, string, string] }[] = [
  { label: "Experience", values: ["None", "Basic IT", "Security"] },
  { label: "Duration", values: ["4 Weeks", "6 Weeks", "8 Weeks"] },
  { label: "Main Focus", values: ["Basics", "Offensive", "Defensive"] },
  { label: "Hands-on Labs", values: ["✓", "✓", "✓"] },
  { label: "Security Tools", values: ["✓", "✓", "✓"] },
  { label: "Certification", values: ["✓", "✓", "✓"] },
  { label: "Prerequisites", values: ["None", "Basic IT", "Networking"] },
];

export const EDU_LABS = [
  { title: "Reconnaissance", tools: "OSINT · Information Gathering" },
  { title: "Web Security", tools: "Burp Suite · OWASP · Vulnerability Tests" },
  { title: "Threat Detection", tools: "SIEM · Threat Hunting · Security Monitoring" },
  { title: "Digital Forensics", tools: "Investigation · Memory Analysis · Incident Response" },
];

export const EDU_TOOLS = [
  "NMAP",
  "BURP SUITE",
  "METASPLOIT",
  "WIRESHARK",
  "SPLUNK",
  "WAZUH",
  "LINUX",
  "OWASP",
];

export const EDU_FAQS = [
  "Who can join these programs?",
  "Do I need prior cybersecurity knowledge?",
  "Are hands-on labs included?",
  "Are the programs online or offline?",
  "Do I receive a certificate?",
  "When is the next batch?",
  "Do you provide corporate training?",
];
