import { codeToHtml } from 'shiki';

export async function CodeBlock({ code, lang = 'typescript' }: { code: string; lang?: string }) {
    const html = await codeToHtml(code, {
        lang,
        theme: 'github-dark',
    });

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
