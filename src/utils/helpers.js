export function formatPrice(price = 0, currency = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    price,
  );
}

export function formatDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getStatusColor(status = "") {
  const s = status.toLowerCase();
  if (s.includes("delivered")) return "bg-green-100 text-green-800";
  if (s.includes("processing")) return "bg-yellow-100 text-yellow-800";
  if (s.includes("cancel")) return "bg-red-100 text-red-800";
  return "bg-gray-100 text-gray-800";
}

export function generateBasketId() {
  return "basket_" + Math.random().toString(36).slice(2, 11);
}

export function debounce(func, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}
