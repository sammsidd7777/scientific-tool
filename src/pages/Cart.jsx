 
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialCartItems = [
  {
    id: "beaker-500",
    name: "Borosilicate Glass Beaker, 500ml",
    sku: "BKR-500",
    price: 12,
    quantity: 5,
    stock: "In Stock",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYzlERhrg5j3RyjmLm4cUaYEFsptLo8D_oBV8TgqyVQThb0PKfHFN548mdQUlKmPNJKbeZP4-pTI-C00XRv2Lfj1PMOOAS8a952y11hbqyFLlyAiwILL_uG9vC_khWIrmUGX1VYjh6O7W3W7RzjeS9Fp24E05a8SvMAP8Wkyd1bBr3k4_f1Pv8TfijITGJnnLnT-KoHDmksqWBRGAbgPo_H9L5BYDtd1Nt6KqFErj9VSuhbKbXWhBlgRJ6mllIBs8pBAacs8aDnnI",
    detailId: "borosilicate-beaker-500",
  },
  {
    id: "ph-meter",
    name: "Digital pH Meter, High Precision",
    sku: "PH-DIG-01",
    price: 145,
    quantity: 1,
    stock: "In Stock",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAG_VAJ9MQcSDzuwVfsXHfnKIuNqTHKeuJjTA-1XOxjnMgzb-FT6zD4IWZkBHwhtn-CP6M4EzA2La0GgULYoA0DCwpPnOl-HAPSB8fv3nufB_n1NYqEihCYDB0ReUjC--5lliyvIrt5I4XZlXfIWZT9M_DM-NJYVtn1kcUZffInt9oWsk7L71Qm-lS8zgNOzu0Ykiij5QUryEiW872eXhd47a70hP4X232D46TKoVuGVFTXb_CAB8DzErIBGEJwjEl74Djs9vlS2pg",
    detailId: "digital-ph-meter",
  },
];

