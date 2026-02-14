import { getSortedPostsData } from '@/lib/posts';

export async function GET() {
    const posts = getSortedPostsData();
    const siteUrl = 'https://princeba.me';

    const itemsXml = posts
        .map((post) => {
            return `
        <item>
          <title>${post.title}</title>
          <link>${siteUrl}/insights/${post.slug}</link>
          <guid>${siteUrl}/insights/${post.slug}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description>${post.excerpt}</description>
        </item>
      `;
        })
        .join('\n');

    const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Prince Boateng Asare | Insights</title>
        <link>${siteUrl}</link>
        <description>Strategic Thinking and Technical Logs.</description>
        <language>en</language>
        ${itemsXml}
      </channel>
    </rss>`;

    return new Response(rssXml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
