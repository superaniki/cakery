import { Cake } from "@/types/product";
import ProductCard from "./product-card";

export default function ProductGrid({ type, products }: { type: string, products: Cake[] }) {

  return (
    <section className="mb-24" id={type}>
      <div>
        {type}
      </div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10">
        {
          products.map(product =>
            <ProductCard meshUrl={product.meshUrl} key={product.id} imageUrl={product.coverImage || ""} type={type} name={product.title} price={Number(product.price)} />
          )
        }
      </div>
    </section >
  );
}
