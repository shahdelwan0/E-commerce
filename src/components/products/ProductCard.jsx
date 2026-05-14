import React from "react";

export default function ProductCard({ product }) {
  return (
    <article className="border rounded p-4">
      <div className="h-48 bg-gray-100 mb-4" />
      <h4 className="font-medium">{product?.name || "Product"}</h4>
      <p className="text-sm text-gray-500">{product?.shortDescription}</p>
    </article>
  );
}
