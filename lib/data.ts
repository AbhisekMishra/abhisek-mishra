export const siteUrl = "https://abhisek-mishra.vercel.app";

export const profile = {
  name: "Abhisek Mishra",
  initials: "AM",
  title: "Lead Software Engineer @ Emirates NBD",
  tagline: "Building agentic AI systems in production — Claude API, MCP, LangGraph",
  location: "Dubai, United Arab Emirates",
  email: "abhisekmishra55@gmail.com",
  phone: "+971 58 667 9577",
  linkedin: "https://www.linkedin.com/in/abhisek-mishra-64a97873",
  github: "https://github.com/AbhisekMishra",
  summary: [
    "I build AI systems that ship to production — not demos. At Emirates NBD, I designed and shipped an agentic automation platform for our RFI (Request for Information) process: 6 specialized agents orchestrated through 3 MCP servers and 15+ tools, integrated with 8 external services, with a safety-first architecture of circuit breakers and automated checkpoint recovery. It runs in a real bank, under real compliance constraints, used daily.",
    "Right now I'm building in public: an AI-powered video clipping pipeline that turns long-form video into short-form clips automatically (LangGraph, FastAPI, FFmpeg), and a QLoRA fine-tune of a small language model, published end to end — data pipeline, training, evaluation, and deployment. I publish a working implementation of everything I learn — reading isn't understanding; building is.",
    "The foundation under this is 13+ years of enterprise engineering: event-driven microservices, end-to-end banking journeys (customer onboarding, credit cards, personal loans), and leading teams without leaving the code. I've spent my career being the person who both talks to stakeholders and writes the implementation — production discipline plus frontier-AI fluency.",
  ],
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Lead Software Engineer",
    company: "Emirates NBD",
    period: "Jul 2019 — Present",
    location: "Dubai, UAE",
    bullets: [
      "Designed and shipped a production, multi-agent platform automating high-stakes banking RFIs (Sanctions Screening, AML, KYC): 6 specialized agents via LangGraph, 3 MCP servers exposing 15+ secure banking and compliance tools, safety-first architecture with circuit breakers across 8 external services and automated checkpoint recovery.",
      "Architected a bank-wide Claude Code plugin — CLAUDE.md context standards, reusable Skills, subagents, and hooks — to standardize Java-to-Node.js legacy service migrations with deterministic, review-consistent output; adopted across the engineering organization.",
      "Architected a highly scalable, event-driven microservices platform (Node.js, MongoDB, Redis) underpinning the bank's Tablet Banking, ATM servicing, and CRM systems.",
      "Championed Domain-Driven Design and service resiliency practices; mentored backend engineers on API standards, logging, and error-handling frameworks.",
      "Served as go-to backend lead for cross-squad collaboration, aligning architects, product owners, and QA with strategic objectives.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Xebia Inc.",
    period: "Dec 2018 — Jun 2019",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Full-stack development and delivery across banking and enterprise client engagements, including financial-services platforms for Canadian Imperial Bank of Commerce (CIBC).",
      "Built an interactive remittance and precious-metals trading UI (Angular 4/AngularJS, Bootstrap) with RESTful Node.js/Express services and JWT-based authentication.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Tata Consultancy Services",
    period: "Mar 2014 — Dec 2018",
    location: "Bhubaneswar, Odisha, India",
    bullets: [
      "Delivered full-stack features across enterprise banking applications as part of long-running client engagements.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Mindfire Solutions",
    period: "Jul 2013 — Mar 2014",
    location: "Bhubaneswar, Odisha, India",
    bullets: [
      "Started my engineering career building frontend features for enterprise client applications.",
    ],
  },
];

export type SkillGroup = { label: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "AI & Agentic Systems",
    skills: [
      "Multi-Agent Systems",
      "LangGraph",
      "LLM Integration (Llama, GPT, Claude)",
      "Model Context Protocol (MCP)",
      "Claude Code / Cursor",
      "Playwright MCP",
    ],
  },
  {
    label: "Backend & Architecture",
    skills: [
      "Node.js",
      "TypeScript",
      "Python",
      "Event-Driven Microservices",
      "Domain-Driven Design",
      "GraphQL",
      "MongoDB",
      "Redis",
      "Azure",
      "OpenShift",
    ],
  },
  {
    label: "Frontend",
    skills: ["React", "Angular", "JavaScript"],
  },
  {
    label: "Leadership & Practice",
    skills: [
      "Solution Architecture",
      "Engineering Mentorship",
      "API Standards",
      "CI/CD",
      "Stakeholder Management",
    ],
  },
];

export type Project = {
  name: string;
  org: string;
  status: "Production" | "Personal Project";
  description: string;
  bullets: string[];
  tags: string[];
  link?: { label: string; url: string };
  demoUrl?: string;
  writeupSlug?: string;
};

