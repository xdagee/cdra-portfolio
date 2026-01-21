'use client';

import { usePersonalityStore } from '@/store/personality';

export const usePersonality = () => {
    const mode = usePersonalityStore((state) => state.mode);
    const theme = usePersonalityStore((state) => state.theme);
    const toggleMode = usePersonalityStore((state) => state.toggleMode);

    return {
        mode,
        theme,
        toggleMode,
        isExecutive: mode === 'EXECUTIVE',
        isTechnical: mode === 'TECHNICAL',
    };
};
