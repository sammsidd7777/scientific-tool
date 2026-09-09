import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const products = [
  {
    id: 1,
    sku: "EF-500-BORO",
    name: "Erlenmeyer Flask, Wide Neck, 500mL",
    description:
      "Heavy duty rim, graduated, manufactured from borosilicate glass 3.3.",
    price: 12.5,
    unit: "unit",
    category: "Beakers & Flasks",
    material: "Borosilicate Glass 3.3",
    stock: "In Stock",
    stockType: "in-stock",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtbWwSh8yAanM4Dl9HN3mqBZIkWXea3uUT6hKkgC-ImIZ6i5j3Og4dArfDlgmuZm_ujxT6nDcpYfl3oqWLDDEnqj_xNxKRxvQGonkoD-dvDahM1xuBPbd6H909YEW5UBecs6hp4Niq9WuZ-8aVwPwIc6cestnWAEm-DyXNuTVpPzAxCY0CJhOq6U1nz1Xcn9ynbvuyG9pHqLyv4dZROMk-nwtO3DlcRGF7bcL_G1ZYptZGBhvN3p6DmQmEkjgOvnk6FjXedMt1BvI",
  },
  {
    id: 2,
    sku: "BK-SET-1000",
    name: "Beaker Set, Low Form, 50ml - 1000ml",
    description:
      "Set of 5 beakers. Double scale, uniform wall thickness, thermal shock resistant.",
    price: 45,
    unit: "set",
    category: "Beakers & Flasks",
    material: "Borosilicate Glass 3.3",
    stock: "Low Stock",
    stockType: "low-stock",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDouLr6Li3O6NeGlG3gav8FHtc37A0pDEFTds0OlsmyMhZRvZJmYt9-ZTXJJrv3MMEGMsUOn5FFXZcMFnuT5yQUKzAaBQuEFggwNOrvQ2k35z_WnHgMqsPy05v03XuaP8ks2gc3I5X_MWbPT5F63DEWSVB17COynEeLU88CULjbyFHkTka5EMpp7uavyHzrmYTqQC0x1QBiv0Ti5bd1IvEhiuLgxe0eRZfcd73kZJKWqFxPJt1qq90M0QAQGx2sY7KBrD4Dpnqs2_4",
  },
  {
    id: 3,
    sku: "MS-SLIDE-50",
    name: "Microscope Slides, Box of 50",
    description:
      "Pre-cleaned, ground edges, plain glass. Suitable for routine applications.",
    price: 8.95,
    unit: "box",
    category: "Test Tubes",
    material: "Soda-lime Glass",
    stock: "In Stock",
    stockType: "in-stock",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeLqTGb4DeJDAsBw5WmEdBFHzhDjCgJ0LpMqg7R2pqXMGTXmHjl-BwllzqUNzj_kNZFf9nmILYyQK1Hp4KVWe8fA-aDCZFMgygzpOBvjhPVORLqYlX-d0_lJHTnNQb_pT3voxFneMjXI69d9Z1RQDPq82yuvttEe-rNgdsJU8CSSefFo6gdkO7RG742lXZxkmz13JA8oPTfbpGLu28aKLqMks1ApgmFOcrvFT1ZHaXTAnqkAkKidPfFwO8XuY4L3bQIzz2uyxdh10",
  },
  {
    id: 4,
    sku: "VF-100-A",
    name: "Volumetric Flask, Class A, 100mL",
    description:
      "With batch certificate, standard ground joint and glass stopper.",
    price: 18.25,
    unit: "unit",
    category: "Beakers & Flasks",
    material: "Borosilicate Glass 3.3",
    stock: "Backorder",
    stockType: "backorder",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNANcvke2ldv4LQU9gA_6_Ii-3GPn77vh12edM3FARjtoO8HTPEnJyOeEmpfkJ6U0v-jfd7UkYc69O8amJXwTMBz_1x0U-qaKI1IACW-fTMHTYhVb2FE6Ct7ODxRhNqwh7C1hstnYhQ58gyg008vp-MaBg4j3aO709Y-Nxh8fqb4W9TYArc_WnGg8KrW-AX0DaVLLjzHip9wOyDW0vnGcCujCJmkongBStMj9Y90vxaRhPDhsilmy1-94Gm2674scPlTpPTGmAV_g",
  },
  {
    id: 5,
    sku: "GC-250-HEX",
    name: "Graduated Cylinder, 250mL",
    description:
      "Hexagonal base for stability, pour spout, blue graduations.",
    price: 14.5,
    unit: "unit",
    category: "Pipettes",
    material: "Borosilicate Glass 3.3",
    stock: "In Stock",
    stockType: "in-stock",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzzBwEWCCYtubGxE-jY3eFvY-8pXI3MNWc9DT1cNJO4_aiD_TNKXSewRg0vUgKVwvKt1pBF9e2A0dOQNv39zlOi9iVtCFex5Ja_QI1DsASLiMfXXer3jlIpxG5DrQR6JSy_JXGN9-LSIU2CrCERU4z2LwBDz6CONzcW344kjUUQ_cyfJ74QVdRvQTPBwzNqauIfB9Hmh0EJ5yY5S-nq_33i2QOT4f577XMAknzVbHOO4KrGrA9O4n1tIJCrzxWW_acp0SGFKPU",
  },
  {
    id: 6,
    sku: "PD-GLASS-100",
    name: "Petri Dish, Glass, 100mm",
    description:
      "Autoclavable, high clarity, reusable. Sold in packs of 10.",
    price: 22,
    unit: "pack",
    category: "Condensers",
    material: "Soda-lime Glass",
    stock: "In Stock",
    stockType: "in-stock",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuHNBOwsEplbkMu96EMyZy1t3LjMJbTEwHhLibcfteXpu6WU8TMSG1yKYyTJCOBMoapy2EL05E7Px80akHhFy2YatkuMAH9rEfY6GK-cwaNwR4rX4MWstgCXI6qgC1nnF7cARrqGJoBAyQFjHShrZexo-Gu4lUjCz0IQdjLJbDiwsz5CSr_sPe5qQ0hHCNjFSMqxc-YNCtDL2NS2esam5bQEJileQsXtVx0rSR2RACG-8RL_FglQwukybRrHtx53RfQpG9dyuZHwM",
  },
];

