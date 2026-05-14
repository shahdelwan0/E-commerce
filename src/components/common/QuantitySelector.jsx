import React from "react";

export default function QuantitySelector({ value = 1, onChange }) {
  return (
    <div className="inline-flex items-center">
      <button onClick={() => onChange(Math.max(1, value - 1))} className="px-2">
        -
      </button>
      <div className="px-3">{value}</div>
      <button onClick={() => onChange(value + 1)} className="px-2">
        +
      </button>
    </div>
  );
}
