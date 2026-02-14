'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { usePersonality } from '@/hooks/usePersonality';
import { executeCommand, CockpitState } from '@/lib/cockpit/commands';

interface TerminalEntry {
    type: 'input' | 'output';
    content: string;
    status?: 'success' | 'error' | 'info';
}

interface CockpitContextType {
    isOpen: boolean;
    toggleCockpit: () => void;
    entries: TerminalEntry[];
    runCommand: (cmd: string) => void;
    currentPath: string[];
    clearTerminal: () => void;
}

const CockpitContext = createContext<CockpitContextType | undefined>(undefined);

export const CockpitProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [state, setState] = useState<CockpitState>({
        cwd: ['root'],
        history: [],
    });
    const [entries, setEntries] = useState<TerminalEntry[]>([
        { type: 'output', content: 'Welcome to Cockpit v1.0.0', status: 'info' },
        { type: 'output', content: 'Type "help" to see available commands.', status: 'info' },
    ]);
    const { toggleMode } = usePersonality();

    const toggleCockpit = useCallback(() => setIsOpen(prev => !prev), []);

    const runCommand = useCallback((cmd: string) => {
        if (!cmd.trim()) return;

        // Add input entry
        setEntries(prev => [...prev, { type: 'input', content: cmd }]);

        // Execute logic
        const { response, newState } = executeCommand(cmd, state);

        // Update internal state (cwd, history)
        if (newState) {
            setState(prev => ({ ...prev, ...newState }));
        }

        // Handle Side Effects
        if (response.action === 'theme') {
            toggleMode();
        } else if (response.action === 'open' && response.payload === 'close') {
            setIsOpen(false);
            return; // Don't add output if closing
        } else if (response.action === 'open' && response.payload) {
            window.open(response.payload, '_blank');
        }

        // Add output entry
        if (cmd.trim().toLowerCase() === 'clear') {
            setEntries([]);
        } else {
            setEntries(prev => [...prev, {
                type: 'output',
                content: response.output,
                status: response.type
            }]);
        }
    }, [state, toggleMode]);

    const clearTerminal = useCallback(() => setEntries([]), []);

    // Global Hotkey Listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Toggle on Cmd+K or Ctrl+K or Backtick
            if ((e.metaKey && e.key === 'k') || (e.ctrlKey && e.key === 'k') || (e.key === '`')) {
                e.preventDefault();
                toggleCockpit();
            }
            // Close on Escape
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, toggleCockpit]);

    return (
        <CockpitContext.Provider value={{
            isOpen,
            toggleCockpit,
            entries,
            runCommand,
            currentPath: state.cwd,
            clearTerminal
        }}>
            {children}
        </CockpitContext.Provider>
    );
};

export const useCockpit = () => {
    const context = useContext(CockpitContext);
    if (!context) throw new Error('useCockpit must be used within a CockpitProvider');
    return context;
};
