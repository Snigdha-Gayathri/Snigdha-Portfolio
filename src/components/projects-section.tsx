import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Deep Image Enhancement via Pixel Transformation",
      subtitle: "Computer Vision & Deep Learning",
      description: "Automatic grayscale-to-color enhancement with CNNs & GANs. Achieved realistic, vibrant results using OpenCV + deep learning.",
      tech: ["CNNs", "GANs", "OpenCV", "Deep Learning", "Computer Vision"],
      impact: "Advanced image processing with state-of-the-art enhancement techniques",
      featured: true,
      hasGithub: true
    },
    {
      title: "Student Grade Predictor with ML",
      subtitle: "Machine Learning Application",
      description: "Flask web app predicting student performance with preprocessing + regression models. Achieved 12–15% accuracy improvement after feature engineering.",
      tech: ["Python", "Flask", "Machine Learning", "Feature Engineering"],
      impact: "Improved prediction accuracy by 12-15% through advanced feature engineering",
      featured: true,
      hasGithub: true
    },
    {
      title: "AI Powered Text Summarizer",
      subtitle: "NLP Application",
      description: "React-based summarization tool using NLP. Provides concise summaries of long texts with responsive UI.",
      tech: ["React", "NLP", "JavaScript", "Text Processing"],
      impact: "Streamlined content consumption with intelligent summarization",
      featured: false,
      hasGithub: true
    },
    {
      title: "Waste Classification App",
      subtitle: "Transfer Learning Project",
      description: "Transfer learning (VGG16) model categorizing waste into biodegradable, recyclable, trash. Flask interface for user-friendly predictions.",
      tech: ["Transfer Learning", "VGG16", "Flask", "Computer Vision"],
      impact: "Promotes environmental sustainability through intelligent waste categorization",
      featured: false,
      hasGithub: false
    },
    {
      title: "Virtual Trial Room (Prototype)",
      subtitle: "AI & Fashion Tech",
      description: "AI-powered virtual outfit try-on with style suggestions and accessory integration. Designed as a prototype exploring the intersection of AI & fashion tech.",
      tech: ["AI/ML", "Computer Vision", "Fashion Tech", "Prototype"],
      impact: "Innovative exploration of AI applications in fashion industry",
      featured: false,
      hasGithub: false
    }
  ]

  const otherProjects = [
    "MEAN stack experiments exploring full-stack architecture",
    "Python automation tools for workflow optimization",
    "Interactive utilities for creative problem solving"
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
                  {project.hasGithub && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className={project.hasGithub ? "flex-1" : "w-full"}>
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