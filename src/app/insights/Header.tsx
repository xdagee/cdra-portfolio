'use client';

import { motion } from 'framer-motion';
import { usePersonality } from '@/hooks/usePersonality';

export const InsightsHeader = () => {
    const { theme, isExecutive } = usePersonality();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: theme.animationSpeed }}
            className="max-w-2xl"
        >
            <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-0.5 bg-primary" />
                <span className="text-sm font-semibold tracking-wider uppercase text-primary">
                    Insights
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl mb-6">
                {isExecutive ? 'Strategic Thinking' : 'Technical Logs'}
            </h1>
            <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                {isExecutive
                    ? 'Exploring the intersection of design, technology, and business impact.'
                    : 'Documentation of architectural decisions, systems design, and code patterns.'}
            </p>
        </motion.div>
    );
};
