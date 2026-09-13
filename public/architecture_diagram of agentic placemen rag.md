# System Architecture & Flow — Agentic Placement RAG

This document outlines the complete system architecture, deployment strategy, data ingestion flow, and query execution pipeline of the Placement RAG Agent. 

---

## 1. High-Level Deployment Architecture

The system is deployed on **Render** using a decoupled Frontend-Backend architecture.

```mermaid
graph TD
    subgraph Client Layer
        U([User Browser])
    end

    subgraph Render Platform
        subgraph Frontend Repository
            FE[React + Vite Static Site]
            FE -.->|Environment Variables| ENV_FE(VITE_API_URL)
        end
        
        subgraph Backend Repository
            BE[FastAPI + Python Web Service]
            BE -.->|Environment Variables| ENV_BE(GEMINI_API_KEY<br>GOOGLE_DRIVE_FOLDER_ID<br>GOOGLE_SERVICE_ACCOUNT_JSON)
        end
    end

    subgraph External Dependencies
        GAPI[Google Gemini API]
        GDRIVE[Google Drive API]
    end

    U -->|HTTPS Requests| FE
    U -->|HTTPS REST / SSE| BE
    FE -->|API Calls| BE
    
    BE -->|LLM & Embeddings| GAPI
    BE -->|Fetch PDF Knowledge Base| GDRIVE
```

---

## 2. Startup Data Ingestion Flow

When the backend starts up, it automatically synchronizes its knowledge base with Google Drive without manual intervention.

```mermaid
sequenceDiagram
    participant S as FastAPI Startup (Service)
    participant D as DriveSyncer
    participant GD as Google Drive API
    participant C as ChromaVectorStore
    participant P as IngestionPipeline

    S->>D: Trigger _startup_sync_and_ingest()
    D->>GD: Authenticate via in-memory JSON (Service Account)
    D->>GD: List files in GOOGLE_DRIVE_FOLDER_ID
    GD-->>D: Return file metadata (ID, Modified Time, etc.)
    
    D->>D: Compare against local data/.drive_sync_state.json
    
    alt Differential Sync
        D->>GD: Download only NEW or MODIFIED PDFs
        GD-->>D: PDF files saved to data/ directory
        D->>C: Purge old chunks (delete_by_source) for MODIFIED files
    end
    
    D-->>S: Return synced file list
    
    S->>P: Trigger run(force_rebuild=False)
    P->>P: Hash local files (SHA-256)
    P->>P: Skip files with matching hashes
    P->>P: Chunk, Embed, and Index NEW/MODIFIED files
    P->>C: Update ChromaDB
    
    S-->>S: Ready to serve traffic
```

---

## 3. Query Execution Pipeline (RAG Flow)

When a user submits a message, the request routes through a sophisticated, multi-stage retrieval and generation pipeline. The frontend tracks this progress in real-time via Server-Sent Events (SSE).

```mermaid
graph TD
    subgraph Client
        UI[Chat Interface]
        SSE[Pipeline Progress Tracker]
    end

    subgraph API Layer
        API[POST /api/chat]
    end

    subgraph Retrieval Pipeline
        Q[Query Analysis & Reformulation]
        
        subgraph Dual Retrieval
            BM25[Sparse Retrieval: BM25]
            DENSE[Dense Retrieval: ChromaDB Vector Search]
        end
        
        FUSION[Hybrid Reciprocal Rank Fusion]
        RERANK[Cross-Encoder Reranking]
        CTX[Context Construction]
    end

    subgraph Generation & Evaluation
        EVAL[Agentic Evaluation]
        LLM[LLM Generation: Gemini]
    end

    UI -->|Submit Query| API
    API -->|Initialize| Q
    
    API -.->|Stream Status Updates| SSE
    
    Q --> BM25
    Q --> DENSE
    
    BM25 --> FUSION
    DENSE --> FUSION
    
    FUSION --> RERANK
    RERANK --> CTX
    CTX --> EVAL
    EVAL -->|Prompt + Context| LLM
    
    LLM -->|Streamed / Final Answer| API
    API -->|Response| UI
```

---

## 4. Frontend Application Structure

The frontend acts as a pure presentation layer. It manages application state, renders markdown, and routes all logic to the backend API service layer.

```mermaid
graph TD
    A[App.jsx] --> API[api.js]
    A --> UI1[Chat Window & MarkdownRenderer]
    A --> UI2[ConversationSidebar]
    A --> UI3[DeveloperDashboard]
    A --> UI4[PipelineProgress]
    
    UI3 --> API
    UI4 --> API
    
    API -->|GET /health| BE_H(Backend Health Check)
    API -->|POST /api/chat| BE_C(Backend Chat)
    API -->|GET /api/dashboard| BE_D(Backend Metrics)
    API -->|SSE /api/pipeline-status| BE_S(Backend Stream)
```

> [!NOTE]
> **Security Posture**: The frontend has exactly zero dependencies on Gemini or Google Cloud credentials. It operates as a thin client relying exclusively on `VITE_API_URL` to securely route traffic to the backend, ensuring zero API keys are ever exposed in the browser.
