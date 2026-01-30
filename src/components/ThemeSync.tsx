'use client';

import { useEffect } from 'react';
import { usePersonality } from '@/hooks/usePersonality';

export const ThemeSync = () => {
    const { theme } = usePersonality();

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--primary', theme.primaryColor);
        root.style.setProperty('--secondary', theme.secondaryColor);
    }, [theme]);

    return null;
};
