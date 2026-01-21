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
                        <p className="text-neutral-500">No projects found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
