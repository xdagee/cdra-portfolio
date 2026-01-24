'use client';

import Link from 'next/link';
import { usePersonality } from '@/hooks/usePersonality';
import { Logo } from './Logo';

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/xdagee',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/prince-boateng-asare',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'X',
        href: 'https://x.com/iamprinceba',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/iamprinceba',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.31 2c2.45 0 2.72.02 3.7.06 1.25.06 2.04.32 2.76.6.72.3 1.27.7 1.83 1.27.57.56.97 1.12 1.26 1.83.27.71.53 1.5.6 2.76.03.97.05 1.25.05 3.69 0 2.45-.02 2.73-.05 3.7-.06 1.25-.32 2.04-.6 2.76-.3.72-.7 1.27-1.27 1.84-.56.56-1.12.96-1.83 1.25-.71.27-1.5.53-2.76.6-.97.04-1.25.05-3.69.05-2.45 0-2.73-.02-3.7-.05-1.25-.06-2.04-.32-2.76-.6-.72-.3-1.27-.7-1.84-1.27-.56-.56-.96-1.12-1.25-1.83-.27-.71-.53-1.5-.6-2.76-.04-.97-.05-1.25-.05-3.69 0-2.45.02-2.73.05-3.7.06-1.25.32-2.04.6-2.76.3-.72.7-1.27 1.27-1.84.56-.56 1.12-.96 1.83-1.25.71-.27 1.5-.53 2.76-.6.97-.04 1.25-.05 3.69-.05zm0 1.84c-2.42 0-2.71.02-3.67.06-1.07.05-1.46.23-1.81.36-.45.18-.84.4-1.25.82-.42.41-.64.8-.82 1.25-.13.35-.31.74-.36 1.81-.03.96-.06 1.25-.06 3.67 0 2.42.02 2.71.06 3.67.05 1.07.23 1.46.36 1.81.18.45.4.84.82 1.25.41.42.8.64 1.25.82.35.13.74.31 1.81.36.96.03 1.25.06 3.67.06 2.42 0 2.71-.02 3.67-.06 1.07-.05 1.46-.23 1.81-.36.45-.18.84-.4 1.25-.82.42-.41.64-.8.82-1.25.13-.35.31-.74.36-1.81.03-.96.06-1.25.06-3.67 0-2.42-.02-2.71-.06-3.67-.05-1.07-.23-1.46-.36-1.81-.18-.45-.4-.84-.82-1.25-.42-.41-.8-.64-1.25-.82-.35-.13-.74-.31-1.81-.36-.96-.03-1.25-.06-3.67-.06zm0 4.47a5.33 5.33 0 100 10.66 5.33 5.33 0 000-10.66zm0 1.84a3.49 3.49 0 110 6.98 3.49 3.49 0 010-6.98zm5.79-4.85a1.22 1.22 0 110 2.44 1.22 1.22 0 010-2.44z" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/iamprinceba',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
        ),
    },
];

export const Footer = () => {
    const { theme } = usePersonality();
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
