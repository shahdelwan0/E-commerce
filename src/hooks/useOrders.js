import { useState } from "react";
import * as ordersApi from "../api/orders";

export default function useOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchOrders() {
    setLoading(true);
    try {
      const res = await ordersApi.getOrders();
      setOrders(res);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  async function fetchOrderById(id) {
    setLoading(true);
    try {
      const res = await ordersApi.getOrder(id);
      return res;
    } catch (e) {
      setError(e);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { orders, loading, error, fetchOrders, fetchOrderById };
}
