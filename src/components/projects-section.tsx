import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Cpu, Layers, Trophy, AlertTriangle, ArrowRight, Lightbulb, Sparkles } from "lucide-react"

// Types for Project Narratives
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
  category: "Agentic AI" | "Generative AI" | "Machine Learning" | "Deep Learning" | "Data Engineering"
  description: string
  tech: string[]
  impactSummary: string
  githubUrl?: string
  demoUrl?: string
  isFeatured: boolean
  details: ProjectDetails
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("All")

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px",
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll("#projects .slide-up")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [activeCategory])

  const categories = ["All", "Agentic AI", "Generative AI", "Machine Learning", "Deep Learning", "Data Engineering"]

  const projects: Project[] = [
    {
      title: "NeuroPlan AI",
      subtitle: "Multi-Agent Cognitive Learning Ecosystem",
      category: "Agentic AI",
      description: "An orchestrator coordinating 6 autonomous AI agents to construct personalized academic study structures, adapting to student knowledge retention curves in real-time.",
      tech: ["Gemini API", "Agentic Orchestration", "Python", "FastAPI", "Docker", "Azure ML"],
      impactSummary: "Boosted curriculum recommendation relevance by 40% using cognitive-arbitration models.",
      githubUrl: "https://github.com/Snigdha-Gayathri",
      isFeatured: true,
      details: {
        problem: "Traditional academic plans are static, neglecting students' specific cognitive loads, forgetting curves, and uneven knowledge retention profiles.",
        importance: "Static scheduling results in either rapid forgetting or cognitive fatigue. Dynamically adapting curriculum paths ensures optimized retention and higher student engagement.",
        howItWorks: "Designed a 6-agent framework: Planner (deconstructs curricula), Evaluator (grades submissions), Memory Manager (consolidates mistakes logs), Scheduler (manages spacing), Mastery Assessor (predicts skill scores), and Arbitration Agent (reconciles conflicts). Implemented memory retrieval based on the Ebbinghaus forgetting algorithm.",
        challenges: "Managing state synchronization and agentic loops without infinite loops. Resolved this by introducing a strict DAG-based arbitration protocol and memory-state checkpointing.",
        impact: "Improved recommendation alignment by 40%. Enabled autonomous, feedback-driven revision loops that decreased student grade predictive variance.",
        flowchart: [
          { step: "User Goal", desc: "Student inputs learning targets and current experience level." },
          { step: "Planner Agent", desc: "Breaks goals down into sub-concepts and schedules study path." },
          { step: "Assessment Loop", desc: "Evaluator checks quiz submissions and calculates mastery score." },
          { step: "Memory Consolidation", desc: "Memory Manager updates episodic logs and highlights error patterns." },
          { step: "Arbiter Scheduler", desc: "Calculates Ebbinghaus forgetting rate and schedules revision intervals." }
        ]
      }
    },
    {
      title: "Placement RAG Agent",
      subtitle: "Production-Grade Serverless Semantic Retrieval System",
      category: "Generative AI",
      description: "Enterprise RAG pipeline indexing 250+ highly specialized DSA and interview preparation resources, utilizing hybrid semantic search and serverless scaling.",
      tech: ["Gemini API", "Vector Database", "LangChain", "Python", "Azure Functions", "Serverless"],
      impactSummary: "Delivered context-aware responses in under 2 seconds with 45% improvement in semantic relevance.",
      githubUrl: "https://github.com/Snigdha-Gayathri",
      isFeatured: true,
      details: {
        problem: "Recruitment preparation resources are highly fragmented, leading to search inefficiencies and generic responses from generic LLMs that fail to answer technical edge cases.",
        importance: "Candidates need rapid, precise, contextually grounded answers to system design and algorithm questions to save time and optimize preparation.",
        howItWorks: "Built a document parser and embedding pipeline chunking PDF resources, writing to a Vector Database using Gemini Embeddings. Developed a serverless API that processes queries, performs hybrid search, expansion, and reranking before forwarding to Gemini's LLM.",
        challenges: "High LLM subscription costs and high latency of cold starts in serverless environments. Solved by leveraging a serverless scaling database, optimizing context compression, and implementing token-caching layers.",
        impact: "Reduced query response latency to under 2 seconds. Improved answer accuracy and semantic alignment by 45% while reducing infrastructure costs to $0 via scale-to-zero compute.",
        flowchart: [
          { step: "Query Input", desc: "User inputs complex technical or DSA-related question." },
          { step: "Semantic Search", desc: "Query expanded and vectorized to query Pinecone / Vector DB." },
          { step: "Reranking Engine", desc: "Sorts results to retrieve top 5 most relevant context chunks." },
          { step: "Context Injection", desc: "Injects verified chunks into prompt template with strict guidelines." },
          { step: "Serverless LLM", desc: "Gemini synthesizes a formatted, code-complete answer in < 2s." }
        ]
      }
    },
    {
      title: "Smart Shelf AI",
      subtitle: "Quantum Book Recommendation Engine",
      category: "Agentic AI",
      description: "A hybrid recommendation engine utilizing matrix factorization, user-similarity clustering, and a natural language conversational feedback loop.",
      tech: ["Python", "scikit-learn", "PyTorch", "Flask", "Pandas", "NLP"],
      impactSummary: "Achieved a 32% precision enhancement and reduced prediction error (RMSE) to 0.82.",
      githubUrl: "https://github.com/Snigdha-Gayathri/Smart-Shelf-AI",
      isFeatured: true,
      details: {
        problem: "Cold-start anomalies and basic collaborative filtering engines fail to capture highly contextual user interactions, resulting in generic recommendations.",
        importance: "High-precision personalization increases user engagement, session length, and overall discovery rate in digital library portals.",
        howItWorks: "Combines collaborative filtering (Matrix Factorization) with content-based cosine similarity across 15+ behavioural features (read speed, hover logs, scroll depth). Integrated a Flask-based Conversational Agent allowing users to give real-time text feedback to adjust recommendations.",
        challenges: "Handling real-time updates of recommendation weights when a user gives conversational feedback. Resolved by building a lightweight online weight adjustment layer.",
        impact: "Reduced root mean squared prediction error (RMSE) to 0.82. Increased recommendation relevance precision by 32%.",
        flowchart: [
          { step: "Behavior Logs", desc: "Captures 15+ metrics (hovers, scrolls, rating logs)." },
          { step: "Hybrid Modeling", desc: "Ensembles Matrix Factorization and TF-IDF similarity." },
          { step: "Conversational Agent", desc: "User chats: 'Suggest shorter thrillers instead'." },
          { step: "Online Adjustment", desc: "Modifies recommendation scores using feedback vectors." },
          { step: "Output Feed", desc: "Serves updated personal recommendation list." }
        ]
      }
    },
    {
      title: "AI Content Summarizer",
      subtitle: "Transformer-based NLP pipeline",
      category: "Generative AI",
      description: "Automated document summarization pipeline leveraging Hugging Face transformer models to compress multi-page text corpora into actionable summaries.",
      tech: ["NLP", "Transformers", "React", "Hugging Face API"],
      impactSummary: "Streamlined content reading by providing dynamic, user-configurable summaries.",
      githubUrl: "https://github.com/Snigdha-Gayathri/AI-Powered-Content-Summarizer",
      demoUrl: "https://summarize-ai-3e79c618.base44.app/",
      isFeatured: false,
      details: {
        problem: "Information overload from long documents, research papers, and technical blogs makes knowledge acquisition slow and exhausting.",
        importance: "Users need structured, condensed summaries that capture core arguments without reading hundreds of pages.",
        howItWorks: "Built a frontend in React that integrates with a Python backend processing documents, running Hugging Face transformer summarizers (BART/T5) to generate key bullet points.",
        challenges: "Large document chunking to prevent token overflow. Resolved by writing a sliding window text-chunking parser.",
        impact: "Accelerated reading efficiency by summarizing PDFs in under 5 seconds.",
        flowchart: [
          { step: "Upload File", desc: "User uploads PDF or pastes large text corpora." },
          { step: "Text Chunking", desc: "Parser splits text into overlapping chunks." },
          { step: "Model Inference", desc: "Hugging Face Bart models run inference on chunks." },
          { step: "Consolidation", desc: "Stitches summaries together cleanly." }
        ]
      }
    },
    {
      title: "AI Sentiment Analyzer",
      subtitle: "NLP Microservice",
      category: "Deep Learning",
      description: "A smart web application classifying user reviews into positive, negative, or neutral sentiments, delivering live analytical insights.",
      tech: ["Flask", "Python", "Hugging Face Transformers", "React"],
      impactSummary: "Enables real-time feedback auditing for better consumer decisions.",
      demoUrl: "https://sentia-b586d409.base44.app/",
      isFeatured: false,
      details: {
        problem: "Manually monitoring hundreds of daily customer reviews or social feeds is impossible and highly prone to subjective biases.",
        importance: "Businesses need automated, real-time sentiment mapping to detect service complaints and customer satisfaction immediately.",
        howItWorks: "Engineered a React UI connected to a Flask API. The backend processes the input strings and routes them through a DistilBERT transformer fine-tuned for sentiment classification.",
        challenges: "Inference latency of transformer models. Solved by caching predictions and structuring lightweight inference payloads.",
        impact: "Achieved sub-150ms sentiment classification latency.",
        flowchart: [
          { step: "Review Input", desc: "User types review or inputs feedback data." },
          { step: "Pre-processing", desc: "Cleans emojis, punctuation, and tokenizes text." },
          { step: "DistilBERT model", desc: "Classifies sentiment probabilities (Pos/Neg/Neu)." },
          { step: "Dashboard UI", desc: "Displays color-coded charts of sentiment distributions." }
        ]
      }
    },
    {
      title: "Student Grade Predictor",
      subtitle: "Predictive Academic Modeler",
      category: "Machine Learning",
      description: "Predictive analytics engine using multi-variable regression on historical student datasets to identify early intervention requirements.",
      tech: ["Flask", "Python", "scikit-learn", "Linear Regression"],
      impactSummary: "Aids institutions in identifying struggling students prior to final assessments.",
      githubUrl: "https://github.com/Snigdha-Gayathri/Student-Grade-Predictor",
      demoUrl: "https://grade-boost-ai-c1a3f675.base44.app/",
      isFeatured: false,
      details: {
        problem: "Academic failure is often detected too late for remedial actions, leading to student dropouts or poor performance.",
        importance: "Early predictive warnings allow educators to step in and offer targeted support beforehand.",
        howItWorks: "Preprocesses demographic, socioeconomic, and intermediate grade data. Trains a Scikit-Learn regression model to output final grades.",
        challenges: "Data imbalance and missing value errors. Solved by implementing robust KNN-imputation and data normalization.",
        impact: "Allowed accurate grade prediction within a ±5% margins.",
        flowchart: [
          { step: "Data Upload", desc: "Imports demographic and mid-term grades." },
          { step: "Data Pipeline", desc: "Imputes values and scales variables." },
          { step: "Model Predict", desc: "Regressor estimates final marks percentage." },
          { step: "Insight Report", desc: "Flags students whose scores fall below warning thresholds." }
        ]
      }
    },
    {
      title: "Image Cartooniser",
      subtitle: "Generative Style-Transfer Model",
      category: "Deep Learning",
      description: "Style-transfer generator applying custom Generative Adversarial Networks (GANs) and bilateral filtering to synthesize animated styling from real images.",
      tech: ["Python", "GANs", "OpenCV"],
      impactSummary: "Bridges creative art and ML using automated visual style transfer.",
      githubUrl: "https://github.com/Snigdha-Gayathri/Cartoonifier-ML-model",
      isFeatured: false,
      details: {
        problem: "Creating hand-drawn cartoon assets manually is tedious, slow, and expensive for visual designers.",
        importance: "Automated filters fail to preserve clean edges. Deep learning-based GANs resolve this by learning structural painting lines.",
        howItWorks: "Uses bilateral filters to smooth textures while keeping edges sharp. Passes images through a pre-trained GAN for cartoon stylization.",
        challenges: "Halos and pixelation around fine edges. Corrected by applying custom laplacian edge enhancement in OpenCV.",
        impact: "Generates stylized cartoon assets in real-time.",
        flowchart: [
          { step: "Source Image", desc: "Uploads standard digital photograph." },
          { step: "Edge Extraction", desc: "OpenCV isolates structural contours and lines." },
          { step: "Style GAN", desc: "Applies trained cartoon textures to flat regions." },
          { step: "Merge layers", desc: "Combines contour lines and cartoon textures." }
        ]
      }
    },
    {
      title: "ML Image Colorizer",
      subtitle: "Chrominance Restoration Model",
      category: "Deep Learning",
      description: "Grayscale restoration system utilizing deep convolutional networks (CNNs) and pre-trained Caffe models to map luminance to chrominance values.",
      tech: ["CNNs", "OpenCV", "Deep Learning", "Caffe"],
      impactSummary: "Restores lifelike color to historic grayscale photographs with high precision.",
      githubUrl: "https://github.com/Snigdha-Gayathri/Image-Colorizer-ML",
      isFeatured: false,
      details: {
        problem: "Colorizing historic grayscale photographs manually takes hours of meticulous digital painting.",
        importance: "AI colorization helps preserve historical media rapidly and accurately.",
        howItWorks: "Converts images to Lab color space. Takes the L (luminance) channel, feeds it through a CNN to predict a and b channels, then stitches them back.",
        challenges: "Incorrect color predictions on unseen structures (e.g. skies turning yellow). Rectified by incorporating deep Caffe model priors.",
        impact: "Converts black & white photographs into color in under 1 second.",
        flowchart: [
          { step: "Grayscale Input", desc: "Uploads historic black and white image." },
          { step: "Lab Conversion", desc: "Extracts brightness (L channel) as input." },
          { step: "CNN Predict", desc: "Model estimates chrominance (a & b channels)." },
          { step: "Final Composite", desc: "Recombines L + a + b channels to output RGB image." }
        ]
      }
    },
    {
      title: "Car Price Predictor",
      subtitle: "Automobile Valuer",
      category: "Machine Learning",
      description: "Regression model with structured ETL and categorical one-hot encoding pipelines, optimizing automobile pricing valuations using Random Forest.",
      tech: ["scikit-learn", "RandomForest", "Python"],
      impactSummary: "Automates resale valuation predictions based on age, mileage, and features.",
      githubUrl: "https://github.com/Snigdha-Gayathri/Car-Price-Prediction-Using-ML",
      isFeatured: false,
      details: {
        problem: "Resale pricing for cars is highly subjective, resulting in transaction bottlenecks and unfair pricing.",
        importance: "Clear mathematical predictions provide standard baselines for buyers and sellers.",
        howItWorks: "Cleans categorical variables, runs one-hot encoding on brands, and trains a RandomForestRegressor model.",
        challenges: "Outlier data skewing predictions. Fixed by applying robust z-score filtering.",
        impact: "Achieved an R-squared valuation accuracy of 91%.",
        flowchart: [
          { step: "Specs Input", desc: "Enter mileage, year, fuel type, and brand." },
          { step: "ETL Pipeline", desc: "One-hot encodes categories and handles outliers." },
          { step: "Model Evaluation", desc: "Runs estimation using Random Forest nodes." },
          { step: "Valuation Feed", desc: "Outputs estimated price with accuracy range." }
        ]
      }
    },
    {
      title: "Loan Risk Preprocessing",
      subtitle: "Data Preprocessing & Encoding Pipeline",
      category: "Data Engineering",
      description: "Enterprise-grade preprocessing pipeline designed for loan risk assessment, implementing missing-value imputation and feature scaling.",
      tech: ["Python", "Pandas", "Data Preprocessing"],
      impactSummary: "Ensures clean data inputs to prevent model drift in loan forecasting.",
      githubUrl: "https://github.com/Snigdha-Gayathri/Loan-Risk-Data-Preprocessing-Encoding-Pipeline",
      isFeatured: false,
      details: {
        problem: "Financial datasets are often full of missing values, mismatched data, and un-scaled fields, which cause ML models to fail.",
        importance: "Loan assessment requires 100% data integrity to prevent financial risk.",
        howItWorks: "Implements median imputation for numeric values, mode imputation for categories, and scales features via StandardScaler.",
        challenges: "Information leakage during data preprocessing. Prevented by strict split-first-transform pipelines.",
        impact: "Prepared clean datasets ready for instant neural network training.",
        flowchart: [
          { step: "Raw CSV Load", desc: "Imports raw credit application logs." },
          { step: "Data Auditing", desc: "Locates missing values and mismatched categories." },
          { step: "Imputation Layer", desc: "Replaces empty logs mathematically." },
          { step: "Normalization", desc: "Standardizes values to prevent neural scale bias." }
        ]
      }
    },
    {
      title: "Amazon Prime Movie Classifier",
      subtitle: "Feature-Engineered Metadata Classification Pipeline",
      category: "Machine Learning",
      description: "Designed a multi-variable classification model categorizing movie content and user preferences on Amazon Prime by parsing rich metadata streams.",
      tech: ["Python", "scikit-learn", "XGBoost", "Pandas", "Logistic Regression"],
      impactSummary: "Automated content tagging and preference predictions using ensembled decision trees.",
      isFeatured: false,
      details: {
        problem: "Automated content discovery requires high-fidelity genre and age rating classifications to prevent recommendation mismatch and user fatigue.",
        importance: "Precision in metadata categorization directly raises search alignment and platform content consumption indices.",
        howItWorks: "Cleaned and processed raw movie catalog metrics, handling cardinality issues by target-encoding features. Developed supervised classifiers leveraging Decision Trees, Random Forests, XGBoost, and Logistic Regression.",
        challenges: "Imbalanced ratings and Cardinality of categorical metadata. Resolved by applying SMOTE class balance filters and grouped feature binning.",
        impact: "Successfully trained classifiers delivering high precision in multi-label content categorization.",
        flowchart: [
          { step: "Catalog Ingestion", desc: "Retrieves metadata (genre, age rating, duration, release year, language)." },
          { step: "Data Cleaning", desc: "Imputes missing attributes and normalizes numerical features." },
          { step: "Feature Encoding", desc: "Converts categorical strings into structured numerical matrices." },
          { step: "Model Training", desc: "Trains Decision Trees, Random Forests, and XGBoost models." },
          { step: "Classification Out", desc: "Validates model performance and exports movie tags." }
        ]
      }
    },
    {
      title: "Boston House Price Predictor",
      subtitle: "Real Estate Value Regression Model",
      category: "Machine Learning",
      description: "Supervised regression pipeline optimizing property valuation forecasting by analyzing crime, rooms, location, and socio-environmental factors.",
      tech: ["Python", "scikit-learn", "XGBoost", "Matplotlib", "Seaborn"],
      impactSummary: "Predicted housing prices with minimized Root Mean Squared Error (RMSE) margins.",
      isFeatured: false,
      details: {
        problem: "Property valuation models are heavily impacted by socio-environmental multi-collinearity, causing high errors in pricing forecasts.",
        importance: "Accurate real estate metrics reduce transaction valuation discrepancies and optimize investor portfolios.",
        howItWorks: "Conducted Exploratory Data Analysis (EDA) on geographic datasets, handled outliers using IQR boundaries, and engineered features. Trained Linear Regression, Random Forest Regressors, and XGBoost Regressors.",
        challenges: "Severe multi-collinearity between tax rates and distance to highway indices. Solved by variance inflation factor (VIF) pruning.",
        impact: "Reduced price forecasting error, achieving highly stable performance metrics (RMSE & MAE).",
        flowchart: [
          { step: "EDA & Auditing", desc: "Analyzes socio-environmental datasets for missing records." },
          { step: "Outlier Treatment", desc: "Removes extreme pricing variables using IQR filtering." },
          { step: "Feature Selection", desc: "Prunes high-correlation predictors using VIF threshold audits." },
          { step: "Regression Training", desc: "Trains Linear Regression and XGBoost Regressors." },
          { step: "Valuation output", desc: "Generates real estate pricing forecasts with minimal error." }
        ]
      }
    },
    {
      title: "Breast Cancer Diagnostic Model",
      subtitle: "High-Recall Binary Clinical Classifier",
      category: "Machine Learning",
      description: "A binary diagnostic model predicting tumor classification (malignant vs. benign) using SVM, XGBoost, and cell nucleus measurements.",
      tech: ["Python", "scikit-learn", "SVM", "XGBoost", "Medical Analytics"],
      impactSummary: "Optimized diagnostic recall to minimize false-negative clinical warnings.",
      isFeatured: false,
      details: {
        problem: "Clinical diagnosis requires minimizing false negatives (misclassifying malignant tumors as benign) to prevent life-threatening delays.",
        importance: "Computer-aided diagnostic models provide critical secondary validation checks for oncologists.",
        howItWorks: "Processed raw nucleus metrics (radius, texture, perimeter). Trained binary classification networks (Logistic Regression, Random Forest, Support Vector Machines with RBF kernel, and XGBoost), optimizing for Recall and F1 Score.",
        challenges: "Severe cost discrepancy of misclassification errors. Resolved by shifting classifier thresholds to favor high recall.",
        impact: "Trained medical diagnosis model achieving excellent F1-score and recall rates.",
        flowchart: [
          { step: "Nucleus Feature Load", desc: "Imports cell structural attributes (radius, texture, perimeter)." },
          { step: "MinMax Scaling", desc: "Standardizes features to prevent model scale bias." },
          { step: "Classifier Training", desc: "Trains SVM, Random Forest, and XGBoost algorithms." },
          { step: "Threshold Optimization", desc: "Tunes model decision thresholds to maximize recall." },
          { step: "Diagnostic Report", desc: "Classifies tumors as benign or malignant with high confidence." }
        ]
      }
    }
  ]

  const filteredProjects = projects.filter(project => {
    if (activeCategory === "All") return true
    return project.category === activeCategory
  })

  const featuredProjects = filteredProjects.filter(p => p.isFeatured)
  const regularProjects = filteredProjects.filter(p => !p.isFeatured)

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Portfolio Showcase
          </div>
          <h2 className="font-poppins font-extrabold text-4xl md:text-5xl mb-4 text-foreground">
            Featured Systems
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore autonomous agents, neural architectures, and semantic retrieval systems built to solve real-world problems.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 slide-up delay-100">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        {featuredProjects.length > 0 && (
          <div className="space-y-8 mb-16">
            <h3 className="text-xl font-bold font-poppins text-foreground/80 flex items-center gap-2 slide-up">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" /> Production-Grade Systems
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="card-hover border bg-card shadow-md flex flex-col justify-between cursor-pointer slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader className="p-6 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs bg-primary/10 border border-primary/20 text-primary px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="font-poppins font-extrabold text-2xl text-foreground">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-primary font-medium mt-1">{project.subtitle}</p>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 space-y-4 flex-grow flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((tech, techIdx) => (
                          <Badge key={techIdx} variant="secondary" className="text-[10px] py-0.5 px-2 font-medium bg-muted/60">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="text-[10px] text-muted-foreground font-semibold self-center ml-1">+{project.tech.length - 4} more</span>
                        )}
                      </div>

                      <div className="p-3 bg-accent/40 rounded-xl border border-accent/10 flex items-center justify-between group-hover:bg-accent transition-all duration-300">
                        <p className="text-xs text-muted-foreground leading-snug">
                          <span className="font-bold text-primary">Outcome:</span> {project.impactSummary}
                        </p>
                      </div>

                      <Button size="sm" className="w-full justify-between mt-2" variant="outline">
                        Explore System Architecture <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        {regularProjects.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-poppins text-foreground/80 flex items-center gap-2 slide-up">
              <Layers className="w-5 h-5 text-primary" /> Engineering Pipelines & Models
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <Card
                  key={index}
                  className="card-hover border bg-card shadow-sm flex flex-col justify-between cursor-pointer slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader className="p-5 pb-3">
                    <span className="self-start text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-bold uppercase tracking-wider mb-2">
                      {project.category}
                    </span>
                    <CardTitle className="font-poppins font-bold text-lg text-foreground mt-1">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-5 pt-0 space-y-4 flex-grow flex flex-col justify-between">
                    <p className="text-xs text-muted-foreground leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech, techIdx) => (
                          <Badge key={techIdx} variant="outline" className="text-[9px] py-px px-1.5 font-medium">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-border/40">
                        <span className="text-[10px] text-primary font-bold">Details & System Flow</span>
                        <ArrowRight className="w-3 h-3 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* System Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-3xl w-[95vw] rounded-2xl p-6 bg-card border overflow-y-auto max-h-[85vh]">
            {selectedProject && (
              <>
                <DialogHeader className="mb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-muted-foreground">System Overview</span>
                  </div>
                  <DialogTitle className="font-poppins font-extrabold text-3xl text-foreground flex items-center justify-between flex-wrap gap-4">
                    {selectedProject.title}
                    <div className="flex gap-2">
                      {selectedProject.githubUrl && (
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="gap-1.5 py-1 px-3 h-8 rounded-lg text-xs">
                            <Github className="w-3.5 h-3.5" /> Code
                          </Button>
                        </a>
                      )}
                      {selectedProject.demoUrl && (
                        <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="default" className="gap-1.5 py-1 px-3 h-8 rounded-lg text-xs">
                            <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </DialogTitle>
                  <DialogDescription className="text-sm text-primary font-semibold mt-1">
                    {selectedProject.subtitle}
                  </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="narrative" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6 bg-muted/60 p-1 rounded-xl">
                    <TabsTrigger value="narrative" className="rounded-lg text-xs py-1.5">System Narrative</TabsTrigger>
                    <TabsTrigger value="architecture" className="rounded-lg text-xs py-1.5">Architecture Flow</TabsTrigger>
                    <TabsTrigger value="challenges" className="rounded-lg text-xs py-1.5">Bottlenecks & MLOps</TabsTrigger>
                  </TabsList>

                  {/* System Narrative Tab */}
                  <TabsContent value="narrative" className="space-y-5 text-sm leading-relaxed">
                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary/95">
                        <AlertTriangle className="w-4 h-4" /> The Problem
                      </h4>
                      <p className="text-muted-foreground pl-5.5">{selectedProject.details.problem}</p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary/95">
                        <Lightbulb className="w-4 h-4" /> Why It Matters
                      </h4>
                      <p className="text-muted-foreground pl-5.5">{selectedProject.details.importance}</p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary/95">
                        <Cpu className="w-4 h-4" /> How It Was Built
                      </h4>
                      <p className="text-muted-foreground pl-5.5">{selectedProject.details.howItWorks}</p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground flex items-center gap-1.5 text-xs uppercase tracking-wider text-primary/95">
                        <Trophy className="w-4 h-4" /> Impact & Metrics Achieved
                      </h4>
                      <p className="text-muted-foreground pl-5.5">{selectedProject.details.impact}</p>
                    </div>
                  </TabsContent>

                  {/* Architecture Flow Tab */}
                  <TabsContent value="architecture" className="space-y-6">
                    <div className="p-4 bg-muted/30 dark:bg-muted/10 rounded-2xl border border-border/40">
                      <p className="text-xs text-muted-foreground mb-4 text-center font-medium uppercase tracking-wider">
                        Dynamic Data Flow Layout
                      </p>
                      
                      {/* Vertical Flow Steps */}
                      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/25">
                        {selectedProject.details.flowchart.map((step, idx) => (
                          <div key={idx} className="relative">
                            <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-primary border-4 border-card flex items-center justify-center text-[10px] font-bold text-primary-foreground shadow-sm">
                              {idx + 1}
                            </span>
                            <div>
                              <h5 className="font-bold text-sm text-foreground">{step.step}</h5>
                              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-xs font-bold text-foreground/80 self-center mr-1">System Tech Stack:</span>
                      {selectedProject.tech.map((t, idx) => (
                        <Badge key={idx} variant="secondary" className="text-[10px] bg-primary/5 text-primary border border-primary/10">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Bottlenecks & MLOps Tab */}
                  <TabsContent value="challenges" className="space-y-4">
                    <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-2xl flex gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-foreground text-sm">Engineering Bottleneck</h4>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {selectedProject.details.challenges}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl space-y-2">
                      <h4 className="font-bold text-foreground text-sm flex items-center gap-1.5">
                        <Cpu className="w-4.5 h-4.5 text-primary" /> MLOps, Pipelines & Monitoring
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        To scale this system, components were built as modular microservices, wrapping tasks in distinct logical steps. Logging dashboards track latency distributions and output variances, allowing rapid evaluation metrics monitoring (F1-score, RMSE, recall grids) to isolate data drift.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default ProjectsSection
