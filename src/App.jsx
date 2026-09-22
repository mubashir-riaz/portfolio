import React, { useState, useEffect } from "react";
import Portfolio from "../Portfolio.jsx";
import Work from "./Work.jsx";

export default function App() {
  const [pathname, setPathname] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  if (pathname.startsWith("/work")) {
    return <Work />;
  }

  return <Portfolio />;
}

