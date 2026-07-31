import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ExternalLink, Github, Wrench, Brain, Database, Cpu, Layers, Search, BookOpen,
  Target, Lightbulb, Zap, Shield, BarChart3, GitBranch, Puzzle, Bot, Workflow,
  Code2, Sparkles, ChevronRight, CheckCircle2, Clock, GraduationCap, Network, FileText,
  Activity, TrendingUp, Rocket, MessageSquare
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

interface PassionProject {
  title: string
  description: string
  highlights: string[]
  demoUrl: string
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
    tagline: "Intelligent Interview Preparation with Hybrid RAG",
    status: "completed",
    category: "Agentic AI × RAG",
    description: "A production-grade Retrieval-Augmented Generation system for company-specific interview preparation. Features dual retrieval (BM25 + dense vectors), reciprocal rank fusion, cross-encoder reranking, real-time pipeline progress tracking via SSE, and automatic knowledge base sync with Google Drive.",
    problem: "Job seekers need company-specific interview preparation, but relevant information is scattered across forums, websites, and PDFs — making systematic preparation difficult.",
    motivation: "Wanted to build a real-world RAG system that goes beyond basic vector search — implementing production patterns like hybrid retrieval, reranking, differential sync, and real-time progress tracking.",
    solution: "Built a full-stack RAG application with a sophisticated retrieval pipeline: query reformulation → dual retrieval (BM25 sparse + ChromaDB dense) → reciprocal rank fusion → cross-encoder reranking → agentic evaluation → LLM generation. Knowledge base auto-syncs from Google Drive on startup.",
    features: [
      { icon: <Search className="w-5 h-5" />, title: "Hybrid Retrieval", description: "Dual BM25 sparse + ChromaDB dense vector retrieval with Reciprocal Rank Fusion for comprehensive coverage." },
      { icon: <Shield className="w-5 h-5" />, title: "Cross-Encoder Reranking", description: "Neural reranking stage that reorders retrieved chunks by semantic relevance before generation." },
      { icon: <Activity className="w-5 h-5" />, title: "Real-time Pipeline Tracking", description: "Server-Sent Events stream pipeline stage progress to the frontend in real-time." },
      { icon: <Database className="w-5 h-5" />, title: "Auto-Sync Knowledge Base", description: "Differential sync with Google Drive on startup — only downloads new or modified PDFs." },
      { icon: <Bot className="w-5 h-5" />, title: "Agentic Evaluation", description: "AI agent evaluates retrieval quality and context relevance before generating responses." },
      { icon: <MessageSquare className="w-5 h-5" />, title: "Conversational Interface", description: "Chat-based UI with markdown rendering, conversation history, and developer dashboard." },
    ],
    techStack: [
      { label: "Frontend", items: ["React", "Vite", "Markdown Renderer"] },
      { label: "Backend", items: ["FastAPI", "Python", "SSE Streaming"] },
      { label: "AI", items: ["Gemini API", "LangChain", "Cross-Encoder"] },
      { label: "Retrieval", items: ["ChromaDB", "BM25", "Reciprocal Rank Fusion"] },
      { label: "Cloud", items: ["Google Drive API", "Render", "Service Accounts"] },
      { label: "Data", items: ["PDF Parsing", "SHA-256 Hashing", "Chunking"] },
    ],
    architecture: [
      {
        title: "RAG Pipeline",
        nodes: [
          { id: "user", label: "User Query", sublabel: "Chat Interface", type: "default" },
          { id: "reformulate", label: "Query Reformulation", sublabel: "Analysis & Rewrite", type: "accent" },
          { id: "bm25", label: "BM25 Sparse", sublabel: "Keyword Retrieval", type: "accent" },
          { id: "dense", label: "ChromaDB Dense", sublabel: "Vector Search", type: "accent" },
          { id: "fusion", label: "Reciprocal Rank Fusion", sublabel: "Hybrid Merge", type: "primary" },
          { id: "rerank", label: "Cross-Encoder Reranking", sublabel: "Semantic Reorder", type: "primary" },
          { id: "eval", label: "Agentic Evaluation", sublabel: "Quality Check", type: "accent" },
          { id: "llm", label: "Gemini Generation", sublabel: "Grounded Response", type: "primary" },
          { id: "response", label: "Cited Answer", sublabel: "SSE Stream", type: "default" },
        ],
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
      { label: "Frontend", items: ["React 19", "Tailwind CSS v4", "React Flow", "Zustand", "React Query"] },
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
]

// ═══════════════════════════════════════════════════════════════════════════
// PASSION PROJECTS DATA
// ═══════════════════════════════════════════════════════════════════════════

const passionProjects: PassionProject[] = [
  {
    title: "DPO Playground",
    description: "DPO Playground is an interactive platform for exploring and understanding Direct Preference Optimization (DPO), the modern alignment technique that is rapidly replacing traditional RLHF pipelines. It enables users to experiment with preference datasets, compare chosen versus rejected responses, visualize the DPO optimization process, and gain intuition for how preference-based fine-tuning aligns large language models with human preferences. The platform combines theoretical explanations with hands-on experimentation, making complex alignment concepts accessible through an intuitive interface.",
    highlights: [
      "Interactive DPO workflow visualization",
      "Preference pair creation and comparison",
      "Chosen vs rejected response analysis",
      "DPO loss and optimization intuition",
      "Educational playground for LLM alignment concepts",
      "Modern responsive UI for experimentation"
    ],
    demoUrl: "https://dpo-playground.onrender.com"
  },
  {
    title: "LLM Quest",
    description: "LLM Quest is a gamified, browser-based learning platform designed to help aspiring AI engineers master the complete LLM engineering stack through interactive challenges and quizzes. Rather than relying on passive reading, the platform reinforces concepts using progressively difficult questions, instant feedback, performance tracking, and interview-style assessments across transformers, RAG, vector databases, fine-tuning, inference optimization, and AI agents. The project aims to make learning modern LLM systems engaging while preparing users for real-world AI engineering interviews.",
    highlights: [
      "Interactive quiz engine with instant evaluation",
      "Interview-focused LLM engineering curriculum",
      "Covers Transformers, RAG, Fine-tuning, Agents, and MLOps",
      "Progress tracking and performance analytics",
      "Responsive web application with a modern UI",
      "Designed for AI interview preparation and concept mastery"
    ],
    demoUrl: "https://llm-quest.onrender.com/"
  }
]

// ═══════════════════════════════════════════════════════════════════════════
// COMPACT PROJECTS (remaining ML projects)
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

// ── Project Showcase (full-width landing page style) ──────────────────────
const ProjectShowcase = ({ project }: { project: ShowcaseProject }) => {
  return (
    <div className="project-showcase" id={`project-${project.id}`}>
      <div className="container mx-auto max-w-5xl px-6">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
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
                  <Button size="sm" variant="default" className="gap-2 text-sm px-5 py-2.5 rounded-xl" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                )}
                {project.githubLinks.map((link) => (
                  <Button key={link.url} size="sm" variant="outline" className="gap-2 text-sm px-5 py-2.5 rounded-xl" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Description ──────────────────────────────────────────────── */}
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

// ── Passion Project Showcase ──────────────────────────────────────────────
const PassionProjectShowcase = ({ project }: { project: PassionProject }) => (
  <div className="project-showcase">
    <div className="container mx-auto max-w-5xl px-6">
      <div className="project-hero">
        <div className="project-hero-visual">
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="status-badge status-badge--completed">
                <span className="status-badge-dot" />
                Live Deployed
              </span>
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                Passion Project
              </span>
            </div>

            <h3 className="font-poppins font-extrabold text-3xl md:text-4xl text-foreground mb-3 slide-up">
              {project.title}
            </h3>
            
            <p className="text-base text-muted-foreground leading-relaxed max-w-4xl mb-6 slide-up">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="sm" variant="default" className="gap-2 text-sm px-5 py-2.5 rounded-xl" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 border-t border-border/20">
        <h4 className="font-poppins font-bold text-lg text-foreground mb-6 flex items-center gap-2 slide-up">
          <Sparkles className="w-5 h-5 text-primary" /> Key Highlights
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.highlights.map((highlight, i) => (
            <div key={i} className={`feature-card slide-up stagger-${Math.min(i + 1, 6)}`}>
              <div className="feature-card-icon">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-semibold">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
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
            Deep dives into AI systems I've architected — from quantum computing to multi-agent orchestration.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            CURRENTLY WORKING ON — ForgeML
            ══════════════════════════════════════════════════════════════════ */}
        <div className="mb-8">
          <div className="text-center mb-2 slide-up">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">
              <Wrench className="w-3 h-3" /> Currently Building
            </div>
          </div>
          <ProjectShowcase project={forgeML} />
        </div>

        <div className="section-divider" />

        {/* ══════════════════════════════════════════════════════════════════
            I BUILT THESE — 4 Showcase Projects
            ══════════════════════════════════════════════════════════════════ */}
        <div className="text-center mb-2 slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-3 h-3" /> Completed Projects
          </div>
          <h3 className="font-poppins font-extrabold text-3xl md:text-4xl text-foreground mb-2">
            I Built These
          </h3>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Production-grade AI systems spanning agentic architectures, quantum computing, RAG, and knowledge engineering.
          </p>
        </div>

        {showcaseProjects.map((project) => (
          <ProjectShowcase key={project.id} project={project} />
        ))}

        <div className="section-divider" />

        {/* ══════════════════════════════════════════════════════════════════
            PASSION PROJECTS
            ══════════════════════════════════════════════════════════════════ */}
        <div className="text-center mb-2 slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-4">
            <Brain className="w-3 h-3" /> Creative Experiments
          </div>
          <h3 className="font-poppins font-extrabold text-3xl md:text-4xl text-foreground mb-2">
            Passion Projects
          </h3>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Interactive playgrounds and gamified platforms built to make alignment and AI concepts accessible.
          </p>
        </div>

        {passionProjects.map((project) => (
          <PassionProjectShowcase key={project.title} project={project} />
        ))}

        <div className="section-divider" />

        {/* ══════════════════════════════════════════════════════════════════
            OTHER PROJECTS — Compact Grid
            ══════════════════════════════════════════════════════════════════ */}
        <div className="mb-12">
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
