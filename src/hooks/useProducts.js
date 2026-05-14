import { useState, useCallback } from "react";
import * as productsApi from "../api/products";

export default function useProducts(initial = { page: 1, pageSize: 12 }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(initial.page);

  const fetchProducts = useCallback(
    async (params = {}) => {
      setLoading(true);
      setError(null);
      try {
        const res = await productsApi.getProducts({
          page,
          pageSize: initial.pageSize,
          ...filters,
          ...params,
        });
        setProducts(res);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    },
    [page, filters],
  );

  return {
    products,
    loading,
    error,
    fetchProducts,
    setFilters,
    setPage,
    setProducts,
    page,
  };
}
