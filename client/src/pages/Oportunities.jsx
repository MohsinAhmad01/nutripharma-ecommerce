import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-img.webp";
import product from "../assets/4-4.webp";
import bgtraining from "../assets/bgtraining.webp";
import Footer from "../Components/Footer";
function Oportunities() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${bgtraining})`,
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
            <h1 className="fw-bold display-4">OPPORTUNITIES AND OPENINGS</h1>
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

          <span className="text-success">Opportunities And Openings</span>
        </p>
      </div>
      <div className="container">
        <p className="fs-6">
          Nutrinoven Nutrition offers exciting career opportunities for talented
          and motivated individuals who are passionate about growth and
          excellence. We welcome professionals from diverse backgrounds to join
          our team and contribute to our mission of delivering quality nutrition
          products.
        </p>
        <p className="fs-6">
          Our work environment encourages innovation, teamwork, and professional
          development. We provide equal opportunities for learning, career
          advancement, and long-term success. Interested candidates can explore
          available openings and become part of a company committed to quality,
          integrity, and progress.
        </p>
        <h2 className="fw-bold text-danger">DROP YOUR CV</h2>
        <p className="fs-6">
          If you are interested in joining our team, please send your CV to{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nutrinovennutrition@gmail.com&su=Inquiry&body=Hello Nutrinoven Nutrition,"
            target="_blank"
            rel="noopener noreferrer"
          >
            nutrinovennutrition@gmail.com
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Oportunities;
