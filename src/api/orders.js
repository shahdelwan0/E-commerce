import client from "./client";

export function createOrder(orderData) {
  return client.post("/Orders", orderData).then((r) => r.data);
}

export function getOrders() {
  return client.get("/Orders").then((r) => r.data);
}

export function getOrder(id) {
  return client.get(`/Orders/${id}`).then((r) => r.data);
}

export function getDeliveryMethods() {
  return client.get("/Orders/deliveryMethods").then((r) => r.data);
}
