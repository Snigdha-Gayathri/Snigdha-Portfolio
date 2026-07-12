import { Settings, Cpu, Brain, Database, FlaskConical, Code2, Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SkillGroup {
  id: string
  title: string
  icon: React.ElementType
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    id: "llm",
    title: "LLM & Generative AI Engineering",
    icon: Brain,
    skills: [
      "Large Language Models", "Transformer Architecture", "Prompt Engineering",
      "LLM Evaluation & Benchmarking", "Hallucination Mitigation", "Generative AI",
      "Context Engineering", "Gemini API", "Hugging Face Transformers",
    ],
  },
  {
    id: "agentic",
    title: "Agentic AI & Orchestration",
    icon: Cpu,
    skills: [
      "LangChain", "LangGraph", "Multi-Agent Systems", "Agent Memory", "Tool Use",
      "Function Calling", "Model Context Protocol (MCP)", "Structured Output Generation",
      "Agent Evaluation", "Reliability Patterns",
    ],
  },
  {
    id: "rag",
    title: "RAG & Retrieval",
    icon: Database,
    skills: [
      "Retrieval-Augmented Generation", "Vector Databases", "Embedding Models",
      "SentenceTransformers", "Semantic Search", "Chunking Strategies",
      "Reranking", "Grounding", "Faithfulness Verification", "RAGAS",
    ],
  },
  {
    id: "finetune",
    title: "Fine-Tuning & Model Development",
    icon: FlaskConical,
    skills: [
      "LoRA", "QLoRA", "Supervised Fine-Tuning", "Scikit-Learn", "XGBoost",
      "TensorFlow", "PyTorch", "PennyLane", "Quantum ML",
      "Model Evaluation", "F1", "ROC-AUC", "RMSE",
    ],
  },
  {
    id: "mlops",
    title: "ML, MLOps & Deployment",
    icon: Layers,
    skills: [
      "Machine Learning", "Deep Learning", "NLP", "Data Preprocessing", "Data Analysis",
      "ML Pipelines", "Docker", "FastAPI", "Flask REST APIs", "CI/CD",
      "Model Monitoring", "Drift Detection", "LangSmith", "Cost Optimization", "Latency Optimization",
    ],
  },
  {
    id: "programming",
    title: "Programming & Data",
    icon: Code2,
    skills: [
      "Python", "JavaScript", "TypeScript", "SQL", "Java", "C++",
      "PostgreSQL", "MySQL", "Next.js", "React", "Git", "JWT", "Clerk Authentication",
    ],
  },
]

const toolsData = [
  {
    title: "AI & Machine Learning",
    groups: [
      { name: "Core ML Frameworks", skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "XGBoost", "LightGBM"] },
      { name: "Data Science & Analysis", skills: ["NumPy", "Pandas", "SciPy"] },
      { name: "Visualization & UI", skills: ["Matplotlib", "Plotly", "Streamlit", "Gradio"] },
    ],
  },
  {
    title: "Generative AI & LLMs",
    groups: [
      { name: "Model Providers", skills: ["OpenAI", "Google DeepMind", "Anthropic", "Meta AI", "Mistral AI"] },
      { name: "Open-Source Models", skills: ["Llama", "Qwen", "DeepSeek", "Gemma", "Mistral"] },
      { name: "LLM Frameworks", skills: ["LangChain", "LangGraph", "LlamaIndex", "CrewAI"] },
    ],
  },
  {
    title: "Agentic AI & RAG",
    groups: [
      { name: "Agent Frameworks", skills: ["CrewAI", "AutoGen", "LangGraph", "OpenAI Agents SDK"] },
      { name: "Agent Memory & Storage", skills: ["Chroma", "FAISS", "Pinecone"] },
      { name: "Embedding Models", skills: ["Sentence Transformers", "BGE", "E5"] },
    ],
  },
  {
    title: "MLOps & Cloud Platforms",
    groups: [
      { name: "Experiment Tracking", skills: ["MLflow", "Weights & Biases", "Neptune", "Apache Airflow", "Kubeflow"] },
      { name: "Model Deployment", skills: ["Docker", "Kubernetes"] },
      { name: "Cloud Platforms", skills: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)"] },
    ],
  },
  {
    title: "Software & Databases",
    groups: [
      { name: "Backend Frameworks", skills: ["FastAPI", "Flask", "Spring Boot", "Express.js"] },
      { name: "Databases & APIs", skills: ["PostgreSQL", "MySQL", "MongoDB", "Postman"] },
      { name: "CI/CD & DevOps", skills: ["GitHub Actions", "GitLab CI/CD"] },
    ],
  },
  {
    title: "Essential Python SDKs",
    groups: [
      { name: "Data & ML Libraries", skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"] },
      { name: "AI & LLM SDKs", skills: ["Transformers", "LangChain", "LangGraph", "LlamaIndex", "CrewAI"] },
      { name: "APIs & Web Utilities", skills: ["FastAPI", "Flask", "Django", "BeautifulSoup"] },
      { name: "MLOps & System SDKs", skills: ["MLflow", "Docker SDK", "Kubernetes Python Client"] },
    ],
  },
]

