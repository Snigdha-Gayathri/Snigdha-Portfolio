import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Virtual Trial Room",
      subtitle: "Walmart Sparkathon 2025",
      description: "An innovative AI-powered web app that lets users try on outfits virtually in real-time. Features gender-based outfit segregation, intelligent style suggestions, and accessory integration.",
      tech: ["AI/ML", "Computer Vision", "Web Development", "Real-time Processing"],
      impact: "Showcased at Walmart Sparkathon 2025, recognized for bridging fashion and technology",
      featured: true
    },
    {
      title: "Student Grade Predictor",
      subtitle: "Machine Learning Application",
      description: "Flask-based machine learning app predicting student performance using dataset-driven models. Analyzes study time, attendance, and prior scores.",
      tech: ["Python", "Flask", "Machine Learning", "Data Analysis"],
      impact: "Helps educators and students understand key performance drivers and optimize academic planning",
      featured: false
    },
    {
      title: "Waste Classification App",
      subtitle: "Sustainability-Focused AI",
      description: "Transfer learning with VGG16 for classifying waste as biodegradable, recyclable, or trash. Flask-based frontend for user-friendly image uploads.",
      tech: ["Deep Learning", "Transfer Learning", "VGG16", "Flask", "Computer Vision"],
      impact: "Practical sustainability-focused project encouraging smarter waste management",
      featured: false
    }
  ]

  const otherProjects = [
    "Python-based automation tools (time-saving scripts)",
    "MEAN stack practice apps exploring full-stack integration",
    "Interactive problem-solving applications for personal learning"
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Highlighting Real Impact
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-hover border-0 shadow-lg ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              } slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="font-poppins font-semibold text-xl text-foreground">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-primary font-medium">{project.subtitle}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="p-4 bg-accent/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-primary">Impact:</span> {project.impact}
                  </p>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="card-hover border-0 shadow-lg slide-up">
          <CardHeader>
            <CardTitle className="font-poppins font-semibold text-xl text-foreground">
              Other Projects & Mini Apps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {otherProjects.map((project, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  {project}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ProjectsSection