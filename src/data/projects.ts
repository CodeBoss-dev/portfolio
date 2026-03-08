import type { Project } from "@/types";

export const projects: Project[] = [
  // --- AI Infrastructure & LLM Integration ---
  {
    id: "latency-annihilator",
    category: "AI Infrastructure & LLM Integration",
    title: "When Every Millisecond Became a Bottleneck",
    summary:
      "The system that found and delivered information was too slow -- it was holding everything else back. After a complete rebuild, response times went from seconds to near-instant, a 3,100x improvement.",
    narrative: `There came a point where the system responsible for finding and delivering information had become the weakest link. Everything downstream depended on it, and it was taking seconds to return results that should have been available instantly. The delays compounded across every process that relied on it.

The problem was not any single piece -- it was the way the whole system was designed. It had been built to be accurate, not fast. So the entire approach was redesigned around smarter ways of storing and recalling information, so that frequently-needed answers were ready before they were even asked for, and results started arriving before the full search was complete.

The result was a 99.96% reduction in wait times. Operations that previously took seconds now resolved almost instantly -- a 2,600 to 3,100x improvement that fundamentally changed what was possible for every system built on top of it.`,
    highlights: [
      "99.96% reduction in wait times",
      "2,600 to 3,100x improvement",
      "weakest link",
      "seconds to near-instant",
    ],
    metrics: [
      { value: "99.96%", label: "Faster" },
      { value: "3,100x", label: "Speed Improvement" },
      { value: "<1ms", label: "Response Time" },
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
      "Running AI at scale was getting expensive fast. By teaching the system to avoid unnecessary work -- filtering out low-value requests, remembering previous answers, and cutting out repetition -- costs dropped by 92-98%.",
    narrative: `When the cost of running AI started growing in lockstep with usage, it became clear that the real problem was not the AI itself -- it was waste. Every repeated question, every low-quality input, every request that was essentially identical to one already answered was burning through budget without adding value.

The solution was not to use cheaper AI. It was to make the system dramatically smarter about what work was actually worth doing. A layer was built that could recognize when a new request was essentially the same as one already answered -- not just identical wording, but the same meaning. Another layer filtered out inputs that were unlikely to produce useful results before they ever reached the AI. And a memory system stored not just answers, but the thinking behind them, so similar future questions could be handled instantly.

Costs dropped by 92 to 98%. The system became not just cheaper to run, but more thoughtful about what deserved its attention in the first place.`,
    highlights: [
      "92 to 98%",
      "not the AI itself -- it was waste",
      "not just cheaper to run",
      "85-95% accuracy",
    ],
    metrics: [
      { value: "92-98%", label: "Cost Savings" },
      { value: "85-95%", label: "Junk Filtered Out" },
      { value: "10x", label: "More Output per Dollar" },
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
      "Dozens of AI agents were doing the same research over and over, unaware of each other's work. By giving them a shared memory and smarter task assignments, the whole system became 1,500x more efficient.",
    narrative: `The AI agents were individually capable -- each one could reason through complex tasks effectively. But collectively, they were doing the same work over and over. One agent would research a topic and reach a conclusion. Another agent, working on a related task minutes later, would research the exact same topic from scratch. Multiply that by dozens of agents running at the same time, and the waste was staggering.

The solution was to give the agents a shared memory -- a central place where, when one agent learned something, every other agent could instantly access that knowledge. Combined with a smarter system for dividing up work so no two agents were ever assigned the same task, the whole operation went from wasteful repetition to coordinated teamwork.

Efficiency improved by 1,000 to 1,500x. Not because the agents got smarter, but because the system around them stopped wasting their intelligence.`,
    highlights: [
      "1,000 to 1,500x",
      "same work over and over",
      "shared memory",
      "coordinated teamwork",
    ],
    metrics: [
      { value: "1,500x", label: "Efficiency Improvement" },
      { value: "0%", label: "Repeated Work" },
      { value: "Real-time", label: "Shared Learning" },
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
      "A team was spending days on repetitive data work that should have taken minutes. This system automated the entire process -- pulling, checking, and routing data -- with higher accuracy and a full record of every step.",
    narrative: `There was a team spending most of their week on something that shouldn't have required human attention at all -- pulling data from multiple sources, transforming it, checking for problems, and routing it to the right place. It was critical work, but it was mechanical. And every time someone made a small mistake, it cascaded through the whole process.

The system that replaced this was designed to react automatically. Data arriving from any source triggered a chain of automated checks, transformations, and routing decisions. Each step was visible, each decision was logged, and the system could self-correct when it encountered data that didn't match expected patterns.

What had been a multi-day manual process became something that happened in minutes, with higher accuracy and a complete record of every action taken.`,
    highlights: [
      "happened in minutes",
      "multi-day manual process",
      "higher accuracy",
      "complete record",
    ],
    metrics: [
      { value: "Minutes", label: "Instead of Days" },
      { value: "99.8%", label: "Accuracy" },
      { value: "Full", label: "Traceability" },
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
      "Most routine decisions don't need a human. This system handles the obvious ones automatically and sends only the tricky cases to a person -- with all the context they need to decide in seconds.",
    narrative: `Some decisions are genuinely complex -- they need human judgment, intuition, context that no system fully captures. But most decisions in a workflow aren't like that. They're repetitive, pattern-based, and the right answer is obvious to anyone who's seen it a hundred times before.

The challenge was building a system that could tell the difference. It assigns a confidence level to every decision it makes. When it's confident, it proceeds automatically. When it's not sure, it routes the decision to a human reviewer with all the relevant context pre-assembled, so the review takes seconds instead of minutes.

The result was a 10x increase in how many decisions could be made per day, with the humans on the team spending their time on the genuinely difficult cases -- the ones where their judgment actually mattered.`,
    highlights: [
      "10x increase",
      "tell the difference",
      "seconds instead of minutes",
      "judgment actually mattered",
    ],
    metrics: [
      { value: "10x", label: "Faster Decisions" },
      { value: "97%", label: "Automated Accuracy" },
      { value: "Smart", label: "Human When It Matters" },
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
      "AI is great at generating text, but production systems need data in exact formats. This system ensures Claude's output always arrives in the right structure -- 99.9% of the time, without any manual cleanup.",
    narrative: `AI is brilliant at generating text. It's less naturally inclined to produce perfectly structured data -- exact formats, consistent fields, predictable layouts. But the systems that depend on AI output don't work with "close enough." They need precision.

The work here was about building a safety net between Claude and the rest of the system. Every output is checked against a defined format. If something doesn't match, the system automatically asks Claude to fix the specific issue. And if that still doesn't work, a series of fallbacks kick in to ensure the output always arrives correctly.

The result was 99.9% format compliance. The systems downstream could trust that what arrived from the AI would always be exactly what they expected -- no exceptions, no manual cleanup needed.`,
    highlights: [
      "99.9% format compliance",
      "safety net",
      "no exceptions",
      "no manual cleanup needed",
    ],
    metrics: [
      { value: "99.9%", label: "Format Accuracy" },
      { value: "< 50ms", label: "Check Time" },
      { value: "3-Layer", label: "Safety Net Depth" },
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
      "Most AI conversations lose context after a few exchanges. This system maintains coherent, accurate conversations across 100+ back-and-forth turns without forgetting or contradicting itself.",
    narrative: `Most AI conversations are short -- a few exchanges and done. But some of the most valuable applications require long, sustained conversations where something said twenty exchanges ago still matters. The challenge isn't the AI's intelligence -- it's keeping it informed about what already happened without running into memory limits.

The solution was a smart memory system. Recent exchanges stay in full detail. Older exchanges get compressed into concise summaries that preserve the essential facts and decisions while using far less memory. The compression is context-aware -- it knows which details the current conversation is likely to need.

The result: coherent, contextual conversations that span 100+ turns without losing track of important details or contradicting earlier statements.`,
    highlights: [
      "100+ turns",
      "without forgetting",
      "without contradicting",
      "smart memory system",
    ],
    metrics: [
      { value: "100+", label: "Turns Without Forgetting" },
      { value: "85%", label: "Memory Savings" },
      { value: "Zero", label: "Contradictions" },
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
      "The search system was returning related results, but not the right ones. By combining two different search approaches and adding a smart ranking layer, the right answer started appearing first -- a 40% improvement.",
    narrative: `The first version of the search system worked -- technically. It found documents that were related to the question. But "related" and "useful" aren't the same thing. People were getting results that were in the right neighborhood but didn't actually answer their question. The gap was subtle but costly.

The fix wasn't choosing between two different search methods. It was using both. One approach excels at understanding meaning and intent. The other excels at finding specific words and phrases. A smart ranking layer sits on top, scoring the combined results for how well they actually answer the original question.

The combined approach improved search accuracy by 40% -- which in practice meant the difference between finding what you need immediately and spending minutes scrolling through almost-right results.`,
    highlights: [
      "40%",
      "right neighborhood but didn't actually answer",
      "smart ranking layer",
      "finding what you need immediately",
    ],
    metrics: [
      { value: "40%", label: "Better Search Results" },
      { value: "Hybrid", label: "Dual Search Approach" },
      { value: "< 200ms", label: "Search Speed" },
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
      "Knowledge bases go out of date the moment their source material changes. This system watches for meaningful changes and updates itself automatically -- staying current without the cost of rebuilding from scratch.",
    narrative: `Static knowledge bases have an expiration date -- the moment a source document changes, the information the system has stored about it becomes slightly wrong. In fast-moving fields, "slightly wrong" compounds quickly. People start getting answers based on outdated information, and trust erodes.

The solution was making the knowledge base alive. A monitoring system watches source documents and identifies not just what changed, but whether the change actually matters. Minor formatting edits don't trigger an update. Meaningful content changes do -- and only the affected portions get refreshed, not the entire collection.

The result is a knowledge base that's always current, updating itself continuously without the cost of starting over. People can trust that what the system tells them reflects the latest information available.`,
    highlights: [
      "always current",
      "expiration date",
      "whether the change actually matters",
      "cost of starting over",
    ],
    metrics: [
      { value: "Always", label: "Up to Date" },
      { value: "95%", label: "Update Cost Saved" },
      { value: "< 5min", label: "Time to Reflect Changes" },
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
