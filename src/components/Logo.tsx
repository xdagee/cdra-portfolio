'use client';

import { usePersonality } from '@/hooks/usePersonality';

interface LogoProps {
    className?: string;
    showName?: boolean;
}

export const Logo = ({ className = '', showName = false }: LogoProps) => {
    const { theme } = usePersonality();

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative leading-none">
                <span className="text-2xl font-bold tracking-tighter text-neutral-900 dark:text-white">
                    PB
                </span>
                <span
                    className="absolute -right-1.5 top-0 text-2xl font-bold text-primary"
                >
                    .
                </span>
            </div>
            {showName && (
                <span className="font-semibold text-neutral-900 dark:text-white tracking-tight">
                    Prince Boateng Asare
                </span>
            )}
        </div>
    );
};
