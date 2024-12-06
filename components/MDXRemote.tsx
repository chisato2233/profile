'use client';

import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

type MDXContentProps = {
  source: MDXRemoteSerializeResult;
};

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} />;
}