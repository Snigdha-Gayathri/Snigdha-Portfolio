import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Sparkles, Atom, Brain, BarChart3 } from "lucide-react"

const CapstoneSection = () => {
  const cards = [
    {
      title: "SmartShelf AI",
      subtitle: "Quantum-Powered Book Intelligence",
      description:
        "A Quantum Computing-powered multi-agent AI book recommendation system combining multiple AI agents with quantum techniques for intelligent book recommendations and rich reader analytics.",
      icon: Atom,
      tags: ["Quantum Computing", "Multi-Agent AI", "PennyLane", "Flask", "React"],
      githubUrl: "https://github.com/Snigdha-Gayathri/Smart-Shelf-AI",
      demoUrl: "https://smart-shelf-ai-frontend-1.onrender.com/",
      accent: "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Multi-Agent AI",
      subtitle: "Intelligent Recommendation Engine",
      description:
        "Coordinates specialized AI agents with a Quantum Computing-powered recommendation engine to deliver personalized book recommendations, author insights and reading analytics.",
      icon: Brain,
      tags: ["LangGraph", "Agent Orchestration", "Gemini API", "Multi-Agent Systems"],
      githubUrl: "https://github.com/Snigdha-Gayathri/Smart-Shelf-AI-Backend",
      demoUrl: "https://smart-shelf-ai-frontend-1.onrender.com/",
      accent: "from-primary/20 to-blue-600/10",
      iconColor: "text-primary bg-primary/10 border-primary/20",
    },
    {
      title: "Reading Wrapped",
      subtitle: "Annual Reader Analytics",
      description:
        "Provides annual reading wrapped summaries, educational reading insights and user behavior analytics to help readers track and understand their reading patterns.",
      icon: BarChart3,
      tags: ["Analytics", "User Behavior", "Reading Insights", "Data Visualization"],
      githubUrl: "https://github.com/Snigdha-Gayathri/Smart-Shelf-AI-Frontend",
      demoUrl: "https://smart-shelf-ai-frontend-1.onrender.com/",
      accent: "from-cyan-500/20 to-indigo-500/10",
      iconColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    },
  ]

  return (
    <section id="capstone" className="py-24 px-6 bg-muted/20 dark:bg-muted/5 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" /> Capstone Project
          </div>
          <h2 className="font-poppins font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
            Capstone Project
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SmartShelf AI — a Quantum Computing-powered multi-agent book intelligence platform built as my final year capstone. Published in IJCRT (2025).
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <Card
                key={index}
                className={`card-hover rounded-2xl flex flex-col slide-up ring-1 ring-primary/20 dark:ring-primary/15 overflow-hidden delay-${(index + 1) * 100}`}
              >
                {/* Gradient top accent */}
                <div className={`h-1 w-full bg-gradient-to-r ${card.accent.replace("/20", "").replace("/10", "")} opacity-80`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + Featured badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${card.iconColor} transition-transform group-hover:scale-110`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-semibold text-primary">
                      <Sparkles className="w-3 h-3" /> Capstone
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-poppins font-bold text-lg text-foreground mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-3">
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {card.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {card.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] bg-card hover:bg-primary hover:text-primary-foreground transition-colors border border-border/50 font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {card.githubUrl && (
                      <Button size="sm" variant="outline" className="text-xs gap-1" asChild>
                        <a href={card.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3" /> GitHub
                        </a>
                      </Button>
                    )}
                    {card.demoUrl && (
                      <Button size="sm" variant="default" className="text-xs gap-1" asChild>
                        <a href={card.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CapstoneSection
