import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="fade-in">
          <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Jaya Snigdha Gayathri
          </h1>
          
          <h2 className="font-poppins font-medium text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
            Data Engineer | AI & ML Enthusiast | Problem Solver
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            I design intelligent solutions by combining data engineering, machine learning, and creative problem-solving. From building predictive models to crafting full-stack applications, I transform raw ideas into impactful products that scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="min-w-[180px]"
              onClick={() => window.open("/mnt/data/Snigdha-Gayathri-Resume.pdf", "_blank")}
            >
              <Download className="w-5 h-5" />
              View Resume
            </Button>
            
            <Button 
              variant="outline-hero" 
              size="lg"
              className="min-w-[180px]"
              onClick={scrollToContact}
            >
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection