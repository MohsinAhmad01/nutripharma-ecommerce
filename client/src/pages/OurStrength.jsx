import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-img.webp";
import building from "../assets/building.webp";
import Footer from "../Components/Footer";
function OurStrength() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${heroBg})`,
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
            <h1 className="fw-bold display-4">INTERNATIONAL DIVISION</h1>
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

          <span className="text-success">Our Strength</span>
        </p>
      </div>
      <div className="container pb-5">
        <div className="row g-5 align-items-start">
          {/* IMAGE */}
          <div className="col-lg-6">
            <img src={building} alt="Building" className="img-fluid shadow" />
          </div>

          {/* CONTENT */}
          <div className="col-lg-6">
            <h2 className=" fs-1 text-danger mb-4" style={{ lineHeight: "1" }}>
              OUR STRENGTH
            </h2>

            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              Our strength comes from our commitment to quality, innovation, and
              customer trust. We operate with advanced manufacturing facilities
              and strict quality control systems that meet international
              standards. Our carefully selected imported ingredients and
              professional production processes ensure premium nutrition and
              product reliability. With a skilled team, strong research focus,
              and customer-centered approach, we continuously improve our
              products and services.
            </p>
            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              Our ability to provide both branded and contract manufacturing
              solutions gives us flexibility and strong market presence. We
              believe in long-term partnerships, sustainable growth, and
              delivering value through excellence and integrity. These strengths
              allow Nutrinoven Nutrition to compete confidently in local and
              international markets while building trust with families and
              business partners.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurStrength;
