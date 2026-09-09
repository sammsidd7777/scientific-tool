import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Lab Glassware",
    description: "Beakers, Flasks, Pipettes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBda4Kvu-hSnViH_akppHEf5TRdAGzL5-2zYNSQAdL-akD0VDedTEMZkmOcZMPFuT4XZByofKZhs41d4wlaTIjj1KC-hoOxFd6PVEKNB00JMbqSadnGPgOngAN9tW3lMksXs58HFBJg--hqdccUvIE-HqlQr2ZkZNA_mSO6OgDKtOlwqidI-i6AwgfVd1bVUf52sno74gT4wBrCKj7MBA7QopUlfcGXrsobmKdzllBqC9loeigqeQ95H8sSyL5HNWHMsXMPQJLL03g",
    slug: "glassware",
  },
  {
    name: "Chemicals",
    description: "Reagents, Solvents, Acids",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlhvQoz6EwPoVh0SR4TfD6Lslv2wIemvXKmUrfkxs899iJ4xt-QtDyrVsb5-rOe56nDtChIpMVp5uof21a7aLKyzm0wFLlrg0MtPc85ggk2HqWwojZSAm70rJUjzK2CQlUxktf070YRv1R_qOpVb3z5YBmiLeCyiHat3dTiRxgI93-P7lzWML7GJkkxAUUuzSWkdMEnQg4kGudMt5yTE_LRDtQ5PbTH00ZbEK69ziaDDxRp-jVKYk4xZfvTnm0oJe1qRON-5cB95Y",
    slug: "chemicals",
  },
  {
    name: "Safety Gear",
    description: "Gloves, Goggles, Coats",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrUtT08Z0z8cPRZdbSLg_9AxFpyLki7CPt89DuXdMQBb3AFkufcCfSJMOxsiCbFfPJm8a7aYUWCv7iTip9CWbrgETBTtSDfZnHbHlM4coSaKTjzdRD-FohtrQpFEe-3nn8_9suF84TGmgSKj3Rg5OEQSfeh-_-Tj8Dl-eZG77Q9t2sg2LelTwwZVVEEQ8Hx4PgPdV1SlHp-Y3VNalXlR22Lw5MIFOXTjS-rAMf0as23BVUsDdhgh9cu9kwceKbOv1OJLlMMDT6lGI",
    slug: "safety",
  },
  {
    name: "Instruments",
    description: "Microscopes, Balances",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClmCOuIEs82z9pxz-NmEDqkXJW9X-dN4u7CWI6IGCYlMEk0gYK6UYQLWq6iOVy-4irSe0Fxpvn50drJYy2msammUkyr1IHNDzkveOqx95LQnlvkbA39nVqN8-C7HxIzA4UFBaGfCtLD6uZKkrCmBROIakNaGIdgq2CBjEQ_OdGMyVyJ681Nqd87_utSJTTBW6vJ85d15A6wATK1zaBQ8OWStUN-0D9zl4EizOfBy-V9W8Nurijl0YIMFM9jYOJbTJHr5FsyrtGNs0",
    slug: "instruments",
  },
];

