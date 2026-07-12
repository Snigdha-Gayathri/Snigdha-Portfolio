import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, ArrowRight, Sparkles, ChevronRight, Wrench } from "lucide-react"

interface ProjectDetails {
  problem: string
  importance: string
  howItWorks: string
  challenges: string
  impact: string
  flowchart: { step: string; desc: string }[]
}

interface Project {
  title: string
  subtitle: string
  categories: string[]
  description: string
  tech: string[]
  impactSummary: string
  githubUrl?: string
  demoUrl?: string
  isFeatured: boolean
  details: ProjectDetails
}

const currentlyWorkingOn: Project[] = [
  {
    title: "Repo Pilot",
    subtitle: "AI Repository Engineering Assistant",
    categories: ["Agentic AI"],
    description: "An Agentic AI-powered GitHub repository engineering assistant that analyzes repositories, identifies improvements, generates production-ready code, and creates pull requests with user approval through six specialized AI agents.",
    tech: ["Agentic AI", "Multi-Agent Systems", "GitHub API", "LangGraph"],
    impactSummary: "Six specialized AI agents collaborating to analyze, improve, and contribute to GitHub repositories.",
    githubUrl: "https://github.com/Snigdha-Gayathri/Repo-Pilot",
    demoUrl: "https://repo-pilot-8j45.onrender.com/",
    isFeatured: true,
    details: {
      problem: "GitHub repositories accumulate bugs, TODOs, code smells, and improvement opportunities over time. Manual identification and resolution is time-consuming.",
      importance: "Automating repository analysis and improvement helps developers maintain code quality and contribute meaningfully to projects.",
      howItWorks: "Six specialized AI agents collaborate: Repository Analyst understands the codebase structure, frameworks, and conventions. Issue Hunter scans for bugs, TODOs, code smells, duplicated logic, missing tests, and security risks. Solution Architect proposes implementation strategies with trade-offs, complexity estimates, and confidence scores. Code Engineer generates production-quality code with git-style diffs matching the repository's style. QA Agent reviews code, detects regressions, and writes tests. Reviewer compares implementations, scores them, and selects the best solution.",
      challenges: "Coordinating six AI agents to produce coherent, production-ready improvements that match a repository's existing coding style and conventions.",
      impact: "Enables automated repository improvement with production-ready code generation and pull request creation through the user's own GitHub account.",
      flowchart: [
        { step: "Repository Analysis", desc: "Agent reads structure, frameworks, dependencies, and coding conventions" },
        { step: "Issue Discovery", desc: "Scans for bugs, TODOs, code smells, security risks, and missing tests" },
        { step: "Solution Architecture", desc: "Proposes strategies with trade-offs, complexity, and confidence scores" },
        { step: "Code Generation", desc: "Produces production-quality diffs matching repository style" },
        { step: "Quality Assurance", desc: "Reviews code, detects regressions, writes unit and integration tests" },
        { step: "Review & Selection", desc: "Compares implementations, scores quality, selects best solution" },
        { step: "Pull Request", desc: "Creates PR from user's account after explicit approval" }
      ]
    }
  },
  {
    title: "AI Resume Tailor",
    subtitle: "Intelligent Resume Customization Agent",
    categories: ["Agentic AI"],
    description: "An AI-powered resume tailoring agent that customizes resumes to match specific job descriptions, optimizing for ATS compatibility and relevance scoring.",
    tech: ["Agentic AI", "LangChain", "Gemini API", "Python"],
    impactSummary: "Automatically tailors resumes to job descriptions for higher ATS pass rates.",
    githubUrl: "https://github.com/Snigdha-Gayathri/AI-Resume-Tailor",
    isFeatured: true,
    details: {
      problem: "Generic resumes fail ATS filters and don't highlight the most relevant experience for specific roles.",
      importance: "Tailored resumes significantly increase interview callback rates by aligning content with job requirements.",
      howItWorks: "Analyzes the job description to extract key requirements, then intelligently restructures and rewrites resume sections to emphasize matching skills, experience, and keywords while maintaining authenticity.",
      challenges: "Balancing aggressive optimization for ATS with preserving the candidate's authentic voice and accurate representation.",
      impact: "Produces job-specific resumes optimized for ATS systems with improved keyword alignment and relevance scoring.",
      flowchart: [
        { step: "Job Description Analysis", desc: "Extracts key requirements, skills, and keywords" },
        { step: "Resume Parsing", desc: "Structures existing resume content for processing" },
        { step: "Gap Analysis", desc: "Identifies alignment and missing emphasis areas" },
        { step: "Content Rewriting", desc: "Tailors bullets and summary to match role" },
        { step: "ATS Optimization", desc: "Ensures keyword coverage and formatting compliance" }
      ]
    }
  },
  {
    title: "EKIP",
    subtitle: "AI-Powered Knowledge Intelligence Platform",
    categories: ["Agentic AI", "Generative AI"],
    description: "An enterprise knowledge intelligence platform combining agentic AI with RAG to enable intelligent document search, automated insights, and conversational knowledge retrieval across organizational data.",
    tech: ["Agentic AI", "RAG", "Vector Databases", "LangGraph", "FastAPI"],
    impactSummary: "Enterprise-grade knowledge retrieval and intelligence platform with agentic capabilities.",
    isFeatured: true,
    details: {
      problem: "Organizations struggle to extract actionable insights from large, fragmented knowledge bases and internal documents.",
      importance: "Intelligent knowledge retrieval reduces time-to-insight and enables data-driven decision making at scale.",
      howItWorks: "Combines multi-agent orchestration with a hybrid RAG architecture. Agents handle document ingestion, chunking strategy selection, embedding, and retrieval. A conversational interface enables natural language queries across the entire knowledge base.",
      challenges: "Building reliable retrieval that handles diverse document types, maintains context across conversations, and scales to large corpora.",
      impact: "Enables conversational access to organizational knowledge with high accuracy, citation tracing, and automated insight generation.",
      flowchart: [
        { step: "Document Ingestion", desc: "Multi-format documents parsed and preprocessed" },
        { step: "Chunking & Embedding", desc: "Adaptive chunking and embedding model applied" },
        { step: "Vector Storage", desc: "Embeddings stored in vector database" },
        { step: "Query Processing", desc: "User query routed to relevant retrieval agent" },
        { step: "RAG Response", desc: "Retrieved context used to generate grounded answers" }
      ]
    }
  }
]

