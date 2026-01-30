import { renderHook, act } from '@testing-library/react';
import { usePersonality } from '../usePersonality';
import { usePersonalityStore } from '@/store/personality';

describe('usePersonality Hook', () => {
    beforeEach(() => {
        // Reset store before each test
        act(() => {
            usePersonalityStore.setState({
                mode: 'EXECUTIVE',
                theme: {
                    primaryColor: '#DC2626',
                    secondaryColor: '#B91C1C',
                    layoutDensity: 'comfortable',
                    animationSpeed: 0.5,
                    showCodeSnippets: false,
                },
            });
        });
    });

    it('should return initial executive state', () => {
        const { result } = renderHook(() => usePersonality());

        expect(result.current.mode).toBe('EXECUTIVE');
        expect(result.current.isExecutive).toBe(true);
        expect(result.current.isTechnical).toBe(false);
    });

    it('should toggle mode correctly', () => {
        const { result } = renderHook(() => usePersonality());

        act(() => {
            result.current.toggleMode();
        });

        expect(result.current.mode).toBe('TECHNICAL');
        expect(result.current.isTechnical).toBe(true);
        expect(result.current.isExecutive).toBe(false);

        act(() => {
            result.current.toggleMode();
        });

        expect(result.current.mode).toBe('EXECUTIVE');
    });
});
