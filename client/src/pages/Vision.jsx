import React from "react";
import heroBg from "../assets/hero-img.webp";
import contactbg from "../assets/contactbg.webp";
import { Link } from "react-router-dom";
import vision from "../assets/vision.webp";
import mission from "../assets/mission.webp";
import Footer from "../Components/Footer";
function Vision() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${contactbg})`,
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
            <h1 className="fw-bold display-4">Vision and Mission</h1>
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

          <span className="text-success">Vision and Mission</span>
        </p>
      </div>
      <div className="container pb-5">
        <div className="row align-items-center g-5">
          {/* LEFT SIDE TEXT BOX */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div
              className="bg-white shadow p-4 p-lg-5 h-100"
              style={{ borderRadius: "10px" }}
            >
              <h3
                className="fs-1 text-danger text-center mb-4"
                style={{ lineHeight: "1" }}
              >
                Vision
              </h3>

              <p
                className="text-secondary"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.7",
                }}
              >
                To become a globally trusted nutrition company recognized for
                excellence, innovation, and quality in infant and family
                nutrition. We aim to improve lives by providing safe,
                affordable, and scientifically balanced nutritional products.
                Our vision is to build healthier generations through responsible
                manufacturing and continuous advancement. We strive to create
                lasting value for families, healthcare professionals, and
                business partners worldwide.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-6   order-1 order-lg-2 text-center">
            <img
              src={vision}
              alt="vision"
              className="img-fluid shadow"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row align-items-center g-5">
          {/* LEFT SIDE TEXT BOX */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div
              className="bg-white shadow p-4 p-lg-5 h-100"
              style={{ borderRadius: "10px" }}
            >
              <h3
                className="fs-1 text-danger text-center mb-4"
                style={{ lineHeight: "1" }}
              >
                MISSION
              </h3>

              <p
                className="text-secondary"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.5",
                }}
              >
                Our mission is to deliver premium quality nutrition products
                that meet international safety and quality standards. We are
                committed to innovation, customer trust, and sustainable growth
                through advanced manufacturing practices. By focusing on care,
                integrity, and continuous improvement, we aim to support
                healthier lifestyles for communities everywhere. We also strive
                to make quality nutrition accessible and reliable for every
                family.
              </p>
              
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-6 order-2 order-lg-1 text-center">
            <img
              src={mission}
              alt="mission"
              className="img-fluid shadow"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vision;
