import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductsPage() {
  return (
    <div style={{ padding: "2rem", display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