const products = [
  {
    id: 1,
    name: "Borosilicate Flask Set",
    rating: "4.9",
    price: "24.99",
    description:
      "Premium heat-resistant glass, 50ml to 1000ml graduated set.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGT6hIvHsWAWYdxxMYVWuamvfBxY3BP41WUPBecg_BfJqFHUEOBOcBz_l8-hptMb1FVw98ee1WyZ2_YZxVCZnELEIgQdNqKNmb1jL8RUmHohvVPhmmjyG9s02NoyyxiMbcfM51GRsW-whTCdJ43zGsIVHUC9YQSQz8vSOVOKyD22MVvxVrWKvjse0bNoJec3FRc_Rc0oi2xHU4YocOgyPSG1Av1JbxUDz_60icZk2sIA1jbFV3yZlYhmhdBAoWSlgsh6aep1Od_VU",
  },
  {
    id: 2,
    name: "Digital pH Meter Pro",
    rating: "4.7",
    price: "45.00",
    description:
      "High precision +/- 0.01 pH accuracy with auto-calibration.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXN2lYYzmRh1adMsj5YN9uFOCk9KRRyt4GEWW_rEc_7mqnp0LbDhQFtva9igNZ2vFsz9xeLBiXlPZA_CHz1nUa0yuIX69z187GSTR2ClHvSg1M0ykJlD0dM_A6PjYk665UDdUyvWFZYL9JKGjC1MuOTXETEoaSRnYqCp5mmzaz8x9BB3rjOzVkrlk7ztu9_gN7eLBsea0UxAFr5nYpzDVwiXH9Usa9xgAeQDXkkOwdSXxaIJBsJO1caSIRDRTXICe8AH-jXBXTV3I",
  },
  {
    id: 3,
    name: "Pro Lab Coat (Unisex)",
    rating: "4.8",
    oldPrice: "25.00",
    price: "18.50",
    sale: true,
    description:
      "Chemical resistant cotton blend, multiple pockets, reinforced stitching.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNXJDDNX_ls6jzYVY80sVH9_tRf8kyEb0Vk8Mht7kbXFzXjoptvqUJ4qSCj7MtK56gq125YyezkohK5I0TZKHDZeQbW7R_-I46yDM2mQXiADud37IDcGHuyT4X-e42-NkeiPW5o6L2RpDqqvTdDfmPvpJUP8dQ2V60xYW94sNPXpL_H-lrCPGj0Y8NKfS5q5C9aB59Ps9jmrLSjjVuHWrqHzYpjBbo_3NrI_IYjhnlI-c5f0mKDyVACIYMKA3onDWmJ0-Vfdu6EkY",
  },
  {
    id: 4,
    name: "Molecular Model Kit",
    rating: "5.0",
    price: "30.00",
    description:
      "Organic and inorganic chemistry set for students and researchers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACc42ohV-LhvlBgP4rp9uSPHJf0JDZbpGA7Awsn0Kq2LM-PmUreLS9zVhOVJH-DZJ1kmFtrzjFuFEXbOzM_JINrTcnWXlR7174hbtp37SSgfpWZjOLvJ_dMFV8CiHC0bD3WGrqvb_90MkGtyeuY7JM3m7vcJw3zoag4Gr1rVKqg7idgFFtAkhAXwA7ulqq-3JdY8Y5KDdb8HeIj7MTPAvH58MmYVTVZfSUtLs49dfo1Ci1J6rWpDEcDQh-Sded85OmPqcaViA1RdE",
  },
];

