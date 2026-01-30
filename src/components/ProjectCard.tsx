'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePersonality } from '@/hooks/usePersonality';
import { Project } from '@/types/personality';

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
    const { mode, theme } = usePersonality();

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: theme.animationSpeed, delay: index * 0.1 }}
            className="group relative"
        >
            <Link href={project.linkOverride || `/projects/${project.slug}`}>
                <div
                    className="relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                    {/* Content */}
                    <div className={`p-6 ${theme.layoutDensity === 'compact' ? 'space-y-3' : 'space-y-4'}`}>
                        {/* Category Eyebrow */}
                        <span
                            className="text-xs font-semibold uppercase tracking-wider text-primary"
                        >
                            {project.category}
                        </span>

                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-inherit transition-colors heading-display">
                            {project.title}
                        </h3>

                        {/* Dynamic Content based on Personality Mode */}
                        {mode === 'EXECUTIVE' ? (
                            <div className="space-y-3">
                                <p className="font-semibold text-neutral-900 dark:text-white">
                                    {project.outcomeMetrics}
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-400 line-clamp-2">
                                    {project.executiveSummary}
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 4 && (
                                        <span className="px-2 py-1 text-xs font-mono text-neutral-500">
                                            +{project.techStack.length - 4} more
                                        </span>
                                    )}
                                </div>
                                <p className="text-neutral-700 dark:text-neutral-300 text-sm line-clamp-2">
                                    {project.technicalChallenge}
                                </p>

                                {/* Code Snippet Preview */}
                                {theme.showCodeSnippets && project.highlightSnippet && (
                                    <div className="mt-3">
                                        <pre className="text-xs bg-neutral-900 text-green-400 p-3 rounded-lg overflow-hidden">
                                            <code className="line-clamp-3">
                                                {project.highlightSnippet.slice(0, 150)}...
                                            </code>
                                        </pre>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* View Project Link */}
                        <div className="flex items-center gap-2 pt-2 text-sm font-medium text-primary">
                            <span>View {mode === 'EXECUTIVE' ? 'Results' : 'Details'}</span>
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
};
