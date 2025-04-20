import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/products">Products</Link>
    </nav>
  );
}
