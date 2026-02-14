export interface FileSystemNode {
    type: 'file' | 'directory';
    name: string;
    content?: string; // For files
    children?: FileSystemNode[]; // For directories
}

export const fileSystem: FileSystemNode = {
    type: 'directory',
    name: 'root',
    children: [
        {
            type: 'directory',
            name: 'projects',
            children: [
                { type: 'file', name: 'rawsrc.txt', content: 'Project: RawSrc Commodities Marketplace\nStatus: Delivered\nStack: Figma, UX Research' },
                { type: 'file', name: 'payall.txt', content: 'Project: PayAll App\nStatus: Prototype\nStack: Flutter, Figma' },
                { type: 'file', name: 'wenotek.md', content: 'Role: Software Engineer\nFocus: Training, Development, Writing' },
                { type: 'file', name: 'identity-lab.json', content: '{ "concept": "Swiss Style", "alignment": "Absolute Clarity" }' },
            ]
        },
        {
            type: 'directory',
            name: 'system',
            children: [
                { type: 'file', name: 'personality.config', content: 'MODE=EXECUTIVE\nTHEME=RED' },
                { type: 'file', name: 'version', content: 'v2.0.0-beta' },
            ]
        },
        {
            type: 'file',
            name: 'about.md',
            content: '# Prince Boateng Asare\nCreative Directing Reformer.\n\n"Organizing chaos into logic."'
        },
        {
            type: 'file',
            name: 'contact.txt',
            content: 'Email: prince@wenotek.com\nTwitter: @iamprinceba\nGitHub: @xdagee'
        },
        {
            type: 'file',
            name: 'resume.pdf',
            content: '[Binary content hidden] -> Use "open resume.pdf" to view.'
        }
    ]
};
