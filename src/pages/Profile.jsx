import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Icon = ({ children, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>
    {children}
  </span>
);

function Profile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "Sarah",
    lastName: "Jenkin",
    email: "s.jenkin@university.edu",
    phone: "+1 (555) 123-4567",
    institution: "Massachusetts Institute of Technology",
    department: "Dept. of Biological Engineering",
    role: "Senior Researcher",
    taxId: "",
    poNumber: "",
  });

  const [saved, setSaved] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  const handleCancel = () => {
    setForm({
      firstName: "Sarah",
      lastName: "Jenkin",
      email: "s.jenkin@university.edu",
      phone: "+1 (555) 123-4567",
      institution: "Massachusetts Institute of Technology",
      department: "Dept. of Biological Engineering",
      role: "Senior Researcher",
      taxId: "",
      poNumber: "",
    });

    setSaved(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark overflow-x-hidden">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 flex h-[65px] items-center justify-between border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-4 sm:px-6">
        <div className="flex items-center gap-5 lg:gap-8">
          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex md:hidden size-10 items-center justify-center rounded-lg hover:bg-background-light dark:hover:bg-background-dark"
          >
            <Icon>menu</Icon>
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center text-primary">
              <Icon className="text-[32px]">science</Icon>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              SciSupply
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6">
            <Link
              to="/products"
              className="text-text-sec-light dark:text-text-sec-dark hover:text-primary text-sm font-medium transition-colors"
            >
              Catalog
            </Link>

            <Link
              to="/products?category=equipment"
              className="text-text-sec-light dark:text-text-sec-dark hover:text-primary text-sm font-medium transition-colors"
            >
              Equipment
            </Link>

            <Link
              to="/products?category=chemicals"
              className="text-text-sec-light dark:text-text-sec-dark hover:text-primary text-sm font-medium transition-colors"
            >
              Chemicals
            </Link>

            <Link
              to="/products?filter=sale"
              className="text-text-sec-light dark:text-text-sec-dark hover:text-primary text-sm font-medium transition-colors"
            >
              Clearance
            </Link>

            <Link
              to="/support"
              className="text-text-sec-light dark:text-text-sec-dark hover:text-primary text-sm font-medium transition-colors"
            >
              Support
            </Link>
          </nav>
        </div>

        {/* Header Right */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Search */}
          <label className="hidden lg:flex w-64 h-10">
            <div className="flex w-full h-full items-center rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus-within:border-primary">
              <div className="flex items-center justify-center pl-3 text-text-sec-light dark:text-text-sec-dark">
                <Icon className="text-[20px]">search</Icon>
              </div>

              <input
                className="w-full h-full border-none bg-transparent px-3 pl-2 text-sm outline-none focus:ring-0 text-text-main-light dark:text-text-main-dark placeholder:text-text-sec-light dark:placeholder:text-text-sec-dark"
                placeholder="Search products..."
              />
            </div>
          </label>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex size-10 items-center justify-center rounded-lg bg-background-light dark:bg-background-dark hover:bg-border-light dark:hover:bg-border-dark transition-colors"
          >
            <Icon className="text-[20px]">shopping_cart</Icon>

            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-red-500" />
          </Link>

          {/* Notifications */}
          <button
            type="button"
            className="hidden sm:flex size-10 items-center justify-center rounded-lg bg-background-light dark:bg-background-dark hover:bg-border-light dark:hover:bg-border-dark transition-colors"
          >
            <Icon className="text-[20px]">notifications</Icon>
          </button>

          {/* Profile */}
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="size-10 rounded-full border border-border-light dark:border-border-dark overflow-hidden"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwE1BGsnxb8IDBfRszB8jPESA0yV486iyqUYYdOuQiW5UKflBGVmcgrufEi4CimXFKJ9h38xz8f9Mut3z19G8-UmhhQVSFTMNOMt7o7JTCV1fWIUstTS7bS_4RSdS9quVGz3rUEMDtFN1_rvKwq_pyvRBZLlDMmx1j5wgy16Qge9qxepuHMuP7VhCDh2TDFPz72MRS3jvEF-RZZ_y0RicaOJcAUVN9FR_7LtunMoEQNhSdSpq7hBOYQbqKjRMZwakVg5zCgdt1zVU"
              alt="User profile"
              className="h-full w-full object-cover"
            />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="md:hidden fixed inset-x-0 top-[65px] z-40 border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-lg">
          <nav className="flex flex-col p-4 gap-1">
            <Link
              to="/products"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-4 py-3 hover:bg-background-light dark:hover:bg-background-dark"
            >
              Catalog
            </Link>

            <Link
              to="/products?category=equipment"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-4 py-3 hover:bg-background-light dark:hover:bg-background-dark"
            >
              Equipment
            </Link>

            <Link
              to="/products?category=chemicals"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-4 py-3 hover:bg-background-light dark:hover:bg-background-dark"
            >
              Chemicals
            </Link>

            <Link
              to="/products?filter=sale"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-4 py-3 hover:bg-background-light dark:hover:bg-background-dark"
            >
              Clearance
            </Link>

            <Link
              to="/support"
              onClick={() => setMobileMenu(false)}
              className="rounded-lg px-4 py-3 hover:bg-background-light dark:hover:bg-background-dark"
            >
              Support
            </Link>
          </nav>
        </div>
      )}

      {/* ================= PAGE LAYOUT ================= */}
      <div className="mx-auto flex min-h-[calc(100vh-65px)] max-w-[1440px]">
        {/* ================= SIDEBAR ================= */}
        <aside className="hidden md:flex w-64 lg:w-72 shrink-0 flex-col border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
          <div className="flex h-full flex-col justify-between p-4">
            <div className="flex flex-col gap-6">
              {/* User Card */}
              <div className="flex items-center gap-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPZ5MftEHgryQtkoPDBNu6Mu8_YOADeIfoffU7rvaXhOurmk_hCLCw62RSPF1oLPrT0ym1LSQy-lJ2aaEaHEF5gHbG9chz7DBqdOfp-E8IhtqPq6teWa2kjCo9QCoLjdpnOoeupoELvUr8N8TMsrnlokvHzvv2g3oJk9x1s7i0xDDlh9tpcHhELFqCT9qgYubT90fTO2VWslk8cunPQKv4MDLt_Hw8RkaMQuNDNLMRF5kKfE4QZgCK2hPdiebLhp6Xi0w_v_G1aRM"
                  alt="Dr. Sarah Jenkin"
                  className="size-12 shrink-0 rounded-full object-cover"
                />

                <div className="min-w-0">
                  <h2 className="truncate text-sm font-bold">
                    Dr. Sarah Jenkin
                  </h2>

                  <p className="truncate text-xs text-text-sec-light dark:text-text-sec-dark">
                    Senior Researcher
                  </p>
                </div>
              </div>

              {/* Sidebar Navigation */}
              <nav className="flex flex-col gap-1">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-text-sec-light dark:text-text-sec-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                >
                  <Icon>dashboard</Icon>
                  <span className="text-sm font-medium">
                    Overview
                  </span>
                </Link>

                <Link
                  to="/profile"
                  className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 text-primary"
                >
                  <Icon className="fill">person</Icon>
                  <span className="text-sm font-bold">
                    Personal Details
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    alert("Address management will be available here.")
                  }
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-text-sec-light dark:text-text-sec-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                >
                  <Icon>location_on</Icon>
                  <span className="text-sm font-medium">
                    Addresses
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    alert("Payment method management will be available here.")
                  }
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-text-sec-light dark:text-text-sec-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                >
                  <Icon>credit_card</Icon>
                  <span className="text-sm font-medium">
                    Payment Methods
                  </span>
                </button>

                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-text-sec-light dark:text-text-sec-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                >
                  <Icon>history</Icon>
                  <span className="text-sm font-medium">
                    Order History
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    alert("Preferences settings will be available here.")
                  }
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-text-sec-light dark:text-text-sec-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                >
                  <Icon>settings</Icon>
                  <span className="text-sm font-medium">
                    Preferences
                  </span>
                </button>
              </nav>
            </div>

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              className="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 text-sm font-bold transition-colors"
            >
              <Icon>logout</Icon>
              <span>Log Out</span>
            </button>
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-10 lg:pr-16">
          <div className="mx-auto flex w-full max-w-[800px] flex-col gap-8">
            {/* Page Heading */}
            <div className="flex flex-col gap-2 border-b border-border-light dark:border-border-dark pb-6">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Personal Details
              </h1>

              <p className="text-base text-text-sec-light dark:text-text-sec-dark">
                Manage your personal information and institutional
                affiliation details for grant compliance.
              </p>
            </div>

            {/* Success Message */}
            {saved && (
              <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-400">
                <Icon>check_circle</Icon>

                <div>
                  <p className="font-bold text-sm">
                    Changes saved successfully
                  </p>

                  <p className="text-xs">
                    Your profile information has been updated.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSave} className="flex flex-col gap-6">
              {/* ================= CONTACT ================= */}
              <section className="flex flex-col gap-5 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-5 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-bold">
                    Contact Information
                  </h2>

                  <span className="rounded bg-green-100 px-2 py-1 text-xs font-bold uppercase tracking-wider text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Verified
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField
                    label="First Name"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Last Name"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Academic Email"
                    name="email"
                    type="email"
                    icon="mail"
                    value={form.email}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    icon="call"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </section>

              {/* ================= INSTITUTION ================= */}
              <section className="flex flex-col gap-5 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-5 sm:p-6 shadow-sm">
                <div className="border-b border-border-light dark:border-border-dark pb-3">
                  <h2 className="text-xl font-bold">
                    Institutional Affiliation
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <InputField
                      label="Institution / University Name"
                      name="institution"
                      icon="school"
                      value={form.institution}
                      onChange={handleChange}
                    />
                  </div>

                  <InputField
                    label="Department / Lab"
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                  />

                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">
                      Role / Title
                    </span>

                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="h-12 w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option>Lab Manager</option>
                      <option>Senior Researcher</option>
                      <option>PhD Student</option>
                      <option>Principal Investigator</option>
                      <option>Procurement Officer</option>
                    </select>
                  </label>

                  <InputField
                    label="Tax ID / VAT (Optional)"
                    name="taxId"
                    placeholder="Enter Tax ID for exemption"
                    value={form.taxId}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Default PO Number"
                    name="poNumber"
                    placeholder="PO-XXXX-XXXX"
                    value={form.poNumber}
                    onChange={handleChange}
                  />
                </div>
              </section>

              {/* ================= SECURITY ================= */}
              <section className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-5 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-bold">
                    Security
                  </h2>

                  <button
                    type="button"
                    onClick={() =>
                      alert("Password settings will be implemented here.")
                    }
                    className="text-sm font-bold text-primary hover:underline"
                  >
                    Edit Settings
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3">
                  <div className="flex items-center gap-3">
                    <Icon className="text-text-sec-light dark:text-text-sec-dark">
                      lock
                    </Icon>

                    <div className="flex flex-col">
                      <span className="font-medium">
                        Password
                      </span>

                      <span className="text-sm text-text-sec-light dark:text-text-sec-dark">
                        Last changed 3 months ago
                      </span>
                    </div>
                  </div>

                  <span className="text-2xl tracking-widest">
                    ••••••••••
                  </span>
                </div>
              </section>

              {/* ================= ACTIONS ================= */}
              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2 pb-10">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="h-12 rounded-lg border border-border-light dark:border-border-dark px-6 font-bold hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-colors"
                >
                  <Icon className="text-[20px]">
                    save
                  </Icon>

                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ================= INPUT COMPONENT ================= */

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  icon,
  placeholder = "",
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold">
        {label}
      </span>

      <div className={icon ? "relative" : ""}>
        {icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-text-sec-light dark:text-text-sec-dark">
            {icon}
          </Icon>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`h-12 w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-base text-text-main-light dark:text-text-main-dark outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-sec-light dark:placeholder:text-text-sec-dark ${
            icon ? "pl-11 pr-4" : "px-4"
          }`}
        />
      </div>
    </label>
  );
}

export default Profile;