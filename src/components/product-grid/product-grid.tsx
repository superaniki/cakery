import { Product } from "@/app/types/product";
import ProductCard from "./product-card";

export default function ProductGrid({ type, products }: { type: string, products: Product[] }) {

  return (
    <section className="mb-24" id={type}>
      <div>
        {type}
      </div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10">
        {
          products.map(product =>
            <ProductCard key={product.image} imageUrl={"/images/" + product.image} type={type} name={product.title} price={product.price} />
          )
        }
      </div>
    </section >
  );
}
