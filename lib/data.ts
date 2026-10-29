export const siteUrl = "https://abhisek-mishra.vercel.app";

export const profile = {
  name: "Abhisek Mishra",
  initials: "AM",
  title: "Lead Software Engineer @ Emirates NBD",
  tagline: "Agentic AI and core banking platforms, built for regulated environments",
  resumeHeadline: "Lead Software Engineer | Agentic AI Systems & Platform Architecture",
  resumeSummary:
    "Lead Software Engineer with 13+ years building banking systems, 7+ of them at Emirates NBD, where I joined as a consultant in 2019 and have been Lead Software Engineer since 2024. I design agentic AI systems for regulated environments, with evals, observability and human review built in from the start, and I lead large platform work such as the bank's move from vendor payment products to a platform built in-house. Recent work includes an agentic RFI platform for Sanctions, AML and KYC that needs about 20% of the original manual effort, a RAG assistant for the bank's sourcing agents, and a Claude Code plugin that is now the mandatory standard for Java-to-Node.js migrations.",
  location: "Dubai, United Arab Emirates",
  email: "abhisekmishra55@gmail.com",
  phone: "+971 58 667 9577",
  linkedin: "https://www.linkedin.com/in/abhisek-mishra-64a97873",
  github: "https://github.com/AbhisekMishra",
  summary: [
    "I design and ship AI systems for regulated environments: production systems, not demos. At Emirates NBD I moved the bank's RFI process for Sanctions, AML and KYC from two manual teams to an agentic workflow that now needs about a fifth of the original effort. I built it as a reusable framework, with evals, Langfuse observability and a human review gate in place from the start, and with generation running on Gemma inside the bank's own environment.",
    "My work spans AI and core banking platforms. I'm leading the bank's move from vendor payment products to a payments platform built in-house. I built Agent Assist, a RAG assistant that sourcing agents across the bank use for current product information, and a Claude Code plugin that is now the mandatory standard for Java-to-Node.js migrations. Before that, I was one of the founding engineers of Tablet Banking.",
    "That sits on 13+ years of enterprise engineering. I joined Emirates NBD as a consultant in 2019, became Senior Software Engineer in 2021 and Lead in 2024, and I still write code. Outside work I build in public: a RAG strategy playground with an npm evaluation library, an AI video clipping pipeline, and posts on building agents from first principles. Reading isn't understanding; building is.",
  ],
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  bullets: string[];
  resumeBullets?: string[];
};

