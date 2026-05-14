import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ProtectedRoute from "../components/common/ProtectedRoute";

const HomePage = lazy(() => import("../pages/HomePage"));
const ProductListingPage = lazy(() => import("../pages/ProductListingPage"));
const ProductDetailPage = lazy(() => import("../pages/ProductDetailPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));
const OrdersPage = lazy(() => import("../pages/OrdersPage"));
const OrderDetailPage = lazy(() => import("../pages/OrderDetailPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders/:id"
          element={
            <ProtectedRoute>
              <OrderDetailPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
