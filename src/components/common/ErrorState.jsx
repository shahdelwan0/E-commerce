
export default function ErrorState({
  message = "Something went wrong",
  onRetry,
}) {
  return (
    <div className="text-center py-12">
      <div className="text-6xl">⚠️</div>
      <h3 className="mt-4 text-lg font-medium">{message}</h3>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
        >
          Retry
        </button>
      )}
    </div>
  );
}
