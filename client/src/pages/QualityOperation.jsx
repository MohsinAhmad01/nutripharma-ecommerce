import React from "react";
import heroBg from "../assets/hero-img.webp";
import bgbanner from "../assets/bgbanner2.webp";
import qualityoperations from "../assets/qualityoperations.png";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
function QualityOperation() {
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
            <h1 className="fw-bold display-4">Quality Operations</h1>
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

          <span className="text-success">Quality Operations</span>
        </p>
      </div>
      <div className="container pb-5">
        <div className="row g-5 align-items-start">
          {/* IMAGE */}
          <div className="col-lg-6">
            <img src={qualityoperations} alt="Quality Operations" className="img-fluid shadow" />
          </div>

          {/* CONTENT */}
          <div className="col-lg-6">
            <h2
              className=" fs-2 text-danger text-center mb-4"
              style={{ lineHeight: "1" }}
            >
              Quality Operations
            </h2>

            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              Quality is the foundation of every operation at Nutrinoven
              Nutrition. From raw material selection to final packaging, each
              stage undergoes strict quality inspection and professional
              supervision. We use advanced testing procedures and quality
              control systems to ensure product safety, purity, and nutritional
              value.
            </p>

            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              Our operations are designed to meet international standards and
              maintain consistency across all products. Continuous monitoring,
              documentation, and process improvement help us deliver reliable
              products to our customers. Through dedicated quality operations,
              we ensure that every product reflects our commitment to
              excellence, trust, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default QualityOperation;
