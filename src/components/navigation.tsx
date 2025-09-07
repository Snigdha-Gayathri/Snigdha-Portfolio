import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false) // close menu on navigation
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="font-poppins font-bold text-xl text-foreground hover:text-primary transition-colors"
        >
          JSG
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection("projects")} className="text-muted-foreground hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollToSection("skills")} className="text-muted-foreground hover:text-primary transition-colors">Skills</button>
          <button onClick={() => scrollToSection("experience")} className="text-muted-foreground hover:text-primary transition-colors">Experience</button>
          <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">Contact</button>
          <ThemeToggle />
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background shadow-lg border-t border-border animate-slide-down">
          <div className="flex flex-col p-6 space-y-4">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection("skills")} className="text-foreground hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection("experience")} className="text-foreground hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">Contact</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
