import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./protected/ProtectedRoute";
import MalkhaniLoading from "./Malkhaniloading";
import Login from "./component/auth/Login";

// =========================
// Layouts
// =========================
const UserLayout = lazy(() => import("./Layout/User/UserLayout"));
const AdminLayout = lazy(() => import("./Layout/Admin/AdminLayout"));

// =========================
// User Pages
// =========================
const Homepage = lazy(() => import("./pages/page/Homepage"));
const SingupPage = lazy(() => import("./pages/page/SingupPage"));
const ProductDetail = lazy(() =>
  import("./pages/page/ProductDetail/ProductDetail")
);
const Cart = lazy(() => import("./component/cart/Cart"));
const Wishpage = lazy(() => import("./pages/userPages/Wishpage"));
const ShopPage = lazy(() => import("./pages/page/shop/ShopPage"));
const AboutPage = lazy(() => import("./pages/page/About/AboutPage"));
const UserDetail = lazy(() => import("./component/UserProfile/UserDetail"));
const NotFoundPage = lazy(() =>
  import("./pages/page/NotFound/NotFoundPage")
);

// =========================
// Admin Pages
// =========================
const AddProduct = lazy(() =>
  import("./pages/adminPages/pages/Addproduct")
);

const CheckProduct = lazy(() =>
  import("./pages/adminPages/pages/CheckProduct")
);

const CheckUser = lazy(() =>
  import("./pages/adminPages/pages/CheckUser")
);

const Makeadmin = lazy(() =>
  import("./pages/adminPages/pages/Makeadmin")
);

const Removeadmin = lazy(() =>
  import("./pages/adminPages/pages/Removeadmin")
);



// =========================
// Router
// =========================
const router = createBrowserRouter([
  // =========================
  // USER
  // =========================
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },

      {
        path: "shop",
        element: <ShopPage />,
      },

      {
        path: "signup",
        element: <SingupPage />,
      },

      {
        path: "login",
        element: <Login />,
      },


      {
        path: "productDetail/:id",
        element: <ProductDetail />,
      },

      {
        path: "about",
        element: <AboutPage />,
      },

      {

        element: <ProtectedRoute />,
        children: [
          {
            path: "cart",
            element: <Cart />,
          },

          {
            path: "wishlist",
            element: <Wishpage />,
          },

          {
            path: "profile",
            element: <UserDetail />,
          },

          {
            path: "userdetail",
            element: <UserDetail />,
          },
        ]
      }

      // USER

    ],
  },

  // =========================
  // ADMIN
  // =========================
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <CheckProduct />,
      },

      {
        path: "add/product",
        element: <AddProduct />,
      },

      {
        path: "admin-product",
        element: <CheckProduct />,
      },

      {
        path: "checkuser",
        element: <CheckUser />,
      },

      {
        path: "makeadmin",
        element: <Makeadmin />,
      },

      {
        path: "removeadmin",
        element: <Removeadmin />,
      },
    ],
  },

  // =========================
  // 404
  // =========================
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

// =========================
// App
// =========================
const App = () => {
  return (
    <Suspense fallback={<MalkhaniLoading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App; 