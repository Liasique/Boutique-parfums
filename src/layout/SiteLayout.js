import React from "react";
import { Outlet } from "react-router-dom";
import HeaderSite from "./HeaderSite";
import FooterSite from "./FooterSite";
const SiteLayout = () => {
  return (
    <>
      <header>
        <HeaderSite />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterSite />
      </footer>
    </>
  );
};

export default SiteLayout;
