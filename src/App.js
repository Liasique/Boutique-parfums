import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Accueil from "./site/pages/Accueil";
// import Produits from "./site/pages/ProduitsCard";
import Contact from "./site/pages/Contact";
import EspaceClient from "./site/pages/EspaceClient";
import SiteLayout from "./layout/SiteLayout";
import FormLogin from "./site/pages/espaceClient/FormLogin";
import FormRegister from "./site/pages/espaceClient/FormRegister";
import AdminLayout from "./layout/AdminLayout";
// import AddProducts from "./admin/AddProducts";
import ProduitsCard from "./site/pages/ProduitsCard";
import DetailsProduit from "./site/pages/DetailsProduit";
import AdminDashboard from "./admin/AdminDashboard";
import { Component } from "react";
import UserLayout from "./layout/UserLayout";
import UserCommands from "./user/UserCommands";
const PrivateAdminRoute = ({ element: Component }) => {
  //codequivasetreexucuteavantd'affichagedemapage-ilverifieravant
  // return localStorage.getItem("user")?<Component/>:<Navigate to="/";

  // localStorage.getItem("user");-pour verifier si user in Local Storage

  const isAuth =
    localStorage.getItem("user") != null &&
    JSON.parse(localStorage.getItem("user")).role === "ADMIN";
  return isAuth ? <Component /> : <Navigate to="/espace-client" />;
};

const PrivateUserRoute = ({ element: Component }) => {
  const isAuth =
    localStorage.getItem("user") != null &&
    JSON.parse(localStorage.getItem("user")).role === "USER";
  return isAuth ? <Component /> : <Navigate to="/espace-client" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Accueil />} />
          <Route path="/produits" element={<ProduitsCard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/espace-client" element={<EspaceClient />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/details/:id" element={<DetailsProduit />} />

          <Route path="/commande" element={<UserCommands />} />
        </Route>

        <Route
          path="/admin"
          element={<PrivateAdminRoute element={AdminLayout} />}
        >
          <Route index element={<AdminDashboard />} />

          {/* <Route index element={<AddProducts />} /> */}
          {/* <Route path="/produits" element={<Produits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/espace-client" element={<EspaceClient />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/register" element={<FormRegister />} /> */}
        </Route>
        <Route path="/user" element={<PrivateUserRoute element={UserLayout} />}>
          <Route index element={<UserCommands />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
