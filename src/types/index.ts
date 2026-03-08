export interface Project {
  id: string;
  category: string;
  title: string;
  summary: string;
  narrative: string;
  highlights?: string[];
  metrics: Metric[];
  technicalDetails: TechnicalDetails;
}

export interface Metric {
  value: string;
  label: string;
}

export interface TechnicalDetails {
  stack: string[];
  architecture: string;
  details: string[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  insights: string[];
  significance: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  themes: string[];
}

export interface CyberProject {
  id: string;
  title: string;
  narrative: string;
  metrics: Metric[];
  technicalDetails: TechnicalDetails;
}
