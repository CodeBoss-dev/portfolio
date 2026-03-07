import type { ResearchPaper } from "@/types";

export const researchPapers: ResearchPaper[] = [
  {
    id: "dynamic-animations-ecommerce",
    title:
      "Enhancing User Engagement in E-commerce through Dynamic Animations",
    abstract:
      "Digital commerce has moved beyond static product listings into experiences that guide, persuade, and delight. This research explored how carefully designed animations — not gratuitous visual effects, but intentional motion design — influence user behavior in e-commerce environments. The study examined scroll-triggered product reveals, micro-interactions on add-to-cart actions, and transition animations between browsing and checkout flows.",
    insights: [
      "Purposeful animations increased user engagement metrics by 23% compared to static equivalents, but only when tied to meaningful state changes — animations for decoration alone showed no improvement.",
      "Scroll-triggered product reveals created a sense of discovery that kept users browsing 35% longer, suggesting that how content appears matters almost as much as what the content is.",
      "Transition animations between pages reduced perceived loading time by 40%, even when actual load times were identical — the feeling of continuity mattered more than raw speed.",
      "There was a clear threshold: beyond three concurrent animations, user attention fragmented and engagement dropped. Restraint proved more effective than spectacle.",
    ],
    significance:
      "The research demonstrates that animation in digital experiences isn't about making things look impressive — it's about making interactions feel natural and intuitive. The most effective animations were the ones users didn't consciously notice but would immediately miss if removed. This has direct implications for how interfaces should be designed: motion as a communication tool, not a decoration.",
  },
];
