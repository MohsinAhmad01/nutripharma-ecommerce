import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import "../style/Navbar.css";

import { toast } from "react-toastify";
const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    try {
      const resp = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/products`);

      const products = resp.data.products || [];

      const foundProduct = products.find((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );

      if (foundProduct) {
        navigate(`/products/${foundProduct._id}`);
        setSearch("");
      } else {
        toast.error("Product not found");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occurred while searching for product");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm ">
      <div className="container-fluid d-flex align-items-center justify-content-between ">
        {/* LOGO */}
        <Link className="navbar-brand m-0" to="/">
          <img src={logo || null} alt="Logo" style={{ height: "65px" }} />
        </Link>

        {/* TOGGLE BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVBAR CONTENT */}
        <div
          className="collapse navbar-collapse justify-content-between align-items-center"
          id="navbarContent"
        >
          {/* NAV LINKS */}
          <ul className="navbar-nav mx-auto mt-4 mb-lg-0 gap-lg-1 align-items-lg-center">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fw-semibold"
                role="button"
                data-bs-toggle="dropdown"
                style={{ fontSize: "14px" }}
              >
                Nutrinoven Group
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/manufacturing/chairman-message"
                  >
                    Chairman Message
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/manufacturing/vision-and-mission"
                  >
                    Vision And Mission
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/manufacturing/business-scope"
                  >
                    Business Scope
                  </Link>
                </li>
              </ul>
            </li>
            {/* Manufacturing */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fw-semibold"
                role="button"
                data-bs-toggle="dropdown"
                style={{ fontSize: "14px" }}
              >
                Manufacturing
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/manufacturing/our-facilities"
                  >
                    Our Facilities
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/manufacturing/cgmp-compliance"
                  >
                    Cgmp Compliance
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/manufacturing/quality-operations"
                  >
                    Quality Opertions
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/manufacturing/quality-policy"
                  >
                    Our Quality Policy
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fw-semibold"
                role="button"
                data-bs-toggle="dropdown"
                style={{ fontSize: "14px" }}
              >
                Commercial Excellence
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/manufacturing/Team">
                    Our Team
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/manufacturing/distribution-network"
                  >
                    Distribution Network
                  </Link>
                </li>
              </ul>
            </li>
            {/* Products */}
            <li className="nav-item dropdown">
              <div className="d-flex align-items-center ">
                <Link
                  className="nav-link fw-semibold"
                  to="/products"
                  style={{ fontSize: "14px" }}
                >
                  Products
                </Link>
                <span className=" p-0" style={{ cursor: "pointer" }}></span>
              </div>
            </li>

            {/* International Division */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fw-semibold"
                role="button"
                data-bs-toggle="dropdown"
                style={{ fontSize: "14px" }}
              >
                International Division
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/international/Our-Strength"
                  >
                    Our Strength
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fw-semibold"
                role="button"
                data-bs-toggle="dropdown"
                style={{ fontSize: "14px" }}
              >
                Human Resources
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/international/training-development"
                  >
                    training and Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/international/opportunities-and-openings"
                  >
                    opportunities and <br /> openings
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/international/recruitment-alert"
                  >
                    Recruitment fradulent <br /> Alert
                  </Link>
                </li>
              </ul>
            </li>
            {/* Contact */}
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                style={{ fontSize: "14px" }}
                to="/contact"
              >
                Contact
              </Link>
            </li>

            <Link to="/cart" className="btn btn-danger m-2" type="submit">
              <i
                className="bi bi-cart-check "
                style={{ fontSize: "17  px" }}
              ></i>
            </Link>
          </ul>

          {/* SEARCH BAR */}
          <form
            className="d-flex align-items-center mt-4 gap-0"
            onSubmit={handleSearch}
          >
            <input
              className="form-control border-2 border-bottom rounded-3"
              type="search"
              placeholder="Search ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "120px" }}
            />

            <button
              className="btn btn-danger "
              style={{ marginleft: "-5px" }}
              type="submit"
            >
              <i className="bi bi-search " style={{ fontSize: "14px" }}></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
