"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// header & footer
import HeaderDefault from "@/components/partials/HeaderDefault";
import FooterDefault from "@/components/partials/FooterDefault";

// breadcrumb
import BreadCrumbWidget from "@/components/BreadcrumbWidget";

// settings & helpers
import SettingOffCanvas from "@/components/setting/SettingOffCanvas";
import MobileFooter from "@/components/partials/MobileFooter";
import Back_To_Top from "@/components/Back_To_Top";
import Loader from "@/components/Loader";

interface FrontendProps {
  // children should be lazy-loaded components for Suspense to work
  children: React.ReactNode;
}

const Frontend: React.FC<FrontendProps> = ({ children }) => {
  const [animationClass, setAnimationClass] = useState("animate__fadeIn");
  // show/hide global route/initial loader
  const [showLoader, setShowLoader] = useState(true);

  // Scroll to top button logic
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 250) {
      setAnimationClass("animate__fadeIn");
    } else {
      setAnimationClass("animate__fadeOut");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // hide the global loader after a short delay on initial mount
  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 800);
    return () => clearTimeout(t);
  }, []);

  // show loader briefly on route changes (Next.js App Router)
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    setShowLoader(true);
    const t = setTimeout(() => setShowLoader(false), 600);
    return () => clearTimeout(t);
  }, [pathname]);

  // Wrap children in Suspense only if they are lazy-loaded
  // If children are not lazy, Loader will never show (expected behavior)
  return (
    <>
      {showLoader && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.9)",
            zIndex: 2000,
          }}
        >
          <Loader />
        </div>
      )}
      <main className="main-content">
        <HeaderDefault />
        <BreadCrumbWidget />

        {/* Suspense fallback loader for async/lazy children */}
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>

      <FooterDefault />

      {/* Back to top button */}
      <div
        id="back-to-top"
        style={{ display: "none" }}
        className={`animate__animated ${animationClass}`}
        onClick={scrollToTop}
      >
        <Link
          className="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle"
          id="top" id="top"
          href="#top"
        >
          <i className="fa-solid fa-chevron-up"></i> 
        </Link>
      </div>

      <SettingOffCanvas />
      <MobileFooter />
      <Back_To_Top /> 
    </>
  );
};

export default Frontend;