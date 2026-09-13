# NeuroPlan AI: Architecture & Flow

This document outlines the architecture, data flow, and key components of the **NeuroPlan AI** project. The project is built using the **Next.js 14 App Router**, integrating with **Clerk** for authentication, **Google Gemini/Groq** for AI capabilities, and **PostgreSQL** via **Prisma ORM** for data persistence.

---

## 1. High-Level Architecture

The system follows a modern full-stack serverless architecture using Next.js. 

```mermaid
graph TD
    %% Clients
    Client[Web Browser/User]
    
    %% External Services
    Clerk[Clerk Auth]
    Gemini[Google Gemini API]
    Groq[Groq API]
    Postgres[(PostgreSQL DB)]
    
    %% Next.js App
    subgraph "Next.js 14 Application"
        %% Frontend Layer
        subgraph "Frontend Layer (React Client/Server Components)"
            UI_Landing[Landing Page]
            UI_Auth[Sign In/Up]
            UI_Dash[Dashboard]
            UI_Planner[Roadmap Planner]
            UI_Roadmap[Roadmap/Module View]
        end
        
        %% API Layer
        subgraph "API Routes (/api)"
            API_Users[/api/users/]
            API_Planner[/api/planner/]
            API_Roadmaps[/api/roadmaps/]
            API_Modules[/api/modules/]
            API_Dashboard[/api/dashboard/]
        end
        
        %% Services Layer (AI & Core Logic)
        subgraph "Core AI & Business Logic (src/services)"
            S_Arbitration[Arbitration Agent]
            S_Roadmap[Roadmap Intelligence]
            S_Content[Module Content Gen]
            S_Eval[Evaluation Diagnostic]
            S_Mastery[Mastery & Readiness]
            S_Retention[Retention Stability]
            S_Fatigue[Fatigue Agent]
            S_Transfer[Transfer Learning]
        end
        
        %% Data Layer
        Prisma[Prisma Client]
    end
    
    %% Connections - Auth
    Client <--> UI_Auth
    UI_Auth <--> Clerk
    UI_Landing <--> Client
    
    %% Connections - App
    Client <--> UI_Dash
    Client <--> UI_Planner
    Client <--> UI_Roadmap
    
    %% Connections - UI to API
    UI_Dash --> API_Dashboard
    UI_Planner --> API_Planner
    UI_Roadmap --> API_Roadmaps
    UI_Roadmap --> API_Modules
    
    %% Connections - API to Services
    API_Planner --> S_Roadmap
    API_Modules --> S_Content
    API_Modules --> S_Eval
    API_Dashboard --> S_Fatigue
    API_Dashboard --> S_Mastery
    
    %% Connections - Services to AI
    S_Roadmap --> Gemini
    S_Content --> Gemini
    S_Content --> Groq
    
    %% Connections - Services/API to DB
    S_Roadmap --> Prisma
    S_Eval --> Prisma
    S_Mastery --> Prisma
    S_Retention --> Prisma
    S_Fatigue --> Prisma
    S_Transfer --> Prisma
    API_Users --> Prisma
    
    %% Connection - DB
    Prisma <--> Postgres

    classDef external fill:#f9f,stroke:#333,stroke-width:2px;
    class Clerk,Gemini,Groq external;
    classDef database fill:#fbb,stroke:#333,stroke-width:2px;
    class Postgres database;
```

---

## 2. Core Components & Logic

The intelligence of NeuroPlan AI lives in the `src/services/` directory. The application isn't just a basic CRUD wrapper; it acts as an intelligent tutor system with multiple specialized agents:

- **Roadmap Intelligence (`roadmap-intelligence.ts`)**: Responsible for taking user goals and prompting the AI (Gemini) to generate structured learning paths (Roadmaps + Modules).
- **Module Content (`module-content.ts`)**: Dynamically generates or retrieves the actual learning material for each module within a roadmap.
- **Evaluation Diagnostic (`evaluation-diagnostic.ts`)**: Evaluates user quiz attempts and identifies weak areas based on the generated rubrics.
- **Mastery & Readiness (`mastery-readiness.ts`)**: Calculates a user's mastery score for specific modules based on their quiz performance and updates the overall readiness for the roadmap.
- **Retention Stability (`retention-stability.ts`)**: Implements Spaced Repetition Logic (e.g., Ebbinghaus forgetting curve). Determines when a user needs to review a module.
- **Fatigue Agent (`fatigue-agent.ts`)**: Monitors `StudySession` metrics to calculate cognitive load/fatigue. Can suggest breaks or adjust difficulty dynamically.
- **Transfer Learning (`transfer-learning.ts`)**: Analyzes how skills learned in one roadmap (e.g., Python) map to another roadmap (e.g., JavaScript) via the `TransferMatrix` database model.
- **Arbitration Agent (`arbitration-agent.ts`)**: Likely acts as the orchestrator that balances user requests, fatigue levels, and retention needs to decide what the user should study next.

---

## 3. Database Schema Overview (Prisma)

The application uses PostgreSQL with Prisma ORM. Below is an ER diagram representing the core data entities.

```mermaid
erDiagram
    USER ||--o{ ROADMAP : creates
    USER ||--o| FATIGUEMETRICS : has
    USER ||--o{ STUDYSESSION : tracks

    ROADMAP ||--o{ MODULE : contains
    ROADMAP ||--o{ TRANSFERMATRIX : acts_as_source
    ROADMAP ||--o{ TRANSFERMATRIX : acts_as_target

    MODULE ||--o| MODULEPROGRESS : tracks
    MODULE ||--o{ QUIZ : assesses

    QUIZ ||--o{ QUIZATTEMPT : has

    USER {
        String id PK
        String clerkId UK
        String email UK
        String name
    }

    ROADMAP {
        String id PK
        String skillName
        Int targetScore
        Float readiness
    }

    MODULE {
        String id PK
        String title
        Int difficulty
        Float mastery
        Float retentionScore
        DateTime lastReviewed
    }

    MODULEPROGRESS {
        String id PK
        Boolean completed
        Int timeSpentMins
        String[] weakAreas
    }

    QUIZ {
        String id PK
        Json questions
    }

    QUIZATTEMPT {
        String id PK
        Float score
        Json answers
        String[] weakAreas
    }

    FATIGUEMETRICS {
        Float totalStudyHours
        Int streakDays
        Float fatigueScore
    }
```

---

## 4. Primary User Flows

### A. The Generation Flow (Creating a Roadmap)
1. User authenticates via **Clerk**.
2. User submits a learning goal on the `/planner` UI.
3. The frontend makes a POST request to `/api/planner`.
4. `roadmap-intelligence.ts` intercepts this and communicates with **Google Gemini / Groq**.
5. The AI returns a JSON-structured curriculum.
6. The backend persists the `Roadmap` and `Module` records via **Prisma**.
7. The user is redirected to `/roadmaps/[id]` to view their customized curriculum.

### B. The Learning & Assessment Flow
1. User clicks on a `Module` to start studying. A `StudySession` is initialized.
2. The UI fetches content generated dynamically via `/api/modules/`.
3. User completes the content and takes a `Quiz`.
4. Quiz answers are submitted to the API. `evaluation-diagnostic.ts` grades the quiz.
5. A `QuizAttempt` is logged to the DB.
6. `mastery-readiness.ts` calculates the new `mastery` score for the module.
7. `retention-stability.ts` calculates the `decayFactor` to schedule the next review.
8. The `StudySession` is closed, updating `FatigueMetrics`.
