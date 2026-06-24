import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Cpu, Terminal, Layers, BarChart, Server, Cloud, Code, Database, Settings, RefreshCw, Star, Heart } from "lucide-react"

interface Skill {
  name: string
  proficiency: number // Percentage 0-100
}

interface SkillCategory {
  id: string
  title: string
  summary: string
  icon: any
  skills: Skill[]
}

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("genai")

  const categories: SkillCategory[] = [
    {
      id: "genai",
      title: "Generative AI",
      summary: "Engineering context-aware prompts, structuring hybrid Retrieval Augmented Generation (RAG) pipelines, and building conversational interfaces.",
      icon: Cpu,
      skills: [
        { name: "Prompt Engineering", proficiency: 95 },
        { name: "RAG Pipelines", proficiency: 90 },
        { name: "Gemini API", proficiency: 95 },
        { name: "OpenAI API", proficiency: 88 },
        { name: "Hugging Face", proficiency: 85 }
      ]
    },
    {
      id: "agentic",
      title: "Agentic AI",
      summary: "Designing autonomous planning loops, memory consolidation algorithms, multi-agent synchronization architectures, and arbitration structures.",
      icon: Terminal,
      skills: [
        { name: "Autonomous Agents", proficiency: 90 },
        { name: "Multi-Agent Systems", proficiency: 88 },
        { name: "Agent Planning Loops", proficiency: 85 },
        { name: "State Orchestration", proficiency: 87 },
        { name: "Arbitration Protocols", proficiency: 82 }
      ]
    },
    {
      id: "llms",
      title: "Large Language Models",
      summary: "Integrating base foundations models, token cost compressions, semantic text extraction, and model performance validation metrics.",
      icon: Layers,
      skills: [
        { name: "Transformer Models", proficiency: 90 },
        { name: "Semantic Retrieval", proficiency: 92 },
        { name: "LLM Integration", proficiency: 94 },
        { name: "Model Evaluation", proficiency: 88 }
      ]
    },
    {
      id: "ml",
      title: "Machine Learning",
      summary: "Applying supervised and unsupervised techniques, optimizing predictors with ensemble methods, and training robust classification matrices.",
      icon: BarChart,
      skills: [
        { name: "Random Forest", proficiency: 95 },
        { name: "XGBoost", proficiency: 92 },
        { name: "Ensemble Techniques", proficiency: 90 },
        { name: "Regression Analysis", proficiency: 93 },
        { name: "scikit-learn", proficiency: 95 }
      ]
    },
    {
      id: "dl",
      title: "Deep Learning",
      summary: "Training neural network graphs in PyTorch and TensorFlow, performing computer vision edge isolation, and constructing style-transfer networks.",
      icon: Heart,
      skills: [
        { name: "TensorFlow", proficiency: 88 },
        { name: "PyTorch", proficiency: 85 },
        { name: "CNNs", proficiency: 90 },
        { name: "GANs", proficiency: 82 },
        { name: "Computer Vision", proficiency: 88 }
      ]
    },
    {
      id: "datascience",
      title: "Data Science",
      summary: "Constructing cleaning and validation pipelines, extracting descriptive stats, feature scaling, and generating analytical dashboard diagrams.",
      icon: Star,
      skills: [
        { name: "Pandas & NumPy", proficiency: 95 },
        { name: "Data Preprocessing", proficiency: 95 },
        { name: "Feature Engineering", proficiency: 92 },
        { name: "Data Visualization", proficiency: 90 },
        { name: "Matplotlib & Seaborn", proficiency: 92 }
      ]
    },
    {
      id: "mlops",
      title: "MLOps & Deployment",
      summary: "Developing high-concurrency microservice APIs, containerizing models, and monitoring logs to detect feature and label drift.",
      icon: RefreshCw,
      skills: [
        { name: "Flask REST APIs", proficiency: 92 },
        { name: "FastAPI", proficiency: 88 },
        { name: "Docker", proficiency: 85 },
        { name: "Model Monitoring", proficiency: 82 },
        { name: "Latency Optimization", proficiency: 85 }
      ]
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      summary: "Provisioning machine learning resource containers, orchestration of deploy setups, and writing automated pipelines on Microsoft Azure.",
      icon: Cloud,
      skills: [
        { name: "Microsoft Azure", proficiency: 88 },
        { name: "Azure AI Services", proficiency: 90 },
        { name: "Azure ML Studio", proficiency: 85 },
        { name: "CI/CD Pipelines", proficiency: 80 },
        { name: "Azure DevOps", proficiency: 82 }
      ]
    },
    {
      id: "backend",
      title: "Backend Development",
      summary: "Structuring robust application controllers, designing server pipelines, and exposing modular RESTful web endpoints.",
      icon: Server,
      skills: [
        { name: "Python", proficiency: 95 },
        { name: "C# & .NET", proficiency: 80 },
        { name: "Java", proficiency: 88 },
        { name: "Node.js & Express", proficiency: 82 }
      ]
    },
    {
      id: "databases",
      title: "Databases",
      summary: "Writing optimized structured queries, architecting relational tables, and managing vector databases for semantic lookups.",
      icon: Database,
      skills: [
        { name: "SQL", proficiency: 92 },
        { name: "MySQL", proficiency: 90 },
        { name: "Vector Databases", proficiency: 85 },
        { name: "Relational Schemas", proficiency: 88 }
      ]
    },
    {
      id: "languages",
      title: "Programming Languages",
      summary: "Writing structured, typed, and object-oriented scripts optimized for performance and maintainability.",
      icon: Code,
      skills: [
        { name: "Python", proficiency: 95 },
        { name: "C#", proficiency: 80 },
        { name: "Java", proficiency: 88 },
        { name: "JavaScript / TypeScript", proficiency: 85 },
        { name: "C++", proficiency: 82 }
      ]
    },
    {
      id: "tools",
      title: "Tools & Frameworks",
      summary: "Managing code repositories, automation, configuring development notebooks, and API testing platforms.",
      icon: Settings,
      skills: [
        { name: "Git & GitHub", proficiency: 92 },
        { name: "Linux CLI", proficiency: 85 },
        { name: "VS Code", proficiency: 95 },
        { name: "Jupyter & Colab", proficiency: 95 },
        { name: "Postman", proficiency: 88 }
      ]
    }
  ]

  const toolsHierarchy = [
    {
      title: "AI & Machine Learning",
      groups: [
        { name: "Core ML Frameworks", skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "XGBoost", "LightGBM"] },
        { name: "Data Science & Analysis", skills: ["NumPy", "Pandas", "SciPy"] },
        { name: "Visualization & UI", skills: ["Matplotlib", "Plotly", "Streamlit", "Gradio"] }
      ]
    },
    {
      title: "Generative AI & LLMs",
      groups: [
        { name: "Model Providers", skills: ["OpenAI", "Google DeepMind", "Anthropic", "Meta AI", "Mistral AI"] },
        { name: "Open-Source Models", skills: ["Llama", "Qwen", "DeepSeek", "Gemma", "Mistral"] },
        { name: "LLM Frameworks", skills: ["LangChain", "LangGraph", "LlamaIndex", "CrewAI"] }
      ]
    },
    {
      title: "Agentic AI & RAG",
      groups: [
        { name: "Agent Frameworks", skills: ["CrewAI", "AutoGen", "LangGraph", "OpenAI Agents SDK"] },
        { name: "Agent Memory & Storage", skills: ["Chroma", "FAISS", "Pinecone"] },
        { name: "RAG & Vector Databases", skills: ["Pinecone", "Chroma"] },
        { name: "Embedding Models", skills: ["Sentence Transformers", "BGE", "E5"] }
      ]
    },
    {
      title: "MLOps & Cloud Platforms",
      groups: [
        { name: "Experiment Tracking", skills: ["MLflow", "Weights & Biases", "Neptune", "Apache Airflow", "Kubeflow"] },
        { name: "Model Deployment", skills: ["Docker", "Kubernetes"] },
        { name: "Cloud Platforms", skills: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)"] }
      ]
    },
    {
      title: "Software & Databases",
      groups: [
        { name: "Backend Frameworks", skills: ["FastAPI", "Flask", "Spring Boot", "Express.js"] },
        { name: "Databases & APIs", skills: ["PostgreSQL", "MySQL", "MongoDB", "Postman"] },
        { name: "CI/CD & DevOps", skills: ["GitHub Actions", "GitLab CI/CD"] }
      ]
    },
    {
      title: "Essential Python SDKs",
      groups: [
        { name: "Data & ML Libraries", skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"] },
        { name: "AI & LLM SDKs", skills: ["Transformers", "LangChain", "LangGraph", "LlamaIndex", "CrewAI"] },
        { name: "APIs & Web Utilities", skills: ["FastAPI", "Flask", "Django", "BeautifulSoup"] },
        { name: "MLOps & System SDKs", skills: ["MLflow", "Docker SDK", "Kubernetes Python Client"] }
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-muted/20 dark:bg-muted/5 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-20 slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Core Competencies
          </div>
          <h2 className="font-poppins font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
            Technical Skill Hub
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my expertise in artificial intelligence, machine learning, cloud engineering, and programming.
          </p>
        </div>

        {/* Tab-driven Skill Hub */}
        <div className="slide-up delay-100">
          <Tabs
            defaultValue="genai"
            value={activeTab}
            onValueChange={setActiveTab}
            className="grid lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Menu: 12 Category buttons */}
            <TabsList className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible overflow-y-hidden lg:overflow-y-visible justify-start gap-2 bg-transparent h-auto p-1 border-b lg:border-b-0 lg:border-r border-border/60 pb-3 lg:pb-0 lg:pr-6 whitespace-nowrap">
              {categories.map((cat) => {
                const Icon = cat.icon
                const isActive = activeTab === cat.id
                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className={`justify-start gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-card dark:bg-card/45 hover:bg-muted text-muted-foreground hover:text-foreground border-border/40 hover:border-border"
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5 flex-shrink-0" />
                    {cat.title}
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {/* Right Display Panel */}
            <div className="lg:col-span-8">
              {categories.map((cat) => {
                const showExpertiseTag = !["datascience", "mlops", "cloud", "backend", "databases"].includes(cat.id)
                return (
                  <TabsContent key={cat.id} value={cat.id} className="mt-0 focus-visible:outline-none">
                    <Card className="border border-border/40 bg-card rounded-2xl shadow-md p-6 sm:p-8 animate-scale-in">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                          <cat.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-extrabold text-2xl text-foreground">
                            {cat.title}
                          </h3>
                          {showExpertiseTag && (
                            <p className="text-xs text-primary font-semibold uppercase tracking-wider">Expertise Domain</p>
                          )}
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 border-b border-border/40 pb-6">
                        {cat.summary}
                      </p>

                      {cat.id === "tools" ? (
                        /* Custom visual hierarchy for Tools & Frameworks */
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {toolsHierarchy.map((subcat, idx) => (
                            <div key={idx} className="p-4 rounded-2xl bg-muted/40 dark:bg-muted/10 border border-border/40 space-y-4">
                              <h4 className="font-poppins font-bold text-sm text-primary border-b border-border/40 pb-2">
                                {subcat.title}
                              </h4>
                              <div className="space-y-3.5">
                                {subcat.groups.map((group, gIdx) => (
                                  <div key={gIdx} className="space-y-1.5">
                                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                                      {group.name}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                      {group.skills.map((s, sIdx) => (
                                        <Badge key={sIdx} variant="secondary" className="text-[10px] bg-card hover:bg-primary hover:text-primary-foreground transition-colors border border-border/50 font-medium">
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
                      ) : (
                        /* Skill Meters Grid */
                        <div className="grid sm:grid-cols-2 gap-6">
                          {cat.skills.map((skill, idx) => (
                            <div key={idx} className="space-y-2">
                              <div className="flex justify-between items-center text-sm">
                                <span className="font-semibold text-foreground">{skill.name}</span>
                                <span className="text-xs text-primary font-bold">{skill.proficiency}%</span>
                              </div>
                              {/* Progress bar container */}
                              <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden border border-border/20">
                                <div
                                  className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-1000 ease-out"
                                  style={{ width: `${skill.proficiency}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </Card>
                  </TabsContent>
                )
              })}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection