import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Linkedin, Github } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 slide-up">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Hello! I'm <span className="text-primary font-semibold">Jaya Snigdha Gayathri</span>, 
                a Computer Science undergraduate specializing in AI & ML at Aditya University. My journey began with curiosity about algorithms and evolved into a passion for building real-world applications. Through internships, projects, and certifications, I've gained expertise across AI/ML, data pipelines, and web development.
              </p>
              
              <p>
                I thrive where creativity meets logic — from deploying deep learning models to designing user-focused applications. Beyond coding, I enjoy collaborating, mentoring, and exploring ways to apply AI for meaningful impact.
              </p>
            </div>
          </div>
          
          <div className="slide-up">
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-xl mb-6 text-foreground">
                  Quick Info
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Rajahmundry, Andhra Pradesh, India</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a 
                      href="mailto:snigdhaisme@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      snigdhaisme@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Linkedin className="w-5 h-5 text-primary flex-shrink-0" />
                    <a 
                      href="https://linkedin.com/in/snigdha-gayathri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/snigdha-gayathri
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Github className="w-5 h-5 text-primary flex-shrink-0" />
                    <a 
                      href="https://github.com/Snigdha-Gayathri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/Snigdha-Gayathri
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection