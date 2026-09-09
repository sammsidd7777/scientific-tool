import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../components/ui/SectionHeading";
import ProductCard from "../../components/ui/ProductCard";
import { ProductGridSkeleton } from "../../components/ui/Skeleton";
import EmptyState from "../../components/ui/EmptyState";
import { PackageSearch } from "lucide-react";

const ProductFilterSection = ({
  products = [],
  handleAddToWish,
  handleAddToCart,
  loading = false,
}) => {
  const [activeFilter, setActiveFilter] = useState("featured");

  const safeProducts = Array.isArray(products) ? products : [];

  const filterConfig = {
    featured: {
      label: "Featured",
      eyebrow: "Research essentials",
      title: "Featured Products",
      subtitle:
        "Reliable laboratory equipment selected for research, education and everyday laboratory work.",
    },

    new: {
      label: "New Arrivals",
      eyebrow: "Just added",
      title: "New Arrivals",
      subtitle:
        "Explore the latest laboratory equipment and scientific tools added to our collection.",
    },

    sale: {
      label: "On Sale",
      eyebrow: "Limited offers",
      title: "Special Offers",
      subtitle:
        "Save more on selected laboratory equipment without compromising on quality.",
    },
  };

  const currentConfig = filterConfig[activeFilter];

  const filteredProducts = useMemo(() => {
    if (!safeProducts.length) return [];

    // =========================
    // FEATURED
    // =========================
    if (activeFilter === "featured") {
      return safeProducts.filter(
        (product) => product.featured === true
      );
    }

    // =========================
    // NEW ARRIVALS
    // =========================
    if (activeFilter === "new") {
      return [...safeProducts].sort((a, b) => {
        const dateA = new Date(a.createdAt || 0).getTime();
        const dateB = new Date(b.createdAt || 0).getTime();

        return dateB - dateA;
      });
    }

    // =========================
    // ON SALE
    // =========================
    if (activeFilter === "sale") {
      return safeProducts.filter((product) => {
        const originalPrice = Number(product.productPrice || 0);
        const discountPrice = Number(product.discountPrice || 0);

        return (
          originalPrice > 0 &&
          discountPrice > 0 &&
          discountPrice < originalPrice
        );
      });
    }

    return safeProducts;
  }, [safeProducts, activeFilter]);

  /*
   * Show maximum 4 products on homepage.
   */
  const visibleProducts = filteredProducts.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-ink-950">
      <div className="container-page">

        {/* ================= SECTION HEADING ================= */}
        <SectionHeading
          eyebrow={currentConfig.eyebrow}
          title={currentConfig.title}
          subtitle={currentConfig.subtitle}
        />

        {/* ================= FILTER TABS ================= */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {Object.entries(filterConfig).map(([key, tab]) => {
            const isActive = activeFilter === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFilter(key)}
                className={`
                  relative
                  h-11
                  px-5
                  rounded-full
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "text-ink-950"
                      : "text-ink-300 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="home-tab-pill"
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-gold-400
                    "
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= PRODUCTS ================= */}
        {loading ? (
          <ProductGridSkeleton count={4} />
        ) : visibleProducts.length === 0 ? (
          <EmptyState
            icon={PackageSearch}
            title={`No ${currentConfig.label.toLowerCase()} products`}
            subtitle="Try another category or check back later."
          />
        ) : (
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-4
              gap-4
              md:gap-6
            "
          >
            {visibleProducts.map((item, index) => (
              <ProductCard
                key={item._id || item.id || `product-${index}`}
                item={item}
                index={index}
                onAddToWish={handleAddToWish}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {/* ================= VIEW ALL ================= */}
        {!loading && visibleProducts.length > 0 && (
          <div className="flex justify-center mt-10">
            <a
              href="/shop"
              className="
                inline-flex
                items-center
                justify-center
                h-11
                px-6
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-sm
                font-semibold
                text-ink-200
                hover:bg-white/[0.07]
                hover:border-gold-400/30
                hover:text-white
                transition-all
              "
            >
              View all products
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductFilterSection;