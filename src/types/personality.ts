export type PersonalityMode = 'EXECUTIVE' | 'TECHNICAL';

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  layoutDensity: 'compact' | 'comfortable';
  animationSpeed: number;
  showCodeSnippets: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  executiveSummary: string;
  outcomeMetrics: string;
  techStack: string[];
  technicalChallenge: string;
  highlightSnippet?: string;
  problem: string;
  process: string;
  result: string;
  heroImage: string;
  images: string[];
  linkOverride?: string;
}

export interface PersonalityState {
  mode: PersonalityMode;
  theme: ThemeConfig;
  toggleMode: () => void;
}
