'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PersonalityMode, ThemeConfig, PersonalityState } from '@/types/personality';
import { themes } from '@/config/themes';

export const usePersonalityStore = create<PersonalityState>()(
    persist(
        (set, get) => ({
            mode: 'EXECUTIVE' as PersonalityMode,
            theme: themes.EXECUTIVE,
            toggleMode: () => {
                const currentMode = get().mode;
                const newMode: PersonalityMode = currentMode === 'EXECUTIVE' ? 'TECHNICAL' : 'EXECUTIVE';
                set({
                    mode: newMode,
                    theme: themes[newMode],
                });
            },
        }),
        {
            name: 'personality-mode',
            partialize: (state) => ({ mode: state.mode }),
            onRehydrateStorage: () => (state) => {
                if (state) {
                    state.theme = themes[state.mode];
                }
            },
        }
    )
);
