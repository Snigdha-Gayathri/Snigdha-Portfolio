import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, BookOpen, Award, Users, Calendar } from "lucide-react"

const PublicationSection = () => {
  return (
    <section id="publication" className="py-24 px-6 bg-background relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            <BookOpen className="w-3 h-3" /> Research
          </div>
          <h2 className="font-poppins font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
            Publication
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peer-reviewed research published in an international journal, bridging quantum computing and agentic AI for real-world applications.
          </p>
        </div>

        {/* Main Publication Card */}
        <div className="max-w-4xl mx-auto slide-up delay-100">
          <div className="relative group">
            {/* Glow ring */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700" />

            <div className="relative glass rounded-2xl p-8 md:p-10 border border-border/40">
              {/* Top row: journal badge + year */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">IJCRT</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted/60 border border-border/40">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs font-semibold text-muted-foreground">2025</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Published</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Users className="w-3.5 h-3.5" />
                  <span>International Journal of Creative Research Thoughts</span>
                </div>
              </div>

              {/* Publication Title */}
              <h3 className="font-poppins font-extrabold text-xl md:text-2xl text-foreground leading-snug mb-3">
                Smart Shelf AI: A Quantum Computing Powered Book Recommendation System
              </h3>

              {/* Journal full name */}
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-semibold text-foreground">Journal:</span> International Journal of Creative Research Thoughts (IJCRT)
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">Paper ID:</span> IJCRT2604072
              </p>

              {/* Abstract excerpt */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 mb-8">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">About the Research</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This paper presents SmartShelf AI, a novel book recommendation system that integrates Quantum Computing techniques with a multi-agent AI architecture. The system leverages quantum-enhanced similarity computations, specialized AI agents for analysis and personalization, and a rich analytics layer that delivers annual reading summaries, author insights, and user behavior intelligence.
                </p>
              </div>

              {/* Key topics */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Quantum Computing",
                  "Multi-Agent Systems",
                  "Book Recommendation",
                  "PennyLane",
                  "Agentic AI",
                  "Reader Analytics",
                  "LangGraph",
                  "Personalization",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-card border border-border/50 text-muted-foreground font-medium hover:border-primary/40 hover:text-foreground transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  size="default"
                  className="gap-2 rounded-xl font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground shadow-glow"
                  asChild
                >
                  <a
                    href="https://ijcrt.org/viewfull.php?&p_id=IJCRT2604072"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Read Full Paper (IJCRT)
                  </a>
                </Button>

                <Button
                  size="default"
                  variant="outline"
                  className="gap-2 rounded-xl font-semibold border-primary/30 hover:border-primary hover:bg-primary/5 hover:text-primary"
                  asChild
                >
                  <a
                    href="/SmartShelfAI_Documentation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="w-4 h-4" />
                    SmartShelf Documentation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PublicationSection
