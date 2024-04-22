import markdownToHtml from '@/lib/markdownToHtml';
import { Cake } from '@/types/product';
import { getDocumentBySlug, getDocuments } from 'outstatic/server'
import { load } from 'outstatic/server'

export async function getPage(page: string) {
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



export async function getAllCakes() {
  const db = await load();
  const cakes = await db.find({ collection: 'cakes' },
    ["title", "slug", "content", "price", "typeOfCake", "coverImage"])
    .toArray() as unknown as Cake[];

  return cakes;
}

export async function getAllCupCakes() {
  const cakes = await getAllCakes();
  const cupCakes = cakes.filter(cake => {

    try {
      return cake.typeOfCake[0].value === "cupcake"
    } catch (err) {
      console.log("error filtering cake: " + cake.title + "-" + err)
      return false;
    }

  });

  return cupCakes;
}

export async function getAllWeddingCakes() {
  const cakes = await getAllCakes();
  const weddingCakes = cakes.filter(cake => {
    try {
      return cake.typeOfCake[0].value === "weddingCake"
    } catch (err) {
      console.log("error filtering cakes:  " + cake.title + "-" + err)
      return false;
    }
  });

  return weddingCakes;
}

