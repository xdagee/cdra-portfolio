import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { ArticleHeader } from './ArticleHeader'; // Client component

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    try {
        const postData = await getPostData(slug);
        return {
            title: `${postData.title} | Prince Boateng Asare`,
            description: postData.excerpt,
        };
    } catch {
        return {
            title: 'Post Not Found',
        };
    }
}

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
    let postData;

    try {
        postData = await getPostData(slug);
    } catch {
        notFound();
    }

    return (
        <article className="pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <ArticleHeader
                    title={postData.title}
                    date={postData.date}
                    category={postData.category}
                />

                {/* Content */}
                <div
                    className="mt-8 prose prose-lg dark:prose-invert prose-neutral max-w-none 
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-a:text-primary hover:prose-a:text-secondary 
                    prose-code:text-primary prose-code:bg-neutral-100 dark:prose-code:bg-neutral-900 prose-code:px-1 prose-code:rounded
                    prose-img:rounded-2xl"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </div>
        </article>
    );
}
