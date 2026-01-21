'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';
import { usePersonality } from '@/hooks/usePersonality';

const contactInfo = [
    {
        label: 'Email',
        value: 'princeboatengasare@gmail.com',
        href: 'mailto:princeboatengasare@gmail.com',
    },
    {
        label: 'GitHub',
        value: 'github.com/xdagee',
        href: 'https://github.com/xdagee',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/princeboatengasare',
        href: 'https://www.linkedin.com/in/princeboatengasare/',
    },
];

export default function ContactPage() {
    const { theme } = usePersonality();

    return (
        <div className="pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Page Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <div
                            className="w-12 h-0.5"
                            style={{ backgroundColor: theme.primaryColor }}
                        />
                        <span
                            className="text-sm font-semibold tracking-wider uppercase"
                            style={{ color: theme.primaryColor }}
                        >
                            Contact
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
                        Let&apos;s Talk
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">
                        Have a project in mind? I&apos;d love to hear about it. Be clear about
                        expectations and timescales, and I&apos;ll get back to you quickly.
                    </p>
                </motion.header>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <motion.aside
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: theme.animationSpeed, delay: 0.1 }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div>
                            <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">
                                Get in Touch
                            </h2>
                            <div className="space-y-4">
                                {contactInfo.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="block group"
                                    >
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                            {item.label}
                                        </p>
                                        <p
                                            className="font-medium group-hover:underline transition-colors"
                                            style={{ color: theme.primaryColor }}
                                        >
                                            {item.value}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">
                                Availability
                            </h2>
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                                style={{
                                    backgroundColor: `${theme.primaryColor}20`,
                                    color: theme.primaryColor,
                                }}
                            >
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Available for new projects
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">
                                Response Time
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                I typically respond within 24-48 hours. For urgent matters,
                                please indicate in your message.
                            </p>
                        </div>
                    </motion.aside>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: theme.animationSpeed, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8">
                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
