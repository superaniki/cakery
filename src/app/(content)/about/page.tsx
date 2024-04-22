import markdownToHtml from '@/lib/markdownToHtml';
import { getDocumentBySlug, getCollections, getDocuments, getDocumentPaths } from 'outstatic/server'



async function getData() {
  const post = getDocumentBySlug('pages', 'about', [
    "title",
    "slug",
    "content",
  ]);

  if (post != null) {
    const content = await markdownToHtml(post.content)
    return content;
  }

  return "";
}

export default async function About() {
  const post = await getData();

  return (
    <div
      className="prose lg:prose-xl"
      dangerouslySetInnerHTML={{ __html: post }}
    />
  );
}
