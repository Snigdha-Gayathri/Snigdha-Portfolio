import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Briefcase, Award, ShieldCheck, Star } from "lucide-react"

const ExperienceSection = () => {
  const internships = [
    {
      company: "Cognifyz Technologies",
      role: "Machine Learning Intern",
      period: "Jan 2025 – Mar 2025",
      type: "Applied ML & Engineering",
      highlights: [
        "Ensembled 10+ predictive classifiers (Random Forest, XGBoost) to achieve a 95% classification accuracy via custom grid Search optimization.",
        "Architected Flask REST APIs processing 10K+ daily data requests with sub-200ms inference latencies.",
        "Implemented real-time feature drift and label drift metric tracking, reducing model degradation rates by 30%."
      ]
    },
    {
      company: "Technical Hub Pvt. Ltd.",
      role: "Software Developer Intern",
      period: "Jun 2024 – Aug 2024",
      type: "Search Systems & AI",
      highlights: [
        "Engineered search classification and retrieval systems that increased query matching accuracy by 40%.",
        "Applied Principal Component Analysis (PCA) and correlation filters to shrink feature matrix dimensions by 60%.",
        "Refactored inference compute pipelines, lowering CPU latency by 35% and accelerating testing iterations by 25%."
      ]
    },
    {
      company: "APSSDC Skills Build",
      role: "Data Analytics Intern",
      period: "Summer 2025",
      type: "Data Engineering",
      highlights: [
        "Constructed automated ETL scripting tasks to process, normalize, and inspect structured multi-dimensional datasets.",
        "Designed rich, interactive dashboard visualizations mapping predictive regression insights for stakeholder reviews."
      ]
    },
    {
      company: "APSCHE Smart Bridge",
      role: "AI/ML Intern",
      period: "2024",
      type: "Model Training",
      highlights: [
        "Explored and validated convolutional structures on classification datasets, deploying early-stage prototype web APIs.",
        "Engineered preprocessing pipelines resolving class imbalances using SMOTE (Synthetic Minority Over-sampling Technique)."
      ]
    }
  ]

  const certifications = [
    { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft" },
    { name: "Career Essentials in Generative AI", issuer: "Google" },
    { name: "Machine Learning with Python", issuer: "IBM" },
    { name: "Deep Learning Fundamentals", issuer: "IBM" },
    { name: "Data Science 101", issuer: "IBM" },
    { name: "Information Technology Specialist – Java", issuer: "Pearson" },
    { name: "Prompt Engineering for Everyone", issuer: "IBM" },
    { name: "Java for Problem Solving", issuer: "HackerRank" }
  ]

  const achievements = [
    { title: "GeeksForGeeks Rank 40", desc: "Top platform ranking in competitive coding solving complex algorithms." },
    { title: "Code360: Ninja Dominator", desc: "Attained top coding tier level through consistent programming competitions." },
    { title: "HackerRank Gold Badges", desc: "Awarded gold status in C++, Java, and Python problem solving tracks." }
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-20 slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Career Journey
          </div>
          <h2 className="font-poppins font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
            Professional Growth
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Internships Timeline: 7/12 width */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl font-bold font-poppins text-foreground flex items-center gap-2 mb-6 slide-up">
              <Briefcase className="w-5.5 h-5.5 text-primary" /> Practical Experience
            </h3>

            {/* Custom Vertical Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-10 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-border/60">
              {internships.map((job, index) => (
                <div
                  key={index}
                  className="relative group slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glowing Node Dot */}
                  <span className="absolute -left-9 sm:-left-11 top-1.5 w-6 h-6 rounded-full bg-card border-2 border-border/70 group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300 shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-border/40 group-hover:bg-primary-foreground transition-all duration-300"></span>
                  </span>

                  <Card className="border border-border/40 bg-card hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md rounded-2xl overflow-hidden">
                    <CardHeader className="p-5 pb-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <CardTitle className="font-poppins font-extrabold text-lg text-foreground">
                            {job.company}
                          </CardTitle>
                          <p className="text-sm font-semibold text-primary">{job.role}</p>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-1.5 self-start sm:self-center font-medium bg-muted/30">
                          <Calendar className="w-3.5 h-3.5" />
                          {job.period}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="p-5 pt-0 space-y-4">
                      {/* Description Bullets */}
                      <ul className="space-y-2.5">
                        {job.highlights.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            <span className="text-primary font-bold select-none">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <Badge variant="secondary" className="bg-primary/5 text-primary border border-primary/10 text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 mt-2">
                        {job.type}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements: 5/12 width */}
          <div className="lg:col-span-5 space-y-8">
            {/* Certifications Card */}
            <div className="slide-up delay-100">
              <h3 className="text-2xl font-bold font-poppins text-foreground flex items-center gap-2 mb-6">
                <Award className="w-5.5 h-5.5 text-primary" /> Credentials & Certs
              </h3>

              <Card className="border border-border/40 bg-card rounded-2xl shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="grid gap-3.5">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-muted/40 transition-colors border border-transparent hover:border-border/30 group"
                      >
                        <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-semibold text-sm text-foreground leading-tight">{cert.name}</p>
                          <p className="text-[10px] text-muted-foreground font-medium uppercase mt-0.5">{cert.issuer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements Card */}
            <div className="slide-up delay-200">
              <h3 className="text-2xl font-bold font-poppins text-foreground flex items-center gap-2 mb-6">
                <Star className="w-5.5 h-5.5 text-primary animate-pulse" /> Platform Milestones
              </h3>

              <Card className="border border-border/40 bg-card rounded-2xl shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="grid gap-4">
                    {achievements.map((item, index) => (
                      <div
                        key={index}
                        className="p-3 bg-accent/30 dark:bg-accent/10 border border-accent/20 rounded-xl space-y-1 hover:border-primary/30 transition-all duration-300"
                      >
                        <h4 className="font-poppins font-extrabold text-sm text-foreground flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground pl-3 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection