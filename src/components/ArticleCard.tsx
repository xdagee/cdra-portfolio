'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePersonality } from '@/hooks/usePersonality';
import { PostData } from '@/lib/posts';

interface ArticleCardProps {
    post: Omit<PostData, 'contentHtml'>;
    index: number;
}

export const ArticleCard = ({ post, index }: ArticleCardProps) => {
    const { theme, isExecutive } = usePersonality();

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: theme.animationSpeed, delay: index * 0.1 }}
            className="group relative flex flex-col items-start gap-4 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-primary/50 transition-colors"
        >
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-neutral-500">
                    {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-neutral-50 dark:bg-neutral-800 px-3 py-1.5 font-medium text-neutral-600 dark:text-neutral-300">
                    {post.category}
                </span>
            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 dark:text-white group-hover:text-primary transition-colors">
                    <Link href={`/insights/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                    </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {post.excerpt}
                </p>
            </div>

            {/* Tech Mode Decoration */}
            {!isExecutive && (
                <div className="font-mono text-xs text-neutral-500 mt-2 opacity-50">
                    {'// read_more()'}
                </div>
            )}
        </motion.article>
    );
};
