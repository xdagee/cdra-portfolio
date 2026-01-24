'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { usePersonality } from '@/hooks/usePersonality';

export default function ProjectsPage() {
    const { theme, isExecutive } = usePersonality();

    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <div
                            className="w-12 h-0.5"
                            style={{ backgroundColor: theme.primaryColor }}
                        />
                        <span
                            className="text-sm font-semibold tracking-wider uppercase"
                            style={{ color: theme.primaryColor }}
                        >
                            Portfolio
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
                        {isExecutive ? 'Results & Impact' : 'Technical Case Studies'}
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
                        {isExecutive
                            ? 'Measurable outcomes from strategic projects. Each engagement focused on delivering clear ROI.'
                            : 'Deep dives into architecture decisions, technical challenges, and solutions. Code that scales.'}
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Empty State (for when filtering returns no results) */}
                {projects.length === 0 && (
                    <div className="text-center py-24">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-900 mb-6">
                            <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                            No projects found
                        </h3>
                        <p className="text-neutral-500 max-w-md mx-auto mb-8">
                            We couldn't find any projects matching your criteria. Try adjusting your filters or reach out to discuss a new collaboration.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
                            style={{ backgroundColor: theme.primaryColor }}
                        >
                            Start a Project
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
