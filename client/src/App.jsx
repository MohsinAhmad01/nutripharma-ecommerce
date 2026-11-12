import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Hero";
import ScrollToTop from "./ScrollToTop";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import ProductDetails from "./pages/ProductDetails";
import Chairman from "./pages/Chairman";
import Vision from "./pages/Vision";
import Business from "./pages/Business";
import Facilites from "./pages/Facilites";
import Compliance from "./pages/Compliance";
import QualityOperation from "./pages/QualityOperation";
import QualityPolicy from "./pages/QualityPolicy";
import Team from "./pages/Team";
import DistributionNetwork from "./pages/DistributionNetwork";
import OurStrength from "./pages/OurStrength";
import TrainingDevelop from "./pages/TrainingDevelop";
import Oportunities from "./pages/Oportunities";
import RecruitmentAlert from "./pages/RecruitmentAlert";
import Contact from "./Components/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Navbar />
 <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />


        <Route path="/cart" element={<Cart />} />


        <Route
          path="/manufacturing/chairman-message"
          element={<Chairman />}
        />

        <Route
          path="/manufacturing/vision-and-mission"
          element={<Vision />}
        />

        <Route
          path="/manufacturing/business-scope"
          element={<Business />}
        />
        <Route
          path="/manufacturing/our-facilities"
          element={<Facilites />}
        />

        <Route
          path="/manufacturing/cgmp-compliance"
          element={<Compliance />}
        />

        <Route
          path="/manufacturing/quality-operations"
          element={<QualityOperation />}
        />

        <Route
          path="/manufacturing/quality-policy"
          element={<QualityPolicy />}
        />

        <Route
          path="/manufacturing/team"
          element={<Team />}
        />

        <Route
          path="/manufacturing/distribution-network"
          element={<DistributionNetwork />}
        />

        <Route
          path="/international/our-strength"
          element={<OurStrength />}
        />

        <Route
          path="/international/training-development"
          element={<TrainingDevelop />}
        />

        <Route
          path="/international/opportunities-and-openings"
          element={<Oportunities />}
        />

        <Route
          path="/international/recruitment-alert"
          element={<RecruitmentAlert />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
         <ToastContainer />
    </>
  );
}

export default App;