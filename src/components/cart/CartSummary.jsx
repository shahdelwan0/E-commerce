import React from "react";

export default function CartSummary({ total = 0 }) {
  return (
    <div className="p-4 border rounded">
      <div className="flex justify-between">
        <span>Total</span>
        <strong>{total}</strong>
      </div>
    </div>
  );
}
