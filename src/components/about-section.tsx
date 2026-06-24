import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, GraduationCap, Cpu, Database, Server, Trophy } from "lucide-react"

const AboutSection = () => {
  const strengths = [
    {
      title: "Agentic & Generative AI",
      description: "Architecting multi-agent networks, autonomous planning loops, semantic routing, and context-aware RAG pipelines using Google Gemini and OpenAI APIs.",
      icon: Cpu,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Deep Learning & NLP",
      description: "Designing, training, and optimizing deep neural networks in PyTorch and TensorFlow, with specialized skills in transformer models and feature engineering.",
      icon: Database,
      color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      title: "MLOps & Deployment",
      description: "Developing scalable Flask and FastAPI microservices, containerizing workloads via Docker, and building CI/CD deployment pipelines on Microsoft Azure.",
      icon: Server,
      color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20"
    }
  ]

  const impactCards = [
    {
      headline: "SmartShelf AI",
      subheadline: "Multi-Agent Retail Intelligence Platform",
      description: "An AI-powered retail assistant that coordinates multiple specialized agents for inventory analysis, demand forecasting, product recommendations, and customer query handling through a unified workflow."
    },
    {
      headline: "4 AI Agents",
      subheadline: "Agent Collaboration Architecture",
      description: "SmartShelf uses dedicated Inventory, Recommendation, Analytics, and Support agents that collaborate through orchestrated reasoning and task delegation."
    },
    {
      headline: "Agentic RAG",
      subheadline: "Knowledge-Aware Decision System",
      description: "Combines vector search, semantic retrieval, embeddings, and LLM reasoning to provide accurate inventory insights and contextual recommendations."
    },
    {
      headline: "Production APIs",
      subheadline: "FastAPI-Powered Backend",
      description: "Built scalable REST APIs for agent communication, retrieval workflows, inventory operations, and real-time business intelligence services."
    },
    {
      headline: "AI Engineering Stack",
      subheadline: "End-to-End Deployment",
      description: "Developed using Python, Gemini, LangGraph, ChromaDB, FastAPI, Docker, and modern MLOps practices for scalable deployment."
    }
  ]

  return (
    <section id="about" className="py-24 px-6 relative bg-muted/20 dark:bg-muted/5">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-20 slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Brief Story
          </div>
          <h2 className="font-poppins font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        {/* Content Columns */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Narrative Column */}
          <div className="lg:col-span-8 space-y-6 text-muted-foreground leading-relaxed slide-up">
            <p className="text-lg">
              Hello! I'm <span className="text-foreground font-bold text-gradient">Jaya Snigdha Gayathri Mandapati</span>, 
              a computer science engineer specializing in AI and Machine Learning at Aditya University. My core focus lies at the intersection of cognitive intelligence and software engineering. I design and build systems that don't just process data, but reason, plan, and execute tasks autonomously.
            </p>
            <p className="text-base">
              Through internships at Cognifyz Technologies and Technical Hub, I have engineered machine learning pipelines that reduce feature dimensionality, deploy low-latency inference endpoints, and build real-time prediction capabilities processing thousands of daily records. I focus on writing clean, scalable Python, C#, and TypeScript code, implementing robust data validation, and ensuring model drift is monitored effectively.
            </p>
            <p className="text-base">
              I am highly passionate about Generative AI, RAG pipelines, and Multi-Agent system design. Currently, I am seeking opportunities to contribute as an AI Engineer / ML Engineer where I can develop and scale enterprise-ready intelligent systems.
            </p>
          </div>
          
          {/* Quick Info Sidebar */}
          <div className="lg:col-span-4 slide-up delay-100">
            <Card className="border border-border/40 bg-card/65 shadow-md backdrop-blur-sm rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-poppins font-bold text-xl mb-6 text-foreground flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" /> Profile Details
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p>Andhra Pradesh, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:snigdhaisme@gmail.com" className="hover:text-primary hover:underline transition-all">
                        snigdhaisme@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Education</p>
                      <p>B.Tech in CSE (AI & ML)</p>
                      <p className="text-xs text-muted-foreground">Aditya University (2022 – 2026)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Trophy className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Top Ranking</p>
                      <p>GFG Institutional Rank: 40</p>
                      <p className="text-xs text-muted-foreground">Code360: Ninja Dominator</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 5 Premium Impact Cards Block */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-6 mb-16 pt-4 slide-up delay-150">
          {impactCards.map((card, index) => {
            // Clever column span configuration:
            // Desktop: lg:col-span-1 (5 columns in one row)
            // Tablet: md:col-span-2 for first 3 cards, md:col-span-3 for last 2 cards (3 + 2 layout)
            // Mobile: col-span-1 (stacked vertically)
            const colSpanClass = index < 3 
              ? "col-span-1 md:col-span-2 lg:col-span-1" 
              : "col-span-1 md:col-span-3 lg:col-span-1"

            return (
              <Card 
                key={index} 
                className={`card-hover border border-border/40 bg-card/75 dark:bg-card/35 rounded-2xl shadow-sm transition-all duration-300 p-5 flex flex-col justify-between min-h-[250px] group ${colSpanClass}`}
              >
                <div>
                  <h3 className="font-poppins font-extrabold text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                    {card.headline}
                  </h3>
                  <h4 className="text-[10px] text-primary font-bold tracking-wider uppercase mb-3">
                    {card.subheadline}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-3 gap-6 slide-up delay-200">
          {strengths.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="card-hover border border-border/40 bg-card rounded-2xl shadow-sm transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutSection