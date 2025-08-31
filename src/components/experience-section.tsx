import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

const ExperienceSection = () => {
  const internships = [
    {
      company: "Cognifyz Technologies",
      role: "AI/ML Intern",
      description: "Built ML models for restaurant rating prediction (95% accuracy), optimized pipelines.",
      period: "Jan 2025 – Mar 2025",
      type: "Applied AI/ML"
    },
    {
      company: "Technical Hub Pvt. Ltd.",
      role: "Software Development Intern",
      description: "Built React-based visualization tools, modular UI development.",
      period: "Jun 2024 – Aug 2024",
      type: "Software Development"
    },
    {
      company: "APSSDC Skills Build",
      role: "Data Analytics Intern",
      description: "Worked on data analytics: cleaning, visualization, predictive insights.",
      period: "Summer 2025",
      type: "Data Analytics"
    },
    {
      company: "APSCHE Smart Bridge",
      role: "AI/ML Intern",
      description: "Applied AI/ML internship, model building + deployment.",
      period: "2024",
      type: "Applied AI/ML"
    }
  ]

  const certifications = [
    "AI Engineer Certification",
    "JavaScript Certification",
    "Java Certification",
    "Python Certification",
    "Information Technology Specialist – Java",
    "Data Visualization with Python",
    "Data Analysis with Python",
    "SQL and Relational Databases 101",
    "Prompt Engineering for Everyone",
    "Deep Learning Fundamentals",
    "Java for Problem Solving",
    "Machine Learning with Python",
    "Microsoft Certified Azure AI Fundamentals"
  ]

  const achievements = [
    "Ranked 40 on GeeksForGeeks",
    "Code360: Ninja Dominator",
    "Gold Badges in C++, Java, Python (HackerRank)",
    "Built & showcased multiple AI/ML + full-stack projects"
  ]

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Professional Growth
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Internships */}
          <div className="lg:col-span-2">
            <h3 className="font-poppins font-semibold text-2xl mb-6 text-foreground slide-up">
              Internships
            </h3>
            <div className="space-y-6">
              {internships.map((internship, index) => (
                <Card 
                  key={index} 
                  className="card-hover border-0 shadow-lg slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-poppins font-semibold text-lg text-foreground">
                          {internship.company}
                        </CardTitle>
                        <p className="text-primary font-medium">{internship.role}</p>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {internship.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      {internship.description}
                    </p>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {internship.type}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications & Achievements */}
          <div className="space-y-8">
            {/* Certifications */}
            <Card className="card-hover border-0 shadow-lg slide-up">
              <CardHeader>
                <CardTitle className="font-poppins font-semibold text-xl text-foreground">
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Achievements */}
            <Card className="card-hover border-0 shadow-lg slide-up">
              <CardHeader>
                <CardTitle className="font-poppins font-semibold text-xl text-foreground">
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection