 
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const checkoutItems = [
  {
    id: "pyrex-beaker",
    name: "Pyrex Beaker, 500ml",
    price: 14.5,
    quantity: 5,
    reference: "#PY-500-GL",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkI7X0OlbCx2Ehr3dB0xuF8nIegfRZ2XonE0bysb4KfBg57ocgk3IUOLQxM-VINVC9-tcfMWCBw1B3hXPwKOacoqN9oQv5iUPCQFiI9jyH4oVW6qgo7CGdl8xz1uaD36ptpT0pM-FXnApke9oiXAqy_Q6Q-LCktkmy-qy7QWO2R8NmdlqfmKHWWjIBJdebFDLWMEKemzHdpcKPeb2bh5PcEFqCt8fRy3qLVwLJla3ni_Qlpum32KdHds8Qu5lLeh0EG7X9IeLpPjA",
  },
  {
    id: "digital-microscope",
    name: "Digital Microscope 1000x",
    price: 249,
    quantity: 1,
    reference: "#DM-1000-X",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfSUY90L-5aZqDM7uY-6UUVNB2E5q7_BphpLwRAxku_5h5DsD2BfF4fonTs29PXmDM5wiZM15yVy8UH23neHv6KPxH0TcAhXxBEJhW9iZF9weAWWtKw8MjsY_Wvt9X8KNHFAeBjTEMUzVbjou079fcHVaq31Bk61QSAWwg6PvDZm-15Gwef6-wzXZFi7nYySlU9VnLQywBsM7SDu7UbWf3YExWTrro21NG8vtltvQCzuDaS1mk3D38NQP7G6DL4jfwDPVO0Zxblm4",
  },
  {
    id: "safety-goggles",
    name: "Safety Goggles Pro",
    price: 12,
    quantity: 2,
    reference: "#SG-PRO-CL",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwBoSICYtv6sJt4KyfbalV8v_KrG2d234OR9o_ejryEdGd0HnAeKIsizgdGhqLrjRYQ2MVd_kbTR2cusXwrHcXR17ktc_-0_wrxltwZJKpnb4a3T-gUdEz_TTxy1DqCG2GIpdvrERellcRUzi6FpZNS-rHx0XyK9E1p7h56STDhgUNHnYwnYtnvcY-kTH0Wnze26oS5OHk7CmfJ0GTqzKrJ1XtXJFg3vzzFtI-PxUq5dgEQnQ8J440EK9W33ep1FEmbBo1IqVg6DU",
  },
];

const initialForm = {
  email: "",
  firstName: "",
  lastName: "",
  institution: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  cardNumber: "",
  expiry: "",
  cvc: "",
};

function Icon({ children, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  );
}

