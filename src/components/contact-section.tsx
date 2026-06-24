import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Linkedin, Github, Mail, Copy, Check } from "lucide-react"
import { toast } from "sonner"

const ContactSection = () => {
  const [copied, setCopied] = useState(false)

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("snigdhaisme@gmail.com")
    setCopied(true)
    toast.success("Email Copied!", {
      description: "snigdhaisme@gmail.com has been copied to your clipboard.",
      duration: 3000
    })
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-muted/20 dark:bg-muted/5 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="font-poppins font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to internships, AI engineer roles, competitive coding collaborations, and technical discussion. Reach out via any of my channels below!
          </p>
        </div>

        {/* 3-Column Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 slide-up delay-100">
          {/* Email Copy Card */}
          <Card className="border border-border/40 bg-card rounded-2xl shadow-sm hover:border-primary/20 transition-all duration-300 flex flex-col justify-between p-5">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Email Address</p>
                <p className="text-sm font-bold text-foreground mt-1 select-all">snigdhaisme@gmail.com</p>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={copyEmailToClipboard}
              className="w-full gap-2 rounded-xl h-10 mt-5 border-border/60 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy Email
                </>
              )}
            </Button>
          </Card>

          {/* LinkedIn Card */}
          <Card className="border border-border/40 bg-card rounded-2xl shadow-sm hover:border-[#0077b5]/30 transition-all duration-300 flex flex-col justify-between p-5 group">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0077b5] group-hover:text-white transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">LinkedIn</p>
                <p className="text-sm font-bold text-foreground mt-1">Professional Network</p>
              </div>
            </div>
            <a
              href="https://linkedin.com/in/snigdha-gayathri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block"
            >
              <Button
                size="sm"
                variant="outline"
                className="w-full gap-2 rounded-xl h-10 mt-5 border-border/60 group-hover:bg-[#0077b5]/5 group-hover:text-[#0077b5] group-hover:border-[#0077b5]/20 transition-all"
              >
                Connect Profile
              </Button>
            </a>
          </Card>

          {/* GitHub Card */}
          <Card className="border border-border/40 bg-card rounded-2xl shadow-sm hover:border-foreground/30 transition-all duration-300 flex flex-col justify-between p-5 group">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-foreground/10 text-foreground flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">GitHub</p>
                <p className="text-sm font-bold text-foreground mt-1">Code Repositories</p>
              </div>
            </div>
            <a
              href="https://github.com/Snigdha-Gayathri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block"
            >
              <Button
                size="sm"
                variant="outline"
                className="w-full gap-2 rounded-xl h-10 mt-5 border-border/60 group-hover:bg-foreground/5 group-hover:text-foreground group-hover:border-foreground/20 transition-all"
              >
                View Repositories
              </Button>
            </a>
          </Card>
        </div>

        {/* Centered Resume Block */}
        <div className="max-w-md mx-auto slide-up delay-200">
          <Card className="border border-border/40 bg-card rounded-2xl shadow-sm p-6 text-center">
            <h3 className="font-poppins font-bold text-lg mb-1.5 text-foreground">
              Need a print version of my resume?
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              Retrieve a detailed PDF covering all projects, timelines, and skills.
            </p>
            <a href="/Snigdha-Gayathri-Resume.pdf" download className="w-full inline-block">
              <Button variant="default" className="w-full gap-2 rounded-xl h-11 font-bold">
                <Download className="w-4 h-4" /> Download Resume (PDF)
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
