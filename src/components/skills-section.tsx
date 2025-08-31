import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "SQL"],
      icon: "💻"
    },
    {
      title: "Data & AI",
      skills: ["Machine Learning", "Deep Learning", "PySpark", "Data Pipelines", "Flask APIs"],
      icon: "🤖"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "MEAN Stack"],
      icon: "🌐"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "Linux", "Jupyter", "VS Code"],
      icon: "⚙️"
    },
    {
      title: "Soft Skills",
      skills: ["Analytical Problem-solving", "Teamwork", "Creative Innovation", "Adaptability"],
      icon: "🧠"
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I bring together strong foundations in coding with a passion for AI-driven applications, 
            always aiming for solutions that balance efficiency, accuracy, and creativity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-hover border-0 shadow-lg slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="font-poppins font-semibold text-lg text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection