import { Trophy, Code2, Medal } from "lucide-react"

const milestones = [
  {
    title: "GeeksForGeeks Rank 40",
    description: "Top platform ranking in competitive coding solving complex algorithms.",
    icon: Trophy,
    highlight: "Rank 40",
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    glowColor: "rgba(16,185,129,0.15)",
  },
  {
    title: "Code360: Ninja Dominator",
    description: "Attained the top coding tier level through consistent programming competitions.",
    icon: Code2,
    highlight: "Ninja Dominator",
    color: "text-primary bg-primary/10 border-primary/20",
    glowColor: "rgba(30,144,255,0.15)",
  },
  {
    title: "HackerRank Gold Badges",
    description: "Awarded Gold badges in C++, Java, and Python problem solving tracks.",
    icon: Medal,
    highlight: "Gold — C++ · Java · Python",
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    glowColor: "rgba(245,158,11,0.15)",
  },
]

const MilestonesSection = () => (
  <section id="milestones" className="py-24 px-6 bg-muted/20 dark:bg-muted/5 relative">
    {/* Ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

    <div className="container mx-auto max-w-6xl relative z-10">
      {/* Header */}
      <div className="text-center mb-16 slide-up">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
          <Trophy className="w-3 h-3" /> Achievements
        </div>
        <h2 className="font-poppins font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
          Platform Milestones
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Competitive programming achievements and platform rankings earned through consistent problem-solving.
        </p>
      </div>

      {/* Milestone cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestones.map((m, idx) => {
          const Icon = m.icon
          const delayClass = idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : "delay-300"
          return (
            <div
              key={idx}
              className={`slide-up ${delayClass} group relative rounded-2xl p-7 flex flex-col gap-4
                border border-border/40 bg-card/70 dark:bg-card/40 backdrop-blur-sm
                hover:border-primary/30 transition-all duration-300 hover:-translate-y-1`}
              style={{
                boxShadow: `0 4px 24px ${m.glowColor}`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 0 28px 6px ${m.glowColor}` }}
              />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 ${m.color}`}>
                <Icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-poppins font-extrabold text-xl text-foreground mb-1">
                  {m.title}
                </h3>
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                  {m.highlight}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default MilestonesSection
