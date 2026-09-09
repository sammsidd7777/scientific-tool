import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FlaskConical,
  Microscope,
  Beaker,
  ShieldCheck,
} from "lucide-react";

import {
  handleAddToCart,
  handleAddToWish,
} from "./ProductDetail/helperCart";

import HeroSection from "../../component/herosection/HeroSection";
import ProductFilterSection from "../../component/products/ProductFilterSection";
import ReviewSection from "../../component/review/ReviewSection";
import CTABanner from "../../component/CTABanner";

import staticProducts from "../../data/products";

const categories = [
  {
    name: "Laboratory Instruments",
    icon: Microscope,
    desc: "Microscopes, balances, meters & instruments",
  },
  {
    name: "Lab Glassware",
    icon: Beaker,
    desc: "Beakers, flasks & measuring glassware",
  },
  {
    name: "Chemistry Equipment",
    icon: FlaskConical,
    desc: "Heating, stirring & chemistry tools",
  },
  {
    name: "Safety Equipment",
    icon: ShieldCheck,
    desc: "Goggles, gloves & laboratory protection",
  },
];

const Homepage = () => {
  const [product, setProduct] = useState(staticProducts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${import.meta.env.VITE_BACK_URL}/products/home`
        );

        if (!response.ok) {
          throw new Error("Could not load products");
        }

        const data = await response.json();

        const apiFeatured = data?.message?.featured;
        const apiProducts = data?.message?.products;

        /*
          Backend available:
          Prefer all products if available so that
          Featured / New Arrivals / On Sale tabs
          can work correctly.
        */

        if (Array.isArray(apiProducts) && apiProducts.length > 0) {
          setProduct(apiProducts);
        } else if (
          Array.isArray(apiFeatured) &&
          apiFeatured.length > 0
        ) {
          setProduct(apiFeatured);
        } else {
          setProduct(staticProducts);
        }
      } catch (error) {
        console.log(
          "Backend unavailable. Using static products:",
          error.message
        );

        setProduct(staticProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchHome();
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= CATEGORIES ================= */}
      <section className="py-14 sm:py-20 bg-ink-950 border-b border-white/5">
        <div className="container-page">
          <div className="flex items-end justify-between gap-5 mb-7">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest2 text-gold-400">
                Shop by category
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
                Equip your laboratory
              </h2>

              <p className="text-sm text-ink-400 mt-2 max-w-xl">
                Explore reliable laboratory instruments, glassware,
                chemistry equipment and safety essentials.
              </p>
            </div>

            <Link
              to="/shop"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-ink-300 hover:text-white transition-colors"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {categories.map(({ name, icon: Icon, desc }) => (
              <Link
                key={name}
                to={`/shop?category=${encodeURIComponent(name)}`}
                className="
                  group
                  rounded-2xl
                  border border-white/10
                  bg-ink-900/60
                  p-5 sm:p-6
                  hover:border-gold-400/30
                  hover:-translate-y-1
                  hover:bg-ink-900
                  transition-all
                "
              >
                <div
                  className="
                    w-11 h-11
                    rounded-xl
                    bg-gold-400/10
                    flex items-center justify-center
                    group-hover:bg-gold-400/20
                    transition-colors
                  "
                >
                  <Icon className="w-5 h-5 text-gold-300" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mt-5">
                  {name}
                </h3>

                <p className="text-xs text-ink-500 mt-1 leading-relaxed">
                  {desc}
                </p>

                <div className="flex items-center gap-1 mt-4 text-xs font-semibold text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <ProductFilterSection
        products={product}
        loading={loading}
        handleAddToWish={handleAddToWish}
        handleAddToCart={handleAddToCart}
      />

      {/* ================= REVIEWS ================= */}
      <ReviewSection />

      {/* ================= CTA ================= */}
      <CTABanner />
    </>
  );
};

export default Homepage;