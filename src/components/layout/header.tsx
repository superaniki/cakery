import Image from "next/image";
import Link from "next/link";


function HeaderLink({ href, children }: { href: string, children: React.ReactNode }) {
  return <Link className="m-auto" href={href}>{children}</Link>
}

export default function Header() {
  return <div className="flex h-100px p-10 justify-center">
    <div className="block w-full mx-8 md:flex md:justify-between">
      <Link className="table m-auto sm:m-0 sm:block" href="/">
        <Image className="flex justify-center" alt="Munamii cakery" src="/logo.png" width={150} height={150}></Image>
      </Link>
      <div className="text-xl grid grid-cols-2 sm:ml-10 sm:items-end sm:flex sm:justify-between sm:gap-10">
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/about">About</HeaderLink>
        <HeaderLink href="/products">Products</HeaderLink>
        <HeaderLink href="contact">Contact</HeaderLink>
      </div>
    </div>
  </div>
}