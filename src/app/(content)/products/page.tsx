import ProductGrid from "@/components/product-grid/product-grid";
import { client } from "@/sanity/client";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { Cake } from "@/types/product";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


//const EVENTS_QUERY = `*[_type == "event" && defined(slug.current)]{_id, name, slug, date}|order(date desc)`;
const CAKES_QUERY = `*[_type == "cake" && defined(slug.current)]{_id, name, slug, file, price, coverImage, 
  content, cakeType, "vectorDataUrl" : vectorData.asset->url}`;


const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const revalidate = 10;

function sanityCakes2Cakes(docs: SanityDocument[]) {
  const cupCakes = [] as Cake[];
  const weddingCakes = [] as Cake[];
  docs.map(doc => {
    const cake = {} as Cake;
    cake.id = doc._id;
    cake.title = doc.name;
    cake.slug = doc.slug;
    cake.coverImage = doc.coverImage ? urlFor(doc.coverImage)?.url() : "";
    console.log(cake.coverImage);
    cake.price = doc.price;
    cake.content = doc.content;
    cake.typeOfCake = doc.cakeType;
    cake.meshUrl = doc.vectorDataUrl;

    console.log(doc.cakeType);

    if (doc.cakeType == "cupcake")
      cupCakes.push(cake);
    else if (doc.cakeType == "weddingcake")
      weddingCakes.push(cake);
  })
  return [cupCakes, weddingCakes]
}

export default async function Page() {

  const sanityCakes = await client.fetch<SanityDocument[]>(CAKES_QUERY);
  const [cupCakes, weddingCakes] = sanityCakes2Cakes(sanityCakes);

  return <>
    <ProductGrid type={"Cupcakes"} products={cupCakes} />
    <ProductGrid type={"Weddingcakes"} products={weddingCakes} />
  </>
}


/*



    <ProductGrid type={"Cupcakes"} products={cupCakes} />
    <ProductGrid type={"Wedding cakes"} products={weddingCakes} />

  //const events = await client.fetch<SanityDocument[]>(EVENTS_QUERY);



 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
      Events
    </h2>
    <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
      {events.map((event) => (
        <li
          className="event-card bg-white dark:bg-gray-950 p-4 rounded-lg shadow-md"
          key={event._id}
        >
          <Link
            className="hover:underline"
            href={`/products/${event.slug.current}`}
          >
            <h2 className="text-xl font-semibold">{event?.name}</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {new Date(event?.date).toLocaleDateString()}
            </p>
          </Link>
        </li>
      ))}
    </ul>
*/


// GROQ query

//const URL_QUERY = '*[_type == "cake"] { title, "manuscriptURL": manuscript.asset->url}'
// Then you can use the URL in HTML for example like this:
// <a href={`${manuscriptURL}?dl=`}>Manuscript</a>

/*
// GROQ query
*[_type == 'movie'] {
  title,
  "manuscriptURL": manuscript.asset->url
}

// Then you can use the URL in HTML for example like this:
// <a href={`${manuscriptURL}?dl=`}>Manuscript</a>
*/
