import client from "./client";

export function getProducts(params = {}) {
  return client.get("/Products", { params }).then((r) => r.data);
}

export function getProduct(id) {
  return client.get(`/Products/${id}`).then((r) => r.data);
}

export function getBrands() {
  return client.get("/Products/brands").then((r) => r.data);
}

export function getCategories() {
  return client.get("/Products/categories").then((r) => r.data);
}
