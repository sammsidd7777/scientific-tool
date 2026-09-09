import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Trash2,
  Star,
  PackageCheck,
} from "lucide-react";

const ProductCard = ({
  item,
  index = 0,
  onAddToWish,
  onAddToCart,
  onDelete,
  showActions = true,
  isWishcard,
  removeWish,
}) => {
  const image = item.productImg?.[0];

  const hasDiscount =
    Number(item.discountPrice) > 0 &&
    Number(item.discountPrice) < Number(item.productPrice);

  const price = hasDiscount
    ? item.discountPrice
    : item.productPrice;

  const discount = hasDiscount
    ? Math.round(
        ((Number(item.productPrice) -
          Number(item.discountPrice)) /
          Number(item.productPrice)) *
          100
      )
    : 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
        delay: Math.min(index, 6) * 0.04,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        rounded-2xl
        border
        border-white/10
        bg-ink-900/70
        overflow-hidden
        hover:border-gold-400/30
        hover:shadow-glow
        transition-all
      "
    >
      {/* PRODUCT IMAGE */}
      <Link
        to={`/productDetail/${item._id}`}
        className="
          block
          relative
          aspect-[4/3]
          overflow-hidden
          bg-white
        "
      >
        {image ? (
          <img
            src={image}
            alt={item.productName}
            loading="lazy"
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        ) : (
          <div
            className="
              w-full
              h-full
              flex
              items-center
              justify-center
              bg-ink-800
              text-ink-500
            "
          >
            <PackageCheck className="w-12 h-12" />
          </div>
        )}

        {/* DISCOUNT */}
        {hasDiscount && (
          <span
            className="
              absolute
              top-3
              left-3
              rounded-full
              bg-gold-400
              px-2.5
              py-1
              text-[10px]
              font-black
              text-ink-950
              shadow-lg
            "
          >
            {discount}% OFF
          </span>
        )}

        {/* OUT OF STOCK */}
        {Number(item.stock || 0) <= 0 && (
          <span
            className="
              absolute
              bottom-3
              left-3
              rounded-full
              bg-red-500/90
              px-2.5
              py-1
              text-[10px]
              font-bold
              text-white
              backdrop-blur
            "
          >
            Out of stock
          </span>
        )}
      </Link>

      {/* WISHLIST / DELETE */}
      {showActions &&
        (isWishcard ? (
          <button
            type="button"
            onClick={() => removeWish?.(item._id)}
            aria-label="Remove from wishlist"
            className="
              absolute
              top-3
              right-3
              z-10
              w-9
              h-9
              rounded-full
              bg-red-500/10
              backdrop-blur-md
              border
              border-red-500/20
              flex
              items-center
              justify-center
              text-red-400
              hover:bg-red-500
              hover:text-white
              transition-all
            "
          >
            <Trash2 className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onAddToWish?.(item._id)}
            aria-label="Add to wishlist"
            className="
              absolute
              top-3
              right-3
              z-10
              w-9
              h-9
              rounded-full
              bg-ink-950/70
              backdrop-blur-md
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white/80
              hover:text-gold-300
              hover:border-gold-400/40
              transition-all
            "
          >
            <Heart className="w-4 h-4" />
          </button>
        ))}

      {/* PRODUCT INFO */}
      <div className="p-4">
        <p
          className="
            text-[10px]
            uppercase
            tracking-widest
            text-gold-400
            font-bold
            mb-1
          "
        >
          {item.productCategory || "Laboratory Equipment"}
        </p>

        <Link to={`/productDetail/${item._id}`}>
          <h3
            className="
              text-sm
              font-bold
              text-white
              line-clamp-2
              min-h-10
              group-hover:text-gold-300
              transition-colors
            "
          >
            {item.productName}
          </h3>
        </Link>

        {/* RATING */}
        <div className="flex items-center gap-1.5 mt-2">
          <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />

          <span className="text-xs text-ink-300">
            {Number(item.rating || 0).toFixed(1)}
          </span>

          <span className="text-xs text-ink-500">
            ({item.totalReviews || 0})
          </span>
        </div>

        {/* PRICE + CART */}
        <div className="flex items-end justify-between gap-2 mt-4">
          <div>
            <span className="text-lg font-black text-white">
              ₹{Number(price || 0).toLocaleString("en-IN")}
            </span>

            {hasDiscount && (
              <span className="block text-xs text-ink-500 line-through">
                ₹
                {Number(item.productPrice).toLocaleString(
                  "en-IN"
                )}
              </span>
            )}
          </div>

          {/* ADD TO CART */}
          {showActions && !onDelete && (
            <button
              type="button"
              disabled={Number(item.stock || 0) <= 0}
              onClick={() => onAddToCart?.(item._id)}
              aria-label="Add to cart"
              className="
                w-10
                h-10
                rounded-xl
                bg-white/10
                hover:bg-gold-400
                hover:text-ink-950
                disabled:opacity-40
                disabled:cursor-not-allowed
                flex
                items-center
                justify-center
                text-white
                transition-colors
              "
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          )}

          {/* DELETE */}
          {onDelete && (
            <button
              type="button"
              onClick={() => onDelete(item._id)}
              aria-label="Delete product"
              className="
                w-10
                h-10
                rounded-xl
                bg-red-500/10
                hover:bg-red-500/20
                flex
                items-center
                justify-center
                text-red-400
                transition-colors
              "
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

