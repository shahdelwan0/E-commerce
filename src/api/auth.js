import client from "./client";

export function loginUser(credentials) {
  return client.post("/Account/login", credentials).then((r) => r.data);
}

export function registerUser(userData) {
  return client.post("/Account/register", userData).then((r) => r.data);
}

export function getCurrentUser() {
  return client.get("/Account").then((r) => r.data);
}

export function getUserAddress() {
  return client.get("/Account/address").then((r) => r.data);
}

export function updateUserAddress(addressData) {
  return client.put("/Account/address", addressData).then((r) => r.data);
}
