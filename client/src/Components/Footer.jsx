import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/footerlogo1.png";
import bgbanner1 from "../assets/bgbanner2.webp";
function Footer() {
  const aboutLinks = [
    {
      name: "Chairman Message",
      path: "/manufacturing/chairman-message",
    },
    {
      name: "Vision And Mission",
      path: "/manufacturing/vision-and-mission",
    },
    {
      name: "Business Scope",
      path: "/manufacturing/business-scope",
    },
  ];

  const manufacturingLinks = [
    {
      name: "Our Facilities",
      path: "/manufacturing/our-facilities",
    },
    {
      name: "cGMP Compliance",
      path: "/manufacturing/cgmp-compliance",
    },
    {
      name: "Quality Operations",
      path: "/manufacturing/quality-operations",
    },
    {
      name: "Our Quality Policy",
      path: "/manufacturing/quality-policy",
    },
  ];

  const hrLinks = [
    {
      name: "Recruitment Fraudulent Alert",
      path: "/international/recruitment-alert",
    },
    {
      name: "Training and Development",
      path: "/international/training-development",
    },
    {
      name: "Opportunities And Openings",
      path: "/international/opportunities-and-openings",
    },
  ];

  const footerLinkStyle = {
    color: "rgba(255,255,255,0.75)",
    textDecoration: "none",
    fontSize: "14px",
    marginBottom: "14px",
    display: "block",
    transition: "0.3s ease",
    fontWeight: "400",
  };

  return (
    <footer
      className="position-relative text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgbanner1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.88), rgba(10,20,35,0.92))",
        }}
      >
        <div className="container py-5">
          {/* TOP SECTION */}
          <div className="row gy-5">
            {/* LEFT */}
            <div className="col-lg-4 col-md-12">
              <img
                src={logo}
                alt="logo"
                className="img-fluid mb-4"
                style={{
                  maxWidth: "180px",
                }}
              />

              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: "1.9",
                  fontSize: "15px",
                  maxWidth: "350px",
                }}
              >
                Nutrinoven Nutrition is committed to delivering premium
                nutrition and healthcare products with world-class quality,
                innovation, and trust for a healthier future.
              </p>

              {/* SOCIALS */}
              <div className="d-flex align-items-center gap-3 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61589536372233"
                  target="_blank"
                  className="text-white"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    transition: "0.3s",
                  }}
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  href="https://www.tiktok.com/@nutrinoven_nutrition"
                  target="_blank"
                  className="text-white"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    transition: "0.3s",
                  }}
                >
                  <i className="bi bi-tiktok"></i>
                </a>
              </div>
            </div>

            {/* ABOUT */}
            <div className="col-lg-2 col-md-4 col-6">
              <h5
                className="fw-bold mb-4"
                style={{
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
              >
                ABOUT
              </h5>

              {aboutLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  style={footerLinkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#4cb3c7";
                    e.target.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "rgba(255,255,255,0.75)";
                    e.target.style.transform = "translateX(0px)";
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* MANUFACTURING */}
            <div className="col-lg-3 col-md-4 col-6">
              <h5
                className="fw-bold mb-4"
                style={{
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
              >
                MANUFACTURING
              </h5>

              {manufacturingLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  style={footerLinkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#4cb3c7";
                    e.target.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "rgba(255,255,255,0.75)";
                    e.target.style.transform = "translateX(0px)";
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* HR */}
            <div className="col-lg-3 col-md-4 col-12">
              <h5
                className="fw-bold mb-4"
                style={{
                  fontSize: "16px",
                  letterSpacing: "1px",
                }}
              >
                HUMAN RESOURCE
              </h5>

              {hrLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  style={footerLinkStyle}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#4cb3c7";
                    e.target.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "rgba(255,255,255,0.75)";
                    e.target.style.transform = "translateX(0px)";
                  }}
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-4">
                <Link
                  to="/products"
                  className="btn text-white px-4 py-2"
                  style={{
                    background: "linear-gradient(135deg, #4cb3c7, #0d6efd)",
                    borderRadius: "40px",
                    border: "none",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <hr
            className="my-5"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
            }}
          />

          {/* BOTTOM */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p
              className="mb-0"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "14px",
              }}
            >
              © 2026 Nutrinoven Nutrition. All Rights Reserved.
            </p>

            <div className="d-flex gap-4">
              <Link
                to="/contact"
                className="text-decoration-none"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                }}
              >
                Contact
              </Link>

              <Link
                to="/products"
                className="text-decoration-none"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                }}
              >
                Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;