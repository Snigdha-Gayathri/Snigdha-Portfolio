import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, ArrowUpRight } from "lucide-react"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = ["hero", "about", "projects", "skills", "experience", "contact"]
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // focus on the middle section
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Navbar offset
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setIsMenuOpen(false)
    }
  }

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" }
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="relative font-poppins font-bold text-2xl text-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group"
        >
          <span className="bg-primary text-primary-foreground px-2.5 py-0.5 rounded-lg text-lg font-extrabold group-hover:shadow-glow transition-all duration-300">JSG</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-1 bg-muted/30 dark:bg-muted/10 p-1.5 rounded-full border border-border/20">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </div>
          
          <div className="h-6 w-px bg-border/60"></div>

          <ThemeToggle />
          
          <button 
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-primary border border-primary/20 hover:border-primary hover:bg-primary/5 px-4 py-2 rounded-xl transition-all duration-300"
          >
            Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-xl bg-muted/50 dark:bg-muted/10 hover:bg-muted text-foreground transition-colors border border-border/20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 dark:bg-background/95 backdrop-blur-lg border-b border-border shadow-xl animate-fade-in absolute w-full left-0">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left py-2 px-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-primary/10 text-primary border-l-4 border-primary"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
            <button 
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center gap-2 w-full text-sm font-bold bg-primary text-primary-foreground py-3 rounded-xl hover:bg-primary-hover shadow-md"
            >
              Get In Touch <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
