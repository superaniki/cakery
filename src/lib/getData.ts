import markdownToHtml from '@/lib/markdownToHtml';
import { getDocumentBySlug } from 'outstatic/server'

export async function getPage(page: string ) {
  const post = getDocumentBySlug('pages', page, [
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