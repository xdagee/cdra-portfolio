'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePersonality } from '@/hooks/usePersonality';

const experiences = [
    {
        role: 'CEO / Co-Founder',
        company: 'STEMAIDE Africa',
        period: 'July 2022 - Present',
        description: 'Leading Africa\'s next generation of tech-savvy leaders. Building AI-integrated learning kits and STEM curriculum, leading scale-up strategy and team capacity building, advocating national STEM policy with deep commitment to digital inclusion and gender equity.',
        link: 'https://www.stemaide.com',
    },
    {
        role: 'UX Consultant Expert',
        company: 'GFA Consulting Group GmbH',
        period: 'August 2023 - Present',
        description: 'Consulting on user testing and adaptation of digital solutions for informal micro-entrepreneurs in Ghana. Leading gap analyses and content strategies for digital skills programs in the Digital Transformation Unit.',
        link: 'https://www.gfa-group.de',
    },
    {
        role: 'Independent Consultant, UI/UX Specialist',
        company: 'Various Clients (AITI-KACE)',
        period: 'January 2021 - Present',
        description: 'Collaborating with nationwide UX research teams to synthesize feedback and identify digital skills demand among underserved populations. Training digital-skills content development teams and reviewing needs assessments.',
        link: 'https://www.aiti-kace.com.gh',
    },
    {
        role: 'Senior Software Engineer / Trainer',
        company: 'WENOTEK',
        period: 'June 2019 - May 2020',
        description: 'Trained 300 youth in mobile app development (Flutter). Led e-voting app design and developed content for SEO and digital marketing.',
        link: 'https://wenotek.com',
    },
    {
        role: 'Software Developer / Technical Lead Trainer',
        company: 'Kofi Annan ICT Centre',
        period: 'September 2017 - January 2019',
        description: 'Delivered digital teacher training (eTransform/World Bank). Developed HR systems and contributed to national ICT strategies.',
        link: 'https://www.aiti-kace.com.gh',
    },
    {
        role: 'UX Writer / Content Strategist',
        company: 'RightCom',
        period: 'January 2015 - January 2016',
        description: 'Led technical writing and UX copy for digital platforms. Improved user engagement and system documentation.',
        link: '#',
    },
];