export const experience: Experience[] = [
  {
    role: "Lead Software Engineer",
    company: "Emirates NBD",
    period: "Jul 2024 — Present",
    location: "Dubai, UAE",
    resumeBullets: [
      "Lead engineering on agentic AI systems and core banking platforms, from architecture to production ownership (see Selected Work).",
      "Backend technical lead across squads: set API, logging and error-handling standards, mentor engineers, and keep architects, product owners and QA aligned on delivery.",
    ],
    bullets: [
      "Moved the bank's RFI process for Sanctions, AML and KYC from two manual teams to an agentic workflow (LangGraph, MCP, Gemma, GPT), with evals, Langfuse observability and a human review gate. It now needs about 20% of the original effort.",
      "Lead delivery and production ownership of the bank's payments platform, including the move from vendor products to a platform built in-house.",
      "Designed and built a Claude Code plugin that is now the mandatory standard for the bank's Java-to-Node.js migrations, with generated unit tests and hooks that enforce coding standards. Estimated 40% faster migrations.",
      "Built Agent Assist, a RAG assistant that sourcing agents across the bank use to look up current product information such as credit cards and loans.",
      "Led and architected the customer onboarding web application, including partner APIs for Amazon, Noon and Co-op with digital KYC.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Emirates NBD",
    period: "Jun 2021 — Jul 2024",
    location: "Dubai, UAE",
    resumeBullets: [
      "One of the founding engineers of Tablet Banking (see Selected Work), then worked across the CRM, ATM and Branch transformation programmes, growing from engineer to backend architect and delivery lead.",
      "Set backend API, logging and error-handling standards and mentored engineers across squads.",
    ],
    bullets: [
      "One of the founding engineers of Tablet Banking, one of the bank's flagship products, now used across Emirates NBD, Emirates Islamic and KSA. Designed its event-driven microservices architecture (Node.js, MongoDB, Redis), built core backend services, led a squad, and integrated it with core banking and CRM.",
      "Worked across the CRM, ATM and Branch transformation programmes, growing from engineer to backend architect and delivery lead.",
      "Set backend API, logging and error-handling standards and mentored engineers across squads.",
    ],
  },
  {
    role: "Consultant",
    company: "Emirates NBD",
    period: "Jul 2019 — Jun 2021",
    location: "Dubai, UAE",
    bullets: [
      "Engaged at Emirates NBD through a vendor. Delivered full-stack features across enterprise banking applications and grew from delivery contributor to owning backend design for key journeys.",
    ],
  },
  {
    role: "Consultant",
    company: "Xebia",
    period: "Dec 2018 — Jul 2019",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Enterprise consulting engagement on a large-scale UAE government digital platform.",
    ],
  },
  {
    role: "IT Analyst",
    company: "Tata Consultancy Services",
    period: "Mar 2014 — Dec 2018",
    location: "Bhubaneswar, Odisha, India",
    bullets: [
      "Full-stack development and delivery across banking and enterprise client engagements, including financial-services platforms for Canadian Imperial Bank of Commerce (CIBC).",
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
      "LLM Integration (Gemma, GPT, Claude)",
      "AWS Bedrock",
      "Model Context Protocol (MCP)",
      "RAG",
      "Embeddings & Vector Search",
      "LLM Evaluation",
      "Langfuse",
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
      "FastAPI",
      "Distributed Systems",
      "Payments Systems",
      "High Availability",
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
  npmUrl?: string;
  writeupSlug?: string;
  inResume?: boolean;
};

export const projects: Project[] = [
  {
    name: "Agentic RFI Automation Platform",
    org: "Emirates NBD",
    status: "Production",
    description:
      "An agentic workflow that replaced a two-team manual RFI process for Sanctions, AML and KYC, and now needs about 20% of the original effort.",
    bullets: [
      "Previously one team drafted RFI questions and another sent them to customers, checked each answer against what was asked and chased anything missing. Built as a reusable framework: a new use case is added by changing one agent's rule set, without touching the orchestration.",
      "Gemma handles generation inside the bank's own environment. A GPT reviewer, which only sees masked data, scores and refines each draft before a human approves it.",
      "Evals before go-live: a test set of past RFIs with analyst-labelled examples, model-based scoring of every run, and regression runs whenever a prompt, rule set or model changes.",
      "Langfuse in production: every agent step traced, reviewer decisions recorded as quality feedback, cost and latency tracked per run, and alerts on failed or stalled workflows.",
      "Circuit breakers on external services, checkpoint recovery for long-running workflows, Playwright MCP for UI regression testing, and a fix for a prompt-injection risk found in security testing: customer-controllable fields are now treated strictly as data.",
    ],
    tags: ["LangGraph", "MCP", "Gemma", "GPT", "Langfuse", "Evals"],
  },
  {
    name: "Agent Assist",
    org: "Emirates NBD",
    status: "Production",
    description:
      "A RAG assistant that sourcing agents across the bank use to look up current product details such as credit cards and loans.",
    bullets: [
      "Before it, agents had to ask product teams and sometimes quoted outdated information to customers.",
      "Product documents are chunked, embedded and retrieved from a vector store, so answers come from current product content rather than the model's own knowledge.",
      "Answer quality was checked before release against a set of real agent questions with known answers.",
    ],
    tags: ["RAG", "GPT", "Python", "Embeddings"],
  },
  {
    name: "Claude Code Migration Standard",
    org: "Emirates NBD",
    status: "Production",
    description:
      "A Claude Code plugin that is now the mandatory standard for the bank's Java-to-Node.js service migrations.",
    bullets: [
      "Packages CLAUDE.md context standards, reusable Skills, subagents and hooks, so every team migrates the same way and the output is consistent and easy to review.",
      "Quality is built in: the plugin generates unit tests for migrated code, and hooks block output that breaks coding standards before commit.",
      "A Git hook tracks Claude-authored vs manually-written code per engineer to measure adoption. Estimated ~40% reduction in migration time, based on comparative task estimates.",
    ],
    tags: ["Claude Code", "Developer Tooling", "Hooks", "Node.js"],
  },
  {
    name: "Payments Platform",
    org: "Emirates NBD",
    status: "Production",
    description:
      "The bank's payments platform, covering local and international transfers, bill and merchant payments, card payments and real-time payments.",
    bullets: [
      "Lead delivery and production ownership, with 30+ engineers across several squads.",
      "Leading the move from vendor products to a platform built in-house from scratch while the existing one stays live, for faster changes, lower cost and control over the roadmap.",
      "Designed around what payments demand: high availability, regulatory compliance and audit trails, idempotent processing so a retry never pays twice, and capacity for peaks such as salary days.",
    ],
    tags: ["Payments", "Distributed Systems", "High Availability", "Idempotency"],
  },
  {
    name: "Tablet Banking & Omnichannel Platform",
    org: "Emirates NBD",
    status: "Production",
    description:
      "Founding engineer of Tablet Banking, one of the bank's flagship products, used across Emirates NBD, Emirates Islamic and KSA, and of the event-driven platform behind it.",
    bullets: [
      "Designed the event-driven microservices architecture (Node.js, MongoDB, Redis) underpinning Tablet Banking, ATM servicing and CRM integration, applying Domain-Driven Design and service resiliency patterns.",
      "Built core backend services, led a squad through delivery, and integrated with core banking, CRM and other internal systems.",
      "Owned the full lifecycle across multiple modules: design, deployment, monitoring and post-launch support.",
    ],
    tags: ["Node.js", "MongoDB", "Redis", "DDD", "Microservices"],
  },
  {
    name: "Customer Onboarding Web Application",
    org: "Emirates NBD",
    status: "Production",
    description:
      "The bank's customer onboarding web application, including onboarding through partners such as Amazon, Noon and Co-op.",
    bullets: [
      "Led and architected the application, including the APIs that partners call to onboard customers.",
      "Digital KYC built into the onboarding flow.",
    ],
    tags: ["Web", "APIs", "KYC", "Partner Integrations"],
  },
  {
    name: "RAG Strategy Playground",
    org: "Independent — Published",
    status: "Personal Project",
    description:
      "A hands-on field guide to RAG, built inside a working app — every retrieval and evaluation technique implemented as a switchable strategy rather than a slide.",
    bullets: [
      "Built rag-ollama-js to implement and compare RAG strategies against the same document set inside one codebase, instead of reading about them.",
      "46+ GitHub stars and 15 forks — public signal from other engineers building similar systems.",
      "Spun out the evaluation layer into raglens, a RAGAS-style RAG evaluation library for TypeScript, published to npm (provider-agnostic, zero required runtime dependencies).",
    ],
    tags: ["RAG", "TypeScript", "Ollama", "Evals", "npm"],
    link: { label: "GitHub", url: "https://github.com/AbhisekMishra/rag-ollama-js" },
    npmUrl: "https://www.npmjs.com/package/raglens",
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
    inResume: false,
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
