import { Button } from "@/components/ui/button"
import { Download, Linkedin, Github } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="hero" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl slide-up flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Profile Photo with Aura */}
        <div className="relative flex justify-center md:w-1/3">
          {/* Aura Background */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-72 h-72 rounded-full bg-gradient-to-r from-dodgerblue via-sky-400 to-blue-600 opacity-70 blur-3xl animate-pulse"></div>
          </div>

          {/* Actual Photo */}
          <img
            src="/profile.jpg"
            alt="Jaya Snigdha Gayathri"
            className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-dodgerblue"
          />
        </div>

        {/* Right: Text + Buttons */}
        <div className="text-center md:text-left md:w-2/3 relative z-10">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
            Hi, I’m{" "}
            <span className="text-dodgerblue">
              Jaya Snigdha Gayathri
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            A passionate developer and problem-solver, crafting impactful solutions 
            with AI, Machine Learning, and Full-Stack Development.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
      </div>
    </section>
  )
}

export default HeroSection