function Checkout() {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [errors, setErrors] = useState({});
  const [placingOrder, setPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shipping = 15;

  const subtotal = useMemo(() => {
    return checkoutItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, []);

  const tax = useMemo(() => {
    return subtotal * 0.0822;
  }, [subtotal]);

  const total = subtotal + shipping + tax;

  const formatCurrency = (value) => `$${value.toFixed(2)}`;

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!form.state) {
      newErrors.state = "Please select a state.";
    }

    if (!form.zip.trim()) {
      newErrors.zip = "ZIP / Postal Code is required.";
    }

    if (paymentMethod === "card") {
      if (!form.cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required.";
      }

      if (!form.expiry.trim()) {
        newErrors.expiry = "Expiry date is required.";
      }

      if (!form.cvc.trim()) {
        newErrors.cvc = "CVC is required.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    setPlacingOrder(true);

    // Temporary frontend simulation.
    // Replace this with your backend/API payment request later.
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setPlacingOrder(false);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-5 sm:px-10 py-4 bg-white dark:bg-slate-900">
          <Link
            to="/"
            className="flex items-center gap-3 text-slate-900 dark:text-white"
          >
            <div className="w-8 h-8 text-primary">
              <Icon className="text-3xl">science</Icon>
            </div>
            <span className="text-xl font-bold">SciSupply</span>
          </Link>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Icon className="text-lg">lock</Icon>
            Secure Checkout
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm p-8 sm:p-12 text-center">
            <div className="mx-auto w-20 h-20 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-6">
              <Icon className="text-4xl text-green-600">check_circle</Icon>
            </div>

            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Order Placed Successfully
            </h1>

            <p className="text-slate-500 dark:text-slate-400 mb-3">
              Thank you for your order. Your purchase has been received
              successfully.
            </p>

            <p className="text-sm text-slate-400 mb-8">
              Order Total:{" "}
              <strong className="text-slate-700 dark:text-slate-200">
                {formatCurrency(total)}
              </strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-blue-700 text-white font-bold transition-colors"
              >
                Continue Shopping
              </Link>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 font-medium text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </main>

        <footer className="py-8 text-center text-sm text-slate-400 border-t border-slate-200 dark:border-slate-800">
          © 2024 SciSupply Inc. All rights reserved.
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Minimal Checkout Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-5 sm:px-10 py-4 bg-white dark:bg-slate-900 z-10">
        <Link
          to="/"
          className="flex items-center gap-3 text-slate-900 dark:text-white"
        >
          <div className="w-8 h-8 text-primary flex items-center justify-center">
            <Icon className="text-3xl">science</Icon>
          </div>

          <h2 className="text-xl font-bold leading-tight tracking-tight">
            SciSupply
          </h2>
        </Link>

        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
          <Icon className="text-lg">lock</Icon>
          Secure Checkout
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm font-medium flex-wrap">
              <Link
                to="/cart"
                className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
              >
                Cart
              </Link>

              <span className="mx-3 text-slate-400">/</span>

              <span className="text-slate-500 dark:text-slate-400">
                Information
              </span>

              <span className="mx-3 text-slate-400">/</span>

              <span className="text-primary font-bold">Payment</span>
            </nav>

            {/* Heading */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Checkout
              </h1>

              <p className="text-slate-500 dark:text-slate-400">
                Complete your purchase securely.
              </p>
            </div>

            {/* Contact */}
            <section className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Contact Information
                </h2>

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary hover:underline"
                  >
                    Log in
                  </Link>
                </span>
              </div>

              <Field
                label="Email address"
                value={form.email}
                onChange={(value) => updateField("email", value)}
                placeholder="researcher@lab.edu"
                type="email"
                error={errors.email}
              />
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* Shipping */}
            <section className="flex flex-col gap-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Shipping Address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  label="First name"
                  value={form.firstName}
                  onChange={(value) => updateField("firstName", value)}
                  placeholder="e.g. Marie"
                  error={errors.firstName}
                />

                <Field
                  label="Last name"
                  value={form.lastName}
                  onChange={(value) => updateField("lastName", value)}
                  placeholder="e.g. Curie"
                  error={errors.lastName}
                />
              </div>

              <Field
                label="Institution / Laboratory Name (Optional)"
                value={form.institution}
                onChange={(value) => updateField("institution", value)}
                placeholder="e.g. MIT Dept of Physics"
              />

              <Field
                label="Address"
                value={form.address}
                onChange={(value) => updateField("address", value)}
                placeholder="Street, building, floor, room #"
                error={errors.address}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Field
                  label="City"
                  value={form.city}
                  onChange={(value) => updateField("city", value)}
                  error={errors.city}
                />

                <div className="flex flex-col">
                  <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                    State / Province
                  </label>

                  <select
                    value={form.state}
                    onChange={(e) =>
                      updateField("state", e.target.value)
                    }
                    className={`w-full rounded-lg border ${
                      errors.state
                        ? "border-red-500"
                        : "border-slate-300 dark:border-slate-700"
                    } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary h-12 px-4`}
                  >
                    <option value="">Select...</option>
                    <option value="California">California</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="New York">New York</option>
                    <option value="Texas">Texas</option>
                    <option value="Other">Other</option>
                  </select>

                  {errors.state && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.state}
                    </span>
                  )}
                </div>

                <Field
                  label="ZIP / Postal Code"
                  value={form.zip}
                  onChange={(value) => updateField("zip", value)}
                  error={errors.zip}
                />
              </div>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* Payment */}
            <section className="flex flex-col gap-5">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Payment Method
              </h2>

              <div className="flex flex-col gap-3">
                {/* Card */}
                <PaymentOption
                  selected={paymentMethod === "card"}
                  onClick={() => setPaymentMethod("card")}
                  title="Credit Card"
                  icon="credit_card"
                >
                  <div className="grid gap-4 pl-8 mt-4">
                    <Field
                      label=""
                      value={form.cardNumber}
                      onChange={(value) =>
                        updateField("cardNumber", value)
                      }
                      placeholder="Card number"
                      error={errors.cardNumber}
                      inputMode="numeric"
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <Field
                        label=""
                        value={form.expiry}
                        onChange={(value) =>
                          updateField("expiry", value)
                        }
                        placeholder="MM / YY"
                        error={errors.expiry}
                      />

                      <Field
                        label=""
                        value={form.cvc}
                        onChange={(value) =>
                          updateField("cvc", value)
                        }
                        placeholder="CVC"
                        type="password"
                        error={errors.cvc}
                      />
                    </div>
                  </div>
                </PaymentOption>

                {/* PO */}
                <PaymentOption
                  selected={paymentMethod === "po"}
                  onClick={() => setPaymentMethod("po")}
                  title="Institutional Purchase Order (PO)"
                  icon="description"
                />

                {/* PayPal */}
                <PaymentOption
                  selected={paymentMethod === "paypal"}
                  onClick={() => setPaymentMethod("paypal")}
                  title="PayPal"
                  icon="account_balance_wallet"
                />
              </div>
            </section>

            {/* Mobile Place Order */}
            <div className="pt-4 lg:hidden">
              <PlaceOrderButton
                loading={placingOrder}
                onClick={handlePlaceOrder}
              />

              <SecurityText />
            </div>
          </div>

          {/* Right Summary */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-8 flex flex-col gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Order Summary
                  </h3>
                </div>

                {/* Items */}
                <div className="p-6 flex flex-col gap-6 max-h-[400px] overflow-y-auto">
                  {checkoutItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-20 h-20 shrink-0 rounded-lg bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 overflow-hidden">
                        <div
                          className="w-full h-full bg-center bg-cover"
                          style={{
                            backgroundImage: `url("${item.image}")`,
                          }}
                        />
                      </div>

                      <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-3">
                          <h4 className="font-bold text-slate-900 dark:text-white leading-tight">
                            {item.name}
                          </h4>

                          <span className="font-bold text-slate-900 dark:text-white whitespace-nowrap">
                            {formatCurrency(item.price * item.quantity)}
                          </span>
                        </div>

                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          Qty: {item.quantity}
                        </p>

                        <p className="text-xs text-slate-400 mt-1">
                          Ref: {item.reference}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Calculations */}
                <div className="p-6 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>

                  <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                    <span>Shipping (Standard)</span>
                    <span>{formatCurrency(shipping)}</span>
                  </div>

                  <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                    <span>Tax (Estimated)</span>
                    <span>{formatCurrency(tax)}</span>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-end">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      Total
                    </span>

                    <div className="text-right">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-normal block mb-1">
                        USD
                      </span>

                      <span className="text-2xl font-bold text-primary">
                        {formatCurrency(total)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Place Order */}
              <div className="hidden lg:block">
                <PlaceOrderButton
                  loading={placingOrder}
                  onClick={handlePlaceOrder}
                />

                <SecurityText />

                <div className="mt-6 flex justify-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
                  <PaymentBadge>VISA</PaymentBadge>
                  <PaymentBadge>MC</PaymentBadge>
                  <PaymentBadge>AMEX</PaymentBadge>
                  <PaymentBadge>PAYPAL</PaymentBadge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-400 dark:text-slate-600 border-t border-slate-200 dark:border-slate-800">
        <p>© 2024 SciSupply Inc. All rights reserved.</p>

        <div className="mt-2 flex justify-center gap-4 flex-wrap">
          <Link to="/privacy" className="hover:text-primary">
            Privacy Policy
          </Link>

          <Link to="/terms" className="hover:text-primary">
            Terms of Service
          </Link>

          <Link to="/returns" className="hover:text-primary">
            Returns
          </Link>
        </div>
      </footer>
    </div>
  );
}

