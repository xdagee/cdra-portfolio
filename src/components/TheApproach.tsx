'use client';

import { motion } from 'framer-motion';
import { usePersonality } from '@/hooks/usePersonality';

const traits = [
    {
        title: 'Independent Thinker',
        description: 'Original ideas backed by rigorous analysis. Innovation grounded in practicality.',
        icon: '💡',
    },
    {
        title: 'Rapid Organizer',
        description: 'Transforming chaos into structured systems. Clarity through disciplined execution.',
        icon: '⚡',
    },
    {
        title: 'Systematic Problem Solver',
        description: 'Logical approach to complex challenges. Every solution has a clear rationale.',
        icon: '🎯',
    },
];

const teamValue = {
    title: 'Commitment to Team Mission',
    points: [
        'Pillar of strength during challenging projects',
        'Deflects blame from team members',
        'Maintains standards while staying adaptable',
        'Reliable executor who delivers on commitments',
    ],
};

export const TheApproach = () => {
    const { theme, isExecutive } = usePersonality();

    return (
        <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: theme.animationSpeed }}
                    className="text-center mb-16"
                >
                    <div
                        className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
                        style={{ backgroundColor: `${theme.primaryColor}20`, color: theme.primaryColor }}
                    >
                        The Approach
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                        {isExecutive ? 'Results-Driven Methodology' : 'Systematic Problem Solving'}
                    </h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        {isExecutive
                            ? "Delivering measurable outcomes through decisive action and clear accountability."
                            : "Methodical analysis, precise execution, and continuous improvement."
                        }
                    </p>
                </motion.div>

                {/* Traits Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {traits.map((trait, index) => (
                        <motion.div
                            key={trait.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: theme.animationSpeed, delay: index * 0.1 }}
                            className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="text-4xl mb-4">{trait.icon}</div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                                {trait.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                {trait.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Team Value Section - Humanizing the "Blind Spot" */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: theme.animationSpeed }}
                    className="bg-white dark:bg-neutral-800 rounded-2xl p-8 lg:p-12"
                    style={{ borderLeft: `4px solid ${theme.primaryColor}` }}
                >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                                {teamValue.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                                While I thrive working independently, I understand that exceptional results come from exceptional teams.
                                Here&apos;s what colleagues value about working with me:
                            </p>
                        </div>
                        <div className="space-y-4">
                            {teamValue.points.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: theme.animationSpeed, delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div
                                        className="w-2 h-2 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: theme.primaryColor }}
                                    />
                                    <span className="text-neutral-700 dark:text-neutral-300">{point}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
