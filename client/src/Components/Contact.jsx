import React from "react";
import { Link } from "react-router-dom";
import contactbg from "../assets/contactbg.webp";
import product from "../assets/4-4.webp";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: `url(${contactbg})`,
          minHeight: "50vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center text-center text-white px-3"
          style={{
            background: "rgba(0,0,0,0.65)",
            width: "100%",
            minHeight: "50vh",
          }}
        >
          <div className="container">
            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(2rem, 6vw, 4rem)",
              }}
            >
              CONTACT US
            </h1>

            <p
              className="fw-medium mx-auto"
              style={{
                maxWidth: "750px",
                fontSize: "clamp(14px, 2vw, 18px)",
                lineHeight: "1.8",
              }}
            >
              We are committed to providing premium nutrition solutions for
              infants with trust, care, and quality.
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="container py-3 py-md-4">
        <p
          className="text-dark mb-0 d-flex align-items-center flex-wrap"
          style={{ fontSize: "14px" }}
        >
          <i className="bi bi-house-fill text-success me-2"></i>

          <Link
            to="/"
            className="text-decoration-none text-dark fw-semibold"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <span className="text-success fw-semibold">Contact Us</span>
        </p>
      </div>

      {/* CONTACT SECTION */}
      <section className="pb-4 pb-md-5">
        <div className="container">
          <div
            className="row align-items-center g-4 g-lg-5 p-3 p-md-4 p-lg-5 rounded-4 rounded-lg-5 shadow-lg overflow-hidden"
            style={{
              background:
                "linear-gradient(to right, #f8fffb, #eef9ff, #ffffff)",
            }}
          >
            {/* LEFT CONTENT */}
            <div className="col-12 col-lg-7 order-2 order-lg-1">
              <span className="badge bg-success px-3 py-2 mb-3">
                Nutrinoven Nutrition
              </span>

              <h2
                className="fw-bold mb-3 mb-lg-4"
                style={{
                  fontSize: "clamp(28px, 5vw, 42px)",
                  lineHeight: "1.2",
                  color: "#0d2d62",
                }}
              >
                Get In Touch With Us
              </h2>

              <p
                className="text-secondary mb-4"
                style={{
                  fontSize: "clamp(14px, 2vw, 17px)",
                  lineHeight: "1.8",
                }}
              >
                Nutrinoven Nutrition is dedicated to providing safe, healthy,
                and premium baby nutrition products. Feel free to contact us
                for product information, partnerships, or general inquiries.
              </p>

              {/* CONTACT INFO */}
              <div className="row g-3 g-md-4">
                {/* FACTORY ADDRESS */}
                <div className="col-12 col-md-6">
                  <div
                    className="p-3 p-md-4 rounded-4 h-100 shadow-sm"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="d-flex align-items-start">
                      <div
                        className="me-3 d-flex justify-content-center align-items-center rounded-circle flex-shrink-0"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#e8f7ee",
                        }}
                      >
                        <i className="bi bi-geo-alt-fill text-success fs-5"></i>
                      </div>

                      <div>
                        <h5 className="fw-bold mb-2 fs-6">
                          Factory Address
                        </h5>

                        <p
                          className="text-secondary mb-0"
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.7",
                          }}
                        >
                          Plot 101, B A4 Road,
                          <br />
                          Industrial Estate Hayatabad,
                          <br />
                          Peshawar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HEAD OFFICE */}
                <div className="col-12 col-md-6">
                  <div
                    className="p-3 p-md-4 rounded-4 h-100 shadow-sm"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="d-flex align-items-start">
                      <div
                        className="me-3 d-flex justify-content-center align-items-center rounded-circle flex-shrink-0"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#eef4ff",
                        }}
                      >
                        <i className="bi bi-building text-primary fs-5"></i>
                      </div>

                      <div>
                        <h5 className="fw-bold mb-2 fs-6">Head Office</h5>

                        <p
                          className="text-secondary mb-0"
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.7",
                          }}
                        >
                          Sector 25, Korangi Industrial Area,
                          <br />
                          Karachi, Pakistan - 74900
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PHONE */}
                <div className="col-12 col-md-6">
                  <div
                    className="p-3 p-md-4 rounded-4 h-100 shadow-sm"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="d-flex align-items-start">
                      <div
                        className="me-3 d-flex justify-content-center align-items-center rounded-circle flex-shrink-0"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#fff5e8",
                        }}
                      >
                        <i className="bi bi-telephone-fill text-warning fs-5"></i>
                      </div>

                      <div>
                        <h5 className="fw-bold mb-2 fs-6">Phone Number</h5>

                        <a
                          href="tel:03213133139"
                          className="text-decoration-none text-secondary"
                          style={{ fontSize: "14px" }}
                        >
                          0321 3133139
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="col-12 col-md-6">
                  <div
                    className="p-3 p-md-4 rounded-4 h-100 shadow-sm"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="d-flex align-items-start">
                      <div
                        className="me-3 d-flex justify-content-center align-items-center rounded-circle flex-shrink-0"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#f2ecff",
                        }}
                      >
                        <i className="bi bi-envelope-fill text-danger fs-5"></i>
                      </div>

                      <div className="w-100">
                        <h5 className="fw-bold mb-2 fs-6">Email Address</h5>

                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=nutrinovennutrition@gmail.com&su=Inquiry&body=Hello Nutrinoven Nutrition,"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none text-secondary"
                          style={{
                            fontSize: "13px",
                            wordBreak: "break-word",
                          }}
                        >
                          nutrinovennutrition@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WEBSITE */}
                <div className="col-12">
                  <div
                    className="p-3 p-md-4 rounded-4 shadow-sm"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="d-flex align-items-start">
                      <div
                        className="me-3 d-flex justify-content-center align-items-center rounded-circle flex-shrink-0"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#e8fbff",
                        }}
                      >
                        <i className="bi bi-globe2 text-info fs-5"></i>
                      </div>

                      <div className="w-100">
                        <h5 className="fw-bold mb-2 fs-6">Website</h5>

                        <a
                          href="https://nutrinovennutrition.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none text-secondary"
                          style={{
                            fontSize: "14px",
                            wordBreak: "break-word",
                          }}
                        >
                          www.nutrinovennutrition.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-12 col-lg-5 text-center order-1 order-lg-2">
              <div
                className="position-relative p-3 p-md-4 rounded-4 rounded-lg-5"
                style={{
                  background:
                    "linear-gradient(to bottom right, #ffffff, #eef9ff)",
                }}
              >
                <img
                  src={product}
                  alt="Product"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    width: "100%",
                    maxHeight: "600px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;