import ProductGrid from "@/components/product-grid/product-grid";
import { getAllCupCakes, getAllWeddingCakes } from "@/lib/cms-api";

export default async function Page() {
  const cupCakes = await getAllCupCakes();
  const weddingCakes = await getAllWeddingCakes();

  return <>
    <ProductGrid type={"Cupcakes"} products={cupCakes} />
    <ProductGrid type={"Wedding cakes"} products={weddingCakes} />

  </>
}
