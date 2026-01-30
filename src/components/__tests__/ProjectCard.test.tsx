import { render, screen } from '@testing-library/react';
import { ProjectCard } from '../ProjectCard';
import { Project } from '@/types/personality';
import { usePersonality } from '@/hooks/usePersonality';

// Mock the hook
jest.mock('@/hooks/usePersonality', () => ({
    usePersonality: jest.fn(),
}));

const mockUsePersonality = usePersonality as jest.Mock;

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        article: ({ children, className }: any) => <article className={className}>{children}</article>,
        div: ({ children, className }: any) => <div className={className}>{children}</div>,
    },
}));

// Mock Next.js Link
jest.mock('next/link', () => {
    return ({ children, href }: { children: React.ReactNode; href: string }) => {
        return <a href={href}>{children}</a>;
    };
});

// Mock project data
const mockProject: Project = {
    id: '1',
    title: 'Test Project',
    slug: 'test-project',
    category: 'Test Category',
    executiveSummary: 'Executive Summary Content',
    outcomeMetrics: 'Outcome Metrics Content',
    techStack: ['React', 'TypeScript'],
    technicalChallenge: 'Technical Challenge Content',
    highlightSnippet: 'const test = true;',
    problem: 'Problem Content',
    process: 'Process Content',
    result: 'Result Content',
    heroImage: '/images/projects/test.jpg',
    images: [],
};

describe('ProjectCard Component', () => {
    const defaultTheme = {
        primaryColor: '#DC2626',
        secondaryColor: '#B91C1C',
        layoutDensity: 'comfortable',
        animationSpeed: 0.5,
        showCodeSnippets: false,
    };

    beforeEach(() => {
        mockUsePersonality.mockReturnValue({
            mode: 'EXECUTIVE',
            theme: defaultTheme,
            isExecutive: true,
            isTechnical: false,
        });
    });

    it('renders project title and category', () => {
        render(<ProjectCard project={mockProject} />);
        expect(screen.getByText('Test Project')).toBeInTheDocument();
        expect(screen.getByText('Test Category')).toBeInTheDocument();
    });

    it('renders executive content in EXECUTIVE mode', () => {
        render(<ProjectCard project={mockProject} />);
        expect(screen.getByText('Executive Summary Content')).toBeInTheDocument();
        expect(screen.getByText('Outcome Metrics Content')).toBeInTheDocument();
        expect(screen.queryByText('Technical Challenge Content')).not.toBeInTheDocument();
    });

    it('renders technical content in TECHNICAL mode', () => {
        mockUsePersonality.mockReturnValue({
            mode: 'TECHNICAL',
            theme: { ...defaultTheme, showCodeSnippets: true },
            isExecutive: false,
            isTechnical: true,
        });

        render(<ProjectCard project={mockProject} />);
        expect(screen.queryByText('Executive Summary Content')).not.toBeInTheDocument();
        expect(screen.getByText('Technical Challenge Content')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
    });
});
