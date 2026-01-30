'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectBySlug } from '@/data/projects';
import { usePersonality } from '@/hooks/usePersonality';

interface ProjectDetailProps {
    slug: string;
}

export const ProjectDetail = ({ slug }: ProjectDetailProps) => {
    const project = getProjectBySlug(slug);
    const { theme, mode, isExecutive } = usePersonality();

    if (!project) {
        notFound();
    }

    return (
        <div className="pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-8"
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Project Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-12"
                >
                    <span
                        className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-full mb-4 bg-primary"
                    >
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                        {project.title}
                    </h1>

                    {/* Hero Image */}
                    {project.heroImage && (
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
                            <Image
                                src={project.heroImage}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
                            />
                        </div>
                    )}

                    {/* Key Metrics Banner */}
                    <div
                        className="p-6 rounded-xl bg-primary/10"
                    >
                        <p
                            className="text-xl font-bold text-primary"
                        >
                            {project.outcomeMetrics}
                        </p>
                    </div>
                </motion.header>

                {/* Case Study Content */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: theme.animationSpeed, delay: 0.1 }}
                    className="space-y-12"
                >
                    {/* Problem Section */}
                    <section>
                        <h2
                            className="text-2xl font-bold mb-4 flex items-center gap-3 text-primary"
                        >
                            <span className="w-8 h-8 rounded-full bg-current flex items-center justify-center text-white text-sm">
                                1
                            </span>
                            {isExecutive ? 'The Challenge' : 'Problem Statement'}
                        </h2>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {project.problem}
                        </p>
                    </section>

                    {/* Process Section */}
                    <section>
                        <h2
                            className="text-2xl font-bold mb-4 flex items-center gap-3 text-primary"
                        >
                            <span className="w-8 h-8 rounded-full bg-current flex items-center justify-center text-white text-sm">
                                2
                            </span>
                            {isExecutive ? 'The Approach' : 'Technical Process'}
                        </h2>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                            {project.process}
                        </p>

                        {/* Tech Stack - Only in Technical Mode */}
                        {mode === 'TECHNICAL' && (
                            <div className="mt-6">
                                <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                                    Technology Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Technical Deep Dive - Only in Technical Mode */}
                    {mode === 'TECHNICAL' && project.highlightSnippet && (
                        <section>
                            <h2
                                className="text-2xl font-bold mb-4 flex items-center gap-3 text-primary"
                            >
                                <span className="w-8 h-8 rounded-full bg-current flex items-center justify-center text-white text-sm">
                                    ↓
                                </span>
                                Code Highlight
                            </h2>
                            <div className="bg-neutral-900 rounded-xl overflow-hidden">
                                <div className="flex items-center gap-2 px-4 py-3 bg-neutral-800">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <pre className="p-6 overflow-x-auto">
                                    <code className="text-sm text-green-400 font-mono">
                                        {project.highlightSnippet}
                                    </code>
                                </pre>
                            </div>
                        </section>
                    )}

                    {/* Result Section */}
                    <section>
                        <h2
                            className="text-2xl font-bold mb-4 flex items-center gap-3 text-primary"
                        >
                            <span className="w-8 h-8 rounded-full bg-current flex items-center justify-center text-white text-sm">
                                3
                            </span>
                            {isExecutive ? 'The Impact' : 'Results & Outcomes'}
                        </h2>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {project.result}
                        </p>
                    </section>
                </motion.article>

                {/* Navigation to other projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: theme.animationSpeed, delay: 0.2 }}
                    className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800"
                >
                    <div className="flex justify-between items-center">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105 bg-primary"
                        >
                            View All Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 text-neutral-900 dark:text-white border-neutral-300 dark:border-neutral-700 transition-colors hover:border-neutral-400 dark:hover:border-neutral-600"
                        >
                            Start a Project
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