function Icon({ children, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  );
}

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, value) => {
    const quantity = Math.max(1, Number(value) || 1);

    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const tax = useMemo(() => {
    return subtotal * 0.07;
  }, [subtotal]);

  const total = subtotal + tax;

  const itemCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const formatCurrency = (value) => {
    return `$${value.toFixed(2)}`;
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    navigate("/checkout");
  };

  const handleDownloadQuote = () => {
    if (cartItems.length === 0) {
      alert("Add products to your cart before downloading a quote.");
      return;
    }

    alert("Quote download will be connected to the PDF generator/backend.");
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex mb-6">
          <ol className="flex items-center flex-wrap gap-1">
            <li>
              <Link
                to="/"
                className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors"
              >
                Home
              </Link>
            </li>

            <li className="flex items-center">
              <Icon className="text-slate-400 text-sm mx-1">
                chevron_right
              </Icon>

              <Link
                to="/products"
                className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors"
              >
                Catalog
              </Link>
            </li>

            <li className="flex items-center">
              <Icon className="text-slate-400 text-sm mx-1">
                chevron_right
              </Icon>

              <span
                aria-current="page"
                className="text-slate-900 dark:text-white text-sm font-medium"
              >
                Shopping Cart
              </span>
            </li>
          </ol>
        </nav>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Your Cart{" "}
            <span className="text-lg sm:text-xl font-normal text-slate-500 dark:text-slate-400 ml-2">
              ({itemCount} {itemCount === 1 ? "Item" : "Items"})
            </span>
          </h1>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white dark:bg-[#1a202c] border border-slate-200 dark:border-gray-700 rounded-xl p-10 sm:p-16 text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6">
              <Icon className="text-primary text-4xl">shopping_cart</Icon>
            </div>

            <h2 className="text-2xl font-bold mb-2">
              Your cart is empty
            </h2>

            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-7">
              Looks like you haven't added any laboratory supplies yet.
              Browse our catalog and find the products you need.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              <Icon className="text-lg">storefront</Icon>
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Desktop Header */}
              <div className="hidden sm:flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider px-6 pb-2 border-b border-slate-200 dark:border-gray-700">
                <div className="flex-1">Product Details</div>
                <div className="w-32 text-center">Quantity</div>
                <div className="w-24 text-right">Price</div>
                <div className="w-24 text-right">Total</div>
                <div className="w-10" />
              </div>

              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <div
                    key={item.id}
                    className="group bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-gray-700 p-4 sm:p-6 transition-shadow hover:shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
                      {/* Image */}
                      <Link
                        to={`/products/${item.detailId}`}
                        className="shrink-0"
                      >
                        <div
                          className="w-24 h-24 sm:w-20 sm:h-20 rounded-lg bg-slate-100 dark:bg-gray-800 bg-center bg-cover border border-slate-100 dark:border-gray-700"
                          style={{
                            backgroundImage: `url("${item.image}")`,
                          }}
                          aria-label={item.name}
                        />
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0 flex flex-col gap-1 w-full">
                        <div className="flex justify-between items-start gap-3">
                          <Link
                            to={`/products/${item.detailId}`}
                            className="text-lg font-medium text-slate-900 dark:text-white hover:text-primary transition-colors leading-snug"
                          >
                            {item.name}
                          </Link>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="sm:hidden shrink-0 text-slate-400 hover:text-red-500 p-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Icon className="text-xl">delete</Icon>
                          </button>
                        </div>

                        <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                          SKU: {item.sku}
                        </p>

                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400" />
                            {item.stock}
                          </span>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-5 sm:gap-8 mt-4 sm:mt-0 border-t sm:border-t-0 border-slate-100 dark:border-gray-700 pt-4 sm:pt-0">
                        {/* Quantity */}
                        <div className="flex items-center rounded-lg border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-800">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                            className="p-2 hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            <Icon className="text-sm">remove</Icon>
                          </button>

                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, e.target.value)
                            }
                            className="w-12 bg-transparent border-0 text-center p-0 text-sm font-medium focus:ring-0 appearance-none"
                            aria-label={`Quantity for ${item.name}`}
                          />

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            aria-label="Increase quantity"
                            className="p-2 hover:text-primary transition-colors"
                          >
                            <Icon className="text-sm">add</Icon>
                          </button>
                        </div>

                        {/* Unit Price */}
                        <div className="flex flex-col items-end sm:w-24">
                          <span className="text-xs text-slate-500 dark:text-slate-400 block sm:hidden">
                            Unit
                          </span>

                          <span className="text-sm text-slate-500 dark:text-slate-400">
                            {formatCurrency(item.price)}
                          </span>
                        </div>

                        {/* Total */}
                        <div className="text-right sm:w-24">
                          <span className="text-lg font-bold text-slate-900 dark:text-white">
                            {formatCurrency(itemTotal)}
                          </span>
                        </div>

                        {/* Desktop Remove */}
                        <div className="hidden sm:flex justify-end w-10">
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                            title="Remove item"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Icon>delete</Icon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Continue Shopping */}
              <div className="mt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center text-primary hover:text-blue-700 font-medium transition-colors gap-2"
                >
                  <Icon className="text-lg">arrow_back</Icon>
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-gray-700 shadow-sm overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4">
                    {/* Subtotal */}
                    <div className="flex justify-between text-slate-600 dark:text-slate-300">
                      <span>Subtotal</span>
                      <span className="font-medium text-slate-900 dark:text-white">
                        {formatCurrency(subtotal)}
                      </span>
                    </div>

                    {/* Shipping */}
                    <div className="flex justify-between items-center gap-4 text-slate-600 dark:text-slate-300">
                      <span
                        className="flex items-center gap-1 cursor-help"
                        title="Based on standard ground shipping"
                      >
                        Shipping Estimate
                        <Icon className="text-slate-400 text-xs">
                          help
                        </Icon>
                      </span>

                      <span className="text-sm text-slate-500 dark:text-slate-400 text-right">
                        Calculated at checkout
                      </span>
                    </div>

                    {/* Tax */}
                    <div className="flex justify-between text-slate-600 dark:text-slate-300 pb-4 border-b border-slate-100 dark:border-gray-700">
                      <span>Est. Tax (7%)</span>

                      <span className="font-medium text-slate-900 dark:text-white">
                        {formatCurrency(tax)}
                      </span>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between items-end pt-2">
                      <span className="text-lg font-bold text-slate-900 dark:text-white">
                        Total
                      </span>

                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary block">
                          {formatCurrency(total)}
                        </span>

                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          USD
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={handleCheckout}
                      className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group"
                    >
                      Proceed to Checkout

                      <Icon className="group-hover:translate-x-1 transition-transform text-lg">
                        arrow_forward
                      </Icon>
                    </button>

                    <button
                      type="button"
                      onClick={handleDownloadQuote}
                      className="w-full bg-white dark:bg-transparent border border-slate-300 dark:border-gray-600 hover:bg-slate-50 dark:hover:bg-gray-800 text-slate-700 dark:text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Icon className="text-lg">description</Icon>
                      Download Quote (PDF)
                    </button>
                  </div>
                </div>

                {/* Trust Footer */}
                <div className="bg-slate-50 dark:bg-gray-800/50 px-6 py-4 border-t border-slate-100 dark:border-gray-700">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center gap-4 text-slate-400 dark:text-slate-500">
                      <Icon
                        className="text-2xl"
                        title="Secure Payment"
                      >
                        lock
                      </Icon>

                      <Icon
                        className="text-2xl"
                        title="Verified Merchant"
                      >
                        verified_user
                      </Icon>

                      <Icon
                        className="text-2xl"
                        title="Institutional Orders Accepted"
                      >
                        account_balance
                      </Icon>
                    </div>

                    <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                      Secure checkout with SSL encryption.
                      <br />
                      Institutional POs accepted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Cart;

