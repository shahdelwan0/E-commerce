import React, { createContext, useEffect, useState } from "react";
import * as basketApi from "../api/basket";
import { BASKET_ID_KEY } from "../utils/constants";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [basket, setBasket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const id = localStorage.getItem(BASKET_ID_KEY);
      if (id) {
        try {
          const data = await basketApi.getBasket(id);
          setBasket(data);
        } catch (e) {
          setBasket(null);
        }
      }
      setLoading(false);
    }
    load();
  }, []);

  function computeTotals(items = []) {
    const itemCount = items.reduce((s, i) => s + (i.quantity || 0), 0);
    const total = items.reduce(
      (s, i) => s + (i.price || 0) * (i.quantity || 0),
      0,
    );
    return { itemCount, total };
  }

  async function addToCart(item) {
    const existing = basket || { items: [] };
    const idx = existing.items.findIndex((i) => i.productId === item.productId);
    if (idx > -1) existing.items[idx].quantity += item.quantity || 1;
    else existing.items.push({ ...item, quantity: item.quantity || 1 });
    const res = await basketApi.updateBasket(existing);
    localStorage.setItem(BASKET_ID_KEY, res.id || "");
    setBasket(res);
    return res;
  }

  async function removeFromCart(productId) {
    if (!basket) return;
    const items = basket.items.filter((i) => i.productId !== productId);
    const res = await basketApi.updateBasket({ ...basket, items });
    setBasket(res);
    return res;
  }

  async function updateQuantity(productId, quantity) {
    if (!basket) return;
    const items = basket.items.map((i) =>
      i.productId === productId ? { ...i, quantity } : i,
    );
    const res = await basketApi.updateBasket({ ...basket, items });
    setBasket(res);
    return res;
  }

  async function clearCart() {
    if (!basket) return;
    await basketApi.deleteBasket(basket.id);
    localStorage.removeItem(BASKET_ID_KEY);
    setBasket(null);
  }

  const { itemCount, total } = computeTotals(basket?.items || []);

  return (
    <CartContext.Provider
      value={{
        basket,
        itemCount,
        total,
        loading,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
