import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ExternalLink, Github, Wrench, Brain, Database, Cpu, Layers, Search, BookOpen,
  Target, Zap, Shield, BarChart3, GitBranch, Puzzle, Bot, Workflow,
  Code2, Sparkles, ChevronRight, CheckCircle2, Clock, GraduationCap, Network, FileText,
  Activity, TrendingUp, Rocket, Lock, Gauge
} from "lucide-react"

// ═══════════════════════════════════════════════════════════════════════════
// TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════

interface GithubLink {
  label: string
  url: string
}

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface TechCategory {
  label: string
  items: string[]
}

interface ArchNode {
  id: string
  label: string
  sublabel?: string
  type: "primary" | "default" | "accent"
}

interface ArchFlow {
  nodes: ArchNode[]
  title: string
}

interface JourneyItem {
  title: string
  content: string
}

interface Metric {
  value: string
  label: string
}

interface ShowcaseProject {
  id: string
  title: string
  tagline: string
  status: "in-progress" | "completed"
  category: string
  description: string
  problem: string
  motivation: string
  solution: string
  features: Feature[]
  techStack: TechCategory[]
  architecture: ArchFlow[]
  journey: JourneyItem[]
  metrics: Metric[]
  githubLinks: GithubLink[]
  demoUrl?: string
  challenges: string
  lessonsLearned: string
  futureImprovements: string
}

interface PassionProjectDetail {
  id: string
  title: string
  tagline: string
  category: string
  statusBadge: string
  description: string
  problem: string
  implementation: string
  keyHighlights: string[]
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
}

interface CompactProject {
  title: string
  subtitle: string
  description: string
  tech: string[]
  githubUrl?: string
}

// ═══════════════════════════════════════════════════════════════════════════
// PROJECT DATA — CURRENTLY WORKING ON
// ═══════════════════════════════════════════════════════════════════════════

const forgeML: ShowcaseProject = {
  id: "forgeml",
  title: "ForgeML",
  tagline: "End-to-End Machine Learning Pipeline Framework",
  status: "in-progress",
  category: "ML Infrastructure",
  description: "A comprehensive framework for building, training, and deploying machine learning models with automated pipeline orchestration, experiment tracking, and model versioning.",
  problem: "Building production ML pipelines involves repetitive boilerplate, fragmented tooling, and manual orchestration of training, evaluation, and deployment stages.",
  motivation: "Inspired by the need for a unified framework that bridges the gap between experimentation and production — making it simple to go from prototype to deployed model.",
  solution: "ForgeML provides a declarative pipeline definition system, automated hyperparameter tuning, built-in experiment tracking, and one-command deployment to multiple targets.",
  features: [
    { icon: <Workflow className="w-5 h-5" />, title: "Pipeline Orchestration", description: "Declarative pipeline definitions with automatic dependency resolution and parallel execution." },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Experiment Tracking", description: "Built-in tracking for metrics, parameters, artifacts, and model versions across runs." },
    { icon: <Zap className="w-5 h-5" />, title: "Auto-Tuning", description: "Automated hyperparameter optimization with Bayesian search and early stopping." },
    { icon: <Rocket className="w-5 h-5" />, title: "One-Click Deploy", description: "Deploy trained models to REST APIs, serverless functions, or container registries." },
    { icon: <GitBranch className="w-5 h-5" />, title: "Model Versioning", description: "Git-like versioning for models with lineage tracking and rollback capabilities." },
    { icon: <Puzzle className="w-5 h-5" />, title: "Plugin System", description: "Extensible architecture supporting custom transformers, trainers, and deployment targets." },
  ],
  techStack: [
    { label: "Languages", items: ["Python", "TypeScript"] },
    { label: "ML Frameworks", items: ["PyTorch", "scikit-learn", "Hugging Face"] },
    { label: "Infrastructure", items: ["Docker", "FastAPI", "gRPC"] },
    { label: "Storage", items: ["MLflow", "DVC", "S3"] },
    { label: "Orchestration", items: ["Celery", "Redis", "Airflow"] },
  ],
  architecture: [
    {
      title: "Pipeline Architecture",
      nodes: [
        { id: "config", label: "Pipeline Config", sublabel: "YAML / Python DSL", type: "default" },
        { id: "parser", label: "Config Parser", sublabel: "Validation & Resolution", type: "default" },
        { id: "orchestrator", label: "Pipeline Orchestrator", sublabel: "DAG Execution Engine", type: "primary" },
        { id: "data", label: "Data Loader", sublabel: "Multi-format Ingestion", type: "accent" },
        { id: "transform", label: "Feature Engine", sublabel: "Transform Pipeline", type: "accent" },
        { id: "train", label: "Training Engine", sublabel: "Distributed Training", type: "primary" },
        { id: "eval", label: "Evaluation", sublabel: "Metrics & Validation", type: "accent" },
        { id: "registry", label: "Model Registry", sublabel: "Version Control", type: "default" },
        { id: "deploy", label: "Deployment", sublabel: "API / Container / Serverless", type: "primary" },
      ],
    },
  ],
  journey: [
    { title: "Problem", content: "ML teams spend 60-80% of their time on pipeline engineering rather than modeling. Existing tools are fragmented and require significant glue code." },
    { title: "Research", content: "Studied MLflow, Kubeflow, Metaflow, and ZenML to understand what works and what's missing in the ML pipeline space." },
    { title: "Design Decisions", content: "Chose a declarative-first approach with escape hatches to imperative code. Prioritized local-first development with cloud deployment as an extension." },
    { title: "Architecture", content: "DAG-based pipeline executor with plugin architecture. Each stage is an isolated unit with typed inputs and outputs." },
    { title: "Implementation", content: "Building incrementally — starting with core pipeline executor, then adding experiment tracking, auto-tuning, and deployment modules." },
  ],
  metrics: [
    { value: "6+", label: "Pipeline Stages" },
    { value: "3", label: "Deploy Targets" },
    { value: "Plugin", label: "Architecture" },
  ],
  githubLinks: [],
  challenges: "Designing a flexible pipeline abstraction that works across different ML frameworks without becoming too opinionated or too abstract.",
  lessonsLearned: "The importance of getting the core abstractions right before building features — pipeline stage interfaces need to be simple but extensible.",
  futureImprovements: "GPU-aware scheduling, distributed training orchestration, A/B testing integration, and a visual pipeline editor.",
}

// ═══════════════════════════════════════════════════════════════════════════
// PROJECT DATA — I BUILT THESE (4 Showcase Projects)
// ═══════════════════════════════════════════════════════════════════════════

