import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export async function getBlogContent(slug: string): Promise<{ title: string; date: string; content: MDXRemoteSerializeResult } | null> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const fullPath = path.join(blogsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    console.error("文件不存在!!!");
    console.error(fullPath);
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return {
    title: data.title,
    date: data.date,
    content: mdxSource,
  };
}

export function getAllBlogSlugs() {
    const res = fs.readdirSync(blogsDirectory).map(fileName => fileName.replace(/\.md$/, ''));
    return res;
}
  

export function getAllBlogs() {
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogs = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
    };
  });

  return allBlogs;
}