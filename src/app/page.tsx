'use client';

import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import { TheApproach } from '@/components/TheApproach';
import { ContactForm } from '@/components/ContactForm';
import { projects } from '@/data/projects';
import { usePersonality } from '@/hooks/usePersonality';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const { theme } = usePersonality();

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: theme.animationSpeed }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <div
                className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
                style={{
                  backgroundColor: `${theme.primaryColor}20`,
                  color: theme.primaryColor,
                }}
              >
                Featured Work
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                Selected Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: theme.primaryColor }}
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Mobile View All Link */}
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: theme.primaryColor }}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* The Approach Section */}
      <TheApproach />

      {/* Contact CTA Section */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: theme.animationSpeed }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: theme.animationSpeed, delay: 0.1 }}
            className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
