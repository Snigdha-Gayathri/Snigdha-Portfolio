import { Award, BrainCircuit, Sparkles, Code2, BarChart2, Briefcase } from "lucide-react"

interface Cert {
  name: string
  issuer: string
}

interface CertCategory {
  id: string
  title: string
  icon: React.ElementType
  iconColor: string
  certs: Cert[]
}

const certCategories: CertCategory[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    iconColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    certs: [
      { name: "Machine Learning with Python", issuer: "IBM" },
      { name: "Deep Learning Fundamentals", issuer: "IBM" },
      { name: "Machine Learning", issuer: "IBM" },
      { name: "Deep Learning", issuer: "IBM" },
      { name: "Azure AI Fundamentals", issuer: "Microsoft" },
      { name: "AI Engineer", issuer: "OneRoadmap" },
    ],
  },
  {
    id: "genai",
    title: "Generative AI",
    icon: Sparkles,
    iconColor: "text-primary bg-primary/10 border-primary/20",
    certs: [
      { name: "Career Essentials in Generative AI", issuer: "Microsoft + LinkedIn" },
      { name: "Prompt Engineering", issuer: "IBM" },
      { name: "Introduction to LangChain (Python)", issuer: "LangChain Academy" },
      { name: "Building Reliable Agents", issuer: "LangChain Academy" },
      { name: "LangChain for LLM App Development", issuer: "Simplilearn" },
      { name: "Gen AI 360 Degrees Foundational Model", issuer: "ActiveLoop" },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    iconColor: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    certs: [
      { name: "IT Specialist – Java", issuer: "Pearson" },
      { name: "Java", issuer: "OneRoadmap" },
      { name: "JavaScript", issuer: "OneRoadmap" },
      { name: "Python", issuer: "OneRoadmap" },
      { name: "HTML5", issuer: "Infosys Springboard" },
      { name: "Spring Boot", issuer: "Infosys Springboard" },
      { name: "Angular", issuer: "Infosys Springboard" },
      { name: "React Stack", issuer: "Infosys Springboard" },
      { name: "Azure DevOps", issuer: "Infosys Springboard" },
      { name: "DevOps Tools", issuer: "Infosys Springboard" },
    ],
  },
  {
    id: "data",
    title: "Data Science",
    icon: BarChart2,
    iconColor: "text-violet-500 bg-violet-500/10 border-violet-500/20",
    certs: [
      { name: "Data Science 101", issuer: "IBM" },
      { name: "Data Visualization", issuer: "IBM" },
      { name: "Data Analysis with Python", issuer: "IBM" },
      { name: "SQL", issuer: "IBM" },
      { name: "Introduction to Career Skills in Data Analytics", issuer: "LinkedIn Learning" },
    ],
  },
  {
    id: "professional",
    title: "Professional Development",
    icon: Briefcase,
    iconColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    certs: [
      { name: "Introduction to Cyber Security", issuer: "Infosys Springboard" },
      { name: "Capstone Project", issuer: "Infosys Springboard" },
      { name: "Employability Skills", issuer: "APSSDC" },
      { name: "Introduction to Blockchain", issuer: "Vodafone India" },
      { name: "160 Days DSA Challenge", issuer: "GeeksforGeeks" },
    ],
  },
]

// ── Dodger-blue glass cert bubble ─────────────────────────────────────────────
const CertBubble = ({ cert }: { cert: Cert }) => (
  <div
    className="group relative flex flex-col items-center justify-center text-center cursor-default select-none
      transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.04]"
    style={{
      borderRadius: "1.5rem",
      padding: "10px 14px",
      minWidth: 100,
      background: [
        "radial-gradient(ellipse at 30% 22%, rgba(255,255,255,0.65) 0%, transparent 42%)",
        "radial-gradient(ellipse at 68% 70%, rgba(0,90,200,0.18) 0%, transparent 52%)",
        "linear-gradient(145deg, rgba(30,144,255,0.52) 0%, rgba(30,144,255,0.30) 45%, rgba(0,100,230,0.48) 100%)",
      ].join(", "),
      border: "1.5px solid rgba(30,144,255,0.50)",
      boxShadow: [
        "0 6px 18px rgba(30,144,255,0.28)",
        "inset 0 1.5px 0 rgba(255,255,255,0.68)",
        "inset 0 -1px 0 rgba(0,80,180,0.18)",
      ].join(", "),
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    }}
  >
    {/* Specular shine */}
    <div
      className="absolute pointer-events-none"
      style={{
        top: "10%", left: "14%",
        width: "38%", height: "22%",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(255,255,255,0.75) 0%, transparent 72%)",
        transform: "rotate(-18deg)",
      }}
    />
    {/* Hover glow ring */}
    <div
      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
      style={{
        boxShadow: "0 0 18px 4px rgba(30,144,255,0.30)",
      }}
    />
    <p className="relative z-10 text-[11px] font-bold text-white leading-snug drop-shadow-sm">{cert.name}</p>
    <p className="relative z-10 text-[9px] font-semibold text-blue-100 mt-1 uppercase tracking-wider">{cert.issuer}</p>
  </div>
)

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6 bg-background relative">
    <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-primary/4 blur-3xl rounded-full pointer-events-none" />

    <div className="container mx-auto max-w-6xl relative z-10">
      {/* Header */}
      <div className="text-center mb-16 slide-up">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
          <Award className="w-3 h-3" /> Credentials
        </div>
        <h2 className="font-poppins font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
          Certifications
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional certifications across AI, data science, programming, and software engineering.
        </p>
      </div>

      {/* Category cards */}
      <div className="space-y-8">
        {certCategories.map((cat, idx) => {
          const Icon = cat.icon
          const delayClass = idx % 3 === 0 ? "delay-100" : idx % 3 === 1 ? "delay-200" : "delay-300"
          return (
            <div key={cat.id} className={`slide-up ${delayClass}`}>
              <div className="glass rounded-2xl border border-border/40 p-6 hover:border-primary/25 transition-all duration-300">
                {/* Category heading */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border flex-shrink-0 ${cat.iconColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-foreground">{cat.title}</h3>
                  <div className="flex-1 h-px bg-border/40 ml-2" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex-shrink-0">
                    {cat.certs.length} certs
                  </span>
                </div>

                {/* Cert bubbles — all dodger blue, flex wrap */}
                <div className="flex flex-wrap gap-3">
                  {cat.certs.map((cert, ci) => (
                    <CertBubble key={ci} cert={cert} />
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default CertificationsSection
