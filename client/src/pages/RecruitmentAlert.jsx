import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-img.webp";
import product from "../assets/4-4.webp";
import bgtraining from "../assets/bgtraining.webp";
import Footer from "../Components/Footer";
function RecruitmentAlert() {
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

          <span className="text-success">Recruitment Fraudulent Alert</span>
        </p>
      </div>
      <div className="container">
        <h1 className="fw-bold text-danger">Recruitment Fraudulent Alert</h1>
        <p className="fs-5 fw-bold">
          Be aware of scams involving fake job postings.
        </p>
        <p className="fs-6">
          Nutrinoven Nutrition is committed to maintaining a transparent and
          professional recruitment process. We would like to inform all
          applicants that the company never requests payment, fees, or financial
          information during recruitment or hiring procedures. Any job offer
          received from unauthorized individuals claiming to represent
          Nutrinoven Nutrition should be treated with caution. Applicants are
          advised to verify all recruitment communications through our official
          contact channels only.
        </p>
        <h2 className="fw-bold fs-5 ">
          Does Nutrinoven Nutrition charge any fee for job applications or
          interviews?
        </h2>
        <p className="fs-6">
          No. Nutrinoven Nutrition never asks candidates to pay any fee at any
          stage of the recruitment process.
        </p>
        <h2 className="fw-bold fs-5 ">
          How can I confirm if a job offer is genuine?
        </h2>
        <p>
          You can verify recruitment information through our official email
          addresses, website, or authorized HR department.
        </p>
        <h2 className="fw-bold fs-5 ">
          What should I do if I receive a suspicious recruitment message?
        </h2>
        <p>
          Please avoid sharing personal or financial information and immediately
          report the matter to our official HR team for verification.
        </p>

        <p>
          We encourage all candidates to remain alert and apply only through
          official company channels.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default RecruitmentAlert;
