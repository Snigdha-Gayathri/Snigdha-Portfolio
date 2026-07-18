import { Award, BrainCircuit, Sparkles, Code2, BarChart2, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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

      {/* Category cards — clean normal cards without bubbles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certCategories.map((cat, idx) => {
          const Icon = cat.icon
          const delayClass = idx % 3 === 0 ? "delay-100" : idx % 3 === 1 ? "delay-200" : "delay-300"
          return (
            <div key={cat.id} className={`slide-up ${delayClass}`}>
              <div className="p-5 rounded-2xl bg-card border border-border/40 space-y-4 hover:border-primary/30 hover:shadow-glow transition-all duration-300 flex flex-col h-full">
                {/* Category heading */}
                <div className="flex items-center gap-3 border-b border-border/40 pb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border flex-shrink-0 ${cat.iconColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-poppins font-bold text-sm sm:text-base text-foreground leading-snug">{cat.title}</h3>
                  <span className="ml-auto text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex-shrink-0">
                    {cat.certs.length} certs
                  </span>
                </div>

                {/* Cert items — normal badges, no bubbles */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.certs.map((cert, ci) => (
                    <Badge
                      key={ci}
                      variant="secondary"
                      className="text-[11px] bg-card hover:bg-primary hover:text-primary-foreground transition-colors border border-border/50 font-medium py-1 px-2.5 flex items-center gap-1 leading-normal"
                    >
                      <span className="font-semibold">{cert.name}</span>
                      <span className="text-[10px] opacity-75 font-normal">({cert.issuer})</span>
                    </Badge>
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