function Icon({ children, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  );
}

function Products() {
  const [searchParams] = useSearchParams();

  const [selectedCategories, setSelectedCategories] = useState([
    "Beakers & Flasks",
  ]);

  const [selectedMaterials, setSelectedMaterials] = useState([
    "Borosilicate Glass 3.3",
  ]);

  const [availability, setAvailability] = useState(["in-stock"]);

  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(500);

  const [sortBy, setSortBy] = useState("Best Selling");
  const [view, setView] = useState("grid");

  const [quantities, setQuantities] = useState({
    1: 1,
    2: 1,
    3: 5,
    4: 1,
    5: 1,
    6: 1,
  });

  const [wishlist, setWishlist] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categoryFromUrl = searchParams.get("category");

  const toggleArrayValue = (value, setter, current) => {
    setter(
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };

  const updateQuantity = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + change),
    }));
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setAvailability([]);
    setMinPrice(0);
    setMaxPrice(1000);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFromUrl) {
      const categoryMap = {
        glassware: "Beakers & Flasks",
        instruments: "Instruments",
        chemicals: "Chemicals",
        safety: "Safety Gear",
      };

      const mappedCategory = categoryMap[categoryFromUrl];

      if (mappedCategory) {
        result = result.filter(
          (product) => product.category === mappedCategory
        );
      }
    }

    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((product) =>
        selectedMaterials.includes(product.material)
      );
    }

    if (availability.length > 0) {
      result = result.filter((product) =>
        availability.includes(product.stockType)
      );
    }

    result = result.filter(
      (product) =>
        product.price >= minPrice &&
        product.price <= maxPrice
    );

    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "Newest Arrivals") {
      result.reverse();
    }

    return result;
  }, [
    selectedCategories,
    selectedMaterials,
    availability,
    minPrice,
    maxPrice,
    sortBy,
    categoryFromUrl,
  ]);

  return (
    <div className="min-h-screen bg-background-light text-[#0d121b]">
      {/* Breadcrumb */}
      <div className="border-b border-[#e7ebf3] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3">
          <nav className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>

            <Icon className="mx-2 text-[18px]">chevron_right</Icon>

            <Link to="/products" className="hover:text-primary">
              Laboratory Supplies
            </Link>

            <Icon className="mx-2 text-[18px]">chevron_right</Icon>

            <span className="font-medium text-[#0d121b]">
              Glassware
            </span>
          </nav>
        </div>
      </div>

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <FilterSidebar
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedMaterials={selectedMaterials}
              setSelectedMaterials={setSelectedMaterials}
              availability={availability}
              setAvailability={setAvailability}
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              clearFilters={clearFilters}
              toggleArrayValue={toggleArrayValue}
            />
          </aside>

          {/* Main Products */}
          <div className="flex-1 min-w-0">

            {/* Heading */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                    Laboratory Glassware
                  </h1>

                  <p className="text-gray-500 text-sm sm:text-base">
                    Professional grade borosilicate glass for research
                    and educational use.
                  </p>
                </div>

                <div className="text-sm font-medium text-gray-500">
                  Showing{" "}
                  <span className="font-bold text-[#0d121b]">
                    {filteredProducts.length ? "1" : "0"}-
                    {filteredProducts.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-bold text-[#0d121b]">
                    435
                  </span>{" "}
                  products
                </div>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#e7ebf3] bg-white p-3 shadow-sm">

                {/* Mobile Filter */}
                <button
                  type="button"
                  onClick={() =>
                    setShowMobileFilters(!showMobileFilters)
                  }
                  className="flex lg:hidden items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-200"
                >
                  <Icon className="text-[19px]">
                    filter_list
                  </Icon>
                  Filters
                </button>

                {/* Sort */}
                <div className="ml-auto md:ml-0 flex items-center gap-3">
                  <span className="hidden sm:inline text-sm text-gray-500">
                    Sort by:
                  </span>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-md border border-gray-200 bg-gray-50 py-2 pl-3 pr-8 text-sm text-gray-700 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option>Best Selling</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                  </select>
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
                  <button
                    type="button"
                    onClick={() => setView("grid")}
                    className={`flex size-8 items-center justify-center rounded ${
                      view === "grid"
                        ? "bg-white text-primary shadow-sm"
                        : "text-gray-400"
                    }`}
                  >
                    <Icon className="text-[19px]">
                      grid_view
                    </Icon>
                  </button>

                  <button
                    type="button"
                    onClick={() => setView("list")}
                    className={`flex size-8 items-center justify-center rounded ${
                      view === "list"
                        ? "bg-white text-primary shadow-sm"
                        : "text-gray-400"
                    }`}
                  >
                    <Icon className="text-[19px]">
                      view_list
                    </Icon>
                  </button>
                </div>
              </div>

              {/* Mobile Filters */}
              {showMobileFilters && (
                <div className="lg:hidden mt-4 rounded-xl border border-[#e7ebf3] bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-bold text-lg">
                      Filters
                    </h3>

                    <button
                      type="button"
                      onClick={clearFilters}
                      className="text-xs font-medium text-primary hover:underline"
                    >
                      Clear All
                    </button>
                  </div>

                  <FilterSidebar
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    selectedMaterials={selectedMaterials}
                    setSelectedMaterials={setSelectedMaterials}
                    availability={availability}
                    setAvailability={setAvailability}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                    clearFilters={clearFilters}
                    toggleArrayValue={toggleArrayValue}
                    mobile
                  />
                </div>
              )}
            </div>

            {/* Products */}
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                  : "flex flex-col gap-4"
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  view={view}
                  quantity={quantities[product.id] || 1}
                  wishlist={wishlist.includes(product.id)}
                  onQuantityChange={updateQuantity}
                  onWishlist={toggleWishlist}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
                <Icon className="mb-3 text-5xl text-gray-300">
                  inventory_2
                </Icon>

                <h3 className="mb-2 text-xl font-bold">
                  No products found
                </h3>

                <p className="mb-5 text-gray-500">
                  Try changing your filters or price range.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="rounded-md bg-primary px-5 py-2.5 text-white hover:bg-blue-700"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-10 flex items-center justify-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  disabled
                  className="flex size-9 sm:size-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 disabled:opacity-50"
                >
                  <Icon>chevron_left</Icon>
                </button>

                <button
                  type="button"
                  className="size-9 sm:size-10 rounded-lg bg-primary text-sm font-medium text-white"
                >
                  1
                </button>

                <button
                  type="button"
                  className="size-9 sm:size-10 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-primary hover:text-primary"
                >
                  2
                </button>

                <button
                  type="button"
                  className="size-9 sm:size-10 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-primary hover:text-primary"
                >
                  3
                </button>

                <span className="px-1 sm:px-2 text-gray-400">
                  ...
                </span>

                <button
                  type="button"
                  className="size-9 sm:size-10 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-primary hover:text-primary"
                >
                  12
                </button>

                <button
                  type="button"
                  className="flex size-9 sm:size-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:border-primary hover:text-primary"
                >
                  <Icon>chevron_right</Icon>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

/* =========================================================
   FILTER SIDEBAR
========================================================= */

function FilterSidebar({
  selectedCategories,
  setSelectedCategories,
  selectedMaterials,
  setSelectedMaterials,
  availability,
  setAvailability,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  clearFilters,
  toggleArrayValue,
  mobile = false,
}) {
  return (
    <div className={mobile ? "" : "space-y-8"}>
      {!mobile && (
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">
            Filters
          </h3>

          <button
            type="button"
            onClick={clearFilters}
            className="text-xs font-medium text-primary hover:underline"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Category */}
      <div className="mb-6 border-b border-gray-200 pb-6">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
          Category
        </h4>

        <div className="space-y-2.5">
          {[
            ["Beakers & Flasks", 435],
            ["Pipettes", 120],
            ["Test Tubes", 85],
            ["Condensers", 42],
          ].map(([name, count]) => (
            <label
              key={name}
              className="flex cursor-pointer items-center gap-3 group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(name)}
                onChange={() =>
                  toggleArrayValue(
                    name,
                    setSelectedCategories,
                    selectedCategories
                  )
                }
                className="size-4 rounded border-gray-300 text-primary focus:ring-primary"
              />

              <span className="text-sm group-hover:text-primary transition-colors">
                {name} ({count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6 border-b border-gray-200 pb-6">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
          Price Range
        </h4>

        <div className="mb-4 flex items-center gap-3">
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              $
            </span>

            <input
              type="number"
              min="0"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(Number(e.target.value))
              }
              className="w-full rounded border border-gray-300 py-2 pl-6 pr-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <span className="text-gray-400">-</span>

          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              $
            </span>

            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Number(e.target.value))
              }
              className="w-full rounded border border-gray-300 py-2 pl-6 pr-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Number(e.target.value))
          }
          className="w-full accent-primary"
        />
      </div>

      {/* Availability */}
      <div className="mb-6 border-b border-gray-200 pb-6">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
          Availability
        </h4>

        <div className="space-y-2.5">
          {[
            ["in-stock", "In Stock", "bg-green-500"],
            ["pre-order", "Pre-order", "bg-orange-400"],
          ].map(([value, label, dot]) => (
            <label
              key={value}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="checkbox"
                checked={availability.includes(value)}
                onChange={() =>
                  toggleArrayValue(
                    value,
                    setAvailability,
                    availability
                  )
                }
                className="size-4 rounded border-gray-300 text-primary focus:ring-primary"
              />

              <span className="flex items-center gap-2 text-sm">
                <span className={`size-2 rounded-full ${dot}`} />
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
          Material
        </h4>

        <div className="space-y-2.5">
          {[
            "Borosilicate Glass 3.3",
            "Soda-lime Glass",
            "Polypropylene",
          ].map((material) => (
            <label
              key={material}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="checkbox"
                checked={selectedMaterials.includes(material)}
                onChange={() =>
                  toggleArrayValue(
                    material,
                    setSelectedMaterials,
                    selectedMaterials
                  )
                }
                className="size-4 rounded border-gray-300 text-primary focus:ring-primary"
              />

              <span className="text-sm">
                {material}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
  product,
  view,
  quantity,
  wishlist,
  onQuantityChange,
  onWishlist,
}) {
  const stockStyles =
    product.stockType === "in-stock"
      ? {
          badge: "bg-green-100 text-green-700",
          dot: "bg-green-500",
        }
      : product.stockType === "low-stock"
      ? {
          badge: "bg-orange-100 text-orange-700",
          dot: "bg-orange-500",
        }
      : {
          badge: "bg-gray-100 text-gray-600",
          dot: "bg-gray-500",
        };

  return (
    <article
      className={`group overflow-hidden rounded-lg border border-[#e7ebf3] bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
        view === "list"
          ? "flex flex-col sm:flex-row"
          : "flex flex-col"
      }`}
    >
      {/* Image */}
      <div
        className={`relative flex items-center justify-center bg-white p-6 ${
          view === "list"
            ? "h-56 sm:h-auto sm:w-64 shrink-0 border-b sm:border-b-0 sm:border-r border-gray-100"
            : "h-56 border-b border-gray-100"
        }`}
      >
        {/* Stock */}
        <span
          className={`absolute left-3 top-3 flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold ${stockStyles.badge}`}
        >
          <span
            className={`size-1.5 rounded-full ${stockStyles.dot}`}
          />

          {product.stock}
        </span>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => onWishlist(product.id)}
          aria-label={
            wishlist
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className={`absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full bg-gray-50 transition-colors ${
            wishlist
              ? "text-red-500"
              : "text-gray-400 hover:text-red-500"
          }`}
        >
          <Icon className="text-[21px]">
            {wishlist ? "favorite" : "favorite_border"}
          </Icon>
        </button>

        <Link
          to={`/products/${product.id}`}
          className="flex h-full items-center justify-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="max-h-44 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 font-mono text-xs text-gray-500">
          SKU: {product.sku}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="mb-2 text-lg font-bold leading-tight text-[#0d121b] transition-colors hover:text-primary"
        >
          {product.name}
        </Link>

        <p className="mb-4 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-auto flex flex-col gap-3 border-t border-gray-100 pt-4">
          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>

            <span className="text-xs text-gray-400">
              / {product.unit}
            </span>
          </div>

          <div className="flex gap-2">
            {/* Quantity */}
            <div className="flex h-9 w-24 shrink-0 items-center overflow-hidden rounded-md border border-gray-200">
              <button
                type="button"
                onClick={() =>
                  onQuantityChange(product.id, -1)
                }
                disabled={product.stockType === "backorder"}
                className="flex h-full w-8 items-center justify-center text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                −
              </button>

              <span className="flex h-full w-8 items-center justify-center text-sm">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() =>
                  onQuantityChange(product.id, 1)
                }
                disabled={product.stockType === "backorder"}
                className="flex h-full w-8 items-center justify-center text-gray-500 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                +
              </button>
            </div>

            {/* Add */}
            {product.stockType === "backorder" ? (
              <button
                type="button"
                disabled
                className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400"
              >
                Waitlist

                <Icon className="text-[18px]">
                  notifications
                </Icon>
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  alert(`${product.name} added to cart`)
                }
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Add

                <Icon className="text-[18px]">
                  shopping_cart
                </Icon>
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Products;