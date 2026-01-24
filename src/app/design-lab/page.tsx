'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePersonality } from '@/hooks/usePersonality';

export default function DesignLab() {
    const { theme, isExecutive, mode } = usePersonality();

    return (
        <div className="pt-24 pb-16 min-h-screen bg-neutral-50 dark:bg-neutral-950">
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
                        className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-full mb-4"
                        style={{ backgroundColor: theme.primaryColor }}
                    >
                        Brand Identity
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                        Identity Design Lab
                    </h1>

                    {/* Key Metrics Banner */}
                    <div
                        className="p-6 rounded-xl"
                        style={{ backgroundColor: `${theme.primaryColor}10` }}
                    >
                        <p
                            className="text-xl font-bold"
                            style={{ color: theme.primaryColor }}
                        >
                            3 Design concepts, Psychometric alignment, Interactive showcase
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
                            className="text-2xl font-bold mb-4 flex items-center gap-3"
                            style={{ color: theme.primaryColor }}
                        >
                            <span className="w-8 h-8 rounded-full bg-current flex items-center justify-center text-white text-sm">
                                1
                            </span>
                            {isExecutive ? 'The Challenge' : 'Problem Statement'}
                        </h2>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            Needed a personal brand identity that accurately reflected the dual nature of an Executive (Results/Order) and Technical (Code/Systems) professional. The challenge was to translate abstract personality traits—Structure, Clarity, and Digital Architecture—into programmed visual systems using raw SVG and CSS.
                        </p>
                    </section>

                    {/* Process Section (The Design Lab) */}
                    <section>
                        <h2
                            className="text-2xl font-bold mb-4 flex items-center gap-3"
                            style={{ color: theme.primaryColor }}
                        >
                            <span className="w-8 h-8 rounded-full bg-current flex items-center justify-center text-white text-sm">
                                2
                            </span>
                            {isExecutive ? 'The Approach' : 'Technical Process'}
                        </h2>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
                            Established a "Design Lab" to iterate on three core philosophies. Each concept was programmed as a scalable vector system to ensure perfect rendering across all viewports.
                        </p>

                        <div className="grid gap-12">
                            {/* Concept 1: The Structural Reformer */}
                            <div className="space-y-6">
                                <div className="aspect-square md:aspect-video bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-center p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-center">
                                        <svg viewBox="0 0 100 100" className="w-32 h-32 mx-auto mb-4">
                                            <rect x="25" y="20" width="10" height="60" fill="currentColor" className="text-neutral-900 dark:text-white" />
                                            <path d="M35 20 H55 A15 15 0 0 1 55 50 H35" fill="none" stroke="currentColor" strokeWidth="10" className="text-neutral-900 dark:text-white" />
                                            <path d="M35 50 H55 A15 15 0 0 1 55 80 H35" fill="none" stroke="currentColor" strokeWidth="10" className="text-neutral-900 dark:text-white" />
                                            <circle cx="85" cy="80" r="5" fill={theme.primaryColor} />
                                        </svg>
                                        <h4 className="font-bold text-neutral-900 dark:text-white uppercase tracking-widest text-sm">Prince Boateng Asare</h4>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">01. The Structural Reformer</h3>
                                    <p className="text-neutral-500 dark:text-neutral-400">
                                        <strong className="text-neutral-900 dark:text-white">Philosophy: Order from Chaos.</strong><br />
                                        A geometric construction relying on pure architectural forms. The shared vertical stroke implies efficiency.
                                    </p>
                                </div>
                            </div>

                            {/* Concept 2: Absolute Clarity */}
                            <div className="space-y-6">
                                <div className="aspect-square md:aspect-video bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-center p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex flex-col items-center">
                                        <div className="mb-4 text-7xl font-bold tracking-tighter text-neutral-900 dark:text-white leading-none relative">
                                            PB
                                            <span
                                                className="absolute -right-5 top-1 text-5xl"
                                                style={{ color: theme.primaryColor }}
                                            >.</span>
                                        </div>
                                        <div className="text-sm font-semibold tracking-widest uppercase text-neutral-900 dark:text-white">
                                            Prince Boateng Asare
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">02. Absolute Clarity</h3>
                                    <p className="text-neutral-500 dark:text-neutral-400">
                                        <strong className="text-neutral-900 dark:text-white">Philosophy: The Content is the Interface.</strong><br />
                                        Inspired by Swiss Style. No symbols, no metaphors. Just the name, presented with obsessive confidence.
                                    </p>
                                </div>
                            </div>

                            {/* Concept 3: The Digital Architect */}
                            <div className="space-y-6">
                                <div className="aspect-square md:aspect-video bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-center p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-center">
                                        <div className="relative font-mono font-bold text-6xl text-neutral-900 dark:text-white mb-4">
                                            <span style={{ color: theme.primaryColor }}>&lt;</span>
                                            PB
                                            <span style={{ color: theme.primaryColor }}>/&gt;</span>
                                        </div>
                                        <div className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
                                            {'// Prince Boateng Asare'}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">03. The Digital Architect</h3>
                                    <p className="text-neutral-500 dark:text-neutral-400">
                                        <strong className="text-neutral-900 dark:text-white">Philosophy: Code as Art.</strong><br />
                                        The angle brackets wrap the monogram, symbolizing that the person is central to the code.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack - Only in Technical Mode */}
                        {mode === 'TECHNICAL' && (
                            <div className="mt-12">
                                <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                                    Technology Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {['SVG', 'React', 'Design Systems', 'Typography', 'Geometry'].map((tech) => (
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

                    {/* Result Section */}
                    <section>
                        <h2
                            className="text-2xl font-bold mb-4 flex items-center gap-3"
                            style={{ color: theme.primaryColor }}
                        >
                            <span className="w-8 h-8 rounded-full bg-current flex items-center justify-center text-white text-sm">
                                3
                            </span>
                            {isExecutive ? 'The Impact' : 'Results & Outcomes'}
                        </h2>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                            Selected "Absolute Clarity" (Swiss Style) as the primary identity for its timeless confidence and unpretentious delivery, perfectly aligning with the "Steve Jobs" aesthetic. It fits seamlessly into the current header and footer without competing with the content.
                        </p>

                        <div className="p-6 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                            <h4 className="font-bold text-neutral-900 dark:text-white mb-2">Recommendation</h4>
                            <p className="text-neutral-600 dark:text-neutral-300">
                                Concept 02 (Absolute Clarity) is the recommended direction. It is scalable, legible at all sizes (favicon to billboard), and uniquely identifiable through its structured spacing and authoritative period.
                            </p>
                        </div>
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
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                            style={{ backgroundColor: theme.primaryColor }}
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
}
