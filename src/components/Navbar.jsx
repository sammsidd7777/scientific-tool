import React from "react";
import { Link } from "react-router-dom";

const Icon = ({ children, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>
    {children}
  </span>
);

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#e7ebf3] dark:border-gray-800">
      <div className="flex justify-center w-full px-4 md:px-10 py-3">
        <div className="flex items-center justify-between w-full max-w-[1280px] gap-4 md:gap-8">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-[#0d121b] dark:text-white group hover:text-primary transition-colors"
          >
            <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
              <Icon className="text-2xl">science</Icon>
            </div>

            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
              SciSupply
            </h2>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-[500px]">
            <label className="relative flex w-full items-center">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#4c669a]">
                <Icon>search</Icon>
              </div>

              <input
                type="text"
                placeholder="Search for chemicals, glassware, or equipment..."
                className="block w-full rounded-lg border-none bg-[#e7ebf3] dark:bg-gray-800 dark:text-white py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary placeholder:text-[#4c669a]"
              />
            </label>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-6">

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                to="/products"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Products
              </Link>

              <Link
                to="/products?filter=brands"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Brands
              </Link>

              <Link
                to="/products?filter=sale"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Sales
              </Link>
            </nav>

            {/* Auth + Cart */}
            <div className="flex items-center gap-2">

              <Link
                to="/register"
                className="hidden sm:flex items-center justify-center h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-700 transition-colors"
              >
                Register
              </Link>

              <Link
                to="/login"
                className="hidden sm:flex items-center justify-center h-10 px-4 rounded-lg bg-[#e7ebf3] dark:bg-gray-800 dark:text-white text-[#0d121b] text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Login
              </Link>

              <Link
                to="/cart"
                className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative"
              >
                <Icon className="text-[20px]">
                  shopping_cart
                </Icon>

                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
              </Link>

              {/* Mobile Menu */}
              <button
                type="button"
                className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-[#0d121b] dark:text-white"
              >
                <Icon>menu</Icon>
              </button>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;