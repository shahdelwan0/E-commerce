
export default function LoadingSpinner({ size = "md", message = null }) {
  const sizes = { sm: "w-6 h-6", md: "w-10 h-10", lg: "w-16 h-16" };
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent border-red-500 ${sizes[size]}`}
      ></div>
      {message && <div className="mt-2 text-sm text-gray-600">{message}</div>}
    </div>
  );
}
