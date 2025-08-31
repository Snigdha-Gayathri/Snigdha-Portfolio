import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="slide-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Resume
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          
          <Card className="card-hover border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <FileText className="w-16 h-16 text-primary" />
              </div>
              
              <h3 className="font-poppins font-semibold text-2xl mb-4 text-foreground">
                Download My Resume
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                A detailed overview of my education, projects, skills, and experiences — available in one click.
              </p>
              
              <Button 
                variant="hero" 
                size="lg"
                className="min-w-[200px]"
                onClick={() => window.open("/mnt/data/Snigdha-Gayathri-Resume.pdf", "_blank")}
              >
                <Download className="w-5 h-5" />
                Download PDF
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ResumeSection