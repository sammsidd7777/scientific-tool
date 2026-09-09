 
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Icon({ children, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  );
}

const teamMembers = [
  {
    name: "Dr. Jane Doe",
    role: "Chief Scientist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDS9eD4rylj_or7tVVSIDPvff2C9AKq-aKjdeWniuXUUipwH6Pt1uN8xWH0fLjUEa1Lf5JWNnp1bhrOvf3g6Ne8DuFV3YVPYzFQLYqigw_GK0VrT3rcpFcLO1fdIWZSFszHd19VDMX_aV_pMveDs6Tw2vt_M5uDgYUbnmrR7M38a22v2M4r7GXiS_k-9A8kF1fqmXHzXsn_M2N3zMeBR8zAqeSKdpE7Yt54WxsvELz2ohWUcz97ZiCIYyryTckARVrDKANzan2vH-E",
  },
  {
    name: "John Smith",
    role: "Head of Operations",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCagGgTMxEW9QfGKWOzSVPb2KR-9SALZqWN-MWiDQY0q1CUmwaTLucuZncIVGy4la0CsWsX56hKB1PJBi9LSKD4gjtwfyGFXNRyjfuGR2k6BhQcN-wGzITGw0tlSn3WH9FDfo78xB-eapuETMAV2PNUaMCsaGAOTb5VCKLYPRilg8uSaodfB6UhMH01ZKmMK9HIR84dCiVgUwn4jpu4KrLDDvC4vClWhBlJfRrm6Gb9_276jn5vv1G2YEN2aAHW8sL1mlq2JGuNrkc",
  },
  {
    name: "Dr. Emily Chen",
    role: "Research Lead",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeQ8H0evZdYwwzZgjPEIypDbz4-95QaoRJUlHvdkRC9erQmj-sXV1_TFsFLapgx6cRLFNR2AaK0KdOlzcKT-eVbqOUy_lsY-loqXWpWWW6XCeskVZihRuW46oYgBIMFVyYsD6E2X9Qpojrc-x4cwROLvE-HokNi9q42i5e-2EZb695K8Xkxk-BMLLHlVEi9nh5zvE4f8jH6chYwzNLezr82jJkryi2YeiMyUEqC70033oVI4oCDPCyKIsnY2Xrcdn8btk1dMVSE1g",
  },
  {
    name: "Mark Wilson",
    role: "Logistics Manager",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaRt7RvsQcJviXAKEhnVZN7seGt-lcp60x4l8S0kXDsLNjLDerOi_Js8CwYC3n5aD6HQ0k6ibhhmTWC5Ga9DDSQtjifmHGkAIhCynSHXCV05RSQseWuOrXsaw1gm1QAbg1VH9sOWLJEQrOrULPDtE4-8lFBMn9wesfH26DADByLx-jrIVnaDErBpVQstuIK_KyzhB2pkFfggN6iWan11EZO6moena4nOM3l1xpl0D_OPFSkIKkmgTaeckZw_5N7-LQaHgwiczcRxs",
  },
];

