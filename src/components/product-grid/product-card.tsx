import Image from "next/image";
import { ProductMesh } from "./product-mesh";
import { Suspense } from "react";
import Link from "next/link";


export default function ProductCard({ imageUrl, name, price, type, meshUrl = null }: { imageUrl: string, name: string, price: number, type: string, meshUrl?: string | null }) {
  return <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    {meshUrl !== null ?
      <div className="h-[320px] w-[288px]">
        <ProductMesh meshUrl={meshUrl} />
      </div>
      :
      <Image src={imageUrl} height={320} width={288}
        alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
    }
    <div className="px-4 py-3 w-72">
      <span className="text-gray-400 mr-3 uppercase text-xs">{type}</span>
      <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
      <div className="flex items-center">
        <p className="text-lg font-semibold text-black cursor-auto my-3">{price}SEK</p>
        <del>
          <p className="text-sm text-gray-600 cursor-auto ml-2">{price + 50}SEK</p>
        </del>
      </div>
    </div>
  </div>
}