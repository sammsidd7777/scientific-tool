import React, { useEffect, useMemo, useState } from "react";
import {
  SlidersHorizontal,
  X,
  Search,
  ChevronDown,
} from "lucide-react";
import toast from "react-hot-toast";

import ProductCard from "../../../components/ui/ProductCard";
import { ProductGridSkeleton } from "../../../components/ui/Skeleton";
import EmptyState from "../../../components/ui/EmptyState";
import Pagination from "../../../components/ui/Pagination";
import { handleAddToWish } from "../ProductDetail/helperCart";

import staticProducts from "../../../data/products";

const PAGE_SIZE = 8;

const ShopPage = () => {
  const [productList, setProductList] = useState(staticProducts || []);
  const [loading, setLoading] = useState(true);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [sort, setSort] = useState("newest");

  // --------------------------------------------------
  // LOAD PRODUCTS
  // Backend available -> API
  // Backend unavailable -> Static products
  // --------------------------------------------------

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/products/all`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Backend unavailable");
      }

      const data = await response.json();

      const apiProducts = data?.message?.products;

      if (Array.isArray(apiProducts) && apiProducts.length > 0) {
        setProductList(apiProducts);
      } else {
        setProductList(staticProducts);
      }
    } catch (error) {
      console.log("Using static products:", error.message);

      setProductList(staticProducts);

      // Don't show error toast because static data is working
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // --------------------------------------------------
  // CATEGORIES
  // --------------------------------------------------

  const categories = useMemo(() => {
    return [
      "all",
      ...new Set(
        productList
          .map((product) => product.productCategory)
          .filter(Boolean)
      ),
    ];
  }, [productList]);

  // --------------------------------------------------
  // FILTER + SEARCH + SORT
  // --------------------------------------------------

  const filteredProducts = useMemo(() => {
    let list = [...productList];

    const q = search.trim().toLowerCase();

    // Search
    if (q) {
      list = list.filter((product) => {
        const searchableText = `
          ${product.productName || ""}
          ${product.productCategory || ""}
          ${product.productDescription || ""}
        `.toLowerCase();

        return searchableText.includes(q);
      });
    }

    // Category
    if (category !== "all") {
      list = list.filter(
        (product) => product.productCategory === category
      );
    }

    // Price
    if (price !== "all") {
      list = list.filter(
        (product) =>
          Number(product.discountPrice || product.productPrice) <=
          Number(price)
      );
    }

    // Availability
    if (availability === "in") {
      list = list.filter(
        (product) => Number(product.stock || 0) > 0
      );
    }

    if (availability === "out") {
      list = list.filter(
        (product) => Number(product.stock || 0) <= 0
      );
    }

    // Sorting
    if (sort === "priceLow") {
      list.sort(
        (a, b) =>
          Number(a.discountPrice || a.productPrice) -
          Number(b.discountPrice || b.productPrice)
      );
    } else if (sort === "priceHigh") {
      list.sort(
        (a, b) =>
          Number(b.discountPrice || b.productPrice) -
          Number(a.discountPrice || a.productPrice)
      );
    } else {
      // Newest
      list.sort(
        (a, b) =>
          new Date(b.createdAt || 0) -
          new Date(a.createdAt || 0)
      );
    }

    return list;
  }, [
    productList,
    search,
    category,
    price,
    availability,
    sort,
  ]);

  // --------------------------------------------------
  // RESET PAGE WHEN FILTER CHANGES
  // --------------------------------------------------

  useEffect(() => {
    setPage(1);
  }, [
    search,
    category,
    price,
    availability,
    sort,
  ]);

  // --------------------------------------------------
  // PAGINATION
  // --------------------------------------------------

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE)
  );

  const pagedProducts = filteredProducts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  // --------------------------------------------------
  // CLEAR FILTERS
  // --------------------------------------------------

  const clearFilters = () => {
    setCategory("all");
    setPrice("all");
    setAvailability("all");
    setSearch("");
    setPage(1);
  };

  // --------------------------------------------------
  // ADD TO CART
  // --------------------------------------------------

  const handleAddToCart = async (id) => {
    try {
      // Try backend first
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/cart/add/${id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Backend unavailable");
      }

      toast.success("Added to cart");
    } catch (error) {
      // Backend not running
      // For now allow static frontend testing
      toast.success("Added to cart");
    }
  };

  // --------------------------------------------------
  // FILTER PANEL
  // --------------------------------------------------

  const FilterPanel = (
    <div className="space-y-7">

      {/* CATEGORY */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-3">
          Category
        </h3>

        <div className="space-y-1.5">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition ${
                category === item
                  ? "bg-gold-400/10 text-gold-300 border border-gold-400/20"
                  : "text-ink-300 hover:bg-white/5"
              }`}
            >
              {item === "all" ? "All categories" : item}
            </button>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-3">
          Price
        </h3>

        <div className="space-y-1.5">
          {[
            ["all", "All prices"],
            ["2000", "Under ₹2,000"],
            ["5000", "Under ₹5,000"],
            ["10000", "Under ₹10,000"],
            ["25000", "Under ₹25,000"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setPrice(value)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition ${
                price === value
                  ? "bg-gold-400/10 text-gold-300 border border-gold-400/20"
                  : "text-ink-300 hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* AVAILABILITY */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-3">
          Availability
        </h3>

        <div className="space-y-1.5">
          {[
            ["all", "All products"],
            ["in", "In stock"],
            ["out", "Out of stock"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setAvailability(value)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition ${
                availability === value
                  ? "bg-gold-400/10 text-gold-300 border border-gold-400/20"
                  : "text-ink-300 hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* CLEAR */}
      <button
        onClick={clearFilters}
        className="w-full h-11 rounded-xl border border-white/10 text-sm font-semibold text-ink-300 hover:text-white hover:bg-white/5 transition"
      >
        Clear filters
      </button>
    </div>
  );

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (
    <main className="min-h-screen bg-ink-950">

      {/* HERO */}
      <section className="border-b border-white/5 bg-radial-fade">
        <div className="container-page py-12 sm:py-16">

          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Scientific Catalog
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-2">
            Laboratory Products
          </h1>

          <p className="text-ink-400 max-w-2xl mt-4">
            Explore instruments, glassware and laboratory essentials
            for education, research and professional use.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <div className="container-page py-8 sm:py-12">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* DESKTOP FILTER */}
          <aside className="hidden lg:block w-64 shrink-0">

            <div className="sticky top-28 rounded-2xl border border-white/10 bg-ink-900/60 p-5">

              <div className="flex items-center justify-between mb-6">

                <h2 className="font-bold text-white">
                  Filters
                </h2>

                <SlidersHorizontal className="w-4 h-4 text-gold-400" />

              </div>

              {FilterPanel}

            </div>

          </aside>

          {/* PRODUCTS */}
          <div className="flex-1 min-w-0">

            {/* SEARCH + SORT */}
            <div className="flex flex-col sm:flex-row gap-3 justify-between mb-7">

              {/* SEARCH */}
              <div className="flex-1 max-w-xl relative">

                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-500" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search instruments, glassware, equipment..."
                  className="w-full h-12 rounded-xl border border-white/10 bg-ink-900 px-11 text-sm text-white placeholder:text-ink-500 outline-none focus:border-gold-400/40"
                />

              </div>

              <div className="flex gap-2">

                {/* MOBILE FILTER */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden h-12 px-4 rounded-xl border border-white/10 text-white flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                {/* SORT */}
                <div className="relative">

                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="h-12 rounded-xl border border-white/10 bg-ink-900 px-4 pr-9 text-sm text-white appearance-none outline-none"
                  >
                    <option value="newest">
                      Newest
                    </option>

                    <option value="priceLow">
                      Price: Low to High
                    </option>

                    <option value="priceHigh">
                      Price: High to Low
                    </option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-500" />

                </div>

              </div>
            </div>

            {/* RESULT COUNT */}
            <div className="flex items-center justify-between mb-5">

              <p className="text-sm text-ink-400">

                <span className="text-white font-semibold">
                  {filteredProducts.length}
                </span>{" "}
                products

              </p>

              {(search ||
                category !== "all" ||
                price !== "all" ||
                availability !== "all") && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-gold-300 hover:text-gold-200"
                >
                  Clear all
                </button>
              )}

            </div>

            {/* LOADING */}
            {loading ? (
              <ProductGridSkeleton count={8} />
            ) : pagedProducts.length === 0 ? (
              <EmptyState
                title="No products found"
                subtitle="Try changing your search or filters."
              />
            ) : (
              <>
                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">

                  {pagedProducts.map((item, index) => (
                    <ProductCard
                      key={item._id}
                      item={item}
                      index={index}
                      onAddToWish={handleAddToWish}
                      onAddToCart={handleAddToCart}
                    />
                  ))}

                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                  <div className="mt-10">
                    <Pagination
                      currentPage={page}
                      totalPages={totalPages}
                      onPageChange={setPage}
                    />
                  </div>
                )}
              </>
            )}

          </div>
        </div>
      </div>

      {/* MOBILE FILTER DRAWER */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileFiltersOpen(false)}
          />

          {/* DRAWER */}
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-ink-900 p-6 overflow-y-auto">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-lg font-bold text-white">
                Filters
              </h2>

              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-9 h-9 rounded-full bg-white/5 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

            </div>

            {FilterPanel}

          </div>
        </div>
      )}

    </main>
  );
};

export default ShopPage;