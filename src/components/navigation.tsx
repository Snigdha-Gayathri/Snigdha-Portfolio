import { useState, useEffect, useRef } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react"

const NAV_SECTION_IDS = [
  "hero", "about", "capstone", "publication",
  "projects", "projects-currently-building", "projects-built-these", "projects-passion", "projects-more",
  "skills", "experience", "milestones", "certifications", "contact",
]

const PROJECT_DROPDOWN_ITEMS = [
  { label: "Currently Building", id: "projects-currently-building" },
  { label: "I Built These", id: "projects-built-these" },
  { label: "Passion Projects", id: "projects-passion" },
  { label: "More Projects", id: "projects-more" },
]

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  
  const dropdownRef = useRef<HTMLDivElement>(null)
  const manualScrollRef = useRef(false)
  const manualTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ── Scroll-position based active section ─────────────────────────────────
  useEffect(() => {
    const NAVBAR_HEIGHT = 90

    const getActiveId = () => {
      const positions = NAV_SECTION_IDS
        .map((id) => {
          const el = document.getElementById(id)
          if (!el) return null
          return { id, top: el.getBoundingClientRect().top }
        })
        .filter(Boolean) as { id: string; top: number }[]

      const passed = positions.filter((s) => s.top <= NAVBAR_HEIGHT + 15)
      if (passed.length === 0) return "hero"
      return passed[passed.length - 1].id
    }

    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)
      if (!manualScrollRef.current) {
        setActiveSection(getActiveId())
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // ── Click outside to close dropdown ─────────────────────────────────────
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProjectsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsProjectsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      setActiveSection(sectionId.startsWith("projects") ? "projects" : sectionId)
      manualScrollRef.current = true
      if (manualTimerRef.current) clearTimeout(manualTimerRef.current)
      manualTimerRef.current = setTimeout(() => {
        manualScrollRef.current = false
      }, 1200)

      const offset = 85
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: "smooth" })
      setIsMenuOpen(false)
      setIsProjectsOpen(false)
    }
  }

  const isProjectsActive =
    activeSection === "projects" ||
    activeSection.startsWith("projects-") ||
    activeSection.startsWith("project-")

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Publication", id: "publication" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Milestones", id: "milestones" },
    { label: "Certificates", id: "certifications" },
    { label: "Contact", id: "contact" },
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
          className="relative font-poppins font-bold text-2xl text-foreground hover:text-primary transition-all duration-300 flex items-center gap-1 group flex-shrink-0"
        >
          <span className="bg-primary text-primary-foreground px-2.5 py-0.5 rounded-lg text-lg font-extrabold group-hover:shadow-glow transition-all duration-300">
            JSG
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {/* Pill bar */}
          <div className="flex items-center gap-0.5 bg-muted/30 dark:bg-muted/10 p-1.5 rounded-full border border-border/20">
            {/* About */}
            <button
              onClick={() => scrollToSection("about")}
              className={`relative px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                activeSection === "about"
                  ? "bg-primary text-primary-foreground shadow-glow scale-[1.04]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              About
            </button>

            {/* Publication */}
            <button
              onClick={() => scrollToSection("publication")}
              className={`relative px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                activeSection === "publication"
                  ? "bg-primary text-primary-foreground shadow-glow scale-[1.04]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              Publication
            </button>

            {/* Projects Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProjectsOpen((prev) => !prev)}
                onMouseEnter={() => setIsProjectsOpen(true)}
                aria-expanded={isProjectsOpen}
                aria-haspopup="menu"
                id="projects-nav-dropdown-btn"
                className={`relative px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1 ${
                  isProjectsActive
                    ? "bg-primary text-primary-foreground shadow-glow scale-[1.04]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span>Projects</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isProjectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProjectsOpen && (
                <div
                  role="menu"
                  aria-labelledby="projects-nav-dropdown-btn"
                  onMouseLeave={() => setIsProjectsOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 p-1.5 rounded-2xl bg-card/95 dark:bg-card/95 backdrop-blur-xl border border-border/60 shadow-xl z-50 animate-fade-in"
                >
                  {PROJECT_DROPDOWN_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      role="menuitem"
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all flex items-center justify-between group"
                    >
                      <span>{item.label}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-primary transition-all" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Remaining Nav Links */}
            {navLinks.slice(2).map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-glow scale-[1.04]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </div>

          <div className="h-6 w-px bg-border/60 flex-shrink-0" />
          <ThemeToggle />

          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-primary border border-primary/20 hover:border-primary hover:bg-primary/5 px-4 py-2 rounded-xl transition-all duration-300 flex-shrink-0"
          >
            Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile controls */}
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

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 dark:bg-background/95 backdrop-blur-lg border-b border-border shadow-xl animate-fade-in absolute w-full left-0 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-6 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className={`text-left py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeSection === "about"
                  ? "bg-primary/10 text-primary border-l-4 border-primary"
                  : "text-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("publication")}
              className={`text-left py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeSection === "publication"
                  ? "bg-primary/10 text-primary border-l-4 border-primary"
                  : "text-foreground hover:text-primary hover:bg-muted"
              }`}
            >
              Publication
            </button>

            {/* Mobile Projects Expandable */}
            <div className="border border-border/30 rounded-xl overflow-hidden">
              <button
                onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                className={`flex items-center justify-between w-full py-2.5 px-4 text-sm font-semibold transition-all duration-300 ${
                  isProjectsActive
                    ? "bg-primary/10 text-primary border-l-4 border-primary"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                <span>Projects</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileProjectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileProjectsOpen && (
                <div className="bg-muted/40 p-2 space-y-1 border-t border-border/20">
                  {PROJECT_DROPDOWN_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left py-2 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
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
              className="flex items-center justify-center gap-2 w-full text-sm font-bold bg-primary text-primary-foreground py-3 rounded-xl hover:bg-primary-hover shadow-md mt-3"
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

