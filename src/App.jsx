import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// Main Website Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import About from "./pages/About";

// Authentication / Checkout
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

// User Dashboard
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* =========================================
            AUTHENTICATION & CHECKOUT
            These pages have their own layout
        ========================================= */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/checkout" element={<Checkout />} />

        {/* =========================================
            MAIN WEBSITE
            Navbar + Footer are provided by MainLayout
        ========================================= */}

        <Route element={<MainLayout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />

          {/* Product Details */}
          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          {/* Shopping Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* About & Contact */}
          <Route path="/about" element={<About />} />
        </Route>

        {/* =========================================
            USER DASHBOARD
            Dashboard/Profile have their own UI
        ========================================= */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;