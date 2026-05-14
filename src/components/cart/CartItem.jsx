import React from "react";

export default function CartItem({ item }) {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      <div className="w-16 h-16 bg-gray-100" />
      <div className="flex-1">
        <div className="font-medium">{item?.name}</div>
        <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
      </div>
      <div className="font-medium">{item.price}</div>
    </div>
  );
}
