import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Product } from "./pages/Product";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global";

const Layout = () => {
  return (
    <div className="app">
      <GlobalStyle />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
