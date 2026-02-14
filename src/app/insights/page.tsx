import { Metadata } from 'next';
import { getSortedPostsData } from '@/lib/posts';
import { ArticleCard } from '@/components/ArticleCard';
import { InsightsHeader } from './Header'; // Separate client component for motion

export const metadata: Metadata = {
    title: 'Insights | Prince Boateng Asare',
    description: 'Thoughts on design systems, software architecture, and the intersection of executive strategy and technical precision.',
};

export default function InsightsPage() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <InsightsHeader />

                {/* Posts Grid */}
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {allPostsData.map((post, index) => (
                        <ArticleCard key={post.slug} post={post} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
