import Link from 'next/link';
const blogs = [
    {
      id: 1,
      title: "我的第一篇博客",
      date: "2024-03-20",
      slug: "my-first-blog",
      content: "啥叫开发的哈萨克..."
    },
    // 添加更多博客
  ];
export async function getBlogContent(slug: string) {
    // 模拟网络缓慢
    await new Promise(resolve => setTimeout(resolve, 1000));
    return blogs.find(blog => blog.slug === slug);
}

export default function BlogList() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">博客文章</h1>
        <div className="grid gap-6 max-w-3xl mx-auto">
          {blogs.map((blog) => (
            <Link 
              href={`/blog/${blog.slug}`} 
              key={blog.id}
              className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{blog.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 