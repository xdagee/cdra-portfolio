'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePersonality } from '@/hooks/usePersonality';

export const Hero = () => {
    const { theme, isExecutive } = usePersonality();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
                <div
                    className="absolute top-0 right-0 w-1/2 h-1/2 opacity-10"
                    style={{
                        background: `radial-gradient(circle at center, ${theme.primaryColor} 0%, transparent 70%)`,
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: theme.animationSpeed, delay: 0.1 }}
                        className="lg:col-span-7"
                    >
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: theme.animationSpeed }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <div
                                className="w-12 h-0.5"
                                style={{ backgroundColor: theme.primaryColor }}
                            />
                            <span
                                className="text-sm font-semibold tracking-wider uppercase"
                                style={{ color: theme.primaryColor }}
                            >
                                Creative Directing Reformer
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white leading-tight mb-6">
                            Prince Boateng
                            <br />
                            <span style={{ color: theme.primaryColor }}>Asare</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-xl leading-relaxed">
                            {isExecutive
                                ? "Organizing chaos into logic. Delivering results through precision."
                                : "Systematic problem-solving. Clean architecture. Measurable outcomes."
                            }
                        </p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: theme.animationSpeed, delay: 0.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                                style={{ backgroundColor: theme.primaryColor }}
                            >
                                View Projects
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg border-2 text-neutral-900 dark:text-white border-neutral-300 dark:border-neutral-700 transition-all duration-200 hover:border-neutral-400 dark:hover:border-neutral-600"
                            >
                                Hire Me
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: theme.animationSpeed, delay: 0.3 }}
                        className="lg:col-span-5 hidden lg:block"
                    >
                        <div className="relative">
                            {/* Abstract Shape */}
                            <div
                                className="w-80 h-80 mx-auto rounded-3xl transform rotate-6 opacity-20"
                                style={{ backgroundColor: theme.primaryColor }}
                            />
                            <div
                                className="absolute inset-4 rounded-2xl bg-white dark:bg-neutral-800 shadow-2xl transform -rotate-3"
                            >
                                <div className="p-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <div className="space-y-2 font-mono text-sm">
                                            <div className="text-neutral-400">// Do it now.</div>
                                            <div className="text-neutral-600 dark:text-neutral-300">
                                                <span style={{ color: theme.primaryColor }}>const</span> approach = {'{'}</div>
                                            <div className="pl-4 text-neutral-600 dark:text-neutral-300">
                                                action: <span className="text-green-600">&quot;decisive&quot;</span>,</div>
                                            <div className="pl-4 text-neutral-600 dark:text-neutral-300">
                                                precision: <span className="text-blue-600">true</span>,</div>
                                            <div className="pl-4 text-neutral-600 dark:text-neutral-300">
                                                results: <span className="text-green-600">&quot;delivered&quot;</span></div>
                                            <div className="text-neutral-600 dark:text-neutral-300">{'}'}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-6 h-10 rounded-full border-2 border-neutral-300 dark:border-neutral-700 flex justify-center pt-2"
                    >
                        <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: theme.primaryColor }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
