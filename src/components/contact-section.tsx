import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Linkedin, Github, Mail } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Looking forward to collaborating, innovating, and building solutions that make an impact. Let's connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Resume Section */}
          <Card className="card-hover border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="font-poppins font-semibold text-xl mb-4 text-foreground">
                Resume
              </h3>
              <p className="text-muted-foreground mb-6">
                A detailed overview of my education, projects, skills, and experiences — 
                available in one click.
              </p>
              <a 
                href="/Snigdha-Gayathri-Resume.pdf" 
                download 
                className="w-full"
              >
                <Button variant="outline-hero" size="lg" className="w-full">
                  <Download className="w-5 h-5" />
                  Download My Resume
                </Button>
              </a>
            </CardContent>
          </Card>
          
          {/* Social Links */}
          <Card className="card-hover border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-poppins font-semibold text-xl text-foreground">
                Connect With Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a 
                href="mailto:snigdhaisme@gmail.com"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">snigdhaisme@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/snigdha-gayathri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Professional Network</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/Snigdha-Gayathri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Github className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">Code Repository</p>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
