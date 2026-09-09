import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import toast from "react-hot-toast";

import { Field, Input, PasswordInput } from "../../components/ui/Field";
import Button from "../../components/ui/Button";

const SingUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function signupHandler(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const name = e.target.name.value.trim();
      const email = e.target.email.value.trim();
      const phone = e.target.phone.value.trim();
      const password = e.target.password.value;

      const userData = {
        name,
        email,
        phone,
        password,
      };

      let response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/user/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        let errorMessage = "Unable to create account";

        try {
          const err = await response.json();
          errorMessage = err?.message || errorMessage;
        } catch {
          // Ignore invalid JSON error response
        }

        throw new Error(errorMessage);
      }

      await response.json();

      toast.success("Account created — please log in");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-ink-950 grid lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="hidden lg:block relative overflow-hidden bg-ink-900">
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=85"
          alt="Scientific laboratory"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/10" />

        <div className="absolute top-10 left-10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gold-400 flex items-center justify-center">
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

        <div className="absolute bottom-10 left-10 right-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />

            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Built for laboratories
            </span>
          </div>

          <h2 className="text-4xl xl:text-5xl font-black text-white tracking-tightest max-w-lg">
            Equip your work.
            <br />
            <span className="text-gold-400">
              Discover better.
            </span>
          </h2>

          <p className="text-ink-200 mt-4 max-w-md leading-relaxed">
            Create your SciSupply account to explore laboratory
            instruments, glassware, chemistry equipment and scientific
            essentials.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/30 border border-white/10 backdrop-blur">
              <ShieldCheck className="w-4 h-4 text-gold-400" />

              <span className="text-xs text-white">
                Reliable products
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/30 border border-white/10 backdrop-blur">
              <ShoppingBag className="w-4 h-4 text-gold-400" />

              <span className="text-xs text-white">
                Easy ordering
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-6 py-12 sm:py-16">
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
          {/* MOBILE BRAND */}
          <div className="flex lg:hidden items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gold-400 flex items-center justify-center">
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

          {/* HEADING */}
          <span className="text-xs font-bold uppercase tracking-widest2 text-gold-400">
            Get started
          </span>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tightest text-white mt-2">
            Create your account
          </h1>

          <p className="text-sm text-ink-500 mt-3 mb-8 leading-relaxed">
            Join SciSupply and explore reliable equipment for
            laboratories, research and education.
          </p>

          {/* FORM */}
          <form
            className="space-y-4"
            onSubmit={signupHandler}
          >
            <Field label="Full Name">
              <Input
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </Field>

            <Field label="Phone Number">
              <Input
                name="phone"
                type="tel"
                inputMode="numeric"
                placeholder="Enter phone number"
                autoComplete="tel"
                required
              />
            </Field>

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
                placeholder="Create a password"
                autoComplete="new-password"
                required
              />
            </Field>

            <p className="text-xs text-ink-500 leading-relaxed pt-1">
              By creating an account, you agree to our{" "}
              <span className="text-ink-300">
                Terms and Conditions
              </span>{" "}
              and{" "}
              <span className="text-ink-300">
                Privacy Policy
              </span>
              .
            </p>

            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full"
              loading={loading}
              icon={ArrowRight}
              iconPosition="right"
            >
              Create Account
            </Button>
          </form>

          {/* LOGIN */}
          <p className="text-center text-sm text-ink-400 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="
                text-white
                font-semibold
                hover:text-gold-300
                transition-colors
              "
            >
              Login
            </Link>
          </p>

          {/* TRUST NOTE */}
          <div className="flex items-center justify-center gap-2 mt-7 text-xs text-ink-600">
            <ShieldCheck className="w-3.5 h-3.5" />
            Your account information is kept secure
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SingUp;