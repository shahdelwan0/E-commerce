import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <section className="bg-white rounded-lg p-8 shadow">
        <h1 className="text-3xl font-bold">Welcome to Talabat</h1>
        <p className="mt-2 text-gray-600">
          A starter e-commerce app built with Vite + React
        </p>
        <div className="mt-4">
          <Link
            to="/products"
            className="inline-block bg-red-500 text-white px-4 py-2 rounded"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
