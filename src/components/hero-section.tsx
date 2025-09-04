import { Button } from "@/components/ui/button"
import { Download, Linkedin, Github } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="hero" className="py-32 px-6 text-center bg-background">
      <div className="container mx-auto max-w-4xl slide-up">
        <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-900 via-dodgerblue to-blue-900 bg-clip-text text-transparent">
            Jaya Snigdha Gayathri
          </span>
        </h1>

        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          A passionate developer and problem-solver, crafting impactful solutions 
          with AI, Machine Learning, and Full-Stack Development.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/Snigdha-Gayathri-Resume.pdf"
            download="Snigdha-Gayathri-Resume.pdf"
          >
            <Button size="lg" variant="hero">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </a>

          <a
            href="https://linkedin.com/in/snigdha-gayathri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline-hero">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
          </a>

          <a
            href="https://github.com/Snigdha-Gayathri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline-hero">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
