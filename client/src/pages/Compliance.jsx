import React from "react";
import heroBg from "../assets/hero-img.webp";
import bgbanner from "../assets/bgbanner2.webp";
import cgmp from "../assets/cgmp.webp";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
function Compliance() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${bgbanner})`,
          height: "50vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center text-center text-white"
          style={{
            background: "rgba(0,0,0,0.65)",
            width: "100%",
            height: "100%",
          }}
        >
          <div>
            <h1 className="fw-bold display-4">Manufacturing</h1>
          </div>
        </div>
      </section>
      <div className="container py-5">
        <p className="text-dark fs-7">
          <i className="bi bi-house-fill text-success me-2"></i>

          <Link to="/" className="text-decoration-none text-dark">
            Home
          </Link>

          <span className="mx-2">/</span>

          <span className="text-success">cGMP Compliance</span>
        </p>
      </div>
      <div className="container pb-5">
        <div className="row g-5 align-items-start">
          {/* IMAGE */}
          <div className="col-lg-6">
            <img src={cgmp} alt="cGMP" className="img-fluid shadow" />
          </div>

          {/* CONTENT */}
          <div className="col-lg-6">
            <h2 className=" fs-2 text-danger mb-4" style={{ lineHeight: "1" }}>
              cGMP Compliance
            </h2>

            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              At Nutrinoven Nutrition, we strictly follow current Good
              Manufacturing Practices (cGMP) to maintain the highest standards
              of safety, hygiene, and product quality. Our manufacturing
              processes are carefully monitored at every stage to ensure
              consistency and compliance with regulatory requirements.
            </p>

            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              We maintain clean production environments, modern equipment, and
              controlled procedures to minimize risks and ensure product
              integrity. Our team is trained to follow strict operational and
              quality protocols in line with international manufacturing
              standards. Regular inspections, quality checks, and process
              validations help us maintain excellence in every batch we produce.
              Through our commitment to cGMP compliance, we ensure safe,
              reliable, and trusted nutrition products for families and
              consumers worldwide.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Compliance;
