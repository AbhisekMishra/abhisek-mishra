export const siteUrl = "https://abhisek-mishra.vercel.app";

export const profile = {
  name: "Abhisek Mishra",
  initials: "AM",
  title: "Lead Software Engineer @ Emirates NBD",
  tagline: "Building agentic AI systems in production — Claude API, MCP, RAG, LangGraph",
  location: "Dubai, United Arab Emirates",
  email: "abhisekmishra55@gmail.com",
  phone: "+971 58 667 9577",
  linkedin: "https://www.linkedin.com/in/abhisek-mishra-64a97873",
  github: "https://github.com/AbhisekMishra",
  summary: [
    "I build AI systems that ship to production — not demos. At Emirates NBD, I designed and shipped an agentic automation platform for our RFI (Request for Information) process: 6 specialized agents orchestrated through 3 MCP servers and 15+ tools, integrated with 8 external services — cutting analyst cycle time by 40%. It runs in a real bank, under real compliance constraints, used daily.",
    "Right now I'm building in public: a banking-domain RAG system with retrieval evals, cross-encoder re-ranking, and golden-set gating before go-live, and an agent-driven video synthesis pipeline with end-to-end multi-agent orchestration. I publish a working implementation of everything I learn — reading isn't understanding; building is.",
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
    period: "Jul 2024 — Present",
    location: "Dubai, UAE",
    bullets: [
      "Designed and shipped an agentic AI platform automating the RFI process end-to-end: 6 specialized agents, 3 MCP servers, 15+ tools, integrated with 8 external services — reduced analyst cycle time by 40%.",
      "Architected the agent orchestration layer (task decomposition, tool routing, human-in-the-loop approval) to operate within banking compliance and audit constraints.",
      "Define backend strategy and end-to-end architecture for customer onboarding, credit cards, and personal loans journeys serving retail banking at scale.",
      "Standardized engineering practices across teams: observability frameworks, API strategy, CI/CD, and code review standards.",
      "Mentor engineers on AI-assisted development workflows (Claude Code, agentic tooling) — hands-on, in the codebase, not from slides.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Emirates NBD",
    period: "Jun 2021 — Jul 2024",
    location: "Dubai, UAE",
    bullets: [
      "Built and scaled event-driven microservices (Node.js, Kafka, Kubernetes) powering core retail banking journeys — onboarding, cards, loans.",
      "Led backend delivery for high-traffic customer-facing platforms with strict availability and regulatory requirements.",
      "Drove adoption of GraphQL APIs and modern frontend integration patterns (React) across product teams.",
    ],
  },
  {
    role: "Consultant",
    company: "Emirates NBD",
    period: "Jul 2019 — Jun 2021",
    location: "Dubai, UAE",
    bullets: [
      "Delivered full-stack features across enterprise banking applications; grew from delivery contributor to owning backend design for key journeys.",
    ],
  },
  {
    role: "Consultant, Full Stack Engineer",
    company: "Xebia",
    period: "Dec 2018 — Jul 2019",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Full-stack development and delivery across banking and enterprise client engagements, including financial-services platforms for Canadian Imperial Bank of Commerce (CIBC).",
      "Built an interactive remittance and precious-metals trading UI (Angular 4/AngularJS, Bootstrap) with RESTful Node.js/Express services and JWT-based authentication.",
    ],
  },
  {
    role: "IT Analyst, Full Stack Engineer",
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
      "Claude API",
      "Model Context Protocol (MCP)",
      "LangGraph",
      "Multi-Agent Systems",
      "RAG / Vector Databases",
      "AWS Bedrock",
      "Temporal.io (Durable Execution)",
      "Claude Code / Cursor",
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
      "Kafka",
      "Kubernetes",
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
      "Orchestrated 6 specialized agents via LangGraph, with 3 MCP servers exposing 15+ secure banking and compliance tools to the LLM.",
      "Engineered a safety-first architecture with circuit breakers for 8 external services and automated checkpoint recovery for long-running workflows.",
      "Integrated Playwright MCP for autonomous UI verification and regression testing of the RFI dashboard.",
      "Cut analyst cycle time by 40%, running daily under real compliance and audit constraints.",
    ],
    tags: ["LangGraph", "MCP", "Multi-Agent", "AWS Bedrock", "Playwright"],
  },
  {
    name: "Banking-Domain RAG System",
    org: "Personal / Learning",
    status: "Personal Project",
    description:
      "A retrieval-augmented generation system built for banking-domain question answering, with production-grade evaluation before go-live.",
    bullets: [
      "Retrieval evals and golden-set gating to catch regressions before deployment.",
      "Cross-encoder re-ranking to improve precision on top-k retrieved passages.",
      "Built and published in the open as a working reference implementation, not a demo.",
    ],
    tags: ["RAG", "Vector DB", "Evals", "Python"],
    link: { label: "GitHub", url: "https://github.com/AbhisekMishra" },
  },
  {
    name: "Autonomous Video Synthesis Engine",
    org: "Personal / Learning",
    status: "Personal Project",
    description:
      "A distributed engine for automated video clip generation, driven by agentic AI and durable execution.",
    bullets: [
      "Used Temporal to manage state and recovery for complex, asynchronous media-processing workflows.",
      "Implemented AI-powered code review git hooks so agent-logic changes stay within architectural and security standards.",
      "End-to-end multi-agent orchestration, from generation to review.",
    ],
    tags: ["Temporal", "Agentic AI", "Durable Execution"],
    link: { label: "GitHub", url: "https://github.com/AbhisekMishra" },
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
