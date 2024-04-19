import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return <div className="flex h-100px bg-gray-200 p-10 justify-center pb-[100px]">
    <div className="flex justify-between w-full mx-8">
      <Link href="/">
        <Image alt="Munamii cakery" src="/logo.png" width={100} height={100}></Image>
      </Link>
      <div className="flex justify-between gap-10 text-xl ml-10 items-end">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="contact">Contact</Link>
      </div>
    </div>
  </div>
}