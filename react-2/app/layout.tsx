import Link from "next/link";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <>
      <header>=header=</header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/blog2">Blog2</Link>
        <Link href="/blog3">Blog3</Link>
        <Link href="/products">Products</Link>
      </nav>
      <main>{children}</main>
      <footer>=footer=</footer>
    </>
  
  );
}