const skills = {
    digital: ['UX Research', 'Wireframing', 'Prototyping', 'SEO', 'Digital Marketing', 'Cybersecurity', 'Data Analysis', 'Digital Content Curriculum Creation'],
    technical: ['HTML5', 'CSS3', 'JavaScript', 'Dart', 'PHP', 'Python', 'Java', 'ASP.NET'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL'],
    tools: ['Figma', 'Visual Studio Code', 'Android Studio', 'Cursor', 'Postman', 'GitHub', 'Webflow', 'Visual Studio'],
    aiMl: ['Google AI Studio', 'TensorFlow', 'PyTorch', 'NLP APIs', 'LangChain', 'RAG Pipelines', 'Vector DBs (Weaviate)', 'AutoML', 'ML Kit', 'LLMs', 'Ollama', 'LM Studio', 'Unsloth', 'Google Colab', 'NVIDIA NIMs'],
    devOps: ['Docker', 'GitHub Actions', 'Agents.md', 'CI/CD', 'AWS', 'GCP', 'Azure', 'Firebase'],
};

const education = [
    {
        degree: 'Professional Certificate - Equitable Makerspaces',
        institution: 'UCL via FutureLearn',
        year: '2025',
    },
    {
        degree: 'Nano Degree - User Experience Design',
        institution: 'Udacity',
        year: '2021',
    },
    {
        degree: 'Professional Certificate - Google UX Design',
        institution: 'Coursera',
        year: '2021',
    },
    {
        degree: 'Professional Certificate - Network Information Security',
        institution: 'Ghana-India Kofi Annan Centre of Excellence in ICT',
        year: '2018',
    },
    {
        degree: 'BSc (Hons) - Business Information Technology',
        institution: 'Staffordshire University, UK (Adjunct)',
        year: '2016',
    },
    {
        degree: 'Diploma - Business Computing',
        institution: 'Ghana-India Kofi Annan Centre of Excellence in ICT',
        year: '2013',
    },
    {
        degree: 'Certificate - Foundations of Software Development',
        institution: 'Ghana-India Kofi Annan Centre of Excellence in ICT',
        year: '2012',
    },
];

const languages = [
    { name: 'English', reading: 1, speaking: 1, writing: 1 },
    { name: 'Akan (Twi)', reading: 3, speaking: 1, writing: 5 },
    { name: 'French', reading: 3, speaking: 4, writing: 4 },
    { name: 'German', reading: 5, speaking: 5, writing: 5 },
];

const affiliations = [
    { name: 'Vice President, IoT Network Hub', link: 'https://www.iotnetworkhub.org/' },
    { name: 'Member, Ghana STEM Network', link: '#' },
    { name: 'Member, Ghana Edtech Alliance', link: '#' },
    { name: 'Member, Ghana Hubs Network', link: '#' },
    { name: 'STEMAIDE Africa (Co-Founder)', link: 'https://www.stemaide.com/' },
];

const keyQualifications = [
    '7+ years in ICT, UI/UX research & design, software development, and capacity development',
    '3+ years building AI-powered tools and adaptive learning platforms',
    'Trained 500+ youth in digital skills, UX/UI, and mobile app development',
    'Experience designing and delivering train-the-trainer programs',
    'Deep experience in user research, co-design workshops, and digital inclusion strategies',
    'Worked on major donor-funded projects (World Bank, UNESCO, UNDP, Brave, Girl Up, Vodafone Ghana Foundation)',
    'Co-founder of STEMAIDE Africa and IoT Network Hub',
    '3x founder - EdTech, AgriTech, and FinTech innovation startups',
];

const strengths = [
    {
        title: 'Decisive Action',
        description: 'Swift decision-making backed by thorough analysis. No paralysis by analysis.',
        color: '#DC2626',
    },
    {
        title: 'Systematic Thinking',
        description: 'Complex problems broken into manageable components with clear solutions.',
        color: '#2563EB',
    },
    {
        title: 'Quality Focus',
        description: 'High standards for code quality, testing coverage, and documentation.',
        color: '#10B981',
    },
    {
        title: 'Independent Execution',
        description: 'Self-directed work style that delivers results without constant oversight.',
        color: '#8B5CF6',
    },
];

export default function AboutPage() {
    const { theme, isExecutive, isTechnical } = usePersonality();

    return (
        <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-950">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Page Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div
                            className="w-12 h-[2px] bg-primary"
                        />
                        <span
                            className="text-xs font-bold tracking-[0.2em] uppercase text-primary"
                        >
                            Curriculum Vitae
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tighter">
                        Prince Boateng Asare.
                    </h1>
                    <p className="text-2xl font-medium mb-8 tracking-tight text-primary">
                        AI Technical Fellow In-Residence
                    </p>
                    <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light tracking-tight max-w-3xl">
                        {isExecutive
                            ? "CEO of STEMAIDE Africa. Building solutions that impact 500+ youth across Africa. 3x Founder."
                            : "Software Engineer & UX Specialist. Deep expertise in AI/ML, EdTech platforms, and human-centered design for underserved populations."}
                    </p>
                </motion.header>

                {/* Profile Summary */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-24"
                >
                    <div className="grid md:grid-cols-12 gap-12">
                        <div className="md:col-span-4">
                            <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">
                                Personality
                            </h2>
                            <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
                                Creative Directing Reformer
                            </h3>
                        </div>
                        <div className="md:col-span-8">
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed font-light">
                                My personality profile combines decisive action orientation with analytical precision.
                                I thrive on organizing chaos into logical systems and delivering measurable results.
                                As a 3x founder and AI Technical Fellow, I lead initiatives in EdTech, STEM education,
                                and digital inclusion across Africa.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-4 py-2 rounded-full text-sm font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800">
                                    81% Directing
                                </span>
                                <span className="px-4 py-2 rounded-full text-sm font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800">
                                    68% Accommodating
                                </span>
                                <span className="px-4 py-2 rounded-full text-sm font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800">
                                    63% Analytical
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Key Qualifications */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-24"
                >
                    <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-12">
                        Key Qualifications
                    </h2>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        {keyQualifications.map((qual, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: theme.animationSpeed, delay: index * 0.03 }}
                                className="flex items-start gap-4"
                            >
                                <span className="text-neutral-300 dark:text-neutral-700 mt-1">•</span>
                                <span className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                                    {qual}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Core Strengths */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-24"
                >
                    <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-12">
                        Core Strengths
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {strengths.map((strength, index) => (
                            <motion.div
                                key={strength.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: theme.animationSpeed, delay: index * 0.1 }}
                                className="group p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:shadow-xl transition-all duration-300"
                            >
                                <div
                                    className="w-2 h-2 rounded-full mb-6 transition-transform duration-300 group-hover:scale-150"
                                    style={{ backgroundColor: strength.color }}
                                />
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
                                    {strength.title}
                                </h3>
                                <p className="text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                                    {strength.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Technical Skills */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-24"
                >
                    <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-12">
                        Technical Arsenal
                    </h2>
                    <div className="space-y-12">
                        {isTechnical && (
                            <>
                                <div>
                                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-6 tracking-tight">
                                        AI & Machine Learning
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.aiMl.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 rounded-full border border-neutral-200 dark:border-neutral-800"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-6 tracking-tight">
                                        MLOps & DevOps
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.devOps.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 rounded-full border border-neutral-200 dark:border-neutral-800"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                        <div>
                            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-6 tracking-tight">
                                Programming Languages
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.technical.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 rounded-full border border-neutral-200 dark:border-neutral-800"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-6 tracking-tight">
                                {isTechnical ? 'Databases' : 'Digital Skills'}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {(isTechnical ? skills.databases : skills.digital).map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 rounded-full border border-neutral-200 dark:border-neutral-800"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-6 tracking-tight">
                                Tools & Platforms
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.tools.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 rounded-full border border-neutral-200 dark:border-neutral-800"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Experience Timeline */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-24"
                >
                    <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-12">
                        History
                    </h2>
                    <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-12 pb-4">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.role + exp.company}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: theme.animationSpeed, delay: index * 0.08 }}
                                className="relative pl-12"
                            >
                                <div
                                    className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-white dark:bg-neutral-950 border-2 border-primary"
                                />
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm font-mono text-neutral-400">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    {exp.link !== '#' ? (
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base font-medium hover:underline transition-colors block text-primary"
                                        >
                                            {exp.company}
                                        </a>
                                    ) : (
                                        <p className="text-base font-medium text-primary">
                                            {exp.company}
                                        </p>
                                    )}
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Education */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-24"
                >
                    <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-12">
                        Education
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: theme.animationSpeed, delay: index * 0.05 }}
                                className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800"
                            >
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h3 className="font-bold text-neutral-900 dark:text-white text-sm mb-2">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                                            {edu.institution}
                                        </p>
                                    </div>
                                    <span
                                        className="text-xs font-mono px-2 py-1 rounded flex-shrink-0 text-neutral-500 bg-neutral-200 dark:bg-neutral-800"
                                    >
                                        {edu.year}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Languages */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-24"
                >
                    <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-12">
                        Languages
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {languages.map((lang) => (
                            <div
                                key={lang.name}
                                className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 text-center"
                            >
                                <h3 className="font-bold text-neutral-900 dark:text-white mb-4">{lang.name}</h3>
                                <div className="space-y-2 text-xs text-neutral-500 dark:text-neutral-400">
                                    <p>Native / Fluent</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Affiliations */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: theme.animationSpeed }}
                    className="mb-24"
                >
                    <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-12">
                        Affiliations
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {affiliations.map((org) => (
                            <a
                                key={org.name}
                                href={org.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all text-sm font-medium hover:shadow-sm"
                            >
                                {org.name}
                            </a>
                        ))}
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: theme.animationSpeed }}
                    className="text-center py-12"
                >
                    <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                        Let&apos;s Build Something Exceptional
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-10 text-lg font-light">
                        Ready to transform your ideas into reality?
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-transform hover:scale-105 shadow-lg shadow-blue-500/20 bg-primary"
                        >
                            Get in Touch
                            <svg
                                className="w-5 h-5"
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
                        <a
                            href="https://xdagee.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-full border-2 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 transition-colors hover:border-neutral-400 dark:hover:border-neutral-600"
                        >
                            View Old Portfolio
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
