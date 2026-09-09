import React from "react";
import { Link } from "react-router-dom";

const Icon = ({ children, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>
    {children}
  </span>
);

function Footer() {
  const handleNewsletter = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-[#e7ebf3] dark:border-gray-800 pt-16 pb-8 px-4 md:px-10">

      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">

            <Link
              to="/"
              className="flex items-center gap-2 text-[#0d121b] dark:text-white"
            >
              <div className="size-6 flex items-center justify-center bg-primary/10 rounded text-primary">
                <Icon className="text-lg">science</Icon>
              </div>

              <h2 className="text-lg font-bold">
                SciSupply
              </h2>
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed">
              The trusted partner for laboratories worldwide.
              Providing high-quality chemicals, equipment, and
              safety gear since 2010.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-2">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Facebook
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>

            </div>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-4">

            <h3 className="text-sm font-bold uppercase tracking-wider">
              Shop
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-500">

              <li>
                <Link
                  to="/products?category=instruments"
                  className="hover:text-primary transition-colors"
                >
                  Lab Equipment
                </Link>
              </li>

              <li>
                <Link
                  to="/products?category=chemicals"
                  className="hover:text-primary transition-colors"
                >
                  Chemicals
                </Link>
              </li>

              <li>
                <Link
                  to="/products?category=glassware"
                  className="hover:text-primary transition-colors"
                >
                  Glassware
                </Link>
              </li>

              <li>
                <Link
                  to="/products?category=safety"
                  className="hover:text-primary transition-colors"
                >
                  Safety Gear
                </Link>
              </li>

              <li>
                <Link
                  to="/products?filter=new"
                  className="hover:text-primary transition-colors"
                >
                  New Arrivals
                </Link>
              </li>

            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">

            <h3 className="text-sm font-bold uppercase tracking-wider">
              Support
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-500">

              <li>
                <Link
                  to="/support"
                  className="hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  to="/shipping"
                  className="hover:text-primary transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>

              <li>
                <Link
                  to="/orders"
                  className="hover:text-primary transition-colors"
                >
                  Order Status
                </Link>
              </li>

              <li>
                <Link
                  to="/institutional"
                  className="hover:text-primary transition-colors"
                >
                  Institutional Accounts
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">

            <h3 className="text-sm font-bold uppercase tracking-wider">
              Stay Updated
            </h3>

            <p className="text-sm text-gray-500">
              Subscribe for exclusive offers and scientific news.
            </p>

            <form
              onSubmit={handleNewsletter}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-3 py-2 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <button
                type="submit"
                className="px-3 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Icon className="text-[20px]">
                  send
                </Icon>
              </button>
            </form>

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-8 gap-4">

          <p className="text-xs text-gray-400">
            © 2024 SciSupply Inc. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              to="/privacy"
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              Terms of Service
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;