// ── Individual dodger-blue circular skill bubble ──────────────────────────────
const SkillBubble = ({ name }: { name: string }) => {
  const len = name.length
  // Diameter grows with text length so every skill fits
  const d = len <= 5 ? 72 : len <= 8 ? 82 : len <= 11 ? 92 : len <= 15 ? 102 : len <= 19 ? 112 : 122
  const fs = len <= 7 ? "11px" : len <= 12 ? "10px" : len <= 17 ? "9px" : "8px"

  return (
    <div
      className="group relative flex-shrink-0 flex items-center justify-center cursor-default select-none"
      style={{ width: d, height: d }}
    >
      {/* Hover outer glow */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(30,144,255,0.35) 0%, transparent 65%)",
          transform: "scale(1.55)",
          filter: "blur(10px)",
        }}
      />
      {/* Bubble body */}
      <div
        className="relative w-full h-full rounded-full flex items-center justify-center text-center font-semibold leading-tight transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.12]"
        style={{
          fontSize: fs,
          padding: "8px",
          background: [
            "radial-gradient(ellipse at 30% 25%, rgba(255,255,255,0.72) 0%, transparent 42%)",
            "radial-gradient(ellipse at 65% 68%, rgba(0,90,200,0.22) 0%, transparent 55%)",
            "linear-gradient(145deg, rgba(30,144,255,0.60) 0%, rgba(30,144,255,0.35) 45%, rgba(0,100,230,0.55) 100%)",
          ].join(", "),
          border: "1.5px solid rgba(30,144,255,0.55)",
          boxShadow: [
            "0 6px 20px rgba(30,144,255,0.32)",
            "0 2px 6px rgba(30,144,255,0.20)",
            "inset 0 1.5px 0 rgba(255,255,255,0.72)",
            "inset 0 -1px 0 rgba(0,80,180,0.22)",
          ].join(", "),
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          color: "#ffffff",
        }}
      >
        {/* Specular top-left highlight */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "10%", left: "17%",
            width: "36%", height: "21%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.82) 0%, transparent 75%)",
            transform: "rotate(-22deg)",
          }}
        />
        {/* Tiny bottom reflection */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            bottom: "11%", right: "20%",
            width: "20%", height: "10%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 80%)",
          }}
        />
        <span className="relative z-10 px-1 break-words drop-shadow-sm">{name}</span>
      </div>
    </div>
  )
}

// ── Category card — large rounded container, NOT a fixed circle ───────────────
// Using border-radius: 50% on a fixed-square would clip content.
// Instead we use a very-high border-radius pill (2rem+) that looks circular/blob-like
// but auto-sizes to fit all bubbles inside.
const CategoryCard = ({ group }: { group: SkillGroup }) => {
  const Icon = group.icon
  return (
    <div
      className="relative flex flex-col items-center p-7 transition-all duration-300 hover:scale-[1.015] hover:shadow-glow"
      style={{
        borderRadius: "2.5rem",
        background: [
          "radial-gradient(ellipse at 35% 20%, rgba(255,255,255,0.20) 0%, transparent 50%)",
          "linear-gradient(145deg, rgba(30,144,255,0.10) 0%, rgba(30,144,255,0.05) 60%, rgba(30,144,255,0.09) 100%)",
        ].join(", "),
        border: "1.5px solid rgba(30,144,255,0.22)",
        boxShadow: [
          "0 8px 32px rgba(30,144,255,0.10)",
          "inset 0 1px 0 rgba(255,255,255,0.40)",
        ].join(", "),
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {/* Specular sheen top */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "6%", left: "12%",
          width: "45%", height: "14%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.30) 0%, transparent 70%)",
          transform: "rotate(-12deg)",
        }}
      />

      {/* Icon + title */}
      <div className="flex flex-col items-center gap-2 mb-5 z-10">
        <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 text-primary flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-poppins font-bold text-sm text-foreground text-center leading-snug max-w-[180px]">
          {group.title}
        </h3>
      </div>

      {/* Bubble cluster — wraps freely, no overflow:hidden so every bubble shows */}
      <div className="flex flex-wrap justify-center gap-2.5 z-10">
        {group.skills.map((skill) => (
          <SkillBubble key={skill} name={skill} />
        ))}
      </div>
    </div>
  )
}

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 bg-muted/20 dark:bg-muted/5 relative overflow-hidden">
    <div className="absolute top-16 right-0 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />
    <div className="absolute bottom-16 left-0 w-[380px] h-[380px] bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

    <div className="container mx-auto max-w-6xl relative z-10">
      {/* Header */}
      <div className="text-center mb-16 slide-up">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
          Core Competencies
        </div>
        <h2 className="font-poppins font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
          Technical Skills
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my expertise across AI engineering, machine learning, and software development.
        </p>
      </div>

      {/* 3-column grid of rounded category containers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, gi) => (
          <div
            key={group.id}
            className="slide-up"
            style={{ transitionDelay: `${Math.min(gi * 80, 400)}ms` }}
          >
            <CategoryCard group={group} />
          </div>
        ))}
      </div>

      {/* ── Tools & Frameworks ─────────────────────────────────────────────── */}
      <div className="mt-24 slide-up" style={{ transitionDelay: "480ms" }}>
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-border/50" />
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/8 border border-primary/20">
            <Settings className="w-4 h-4 text-primary" />
            <span className="font-poppins font-bold text-sm text-primary">Tools & Frameworks</span>
          </div>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        <p className="text-center text-muted-foreground text-sm mb-10 max-w-xl mx-auto">
          The full ecosystem of tools, frameworks, and platforms I work with across AI, MLOps, cloud, and software engineering.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {toolsData.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-card border border-border/40 space-y-4 hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              <h4 className="font-poppins font-bold text-sm text-primary border-b border-border/40 pb-2">
                {cat.title}
              </h4>
              <div className="space-y-3.5">
                {cat.groups.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-1.5">
                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                      {group.name}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((s) => (
                        <Badge
                          key={s}
                          variant="secondary"
                          className="text-[10px] bg-card hover:bg-primary hover:text-primary-foreground transition-colors border border-border/50 font-medium"
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default SkillsSection
