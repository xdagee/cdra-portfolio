'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePersonality } from '@/hooks/usePersonality';
import { modeLabels } from '@/config/themes';

export const PersonalityToggle = () => {
    const { mode, toggleMode, theme } = usePersonality();

    return (
        <button
            onClick={toggleMode}
            className="group relative flex items-center gap-3 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
            role="switch"
            aria-checked={mode === 'TECHNICAL'}
            aria-label={`Switch to ${mode === 'EXECUTIVE' ? 'Technical' : 'Executive'} view`}
        >
            {/* Toggle Track */}
            <div className="relative w-12 h-6 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
                <motion.div
                    className="absolute inset-y-0.5 w-5 h-5 rounded-full shadow-md"
                    style={{ backgroundColor: theme.primaryColor }}
                    animate={{ x: mode === 'EXECUTIVE' ? 2 : 26 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            </div>

            {/* Mode Label */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={mode}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: theme.animationSpeed }}
                    className="flex flex-col items-start min-w-[100px]"
                >
                    <span
                        className="text-sm font-semibold"
                        style={{ color: theme.primaryColor }}
                    >
                        {modeLabels[mode].title}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {modeLabels[mode].subtitle}
                    </span>
                </motion.div>
            </AnimatePresence>
        </button>
    );
};
