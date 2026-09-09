
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GOOGLE_ICON = (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

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

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your institutional email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    // Temporary frontend login simulation.
    // Replace this section later with your real API call.
    setTimeout(() => {
      setLoading(false);

      if (rememberMe) {
        localStorage.setItem("scilab_remember_email", email);
      }

      navigate("/dashboard");
    }, 900);
  };

  return (
    <div className="min-h-screen w-full bg-background-light font-display text-slate-900 dark:bg-background-dark dark:text-white">
      <div className="flex min-h-screen w-full flex-row">

        {/* =========================================
            LEFT VISUAL SECTION
        ========================================== */}
        <div className="relative hidden overflow-hidden bg-[#1a2230] p-12 lg:flex lg:w-1/2 lg:flex-col lg:justify-between">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpCJEuOBHY75IVcOzAr4AtZ3BKGMdLrQVH3-M-8fnTKLNNP-cQ9-yRU-6Sk0dnigRvf-gyMGsqPc5jjtigXdUXEJMP2HPRDrkEts3HHD2fb0En3qelgEZKMOHCLPGroSMByP56HqIsYFjADfcPreOxFGJ8fwaKsD3eBJx42UqynY4QKkILWPC_rhoBpkr2Ve6-p5txXhwMKSpfyk1vMchl5AcWYNpjHgHV5dv-MdKbMdkybacd7ifdzcD4gG7tA7TJYyMeJC_e1hM"
              alt="Abstract scientific laboratory glassware with blue liquid and molecular structures"
              className="h-full w-full object-cover opacity-60 mix-blend-overlay"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background-dark/90 mix-blend-multiply" />
          </div>

          {/* Logo */}
          <div className="relative z-10">
            <Link
              to="/"
              className="flex items-center gap-3 text-white"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded bg-white/20 backdrop-blur-sm">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <h2 className="text-xl font-bold tracking-tight">
                SciLab Supply
              </h2>
            </Link>
          </div>

          {/* Main Marketing Content */}
          <div className="relative z-10 max-w-lg">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white">
              Accelerating discovery with premium laboratory essentials.
            </h1>

            <p className="mb-8 font-body text-lg leading-relaxed text-white/80">
              Join over 500+ research institutions and universities trusting
              SciLab for their critical supply needs.
            </p>

            {/* Security Badge */}
            <div className="flex w-fit items-center gap-4 rounded-xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-md">
              <Icon
                className="text-green-400"
                size={24}
              >
                verified_user
              </Icon>

              <div className="flex flex-col">
                <span className="text-xs font-medium uppercase tracking-wider text-white/60">
                  Security Verified
                </span>

                <span className="text-sm font-bold text-white">
                  Institutional Grade Encryption
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="relative z-10 font-body text-sm text-white/40">
            © 2024 SciLab Supply Inc. All rights reserved.
          </div>
        </div>

        {/* =========================================
            RIGHT LOGIN SECTION
        ========================================== */}
        <div className="relative flex flex-1 flex-col items-center justify-center bg-white p-6 dark:bg-background-dark lg:p-12">

          {/* Mobile Logo */}
          <div className="absolute left-6 top-6 flex items-center gap-3 text-slate-900 dark:text-white lg:hidden">
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="h-8 w-8 text-primary">
                <svg
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <h2 className="text-lg font-bold">
                SciLab Supply
              </h2>
            </Link>
          </div>

          <div className="flex w-full max-w-[440px] flex-col gap-8">

            {/* Header */}
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-[32px] font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                Access Your Lab Portal
              </h1>

              <p className="font-body text-base leading-normal text-slate-500 dark:text-slate-400">
                Please enter your institutional email to sign in.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">
                <Icon size={20}>
                  error
                </Icon>

                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >

              {/* Email */}
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium leading-normal text-slate-900 dark:text-white">
                  Institutional Email
                </span>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  placeholder="researcher@university.edu"
                  className="form-input flex h-12 w-full rounded-lg border border-border-light bg-background-light px-4 font-body text-base text-slate-900 transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-border-dark dark:bg-[#1a2230] dark:text-white"
                />
              </label>

              {/* Password */}
              <label className="relative flex flex-col gap-2">

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium leading-normal text-slate-900 dark:text-white">
                    Password
                  </span>
                </div>

                <div className="relative flex items-center">

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="form-input flex h-12 w-full rounded-lg border border-border-light bg-background-light pl-4 pr-12 font-body text-base text-slate-900 transition-all placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-border-dark dark:bg-[#1a2230] dark:text-white"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="absolute right-4 flex items-center justify-center text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-200"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    <Icon size={20}>
                      {showPassword
                        ? "visibility_off"
                        : "visibility"}
                    </Icon>
                  </button>
                </div>
              </label>

              {/* Actions */}
              <div className="flex items-center justify-between">

                <label className="group flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                    className="rounded border-border-light bg-background-light text-primary focus:ring-primary dark:border-border-dark dark:bg-[#1a2230]"
                  />

                  <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white">
                    Remember me
                  </span>
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-bold text-primary transition-colors hover:text-blue-700"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Signing In...
                  </>
                ) : (
                  "Log In"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-border-light dark:border-border-dark" />

              <span className="mx-4 flex-shrink-0 text-xs font-medium uppercase tracking-wider text-slate-400">
                Or continue with
              </span>

              <div className="flex-grow border-t border-border-light dark:border-border-dark" />
            </div>

            {/* SSO */}
            <div className="flex flex-col gap-3">

              {/* Google */}
              <button
                type="button"
                onClick={() =>
                  alert("Google authentication will be connected later.")
                }
                className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-border-light bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-border-dark dark:bg-[#1a2230] dark:text-white dark:hover:bg-slate-800"
              >
                {GOOGLE_ICON}
                Google
              </button>

              {/* University SSO */}
              <button
                type="button"
                onClick={() =>
                  alert("University SSO will be connected later.")
                }
                className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-border-light bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-border-dark dark:bg-[#1a2230] dark:text-white dark:hover:bg-slate-800"
              >
                <Icon
                  className="text-slate-500"
                  size={20}
                >
                  school
                </Icon>

                Sign in with SSO (University ID)
              </button>
            </div>

            {/* Register */}
            <div className="mt-4 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-bold text-primary hover:underline"
                >
                  Apply for access
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="absolute bottom-6 flex gap-6 text-xs font-medium text-slate-400 dark:text-slate-600">

            <Link
              to="/privacy"
              className="transition-colors hover:text-slate-600 dark:hover:text-slate-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-slate-600 dark:hover:text-slate-400"
            >
              Terms of Service
            </Link>

            <Link
              to="/support"
              className="transition-colors hover:text-slate-600 dark:hover:text-slate-400"
            >
              Help Center
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

