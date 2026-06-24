import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Brain, Database, Server, Cpu, Sparkles, Activity } from "lucide-react"

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const buildFeatures = [
    {
      title: "Agentic AI",
      description: "Designing autonomous multi-agent systems capable of reasoning, planning, tool usage, and workflow orchestration.",
      tags: ["CrewAI", "LangGraph", "Gemini", "Multi-Agent Systems"],
      icon: Brain,
      // Card 1 hover effect: Card lifts slightly, Icon glows, Animated gradient border
      hoverClass: "hover:-translate-y-2 hover:shadow-glow border-primary/20 hover:border-transparent bg-gradient-to-b from-card to-card hover:bg-gradient-to-r hover:from-primary/20 hover:to-cyan-500/20"
    },
    {
      title: "RAG Systems",
      description: "Building context-aware retrieval architectures that combine vector search, embeddings, and LLM reasoning for accurate responses.",
      tags: ["Vector Databases", "Embeddings", "Semantic Search", "Knowledge Retrieval"],
      icon: Database,
      // Card 2 hover effect: Subtle blue glow, Animated border tracing effect
      hoverClass: "hover:shadow-[0_0_30px_rgba(30,144,255,0.25)] hover:border-primary/60"
    },
    {
      title: "MLOps",
      description: "Deploying and managing production AI pipelines with automation, monitoring, CI/CD, and scalable infrastructure.",
      tags: ["Docker", "MLflow", "CI/CD", "Model Deployment"],
      icon: Server,
      // Card 3 hover effect: Card elevation, Animated deployment pulse effect
      hoverClass: "hover:-translate-y-1.5 hover:shadow-lg hover:border-cyan-500/40"
    }
  ]

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-24 px-6 flex flex-col justify-between overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Glow Blue Aura */}
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-primary/20 via-blue-500/10 to-transparent opacity-70 blur-3xl animate-pulse-slow"></div>
        {/* Glow Cyan Aura */}
        <div className="absolute bottom-[40%] right-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-600/5 to-transparent opacity-80 blur-3xl animate-pulse-slow"></div>
        
        {/* Micro Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Hero Content Grid */}
      <div className="container mx-auto max-w-6xl relative z-10 grid lg:grid-cols-12 gap-12 items-center mb-20 flex-grow">
        {/* Left Side: Copy */}
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left fade-in">
          <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none mb-6">
            Hi, I’m <span className="text-dodgerblue">Jaya Snigdha Gayathri</span>
          </h1>

          <h2 className="font-poppins font-bold text-lg sm:text-xl md:text-2xl text-foreground/90 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> AI & Agentic Systems Engineer
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Building autonomous multi-agent systems, context-aware RAG architectures, 
            and scalable deep learning models. Actively converting advanced research concepts into production-grade AI solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <Button size="lg" variant="hero" onClick={() => scrollToSection("projects")} className="group">
              View My Work 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a
              href="/Snigdha-Gayathri-Resume.pdf"
              download="Snigdha-Gayathri-Resume.pdf"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="outline-hero" className="w-full">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Right Side: Profile Card */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full max-w-sm mx-auto lg:max-w-none slide-up delay-200">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-card dark:bg-card/95 border border-border/50 rounded-2xl p-5 flex items-center gap-4 shadow-xl">
              <img
                src="/profile.jpg"
                alt="Jaya Snigdha Gayathri Mandapati"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-2 border-primary/20 shadow-md flex-shrink-0"
              />
              <div>
                <h3 className="font-poppins font-bold text-base sm:text-lg text-foreground">
                  Snigdha Gayathri Mandapati
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                  B.Tech CSE (AI & ML)
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] bg-muted px-2 py-0.5 rounded-md font-semibold border border-border/50">Python</span>
                  <span className="text-[10px] bg-muted px-2 py-0.5 rounded-md font-semibold border border-border/50">Generative AI</span>
                  <span className="text-[10px] bg-muted px-2 py-0.5 rounded-md font-semibold border border-border/50">Agentic RAG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "What I Build" Section (Bottom of Hero) */}
      <div className="container mx-auto max-w-6xl relative z-10 border-t border-border/40 pt-16 mt-6 slide-up delay-300">
        <div className="text-center lg:text-left mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <h2 className="font-poppins font-extrabold text-3xl text-foreground flex items-center justify-center lg:justify-start gap-2">
              <Cpu className="w-6 h-6 text-primary" /> What I Build
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
              Building production-ready AI systems that solve real-world problems through intelligent automation, retrieval, and scalable deployment.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {buildFeatures.map((feat, idx) => {
            const IconComponent = feat.icon
            return (
              <div
                key={idx}
                className={`group relative p-6 bg-card border rounded-2xl shadow-sm transition-all duration-500 flex flex-col justify-between h-[230px] overflow-hidden ${feat.hoverClass}`}
              >
                {/* Visualizer Hover Pulse effect for Card 3 */}
                {feat.title === "MLOps" && (
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-poppins font-extrabold text-lg text-foreground mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 mt-4">
                  {feat.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] bg-muted/60 text-muted-foreground px-2 py-0.5 rounded-md font-semibold border border-border/30 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Center Bottom Statement */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary/5 border border-primary/20 text-xs sm:text-sm font-bold text-primary shadow-glow animate-float">
            <Activity className="w-4 h-4 text-primary animate-pulse" />
            Transforming AI research into scalable, production-grade systems.
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
