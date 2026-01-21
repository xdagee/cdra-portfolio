'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PersonalityToggle } from './PersonalityToggle';
import { usePersonality } from '@/hooks/usePersonality';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export const Header = () => {
    const { theme } = usePersonality();

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: theme.animationSpeed }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Monogram */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group"
                        aria-label="Prince Boateng Asare - Home"
                    >
                        <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white transition-transform duration-200 group-hover:scale-105"
                            style={{ backgroundColor: theme.primaryColor }}
                        >
                            PB
                        </div>
                        <span className="hidden sm:block font-semibold text-neutral-900 dark:text-white">
                            Prince Boateng Asare
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 relative group"
                            >
                                {item.label}
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                                    style={{ backgroundColor: theme.primaryColor }}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* Personality Toggle */}
                    <PersonalityToggle />
                </div>
            </div>
        </motion.header>
    );
};