const showcaseProjects: ShowcaseProject[] = [
  // ── 1. Agentic Placement RAG ─────────────────────────────────────────────
  {
    id: "placement-rag",
    title: "Agentic Placement RAG",
    tagline: "Production-Grade Agentic RAG for Technical Placement Preparation",
    status: "completed",
    category: "Agentic AI × Hybrid RAG",
    description: "A production-grade, security-hardened Retrieval-Augmented Generation system engineered for technical placement interview preparation (DSA, System Design, Behavioral, and Company-Specific Q&A). Combines hybrid retrieval (dense Gemini text-embedding-004 + rank-bm25 with score fusion), HyDE query expansion, neural cross-encoder reranking, a 6-layer security guardrail pipeline, and real-time Server-Sent Events (SSE) streaming with a developer observability dashboard.",
    problem: "Job seekers preparing for technical interviews encounter fragmented resources across data structures, system design, and company interview rounds without reliable, context-grounded verification.",
    motivation: "Engineered to overcome the limitations of naive vector search by implementing production RAG patterns: hybrid sparse/dense retrieval, hypothetical document expansion (HyDE), neural cross-encoder reranking, multi-layer security guardrails, and real-time observability.",
    solution: "Built a decoupled full-stack architecture with a React 19 + Vite frontend and a FastAPI backend. Incoming queries undergo input validation and prompt injection checks, trigger query rewriting and HyDE expansion, retrieve candidates via parallel dense vector search (ChromaDB) and sparse keyword search (BM25), fuse scores, rerank top candidates with cross-encoder/ms-marco-MiniLM-L-6-v2, verify context grounding, and stream Gemini 2.5 Flash responses over SSE with per-stage latency metrics.",
    features: [
      { icon: <Search className="w-5 h-5" />, title: "Hybrid Retrieval", description: "Dense semantic search via Gemini text-embedding-004 combined with sparse keyword search via rank-bm25 and score fusion for high recall and keyword precision." },
      { icon: <Brain className="w-5 h-5" />, title: "HyDE Query Expansion", description: "Generates hypothetical answer documents to enrich sparse or underspecified queries before retrieval, significantly improving recall on technical terminology." },
      { icon: <Shield className="w-5 h-5" />, title: "Cross-Encoder Reranking", description: "Neural reranking with cross-encoder/ms-marco-MiniLM-L-6-v2 and similarity threshold filtering to ensure only high-relevance chunks reach generation." },
      { icon: <Lock className="w-5 h-5" />, title: "6-Layer Security Pipeline", description: "End-to-end security: input validation, prompt injection defense, sliding-window rate limiting, retrieval safety guards, context sanitization, and grounding checks." },
      { icon: <Activity className="w-5 h-5" />, title: "Live SSE Stage Tracking", description: "Server-Sent Events stream pipeline stage progress (rewrite → expand → retrieve → rerank → ground → generate) directly to the UI in real time." },
      { icon: <Gauge className="w-5 h-5" />, title: "Developer Observability Dashboard", description: "Per-request dashboard reporting stage latencies, chunk relevance scores, context window usage, security verdicts, and dynamic runtime feature toggles." },
    ],
    techStack: [
      { label: "Frontend", items: ["React 19", "Vite", "JavaScript", "Tailwind CSS", "SSE Client"] },
      { label: "Backend", items: ["FastAPI", "Python 3.10+", "Uvicorn", "Pydantic", "HTTPX"] },
      { label: "AI & Embeddings", items: ["Gemini 2.5 Flash", "text-embedding-004", "HyDE Expansion"] },
      { label: "Retrieval & Ranking", items: ["ChromaDB", "rank-bm25", "Cross-Encoder MiniLM", "Score Fusion"] },
      { label: "Security & Ingestion", items: ["Prompt Injection Defense", "Rate Limiting", "PyPDF", "python-docx", "Pytest"] },
      { label: "Deployment", items: ["Render Web Service", "Render Static Site", "Environment Config"] },
    ],
    architecture: [
      {
        title: "Agentic RAG & Observability Pipeline",
        nodes: [
          { id: "query", label: "User Query", sublabel: "Vite Chat Interface", type: "default" },
          { id: "security", label: "Security Guardrails", sublabel: "Injection & Rate Check", type: "accent" },
          { id: "hyde", label: "Query Rewriter & HyDE", sublabel: "Hypothetical Doc Expansion", type: "accent" },
          { id: "bm25", label: "BM25 Sparse", sublabel: "Keyword Retrieval", type: "accent" },
          { id: "dense", label: "ChromaDB Dense", sublabel: "text-embedding-004", type: "accent" },
          { id: "fusion", label: "Score Fusion", sublabel: "Hybrid Merge", type: "primary" },
          { id: "rerank", label: "Cross-Encoder Reranker", sublabel: "ms-marco-MiniLM-L-6-v2", type: "primary" },
          { id: "ground", label: "Context Grounding", sublabel: "Hallucination Check", type: "accent" },
          { id: "llm", label: "Gemini 2.5 Flash", sublabel: "Grounded Generation", type: "primary" },
          { id: "sse", label: "SSE Streaming & Dashboard", sublabel: "Live Stage Telemetry", type: "default" },
        ],
      },
    ],
    journey: [
      { title: "Problem", content: "Technical placement preparation requires both exact keyword matching (for algorithms, specific problems, and terminology) and semantic matching for conceptual questions. Naive dense-only vector search suffered from vocabulary mismatch." },
      { title: "Research", content: "Evaluated sparse vs. dense retrieval dynamics, reciprocal score fusion formulas, cross-encoder latency overheads, and guardrail architectures to prevent prompt injections and off-topic hallucinations." },
      { title: "Design Decisions", content: "Built a dual-retrieval pipeline pairing BM25 with ChromaDB. Added HyDE to generate hypothetical answer representations before dense retrieval, and a cross-encoder to rerank candidate chunks for precision." },
      { title: "Observability & Guardrails", content: "Implemented Server-Sent Events to stream each pipeline step to the frontend in real time, accompanied by a developer dashboard showing latency breakdowns, chunk similarity scores, and runtime toggles." },
      { title: "Implementation", content: "Engineered automatic ingestion of knowledge base PDFs on startup, structured modular core/agent interfaces, implemented 6-layer security verification, and deployed frontend and backend as decoupled services on Render." },
      { title: "Challenges", content: "Balancing cross-encoder reranking latency with response speed; mitigated user-perceived wait time via real-time SSE progress streaming." },
      { title: "Lessons Learned", content: "Hybrid retrieval with score fusion and cross-encoder reranking consistently outperforms single-index RAG systems on domain-specific technical queries." },
    ],
    metrics: [
      { value: "Hybrid", label: "Dense + BM25 Search" },
      { value: "6-Layer", label: "Security Guardrails" },
      { value: "Real-time", label: "SSE Telemetry" },
    ],
    githubLinks: [
      { label: "Frontend Repo", url: "https://github.com/Snigdha-Gayathri/Agentic-Placement-RAG-Frontend" },
      { label: "Backend Repo", url: "https://github.com/Snigdha-Gayathri/Agentic-Placement-RAG-Backend" },
    ],
    demoUrl: "https://agentic-placement-rag.onrender.com/",
    challenges: "Achieving high retrieval precision across diverse technical interview documents while maintaining low latency and strict guardrail verification.",
    lessonsLearned: "Production RAG requires defense-in-depth: hybrid retrieval, query expansion, neural reranking, and observability are essential for dependable AI systems.",
    futureImprovements: "Query-adaptive retrieval routing, multi-modal diagram retrieval, and automated benchmark evaluation runs across candidate interview sets.",
  },

  // ── 2. EKIP ──────────────────────────────────────────────────────────────
  {
    id: "ekip",
    title: "EKIP",
    tagline: "Enterprise Knowledge Intelligence Platform",
    status: "completed",
    category: "Agentic AI × Knowledge Engineering",
    description: "An enterprise-grade knowledge intelligence platform combining LangGraph multi-agent orchestration with a triple-database architecture (Supabase + Qdrant + Neo4j). Four specialized agents — Supervisor, Search, Knowledge Graph, and Reasoning — enable intelligent document search, relationship traversal, and automated insight generation with cited reports.",
    problem: "Organizations accumulate vast knowledge bases across documents, but extracting actionable insights requires understanding both semantic content (what things mean) and structural relationships (how things connect).",
    motivation: "Wanted to build a system that doesn't just search documents but truly understands organizational knowledge — both the content within documents and the relationships between concepts, systems, and entities.",
    solution: "Triple-database architecture: Supabase for structured metadata, Qdrant for hybrid semantic search (dense + sparse with RRF), and Neo4j for graph-based relationship traversal. Four LangGraph agents handle cyclic, multi-hop retrieval and reasoning.",
    features: [
      { icon: <Network className="w-5 h-5" />, title: "Triple-Database Architecture", description: "Supabase (metadata) + Qdrant (vectors) + Neo4j (graph) — each database optimized for its retrieval pattern." },
      { icon: <Bot className="w-5 h-5" />, title: "Supervisor Agent", description: "LangGraph cyclic orchestrator that dynamically routes queries and determines when enough context has been gathered." },
      { icon: <Search className="w-5 h-5" />, title: "Hybrid Semantic Search", description: "Qdrant-powered dense + sparse search with Reciprocal Rank Fusion for comprehensive document retrieval." },
      { icon: <GitBranch className="w-5 h-5" />, title: "Knowledge Graph Traversal", description: "Neo4j-backed entity and relationship exploration via auto-generated Cypher queries for dependency analysis." },
      { icon: <FileText className="w-5 h-5" />, title: "Cited Reports", description: "Report Agent generates structured markdown with inline citations tracing back to source documents." },
      { icon: <Layers className="w-5 h-5" />, title: "Interactive Explorer", description: "React Flow-powered visual knowledge graph for architecture maps, impact analysis, and entity exploration." },
    ],
    techStack: [
      { label: "Frontend", items: ["React 19", "Tailwind CSS", "React Flow", "Zustand", "React Query"] },
      { label: "Backend", items: ["FastAPI", "Python", "REST API", "SSE"] },
      { label: "AI", items: ["LangGraph", "Gemini API", "Groq API", "FastEmbed"] },
      { label: "Databases", items: ["Supabase (PostgreSQL)", "Qdrant Cloud", "Neo4j Aura"] },
      { label: "Retrieval", items: ["Hybrid Search", "RRF", "Cypher Queries"] },
    ],
    architecture: [
      {
        title: "Multi-Agent System",
        nodes: [
          { id: "query", label: "User Query", sublabel: "React Dashboard", type: "default" },
          { id: "gateway", label: "FastAPI Gateway", sublabel: "Auth + CORS + Router", type: "default" },
          { id: "supervisor", label: "Supervisor Agent", sublabel: "Query Intent Analysis", type: "primary" },
          { id: "search", label: "Search Agent", sublabel: "Qdrant Hybrid Search", type: "accent" },
          { id: "kg", label: "KG Agent", sublabel: "Neo4j Cypher Queries", type: "accent" },
          { id: "reasoning", label: "Reasoning Agent", sublabel: "Evidence Synthesis", type: "primary" },
          { id: "report", label: "Report Agent", sublabel: "Cited Markdown", type: "accent" },
          { id: "qdrant", label: "Qdrant", sublabel: "Vector DB", type: "default" },
          { id: "neo4j", label: "Neo4j", sublabel: "Graph DB", type: "default" },
          { id: "supabase", label: "Supabase", sublabel: "Metadata DB", type: "default" },
        ],
      },
    ],
    journey: [
      { title: "Problem", content: "Enterprise knowledge is split between unstructured documents (semantic content) and structured relationships (system dependencies, entity connections). No single retrieval method covers both." },
      { title: "Research", content: "Studied hybrid retrieval architectures, knowledge graph construction from documents, and LangGraph's cyclic graph execution for multi-hop reasoning." },
      { title: "Design Decisions", content: "Three databases instead of one — each optimized for its access pattern. Chose LangGraph for its cyclic execution model enabling multi-hop agent reasoning." },
      { title: "Architecture", content: "Supervisor Agent decides whether to invoke Search Agent (Qdrant), KG Agent (Neo4j), or both — iterating until enough evidence is gathered. Reasoning Agent synthesizes, Report Agent formats." },
      { title: "Implementation", content: "Built dual-indexing ingestion pipeline: documents simultaneously indexed in Qdrant (vectors) and Neo4j (entities/relationships). React Flow frontend for visual exploration." },
      { title: "Challenges", content: "Coordinating three databases with different consistency models and ensuring the Supervisor Agent knows when to stop gathering evidence and start reasoning." },
      { title: "Lessons Learned", content: "Triple-database architecture is powerful but requires careful orchestration. The Supervisor's stopping criteria are crucial for response quality and latency." },
    ],
    metrics: [
      { value: "4", label: "AI Agents" },
      { value: "3", label: "Databases" },
      { value: "Cyclic", label: "Graph Execution" },
    ],
    githubLinks: [
      { label: "Repository", url: "https://github.com/Snigdha-Gayathri/EKIP" },
    ],
    demoUrl: "https://ekip-u0ip.onrender.com/",
    challenges: "Designing reliable stopping criteria for the Supervisor Agent's cyclic execution and maintaining consistency across three different database systems.",
    lessonsLearned: "Specialized databases > general-purpose solutions. The combination of vector search + graph traversal covers far more ground than either alone.",
    futureImprovements: "Real-time document monitoring, collaborative knowledge curation, automated knowledge graph maintenance, and cross-organizational knowledge federation.",
  },

  // ── 3. Smart Shelf AI ────────────────────────────────────────────────────
  {
    id: "smartshelf",
    title: "Smart Shelf AI",
    tagline: "Quantum-Powered Multi-Agent Book Intelligence Platform",
    status: "completed",
    category: "Quantum Computing × Agentic AI",
    description: "A full-stack AI book recommendation system combining Quantum Computing techniques with a multi-agent orchestration layer. Five specialized AI agents — coordinated by the Q-Lexi mascot orchestrator — deliver personalized recommendations, reading analytics, and educational insights.",
    problem: "Readers struggle to discover books that truly match their interests. Traditional recommendation engines rely on simple collaborative filtering and miss nuanced reading preferences.",
    motivation: "Wanted to explore how Quantum Computing techniques could enhance recommendation quality, and how multi-agent architectures could create a more holistic reading intelligence experience.",
    solution: "Built a dual-layer system: a Quantum Computing-powered recommendation engine for nuanced book matching, and a LangGraph multi-agent orchestration layer with five specialized agents for comprehensive reader intelligence.",
    features: [
      { icon: <Cpu className="w-5 h-5" />, title: "Quantum Recommendation Engine", description: "PennyLane-based quantum computing techniques for nuanced book matching beyond traditional collaborative filtering." },
      { icon: <Bot className="w-5 h-5" />, title: "Q-Lexi Orchestrator", description: "Central mascot orchestrator routing tasks to five specialized agents based on user intent analysis." },
      { icon: <Brain className="w-5 h-5" />, title: "Multi-Agent Intelligence", description: "Analysis, Recommendation, Memory, Settings, and Personaliser agents working in coordination." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Reading Analytics", description: "Annual reading wrapped, educational insights, and user behavior analytics dashboard." },
      { icon: <Target className="w-5 h-5" />, title: "Personalized Recommendations", description: "Context-aware book suggestions based on reading history, preferences, and quantum-enhanced similarity." },
      { icon: <BookOpen className="w-5 h-5" />, title: "Author Insights", description: "Deep analysis of author styles, themes, and connections across the reading ecosystem." },
    ],
    techStack: [
      { label: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
      { label: "Backend", items: ["Flask", "Python", "REST API"] },
      { label: "AI / ML", items: ["LangGraph", "Gemini API", "PennyLane"] },
      { label: "Quantum", items: ["Quantum Computing", "Quantum Circuits", "Variational Algorithms"] },
      { label: "Architecture", items: ["Multi-Agent Systems", "Agent Memory", "State Management"] },
    ],
    architecture: [
      {
        title: "System Architecture",
        nodes: [
          { id: "user", label: "Reader", sublabel: "Web Interface", type: "default" },
          { id: "frontend", label: "React Frontend", sublabel: "Vite + Tailwind", type: "default" },
          { id: "api", label: "Flask API Gateway", sublabel: "REST Endpoints", type: "accent" },
          { id: "qlexi", label: "Q-Lexi Orchestrator", sublabel: "Intent Router", type: "primary" },
          { id: "analysis", label: "Analysis Agent", sublabel: "Reading Patterns", type: "accent" },
          { id: "recommend", label: "Recommendation Agent", sublabel: "Quantum Engine", type: "primary" },
          { id: "memory", label: "Memory Agent", sublabel: "Reading History", type: "accent" },
          { id: "personal", label: "Personaliser Agent", sublabel: "Fine-tuning", type: "accent" },
          { id: "quantum", label: "Quantum Layer", sublabel: "PennyLane Circuits", type: "primary" },
        ],
      },
    ],
    journey: [
      { title: "Problem", content: "Traditional recommendation engines use simple collaborative filtering that misses nuanced reading preferences and fails to provide holistic reading intelligence." },
      { title: "Research", content: "Explored quantum computing applications in recommendation systems and multi-agent architectures for complex task orchestration." },
      { title: "Design Decisions", content: "Chose a dual-layer approach: quantum-enhanced recommendations for quality and multi-agent orchestration for comprehensive intelligence. Built Q-Lexi as a unifying mascot/orchestrator." },
      { title: "Implementation", content: "Built the quantum recommendation engine with PennyLane, then layered the LangGraph multi-agent system on top for task routing and agent coordination." },
      { title: "Challenges", content: "Integrating quantum computing techniques with practical AI agent workflows while maintaining responsive user experience." },
      { title: "Solutions", content: "Designed asynchronous agent execution with fallback mechanisms and quantum circuit optimization for acceptable latency." },
      { title: "Lessons Learned", content: "Quantum computing in recommendation systems is promising but requires careful hybrid classical-quantum design to be practical." },
    ],
    metrics: [
      { value: "5", label: "AI Agents" },
      { value: "6+", label: "Intelligence Features" },
      { value: "Quantum", label: "Computing Layer" },
    ],
    githubLinks: [
      { label: "Frontend", url: "https://github.com/Snigdha-Gayathri/Smart-Shelf-AI-Frontend" },
      { label: "Backend", url: "https://github.com/Snigdha-Gayathri/Smart-Shelf-AI-Backend" },
    ],
    demoUrl: "https://smart-shelf-ai-frontend-1.onrender.com/",
    challenges: "Coordinating five specialized agents with reliable inter-agent communication while integrating quantum computing techniques for practical recommendation quality.",
    lessonsLearned: "Multi-agent systems require careful state management and fallback strategies. Quantum computing works best as an enhancement layer rather than a replacement.",
    futureImprovements: "Expand quantum circuits for deeper similarity analysis, add social reading features, and implement real-time collaborative recommendations.",
  },

  // ── 4. NeuroPlan AI ──────────────────────────────────────────────────────
  {
    id: "neuroplan",
    title: "NeuroPlan AI",
    tagline: "AI-Powered Adaptive Learning Roadmap Generator",
    status: "completed",
    category: "Generative AI × EdTech",
    description: "A multi-agent AI learning platform that generates personalized learning roadmaps with adaptive difficulty, spaced repetition, cognitive fatigue monitoring, and transfer learning analysis. Built on Next.js 14 with eight specialized AI agents.",
    problem: "Learners lack structured, adaptive guidance when developing new skills. Static learning paths don't account for individual pace, fatigue, retention, or skill transfer between domains.",
    motivation: "Wanted to build an intelligent tutor that goes beyond simple content generation — one that understands learning science (spaced repetition, cognitive load theory, transfer learning) and adapts in real-time.",
    solution: "Eight specialized AI agents orchestrated by an Arbitration Agent: Roadmap Intelligence, Module Content Generation, Evaluation Diagnostic, Mastery & Readiness, Retention Stability (Ebbinghaus forgetting curve), Fatigue Agent, Transfer Learning, and the Arbitration Agent itself.",
    features: [
      { icon: <GraduationCap className="w-5 h-5" />, title: "Adaptive Roadmaps", description: "AI-generated learning paths that adapt to your skill level, pace, and learning goals with dynamic difficulty adjustment." },
      { icon: <Brain className="w-5 h-5" />, title: "8 Specialized Agents", description: "Arbitration, Roadmap Intelligence, Content Generation, Evaluation, Mastery, Retention, Fatigue, and Transfer Learning agents." },
      { icon: <Activity className="w-5 h-5" />, title: "Fatigue Monitoring", description: "Cognitive load tracking via study session metrics — suggests breaks and adjusts difficulty when fatigue is detected." },
      { icon: <Clock className="w-5 h-5" />, title: "Spaced Repetition", description: "Ebbinghaus forgetting curve implementation schedules reviews at optimal intervals for long-term retention." },
      { icon: <Network className="w-5 h-5" />, title: "Transfer Learning Analysis", description: "TransferMatrix model maps skill relationships — shows how learning Python helps with JavaScript, for example." },
      { icon: <TrendingUp className="w-5 h-5" />, title: "Mastery Tracking", description: "Quiz-based assessment with mastery scoring, weak area identification, and readiness calculations." },
    ],
    techStack: [
      { label: "Frontend", items: ["Next.js 14", "React", "Tailwind CSS", "App Router"] },
      { label: "Backend", items: ["Next.js API Routes", "Prisma ORM", "Server Components"] },
      { label: "AI", items: ["Google Gemini API", "Groq API", "Multi-Agent System"] },
      { label: "Database", items: ["PostgreSQL", "Prisma"] },
      { label: "Auth", items: ["Clerk"] },
      { label: "Intelligence", items: ["Spaced Repetition", "Cognitive Load Theory", "Transfer Learning"] },
    ],
    architecture: [
      {
        title: "Multi-Agent Architecture",
        nodes: [
          { id: "user", label: "Learner", sublabel: "Next.js Frontend", type: "default" },
          { id: "api", label: "API Routes", sublabel: "/api/planner, /api/modules", type: "default" },
          { id: "arbitration", label: "Arbitration Agent", sublabel: "Orchestrator", type: "primary" },
          { id: "roadmap", label: "Roadmap Intelligence", sublabel: "Path Generation", type: "accent" },
          { id: "content", label: "Content Generation", sublabel: "Module Material", type: "accent" },
          { id: "eval", label: "Evaluation Diagnostic", sublabel: "Quiz Grading", type: "accent" },
          { id: "mastery", label: "Mastery & Readiness", sublabel: "Score Calculation", type: "accent" },
          { id: "retention", label: "Retention Stability", sublabel: "Forgetting Curve", type: "primary" },
          { id: "fatigue", label: "Fatigue Agent", sublabel: "Cognitive Load", type: "accent" },
          { id: "transfer", label: "Transfer Learning", sublabel: "Skill Mapping", type: "accent" },
          { id: "db", label: "PostgreSQL", sublabel: "Prisma ORM", type: "default" },
          { id: "llm", label: "Gemini / Groq", sublabel: "LLM APIs", type: "primary" },
        ],
      },
    ],
    journey: [
      { title: "Problem", content: "Static learning paths ignore individual learning pace, cognitive fatigue, retention decay, and cross-domain skill transfer — leading to inefficient learning." },
      { title: "Research", content: "Deep-dived into learning science: Ebbinghaus forgetting curve for spaced repetition, cognitive load theory for fatigue management, and transfer learning theory for skill mapping." },
      { title: "Design Decisions", content: "Chose Next.js 14 App Router for full-stack capabilities. Designed eight specialized agents instead of one monolithic AI to handle distinct learning concerns." },
      { title: "Architecture", content: "Arbitration Agent acts as the brain — balancing user requests, fatigue levels, and retention needs. Each agent has a clear responsibility and communicates through typed interfaces." },
      { title: "Implementation", content: "Built incrementally: roadmap generation first, then quiz evaluation, mastery tracking, spaced repetition scheduling, fatigue monitoring, and finally transfer learning analysis." },
      { title: "Challenges", content: "Implementing the Ebbinghaus forgetting curve with real-time decay factor calculations and ensuring the Fatigue Agent's assessments meaningfully impact the learning experience." },
      { title: "Lessons Learned", content: "Learning science principles translate well into AI agent responsibilities. The key is keeping agents focused and letting the orchestrator handle coordination." },
    ],
    metrics: [
      { value: "8", label: "AI Agents" },
      { value: "6", label: "DB Models" },
      { value: "Real-time", label: "Adaptation" },
    ],
    githubLinks: [
      { label: "Repository", url: "https://github.com/Snigdha-Gayathri/NeuroPlan-AI" },
    ],
    demoUrl: "https://neuroplan-ai.onrender.com/",
    challenges: "Balancing eight specialized agents with real-time adaptation while maintaining responsive UI and accurate learning science implementations.",
    lessonsLearned: "Multi-agent systems work exceptionally well for educational AI — each learning science principle maps naturally to a dedicated agent.",
    futureImprovements: "Peer learning integration, visual knowledge graphs, mobile app, and integration with external learning platforms (Coursera, Udemy).",
  },
]

// ═══════════════════════════════════════════════════════════════════════════
// PASSION PROJECTS DATA (7 Verified Projects)
// ═══════════════════════════════════════════════════════════════════════════

const passionProjects: PassionProjectDetail[] = [
  // ── 1. AI Job Hunter Automation ──────────────────────────────────────────
  {
    id: "ai-job-hunter",
    title: "AI Job Hunter Automation",
    tagline: "Automated LinkedIn Job Scraping & LLM Candidate-Matching Engine",
    category: "Agentic Automation × LLM Scoring",
    statusBadge: "Automated Workflow",
    description: "An automated job intelligence pipeline that queries LinkedIn via Apify, manages persistent state to avoid duplicate processing across runs, applies local heuristic and seniority filters, and scores candidate-job fit using Groq-hosted LLMs against a structured engineering profile.",
    problem: "Manual job hunting for AI and ML roles requires sifting through hundreds of repetitive postings, filtering senior from entry-level positions, and manually checking technical alignment.",
    implementation: "Integrated Apify's LinkedIn scraper actor, built a persistent local cache (seen_jobs.json) with LRU pruning (5,000 jobs) to eliminate redundant external calls, executed local keyword filtering for AI/ML roles and exclusion of senior titles, and performed batch candidate scoring via the Groq API against an engineering profile. Runs automatically via a scheduled GitHub Actions workflow.",
    keyHighlights: [
      "Single-request Apify actor execution for targeted India AI/ML positions",
      "Persistent JSON state cache preventing duplicate processing across workflow runs",
      "Local multi-tier filtering for role titles, technical keywords, and seniority exclusion",
      "Batched LLM evaluation against candidate education, skills, and target roles via Groq",
      "Automated scheduled execution via GitHub Actions with zero manual intervention",
    ],
    techStack: ["Python", "Groq API", "Apify API", "GitHub Actions", "BeautifulSoup4", "SMTP Email"],
    githubUrl: "https://github.com/Snigdha-Gayathri/ai-job-hunter",
  },

  // ── 2. Recruiter Mailing Automation ──────────────────────────────────────
  {
    id: "recruiter-mailing",
    title: "Recruiter Mailing Automation",
    tagline: "Autonomous Recruiter Discovery, Relevance Scoring & Outreach Pipeline",
    category: "Outreach Engineering × API Automation",
    statusBadge: "Production Pipeline",
    description: "An automated end-to-end recruitment outreach system that discovers recruiters across targeted segments using Apify, calculates recruiter-candidate relevance, generates personalized multi-variant communication packages, and sends emails through the Gmail API using OAuth2.",
    problem: "Cold recruiter outreach is time-consuming and often impersonal, while naive mass mailers lack relevance scoring, risk email rate limits, and suffer from high duplication rates.",
    implementation: "Architected a 4-stage modular pipeline (discovery, matching, outreach, storage). It scrapes and deduplicates recruiters matching target locations and tech domains, computes candidate match scores, dynamically renders personalized emails and 3-variant LinkedIn messages (connection notes, InMail, follow-up), and executes authenticated sending via Gmail API with strict run limits (MAX_EMAILS_PER_RUN) and persistent state tracking.",
    keyHighlights: [
      "Targeted recruiter discovery with multi-segment search, location matching, and deduplication",
      "Relevance scoring engine weighing domain fit, company hiring activity, and technical alignment",
      "Dynamic personalization package generating tailored email bodies and LinkedIn connection notes",
      "Direct delivery via Google Gmail API using OAuth2 tokens and rate-limiting safeguards",
      "Persistent state management tracking contacted profiles to prevent duplicate outreach",
    ],
    techStack: ["Python", "Gmail API", "Google OAuth2", "Apify API", "Requests", "JSON State"],
    githubUrl: "https://github.com/Snigdha-Gayathri/recruiter-mailing-automation",
  },

  // ── 3. NOOA Ablation Study ───────────────────────────────────────────────
  {
    id: "nooa-study",
    title: "NOOA Ablation Study",
    tagline: "Controlled Empirical Evaluation of Tool-Using AI Agent Harness Components",
    category: "Systems Research × Agent Engineering",
    statusBadge: "Research Study",
    description: "An experimental ablation research study developed from a systems-performance perspective (inspired by NVIDIA Deep Learning Performance Architect engineering) to measure how individual agent-harness components affect reliability, execution latency, and error modes in tool-using agents.",
    problem: "Agent systems frequently add complex abstractions (CodeAct, contracts, persistent memory, validation retries) without isolating which components actually improve task completion versus adding latency, serialization overhead, and new failure points.",
    implementation: "Structured controlled experimental configurations (A through D) systematically isolating 11 architectural mechanisms: CodeAct, Typed I/O, Validation + Retry, Pass-by-Reference data movement, Persistent State, Structured Event Logging, Static vs Dynamic Context, Validated Termination, Multi-Agent Contracts, and Failure Recovery. Implemented in a reproducible research notebook with paired comparisons and failure classification taxonomy.",
    keyHighlights: [
      "Ablation matrix isolating 11 distinct agent harness mechanisms across 4 configurations (A–D)",
      "Evaluates task completion, failure frequency, execution overhead, and data-movement costs",
      "Rigorous failure taxonomy distinguishing tool errors, state failures, and validation breakdowns",
      "Systems-first perspective: measuring whether architectural complexity justifies latency overhead",
      "Reproducible research notebook with automated statistical analysis and visualization figures",
    ],
    techStack: ["Python", "Jupyter Notebook", "PyTorch / Agent Harness", "Statistical Analysis", "Matplotlib"],
    githubUrl: "https://github.com/Snigdha-Gayathri/NOOA-Ablation-Study",
  },

  // ── 4. LLM Inference Optimization ────────────────────────────────────────
  {
    id: "llm-inference",
    title: "LLM Inference Optimization Lab",
    tagline: "GPU Benchmarking & Performance Profiling for Large Language Model Serving",
    category: "ML Systems × Inference Optimization",
    statusBadge: "Benchmarking Lab",
    description: "A comprehensive benchmarking and optimization framework for evaluating LLM inference performance across models, precisions, batch sizes, and sequence lengths on GPU hardware.",
    problem: "Modern LLM systems spend the majority of their lifecycle in inference where serving efficiency directly dictates throughput, latency, GPU memory footprint, and operating costs.",
    implementation: "Built an automated benchmarking pipeline for transformer language models (TinyLlama, instruction-tuned architectures) on CUDA GPUs. Evaluates precision modes (FP32, FP16, BF16), batch-size scaling, prompt length vs generation length trade-offs, and torch.compile() kernel optimization. Automatically logs first-token latency (TTFT), total latency, tokens-per-second throughput, and peak VRAM.",
    keyHighlights: [
      "Multi-model GPU benchmarking measuring TTFT, total latency, throughput, and peak VRAM",
      "Precision sweep analyzing memory and compute trade-offs across FP32, FP16, and BF16",
      "Batch-scaling analysis quantifying throughput gains vs memory growth",
      "Disaggregated prompt-length vs generation-length profiling to pinpoint decoding bottlenecks",
      "Empirical evaluation of torch.compile() performance on GPU workloads with automated CSV reports",
    ],
    techStack: ["PyTorch", "CUDA", "Hugging Face Transformers", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/Snigdha-Gayathri/LLM-Inference-Optimization",
  },

  // ── 5. Deep Learning Performance Profiler v2 ─────────────────────────────
  {
    id: "dl-profiler",
    title: "Deep Learning Performance Profiler v2",
    tagline: "Automated GPU Profiler & Bottleneck Detection Engine for Transformer Models",
    category: "GPU Systems × PyTorch Profiling",
    statusBadge: "Performance Profiler",
    description: "A GPU inference profiling and bottleneck diagnostic harness for transformer language models (TinyLlama-1.1B, Qwen2.5-1.5B) integrating PyTorch Profiler, operator-level CUDA analysis, automated bottleneck ranking, and remediation recommendations.",
    problem: "Identifying why a deep learning model is running slowly on a GPU requires navigating complex CUDA kernel traces, memory fragmentation, and operator overheads without clear prescriptive guidance.",
    implementation: "Built a self-contained profiling harness integrating PyTorch Profiler with CUDA synchronization. Profiles operator-level CUDA/CPU execution time, computes KV-cache memory footprints, classifies workloads as memory-bound or compute-bound, and applies an automated heuristics engine that ranks bottlenecks (GPU under-utilization, kernel launch overhead, small-batch inefficiency) with actionable remediation advice (FlashAttention, compilation, quantization, continuous batching) in self-contained HTML reports.",
    keyHighlights: [
      "PyTorch Profiler integration capturing operator-level CUDA/CPU timings and memory allocation",
      "Memory-bound vs compute-bound classification with KV-cache memory pressure estimation",
      "Automated bottleneck detection heuristics ranking GPU under-utilization and sync overhead",
      "Concrete optimization suggestions: torch.compile, FlashAttention, quantization, and batching",
      "Exports self-contained diagnostic HTML reports, radar charts, heatmaps, and CSV results",
    ],
    techStack: ["PyTorch Profiler", "CUDA", "Hugging Face Transformers", "Accelerate", "Seaborn", "Pandas"],
    githubUrl: "https://github.com/Snigdha-Gayathri/Deep-Learning-Performance-Profiler-v2",
  },

  // ── 6. DPO Playground ────────────────────────────────────────────────────
  {
    id: "dpo-playground",
    title: "DPO Playground",
    tagline: "Interactive Platform for Direct Preference Optimization (DPO) Exploration",
    category: "LLM Alignment × Interactive Systems",
    statusBadge: "Live Deployed",
    description: "An interactive platform for exploring and understanding Direct Preference Optimization (DPO), the modern alignment technique that replaces complex RLHF pipelines. Enables users to experiment with preference datasets, compare chosen versus rejected responses, visualize the optimization process, and gain intuition for how preference-based fine-tuning aligns models with human preferences.",
    problem: "Understanding LLM alignment via RLHF or DPO is difficult without hands-on experimentation with paired preference data and loss dynamics.",
    implementation: "Developed a full-stack educational interactive web platform allowing users to inspect preference pairs, analyze chosen vs. rejected token probability distributions, and explore DPO loss mechanics through an intuitive interface.",
    keyHighlights: [
      "Interactive DPO workflow visualization and loss curve intuition",
      "Preference pair creation, inspection, and chosen vs rejected comparison",
      "Educational playground demystifying alignment without complex reinforcement learning infrastructure",
      "Modern responsive web application with hands-on experimentation UI",
    ],
    techStack: ["React", "TypeScript", "Python", "Tailwind CSS", "LLM Alignment"],
    demoUrl: "https://dpo-playground.onrender.com",
    githubUrl: "https://github.com/Snigdha-Gayathri/DPO-Playground",
  },

  // ── 7. LLM Quest ─────────────────────────────────────────────────────────
  {
    id: "llm-quest",
    title: "LLM Quest",
    tagline: "Gamified Interactive Learning Platform for Mastering the LLM Engineering Stack",
    category: "AI Systems Education × Web Platform",
    statusBadge: "Live Deployed",
    description: "A gamified, browser-based learning platform designed to help aspiring AI engineers master the complete LLM engineering stack through interactive challenges and interview-style assessments across transformers, RAG, vector databases, fine-tuning, inference optimization, and multi-agent systems.",
    problem: "Learning modern LLM engineering concepts from passive documentation leaves engineers unprepared for practical systems design and technical interview evaluations.",
    implementation: "Engineered a quiz and assessment application featuring progressively difficult questions, immediate answer validation, categorized engineering tracks, and performance tracking across the full AI lifecycle.",
    keyHighlights: [
      "Interactive quiz and challenge engine with instant technical evaluation",
      "Comprehensive curriculum covering Transformers, RAG, Fine-Tuning, Agents, and MLOps",
      "Progress tracking, mastery scores, and interview-oriented concept reinforcement",
      "Fast, responsive single-page web application with modern dark-mode aesthetic",
    ],
    techStack: ["TypeScript", "React", "Vite", "Tailwind CSS", "Educational Engineering"],
    demoUrl: "https://llm-quest.onrender.com/",
    githubUrl: "https://github.com/Snigdha-Gayathri/LLM-Quest",
  },
]

// ═══════════════════════════════════════════════════════════════════════════
// COMPACT PROJECTS (More Projects)
// ═══════════════════════════════════════════════════════════════════════════

const compactProjects: CompactProject[] = [
  {
    title: "AI Sentiment Analyzer",
    subtitle: "Sentiment Classification Engine",
    description: "Web application classifying user reviews into positive, negative, or neutral sentiments with live analytical insights using Hugging Face Transformers.",
    tech: ["Flask", "Python", "Hugging Face Transformers"],
  },
  {
    title: "Image Cartooniser",
    subtitle: "GAN-Based Style Transfer",
    description: "Style-transfer generator using GANs and bilateral filtering to synthesize cartoon styling from real photographs.",
    tech: ["Python", "GANs", "OpenCV"],
    githubUrl: "https://github.com/Snigdha-Gayathri/Cartoonifier-ML-model",
  },
  {
    title: "ML Image Colorizer",
    subtitle: "Deep Learning Colorization",
    description: "Grayscale restoration using deep CNNs and pre-trained Caffe models to map luminance to chrominance values.",
    tech: ["CNNs", "OpenCV", "Deep Learning", "Caffe"],
    githubUrl: "https://github.com/Snigdha-Gayathri/Image-Colorizer-ML",
  },
  {
    title: "Car Price Predictor",
    subtitle: "Automobile Valuation Model",
    description: "Regression model with ETL and one-hot encoding pipelines, optimizing automobile pricing using Random Forest.",
    tech: ["scikit-learn", "Random Forest", "Python"],
  },
  {
    title: "Amazon Prime Movie Classifier",
    subtitle: "Content Classification System",
    description: "Multi-variable classification model categorizing movie content by parsing rich metadata streams.",
    tech: ["Python", "scikit-learn", "XGBoost"],
  },
  {
    title: "Boston House Price Predictor",
    subtitle: "Property Valuation Pipeline",
    description: "Supervised regression pipeline analyzing crime, rooms, location, and socio-environmental factors.",
    tech: ["Python", "scikit-learn", "XGBoost"],
  },
  {
    title: "Breast Cancer Diagnostic Model",
    subtitle: "Medical Diagnostic Classifier",
    description: "ML classification model for breast cancer detection — classifying tumors as benign or malignant.",
    tech: ["Python", "scikit-learn", "Machine Learning"],
  },
]

// ═══════════════════════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

// ── Architecture Diagram ──────────────────────────────────────────────────
const ArchitectureDiagram = ({ flow }: { flow: ArchFlow }) => (
  <div className="arch-container">
    <p className="arch-label mb-4">{flow.title}</p>
    <div className="arch-flow">
      {flow.nodes.map((node, i) => (
        <div key={node.id} className="flex items-center gap-2">
          <div className={`arch-node slide-up stagger-${Math.min(i + 1, 8)} arch-node--${node.type}`}>
            <div className="font-semibold text-xs">{node.label}</div>
            {node.sublabel && (
              <div className="text-[10px] text-muted-foreground mt-0.5">{node.sublabel}</div>
            )}
          </div>
          {i < flow.nodes.length - 1 && (
            <div className="arch-arrow slide-up">
              <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)

// ── Feature Grid ──────────────────────────────────────────────────────────
const FeatureGrid = ({ features }: { features: Feature[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {features.map((feature, i) => (
      <div key={i} className={`feature-card slide-up stagger-${Math.min(i + 1, 6)}`}>
        <div className="feature-card-icon">{feature.icon}</div>
        <h4 className="font-poppins font-semibold text-sm text-foreground mb-1.5">{feature.title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    ))}
  </div>
)

// ── Tech Stack Grid ───────────────────────────────────────────────────────
const TechStackGrid = ({ categories }: { categories: TechCategory[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {categories.map((cat, i) => (
      <div key={i} className={`tech-category slide-up stagger-${Math.min(i + 1, 8)}`}>
        <p className="tech-category-label">{cat.label}</p>
        <div className="flex flex-wrap gap-1.5">
          {cat.items.map((item) => (
            <span key={item} className="tech-badge">{item}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
)

// ── Journey Timeline ──────────────────────────────────────────────────────
const JourneyTimeline = ({ items }: { items: JourneyItem[] }) => (
  <div className="journey-timeline">
    {items.map((item, i) => (
      <div key={i} className={`journey-item slide-up stagger-${Math.min(i + 1, 8)}`}>
        <div className="journey-dot" />
        <h4 className="font-poppins font-semibold text-sm text-foreground mb-1">{item.title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{item.content}</p>
      </div>
    ))}
  </div>
)

// ── Metrics Row ───────────────────────────────────────────────────────────
const MetricsRow = ({ metrics }: { metrics: Metric[] }) => (
  <div className="grid grid-cols-3 gap-3">
    {metrics.map((m, i) => (
      <div key={i} className={`metric-card slide-up stagger-${Math.min(i + 1, 4)}`}>
        <div className="metric-value">{m.value}</div>
        <div className="metric-label">{m.label}</div>
      </div>
    ))}
  </div>
)

// ── Showcase Project Card (full-width deep dive) ──────────────────────────
const ProjectShowcase = ({ project }: { project: ShowcaseProject }) => {
  return (
    <div className="project-showcase project-anchor-target" id={`project-${project.id}`}>
      <div className="container mx-auto max-w-5xl px-6">

        {/* ── Hero ── */}
        <div className="project-hero">
          <div className="project-hero-visual">
            <div className="relative z-10">
              {/* Status & Category */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`status-badge ${project.status === "in-progress" ? "status-badge--active" : "status-badge--completed"}`}>
                  <span className="status-badge-dot" />
                  {project.status === "in-progress" ? "In Progress" : "Completed"}
                </span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-poppins font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 slide-up">
                {project.title}
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-6 slide-up delay-100">
                {project.tagline}
              </p>

              {/* Quick Metrics */}
              <div className="mb-8">
                <MetricsRow metrics={project.metrics} />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.demoUrl && (
                  <Button size="sm" variant="default" className="gap-2 text-sm px-5 py-2.5 rounded-xl shadow-md" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                )}
                {project.githubLinks.map((link) => (
                  <Button key={link.url} size="sm" variant="outline" className="gap-2 text-sm px-5 py-2.5 rounded-xl bg-background/80 hover:bg-background" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Description ── */}
        <div className="py-8 slide-up">
          <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </div>

        {/* ── Overview ── */}
        <div className="py-8 border-t border-border/20">
          <h4 className="font-poppins font-bold text-lg text-foreground mb-6 flex items-center gap-2 slide-up">
            <Target className="w-5 h-5 text-primary" /> Project Overview
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 slide-up">
            <div>
              <h5 className="font-poppins font-semibold text-sm text-foreground mb-2">
                Problem Statement
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h5 className="font-poppins font-semibold text-sm text-foreground mb-2">
                Motivation & Importance
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.motivation}</p>
            </div>
          </div>
          <div className="mt-6 slide-up">
            <h5 className="font-poppins font-semibold text-sm text-foreground mb-2">
              Solution Overview
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* ── Key Features ── */}
        <div className="py-8 border-t border-border/20">
          <h4 className="font-poppins font-bold text-lg text-foreground mb-6 flex items-center gap-2 slide-up">
            <Sparkles className="w-5 h-5 text-primary" /> Key Features
          </h4>
          <FeatureGrid features={project.features} />
        </div>

        {/* ── System Architecture ── */}
        <div className="py-8 border-t border-border/20">
          <h4 className="font-poppins font-bold text-lg text-foreground mb-6 flex items-center gap-2 slide-up">
            <Layers className="w-5 h-5 text-primary" /> System Architecture
          </h4>
          <div className="space-y-6">
            {project.architecture.map((flow, i) => (
              <ArchitectureDiagram key={i} flow={flow} />
            ))}
          </div>
        </div>

        {/* ── Technical Stack ── */}
        <div className="py-8 border-t border-border/20">
          <h4 className="font-poppins font-bold text-lg text-foreground mb-6 flex items-center gap-2 slide-up">
            <Cpu className="w-5 h-5 text-primary" /> Technical Stack
          </h4>
          <TechStackGrid categories={project.techStack} />
        </div>

        {/* ── Project Journey ── */}
        <div className="py-8 border-t border-border/20">
          <h4 className="font-poppins font-bold text-lg text-foreground mb-6 flex items-center gap-2 slide-up">
            <GitBranch className="w-5 h-5 text-primary" /> Project Journey
          </h4>
          <JourneyTimeline items={project.journey} />
        </div>

        {/* ── Results & Lessons ── */}
        <div className="py-8 border-t border-border/20">
          <h4 className="font-poppins font-bold text-lg text-foreground mb-6 flex items-center gap-2 slide-up">
            <BarChart3 className="w-5 h-5 text-primary" /> Results & Insights
          </h4>
          <div className="space-y-6 slide-up">
            <div>
              <h5 className="font-poppins font-semibold text-sm text-foreground mb-2">
                Challenges Overcome
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.challenges}</p>
            </div>
            <div>
              <h5 className="font-poppins font-semibold text-sm text-foreground mb-2">
                Lessons Learned
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.lessonsLearned}</p>
            </div>
            <div>
              <h5 className="font-poppins font-semibold text-sm text-foreground mb-2">
                Future Improvements
              </h5>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.futureImprovements}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

// ── Rich Passion Project Card ─────────────────────────────────────────────
const PassionProjectCard = ({ project }: { project: PassionProjectDetail }) => (
  <div
    id={`project-${project.id}`}
    className="passion-project-card project-anchor-target mb-8 slide-up"
  >
    {/* Header row: status badge + category */}
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div className="flex items-center gap-2.5">
        <span className="status-badge status-badge--completed">
          <span className="status-badge-dot" />
          {project.statusBadge}
        </span>
        <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
          {project.category}
        </span>
      </div>
    </div>

    {/* Title & Tagline */}
    <h3 className="font-poppins font-extrabold text-2xl md:text-3xl text-foreground mb-2">
      {project.title}
    </h3>
    <p className="text-sm md:text-base text-primary/90 font-medium mb-4">
      {project.tagline}
    </p>

    {/* Description */}
    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
      {project.description}
    </p>

    {/* Problem & Implementation Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 p-4 rounded-xl bg-muted/30 border border-border/30">
      <div>
        <h5 className="font-poppins font-semibold text-xs text-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1.5 text-primary">
          <Target className="w-3.5 h-3.5" /> Problem Addressed
        </h5>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {project.problem}
        </p>
      </div>
      <div>
        <h5 className="font-poppins font-semibold text-xs text-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1.5 text-primary">
          <Cpu className="w-3.5 h-3.5" /> Implementation Approach
        </h5>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {project.implementation}
        </p>
      </div>
    </div>

    {/* Key Highlights */}
    <div className="mb-6">
      <h5 className="font-poppins font-semibold text-xs text-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-primary" /> Key Highlights & Concepts
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {project.keyHighlights.map((highlight, idx) => (
          <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Tech Stack Badges */}
    <div className="mb-6">
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-badge text-[11px] py-0.5 px-2">
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/20">
      {project.demoUrl && (
        <Button size="sm" variant="default" className="gap-2 text-xs px-4 py-2 rounded-xl shadow-md" asChild>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-3.5 h-3.5" /> Live Demo
          </a>
        </Button>
      )}
      {project.githubUrl && (
        <Button size="sm" variant="outline" className="gap-2 text-xs px-4 py-2 rounded-xl bg-background/80 hover:bg-background" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-3.5 h-3.5" /> Repository
          </a>
        </Button>
      )}
    </div>
  </div>
)

// ── Compact Project Card (for smaller ML projects) ────────────────────────
const CompactProjectCard = ({ project, index }: { project: CompactProject; index: number }) => (
  <div className={`compact-project-card slide-up stagger-${Math.min(index + 1, 8)}`}>
    <h4 className="font-poppins font-semibold text-sm text-foreground mb-1">{project.title}</h4>
    <p className="text-[11px] text-muted-foreground font-medium mb-2">{project.subtitle}</p>
    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{project.description}</p>
    <div className="flex flex-wrap gap-1.5 mb-3">
      {project.tech.map((t) => (
        <span key={t} className="tech-badge">{t}</span>
      ))}
    </div>
    {project.githubUrl && (
      <Button size="sm" variant="outline" className="text-xs gap-1.5 rounded-lg" asChild>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <Github className="w-3 h-3" /> GitHub
        </a>
      </Button>
    )}
  </div>
)

// ═══════════════════════════════════════════════════════════════════════════
// MAIN SECTION
// ═══════════════════════════════════════════════════════════════════════════

const ProjectsSection = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.05, rootMargin: "0px 0px -60px 0px" }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view")
      })
    }, observerOptions)

    const targets = document.querySelectorAll(
      "#projects .slide-up, #projects .slide-in-left, #projects .slide-in-right, #projects .arch-node, #projects .arch-arrow, #projects .journey-item, #projects .fade-in, #projects .scale-in"
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToProject = (projectId: string) => {
    const element = document.getElementById(projectId)
    if (element) {
      const offset = 90
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: "smooth" })

      // Visual flash highlight
      element.classList.remove("highlight-target")
      void element.offsetWidth // trigger reflow
      element.classList.add("highlight-target")
      setTimeout(() => {
        element.classList.remove("highlight-target")
      }, 2000)
    }
  }

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">

        {/* ══════════════════════════════════════════════════════════════════
            SECTION HEADER
            ══════════════════════════════════════════════════════════════════ */}
        <div className="text-center mb-6 slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            <Code2 className="w-3 h-3" /> Engineering Showcase
          </div>
          <h2 className="font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground">
            Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dives into AI systems I've architected — from agentic RAG and quantum computing to GPU inference optimization and workflow automation.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            1. CURRENTLY WORKING ON — ForgeML
            ══════════════════════════════════════════════════════════════════ */}
        <div id="projects-currently-building" className="project-anchor-target mb-10">
          <div className="text-center mb-2 slide-up">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">
              <Wrench className="w-3 h-3" /> Currently Building
            </div>
          </div>
          <ProjectShowcase project={forgeML} />
        </div>

        <div className="section-divider" />

        {/* ══════════════════════════════════════════════════════════════════
            2. I BUILT THESE — 4 Showcase Projects with Quick Navigation Chips
            ══════════════════════════════════════════════════════════════════ */}
        <div id="projects-built-these" className="project-anchor-target text-center mb-4 slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-3 h-3" /> Completed Systems
          </div>
          <h3 className="font-poppins font-extrabold text-3xl md:text-4xl text-foreground mb-2">
            I Built These
          </h3>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-4">
            Production-grade AI systems spanning agentic architectures, quantum computing, hybrid RAG, and knowledge engineering.
          </p>

          {/* Quick-navigation chips for I Built These */}
          <div className="project-chips-container">
            {showcaseProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => scrollToProject(`project-${p.id}`)}
                className="project-chip"
                aria-label={`Jump to ${p.title}`}
              >
                <span className="project-chip-dot" />
                <span>{p.title}</span>
              </button>
            ))}
          </div>
        </div>

        {showcaseProjects.map((project) => (
          <ProjectShowcase key={project.id} project={project} />
        ))}

        <div className="section-divider" />

        {/* ══════════════════════════════════════════════════════════════════
            3. PASSION PROJECTS — 7 Projects with Quick Navigation Chips
            ══════════════════════════════════════════════════════════════════ */}
        <div id="projects-passion" className="project-anchor-target text-center mb-4 slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-4">
            <Brain className="w-3 h-3" /> Creative Experiments & Research
          </div>
          <h3 className="font-poppins font-extrabold text-3xl md:text-4xl text-foreground mb-2">
            Passion Projects
          </h3>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-4">
            Targeted automation tools, empirical systems research, inference performance labs, and interactive alignment platforms.
          </p>

          {/* Quick-navigation chips for Passion Projects */}
          <div className="project-chips-container">
            {passionProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => scrollToProject(`project-${p.id}`)}
                className="project-chip"
                aria-label={`Jump to ${p.title}`}
              >
                <span className="project-chip-dot" />
                <span>{p.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {passionProjects.map((project) => (
            <PassionProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="section-divider" />

        {/* ══════════════════════════════════════════════════════════════════
            4. MORE PROJECTS — Compact Grid
            ══════════════════════════════════════════════════════════════════ */}
        <div id="projects-more" className="project-anchor-target mb-12">
          <div className="text-center mb-10 slide-up">
            <h3 className="font-poppins font-bold text-2xl text-foreground mb-2">
              More Projects
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Machine learning and deep learning explorations across computer vision, NLP, and predictive analytics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {compactProjects.map((project, index) => (
              <CompactProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection
