import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  Microscope,
  LockKeyhole,
} from "lucide-react";
import toast from "react-hot-toast";

import { Field, Input, PasswordInput } from "../../components/ui/Field";
import Button from "../../components/ui/Button";

import { useDispatch } from "react-redux";
import { login } from "../../Redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const loginhandler = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Login failed");
      }

      /*
       * Keep the existing backend response structure.
       * role can be returned as an array or string.
       */
      const userRole = Array.isArray(data?.user?.role)
        ? data.user.role[0]
        : data?.user?.role || "user";

      dispatch(
        login({
          userName:
            data?.user?.userName ||
            data?.user?.name ||
            "",
          email: data?.user?.email || email,
          role: userRole,
        })
      );

      toast.success("Welcome back to SciSupply!");

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error("Login error:", error);

      toast.error(
        error?.message || "Unable to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ink-950 grid lg:grid-cols-2">
      {/* =====================================================
          LEFT SCIENTIFIC IMAGE SECTION
      ====================================================== */}
      <div className="hidden lg:block relative overflow-hidden bg-ink-900">
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=85"
          alt="Scientific laboratory"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        {/* Image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-ink-950
            via-ink-950/60
            to-ink-950/10
          "
        />

        {/* Brand */}
        <div className="absolute top-10 left-10">
          <div className="flex items-center gap-3">
            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-gold-400
                flex
                items-center
                justify-center
              "
            >
              <FlaskConical className="w-5 h-5 text-ink-950" />
            </div>

            <div>
              <p className="text-xl font-black text-white tracking-tight">
                SciSupply
              </p>

              <p className="text-xs text-ink-300">
                Scientific Equipment
              </p>
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-10 left-10 right-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-emerald-300
              "
            >
              Laboratory essentials
            </span>
          </div>

          <h2
            className="
              text-4xl
              xl:text-5xl
              font-black
              text-white
              tracking-tightest
              max-w-xl
            "
          >
            Everything your
            <br />
            <span className="text-gold-400">
              laboratory needs.
            </span>
          </h2>

          <p
            className="
              text-ink-200
              mt-4
              max-w-md
              leading-relaxed
            "
          >
            Sign in to manage your account, save scientific
            products and continue exploring laboratory equipment.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            <div
              className="
                flex
                items-center
                gap-2
                px-3
                py-2
                rounded-full
                bg-black/30
                border
                border-white/10
                backdrop-blur
              "
            >
              <Microscope className="w-4 h-4 text-gold-400" />

              <span className="text-xs text-white">
                Lab equipment
              </span>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                px-3
                py-2
                rounded-full
                bg-black/30
                border
                border-white/10
                backdrop-blur
              "
            >
              <ShieldCheck className="w-4 h-4 text-gold-400" />

              <span className="text-xs text-white">
                Reliable products
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          RIGHT LOGIN SECTION
      ====================================================== */}
      <div
        className="
          flex
          items-center
          justify-center
          px-6
          py-12
          sm:py-16
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="w-full max-w-sm"
        >
          {/* Mobile brand */}
          <div className="flex lg:hidden items-center gap-3 mb-10">
            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-gold-400
                flex
                items-center
                justify-center
              "
            >
              <FlaskConical className="w-5 h-5 text-ink-950" />
            </div>

            <div>
              <p className="text-lg font-black text-white">
                SciSupply
              </p>

              <p className="text-[11px] text-ink-500">
                Scientific Equipment
              </p>
            </div>
          </div>

          {/* Heading */}
          <span
            className="
              text-xs
              font-bold
              uppercase
              tracking-widest2
              text-gold-400
            "
          >
            Welcome back
          </span>

          <h1
            className="
              text-3xl
              sm:text-4xl
              font-black
              tracking-tightest
              text-white
              mt-2
            "
          >
            Sign in to SciSupply
          </h1>

          <p
            className="
              text-sm
              text-ink-500
              mt-3
              mb-8
              leading-relaxed
            "
          >
            Access your account and continue exploring scientific
            equipment and laboratory essentials.
          </p>

          {/* Login form */}
          <form
            className="space-y-5"
            onSubmit={loginhandler}
          >
            <Field label="Email Address">
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </Field>

            <Field label="Password">
              <PasswordInput
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </Field>

            {/* Forgot password */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() =>
                  toast("Password reset will be available soon.")
                }
                className="
                  text-xs
                  text-ink-400
                  hover:text-gold-300
                  transition-colors
                "
              >
                Forgot password?
              </button>
            </div>

            {/* Login button */}
            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full"
              loading={loading}
              icon={ArrowRight}
              iconPosition="right"
            >
              Login
            </Button>
          </form>

          {/* Signup */}
          <p
            className="
              text-center
              text-sm
              text-ink-400
              mt-8
            "
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="
                text-white
                font-semibold
                hover:text-gold-300
                transition-colors
              "
            >
              Create account
            </Link>
          </p>

          {/* Security note */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              mt-7
              text-xs
              text-ink-600
            "
          >
            <LockKeyhole className="w-3.5 h-3.5" />

            <span>
              Your login information is securely protected
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;