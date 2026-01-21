import { ThemeConfig, PersonalityMode } from '@/types/personality';

export const themes: Record<PersonalityMode, ThemeConfig> = {
    // Reflects "Fiery Red": Direct, Fast, Result-oriented
    EXECUTIVE: {
        primaryColor: '#DC2626',     // Tailwind red-600
        secondaryColor: '#B91C1C',   // Tailwind red-700
        layoutDensity: 'comfortable', // More whitespace for quick scanning
        animationSpeed: 0.2,          // Snappy animations
        showCodeSnippets: false,      // Focus on outcomes/ROI
    },
    // Reflects "Cool Blue": Analytical, Detailed, Precise
    TECHNICAL: {
        primaryColor: '#2563EB',     // Tailwind blue-600
        secondaryColor: '#1D4ED8',   // Tailwind blue-700
        layoutDensity: 'compact',    // Information dense
        animationSpeed: 0.5,          // Smooth, allows detailed observation
        showCodeSnippets: true,       // Show the logic/code
    },
};

export const modeLabels: Record<PersonalityMode, { title: string; subtitle: string }> = {
    EXECUTIVE: {
        title: 'Executive View',
        subtitle: 'Results & Outcomes',
    },
    TECHNICAL: {
        title: 'Technical View',
        subtitle: 'Process & Code',
    },
};
