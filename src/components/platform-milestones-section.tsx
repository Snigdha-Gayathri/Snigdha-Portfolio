import { Trophy, Code2, Medal } from "lucide-react"

const milestones = [
  {
    icon: Trophy,
    title: "GeeksForGeeks Rank 40",
    subtitle: "Institutional Ranking",
    description: "Top platform ranking in competitive coding, solving complex algorithms and data structure challenges.",
    accent: "from-amber-500/20 to-yellow-500/10",
    iconColor: "text-amber-500 bg-amber-500/10 border-amber-500/25",
    glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.18)]",
    badge: "GFG",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  {
    icon: Code2,
    title: "Code360: Ninja Dominator",
    subtitle: "Top Coding Tier",
    description: "Attained the highest coding tier on Code360 through consistent participation in programming competitions and problem solving.",
    accent: "from-primary/20 to-blue-600/10",
    iconColor: "text-primary bg-primary/10 border-primary/25",
    glow: "hover:shadow-[0_0_30px_rgba(30,144,255,0.18)]",
    badge: "Code360",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    icon: Medal,
    title: "HackerRank Gold Badges",
    subtitle: "Multi-Language Achievement",
    description: "Awarded Gold badges across three languages — C++, Java, and Python — for consistent high-performance problem solving.",
    accent: "from-emerald-500/20 to-cyan-500/10",
    iconColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/25",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]",
    badge: "HackerRank",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    tags: ["C++", "Java", "Python"],
  },
]

const PlatformMilestonesSection = () => (
  <section id="milestones" className="py-24 px-6 bg-muted/20 dark:bg-muted/5 relative">
    {/* Ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-primary/4 blur-3xl rounded-full pointer-events-none" />

    <div className="container mx-auto max-w-5xl relative z-10">
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
          Competitive programming rankings and platform achievements earned through consistent problem solving.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestones.map((item, idx) => {
          const Icon = item.icon
          const delay = idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : "delay-300"
          return (
            <div
              key={idx}
              className={`group relative slide-up ${delay}`}
            >
              {/* Gradient border glow ring */}
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`} />

              <div className={`relative glass rounded-2xl p-6 border border-border/40 flex flex-col gap-4 transition-all duration-300 ${item.glow} hover:border-transparent`}>
                {/* Platform badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-poppins font-extrabold text-lg text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-muted-foreground mt-0.5 uppercase tracking-wider">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Language tags (HackerRank) */}
                {item.tags && (
                  <div className="flex gap-2 flex-wrap">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default PlatformMilestonesSection
