'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePersonality } from '@/hooks/usePersonality';

interface ArticleHeaderProps {
    title: string;
    date: string;
    category: string;
}

export const ArticleHeader = ({ title, date, category }: ArticleHeaderProps) => {
    const { theme } = usePersonality();

    return (
        <header className="mb-10">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: theme.animationSpeed }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <Link
                        href="/insights"
                        className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1"
                    >
                        ← Back
                    </Link>
                    <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="text-sm font-medium text-primary">
                        {category}
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight">
                    {title}
                </h1>

                <time className="text-neutral-500 dark:text-neutral-400">
                    {date}
                </time>
            </motion.div>
        </header>
    );
};
