

import { getDocumentBySlug, getDocuments } from 'outstatic/server'


async function getData() {
  const post = getDocumentBySlug('pages', 'about');

  return post
}

export default async function About() {
  const post = await getData();

  return (
    <>
      At Munamii Cakery, each cake, each box of cupcakes that we make has a very special
      value for us. We not only want to bring a dessert to your table but rather a unique
      experience for you, which will become an unforgettable memory. We have been in the
      pastry market for more than 8 years and now we offer you a new way to shop through
      our website.
      <div>
        <h1 key={post?.slug}>{post?.title}</h1>
      </div>
    </>
  );
}
