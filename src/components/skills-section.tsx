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

// ── Category card — clean normal card exactly like Tools & Frameworks ────────
const CategoryCard = ({ group }: { group: SkillGroup }) => {
  const Icon = group.icon
  return (
    <div className="p-5 rounded-2xl bg-card border border-border/40 space-y-4 hover:border-primary/30 hover:shadow-glow transition-all duration-300 flex flex-col h-full">
      <div className="flex items-center gap-3 border-b border-border/40 pb-3">
        <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4" />
        </div>
        <h3 className="font-poppins font-bold text-sm sm:text-base text-foreground leading-snug">
          {group.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {group.skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="text-[11px] bg-card hover:bg-primary hover:text-primary-foreground transition-colors border border-border/50 font-medium py-1 px-2.5"
          >
            {skill}
          </Badge>
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

      {/* 3-column grid of normal category cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
