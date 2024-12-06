import { getAllBlogSlugs, getBlogContent } from '@/lib/blog';
import MDXContent from '@/components/MDXRemote';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: Props) {
  const post = await getBlogContent(params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen pt-20 pb-16">
      <article className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 dark:text-gray-400 mb-8">
          发布日期：{post.date}
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <MDXContent source={post.content} />
        </div>
      </article>
    </main> 
  );
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
}
