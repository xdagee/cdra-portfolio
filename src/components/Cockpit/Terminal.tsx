'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCockpit } from './CockpitProvider';
import { usePersonality } from '@/hooks/usePersonality';

export const Terminal = () => {
    const { isOpen, entries, runCommand, currentPath, toggleCockpit } = useCockpit();
    const { isExecutive } = usePersonality();
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Auto-scroll and auto-focus
    useEffect(() => {
        if (isOpen) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
            inputRef.current?.focus();
        }
    }, [isOpen, entries]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        runCommand(input);
        setInput('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                    onClick={() => toggleCockpit()}
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 10 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 10 }}
                        className="w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[60vh] max-h-[600px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Title Bar */}
                        <div className="flex items-center justify-between px-4 py-3 bg-neutral-950 border-b border-neutral-800">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" onClick={toggleCockpit} />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-xs font-mono text-neutral-500">
                                {isExecutive ? 'Security Terminal' : 'guest@princeba.me:~'}
                            </div>
                            <div className="w-10" /> {/* Spacer */}
                        </div>

                        {/* Output Area */}
                        <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-2 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
                            {entries.map((entry, i) => (
                                <div key={i} className={`${entry.type === 'input' ? 'text-neutral-400 mt-4' : ''}`}>
                                    {entry.type === 'input' && (
                                        <span className="mr-2 text-primary">➜</span>
                                    )}
                                    <span className={
                                        entry.status === 'error' ? 'text-red-400' :
                                            entry.status === 'info' ? 'text-blue-400' :
                                                'text-neutral-300'
                                    }>
                                        {entry.content}
                                    </span>
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-4 bg-neutral-950 border-t border-neutral-800 flex items-center gap-2">
                            <span className="text-primary font-mono text-sm">
                                {currentPath.join('/')} $
                            </span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-white placeholder-neutral-600 focus:ring-0 p-0"
                                placeholder="Type a command..."
                                autoFocus
                            />
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
