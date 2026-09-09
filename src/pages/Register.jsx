 
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GOOGLE_ICON = (
  <svg
    aria-hidden="true"
    className="h-5 w-5"
    viewBox="0 0 24 24"
  >
    <path
      d="M21.35 12.27c0-.71-.06-1.39-.18-2.05H12v3.88h5.23a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.7 2.92-4.2 2.92-7.19Z"
      fill="#4285F4"
    />
    <path
      d="M12 21c2.63 0 4.84-.87 6.45-2.36l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.29v2.51A9.74 9.74 0 0 0 12 21Z"
      fill="#34A853"
    />
    <path
      d="M6.54 13.1A5.86 5.86 0 0 1 6.23 12c0-.38.07-.75.19-1.1V8.39H3.29A9.06 9.06 0 0 0 2.25 12c0 1.3.31 2.53.86 3.61l3.43-2.51Z"
      fill="#FBBC05"
    />
    <path
      d="M12 6.87c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.94 14.63 3 12 3a9.74 9.74 0 0 0-8.71 5.39l3.43 2.51c.77-2.31 2.92-4.03 5.28-4.03Z"
      fill="#EA4335"
    />
  </svg>
);

function Icon({ children, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  );
}

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const passwordStrength = useMemo(() => {
    const password = form.password;

    if (!password) {
      return {
        score: 0,
        label: "Enter a password",
        color: "bg-slate-200",
        textColor: "text-slate-500",
      };
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) {
      return {
        score,
        label: "Weak password",
        color: "bg-red-500",
        textColor: "text-red-600",
      };
    }

    if (score === 2) {
      return {
        score,
        label: "Fair password",
        color: "bg-yellow-500",
        textColor: "text-yellow-600",
      };
    }

    if (score === 3) {
      return {
        score,
        label: "Good password",
        color: "bg-green-500",
        textColor: "text-green-600",
      };
    }

    return {
      score,
      label: "Strong password",
      color: "bg-green-500",
      textColor: "text-green-600",
    };
  }, [form.password]);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    }

    if (!form.terms) {
      newErrors.terms = "Please accept the Terms of Service and Privacy Policy.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Temporary frontend-only registration flow.
    // Replace this section later with your backend API.
    setTimeout(() => {
      const user = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        role,
      };

      localStorage.setItem("scisupplyUser", JSON.stringify(user));
      localStorage.setItem("scisupplyAuth", "true");

      setLoading(false);

      alert("Account created successfully!");
      navigate("/dashboard");
    }, 900);
  };

  const handleGoogle = () => {
    alert("Google registration will be connected here.");
  };

  const handleOrcid = () => {
    alert("ORCID registration will be connected here.");
  };

  return (
    <div className="min-h-screen bg-background-light font-display text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-slate-200 bg-white px-6 py-4 lg:px-20 lg:py-5">
        <Link
          to="/"
          className="flex items-center gap-4 text-slate-900 transition-colors hover:text-primary"
        >
          <div className="flex size-8 items-center justify-center text-primary">
            <Icon className="text-4xl">science</Icon>
          </div>

          <h2 className="text-xl font-bold leading-tight tracking-tight">
            SciSupply
          </h2>
        </Link>

        <div className="flex flex-1 justify-end gap-8">
          <Link
            to="/support"
            className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-primary"
          >
            <Icon className="text-slate-500">help</Icon>
            Help Center
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-grow flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-7xl flex-col items-start gap-12 lg:flex-row lg:gap-20">
          {/* Left Content */}
          <section className="w-full flex-1 lg:sticky lg:top-32">
            <div className="flex flex-col gap-6">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-primary">
                  <Icon className="text-[18px]">science</Icon>
                  Built for the scientific community
                </div>

                <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                  Join the Scientific Community
                </h1>

                <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                  Create an account to track orders, access academic pricing,
                  and save your favorite supplies. Equip your lab with
                  precision.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <Icon className="text-3xl text-primary">school</Icon>

                  <div>
                    <h3 className="text-base font-bold">
                      Academic Pricing
                    </h3>

                    <p className="text-sm text-slate-500">
                      Verified discounts for students & universities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <Icon className="text-3xl text-primary">inventory_2</Icon>

                  <div>
                    <h3 className="text-base font-bold">
                      Easy Reordering
                    </h3>

                    <p className="text-sm text-slate-500">
                      One-click restock for your essential lab consumables.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <Icon className="text-3xl text-primary">
                    verified_user
                  </Icon>

                  <div>
                    <h3 className="text-base font-bold">
                      Secure Compliance
                    </h3>

                    <p className="text-sm text-slate-500">
                      Full documentation and invoices for grant reporting.
                    </p>
                  </div>
                </div>

                <div className="relative h-32 overflow-hidden rounded-xl bg-slate-200 sm:h-auto">
                  <img
                    alt="Laboratory glassware with blue liquid"
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsOO8C1C_FwkYWxD_5O42NZlpRBcKNs2_vpOkDdrodIg1s5AAzEkvsb8c9KwdyRTS2JFoOGbzF2GjDdHinAM1T9_kzYHpMZTWTvRByLdyYIdBn_eE1h_RSAkpf9_CJhJezB6O8zjx9iqkiFroPybkmIf12xzGKp6LVUMyRRkv2AIWHiTEKdtPy7fwKrKh487bdPf5yxNEbe__gADOqSZNDsYINwr9x37w5heYIJ7XJ6CaAE7prKyyeDOSv2wbvLrTKjJVyx-XVPm0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* Registration Card */}
          <section className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:max-w-[480px]">
            <div className="p-8">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Create your account
              </h2>

              {/* Role Selector */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  I am a...
                </label>

                <div className="flex rounded-lg bg-slate-100 p-1">
                  {[
                    ["student", "Student"],
                    ["researcher", "Researcher"],
                    ["institution", "Institution"],
                  ].map(([value, label]) => (
                    <label
                      key={value}
                      className="flex flex-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="role"
                        value={value}
                        checked={role === value}
                        onChange={() => setRole(value)}
                        className="sr-only"
                      />

                      <div
                        className={`flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-all ${
                          role === value
                            ? "bg-white text-primary shadow-sm"
                            : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        {label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Names */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1 block text-sm font-medium text-slate-700"
                    >
                      First Name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Marie"
                      className={`h-11 w-full rounded-lg border bg-slate-50 px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                        errors.firstName
                          ? "border-red-400"
                          : "border-slate-300"
                      }`}
                    />

                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-1 block text-sm font-medium text-slate-700"
                    >
                      Last Name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Curie"
                      className={`h-11 w-full rounded-lg border bg-slate-50 px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                        errors.lastName
                          ? "border-red-400"
                          : "border-slate-300"
                      }`}
                    />

                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Institutional Email
                  </label>

                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@university.edu"
                      className={`h-11 w-full rounded-lg border bg-slate-50 px-3 pl-10 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                        errors.email
                          ? "border-red-400"
                          : "border-slate-300"
                      }`}
                    />

                    <Icon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-slate-400">
                      mail
                    </Icon>
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    Please use your academic email for faster verification.
                  </p>

                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`h-11 w-full rounded-lg border bg-slate-50 px-3 pl-10 pr-11 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                        errors.password
                          ? "border-red-400"
                          : "border-slate-300"
                      }`}
                    />

                    <Icon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-slate-400">
                      lock
                    </Icon>

                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      <Icon className="text-[20px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </Icon>
                    </button>
                  </div>

                  {/* Password Strength */}
                  <div className="mt-2 flex h-1 gap-1">
                    {[0, 1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-full ${
                          index < passwordStrength.score
                            ? passwordStrength.color
                            : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>

                  <p
                    className={`mt-1 flex items-center gap-1 text-xs ${passwordStrength.textColor}`}
                  >
                    <Icon className="text-[14px]">
                      {passwordStrength.score >= 3
                        ? "check_circle"
                        : "info"}
                    </Icon>

                    {passwordStrength.label}
                  </p>

                  {errors.password && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2 pt-2">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={form.terms}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                  />

                  <label
                    htmlFor="terms"
                    className="text-sm text-slate-600"
                  >
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="font-medium text-primary hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="font-medium text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {errors.terms && (
                  <p className="-mt-3 text-xs text-red-500">
                    {errors.terms}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>

              {/* Social Divider */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>

                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-slate-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleGoogle}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    {GOOGLE_ICON}
                    <span>Google</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOrcid}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    <span className="font-bold tracking-tight text-[#A6CE39]">
                      iD
                    </span>
                    <span>ORCID</span>
                  </button>
                </div>
              </div>

              {/* Login */}
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary transition hover:text-blue-500"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </div>

            {/* Security Footer */}
            <div className="flex items-center justify-center gap-2 border-t border-slate-100 bg-slate-50 px-8 py-4 text-xs text-slate-500">
              <Icon className="text-[16px]">lock</Icon>
              Your data is encrypted and secure via SSL.
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        <div className="mb-2 flex flex-wrap justify-center gap-6 px-4">
          <Link to="/about" className="transition hover:text-primary">
            About Us
          </Link>

          <Link to="/privacy" className="transition hover:text-primary">
            Privacy Policy
          </Link>

          <Link to="/terms" className="transition hover:text-primary">
            Terms & Conditions
          </Link>

          <Link to="/support" className="transition hover:text-primary">
            Contact Support
          </Link>
        </div>

        <p>© 2024 SciSupply Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Register;

