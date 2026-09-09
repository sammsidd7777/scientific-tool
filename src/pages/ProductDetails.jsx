import React, { useState } from "react";
import { Link } from "react-router-dom";

const product = {
  id: "MIC-X200",
  name: "Precision Optical Microscope Model X200",
  sku: "MIC-X200",
  price: 1249,
  oldPrice: 1450,
  rating: 4.8,
  reviews: 124,
  stock: 12,
  badge: "New Arrival",
  certified: "OptiLab Certified",

  images: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAXSlG59FnA7XtoWjsP3inXYoDqe0mO0kzokzmp94ZUuf497uefc2S1vb2Uo35Ia9P07LcmeevJ1-xs8KfyZc7WNTcQg2ejy5dh7rJszuie18wXiBhklk4ArUpSZRpC6X-7FMep-vJdaK-62kLYPu1gYsHwcNUS47mGGBZLx5XlErckzgOFvouZIPffjegsbWSonSNziZJ420Iy-5yoO6Bdq8ndCasaxcPO11msrIuE0-NhZIxYgGvttgtMZwTxYowhec18d0Mu_As",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBaIkfoK6CZ8MGDkDTbZaKLRiSUoGKRyyA7h3IAmkNnVvqb2U6hdS53B1Pke-3nGmeQ6DDCP7caEqlzOkCq1vYiGM8lxxPuUHdvCOlxl5OKVesaTcTtuHHLtrvpayTvANSM8d8MBg4FVudnl0zhub53guBAUuH5SBXrXcXiNfaLZepmN6yIwRTqnd8jb_JbU9oGwicE1WIXmuGvF2GMOE36FWXDP3ajxk5OAEfJ_-zAYJvGUg5z6H9vDFxHA9Sd8r65pjprDPxcB1M",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCj6QqUP5NISFnGRS5RF0GVgSLK-SRDmG90IOdCWyceYa80POliqR3LPP361YH3Wj5QeWpg92noSWQhjsfOLIjddNwRXJ9ScosuaBopMm2xNcapAEnM5r8cinS8eRcMJ1fDRl4sw6tX1w5Zn1mq8-DfdbZNAwIlXM6uqPc6mGhuC9yGTyW-X_lRz8MGwJ9P2GgD4upk1oJ66pP9-znv58Vgafn0M0irJnbhjxGDeoHCOPGvzcjp52D_WsQRe5lZzSBQ3serV5DsVu8",
  ],
};

