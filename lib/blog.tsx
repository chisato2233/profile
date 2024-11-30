import { blogs } from "@/app/data/blogs";

export async function getBlogContent(slug: string) {
    // 模拟网络缓慢
    await new Promise(resolve => setTimeout(resolve, 1000));
    return blogs.find(blog => blog.slug === slug);
}
