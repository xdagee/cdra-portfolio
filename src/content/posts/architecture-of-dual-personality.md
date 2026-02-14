---
title: "The Architecture of a Dual Personality"
date: "2026-02-06"
excerpt: "How I designed a portfolio that speaks two languages: Executive Strategy and Technical Precision."
category: "Design Systems"
---

When I set out to build my portfolio, I faced a common dilemma for senior engineers: **Who am I optimizing for?**

Recruiters want measurable outcomes, ROI, and leadership signals. They want the "Executive" view.  
Fellow engineers want to see code, architecture decisions, and "the metal". They want the "Technical" view.

## The Solution: Mode Switching

Instead of compromising, I decided to build both. Using **Next.js** and **Tailwind CSS variables**, I created a global state machine managed by `zustand` that toggles the entire application's personality.

### The Code

It starts with a simple hook:

```typescript
// src/store/personality.ts
export const usePersonalityStore = create<PersonalityState>()(
    persist(
        (set, get) => ({
            mode: 'EXECUTIVE',
            toggleMode: () => {
                const newMode = get().mode === 'EXECUTIVE' ? 'TECHNICAL' : 'EXECUTIVE';
                set({ mode: newMode });
            },
        }),
        // ... middleware
    )
);
```

This single pivot point drives everything: typestyles, color tokens, and even the content itself.

## Why This Matters

This isn't just a gimmick. it's a demonstration of **empathy for the user**. By asking "who are you?", I can serve the *exact* information you need, without noise. That is the essence of good product engineering.