const relatedProducts = [
  {
    id: "premium-glass-slides",
    name: "Premium Glass Slides",
    subtitle: "Pack of 100, Pre-cleaned",
    price: 14.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9OKeh0Q6YyaHFx2PkEWsO9zO0UqUZuxBmBDiqE0nrHNDSWmkDn_hcLHsqk7GmLjUCDYEZu8fj9daB_5B7m5QwKi5C2E1RwudCGUjkf8rkUzRNrSGN5ZJe9ZM7PtFHK98gAl33dcaERojWx6Q-n4RKRlbGCfTaHCaztHVcyW1OqX0sCKtdXVgSQcA5ulrTeah6uUoN_GLEGpNaQzE8VDve6VmX9aBgsut-5QV_7eS5qR7pRstyp2d38nID94YgEZr92IBoUFnjY6U",
  },
  {
    id: "lens-cleaning-kit",
    name: "Optical Lens Cleaning Kit",
    subtitle: "Professional Grade Solution",
    price: 24.5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAs-kazGY9c1TgotgtL43ZPVc318WKovB_ut5pX_gwJE2_YTzx13OiJ_-rHYLWS9Mb12JUGKO_qtTsNJmK9BmFcFHKWW6FnKCbUguCcObBaGqI5D19MX0K8QLFY3ATMs94szUP9YjoyYm8p_6LX3nhMsK4mot2sOKSFICOL3CKzXJI7ztqdn-c6E5BPvntOO1eW1Rc_DE2fD0PFoR_7KRkXEuqZB_FYWbD78pckPkt7sy7yYE4-QiECUDd0840EqCFgEYwcrPVp9hE",
  },
  {
    id: "beaker-set",
    name: "Borosilicate Beaker Set",
    subtitle: "50ml - 1000ml (5pc)",
    price: 32,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMG3QYYGSYq4stvInmG4jHic5ZJ77PC3V2-6qwCrU88XFaSNyjPu5UHvnh4VZiJ0dGqh1ow6wnuD6dYjVcGjQDhiXqMep8_A46L2ht5d0Dj90Vny_066qonXmKPVdZbe11DNWIgPdGg-VjfeF_r30CWr43drNS-1_DMmXeOkVkDQcOXvZWY1Uklc3c8eqfVRy_NNIMU0rACGrQo388Vo9Rng8K5VmtaoTtXbAPB3_pJ8OL7ZGrOLNpDk0vOVgJW-m-Rzr8_peePj8",
  },
  {
    id: "digital-camera",
    name: "5MP Digital Camera",
    subtitle: "USB 3.0, C-Mount Adapter",
    price: 299,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtUoVzNyDADUgcaaEX-BIV6RcD_-vy10LDo0sIQjvblJlZrrij-HXQypwa8omc_PGtcvzLY4hwTHHGWViwPHm36q-j1W5i9re_Cwrg0EwUbe4DrhP1Onpjoh1qrfocG-QSFvGYpUoEzg8-RL6gguJ8CmTDUuQWL_EWYOxJ3By1r7JfaEbCJKbqLsbcrtI9uqaefCDRaY2fisDeLFFWtDYNOTGCN504G8VuqmL0at7LP8cOJyQ6sDmE2nGE7Yr_atsylzFeMgt7jgk",
  },
];

function Icon({ children, className = "", size = 24 }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontSize: size }}
    >
      {children}
    </span>
  );
}

