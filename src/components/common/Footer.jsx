import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
        <div>Talabat &copy; {new Date().getFullYear()}</div>
        <div className="mt-2">
          <a className="mx-2 text-gray-500">Products</a>
          <a className="mx-2 text-gray-500">About</a>
          <a className="mx-2 text-gray-500">Contact</a>
        </div>
      </div>
    </footer>
  );
}