function About() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    institution: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSent(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message should contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSent(true);

    setForm({
      name: "",
      email: "",
      institution: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background-light font-display text-[#0d121b]">
      {/* =========================================================
          PAGE NAVIGATION
      ========================================================== */}
      <header className="sticky top-0 z-50 border-b border-[#e7ebf3] bg-background-light/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-3 md:px-10">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 text-[#0d121b] transition-colors hover:text-primary"
            >
              <Icon className="text-3xl text-primary">science</Icon>

              <h2 className="text-xl font-bold tracking-tight">
                SciSupply
              </h2>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                to="/products"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Shop
              </Link>

              <Link
                to="/about"
                className="text-sm font-medium text-primary"
              >
                About Us
              </Link>

              <Link
                to="/products?filter=institutional"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Institutions
              </Link>

              <Link
                to="/support"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Support
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            {/* Desktop Search */}
            <div className="hidden h-10 w-64 items-center rounded-lg bg-[#e7ebf3] px-3 transition-all focus-within:ring-2 focus-within:ring-primary/50 md:flex">
              <Icon className="text-[#4c669a]">search</Icon>

              <input
                type="text"
                placeholder="Search equipment..."
                className="w-full border-none bg-transparent text-sm text-[#0d121b] outline-none placeholder:text-[#4c669a] focus:ring-0"
              />
            </div>

            <div className="flex gap-2">
              {/* Cart */}
              <Link
                to="/cart"
                className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
                aria-label="Shopping cart"
              >
                <Icon>shopping_cart</Icon>
              </Link>

              {/* Mobile menu */}
              <button
                type="button"
                onClick={() => setMobileMenu((value) => !value)}
                className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100 md:hidden"
                aria-label="Toggle menu"
              >
                <Icon>{mobileMenu ? "close" : "menu"}</Icon>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenu && (
          <div className="border-t border-[#e7ebf3] bg-white px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              <Link
                to="/products"
                onClick={() => setMobileMenu(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-slate-50 hover:text-primary"
              >
                Shop
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenu(false)}
                className="rounded-lg bg-blue-50 px-3 py-3 text-sm font-medium text-primary"
              >
                About Us
              </Link>

              <Link
                to="/products?filter=institutional"
                onClick={() => setMobileMenu(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-slate-50 hover:text-primary"
              >
                Institutions
              </Link>

              <Link
                to="/support"
                onClick={() => setMobileMenu(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-slate-50 hover:text-primary"
              >
                Support
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* =========================================================
          MAIN
      ========================================================== */}
      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-4 py-8 md:px-10">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section>
          <div className="flex flex-col items-center gap-8 rounded-2xl border border-[#e7ebf3] bg-white p-6 shadow-sm md:flex-row md:p-12">
            <div className="flex flex-1 flex-col gap-6">
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                  <Icon className="text-[16px]">science</Icon>
                  About SciSupply
                </span>

                <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-[#0d121b] md:text-5xl">
                  Accelerating Discovery Since 2024
                </h1>

                <p className="max-w-xl text-base leading-relaxed text-[#4c669a] md:text-lg">
                  We supply the world's leading laboratories and brightest
                  students with certified tools. From beakers to
                  spectrometers, we ensure precision in every shipment.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#mission"
                  className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700"
                >
                  Our Mission
                  <Icon className="text-sm">arrow_forward</Icon>
                </a>

                <Link
                  to="/products"
                  className="rounded-lg border border-[#cfd7e7] bg-white px-6 py-3 text-sm font-bold tracking-wide text-[#0d121b] transition-all hover:bg-gray-50"
                >
                  View Catalog
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 shadow-inner md:w-1/2 lg:w-5/12">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrRDljXKy-MwUWHLBU_0wBRGMUbrDVwp4AXeHETrlfHhM2ijiHpR_xoZ4ciiluGB4UK-K1dZovqwvPUpeIst0l_RvU4K4LnxYOSEp0aM42o9KWsCuRaQsfBe7MXqH994_IY5TKXD1miKvrtcTnXj_uEXnZ0gnrHh5TC1LfrUfWYprMbvgxopaCS64uesT9pUKxVk9hfF94Fo7RGx9utzf_ASiF-Ue2_-sHdvdqaX9cVTZxLfkLHg9PWxnQxSdkqobLRo-dCSSEj3s"
                alt="Scientific glassware with blue liquid"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY US
        ====================================================== */}
        <section id="mission" className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Why Researchers Choose Us
            </h2>

            <p className="text-[#4c669a]">
              Reliable equipment for reliable results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-xl border border-[#cfd7e7] bg-white p-6 transition-colors hover:border-primary/50">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-blue-50 text-primary">
                <Icon className="text-3xl">verified</Icon>
              </div>

              <h3 className="mb-2 text-lg font-bold">
                Certified Quality
              </h3>

              <p className="text-sm leading-relaxed text-[#4c669a]">
                ISO-certified tools guaranteed for precision measurements and
                long-term durability in demanding laboratory environments.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-xl border border-[#cfd7e7] bg-white p-6 transition-colors hover:border-primary/50">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-blue-50 text-primary">
                <Icon className="text-3xl">local_shipping</Icon>
              </div>

              <h3 className="mb-2 text-lg font-bold">
                Fast Shipping
              </h3>

              <p className="text-sm leading-relaxed text-[#4c669a]">
                Next-day delivery options for urgent lab needs with
                specialized packaging for fragile glassware and equipment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-xl border border-[#cfd7e7] bg-white p-6 transition-colors hover:border-primary/50">
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-blue-50 text-primary">
                <Icon className="text-3xl">school</Icon>
              </div>

              <h3 className="mb-2 text-lg font-bold">
                Educational Support
              </h3>

              <p className="text-sm leading-relaxed text-[#4c669a]">
                Dedicated resources, bulk discounts, and curriculum kits for
                students and academic institutions.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            LEADERSHIP
        ====================================================== */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">
              Meet Our Leadership
            </h2>

            <button
              type="button"
              onClick={() =>
                alert("Our complete leadership directory will be available soon.")
              }
              className="text-sm font-bold text-primary hover:underline"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col gap-3">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div>
                  <p className="font-bold">{member.name}</p>

                  <p className="text-xs font-medium uppercase tracking-wider text-[#4c669a]">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            CONTACT + INFO
        ====================================================== */}
        <section className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="flex flex-col gap-6 rounded-xl border border-[#cfd7e7] bg-white p-8 shadow-sm">
            <div>
              <h2 className="mb-2 text-2xl font-bold">
                Get in Touch
              </h2>

              <p className="text-sm text-[#4c669a]">
                Questions about an order or institutional pricing?
              </p>
            </div>

            {sent && (
              <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                <Icon className="text-[20px]">check_circle</Icon>

                <div>
                  <p className="font-bold">Message sent successfully.</p>
                  <p className="mt-1 text-xs">
                    Our support team will get back to you soon.
                  </p>
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold">
                    Name
                  </span>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Dr. Alex Doe"
                    className={`w-full rounded-lg border bg-[#f6f8fb] px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/50 ${
                      errors.name
                        ? "border-red-400"
                        : "border-transparent"
                    }`}
                  />

                  {errors.name && (
                    <span className="text-xs text-red-500">
                      {errors.name}
                    </span>
                  )}
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold">
                    Email
                  </span>

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="alex@university.edu"
                    className={`w-full rounded-lg border bg-[#f6f8fb] px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/50 ${
                      errors.email
                        ? "border-red-400"
                        : "border-transparent"
                    }`}
                  />

                  {errors.email && (
                    <span className="text-xs text-red-500">
                      {errors.email}
                    </span>
                  )}
                </label>
              </div>

              {/* Institution */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-bold">
                  Institution / Company
                </span>

                <input
                  name="institution"
                  value={form.institution}
                  onChange={handleChange}
                  type="text"
                  placeholder="MIT, Stanford, Biolab Inc..."
                  className="w-full rounded-lg border border-transparent bg-[#f6f8fb] px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/50"
                />
              </label>

              {/* Subject */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-bold">
                  Subject
                </span>

                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-transparent bg-[#f6f8fb] px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/50"
                >
                  <option>General Inquiry</option>
                  <option>Bulk / Institutional Order</option>
                  <option>Order Support</option>
                  <option>Partnership</option>
                </select>
              </label>

              {/* Message */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-bold">
                  Message
                </span>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="How can we help you?"
                  className={`w-full resize-none rounded-lg border bg-[#f6f8fb] px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary/50 ${
                    errors.message
                      ? "border-red-400"
                      : "border-transparent"
                  }`}
                />

                {errors.message && (
                  <span className="text-xs text-red-500">
                    {errors.message}
                  </span>
                )}
              </label>

              <button
                type="submit"
                className="mt-2 rounded-lg bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="flex h-full flex-col gap-8">
            {/* Contact Info */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3 rounded-xl border border-[#cfd7e7] bg-white p-5">
                <div className="flex items-center gap-3 text-primary">
                  <Icon>email</Icon>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#4c669a]">
                    Email Support
                  </span>
                </div>

                <a
                  href="mailto:support@scisupply.com"
                  className="font-medium hover:text-primary"
                >
                  support@scisupply.com
                </a>

                <p className="text-xs text-[#4c669a]">
                  Response time: ~24 hours
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-xl border border-[#cfd7e7] bg-white p-5">
                <div className="flex items-center gap-3 text-primary">
                  <Icon>call</Icon>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#4c669a]">
                    Phone
                  </span>
                </div>

                <a
                  href="tel:+18005550199"
                  className="font-medium hover:text-primary"
                >
                  +1 (800) 555-0199
                </a>

                <p className="text-xs text-[#4c669a]">
                  Mon-Fri, 9am - 5pm EST
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="group relative min-h-[300px] flex-1 overflow-hidden rounded-xl border border-[#cfd7e7]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlfCpaTbid502TpfC1BYWKMkc8s91Q7RrbZyJ-lsI3LynKSjLDsnNMY3MK-SDCvD8lD-sY8FJBVTjauVXjZMre7Slqch-o1tZ7yGnMzjw-XBev5ht6G4HDttIBXv_8PhphvTBWwNSsMahwEURwM0JwljWVCl7kuxXtjAbWHAOnxIZrcATFb0pIvDr14-UStJlW71DZs3RvGK-Q1nx_ApycNtCNSJXwZvSf37UsNHjDBzQRVpCinLe-6nMf5gGGSHBBDjIyDkCmecs"
                alt="Map showing SciSupply headquarters"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />

              <div className="absolute bottom-4 left-4 max-w-[240px] rounded-lg bg-white p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <Icon className="mt-1 text-primary">
                    location_on
                  </Icon>

                  <div>
                    <p className="text-sm font-bold">
                      Headquarters
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-[#4c669a]">
                      123 Research Blvd,
                      <br />
                      Tech Park, CA 94025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TRUSTED INSTITUTIONS
        ====================================================== */}
        <section className="border-t border-[#e7ebf3] py-10">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-[#4c669a]">
            Trusted by leading institutions
          </p>

          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 md:gap-12">
            <div className="flex items-center gap-2 text-lg font-bold md:text-xl">
              <Icon className="text-3xl">biotech</Icon>
              BioGen Labs
            </div>

            <div className="flex items-center gap-2 text-lg font-bold md:text-xl">
              <Icon className="text-3xl">school</Icon>
              State University
            </div>

            <div className="flex items-center gap-2 text-lg font-bold md:text-xl">
              <Icon className="text-3xl">vaccines</Icon>
              PharmaCorp
            </div>

            <div className="flex items-center gap-2 text-lg font-bold md:text-xl">
              <Icon className="text-3xl">science</Icon>
              Future Research
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          PAGE FOOTER
      ========================================================== */}
      <footer className="border-t border-[#e7ebf3] bg-white py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-10 px-4 md:flex-row md:px-10">
          {/* Brand */}
          <div className="flex max-w-xs flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-[#0d121b]"
            >
              <Icon className="text-primary">science</Icon>

              <span className="text-lg font-bold">
                SciSupply
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-[#4c669a]">
              Empowering scientific discovery with certified tools and
              reliable equipment since 2024.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-12 md:gap-16">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold">
                Company
              </h4>

              <Link
                to="/about"
                className="text-sm text-[#4c669a] hover:text-primary"
              >
                About
              </Link>

              <button
                type="button"
                onClick={() =>
                  alert("Careers page will be available soon.")
                }
                className="text-left text-sm text-[#4c669a] hover:text-primary"
              >
                Careers
              </button>

              <button
                type="button"
                onClick={() =>
                  alert("Press information will be available soon.")
                }
                className="text-left text-sm text-[#4c669a] hover:text-primary"
              >
                Press
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold">
                Support
              </h4>

              <Link
                to="/support"
                className="text-sm text-[#4c669a] hover:text-primary"
              >
                Help Center
              </Link>

              <Link
                to="/products"
                className="text-sm text-[#4c669a] hover:text-primary"
              >
                Safety Sheets
              </Link>

              <button
                type="button"
                onClick={() =>
                  alert("Returns information will be available soon.")
                }
                className="text-left text-sm text-[#4c669a] hover:text-primary"
              >
                Returns
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold">
                Legal
              </h4>

              <Link
                to="/privacy"
                className="text-sm text-[#4c669a] hover:text-primary"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="text-sm text-[#4c669a] hover:text-primary"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[1200px] border-t border-[#f0f2f5] px-4 pt-8 text-center text-xs text-[#4c669a] md:px-10">
          © 2024 SciSupply Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default About;

