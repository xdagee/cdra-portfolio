'use client';

import Link from 'next/link';
import { usePersonality } from '@/hooks/usePersonality';

export default function NotFound() {
    const { isExecutive } = usePersonality();

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
            <div className="space-y-6 max-w-lg">
                {/* Status Code / Heading */}
                <h1
                    className="text-8xl md:text-9xl font-bold tracking-tighter text-neutral-900 dark:text-white"
                    style={{
                        fontFamily: isExecutive ? 'var(--font-sans)' : 'var(--font-mono)'
                    }}
                >
                    {isExecutive ? '404' : '<404/>'}
                </h1>

                {/* Message */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                        {isExecutive ? 'Page Not Found' : 'Module Not Found'}
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        {isExecutive
                            ? "The page you are looking for doesn't exist or has been moved."
                            : "Error: The requested resource path could not be resolved in the current context."
                        }
                    </p>
                </div>

                {/* Action */}
                <div className="pt-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105 bg-primary"
                    >
                        {isExecutive ? 'Return Home' : 'cd /home'}
                    </Link>
                </div>

                {/* Technical Details (Only in Technical Mode) */}
                {!isExecutive && (
                    <div className="mt-8 p-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-left font-mono text-xs text-neutral-500 overflow-x-auto">
                        <p className="text-red-500">Error: ENOENT</p>
                        <p>at PathResolver (src/app/router.ts:404:12)</p>
                        <p>at Process.Route (next/server/router.js:23:45)</p>
                    </div>
                )}
            </div>
        </div>
    );
}
