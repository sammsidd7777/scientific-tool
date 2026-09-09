import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const orders = [
  {
    id: "#8821",
    date: "Oct 24, 2023",
    items: "Pyrex Beakers (Set of 5), Digital PH Meter",
    extra: "+ 3 more items",
    total: "$450.00",
    status: "Pending",
  },
  {
    id: "#8744",
    date: "Oct 12, 2023",
    items: "Safety Goggles (Box of 20)",
    extra: "Bulk Order",
    total: "$125.50",
    status: "Delivered",
  },
  {
    id: "#8602",
    date: "Sep 28, 2023",
    items: "Microscope Slides, Cover Glass",
    extra: "+ 1 more item",
    total: "$89.00",
    status: "Delivered",
  },
];

function Icon({ children, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  );
}

function Logo() {
  return (
    <svg
      fill="none"
      viewBox="0 0 48 48"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
        fill="currentColor"
      />

      <path
        clipRule="evenodd"
        d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9295 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

function Dashboard() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleLogout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to log out?"
    );

    if (confirmed) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  const handleReorder = (order) => {
    window.alert(
      `Re-order request started for ${order.id}.\n\n${order.items}`
    );
  };

  const handleViewOrder = (order) => {
    window.alert(
      `Order ${order.id}\n\nDate: ${order.date}\nTotal: ${order.total}\nStatus: ${order.status}`
    );
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#f6f6f8] font-display text-[#0d121b]">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-64 flex-col
          border-r border-[#e7ebf3]
          bg-white
          transition-transform duration-300
          lg:static lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-16 shrink-0 items-center gap-3 border-b border-[#e7ebf3] px-6">
          <div className="size-6 text-primary">
            <Logo />
          </div>

          <h2 className="text-lg font-bold tracking-tight">
            SciSupply
          </h2>

          {/* Mobile close */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto flex size-8 items-center justify-center rounded-lg hover:bg-slate-100 lg:hidden"
          >
            <Icon>close</Icon>
          </button>
        </div>

        {/* Profile */}
        <div className="px-4 py-6">
          <div className="flex items-center gap-3">
            <div
              className="size-12 shrink-0 rounded-full border border-[#e7ebf3] bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVrU_I1ntyHt-_VmhEDFoWlXXtv2FADUWMyl12QRgpcK81EiJSBRm0lwCxLjKDlWFMfB15-WYFtagAWzDBUAWjYBbk1QwnLrrWl9BJ87bXTkx7sZgcdUnVG7d2KhGEj2UtDKvd_hCT6TQ7NWnb2rcHBIfQuTZprH-PB13CWvIT2kjyQICvBt9npmhYBinWFvwAfeUegC2sZqdueOCNG7njoUK-xnryjWL0YVZrWOCRR-coD77VRAlxh_DcohxyeB_7gimlaMo0gwQ")',
              }}
            />

            <div className="min-w-0">
              <h1 className="truncate text-base font-bold">
                Dr. Sarah Smith
              </h1>

              <p className="truncate text-xs font-medium text-[#4c669a]">
                Lab Manager
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-3">
          <SidebarLink
            to="/dashboard"
            icon="dashboard"
            label="Dashboard"
            active
          />

          <SidebarLink
            to="/orders"
            icon="science"
            label="My Orders"
          />

          <SidebarLink
            to="/saved-items"
            icon="bookmark"
            label="Saved Items"
          />

          <SidebarLink
            to="/institution"
            icon="school"
            label="Institution"
          />

          <SidebarLink
            to="/profile"
            icon="settings"
            label="Settings"
          />
        </nav>

        {/* Logout */}
        <div className="border-t border-[#e7ebf3] p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-slate-700 transition hover:bg-red-50 hover:text-red-600"
          >
            <Icon className="text-[22px]">logout</Icon>
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex h-screen min-w-0 flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-[#e7ebf3] bg-white px-4 sm:px-6 lg:px-10">
          {/* Mobile Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="mr-3 flex size-10 shrink-0 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
          >
            <Icon>menu</Icon>
          </button>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex max-w-md flex-1"
          >
            <label className="relative flex w-full items-center">
              <Icon className="absolute left-3 text-[20px] text-[#4c669a]">
                search
              </Icon>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-full rounded-lg border-none bg-[#f6f6f8] pl-10 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-primary/20"
                placeholder="Search catalog, chemicals, equipment..."
              />
            </label>
          </form>

          {/* Right */}
          <div className="ml-3 flex items-center gap-2 sm:gap-4">
            <Link
              to="/products"
              className="hidden text-sm font-medium hover:text-primary md:block"
            >
              Catalog
            </Link>

            <Link
              to="/support"
              className="hidden text-sm font-medium hover:text-primary md:block"
            >
              Support
            </Link>

            <div className="mx-1 hidden h-6 w-px bg-[#e7ebf3] md:block" />

            {/* Notification */}
            <button
              onClick={() =>
                window.alert("You have 2 new notifications.")
              }
              className="relative flex size-10 items-center justify-center rounded-full bg-[#f6f6f8] transition hover:bg-slate-200"
            >
              <Icon className="text-[20px]">notifications</Icon>

              <span className="absolute right-2 top-2 size-2 rounded-full border border-white bg-red-500" />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex size-10 items-center justify-center rounded-full bg-[#f6f6f8] transition hover:bg-slate-200"
            >
              <Icon className="text-[20px]">
                shopping_cart
              </Icon>

              <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border border-white bg-primary text-[10px] font-bold text-white">
                3
              </span>
            </Link>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-[#f6f6f8] p-4 sm:p-6 lg:p-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-8">
            {/* Welcome */}
            <section className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                  Good Morning, Dr. Smith
                </h1>

                <p className="mt-1 text-[#4c669a]">
                  Here's what's happening in your laboratory today.
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-4 py-2 text-primary">
                <Icon className="text-[20px]">
                  local_shipping
                </Icon>

                <span className="text-sm font-bold">
                  2 Active Shipments
                </span>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <QuickAction
                icon="shopping_cart"
                title="View Cart"
                description="3 Items ready for checkout"
                iconClass="bg-blue-50 text-primary"
                hoverClass="group-hover:text-primary"
                onClick={() => navigate("/cart")}
              />

              <QuickAction
                icon="package_2"
                title="Track Orders"
                description="Order #8821 out for delivery"
                iconClass="bg-purple-50 text-purple-600"
                hoverClass="group-hover:text-purple-600"
                onClick={() => navigate("/orders")}
              />

              <QuickAction
                icon="manage_accounts"
                title="Profile Settings"
                description="Update billing & shipping info"
                iconClass="bg-green-50 text-green-600"
                hoverClass="group-hover:text-green-600"
                onClick={() => navigate("/profile")}
              />
            </section>

            {/* Recent Orders */}
            <section className="overflow-hidden rounded-xl border border-[#e7ebf3] bg-white shadow-sm">
              <div className="flex flex-col gap-3 border-b border-[#e7ebf3] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <h2 className="text-lg font-bold">
                  Recent Orders
                </h2>

                <Link
                  to="/orders"
                  className="text-sm font-semibold text-primary hover:text-blue-700"
                >
                  View All History
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse text-left">
                  <thead className="bg-[#f6f6f8] text-xs font-semibold uppercase text-[#4c669a]">
                    <tr>
                      <th className="px-6 py-3">Order ID</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">
                        Items Summary
                      </th>
                      <th className="px-6 py-3">Total</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3 text-right">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#e7ebf3] text-sm">
                    {orders.map((order) => (
                      <tr
                        key={order.id}
                        className="group transition hover:bg-[#f6f6f8]"
                      >
                        <td className="px-6 py-4">
                          <button
                            onClick={() =>
                              handleViewOrder(order)
                            }
                            className="font-bold text-primary hover:underline"
                          >
                            {order.id}
                          </button>
                        </td>

                        <td className="px-6 py-4 text-slate-700">
                          {order.date}
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {order.items}
                            </span>

                            <span className="text-xs text-[#4c669a]">
                              {order.extra}
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-4 font-bold">
                          {order.total}
                        </td>

                        <td className="px-6 py-4">
                          <StatusBadge status={order.status} />
                        </td>

                        <td className="px-6 py-4 text-right">
                          {order.status === "Pending" ? (
                            <button
                              onClick={() =>
                                handleViewOrder(order)
                              }
                              className="text-slate-400 transition hover:text-primary"
                              title="View order"
                            >
                              <Icon className="text-[20px]">
                                visibility
                              </Icon>
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                handleReorder(order)
                              }
                              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-primary transition hover:text-blue-700"
                            >
                              <Icon className="text-[16px]">
                                refresh
                              </Icon>

                              Re-order
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between border-t border-[#e7ebf3] bg-[#f6f6f8] px-5 py-3 sm:px-6">
                <span className="text-xs text-[#4c669a]">
                  Showing 3 of 12 orders
                </span>

                <div className="flex gap-2">
                  <button
                    disabled
                    className="flex size-8 items-center justify-center rounded border border-[#e7ebf3] bg-white text-[#4c669a] disabled:opacity-40"
                  >
                    <Icon className="text-[16px]">
                      chevron_left
                    </Icon>
                  </button>

                  <button
                    onClick={() =>
                      window.alert(
                        "Next orders page will be connected to the backend."
                      )
                    }
                    className="flex size-8 items-center justify-center rounded border border-[#e7ebf3] bg-white text-[#4c669a] transition hover:border-primary hover:text-primary"
                  >
                    <Icon className="text-[16px]">
                      chevron_right
                    </Icon>
                  </button>
                </div>
              </div>
            </section>

            {/* Promo */}
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0d121b] to-[#1a2333] p-6 text-white md:p-8">
              <div
                className="absolute right-0 top-0 h-full w-1/3 bg-cover bg-center opacity-20"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_BwOyGbT8jB83T50VBIiy-WtjcZj4nFRnt-Ss9nwjKHaIVaktHirCr6t29oW2lqqLEocMpo6duErBH67iPLpOXlSp1QJinNAKJFVQ1dJlO10HBk85ElMzil7P68fABe-k79msJvYE9dt4t9fdt6PYvbP1VhiXGWiUzwzaPy7nKtqxwajynJdYFqIViPI_7IybrtNIZLwgiVUoTM5TfUsTd3r6Og7Aag6lTSVutMZLVQFciYkeAdEXMQO5cgsef0_c4bJFZxDxbIU")',
                }}
              />

              <div className="relative z-10 max-w-lg">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                  <Icon className="text-[14px] text-primary">
                    new_releases
                  </Icon>

                  <span>New Arrival</span>
                </div>

                <h3 className="mb-2 text-2xl font-bold">
                  Upgrade Your Lab Equipment
                </h3>

                <p className="mb-6 text-slate-300">
                  Discover our latest range of precision
                  analytical balances and high-performance
                  centrifuges designed for accuracy.
                </p>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-blue-600"
                >
                  Explore Catalog
                  <Icon className="text-[18px]">
                    arrow_forward
                  </Icon>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ---------------- Components ---------------- */

function SidebarLink({
  to,
  icon,
  label,
  active = false,
}) {
  return (
    <Link
      to={to}
      className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
        active
          ? "bg-primary text-white"
          : "text-slate-700 hover:bg-[#f6f6f8] hover:text-primary"
      }`}
    >
      <Icon
        className={`text-[22px] ${
          active ? "text-white" : "text-[#4c669a]"
        }`}
      >
        {icon}
      </Icon>

      <p className="text-sm font-medium">{label}</p>
    </Link>
  );
}

function QuickAction({
  icon,
  title,
  description,
  iconClass,
  hoverClass,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="group flex cursor-pointer flex-col justify-between rounded-xl border border-transparent bg-white p-5 text-left shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex size-10 items-center justify-center rounded-lg ${iconClass}`}
        >
          <Icon>{icon}</Icon>
        </div>

        <Icon
          className={`text-[#cbd2df] transition-colors ${hoverClass}`}
        >
          arrow_forward
        </Icon>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">{title}</h3>

        <p className="text-sm text-[#4c669a]">
          {description}
        </p>
      </div>
    </button>
  );
}

function StatusBadge({ status }) {
  const pending = status === "Pending";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-bold ${
        pending
          ? "border-amber-100 bg-amber-50 text-amber-700"
          : "border-green-100 bg-green-50 text-green-700"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          pending ? "bg-amber-500" : "bg-green-500"
        }`}
      />

      {status}
    </span>
  );
}

export default Dashboard;