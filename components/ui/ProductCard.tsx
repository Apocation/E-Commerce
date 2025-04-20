import Image from "next/image";

interface ProductProps {
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
      <Image
        src={image}
        alt={name}
        width={300} // sesuaikan
        height={200} // sesuaikan
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <h3>{name}</h3>
      <p>Rp {price.toLocaleString()}</p>
      <button>Beli</button>
    </div>
  );
}
