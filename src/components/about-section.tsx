import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, GraduationCap, Cpu, Database, Server, Trophy, FileText, ExternalLink } from "lucide-react"

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
      subheadline: "Quantum-Powered Book Intelligence",
      description: "A Quantum Computing-powered multi-agent AI book recommendation system combining multiple AI agents with quantum techniques for intelligent book recommendations and rich reader analytics."
    },
    {
      headline: "Multi-Agent AI",
      subheadline: "Intelligent Recommendation Engine",
      description: "Coordinates specialized AI agents with a Quantum Computing-powered recommendation engine to deliver personalized book recommendations, author insights, and reading analytics."
    },
    {
      headline: "Reading Wrapped",
      subheadline: "Annual Reader Analytics",
      description: "Provides annual reading wrapped summaries, educational reading insights, and user behavior analytics to help readers track and understand their reading patterns."
    },
    {
      headline: "Author Insights",
      subheadline: "Smart Reading Discovery",
      description: "Surfaces featured authors and recommended authors based on the user's reading history, helping readers discover new writers aligned with their interests and preferences."
    },
    {
      headline: "Q-Lexi",
      subheadline: "AI Mascot Orchestrator",
      description: "The Q-Lexi mascot robot oversees and coordinates multiple specialized agents including the Analysis Agent, Recommendation Agent, Reading History Memory Agent, Settings Agent, and Personaliser Agent."
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
              I build intelligent systems that combine <strong className="text-foreground font-semibold">Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG), and Machine Learning</strong> to solve complex engineering problems. My work focuses on transforming large language models into scalable, production-ready applications through robust software engineering and modern AI architectures.
            </p>
            <p className="text-base">
              I design and develop end-to-end AI systems, including multi-agent workflows, enterprise knowledge platforms, AI-powered developer tools, intelligent automation solutions, and LLM-driven applications. I'm currently building <strong className="text-foreground font-semibold">RepoPilot</strong>, a multi-agent GitHub repository intelligence platform; <strong className="text-foreground font-semibold">EKIP</strong>, an enterprise knowledge intelligence platform powered by advanced RAG; and <strong className="text-foreground font-semibold">AI Resume Tailor</strong>, an intelligent resume optimization system that aligns resumes with job requirements using LLMs and ATS-aware optimization.
            </p>
            <p className="text-base">
              Previously, I developed <strong className="text-foreground font-semibold">NeuroPlan AI</strong>, an AI-powered career intelligence platform, and <strong className="text-foreground font-semibold">Smart Shelf AI</strong>, a retail intelligence system that integrated AI with quantum-inspired optimization. I also authored <strong className="text-foreground font-semibold">"Smart Shelf AI: A Quantum Computing Powered Book Recommendation System,"</strong> published in the <span className="italic">International Journal of Creative Research Thoughts (IJCRT)</span>.
            </p>
            <p className="text-base">
              My expertise spans <strong className="text-foreground font-semibold">Python, FastAPI, LangChain, LangGraph, React, Next.js, TypeScript, Docker, vector databases, cloud-native AI infrastructure, and modern LLM frameworks</strong>. I engineer AI systems with an emphasis on scalability, reliability, and clean architecture—building software that doesn't just demonstrate AI capabilities, but delivers measurable value in production.
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

        {/* Smart Shelf AI Paper Publication Button */}
        <div className="flex justify-center mb-16 -mt-8 slide-up delay-200">
          <Button
            size="lg"
            className="rounded-full shadow-glow gap-2 px-6 h-12 font-poppins font-semibold text-sm bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-primary-foreground hover:scale-105 transition-all duration-300"
            asChild
          >
            <a
              href="http://ijcrt.org/viewfull.php?&p_id=IJCRT2604072"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="w-4 h-4" />
              Read Smart Shelf AI Research Publication (IJCRT)
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </Button>
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