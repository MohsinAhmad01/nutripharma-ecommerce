import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-img.webp";
import bgtraining from "../assets/bgtraining.webp";
import training from "../assets/training.webp";
import Footer from "../Components/Footer";
function TrainingDevelop() {
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
            <h1 className="fw-bold display-4">HUMAN RESOURCE</h1>
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

          <span className="text-success">Training And Development</span>
        </p>
      </div>
      <div className="container pb-5">
        <div className="row g-5 align-items-start">
          {/* IMAGE */}

          {/* CONTENT */}
          <div className="col-lg-6">
            <h2 className=" fs-1 text-danger mb-4" style={{ lineHeight: "1" }}>
              Training and Development
            </h2>

            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              At Nutrinoven Nutrition, we believe that continuous learning is
              essential for growth and excellence. We provide regular training
              and development programs to enhance the skills, knowledge, and
              professional capabilities of our employees. Our training focuses
              on quality standards, manufacturing practices, workplace safety,
              leadership, and innovation.
            </p>
            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              By investing in employee development, we ensure high performance,
              operational efficiency, and continuous improvement across all
              departments. We encourage a culture of teamwork, responsibility,
              and professional advancement to help our employees grow with the
              company. Through learning and development initiatives, we aim to
              build a motivated workforce capable of meeting global industry
              standards and future challenges with confidence.{" "}
            </p>
          </div>
          <div className="col-lg-6">
            <img src={training} alt="Training" className="img-fluid shadow" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TrainingDevelop;
