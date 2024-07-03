import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./Portal";
import { useEffect, useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [lastPart, setLastPart] = useState("");

  useEffect(() => {
    const url = location.pathname;
    const part = url.substring(url.lastIndexOf("/") + 1);
    setLastPart(part);
  }, [location]);

  return (
    <>
      <Navbar
        className={lastPart === "order" ? "fixed bg-slate-950" : "absolute"}
      />
      <main className="relative bg-slate-950 text-slate-100">
        <Outlet />
      </main>
      <Footer className={lastPart === "order" ? "hidden" : ""} />
    </>
  );
};

export default Layout;
