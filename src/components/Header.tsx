'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PersonalityToggle } from './PersonalityToggle';
import { usePersonality } from '@/hooks/usePersonality';
import { Logo } from './Logo';
import { socialLinks } from '@/config/socials';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export const Header = () => {
    const { theme } = usePersonality();
    const [isOpen, setIsOpen] = useState(false);

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
                        className="group"
                        aria-label="Prince Boateng Asare - Home"
                        onClick={() => setIsOpen(false)}
                    >
                        <Logo showName className="hidden sm:flex" />
                        <Logo className="flex sm:hidden" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 relative group"
                            >
                                {item.label}
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full bg-primary"
                                />
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        {/* Social Links (Desktop) */}
                        <div className="hidden md:flex items-center gap-2 mr-2">
                            {socialLinks.slice(0, 2).map((link) => ( // Show first 2 (GitHub/LinkedIn)
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors p-2"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                        {/* Personality Toggle */}
                        <PersonalityToggle />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative z-50 p-2 -mr-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-transparent"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-2">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white py-3 px-4 -mx-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navItems.length * 0.1 }}
                            >
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white py-3 px-4 -mx-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                                >
                                    Resume
                                </a>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
