import React from "react";
import heroBg from "../assets/hero-img.webp";
import { Link } from "react-router-dom";
import team from "../assets/team.jpeg";
import Footer from "../Components/Footer";
function Team() {
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
            <h1 className="fw-bold display-4">COMMERCIAL EXCELLENCE</h1>
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
          <span className="text-success">Our Team</span>
        </p>
      </div>
      <div className="container pb-5">
        <div className="row g-5 align-items-start">
          {/* IMAGE */}
          <div className="col-lg-6">
            <img src={team} alt="Team" className="img-fluid shadow" />
          </div>

          {/* CONTENT */}
          <div className="col-lg-6">
            <h2 className=" fs-2 text-danger mb-4" style={{ lineHeight: "1" }}>
              Our Team
            </h2>

            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              At Nutrinoven Nutrition, our strength lies in our dedicated and
              experienced team of professionals. Our workforce includes experts
              in nutrition, manufacturing, quality assurance, research, and
              business operations.
            </p>

            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              Together, we work with a shared commitment to innovation,
              excellence, and customer satisfaction. We believe in teamwork,
              integrity, and continuous learning to achieve the highest
              standards in everything we do. Our team’s passion and
              professionalism enable us to deliver trusted products and build
              lasting relationships with customers and partners worldwide.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Team;
