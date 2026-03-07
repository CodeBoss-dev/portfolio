import type { Project } from "@/types";

export const projects: Project[] = [
  // --- AI Infrastructure & LLM Integration ---
  {
    id: "latency-annihilator",
    category: "AI Infrastructure & LLM Integration",
    title: "When Every Millisecond Became a Bottleneck",
    summary:
      "Rebuilt retrieval infrastructure from the ground up, achieving 99.96% latency reduction and 2,600-3,100x speedup in cached operations.",
    narrative: `There was a point where the retrieval pipeline had become the silent bottleneck in everything downstream. Queries that should have returned in milliseconds were dragging through multi-second response cycles, compounding delays across every agent and workflow that depended on them.

The problem wasn't any single component — it was the architecture itself. The system had been built for correctness, not speed. So the entire retrieval layer was redesigned around intelligent caching, vector indexing with pre-computed similarity maps, and a streaming response architecture that began delivering results before the full computation finished.

The result was a 99.96% reduction in retrieval latency. Cached operations that previously took seconds now resolved in sub-millisecond timeframes — a 2,600 to 3,100x improvement that fundamentally changed what was possible for every system built on top of it.`,
    metrics: [
      { value: "99.96%", label: "Latency Reduction" },
      { value: "3,100x", label: "Peak Speedup" },
      { value: "<1ms", label: "Cached Response" },
    ],
    technicalDetails: {
      stack: [
        "Python",
        "Redis",
        "FAISS",
        "Vector Embeddings",
        "Streaming APIs",
      ],
      architecture:
        "Multi-tier caching with semantic similarity routing. Hot path serves from in-memory vector indices; warm path uses pre-computed embedding clusters; cold path falls back to full retrieval with automatic promotion.",
      details: [
        "Implemented locality-sensitive hashing for approximate nearest neighbor lookups",
        "Built streaming response pipeline that begins delivery at 15% computation completion",
        "Designed cache invalidation strategy based on semantic drift detection",
        "Pre-computed similarity maps updated asynchronously during low-traffic windows",
      ],
    },
  },
  {
    id: "cost-eliminator",
    category: "AI Infrastructure & LLM Integration",
    title: "The Economics of Intelligence at Scale",
    summary:
      "Reduced LLM token costs by 92-98% through intelligent caching, noise rejection, and semantic deduplication.",
    narrative: `When LLM API costs started scaling linearly with usage, it became clear that raw intelligence wasn't the constraint — efficiency was. Every redundant token, every repeated query, every noisy input that shouldn't have reached the model was burning through budget without adding value.

The approach wasn't to use cheaper models. It was to make the expensive ones dramatically more efficient. A semantic deduplication layer identified when incoming requests were functionally identical to previous ones — not just string matches, but meaning matches. A noise rejection system with 85-95% accuracy filtered out inputs that would produce low-value outputs before they ever reached the model. And an intelligent caching layer stored not just responses, but the reasoning patterns behind them.

Token costs dropped by 92 to 98%. The systems became not just cheaper to run, but smarter about what deserved computational attention in the first place.`,
    metrics: [
      { value: "92-98%", label: "Cost Reduction" },
      { value: "85-95%", label: "Noise Rejection Accuracy" },
      { value: "10x", label: "Throughput per Dollar" },
    ],
    technicalDetails: {
      stack: [
        "Python",
        "Sentence Transformers",
        "Redis",
        "Prompt Compression",
        "Tiered Model Routing",
      ],
      architecture:
        "Three-layer cost optimization: semantic deduplication at ingestion, noise classification before model invocation, and response caching with semantic similarity matching for cache hits.",
      details: [
        "Semantic deduplication using embedding cosine similarity with configurable thresholds",
        "Multi-class noise classifier trained on domain-specific data to reject low-value inputs",
        "Prompt compression reducing token count by 40-60% while preserving semantic content",
        "Tiered routing sending simple queries to smaller models, complex ones to frontier models",
      ],
    },
  },
  {
    id: "agent-accelerator",
    category: "AI Infrastructure & LLM Integration",
    title: "Making Agents Think Once, Not a Thousand Times",
    summary:
      "Improved end-to-end agent efficiency by 1,000-1,500x through shared memory architecture and task decomposition optimization.",
    narrative: `The agents were capable — individually, each one could reason through complex tasks effectively. But collectively, they were doing the same work over and over. Agent A would research a topic, reach a conclusion, and store it locally. Agent B, working on a related task minutes later, would research the same topic from scratch. Multiply that by dozens of agents running concurrently, and the waste was staggering.

The solution was a shared memory architecture — not just a database, but a structured knowledge graph that agents could read from and write to in real time. When one agent learned something, every other agent inherited that knowledge instantly. Combined with a task decomposition optimizer that broke complex goals into non-overlapping subtasks, the entire multi-agent system went from doing redundant work to operating like a coordinated intelligence.

End-to-end efficiency improved by 1,000 to 1,500x. Not because the agents got smarter, but because the system around them stopped wasting their intelligence.`,
    metrics: [
      { value: "1,500x", label: "Peak Efficiency Gain" },
      { value: "0%", label: "Redundant Work" },
      { value: "Real-time", label: "Knowledge Sharing" },
    ],
    technicalDetails: {
      stack: [
        "Python",
        "Neo4j",
        "Redis Streams",
        "Task Decomposition",
        "Knowledge Graphs",
      ],
      architecture:
        "Centralized knowledge graph with event-driven propagation. Task decomposition engine uses dependency analysis to ensure non-overlapping agent assignments. Shared memory uses read-through caching with eventual consistency.",
      details: [
        "Knowledge graph with typed relationships enabling semantic queries across agent discoveries",
        "Redis Streams for real-time event propagation between agent processes",
        "DAG-based task decomposition preventing duplicate subtask assignments",
        "Conflict resolution protocol for simultaneous writes to shared knowledge",
      ],
    },
  },

  // --- AI Automation Systems ---
  {
    id: "workflow-orchestrator",
    category: "AI Automation Systems",
    title: "The Pipeline That Replaced a Team's Busywork",
    summary:
      "An event-driven automation system that eliminated manual data processing bottlenecks entirely.",
    narrative: `There was a team spending most of their week on something that shouldn't have required human attention at all — pulling data from multiple sources, transforming it, checking for anomalies, routing it to the right downstream systems. It was critical work, but it was mechanical. And every time someone made a small mistake in the process, it cascaded.

The system that replaced this was event-driven by design. Data arriving from any source triggered a chain of automated transformations, validations, and routing decisions. Each step was observable, each decision was logged, and the entire pipeline could self-correct when it encountered data that didn't match expected patterns.

What had been a multi-day manual process became something that happened in minutes, with higher accuracy and complete auditability.`,
    metrics: [
      { value: "Minutes", label: "vs. Days" },
      { value: "99.8%", label: "Processing Accuracy" },
      { value: "Full", label: "Audit Trail" },
    ],
    technicalDetails: {
      stack: [
        "Python",
        "Apache Kafka",
        "Celery",
        "PostgreSQL",
        "Data Validation",
      ],
      architecture:
        "Event-sourced pipeline with dead letter queues for anomaly handling. Each transformation step is idempotent and independently deployable. Schema validation at every boundary.",
      details: [
        "Event-sourced architecture ensuring complete replay capability",
        "Adaptive anomaly detection using statistical process control",
        "Self-healing pipeline that auto-retries with exponential backoff",
        "Real-time monitoring dashboard with alerting on processing delays",
      ],
    },
  },
  {
    id: "decision-engine",
    category: "AI Automation Systems",
    title: "Decisions That Used to Wait on a Human",
    summary:
      "A confidence-scored decision engine that handles repetitive judgments while escalating edge cases to human reviewers.",
    narrative: `Some decisions are genuinely complex — they need human judgment, intuition, context that no model fully captures. But most decisions in a workflow aren't like that. They're repetitive, pattern-based, and the right answer is obvious to anyone who's seen it a hundred times before.

The challenge was building a system that could tell the difference. The decision engine assigns a confidence score to every judgment it makes. High-confidence decisions proceed automatically. Low-confidence decisions get routed to a human reviewer with all the relevant context pre-assembled, so the review takes seconds instead of minutes.

The result was a 10x increase in decision throughput, with the humans on the team spending their time on the genuinely difficult cases — the ones where their judgment actually mattered.`,
    metrics: [
      { value: "10x", label: "Decision Throughput" },
      { value: "97%", label: "Auto-Decision Accuracy" },
      { value: "Smart", label: "Human Escalation" },
    ],
    technicalDetails: {
      stack: [
        "Python",
        "Scikit-learn",
        "Claude API",
        "PostgreSQL",
        "React Dashboard",
      ],
      architecture:
        "Ensemble decision pipeline combining rule-based and ML classifiers. Confidence calibration using Platt scaling. Human-in-the-loop feedback automatically retrains the model weekly.",
      details: [
        "Ensemble of gradient-boosted trees and LLM-based reasoning for dual verification",
        "Platt-scaled confidence scores calibrated against actual accuracy rates",
        "Active learning loop where human corrections improve model performance continuously",
        "Context pre-assembly reducing human review time from minutes to seconds",
      ],
    },
  },

  // --- Claude Integration Fluency ---
  {
    id: "structured-compliance",
    category: "Claude Integration Fluency",
    title: "Teaching Claude to Color Inside the Lines",
    summary:
      "Achieved 99.9% structured output compliance by building guardrails, schema enforcement, and intelligent fallback chains.",
    narrative: `Large language models are brilliant at generating text. They're less naturally inclined to generate perfectly structured data — exact JSON schemas, consistent field types, predictable response formats. But production systems don't run on approximate outputs. They need precision.

The work here was about building a layer between Claude and the rest of the system that ensured every output conformed to a defined schema. Not by limiting what Claude could express, but by adding validation, retry logic with targeted correction prompts, and fallback chains that could recover from almost any structural deviation.

The result was 99.9% compliance with structured output schemas. The systems downstream could trust that what arrived from the LLM layer would always be in the format they expected — no exceptions, no special handling needed.`,
    metrics: [
      { value: "99.9%", label: "Schema Compliance" },
      { value: "< 50ms", label: "Validation Overhead" },
      { value: "3-Layer", label: "Fallback Chain" },
    ],
    technicalDetails: {
      stack: [
        "Python",
        "Claude API",
        "Pydantic",
        "JSON Schema",
        "Retry Middleware",
      ],
      architecture:
        "Three-layer validation: pre-prompt schema injection, post-response Pydantic validation, and corrective re-prompting with the specific validation error message for self-healing.",
      details: [
        "Schema-aware prompt templates that embed output format requirements",
        "Pydantic models with custom validators for domain-specific constraints",
        "Corrective re-prompting that feeds validation errors back for targeted fixes",
        "Fallback chain: primary model -> retry with correction -> secondary model -> graceful degradation",
      ],
    },
  },
  {
    id: "conversation-architect",
    category: "Claude Integration Fluency",
    title: "Conversations That Remember Everything",
    summary:
      "Built multi-turn conversation systems that maintain coherence and context across 100+ turn interactions.",
    narrative: `Most chatbot interactions are short — a few exchanges and done. But some of the most valuable applications require long, sustained conversations where context from twenty exchanges ago still matters. The challenge isn't the model's intelligence — it's keeping it informed about what already happened without exceeding context limits.

The solution was a sliding window with semantic summarization. Recent exchanges stay in full detail. Older exchanges get compressed into dense summaries that preserve the essential facts and decisions while dramatically reducing token count. The summarization itself is context-aware — it knows which details the current conversation trajectory is likely to need.

The result: coherent, contextual conversations that span 100+ turns without losing track of important details or contradicting earlier statements.`,
    metrics: [
      { value: "100+", label: "Coherent Turns" },
      { value: "85%", label: "Token Reduction" },
      { value: "Zero", label: "Context Contradictions" },
    ],
    technicalDetails: {
      stack: [
        "Python",
        "Claude API",
        "Embedding Models",
        "Semantic Compression",
        "Redis",
      ],
      architecture:
        "Sliding window with three tiers: full context (last 5 turns), semantic summaries (turns 6-50), and key-fact extraction (turns 50+). Retrieval-augmented recall for surfacing relevant older context when needed.",
      details: [
        "Importance-weighted summarization preserving critical facts and decisions",
        "Contradiction detection comparing new statements against summarized history",
        "Dynamic context window adjustment based on conversation complexity",
        "Key-fact extraction with entity resolution across conversation history",
      ],
    },
  },

  // --- RAG Systems ---
  {
    id: "hybrid-retrieval",
    category: "RAG Systems",
    title: "Finding the Right Answer, Not Just Any Answer",
    summary:
      "Combined vector search with traditional retrieval and neural re-ranking for a 40% improvement in retrieval relevance.",
    narrative: `The first version of the retrieval system worked — technically. It found documents that were related to the query. But "related" and "useful" aren't the same thing. Users were getting results that were topically adjacent but didn't actually answer their question. The relevance gap was subtle but costly.

The fix wasn't choosing between vector search and traditional keyword matching. It was using both. Vector embeddings excel at understanding meaning and intent. BM25-style keyword matching excels at finding specific terms and phrases. A neural re-ranker sits on top, scoring the combined results for actual relevance to the original query.

The hybrid approach improved retrieval relevance by 40% — which in practice meant the difference between users finding what they needed immediately and spending minutes scrolling through almost-right results.`,
    metrics: [
      { value: "40%", label: "Relevance Improvement" },
      { value: "Hybrid", label: "Search Architecture" },
      { value: "< 200ms", label: "Query Response" },
    ],
    technicalDetails: {
      stack: [
        "Python",
        "FAISS",
        "Elasticsearch",
        "Cross-Encoder Re-ranking",
        "Sentence Transformers",
      ],
      architecture:
        "Parallel vector + BM25 retrieval with reciprocal rank fusion. Cross-encoder re-ranker scores the merged top-k candidates. Chunk optimization with overlapping windows and metadata enrichment.",
      details: [
        "Reciprocal rank fusion combining vector and BM25 result sets",
        "Cross-encoder re-ranker fine-tuned on domain-specific relevance judgments",
        "Overlapping chunk strategy with 20% overlap preventing information loss at boundaries",
        "Query expansion using LLM-generated alternative phrasings for recall improvement",
      ],
    },
  },
  {
    id: "living-index",
    category: "RAG Systems",
    title: "Knowledge That Never Goes Stale",
    summary:
      "A self-updating knowledge index with incremental re-indexing and change detection for always-current retrieval.",
    narrative: `Static knowledge bases have an expiration date — the moment a source document changes, every embedding generated from it becomes slightly wrong. In fast-moving domains, "slightly wrong" compounds quickly. Users start getting answers based on outdated information, and the system's credibility erodes.

The solution was making the index alive. A change detection system monitors source documents and identifies not just what changed, but what changed meaningfully. Minor formatting tweaks don't trigger re-indexing. Substantive content changes do — and only the affected chunks get re-embedded, not the entire corpus.

The result is a knowledge base that's always current, updating itself continuously without the computational cost of full re-indexing. Users can trust that what the system tells them reflects the latest information available.`,
    metrics: [
      { value: "Always", label: "Current" },
      { value: "95%", label: "Index Cost Savings" },
      { value: "< 5min", label: "Update Propagation" },
    ],
    technicalDetails: {
      stack: [
        "Python",
        "Document Diffing",
        "Incremental Embeddings",
        "Webhook Triggers",
        "PostgreSQL",
      ],
      architecture:
        "Event-driven incremental indexing. Document change detection using content hashing with semantic diff analysis. Only meaningfully changed chunks are re-embedded and swapped in the vector store atomically.",
      details: [
        "Content hashing at chunk level for efficient change detection",
        "Semantic diff analysis distinguishing meaningful changes from formatting",
        "Atomic index updates preventing queries from hitting partially-updated state",
        "Version-aware retrieval supporting temporal queries against historical state",
      ],
    },
  },
];

export const categories = [
  "AI Infrastructure & LLM Integration",
  "AI Automation Systems",
  "Claude Integration Fluency",
  "RAG Systems",
] as const;
