import { Project } from '@/types/personality';

export const projects: Project[] = [
  {
    id: '1',
    title: 'rawsrc',
    slug: 'rawsrc-commodities-marketplace',
    category: 'UX Design & Development',
    executiveSummary: 'Designed a commodities marketplace that bridges the gap between buyers and suppliers, achieving AAA+ accessibility rating and 100% CTA conversion rate.',
    outcomeMetrics: '80% user agreeability, 100% CTA conversion, AAA+ accessibility',
    techStack: ['Figma', 'UX Research', 'Usability Testing', 'Web AIM', 'Prototyping'],
    technicalChallenge: 'Solving mistrust and disconnection between buyers and suppliers while ensuring equal access to an open market with transparent, fair trading.',
    highlightSnippet: `// User Research Insights
const problemSpace = {
  mistrust: "buyers & suppliers disconnected",
  accessibility: "equal access to open market",
  fairness: "trade on fair deal required",
};

// Solution Impact
const results = {
  ctaConversion: "100%", // POST button
  accessibilityScore: "AAA+", // WebAIM
  userAgreeability: "80%",
};`,
    problem: 'The commodities market suffered from mistrust between buyers and suppliers, disconnection in the supply chain, and unequal access to fair trading platforms. Users needed a transparent marketplace where they could trade on fair deals.',
    process: 'Conducted extensive discovery research to understand user pain points. Created low-fidelity wireframes for landing page, user registration, and produce pages. Iterated through high-fidelity prototypes with focus on navigation, buttons, colors, and accessibility. Ran usability tests achieving 80% agreeability and maneuverability scores.',
    result: 'Delivered a marketplace design with AAA+ accessibility rating using Web AIM\'s color contrast tool. Increased CTA (POST button) conversion rate to 100% by making it standalone and clearer. Users can now successfully register, navigate, and post products with confidence.',
    heroImage: '/images/projects/placeholder-hero.png',
    images: ['/images/projects/rawsrc-1.jpg', '/images/projects/rawsrc-2.jpg'],
  },
  {
    id: '2',
    title: 'payall',
    slug: 'payall-payment-app',
    category: 'Mobile App Design',
    executiveSummary: 'Designed a payment app for local communities that makes users feel relaxed and secured, eliminating the need for physical wallets.',
    outcomeMetrics: 'One app for all payments, 3 core principles, User-centered design',
    techStack: ['Flutter', 'Figma', 'UX Research', 'Mobile Design', 'Prototyping'],
    technicalChallenge: 'Creating a unified payment experience that handles time constraints, convenience needs, multiple app consolidation, and removes bottlenecks in local shop transactions.',
    highlightSnippet: `// Core User Stories
const userJourney = [
  "Find a Shop nearby",
  "Identify shop proximity",
  "Find an Item",
  "Compare prices",
  "Pay for Item",
];

// Design Principles
const principles = {
  efficiency: "quickly pay for items",
  convenience: "pay at any local shop",
  lessHustle: "one app to rule them all",
};`,
    problem: 'Users struggled with time constraints, inconvenience of multiple payment apps, and bottlenecks when paying for items at local shops. They needed a single solution that worked across all local community shops.',
    process: 'Brainstormed and ideated on MVP focusing on key user stories: finding nearby shops, identifying proximity, finding items, comparing prices, and making payments. Created wireframes for nearby screen, login/register, add card, locate shop, find item, compare prices, and payment flows. Conducted several iterations and usability testing.',
    result: 'Created a payment app design built on three core principles: Efficiency, Convenience, and Less Hustle. Users reported feeling "relaxed and secured" - with their phone, they\'re covered without needing a physical wallet. Development will proceed using Flutter for web and mobile (Android & iOS).',
    heroImage: '/images/projects/placeholder-hero.png',
    images: ['/images/projects/payall-1.jpg', '/images/projects/payall-2.jpg'],
  },
  {
    id: '3',
    title: 'WENOTEK Training Platform',
    slug: 'wenotek-training-platform',
    category: 'Software Engineering',
    executiveSummary: 'Led software development and training initiatives at WENOTEK, building enterprise solutions and mentoring the next generation of developers.',
    outcomeMetrics: 'Enterprise development, Training programs, Technical writing',
    techStack: ['JavaScript', 'PHP', 'Python', 'Java', 'Database Management', 'CI/CD'],
    technicalChallenge: 'Building scalable enterprise solutions while simultaneously developing training materials and mentoring junior developers.',
    highlightSnippet: `// Tech Stack Expertise
const skills = {
  languages: ["JavaScript", "PHP", "Python", "Java", "Dart"],
  web: ["HTML", "CSS", "Modern Frameworks"],
  tools: ["DBMS", "VCS", "IDEs", "CAD", "CI Tools"],
  platforms: ["Low-code", "Collaborative Tools"],
};`,
    problem: 'Organizations needed experienced software engineers who could both build enterprise solutions and transfer knowledge to growing teams.',
    process: 'Served as Software Engineer at WENOTEK, focusing on three pillars: Training (developing curriculum and mentoring), Development (building enterprise applications), and Writing (technical documentation and knowledge sharing).',
    result: 'Contributed to WENOTEK\'s growth as a technology partner, delivered enterprise software solutions, and established training programs that upskilled team members in modern development practices.',
    heroImage: '/images/projects/placeholder-hero.png',
    images: ['/images/projects/wenotek-1.jpg', '/images/projects/wenotek-2.jpg'],
  },
  {
    id: '4',
    title: 'AITI-KACE Research & Development',
    slug: 'aiti-kace-rd',
    category: 'Research & Development',
    executiveSummary: 'Contributed to national technology advancement at AITI-KACE through training, development, and research initiatives.',
    outcomeMetrics: 'National impact, Research-driven development, Technology training',
    techStack: ['Systems Analysis', 'Information Systems', 'Research Methods', 'Database Systems', 'Web Development'],
    technicalChallenge: 'Balancing research initiatives with practical development work while contributing to Ghana\'s technology ecosystem growth.',
    highlightSnippet: `// AITI-KACE Focus Areas
const initiatives = {
  training: "Technology capacity building",
  development: "National software solutions",
  research: "Innovation and R&D",
};

// Impact Areas
const ecosystem = [
  "STEMAIDE Africa",
  "IoT Network Hub Africa",
  "Technology advancement",
];`,
    problem: 'Ghana\'s technology sector needed skilled professionals and innovative solutions to drive digital transformation and national development.',
    process: 'Worked as Software Developer at AITI-KACE (Ghana\'s premier technology institute), focusing on Training (building local capacity), Development (creating impactful software solutions), and Research (driving innovation through R&D).',
    result: 'Contributed to national technology initiatives including STEMAIDE Africa and IoT Network Hub Africa. Helped build Ghana\'s technology capacity through training programs and research-driven development.',
    heroImage: '/images/projects/placeholder-hero.png',
    images: ['/images/projects/aiti-kace-1.jpg', '/images/projects/aiti-kace-2.jpg'],
  },
  {
    id: '5',
    title: 'Identity Design Lab',
    slug: 'identity-design-lab',
    linkOverride: '/design-lab',
    category: 'Brand Identity',
    executiveSummary: 'Developed a comprehensive personal branding system based on the "Creative Directing Reformer" psychometric profile, exploring 3 distinct visual philosophies.',
    outcomeMetrics: '3 Design concepts, Psychometric alignment, Interactive showcase',
    techStack: ['SVG', 'React', 'Design Systems', 'Typography', 'Geometry'],
    technicalChallenge: 'Translating abstract personality traits—Structure, Clarity, and Digital Architecture—into programmed visual systems using raw SVG and CSS.',
    highlightSnippet: `// Concept 01: Structural Reformer
<svg viewBox="0 0 100 100">
  {/* The shared vertical stroke implies efficiency */}
  <rect x="25" y="20" width="10" height="60" />
  {/* Interlocking systems */}
  <path d="M35 20 H55 A15 15 0 0 1 55 50..." />
  {/* The Reformer's precise adjustment */}
  <circle cx="85" cy="80" r="5" fill={theme.primary} />
</svg>`,
    problem: 'Needed a personal brand identity that accurately reflected the dual nature of an Executive (Results/Order) and Technical (Code/Systems) professional.',
    process: 'Established a "Design Lab" to iterate on three core philosophies: The Structural Reformer (Order), Absolute Clarity (Precision), and The Digital Architect (Code). Each concept was programmed as a scalable vector system.',
    result: 'Selected "Absolute Clarity" (Swiss Style) as the primary identity for its timeless confidence and unpretentious delivery, perfectly aligning with the "Steve Jobs" aesthetic.',
    heroImage: '/images/projects/placeholder-hero.png',
    images: [],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getAllProjectSlugs = (): string[] => {
  return projects.map((project) => project.slug);
};