export const projects: Project[] = [
  {
    name: "Unified RFI Management System",
    org: "Emirates NBD",
    status: "Production",
    description:
      "A production-grade, multi-agent platform automating high-stakes banking Requests for Information (RFIs) for Sanctions Screening, AML, and KYC.",
    bullets: [
      "Orchestrated 6 specialized agents via LangGraph, with 3 MCP servers exposing 15+ secure banking and compliance tools to the LLM — question generation runs on Llama, with a GPT-based reflection agent critiquing and refining output before a human review gate.",
      "Engineered a safety-first architecture with circuit breakers across 8 external services and automated checkpoint recovery for long-running workflows.",
      "Integrated Playwright MCP for autonomous UI verification and regression testing of the RFI dashboard.",
      "Identified and remediated a prompt-injection vulnerability found in security testing — customer-controllable fields were being interpolated directly into the generation prompt — by treating those fields strictly as data and adding input validation.",
    ],
    tags: ["LangGraph", "MCP", "Multi-Agent", "Llama", "GPT", "Playwright"],
  },
  {
    name: "AI-Powered Video Clipping Pipeline",
    org: "Independent — Live",
    status: "Personal Project",
    description:
      "A 4-node LangGraph workflow that converts long-form video into short-form clips automatically — deployed and live.",
    bullets: [
      "Transcribe → Identify Clips → Detect Focus → Render pipeline: FastAPI/Python backend using faster-whisper for transcription and FFmpeg for rendering.",
      "Next.js frontend with real-time progress streaming over SSE.",
      "GPT-4o-mini identifies the strongest segments from the transcript, combined with face/object detection for smart vertical-crop framing.",
      "On the roadmap: extending with Temporal for durable execution and checkpointed recovery across long-running renders.",
    ],
    tags: ["LangGraph", "FastAPI", "FFmpeg", "GPT-4o-mini", "Next.js"],
    link: { label: "GitHub", url: "https://github.com/AbhisekMishra/video-generator-fe" },
    demoUrl: "https://video-generator-six-coral.vercel.app/",
  },
  {
    name: "Gen Z Slang Model",
    org: "Personal / Learning",
    status: "Personal Project",
    description:
      "A QLoRA fine-tune of Qwen2.5-1.5B-Instruct that translates Gen Z slang into plain English and back — trained end-to-end on a laptop GPU.",
    bullets: [
      "Rank-16 LoRA across all seven projection matrices, 4-bit NF4 double-quantized, ~20 minutes per training run on an 8GB RTX 4060.",
      "Diagnosed why a correct answer present in the training data still wasn't learned — LoRA only updates ~1.2% of parameters, so a couple of examples can't override a strong pretrained prior.",
      "Audited my own 'grounded in real datasets' claim against the code, found the pipeline never read the source files, and rebuilt it to generate ~4,600 examples programmatically.",
    ],
    tags: ["QLoRA", "Fine-tuning", "Qwen2.5", "LLM"],
    link: { label: "GitHub", url: "https://github.com/AbhisekMishra/genz-model" },
    writeupSlug: "debugging-first-fine-tuned-model",
  },
  {
    name: "Agentic SDLC Standardization",
    org: "Emirates NBD",
    status: "Production",
    description:
      "A bank-wide Claude Code plugin standardizing legacy service migrations with deterministic, review-consistent output.",
    bullets: [
      "Architected a bank-wide Claude Code plugin — CLAUDE.md context standards, reusable Skills, subagents, and hooks — to standardize and structurally enforce Java-to-Node.js legacy service migrations across the engineering organization.",
      "Built a Git hook to measure Claude-authored vs. manually-written code volume per engineer, feeding into adoption and cadence reporting.",
      "Estimated ~40% reduction in migration time based on comparative task estimates; adopted bank-wide across the engineering organization.",
    ],
    tags: ["Claude Code", "Developer Tooling", "SDLC Standardization"],
  },
  {
    name: "Omnichannel Banking Platform",
    org: "Emirates NBD",
    status: "Production",
    description:
      "A highly scalable, event-driven microservices platform underpinning Tablet Banking, ATM servicing, and CRM integration.",
    bullets: [
      "Node.js for high-throughput APIs, MongoDB for flexible data modeling, Redis for distributed caching.",
      "Applied Domain-Driven Design and service resiliency patterns to decouple core business capabilities.",
      "Owned the full solution lifecycle across multiple modules — design, deployment, monitoring, and post-launch support.",
    ],
    tags: ["Node.js", "MongoDB", "Redis", "DDD", "Microservices"],
  },
];

export const education = {
  degree: "B.Tech, Electronics and Telecommunication",
  school: "Biju Patnaik University of Technology",
  detail: "Trident Academy of Technology",
  period: "2009 — 2013",
};

export const certifications = [
  "Microsoft Certified: HTML5, CSS3, JavaScript Developer",
  "IT Legend Award, Emirates NBD — Q4 2021 and Q3 2022",
  "On the Spot Award, Emirates NBD — multiple occasions",
];
