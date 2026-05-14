import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id || p.productId} product={p} />
      ))}
    </div>
  );
}
