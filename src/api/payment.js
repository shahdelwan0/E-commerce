import client from "./client";

export function createPaymentIntent(basketId) {
  return client.post(`/Payment/${basketId}`).then((r) => r.data);
}