const builtProjects: Project[] = [
  // ── Quantum Computing ──────────────────────────────────────────────────────
  {
    title: "SmartShelf AI",
    subtitle: "Quantum-Powered Book Intelligence",
    categories: ["Quantum Computing"],
    description: "A Quantum Computing-powered multi-agent AI book recommendation system combining multiple AI agents with quantum techniques for intelligent book recommendations and rich reader analytics.",
    tech: ["Quantum Computing", "Multi-Agent AI", "PennyLane", "Flask", "React"],
    impactSummary: "Multi-agent architecture combining Quantum Computing with intelligent book recommendation and reader analytics.",
    githubUrl: "https://github.com/Snigdha-Gayathri/Smart-Shelf-AI",
    demoUrl: "https://smart-shelf-ai-frontend-1.onrender.com/",
    isFeatured: true,
    details: {
      problem: "Readers often struggle to discover books that match their interests and track their reading progress meaningfully.",
      importance: "Intelligent book recommendations powered by quantum computing techniques provide more nuanced and personalized reading suggestions.",
      howItWorks: "Combines multiple AI agents with Quantum Computing techniques to generate intelligent book recommendations. Key capabilities include a multi-agent AI architecture, Quantum Computing-powered recommendation engine, personalized book recommendations, author insights, annual reading wrapped, educational reading insights, reading analytics, and user behavior insights.",
      challenges: "Integrating Quantum Computing techniques with multi-agent AI architecture for practical book recommendation applications.",
      impact: "Provides personalized book recommendations, author insights, annual reading wrapped, educational reading insights, reading analytics, and user behavior insights.",
      flowchart: [
        { step: "User Input", desc: "Reader provides preferences and reading history" },
        { step: "Multi-Agent Processing", desc: "Specialized AI agents analyze reading patterns" },
        { step: "Quantum Recommendation", desc: "Quantum Computing-powered engine generates recommendations" },
        { step: "Personalization", desc: "Tailored book suggestions based on user behavior" },
        { step: "Analytics", desc: "Reading wrapped, educational insights, and behavior analytics" }
      ]
    }
  },
  // ── Agentic AI ────────────────────────────────────────────────────────────
  {
    title: "SmartShelf AI",
    subtitle: "Multi-Agent Orchestration Layer",
    categories: ["Agentic AI"],
    description: "The multi-agent orchestration layer of SmartShelf AI, coordinating specialized agents — Analysis Agent, Recommendation Agent, Reading History Memory Agent, Settings Agent, and Personaliser Agent — via the Q-Lexi mascot orchestrator.",
    tech: ["LangGraph", "Multi-Agent Systems", "Agent Memory", "Gemini API"],
    impactSummary: "Q-Lexi orchestrator coordinating five specialized agents for holistic book intelligence.",
    githubUrl: "https://github.com/Snigdha-Gayathri/Smart-Shelf-AI-Backend",
    demoUrl: "https://smart-shelf-ai-frontend-1.onrender.com/",
    isFeatured: true,
    details: {
      problem: "A single AI agent cannot efficiently handle the diverse tasks of book recommendation, user memory, personalization, and analytics simultaneously.",
      importance: "Specialized agents working in coordination produce better, more nuanced results than a single generalist model.",
      howItWorks: "Q-Lexi mascot orchestrator routes tasks to five specialized agents: Analysis Agent evaluates reading patterns, Recommendation Agent generates suggestions, Reading History Memory Agent maintains user context, Settings Agent manages preferences, and Personaliser Agent fine-tunes outputs.",
      challenges: "Designing reliable inter-agent communication and state management across multiple specialized agents.",
      impact: "Delivers highly personalized book recommendations through coordinated multi-agent intelligence.",
      flowchart: [
        { step: "Q-Lexi Orchestration", desc: "Central orchestrator receives user intent" },
        { step: "Task Routing", desc: "Intent routed to appropriate specialized agent" },
        { step: "Agent Execution", desc: "Specialized agents execute their domain tasks" },
        { step: "Memory Consolidation", desc: "Reading history and preferences updated" },
        { step: "Personalized Output", desc: "Coordinated response delivered to user" }
      ]
    }
  },
  // ── Generative AI ─────────────────────────────────────────────────────────
  {
    title: "NeuroPlan AI",
    subtitle: "AI Learning Roadmap Generator",
    categories: ["Generative AI"],
    description: "A multi-agent AI learning roadmap generator that creates personalized learning paths based on skill goals and proficiency levels, with subtask tracking and progress analytics.",
    tech: ["Agentic AI", "Multi-Agent", "Gemini API", "LangChain"],
    impactSummary: "Generates personalized learning roadmaps with subtask tracking and skill progress analytics.",
    githubUrl: "https://github.com/Snigdha-Gayathri/NeuroPlan-AI",
    demoUrl: "https://neuroplan-ai.onrender.com/",
    isFeatured: true,
    details: {
      problem: "Learners need structured guidance to develop new skills efficiently with clear milestones and progress tracking.",
      importance: "Personalized learning roadmaps help learners stay on track and understand how smaller skills contribute to larger goals.",
      howItWorks: "Users specify their target skill, desired proficiency level (Beginner, Intermediate, or Advanced), and learning goal. The multi-agent system generates a personalized roadmap with learning resources, breaks it into subtasks, and allows users to mark completed subtasks. Progress analytics update dynamically.",
      challenges: "Creating adaptive learning roadmaps that accurately reflect skill hierarchies and progress relationships.",
      impact: "Generates personalized learning roadmaps with subtask tracking, progress analytics, skill relationships, and learning insights.",
      flowchart: [
        { step: "Skill Selection", desc: "User specifies target skill and proficiency level" },
        { step: "Goal Setting", desc: "User defines target score or learning goal" },
        { step: "Roadmap Generation", desc: "AI generates personalized learning roadmap" },
        { step: "Resource Suggestion", desc: "Relevant learning resources are recommended" },
        { step: "Subtask Breakdown", desc: "Roadmap is broken into trackable subtasks" },
        { step: "Progress Tracking", desc: "Dashboard updates with analytics as tasks are completed" }
      ]
    }
  },
  {
    title: "Placement RAG Agent",
    subtitle: "Company Interview Preparation",
    categories: ["Generative AI"],
    description: "A Retrieval-Augmented Generation application with a knowledge base of interview questions from 20+ companies, helping users prepare with company-specific interview information.",
    tech: ["RAG", "Vector Databases", "Gemini API", "LangChain"],
    impactSummary: "Knowledge base with interview questions from 20+ companies for targeted interview preparation.",
    githubUrl: "https://github.com/Snigdha-Gayathri/Placement-RAG-Agent",
    demoUrl: "https://placement-rag-agent.onrender.com/",
    isFeatured: true,
    details: {
      problem: "Job seekers need company-specific interview preparation but information is scattered across various sources.",
      importance: "Having a centralized knowledge base with interview questions from 20+ companies streamlines preparation.",
      howItWorks: "Uses true Retrieval-Augmented Generation to retrieve relevant interview information from its knowledge base before generating responses. Provides company-specific interview questions and information retrieved from a curated knowledge base.",
      challenges: "Building and maintaining a comprehensive knowledge base of interview questions across 20+ companies.",
      impact: "Helps users prepare for company interviews with company-specific questions retrieved from a curated knowledge base.",
      flowchart: [
        { step: "User Query", desc: "User asks about specific company interview preparation" },
        { step: "Retrieval", desc: "RAG retrieves relevant questions from knowledge base" },
        { step: "Generation", desc: "Generates contextual response with retrieved information" },
        { step: "Response", desc: "Provides company-specific interview questions and guidance" }
      ]
    }
  },
  // ── Machine Learning & Deep Learning ──────────────────────────────────────
  {
    title: "AI Sentiment Analyzer",
    subtitle: "Sentiment Classification Engine",
    categories: ["Machine Learning & Deep Learning"],
    description: "A web application classifying user reviews into positive, negative, or neutral sentiments, delivering live analytical insights.",
    tech: ["Flask", "Python", "Hugging Face Transformers"],
    impactSummary: "Real-time sentiment classification across positive, negative, and neutral categories.",
    isFeatured: false,
    details: {
      problem: "Understanding customer sentiment from reviews requires automated classification at scale.",
      importance: "Real-time sentiment analysis enables timely responses to customer feedback.",
      howItWorks: "Classifies user reviews into positive, negative, or neutral sentiments using Hugging Face Transformers, served through a Flask web application with live analytical insights.",
      challenges: "Handling nuanced language and context in sentiment classification.",
      impact: "Provides live analytical insights from automated sentiment classification.",
      flowchart: [
        { step: "Input", desc: "User submits review text" },
        { step: "Processing", desc: "Hugging Face Transformer model analyzes sentiment" },
        { step: "Classification", desc: "Review classified as positive, negative, or neutral" },
        { step: "Analytics", desc: "Live analytical insights displayed" }
      ]
    }
  },
  {
    title: "Image Cartooniser",
    subtitle: "GAN-Based Style Transfer",
    categories: ["Machine Learning & Deep Learning"],
    description: "Style-transfer generator applying Generative Adversarial Networks (GANs) and bilateral filtering to synthesize animated styling from real images.",
    tech: ["Python", "GANs", "OpenCV"],
    impactSummary: "Transforms real photographs into cartoon-style images using GANs and bilateral filtering.",
    isFeatured: false,
    details: {
      problem: "Converting real photographs into cartoon-style images requires complex style transfer techniques.",
      importance: "Automated image stylization enables creative content generation from photographs.",
      howItWorks: "Applies custom Generative Adversarial Networks (GANs) and bilateral filtering to transform real images into cartoon-style illustrations.",
      challenges: "Preserving important details while applying cartoon styling.",
      impact: "Synthesizes animated styling from real images using GANs and filtering techniques.",
      flowchart: [
        { step: "Input Image", desc: "User provides a real photograph" },
        { step: "GAN Processing", desc: "Custom GAN applies style transfer" },
        { step: "Bilateral Filtering", desc: "Smoothing and edge preservation applied" },
        { step: "Output", desc: "Cartoon-style image generated" }
      ]
    }
  },
  {
    title: "ML Image Colorizer",
    subtitle: "Deep Learning Colorization",
    categories: ["Machine Learning & Deep Learning"],
    description: "Grayscale restoration system utilizing deep convolutional networks (CNNs) and pre-trained Caffe models to map luminance to chrominance values.",
    tech: ["CNNs", "OpenCV", "Deep Learning", "Caffe"],
    impactSummary: "Restores color to grayscale images using deep convolutional networks.",
    isFeatured: false,
    details: {
      problem: "Restoring color to grayscale images is a challenging task requiring understanding of color distributions.",
      importance: "Automated colorization can restore historical photographs and enhance grayscale imagery.",
      howItWorks: "Utilizes deep convolutional networks (CNNs) and pre-trained Caffe models to map luminance channels to chrominance values for color restoration.",
      challenges: "Accurately predicting chrominance values from luminance information alone.",
      impact: "Restores realistic color to grayscale images using deep learning techniques.",
      flowchart: [
        { step: "Input", desc: "Grayscale image provided" },
        { step: "Feature Extraction", desc: "CNN extracts luminance features" },
        { step: "Color Prediction", desc: "Caffe model maps luminance to chrominance" },
        { step: "Reconstruction", desc: "Full-color image reconstructed" }
      ]
    }
  },
  {
    title: "Car Price Predictor",
    subtitle: "Automobile Valuation Model",
    categories: ["Machine Learning & Deep Learning"],
    description: "Regression model with structured ETL and categorical one-hot encoding pipelines, optimizing automobile pricing valuations using Random Forest.",
    tech: ["scikit-learn", "Random Forest", "Python"],
    impactSummary: "Random Forest-based automobile pricing with ETL pipelines.",
    githubUrl: "https://github.com/Snigdha-Gayathri/Car-Price-Prediction-Using-ML",
    isFeatured: false,
    details: {
      problem: "Accurate automobile pricing requires analysis of multiple vehicle attributes and market factors.",
      importance: "Automated pricing models help buyers and sellers make informed decisions.",
      howItWorks: "Applies structured ETL pipelines with categorical one-hot encoding and Random Forest regression to optimize automobile pricing valuations.",
      challenges: "Handling categorical features and building robust ETL pipelines for diverse vehicle data.",
      impact: "Provides optimized automobile pricing valuations using ensemble methods.",
      flowchart: [
        { step: "Data Ingestion", desc: "Vehicle data collected and cleaned" },
        { step: "ETL Pipeline", desc: "Structured extraction, transformation, and loading" },
        { step: "Feature Encoding", desc: "Categorical one-hot encoding applied" },
        { step: "Random Forest", desc: "Ensemble model generates price valuations" }
      ]
    }
  },
  {
    title: "Amazon Prime Movie Classifier",
    subtitle: "Content Classification System",
    categories: ["Machine Learning & Deep Learning"],
    description: "Multi-variable classification model categorizing movie content and user preferences on Amazon Prime by parsing rich metadata streams.",
    tech: ["Python", "scikit-learn", "XGBoost"],
    impactSummary: "Multi-variable classification of Amazon Prime movie content.",
    githubUrl: "https://github.com/Snigdha-Gayathri/Amazon-Prime-Movie-Classifier",
    isFeatured: false,
    details: {
      problem: "Categorizing movie content across streaming platforms requires parsing complex metadata.",
      importance: "Automated classification improves content organization and user experience.",
      howItWorks: "Parses rich metadata streams to categorize movie content and user preferences on Amazon Prime using multi-variable classification with XGBoost.",
      challenges: "Handling diverse and unstructured metadata from streaming platform content.",
      impact: "Classifies Amazon Prime movie content based on multiple variables and metadata.",
      flowchart: [
        { step: "Metadata Parsing", desc: "Rich metadata streams extracted from Amazon Prime" },
        { step: "Feature Engineering", desc: "Multi-variable features constructed" },
        { step: "Classification", desc: "XGBoost model categorizes content" },
        { step: "Output", desc: "Movie categories and preference mappings generated" }
      ]
    }
  },
  {
    title: "Boston House Price Predictor",
    subtitle: "Property Valuation Pipeline",
    categories: ["Machine Learning & Deep Learning"],
    description: "Supervised regression pipeline optimizing property valuation forecasting by analyzing crime, rooms, location, and socio-environmental factors.",
    tech: ["Python", "scikit-learn", "XGBoost"],
    impactSummary: "Forecasts property valuations using supervised regression on socio-environmental data.",
    githubUrl: "https://github.com/Snigdha-Gayathri/Boston-House-Predictor",
    isFeatured: false,
    details: {
      problem: "Property valuation depends on numerous socio-environmental factors that are difficult to assess manually.",
      importance: "Automated property valuation forecasting helps buyers, sellers, and analysts make data-driven decisions.",
      howItWorks: "Applies supervised regression analysis on features including crime rates, number of rooms, location, and socio-environmental factors to forecast property valuations.",
      challenges: "Selecting and weighting multiple correlated environmental and social factors.",
      impact: "Forecasts property valuations using supervised regression on socio-environmental data.",
      flowchart: [
        { step: "Data Collection", desc: "Housing data with socio-environmental features gathered" },
        { step: "Feature Analysis", desc: "Crime, rooms, location factors analyzed" },
        { step: "Regression Training", desc: "Supervised model trained on historical data" },
        { step: "Valuation", desc: "Property price predictions generated" }
      ]
    }
  },
  {
    title: "Breast Cancer Diagnostic Model",
    subtitle: "Medical Diagnostic Classifier",
    categories: ["Machine Learning & Deep Learning"],
    description: "Diagnostic classification model for breast cancer detection using machine learning techniques to classify tumors as benign or malignant.",
    tech: ["Python", "scikit-learn", "Machine Learning"],
    impactSummary: "Machine learning-based classification for breast cancer diagnosis.",
    githubUrl: "https://github.com/Snigdha-Gayathri/Breast-Cancer-Predictor",
    isFeatured: false,
    details: {
      problem: "Early and accurate diagnosis of breast cancer is critical for patient outcomes.",
      importance: "Machine learning-assisted diagnosis can support medical professionals in classification decisions.",
      howItWorks: "Uses machine learning classification techniques to distinguish between benign and malignant tumors based on diagnostic features.",
      challenges: "Ensuring high accuracy and reliability in medical diagnostic applications.",
      impact: "Classifies breast tumors as benign or malignant using machine learning.",
      flowchart: [
        { step: "Data Input", desc: "Diagnostic features collected from tumor samples" },
        { step: "Feature Processing", desc: "Diagnostic features prepared for classification" },
        { step: "Classification", desc: "ML model classifies tumor as benign or malignant" },
        { step: "Diagnosis", desc: "Classification result presented for review" }
      ]
    }
  }
]