const Icon = ({ children, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>
    {children}
  </span>
);

function Home() {
  const handleNewsletter = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
     

      <main className="flex-grow">
        {/* Hero */}
        <section className="w-full flex justify-center py-6 md:py-10 px-4 md:px-10">
          <div className="w-full max-w-[1280px] bg-white dark:bg-gray-900 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 gap-6 order-2 lg:order-1">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                    Institutional Offer
                  </span>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#0d121b] dark:text-white">
                    Equipping the Next Generation of Discovery
                  </h1>

                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
                    Get 20% off precision balances and microscopes this week
                    only. Valid for all verified institutional accounts.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/products"
                    className="flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
                  >
                    Shop Now
                  </Link>

                  <Link
                    to="/products"
                    className="flex items-center justify-center h-12 px-8 rounded-lg border border-gray-200 dark:border-gray-700 text-[#0d121b] dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                  >
                    View Catalog
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[300px] lg:h-auto order-1 lg:order-2">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDO3giXT5Vj1Sysbkvpr8Gbiyx0n_xlhglyC_FZ8CBLLVhFNJiOvT_w1m4br9RjPfcVLg1lNPP1ExT13Vi_THx8Otv3ixkW5PjVM5k0GyR38djuvG4t2w3ZNNgWZn-0w6aYLv8mysM2HsXXsWayfEmc998bh3fXrV_lcp8wvuwGEqyQgrwJwDGW5sdnEpZaPtc9EvB5xnP20GUIMo8wix7f5ldexuU0pW0uOyJRvB6LdllnEl4DAxbERz7t35OQ4YaWmnUOsjnpx2A')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-white/5 lg:dark:to-gray-900/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="w-full flex justify-center py-4 px-4 md:px-10">
          <div className="w-full max-w-[1280px] grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["verified_user", "Certified Gear", "ISO 9001 Compliant"],
              ["local_shipping", "Fast Shipping", "Free over $200"],
              ["school", "Edu Discount", "For Universities"],
              ["support_agent", "24/7 Support", "Expert Assistance"],
            ].map(([icon, title, subtitle]) => (
              <div
                key={title}
                className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-full">
                  <Icon>{icon}</Icon>
                </div>
                <div>
                  <p className="text-sm font-bold">{title}</p>
                  <p className="text-xs text-gray-500">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="w-full flex justify-center py-10 px-4 md:px-10">
          <div className="w-full max-w-[1280px] flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0d121b] dark:text-white">
                Browse by Category
              </h2>

              <Link
                to="/products"
                className="text-primary font-medium hover:underline flex items-center gap-1"
              >
                View All
                <Icon className="text-lg">arrow_forward</Icon>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/products?category=${category.slug}`}
                  className="group flex flex-col gap-3 p-3 rounded-xl hover:bg-white hover:shadow-md dark:hover:bg-gray-800 transition-all duration-300"
                >
                  <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{
                        backgroundImage: `url('${category.image}')`,
                      }}
                    />
                  </div>

                  <div>
                    <p className="text-lg font-bold text-[#0d121b] dark:text-white">
                      {category.name}
                    </p>
                    <p className="text-sm text-[#4c669a] dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full flex justify-center py-10 px-4 md:px-10 bg-white dark:bg-gray-900 border-y border-[#e7ebf3] dark:border-gray-800">
          <div className="w-full max-w-[1280px] flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0d121b] dark:text-white">
                  Featured Research Essentials
                </h2>
                <p className="text-gray-500 mt-2">
                  Top-rated equipment chosen by laboratory professionals.
                </p>
              </div>

              <div className="flex bg-[#f8f9fc] dark:bg-gray-800 p-1 rounded-lg self-start md:self-auto">
                <button className="px-4 py-1.5 text-sm font-medium rounded-md bg-white dark:bg-gray-700 shadow-sm text-primary">
                  Best Sellers
                </button>
                <button className="px-4 py-1.5 text-sm font-medium rounded-md text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  New Arrivals
                </button>
                <button className="px-4 py-1.5 text-sm font-medium rounded-md text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                  On Sale
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col bg-[#f8f9fc] dark:bg-gray-800 rounded-xl overflow-hidden border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all"
                >
                  <div className="relative w-full aspect-square bg-white dark:bg-gray-700 flex items-center justify-center p-6">
                    {product.sale && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2 py-1 bg-red-100 text-red-600 text-[10px] font-bold uppercase tracking-wide rounded">
                          Sale
                        </span>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 z-10">
                      <button
                        type="button"
                        className="p-2 rounded-full bg-[#f8f9fc] dark:bg-gray-800 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Icon className="text-[20px]">favorite</Icon>
                      </button>
                    </div>

                    <Link
                      to={`/products/${product.id}`}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        className="object-contain h-full w-full group-hover:scale-110 transition-transform duration-300"
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                  </div>

                  <div className="p-4 flex flex-col gap-2 flex-grow">
                    <div className="flex items-start justify-between gap-2">
                      <Link to={`/products/${product.id}`}>
                        <h3 className="font-bold text-[#0d121b] dark:text-white leading-tight hover:text-primary">
                          {product.name}
                        </h3>
                      </Link>

                      <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold whitespace-nowrap">
                        <Icon className="text-[14px] fill-current">star</Icon>
                        {product.rating}
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div>
                        {product.oldPrice && (
                          <span className="text-xs text-gray-400 line-through mr-1">
                            ${product.oldPrice}
                          </span>
                        )}

                        <span
                          className={`text-lg font-bold ${
                            product.sale ? "text-red-600" : "text-primary"
                          }`}
                        >
                          ${product.price}
                        </span>
                      </div>

                      <Link
                        to={`/cart?add=${product.id}`}
                        className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-white hover:bg-blue-700 transition-colors"
                      >
                        <Icon className="text-[20px]">add</Icon>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}

export default Home;
``
