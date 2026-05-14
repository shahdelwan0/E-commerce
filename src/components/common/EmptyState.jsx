import React from "react";

export default function EmptyState({
  title = "Nothing here",
  message = "",
  actionLabel,
  onAction,
}) {
  return (
    <div className="text-center py-12">
      <div className="text-6xl">🧾</div>
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      {message && <p className="mt-2 text-sm text-gray-500">{message}</p>}
      {actionLabel && (
        <button
          onClick={onAction}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
