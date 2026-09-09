import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Star,
  PackageCheck,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import toast from "react-hot-toast";

import Button from "../../../components/ui/Button";
import ProductCard from "../../../components/ui/ProductCard";
import { Skeleton } from "../../../components/ui/Skeleton";

import staticProducts from "../../../data/products";

const ProductDetail = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [mainImg, setMainImg] = useState("");
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH PRODUCT
  // =========================
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // First check static products
        const staticProduct = staticProducts.find(
          (product) =>
            String(product._id || product.id) === String(id)
        );

        // If static product exists
        if (staticProduct) {
          setDetail(staticProduct);

          setMainImg(
            staticProduct.productImg?.[0] || ""
          );

          const relatedProducts = staticProducts
            .filter(
              (product) =>
                product.productCategory ===
                  staticProduct.productCategory &&
                String(product._id || product.id) !== String(id)
            )
            .slice(0, 4);

          setSimilar(relatedProducts);

          return;
        }

        // =========================
        // BACKEND FALLBACK
        // =========================
        const res = await fetch(
          `${import.meta.env.VITE_BACK_URL}/products/detail/${id}`
        );

        if (!res.ok) {
          throw new Error("Product not found");
        }

        const data = await res.json();

        const backendProduct =
          data?.message?.datas?.product_detail;

        if (!backendProduct) {
          throw new Error("Product not found");
        }

        setDetail(backendProduct);

        setSimilar(
          data?.message?.datas?.product || []
        );

        setMainImg(
          backendProduct.productImg?.[0] || ""
        );
      } catch (error) {
        console.error("Product detail error:", error);

        setDetail(null);

        toast.error("Could not load product");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  // =========================
  // ADD TO CART
  // =========================
  const addCart = async (productId = id) => {
    try {
      const isStaticProduct = staticProducts.some(
        (product) =>
          String(product._id || product.id) ===
          String(productId)
      );

      // Static frontend testing
      if (isStaticProduct) {
        toast.success("Added to cart");
        return;
      }

      const res = await fetch(
        `${import.meta.env.VITE_BACK_URL}/cart/add/${productId}`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error(
          "Please login to add products"
        );
      }

      toast.success("Added to cart");
    } catch (error) {
      toast.error(
        error.message || "Could not add to cart"
      );
    }
  };

  // =========================
  // ADD TO WISHLIST
  // =========================
  const addWish = async (productId = id) => {
    try {
      const isStaticProduct = staticProducts.some(
        (product) =>
          String(product._id || product.id) ===
          String(productId)
      );

      // Static frontend testing
      if (isStaticProduct) {
        toast.success("Added to wishlist");
        return;
      }

      const res = await fetch(
        `${import.meta.env.VITE_BACK_URL}/wish/add/${productId}`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error(
          "Please login to add wishlist"
        );
      }

      toast.success("Added to wishlist");
    } catch (error) {
      toast.error(
        error.message || "Please login first"
      );
    }
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <main className="min-h-screen bg-ink-950">
        <div className="container-page py-16">
          <Skeleton className="h-4 w-40 mb-8" />

          <div className="grid lg:grid-cols-2 gap-12">
            <Skeleton className="aspect-square rounded-3xl" />

            <div className="space-y-5">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-14 w-1/2" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  // =========================
  // NOT FOUND
  // =========================
  if (!detail) {
    return (
      <main className="min-h-screen bg-ink-950 flex items-center justify-center">
        <div className="container-page py-24 text-center">
          <PackageCheck className="w-14 h-14 text-ink-600 mx-auto mb-5" />

          <h1 className="text-2xl font-black text-white">
            Product not found
          </h1>

          <p className="text-ink-500 mt-2">
            The product you're looking for is unavailable.
          </p>

          <Link
            to="/shop"
            className="
              inline-flex
              items-center
              gap-2
              mt-7
              px-5
              h-11
              rounded-full
              bg-gold-400
              text-ink-950
              text-sm
              font-bold
            "
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  // =========================
  // PRICE
  // =========================
  const originalPrice = Number(
    detail.productPrice || 0
  );

  const discountPrice = Number(
    detail.discountPrice || 0
  );

  const hasDiscount =
    discountPrice > 0 &&
    discountPrice < originalPrice;

  const price = hasDiscount
    ? discountPrice
    : originalPrice;

  const discount = hasDiscount
    ? Math.round(
        ((originalPrice - discountPrice) /
          originalPrice) *
          100
      )
    : 0;

  // =========================
  // STOCK
  // =========================
  const stock = Number(detail.stock || 0);
  const isInStock = stock > 0;

  // =========================
  // RELATED PRODUCTS
  // =========================
  const relatedProducts =
    similar.length > 0
      ? similar.slice(0, 4)
      : staticProducts
          .filter(
            (product) =>
              product.productCategory ===
                detail.productCategory &&
              String(product._id || product.id) !==
                String(detail._id || detail.id)
          )
          .slice(0, 4);

  return (
    <main className="min-h-screen bg-ink-950">
      <div className="container-page py-8 sm:py-12">

        {/* ================= BREADCRUMB ================= */}
        <div className="text-xs text-ink-500 mb-8 flex flex-wrap items-center">
          <Link
            to="/shop"
            className="hover:text-white transition-colors"
          >
            Products
          </Link>

          <span className="mx-2">/</span>

          <Link
            to={`/shop?category=${encodeURIComponent(
              detail.productCategory
            )}`}
            className="text-gold-400 hover:text-gold-300"
          >
            {detail.productCategory}
          </Link>

          <span className="mx-2">/</span>

          <span className="text-ink-400 line-clamp-1">
            {detail.productName}
          </span>
        </div>

        {/* ================= PRODUCT ================= */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ================= IMAGE ================= */}
          <div>
            <div
              className="
                relative
                rounded-3xl
                border border-white/10
                bg-ink-900/60
                aspect-square
                flex
                items-center
                justify-center
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  w-72
                  h-72
                  rounded-full
                  bg-gold-500/10
                  blur-3xl
                "
              />

              {mainImg ? (
                <img
                  src={mainImg}
                  alt={detail.productName}
                  className="
                    relative
                    w-full
                    h-full
                    object-contain
                    p-8
                    sm:p-12
                  "
                />
              ) : (
                <PackageCheck className="w-20 h-20 text-ink-600" />
              )}

              {/* SALE */}
              {hasDiscount && (
                <span
                  className="
                    absolute
                    top-5
                    left-5
                    rounded-full
                    bg-gold-400
                    px-3
                    py-1.5
                    text-xs
                    font-black
                    text-ink-950
                  "
                >
                  {discount}% OFF
                </span>
              )}

              {/* FEATURED */}
              {detail.featured === true && (
                <span
                  className="
                    absolute
                    top-5
                    right-5
                    rounded-full
                    border
                    border-white/10
                    bg-ink-950/80
                    backdrop-blur
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  Featured
                </span>
              )}
            </div>

            {/* ================= THUMBNAILS ================= */}
            {detail.productImg?.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
                {detail.productImg.map((img, index) => (
                  <button
                    key={`${img}-${index}`}
                    type="button"
                    onClick={() => setMainImg(img)}
                    className={`
                      w-20
                      h-20
                      shrink-0
                      rounded-xl
                      overflow-hidden
                      border-2
                      bg-ink-900
                      transition-all
                      ${
                        mainImg === img
                          ? "border-gold-400"
                          : "border-white/10 hover:border-white/30"
                      }
                    `}
                  >
                    <img
                      src={img}
                      alt={`${detail.productName} ${index + 1}`}
                      className="
                        w-full
                        h-full
                        object-contain
                        p-2
                      "
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ================= PRODUCT INFO ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            {/* CATEGORY */}
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-widest2
                text-gold-400
              "
            >
              {detail.productCategory}
            </span>

            {/* NAME */}
            <h1
              className="
                text-3xl
                sm:text-4xl
                font-black
                text-white
                tracking-tightest
                mt-3
              "
            >
              {detail.productName}
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-2 mt-4">
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />

              <span className="text-sm text-white font-semibold">
                {Number(detail.rating || 0).toFixed(1)}
              </span>

              <span className="text-sm text-ink-500">
                ({detail.totalReviews || 0} reviews)
              </span>
            </div>

            {/* PRICE */}
            <div className="flex items-end gap-3 mt-7 flex-wrap">
              <span className="text-3xl font-black text-white">
                ₹{Number(price).toLocaleString("en-IN")}
              </span>

              {hasDiscount && (
                <>
                  <span className="text-base text-ink-500 line-through mb-1">
                    ₹
                    {Number(
                      detail.productPrice
                    ).toLocaleString("en-IN")}
                  </span>

                  <span className="text-sm font-bold text-emerald-400 mb-1">
                    Save ₹
                    {(
                      originalPrice -
                      discountPrice
                    ).toLocaleString("en-IN")}
                  </span>
                </>
              )}
            </div>

            {/* DESCRIPTION */}
            <p className="text-ink-300 leading-relaxed mt-6">
              {detail.productDescription ||
                "Reliable scientific equipment designed for laboratory and research applications."}
            </p>

            {/* STOCK */}
            <div
              className={`
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-full
                px-3
                py-1.5
                text-xs
                font-semibold
                ${
                  isInStock
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "bg-red-400/10 text-red-300"
                }
              `}
            >
              <span className="w-2 h-2 rounded-full bg-current" />

              {isInStock
                ? `${stock} units available`
                : "Currently out of stock"}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-3 mt-8">
              <Button
                variant="gold"
                size="lg"
                icon={ShoppingCart}
                disabled={!isInStock}
                onClick={() =>
                  addCart(detail._id || detail.id)
                }
                className="flex-1 sm:flex-none sm:px-12"
              >
                {isInStock
                  ? "Add to Cart"
                  : "Out of Stock"}
              </Button>

              <button
                type="button"
                onClick={() =>
                  addWish(detail._id || detail.id)
                }
                aria-label="Add to wishlist"
                className="
                  w-14
                  h-14
                  rounded-xl
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:text-gold-300
                  hover:border-gold-400/40
                  transition-all
                "
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* ================= BENEFITS ================= */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-4
                mt-10
                pt-8
                border-t
                border-white/10
              "
            >
              {[
                [
                  Truck,
                  "Safe delivery",
                  "Careful laboratory packing",
                ],
                [
                  ShieldCheck,
                  "Quality focus",
                  "Reliable scientific products",
                ],
                [
                  RotateCcw,
                  "Support",
                  "Help when you need it",
                ],
              ].map(([Icon, label, sub]) => (
                <div
                  key={label}
                  className="flex items-start gap-3"
                >
                  <Icon className="w-5 h-5 text-gold-400 shrink-0" />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {label}
                    </p>

                    <p className="text-xs text-ink-500 mt-0.5">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* PRODUCT STATUS */}
            <div className="mt-8 space-y-3">
              {detail.featured === true && (
                <div className="flex items-center gap-2 text-sm text-ink-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  Featured laboratory product
                </div>
              )}

              {hasDiscount && (
                <div className="flex items-center gap-2 text-sm text-ink-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Special price available
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* ================= RELATED PRODUCTS ================= */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 sm:mt-28">
            <div className="mb-8">
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest2
                  text-gold-400
                "
              >
                More from this category
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
                Related Products
              </h2>

              <p className="text-sm text-ink-500 mt-2">
                More laboratory products you may find useful.
              </p>
            </div>

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
              {relatedProducts.map((item, index) => (
                <ProductCard
                  key={
                    item._id ||
                    item.id ||
                    `related-${index}`
                  }
                  item={item}
                  index={index}
                  onAddToWish={() =>
                    addWish(item._id || item.id)
                  }
                  onAddToCart={() =>
                    addCart(item._id || item.id)
                  }
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;