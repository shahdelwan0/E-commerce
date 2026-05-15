import React from "react";
import { Link } from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth() || {};
  const { itemCount } = useCart() || {};

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-red-600">
          Talabat
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/products" className="text-gray-700">
            Products
          </Link>
          <Link to="/cart" className="relative text-gray-700">
            Cart
            {itemCount > 0 && (
              <span className="ml-2 inline-block bg-red-500 text-white rounded-full px-2 text-xs">
                {itemCount}
              </span>
            )}
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/orders" className="text-gray-700">
                Orders
              </Link>
              <span className="text-gray-700">
                Hi, {user?.displayName || user?.name || "User"}
              </span>
              <button
                onClick={logout}
                className="ml-2 px-3 py-1 bg-gray-100 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700">
                Login
              </Link>
              <Link
                to="/register"
                className="ml-2 text-white bg-red-500 px-3 py-1 rounded"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
