# 🏗️ EKIP System Architecture & Flow

This document provides a comprehensive architectural breakdown of the **Enterprise Knowledge Intelligence Platform (EKIP)**. It outlines the core system topology, the LangGraph multi-agent orchestration flow, and the multi-database data pipelines.

## 1. System Architecture (High Level)

EKIP follows a modern decoupled architecture, combining a React SPA frontend with a high-performance Python asynchronous backend. The backend bridges LLMs with a heterogeneous database layer designed for specialized storage and retrieval.

```mermaid
flowchart TD
    %% Frontend Layer
    subgraph Frontend [React Dashboard Client]
        UI[UI Components <br> React 19, Tailwind CSS v4]
        State[State Management <br> Zustand, React Query]
        Viz[Graph Visualizations <br> React Flow]
        
        UI <--> State
        State <--> Viz
    end

    %% API Gateway Layer
    subgraph Backend [FastAPI Gateway Server]
        Auth[API Keys Middleware]
        CORS[CORS Middleware]
        Router[API Router]
        
        Auth --> CORS --> Router
    end

    %% AI Orchestration Layer
    subgraph MultiAgentSystem [LangGraph Orchestration]
        Supervisor((Supervisor Agent))
        Search[Search Agent]
        KG[Knowledge Graph Agent]
        Reasoning[Reasoning Agent]
        Report[Report Agent]
        
        Supervisor <--> Search
        Supervisor <--> KG
        Supervisor --> Reasoning
        Reasoning --> Report
    end

    %% Database & LLM Layer
    subgraph Storage & External [Storage & External APIs]
        Supabase[(Supabase <br> PostgreSQL)]
        Neo4j[(Neo4j Aura <br> Graph DB)]
        Qdrant[(Qdrant Cloud <br> Vector DB)]
        LLM((Google Gemini API <br> Groq API))
    end

    %% Connections
    Frontend -- REST API / SSE --> Backend
    Backend -- Routes Queries to --> MultiAgentSystem
    
    Search <--> Qdrant
    KG <--> Neo4j
    Search -.-> Supabase
    KG -.-> Supabase
    
    MultiAgentSystem -- Generates content / embeddings --> LLM
```

> [!TIP]
> **Why three databases?**
> - **Supabase** handles tabular metadata, authentication, and structured document records.
> - **Qdrant** provides extremely fast Hybrid Semantic Search (dense embeddings + sparse keyword search with RRF).
> - **Neo4j** allows for complex traversal logic (e.g., finding the impact radius if a specific microservice goes down).

---

## 2. Multi-Agent Orchestration Flow (LangGraph)

The core logic of EKIP is powered by a cyclic, stateful graph using **LangGraph**. A Supervisor agent dynamically routes execution, allowing specialized agents to conduct multiple hops of retrieval before synthesizing an answer.

```mermaid
stateDiagram-v2
    [*] --> Supervisor
    
    state Supervisor {
        direction LR
        Analyze[Analyze Query Intent]
        Determine[Determine Required Tools]
    }
    
    Supervisor --> SearchAgent: Needs Semantic Search
    Supervisor --> KnowledgeGraphAgent: Needs Entity Traversal
    
    SearchAgent --> Supervisor: Returns retrieved vectors & chunks
    KnowledgeGraphAgent --> Supervisor: Returns Cypher query results
    
    Supervisor --> ReasoningAgent: Data gathering complete
    
    state Synthesis {
        ReasoningAgent --> ReportAgent: Synthesized findings & evidence
    }
    
    ReportAgent --> [*]: Cited Markdown Response
```

### Agent Roles

- **Supervisor Agent**: The brain of the operation. It assesses the user query against the current `EKIPState` and decides whether to invoke the Search Agent, the KG Agent, or if enough context has been gathered to proceed to Reasoning.
- **Search Agent**: Interfaces directly with Qdrant to perform hybrid vector search over embedded document chunks.
- **Knowledge Graph Agent**: Translates natural language into Cypher queries, executing them against Neo4j to extract relationship paths and dependency structures.
- **Reasoning Agent**: Synthesizes the raw data gathered from the Search and KG agents. It validates evidence, removes hallucinations, and draws conclusions.
- **Report Agent**: Takes the Reasoning Agent's conclusions and formats them into a beautifully structured, highly readable markdown report with inline citations linking back to source documents.

---

## 3. Data Ingestion Pipeline

When a new document (PDF, DOCX, Markdown, etc.) is uploaded via the **DocumentsPage**, it triggers a multi-modal ingestion pipeline.

```mermaid
sequenceDiagram
    participant User as User
    participant API as FastAPI Backend
    participant Ingestion as Ingestion Service
    participant Supabase as Supabase (Metadata)
    participant Embeddings as FastEmbed
    participant Qdrant as Qdrant (Vectors)
    participant Neo4j as Neo4j (Graph)

    User->>API: Uploads Document (e.g. PDF)
    API->>Ingestion: Stream file for processing
    Ingestion->>Supabase: Create Document Record (Pending)
    
    Ingestion->>Ingestion: Parse & Chunk Text (Langchain Loaders)
    
    par Vector Indexing
        Ingestion->>Embeddings: Generate Embeddings (text-embedding-004)
        Embeddings-->>Ingestion: Dense & Sparse Vectors
        Ingestion->>Qdrant: Upsert vectors & chunk metadata
    and Graph Indexing
        Ingestion->>API: Extract Entities & Relationships (via LLM)
        API-->>Ingestion: Structured JSON Graph
        Ingestion->>Neo4j: Merge Nodes & Edges via Cypher
    end
    
    Ingestion->>Supabase: Update Document Status (Ready)
    API-->>User: Upload Complete
```

> [!IMPORTANT]
> The dual-indexing strategy ensures that every piece of knowledge is retrievable via both **semantic meaning** (Qdrant) and **explicit structural relationships** (Neo4j).

---

## 4. Interactive Knowledge Explorer (React Flow)

The frontend features advanced data visualization capabilities using React Flow. This allows users to visually interact with the data returned by the backend.

```mermaid
flowchart LR
    A[Neo4j Database] -->|Cypher Query| B(Backend Graph Service)
    B -->|Nodes & Edges JSON| C{Frontend Dashboard}
    
    C -->|Architecture Page| D[System Architecture Map]
    C -->|Impact Analysis Page| E[Dependency Blast Radius]
    C -->|Knowledge Graph Page| F[Entity Explorer]
    
    style D fill:#1f2937,stroke:#6366f1,stroke-width:2px,color:#fff
    style E fill:#1f2937,stroke:#ef4444,stroke-width:2px,color:#fff
    style F fill:#1f2937,stroke:#10b981,stroke-width:2px,color:#fff
```

Through these interfaces, users can click on a node (e.g., an API Gateway) and dynamically load connected dependencies or view related semantic documents retrieved seamlessly from Qdrant.
