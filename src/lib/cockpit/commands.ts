import { fileSystem, FileSystemNode } from './fs';

export interface CommandResponse {
    output: string;
    type: 'success' | 'error' | 'info';
    action?: 'navigate' | 'theme' | 'open'; // Side effects
    payload?: string;
}

export interface CockpitState {
    cwd: string[]; // Current working directory path segments
    history: string[];
}

const resolvePath = (currentPath: string[], targetPath: string): string[] => {
    if (targetPath === '/') return [];
    if (targetPath === '~') return [];

    const parts = targetPath.split('/');
    const newPath = [...currentPath];

    for (const part of parts) {
        if (part === '.') continue;
        if (part === '..') {
            if (newPath.length > 0) newPath.pop();
        } else if (part !== '') {
            newPath.push(part);
        }
    }
    return newPath;
};

const getNode = (path: string[]): FileSystemNode | null => {
    let current: FileSystemNode = fileSystem;
    for (const segment of path) {
        if (current.type !== 'directory' || !current.children) return null;
        const next = current.children.find(c => c.name === segment);
        if (!next) return null;
        current = next;
    }
    return current;
};

export const executeCommand = (cmd: string, state: CockpitState): { response: CommandResponse, newState?: Partial<CockpitState> } => {
    const args = cmd.trim().split(' ');
    const command = args[0].toLowerCase();
    const params = args.slice(1);

    switch (command) {
        case 'help':
            return {
                response: {
                    type: 'info',
                    output: `Available commands:
  ls        List directory contents
  cd <dir>  Change directory
  cat <file> Read file content
  clear     Clear terminal output
  open <file> Open file (PDFs, external links)
  theme     Toggle personality mode
  whoami    Display user info
  exit      Close cockpit`
                }
            };

        case 'ls': {
            const node = getNode(state.cwd);
            if (!node || node.type !== 'directory') {
                return { response: { type: 'error', output: 'Error: Current path is invalid' } };
            }
            const items = node.children?.map(c =>
                c.type === 'directory' ? `${c.name}/` : c.name
            ).join('  ') || '';
            return { response: { type: 'success', output: items } };
        }

        case 'cd': {
            const target = params[0] || '~';
            const newPath = resolvePath(state.cwd, target);
            const node = getNode(newPath);

            if (!node || node.type !== 'directory') {
                return { response: { type: 'error', output: `cd: no such directory: ${target}` } };
            }
            return {
                response: { type: 'success', output: '' },
                newState: { cwd: newPath }
            };
        }

        case 'cat': {
            const target = params[0];
            if (!target) return { response: { type: 'error', output: 'Usage: cat <filename>' } };

            const node = getNode([...state.cwd, target]);
            if (!node || node.type !== 'file') {
                // Try looking in children if simple filename
                const dir = getNode(state.cwd);
                const child = dir?.children?.find(c => c.name === target);
                if (child && child.type === 'file') {
                    return { response: { type: 'success', output: child.content || '' } };
                }
                return { response: { type: 'error', output: `cat: ${target}: No such file` } };
            }
            return { response: { type: 'success', output: node.content || '' } };
        }

        case 'whoami':
            return { response: { type: 'success', output: 'guest@princeba.me' } };

        case 'theme':
            return {
                response: { type: 'success', output: 'Toggling Global Personality State...', action: 'theme' }
            };

        case 'open':
            const target = params[0];
            if (target === 'resume.pdf') {
                return { response: { type: 'success', output: 'Opening resume...', action: 'open', payload: '/resume.pdf' } };
            }
            return { response: { type: 'error', output: 'Cannot open this file type via terminal.' } };

        case 'exit':
            return { response: { type: 'success', output: 'Closing session...', action: 'open', payload: 'close' } };

        default:
            return { response: { type: 'error', output: `command not found: ${command}` } };
    }
};