/* ---------------------------------------------
   Reusable Input
--------------------------------------------- */

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  inputMode,
}) {
  return (
    <label className="flex flex-col w-full">
      {label && (
        <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
          {label}
        </span>
      )}

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        className={`w-full rounded-lg border ${
          error
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-slate-300 dark:border-slate-700 focus:ring-primary focus:border-primary"
        } bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 h-12 px-4 outline-none transition-colors`}
      />

      {error && (
        <span className="text-xs text-red-500 mt-1">
          {error}
        </span>
      )}
    </label>
  );
}

/* ---------------------------------------------
   Payment Option
--------------------------------------------- */

function PaymentOption({
  selected,
  onClick,
  title,
  icon,
  children,
}) {
  return (
    <div
      onClick={onClick}
      className={`border rounded-lg p-4 transition-colors cursor-pointer ${
        selected
          ? "border-primary bg-primary/5 dark:bg-primary/10"
          : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center ${
            selected
              ? "border-[5px] border-primary bg-white"
              : "border-2 border-slate-300 dark:border-slate-500"
          }`}
        />

        <span className="font-bold text-slate-900 dark:text-white">
          {title}
        </span>

        <div className="ml-auto">
          <Icon className="text-slate-400">{icon}</Icon>
        </div>
      </div>

      {selected && children}
    </div>
  );
}

/* ---------------------------------------------
   Place Order Button
--------------------------------------------- */

function PlaceOrderButton({ loading, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="w-full bg-primary hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white h-14 rounded-lg font-bold text-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
    >
      {loading ? (
        <>
          <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <span>Place Order</span>
          <Icon className="text-xl">arrow_forward</Icon>
        </>
      )}
    </button>
  );
}

/* ---------------------------------------------
   Security Text
--------------------------------------------- */

function SecurityText() {
  return (
    <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
      <Icon className="text-sm">lock</Icon>
      Your payment information is encrypted and secure.
    </p>
  );
}

/* ---------------------------------------------
   Payment Badge
--------------------------------------------- */

function PaymentBadge({ children }) {
  return (
    <div className="h-8 w-12 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">
      {children}
    </div>
  );
}

export default Checkout;

