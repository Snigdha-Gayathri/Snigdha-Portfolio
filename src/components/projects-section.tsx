import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const ProjectsSection = () => {
  const projects = [
    {
      title: "GitHub User Checker",
      subtitle: "API Integration",
      description:
        "Web-based tool integrating GitHub’s API to fetch and display user profile information dynamically.",
      tech: ["REST API", "JavaScript", "JSON"],
      impact: "Practical demonstration of real-time API integration.",
      githubUrl: "https://github.com/Snigdha-Gayathri/GitHub-User-Name",
      demoUrl: "https://summarize-ai-3e79c618.base44.app/",
    },
    {
      title: "AI Powered Content Summarizer",
      subtitle: "NLP & Transformers",
      description:
        "Developed an AI-powered summarizer using NLP, Transformers, and Hugging Face API to condense lengthy texts into concise, informative summaries.",
      tech: ["NLP", "Transformers", "React", "Hugging Face API"],
      impact: "Streamlined content consumption by providing dynamic summaries.",
      githubUrl: "https://github.com/Snigdha-Gayathri/AI-Powered-Content-Summarizer",
      demoUrl: "https://summarize-ai-3e79c618.base44.app/", // ✅ Added demo link
    },
    {
      title: "Image Cartooniser Using ML",
      subtitle: "Generative Adversarial Networks",
      description:
        "Built a deep learning-based cartoonizer that converts real photographs into stylized cartoon images using GANs.",
      tech: ["Python", "GANs", "OpenCV"],
      impact: "Bridges creativity and AI by learning artistic cartoon styles.",
      githubUrl: "https://github.com/Snigdha-Gayathri/Cartoonifier-ML-model",
    },
    {
      title: "ML Image Colorizer",
      subtitle: "Deep Learning & OpenCV",
      description:
        "Implemented grayscale-to-color image colorization using CNNs and a pre-trained Caffe model trained on millions of images.",
      tech: ["CNNs", "OpenCV", "Deep Learning"],
      impact: "Restores lifelike color to grayscale images with precision.",
      githubUrl: "https://github.com/Snigdha-Gayathri/Image-Colorizer-ML",
    },
    {
      title: "Car Price Prediction Using ML",
      subtitle: "Regression & Feature Engineering",
      description:
        "Machine learning model predicting car prices using RandomForestRegressor, with one-hot encoding for categorical features.",
      tech: ["scikit-learn", "RandomForest", "Python"],
      impact: "Accurate car price predictions through advanced ML pipelines.",
      githubUrl: "https://github.com/Snigdha-Gayathri/Car-Price-Prediction-Using-ML",
    },
    {
      title: "Loan Risk Data Preprocessing & Encoding Pipeline",
      subtitle: "Data Engineering",
      description:
        "Preprocessing pipeline for loan risk analysis, handling missing values, applying one-hot encoding, and dataset preparation.",
      tech: ["Python", "Pandas", "Data Preprocessing"],
      impact: "Ensures robust and clean data pipelines for ML models.",
      githubUrl: "https://github.com/Snigdha-Gayathri/Loan-Risk-Data-Preprocessing-Encoding-Pipeline",
    },
    {
      title: "Student Grade Predictor",
      subtitle: "Educational Data Analytics",
      description:
        "Built an ML model analyzing demographics, academics, and background data to predict student grades. Achieved improved accuracy with preprocessing and regression.",
      tech: ["Flask", "Python", "Linear Regression"],
      impact: "Helps identify academic performance patterns for early intervention.",
      githubUrl: "https://github.com/Snigdha-Gayathri/Student-Grade-Predictor",
    },
    {
      title: "MovieLens Recommender System with LightFM",
      subtitle: "Recommendation Systems",
      description:
        "Hybrid recommender system using LightFM to combine collaborative and content-based filtering on the MovieLens dataset.",
      tech: ["Python", "LightFM", "Recommender Systems"],
      impact: "Personalizes movie recommendations using hybrid approaches.",
      githubUrl: "https://github.com/Snigdha-Gayathri/MovieLens-Recommender-System-with-LightFM",
    },
    {
      title: "Waste Classifier Project",
      subtitle: "Transfer Learning (VGG16)",
      description:
        "VGG16-based transfer learning model categorizing waste into biodegradable, recyclable, or trash, deployed with Flask.",
      tech: ["VGG16", "Flask", "Computer Vision"],
      impact: "Promotes sustainability through AI-powered waste classification.",
      githubUrl: "https://github.com/Snigdha-Gayathri/SmartInternz-Internship",
    },
    {
      title: "Virtual Trial Room (Prototype)",
      subtitle: "AI & Fashion Tech",
      description:
        "AI-powered prototype for virtual outfit try-on with gender-based clothing segregation and accessories integration.",
      tech: ["AI/ML", "Computer Vision", "Flask"],
      impact: "Explores new retail experiences at the intersection of AI and fashion.",
      githubUrl: "", // no repo
    },
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
            A showcase of impactful projects and prototypes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-hover border-0 shadow-lg slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="font-poppins font-semibold text-xl text-foreground">
                    {project.title}
                  </CardTitle>
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
                    <span className="font-medium text-primary">Impact:</span>{" "}
                    {project.impact}
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="outline" className="w-full">
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="default" className="w-full">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
