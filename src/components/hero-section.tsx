import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      {/* Headline */}
      <h1 className="font-poppins font-bold text-4xl md:text-6xl text-foreground mb-4">
        Hi, I’m{" "}
        <span className="text-primary">Jaya Snigdha Gayathri</span>
      </h1>

      {/* Subheadline */}
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
        Data Engineer | AI & ML Enthusiast | Problem Solver
      </h2>

      {/* Short intro */}
      <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-8">
        I design intelligent solutions by combining data engineering,
        machine learning, and creative problem-solving. From building
        predictive models to crafting full-stack applications, I
        transform raw ideas into impactful products that scale.
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Resume Download Button */}
        <a
          href="/Snigdha-Gayathri-Resume.pdf"
          download="Jaya-Snigdha-Gayathri-Resume.pdf"
        >
          <Button className="px-6 py-3 text-lg font-semibold">
            Download My Resume
          </Button>
        </a>

        {/* Contact button */}
        <a href="#contact">
          <Button
            variant="outline"
            className="px-6 py-3 text-lg font-semibold flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            Contact Me
          </Button>
        </a>
      </div>
    </section>
  )
}

export default HeroSection
