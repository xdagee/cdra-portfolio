'use client';

import Link from 'next/link';
import { usePersonality } from '@/hooks/usePersonality';
import { Logo } from './Logo';
import { socialLinks } from '@/config/socials';

export const Footer = () => {
    const { } = usePersonality();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 dark:bg-neutral-950 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Logo & Copyright */}
                    <div>
                        <div className="mb-4">
                            <Logo showName />
                        </div>
                        <p className="text-neutral-500 text-sm">
                            © {currentYear} All rights reserved.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
                        <Link href="/" className="text-neutral-500 hover:text-white transition-colors text-sm">
                            Home
                        </Link>
                        <Link href="/projects" className="text-neutral-500 hover:text-white transition-colors text-sm">
                            Projects
                        </Link>
                        <Link href="/about" className="text-neutral-500 hover:text-white transition-colors text-sm">
                            About
                        </Link>
                        <Link href="/contact" className="text-neutral-500 hover:text-white transition-colors text-sm">
                            Contact
                        </Link>
                    </nav>

                    {/* Social Links */}
                    <div className="flex justify-end gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-all"
                                aria-label={`${link.name} (Opens in new tab)`}
                            >
                                {link.icon}
                                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-700 rounded-full p-0.5 border border-neutral-600">
                                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