function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [saved, setSaved] = useState(false);

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, product.stock));
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleAddToCart = () => {
    alert(`${quantity} × ${product.name} added to cart.`);
  };

  const handleQuote = () => {
    alert("Quote request started.");
  };

  const tabs = [
    {
      id: "description",
      label: "Description",
    },
    {
      id: "specs",
      label: "Technical Specs",
    },
    {
      id: "msds",
      label: "Safety Data (MSDS)",
    },
    {
      id: "reviews",
      label: `Reviews (${product.reviews})`,
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex overflow-x-auto text-sm font-medium text-slate-500 dark:text-slate-400"
        >
          <ol className="flex items-center gap-2 whitespace-nowrap">
            <li>
              <Link
                to="/"
                className="transition-colors hover:text-primary"
              >
                Home
              </Link>
            </li>

            <li>
              <span className="text-slate-300 dark:text-slate-600">/</span>
            </li>

            <li>
              <Link
                to="/products?category=equipment"
                className="transition-colors hover:text-primary"
              >
                Lab Equipment
              </Link>
            </li>

            <li>
              <span className="text-slate-300 dark:text-slate-600">/</span>
            </li>

            <li>
              <Link
                to="/products?category=microscopes"
                className="transition-colors hover:text-primary"
              >
                Microscopes
              </Link>
            </li>

            <li>
              <span className="text-slate-300 dark:text-slate-600">/</span>
            </li>

            <li className="text-slate-900 dark:text-white">
              Model X200
            </li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 xl:gap-14">

          {/* Gallery */}
          <div className="flex flex-col gap-4 lg:col-span-7">

            {/* Main Image */}
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#161e2d]">

              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat p-8 transition-transform duration-300 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: `url("${product.images[selectedImage]}")`,
                }}
              />

              <div className="absolute left-4 top-4 z-10">
                <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
                  {product.badge}
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  window.open(product.images[selectedImage], "_blank")
                }
                className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur transition-all hover:text-primary dark:bg-slate-800/90 dark:text-white"
              >
                <Icon size={20}>fullscreen</Icon>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">

              {product.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg bg-white p-2 transition-all dark:bg-[#161e2d] ${
                    selectedImage === index
                      ? "border-2 border-primary ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-slate-900"
                      : "border border-slate-200 hover:border-primary/50 dark:border-slate-800"
                  }`}
                >
                  <div
                    className="h-full w-full bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url("${image}")`,
                    }}
                  />
                </button>
              ))}

              <button
                type="button"
                className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                <Icon
                  className="text-slate-400"
                  size={32}
                >
                  play_circle
                </Icon>
              </button>
            </div>
          </div>

          {/* Product Information */}
          <div className="flex h-full flex-col lg:col-span-5">

            {/* Meta */}
            <div className="mb-4">

              <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  SKU: {product.sku}
                </span>

                <div className="flex items-center rounded bg-primary/10 px-2 py-1 text-sm font-bold text-primary">
                  <Icon className="mr-1" size={16}>
                    verified
                  </Icon>
                  {product.certified}
                </div>
              </div>

              <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-4xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mb-6 flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4].map((star) => (
                    <Icon
                      key={star}
                      size={20}
                      className="fill-current"
                    >
                      star
                    </Icon>
                  ))}

                  <Icon
                    size={20}
                    className="fill-current"
                  >
                    star_half
                  </Icon>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("reviews");

                    document
                      .getElementById("product-tabs")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  {product.rating} ({product.reviews} reviews)
                </button>
              </div>
            </div>

            {/* Price Card */}
            <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#161e2d]">

              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  ${product.price.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>

                <span className="text-lg font-medium text-slate-500 line-through">
                  ${product.oldPrice.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="mb-4 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                Buying for an institution?

                <Link
                  to="/institutional"
                  className="flex items-center font-semibold text-primary hover:underline"
                >
                  View bulk pricing
                  <Icon size={16}>arrow_right_alt</Icon>
                </Link>
              </div>

              <div className="my-4 h-px bg-slate-100 dark:bg-slate-700" />

              <div className="mb-1 flex items-center gap-2 font-medium text-green-600 dark:text-green-400">
                <Icon className="fill-current" size={20}>
                  check_circle
                </Icon>

                In Stock ({product.stock} units available)
              </div>

              <p className="pl-7 text-sm text-slate-500 dark:text-slate-400">
                Order within{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  4 hrs 23 mins
                </span>{" "}
                for delivery by{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  Wed, Oct 24
                </span>
                .
              </p>
            </div>

            {/* Short Description */}
            <div className="mb-8 text-slate-600 dark:text-slate-300">
              <p className="leading-relaxed">
                High-resolution optical microscope designed for university
                laboratories and research facilities. Features 2000x
                magnification, LED illumination system, and ergonomic design
                for extended use sessions.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-auto flex flex-col gap-4">

              <div className="grid grid-cols-12 gap-4">

                {/* Quantity */}
                <div className="col-span-4 lg:col-span-3">
                  <label
                    htmlFor="quantity"
                    className="sr-only"
                  >
                    Quantity
                  </label>

                  <div className="flex h-12 items-center rounded-lg border border-slate-300 bg-white dark:border-slate-600 dark:bg-[#161e2d]">

                    <button
                      type="button"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="flex h-full w-10 items-center justify-center text-slate-500 transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Icon size={18}>remove</Icon>
                    </button>

                    <input
                      id="quantity"
                      type="number"
                      min="1"
                      max={product.stock}
                      value={quantity}
                      onChange={(e) => {
                        const value = Number(e.target.value);

                        if (!value || value < 1) {
                          setQuantity(1);
                        } else if (value > product.stock) {
                          setQuantity(product.stock);
                        } else {
                          setQuantity(value);
                        }
                      }}
                      className="w-full appearance-none border-none bg-transparent p-0 text-center font-bold text-slate-900 focus:ring-0 dark:text-white"
                    />

                    <button
                      type="button"
                      onClick={increaseQuantity}
                      disabled={quantity >= product.stock}
                      className="flex h-full w-10 items-center justify-center text-slate-500 transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Icon size={18}>add</Icon>
                    </button>
                  </div>
                </div>

                {/* Add Cart */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="col-span-8 flex h-12 items-center justify-center gap-2 rounded-lg bg-primary text-lg font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 active:scale-[0.98] lg:col-span-9"
                >
                  <Icon>shopping_cart</Icon>
                  Add to Cart
                </button>
              </div>

              {/* Secondary Actions */}
              <div className="grid grid-cols-2 gap-4">

                <button
                  type="button"
                  onClick={handleQuote}
                  className="flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <Icon
                    className="text-slate-400"
                    size={20}
                  >
                    description
                  </Icon>
                  Request Quote
                </button>

                <button
                  type="button"
                  onClick={() => setSaved((prev) => !prev)}
                  className={`flex h-10 items-center justify-center gap-2 rounded-lg border text-sm font-medium transition-colors ${
                    saved
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon
                    className={saved ? "fill-current" : "text-slate-400"}
                    size={20}
                  >
                    favorite
                  </Icon>

                  {saved ? "Saved" : "Save for Later"}
                </button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-slate-200 py-4 dark:border-slate-800">

              <TrustItem
                icon="verified_user"
                text="2 Year Warranty"
              />

              <TrustItem
                icon="local_shipping"
                text="Free Shipping"
                bordered
              />

              <TrustItem
                icon="school"
                text="Edu Discount"
              />

            </div>
          </div>
        </div>

        {/* Tabs */}
        <section
          id="product-tabs"
          className="mt-16 lg:mt-24"
        >
          <div className="border-b border-slate-200 dark:border-slate-700">

            <nav
              aria-label="Product tabs"
              className="-mb-px flex gap-8 overflow-x-auto"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap border-b-2 px-1 py-4 text-base transition-colors ${
                    activeTab === tab.id
                      ? "border-primary font-semibold text-primary"
                      : "border-transparent font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Description */}
          {activeTab === "description" && (
            <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-3">

              <div className="space-y-6 leading-relaxed text-slate-600 dark:text-slate-300 lg:col-span-2">

                <p>
                  The{" "}
                  <strong className="text-slate-900 dark:text-white">
                    OptiLab X200
                  </strong>{" "}
                  sets a new standard for laboratory precision. Engineered
                  for professionals in biological research, clinical
                  diagnostics, and higher education, this microscope delivers
                  crystal-clear imaging through its infinity-corrected optical
                  system.
                </p>

                <p>
                  Equipped with a powerful yet energy-efficient LED
                  illumination system, the X200 provides consistent color
                  temperature and intensity, crucial for long-term observation
                  and digital imaging. Its robust metal frame minimizes
                  vibration, ensuring stability even in high-traffic lab
                  environments.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  Key Features
                </h3>

                <ul className="grid gap-4 sm:grid-cols-2">
                  <Feature text="Wide-field eyepieces (WF10x/22mm)" />
                  <Feature text="Quadruple nosepiece with click stops" />
                  <Feature text="Double layer mechanical stage" />
                  <Feature text="Coaxial coarse and fine focusing" />
                </ul>
              </div>

              <TechnicalSummary />
            </div>
          )}

          {/* Specs */}
          {activeTab === "specs" && (
            <div className="mt-8">
              <TechnicalSummary full />
            </div>
          )}

          {/* MSDS */}
          {activeTab === "msds" && (
            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-[#161e2d]">
              <div className="flex flex-col items-center justify-center py-10 text-center">

                <Icon
                  className="mb-4 text-primary"
                  size={48}
                >
                  description
                </Icon>

                <h3 className="mb-2 text-xl font-bold">
                  Safety Data Sheet
                </h3>

                <p className="mb-6 max-w-xl text-slate-500 dark:text-slate-400">
                  Safety and handling documentation for the Precision Optical
                  Microscope Model X200.
                </p>

                <button
                  type="button"
                  onClick={() => alert("Datasheet download started.")}
                  className="flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-white transition-colors hover:bg-blue-600"
                >
                  <Icon>download</Icon>
                  Download MSDS
                </button>
              </div>
            </div>
          )}

          {/* Reviews */}
          {activeTab === "reviews" && (
            <div className="mt-8">

              <div className="grid gap-8 lg:grid-cols-3">

                <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#161e2d]">
                  <div className="text-5xl font-bold">
                    {product.rating}
                  </div>

                  <div className="my-3 flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
                        size={22}
                        className="fill-current"
                      >
                        star
                      </Icon>
                    ))}
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Based on {product.reviews} verified reviews
                  </p>
                </div>

                <div className="space-y-4 lg:col-span-2">
                  <Review
                    name="Dr. Michael Carter"
                    text="Excellent optical clarity and very stable construction. Perfect for our university laboratory."
                  />

                  <Review
                    name="Sarah Williams"
                    text="The image quality is impressive and the LED illumination works extremely well."
                  />

                  <Review
                    name="James Anderson"
                    text="Very good microscope for research and educational applications."
                  />
                </div>

              </div>
            </div>
          )}
        </section>

        {/* Related Products */}
        <section className="mt-20 mb-12 lg:mt-28">

          <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
            Frequently Bought Together
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-[#161e2d]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">

                  <div
                    className="h-full w-full bg-contain bg-center bg-no-repeat transition-transform group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${item.image}")`,
                    }}
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">

                  <h3 className="mb-1 text-base font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </h3>

                  <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                    {item.subtitle}
                  </p>

                  <div className="mt-auto flex items-center justify-between">

                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      ${item.price.toFixed(2)}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon size={18}>add</Icon>
                    </span>

                  </div>
                </div>
              </Link>
            ))}

          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------------- Components ---------------- */

function TrustItem({ icon, text, bordered }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 text-center ${
        bordered
          ? "border-l border-r border-slate-100 dark:border-slate-800"
          : ""
      }`}
    >
      <Icon
        className="text-slate-400"
        size={24}
      >
        {icon}
      </Icon>

      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
        {text}
      </span>
    </div>
  );
}

function Feature({ text }) {
  return (
    <li className="flex items-start gap-3">
      <Icon
        className="mt-1 text-primary"
        size={20}
      >
        check
      </Icon>

      <span>{text}</span>
    </li>
  );
}

function TechnicalSummary({ full = false }) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-[#161e2d] ${
        full ? "max-w-3xl" : ""
      }`}
    >
      <h4 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
        Technical Summary
      </h4>

      <dl className="divide-y divide-slate-200 dark:divide-slate-700">

        <Spec
          label="Magnification"
          value="40x - 2000x"
        />

        <Spec
          label="Optical System"
          value="Infinity Corrected"
        />

        <Spec
          label="Illumination"
          value="3W LED (Adjustable)"
        />

        <Spec
          label="Head Type"
          value="Trinocular 30°"
        />

        <Spec
          label="Weight"
          value="6.5 kg"
          last
        />

      </dl>

      <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-700">

        <button
          type="button"
          onClick={() => alert("Datasheet download started.")}
          className="flex w-full items-center justify-center gap-2 font-bold text-primary hover:underline"
        >
          <Icon>download</Icon>
          Download Datasheet (PDF)
        </button>

      </div>
    </div>
  );
}

function Spec({ label, value, last }) {
  return (
    <div
      className={`flex justify-between gap-6 py-3 ${
        last ? "border-b-0 pb-0" : ""
      }`}
    >
      <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {label}
      </dt>

      <dd className="text-right text-sm font-semibold text-slate-900 dark:text-white">
        {value}
      </dd>
    </div>
  );
}

function Review({ name, text }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#161e2d]">
      <div className="mb-2 flex items-center justify-between gap-4">
        <h4 className="font-bold">{name}</h4>

        <div className="flex text-yellow-400">
          {[1, 2, 3, 4, 5].map((star) => (
            <Icon
              key={star}
              size={16}
              className="fill-current"
            >
              star
            </Icon>
          ))}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {text}
      </p>
    </div>
  );
}

export default ProductDetails;