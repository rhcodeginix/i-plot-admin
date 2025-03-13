import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { Navbar } from "../components/Navbar";
import ScrollToTop from "../components/common/scrollToTop";

export const Layout = () => {
  const location = useLocation();
  if (!location?.pathname.startsWith("/job")) {
    localStorage.removeItem("filter");
  }
  return (
    <div className="flex flex-col flex-grow">
      <ScrollToTop />
      <Navbar />
      <main className="">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
