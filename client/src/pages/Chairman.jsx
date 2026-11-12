import React from "react";
import heroBg from "../assets/hero-img.webp";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Chairman() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: `url(${heroBg})`,
          height: "55vh",
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
            <h1 className="fw-bold display-3">Chairman Message</h1>
            <p className="mt-3 fs-5">
              Commitment to Quality, Care & Nutrition Excellence
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="container py-4">
        <p className="text-dark mb-0">
          <i className="bi bi-house-fill text-success me-2"></i>

          <Link to="/" className="text-decoration-none text-dark">
            Home
          </Link>

          <span className="mx-2">/</span>

          <span className="text-success fw-semibold">
            Chairman Message
          </span>
        </p>
      

      {/* MAIN SECTION */}
      
      
              {/* TOP HEADING */}
              <div className="text-center mb-3 mt-3">
                <h2
                  className="fw-bold text-danger"
                  style={{ fontSize: "42px" }}
                >
                  Message From The Chairman
                </h2>

                <div
                  className="mx-auto mt-3"
                  style={{
                    width: "90px",
                    height: "4px",
                    backgroundColor: "#4cb3c7",
                    borderRadius: "20px",
                  }}
                ></div>
              </div>

              {/* CONTENT */}
              <div className="row">
                <div className="col-lg-12">
                  <p
                    className="text-secondary mb-4"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.9",
                    }}
                  >
                    Welcome to NutriNoven Nutrition — A company founded
                    with a vision to redefine infant nutrition through
                    quality, trust, innovation, and care. At NutriNoven
                    Nutrition, we understand that nutrition during the
                    early stages of life plays a vital role in shaping a
                    healthier future.
                  </p>

                  <p
                    className="text-secondary mb-4"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.9",
                    }}
                  >
                    With this responsibility at the heart of our mission,
                    we proudly introduced our premium infant formula range
                    under the brand name Bobi Mamma® — including Bobi
                    Mamma 1, Bobi Mamma 2, Bobi Mamma 3, and Bobi Mamma
                    LF. Every product we manufacture reflects our
                    uncompromising commitment to international quality
                    standards.
                  </p>

                  <p
                    className="text-secondary mb-4"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.9",
                    }}
                  >
                    Our formulations are prepared using carefully sourced
                    imported raw materials and advanced manufacturing
                    processes to ensure purity, safety, balanced
                    nutrition, and excellent digestibility for infants and
                    growing children. At Nutri Novin Nutrition, quality is
                    not simply a promise — it is our foundation.
                  </p>

                  <div
                    className="p-4 rounded-4 my-5"
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderLeft: "5px solid #4cb3c7",
                    }}
                  >
                    <h4 className="fw-bold text-dark mb-3">
                      Our Commitment
                    </h4>

                    <p
                      className="text-secondary mb-0"
                      style={{
                        fontSize: "18px",
                        lineHeight: "1.8",
                      }}
                    >
                      From ingredient selection to packaging, every stage
                      undergoes strict quality assurance and professional
                      supervision to deliver products that families can
                      trust with confidence.
                    </p>
                  </div>

                  <p
                    className="text-secondary mb-4"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.9",
                    }}
                  >
                    We proudly encourage parents and healthcare
                    professionals to compare Boby Mamma® with any leading
                    international infant nutrition brand. We firmly
                    believe that our products offer not only exceptional
                    nutritional value and premium quality, but also
                    affordability that makes advanced nutrition accessible
                    to more families.
                  </p>

                  <p
                    className="text-secondary mb-4"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.9",
                    }}
                  >
                    Beyond our business goals, we are deeply committed to
                    social responsibility and compassionate care. We
                    recognize that many families struggle to access
                    high-quality infant nutrition due to financial
                    limitations.
                  </p>

                  <p
                    className="text-secondary mb-4"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.9",
                    }}
                  >
                    Therefore, as part of our commitment to community
                    welfare, NutriNoven Nutrition offers a special
                    support initiative for deserving patients and
                    families. Families who require assistance may submit a
                    valid doctor’s prescription through our official
                    WhatsApp number or email address.
                  </p>

                  <div
                    className="p-4 rounded-4 my-5 text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #4cb3c7, #2f8ea0)",
                    }}
                  >
                    <h4 className="fw-bold mb-3">
                      Our Vision For The Future
                    </h4>

                    <p
                      className="mb-0"
                      style={{
                        fontSize: "18px",
                        lineHeight: "1.8",
                      }}
                    >
                      Our vision extends beyond manufacturing infant
                      formula. We aspire to build a trusted global
                      nutrition brand that stands for excellence,
                      integrity, innovation, and humanity.
                    </p>
                  </div>

                  <p
                    className="text-secondary"
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.9",
                    }}
                  >
                    We sincerely thank you for placing your trust in
                    NutriNoven Nutrition and the Bobi Mamma® family.
                    Your confidence inspires us to continuously pursue
                    higher standards and contribute toward a healthier
                    generation.
                  </p>

                  {/* SIGNATURE */}
                  <div className="mt-5 pt-4 border-top">
                    <h3 className="fw-bold text-dark mb-1">
                      Syed Kifayatullah Shah
                    </h3>

                    <p
                      className="mb-0 text-secondary"
                      style={{ fontSize: "18px" }}
                    >
                      Chairman & CEO
                    </p>

                    <p
                      className="text-secondary"
                      style={{ fontSize: "18px" }}
                    >
                      NutriNoven Nutrition (Pvt.) Ltd.
                    </p>
                  </div>
                </div>
              </div>
            
        </div>
      <Footer />
    </>
  );
}

export default Chairman;