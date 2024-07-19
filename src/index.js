import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import EspaceClient from "./site/pages/EspaceClient";
import Produits from "./site/pages/ProduitsCard";
import AddProduct from "./admin/AddProducts";
import { Outlet } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import SiteLayout from "./layout/SiteLayout";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <EspaceClient /> */}
    {/* <Produits /> */}
    {/* <AddProduct /> */}
    {/* <AdminLayout /> */}
    {/* </React.StrictMode> */}
  </React.StrictMode>
);

reportWebVitals();
