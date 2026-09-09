
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Package,
  Heart,
  User,
  LogOut,
  Trash2,
  ShieldCheck,
} from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/userSlice";

const menuItems = [
  {
    to: "/cart",
    label: "My Orders",
    icon: Package,
  },
  {
    to: "/wishlist",
    label: "My Wishlist",
    icon: Heart,
  },
];

const settingsItems = [
  {
    to: "/userdetail",
    label: "Profile Information",
  },
  {
    to: "/address",
    label: "Manage Address",
  },
];

const Myprofileside = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const role = user?.role || "user";
  const isAdmin = role === "admin";

  // Logout
  const logOutUseAccount = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/user/logout`,
        {
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      dispatch(logout());

      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  // Delete Account
  const DeleteUserAccount = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACK_URL}/user/delete`,
        {
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      dispatch(logout());

      toast.success("Account deleted");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/10 bg-ink-900/60 p-6 h-fit lg:sticky lg:top-28"
    >
      {/* USER */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gold-500/15 flex items-center justify-center">
            <User className="w-5 h-5 text-gold-300" />
          </div>

          <div>
            <p className="text-white font-semibold">
              Hello {user?.name || ""}
            </p>

            <p className="text-ink-400 text-sm">
              Welcome back
            </p>
          </div>
        </div>
      </div>

      {/* MENU */}
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const active = location.pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                active
                  ? "bg-gold-500/15 text-gold-300"
                  : "text-ink-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}

        {/* ACCOUNT SETTINGS */}
        <div className="pt-4 mt-4 border-t border-white/10">
          <h3 className="px-4 text-[11px] font-bold uppercase tracking-widest2 text-ink-500 mb-2">
            Account Settings
          </h3>

          {settingsItems.map((item) => {
            const active = location.pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`block px-4 py-2.5 rounded-xl text-sm transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-ink-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* ADMIN ONLY */}
          {isAdmin && (
            <Link
              to="/admin"
              className={`flex items-center gap-3 px-4 py-2.5 mt-1 rounded-xl text-sm transition-colors ${
                location.pathname.startsWith("/admin")
                  ? "bg-gold-500/15 text-gold-300"
                  : "text-ink-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Admin Panel
            </Link>
          )}
        </div>
      </nav>

      {/* ACTIONS */}
      <div className="pt-6 mt-6 border-t border-white/10 space-y-2">
        {/* LOGOUT */}
        <button
          onClick={logOutUseAccount}
          className="w-full flex items-center gap-2 justify-center h-11 rounded-xl border border-white/15 text-white text-sm font-semibold hover:bg-white/5 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Log Out
        </button>

        {/* DELETE ACCOUNT */}
        <button
          onClick={DeleteUserAccount}
          className="w-full flex items-center gap-2 justify-center h-11 rounded-xl border border-red-500/20 text-red-400 text-sm font-semibold hover:bg-red-500/10 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Delete Account
        </button>
      </div>
    </motion.aside>
  );
};

export default Myprofileside;
