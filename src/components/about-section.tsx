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
                a passionate technologist from Rajahmundry, Andhra Pradesh, India. My journey into 
                technology began with a curiosity about how data and algorithms could shape the way 
                we live and interact. Over time, that curiosity grew into a focused drive to master 
                fields like Data Engineering, Artificial Intelligence, and Full-Stack Development.
              </p>
              
              <p>
                I've had the opportunity to work across multiple internships, contribute to hackathons, 
                and collaborate with talented peers, all of which sharpened my problem-solving mindset. 
                I believe in crafting solutions that are not just technically sound but also intuitive, 
                user-friendly, and scalable.
              </p>
              
              <p>
                When I'm not coding or analyzing data, you'll find me exploring new tech stacks, 
                mentoring peers, and participating in collaborative projects that push me out of my 
                comfort zone. My ultimate goal is to use technology as a bridge — connecting innovation 
                with impact.
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