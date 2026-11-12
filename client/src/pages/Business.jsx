import React from "react";
import heroBg from "../assets/hero-img.webp";
import bgbanner from "../assets/bgbanner.webp";
import { Link } from "react-router-dom";
import bgbusiness from "../assets/bgbusiness.webp";

import Footer from "../Components/Footer";
import bulbbg from "../assets/bulb.webp";
function Business() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${bgbusiness})`,
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
            <h1 className="fw-bold display-4">Chairman Message</h1>
          </div>
        </div>
      </section>

      <div
        style={{
          backgroundImage: `url(${bulbbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "120vh",
          width: "100%",
          position: "relative",
        }}
      >
        {/* DARK OVERLAY */}
        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            width: "100%",
            minHeight: "120vh",
          }}
        >
          {/* BREADCRUMB */}
          <div className="container py-5">
            <p className="text-dark fs-7">
              <i className="bi bi-house-fill me-2 text-success"></i>

              <Link to="/" className="text-decoration-none text-white">
                Home
              </Link>

              <span className="mx-2 fw-bold text-white">/</span>

              <span className="text-success fw-bold">Business Scope</span>
            </p>
          </div>

          {/* CONTENT */}
          <div className="container pb-5">
            <div className="row g-5 align-items-start">
              <div className="col-lg-6 order-2 order-lg-1">
                <h2
                  className="fs-1 text-danger mb-4"
                  style={{ lineHeight: "1" }}
                >
                  Business Scope
                </h2>

                <p
                  className="text-white"
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.7",
                  }}
                >
                  Nutrinoven Nutrition (Pvt.) Ltd. specializes in the
                  manufacturing, development, and distribution of high-quality
                  nutrition and food products. Our company operates with modern
                  production facilities and strict quality assurance systems to
                  ensure international standards.
                </p>

                <p
                  className="text-white"
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.7",
                  }}
                >
                  We manufacture infant formula, nutritional products, and
                  specialized food solutions under our own premium brands,
                  including Bobi Mamma®. In addition to our branded products, we
                  provide contract manufacturing and private label manufacturing
                  services for registered companies and business partners. Our
                  services include customized product development, packaging
                  solutions, and professional manufacturing support.
                </p>

                <p
                  className="text-white"
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.7",
                  }}
                >
                  We serve both local and international markets through reliable
                  supply chain management and customer-focused operations. Our
                  business is driven by innovation, advanced technology, and a
                  commitment to excellence in nutrition and healthcare
                  industries.
                </p>

                <p
                  className="text-white"
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.7",
                  }}
                >
                  Through strong partnerships and sustainable practices, we
                  continue expanding our presence in global markets while
                  maintaining quality, trust, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Business;
