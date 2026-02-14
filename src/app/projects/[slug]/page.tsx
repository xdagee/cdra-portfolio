import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/ProjectDetail';
import { getProjectBySlug, projects } from '@/data/projects';

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: project.title,
        description: project.executiveSummary,
        openGraph: {
            title: project.title,
            description: project.executiveSummary,
            type: 'article',
        },
    };
}

// Generate static params for all projects
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

import { codeToHtml } from 'shiki';

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    let highlightedCodeHtml = undefined;
    if (project.highlightSnippet) {
        highlightedCodeHtml = await codeToHtml(project.highlightSnippet, {
            lang: 'typescript', // default to TS, or add lang to project type
            theme: 'github-dark',
        });
    }

    return <ProjectDetail slug={slug} highlightedCodeHtml={highlightedCodeHtml} />;
}