// Ordered flat list for "I Built These" — SmartShelf first
const builtProjectsOrdered: Project[] = [
  ...builtProjects.filter(p => p.title === "SmartShelf AI" && p.categories.includes("Quantum Computing")),
  ...builtProjects.filter(p => p.title === "NeuroPlan AI"),
  ...builtProjects.filter(p => p.title === "Placement RAG Agent"),
  ...builtProjects.filter(p => p.title === "AI Sentiment Analyzer"),
  ...builtProjects.filter(p => p.title === "Image Cartooniser"),
  ...builtProjects.filter(p => p.title === "ML Image Colorizer"),
  ...builtProjects.filter(p => p.title === "Car Price Predictor"),
  ...builtProjects.filter(p => p.title === "Amazon Prime Movie Classifier"),
  ...builtProjects.filter(p => p.title === "Boston House Price Predictor"),
  ...builtProjects.filter(p => p.title === "Breast Cancer Diagnostic Model"),
]

const categoriesForProjectLabel = (p: Project) =>
  p.categories.length <= 2
    ? p.categories.join(" • ")
    : `${p.categories.slice(0, 2).join(" • ")} • +${p.categories.length - 2}`

// ── Shared Project Card ───────────────────────────────────────────────────────
const ProjectCard = ({
  project,
  index,
  onSelect,
}: {
  project: Project
  index: number
  onSelect: (p: Project) => void
}) => {
  const delayClass = index % 3 === 0 ? "delay-100" : index % 3 === 1 ? "delay-200" : "delay-300"
  return (
    <Card
      className={`card-hover rounded-2xl flex flex-col slide-up ${delayClass} ${
        project.isFeatured ? "ring-1 ring-primary/30 dark:ring-primary/20" : ""
      }`}
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
            {categoriesForProjectLabel(project)}
          </span>
          {project.isFeatured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-semibold text-primary">
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          )}
        </div>
        <h3 className="font-poppins font-bold text-lg text-foreground mb-1">{project.title}</h3>
        <p className="text-xs text-muted-foreground font-medium mb-3">{project.subtitle}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="text-[10px] bg-card hover:bg-primary hover:text-primary-foreground transition-colors border border-border/50 font-medium">
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          <Button size="sm" variant="outline" onClick={() => onSelect(project)} className="text-xs gap-1">
            Details <ArrowRight className="w-3 h-3" />
          </Button>
          {project.githubUrl && (
            <Button size="sm" variant="outline" className="text-xs gap-1" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3" /> GitHub
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button size="sm" variant="default" className="text-xs gap-1" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3" /> Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

// ── Project Details Dialog ────────────────────────────────────────────────────
const ProjectDialog = ({ project, onClose }: { project: Project | null; onClose: () => void }) => (
  <Dialog open={!!project} onOpenChange={onClose}>
    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl">
      {project && (
        <>
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                {categoriesForProjectLabel(project)}
              </span>
              {project.isFeatured && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-semibold text-primary">
                  <Sparkles className="w-3 h-3" /> Featured
                </span>
              )}
            </div>
            <DialogTitle className="font-poppins font-extrabold text-2xl">{project.title}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">{project.subtitle}</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="overview" className="mt-4">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="how">How It Works</TabsTrigger>
              <TabsTrigger value="flow">System Flow</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div>
                <h4 className="font-poppins font-bold text-sm text-foreground mb-2">Problem</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.details.problem}</p>
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-foreground mb-2">Why It Matters</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.details.importance}</p>
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-foreground mb-2">Outcome</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.details.impact}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[10px] border border-border/50 font-medium">{t}</Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="how" className="space-y-4">
              <div>
                <h4 className="font-poppins font-bold text-sm text-foreground mb-2">Technical Approach</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.details.howItWorks}</p>
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-foreground mb-2">Challenges</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.details.challenges}</p>
              </div>
            </TabsContent>

            <TabsContent value="flow">
              <div className="space-y-0">
                {project.details.flowchart.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 relative">
                    {i < project.details.flowchart.length - 1 && (
                      <div className="absolute left-[15px] top-[32px] w-0.5 h-[calc(100%-8px)] bg-border" />
                    )}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary z-10">
                      {i + 1}
                    </div>
                    <div className="pb-6 flex-1">
                      <h4 className="font-poppins font-bold text-sm text-foreground flex items-center gap-1.5">
                        {step.step} <ChevronRight className="w-3 h-3 text-primary" />
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
            {project.githubUrl && (
              <Button size="sm" variant="outline" className="text-xs gap-1" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3" /> View on GitHub
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button size="sm" variant="default" className="text-xs gap-1" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3" /> Live Demo
                </a>
              </Button>
            )}
          </div>
        </>
      )}
    </DialogContent>
  </Dialog>
)

// ── Main Section Component ────────────────────────────────────────────────────
const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const observerOptions = { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("in-view") })
    }, observerOptions)
    document.querySelectorAll("#projects .slide-up").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">

        {/* ── SECTION 1: Currently Working On ───────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center mb-12 slide-up">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              <Wrench className="w-3 h-3" /> Active Development
            </div>
            <h2 className="font-poppins font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
              I'm Currently Working On
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Projects actively in development — building, iterating, and shipping.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentlyWorkingOn.map((project, index) => (
              <ProjectCard key={`wip-${project.title}`} project={project} index={index} onSelect={setSelectedProject} />
            ))}
          </div>
        </div>

        {/* ── SECTION 2: I Built These — flat grid, no filters ──────────────── */}
        <div>
          <div className="text-center mb-12 slide-up">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              Portfolio
            </div>
            <h2 className="font-poppins font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
              I Built These
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of AI and Machine Learning projects spanning agentic systems, quantum computing, generative AI, and predictive analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builtProjectsOrdered.map((project, index) => (
              <ProjectCard
                key={`built-${project.title}-${project.subtitle}`}
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default ProjectsSection
