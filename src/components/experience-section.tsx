import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Briefcase } from "lucide-react"

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
        "Implemented real-time feature drift and label drift metric tracking, reducing model degradation rates by 30%.",
      ],
    },
    {
      company: "Technical Hub Pvt. Ltd.",
      role: "Software Developer Intern",
      period: "Jun 2024 – Aug 2024",
      type: "Search Systems & AI",
      highlights: [
        "Engineered search classification and retrieval systems that increased query matching accuracy by 40%.",
        "Applied Principal Component Analysis (PCA) and correlation filters to shrink feature matrix dimensions by 60%.",
        "Refactored inference compute pipelines, lowering CPU latency by 35% and accelerating testing iterations by 25%.",
      ],
    },
    {
      company: "APSSDC Skills Build",
      role: "Data Analytics Intern",
      period: "Summer 2025",
      type: "Data Engineering",
      highlights: [
        "Constructed automated ETL scripting tasks to process, normalize, and inspect structured multi-dimensional datasets.",
        "Designed rich, interactive dashboard visualizations mapping predictive regression insights for stakeholder reviews.",
      ],
    },
    {
      company: "APSCHE Smart Bridge",
      role: "AI/ML Intern",
      period: "2024",
      type: "Model Training",
      highlights: [
        "Explored and validated convolutional structures on classification datasets, deploying early-stage prototype web APIs.",
        "Engineered preprocessing pipelines resolving class imbalances using SMOTE (Synthetic Minority Over-sampling Technique).",
      ],
    },
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
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Internships Timeline — full width */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold font-poppins text-foreground flex items-center gap-2 mb-10 slide-up">
            <Briefcase className="w-5 h-5 text-primary" /> Practical Experience
          </h3>

          <div className="relative pl-6 sm:pl-8 space-y-10 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-border/60">
            {internships.map((job, index) => (
              <div
                key={index}
                className="relative group slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Node dot */}
                <span className="absolute -left-9 sm:-left-11 top-1.5 w-6 h-6 rounded-full bg-card border-2 border-border/70 group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-border/40 group-hover:bg-primary-foreground transition-all duration-300" />
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
      </div>
    </section>
  )
}

export default ExperienceSection
