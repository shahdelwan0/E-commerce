import client from "./client";

export function getBasket(basketId) {
  return client
    .get("/Basket", { params: { id: basketId } })
    .then((r) => r.data);
}

export function updateBasket(basketData) {
  return client.post("/Basket", basketData).then((r) => r.data);
}

export function deleteBasket(basketId) {
  return client
    .delete("/Basket", { params: { id: basketId } })
    .then((r) => r.data);
}
