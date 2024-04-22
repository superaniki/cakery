import ProductGrid from "@/components/product-grid/product-grid";
import { cupCakes, weddingCakes } from "@/static-data/products";
export default function Page() {

  return <>
    <ProductGrid type={"Cup cakes"} products={cupCakes} />
    <ProductGrid type={"Wedding cakes"} products={weddingCakes} />
  </>
}
