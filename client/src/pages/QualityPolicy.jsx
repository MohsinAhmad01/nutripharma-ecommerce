import React from "react";
import heroBg from "../assets/hero-img.webp";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Safety from "../assets/safety.png";
import Environment from "../assets/environment.webp";
import Quailty from "../assets/quality.webp";
import bgbanner from "../assets/bgbanner2.webp";
function QualityPolicy() {
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
            <h1 className="fw-bold display-4">MANUFACTURING</h1>
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

          <span className="text-success">Quality Policy</span>
        </p>
      </div>
      <div className="container mb-5">
        <div className="text-center " style={{ lineHeight: "1.6" }}>
          <h1 style={{ fontSize: "42px" }}>Our Quality Policy</h1>
          <p className="fs-5">
            At NutriNoven Nutrition, quality is at the heart of everything we
            do. From sourcing premium ingredients to advanced manufacturing and
            strict quality control, every step is carefully monitored to ensure
            safety, purity, and nutritional excellence. Our commitment is to
            provide trusted nutrition that meets international standards and
            supports healthy growth for every child.
          </p>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row align-items-center g-5">
          {/* LEFT SIDE TEXT BOX */}
          <div className="col-lg-8 order-2 order-lg-1">
            <div
              className="bg-white shadow p-4 p-lg-5 h-100"
              style={{ borderRadius: "10px" }}
            >
              <h3
                className="fs-1 text-danger text-center mb-4"
                style={{ lineHeight: "1" }}
              >
                Health & Safety
              </h3>

              <p
                className="text-secondary"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.7",
                }}
              >
                Our Bobi Mamma range is thoughtfully developed to support
                infants and growing children at every stage of development. With
                scientifically balanced nutrition, essential vitamins, minerals,
                and carefully selected ingredients, our products are designed to
                deliver complete nourishment, healthy development, and everyday
                care for families who trust our brand.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-4 order-1 order-lg-2  ">
            <img
              src={Safety}
              alt="Chairman"
              className="img-fluid shadow"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row align-items-center g-5">
          {/* LEFT SIDE TEXT BOX */}
          <div className="col-lg-8 order-2 order-lg-1">
            <div
              className="bg-white shadow p-4 p-lg-5 h-100"
              style={{ borderRadius: "10px" }}
            >
              <h3
                className="fs-1 text-danger text-center mb-4"
                style={{ lineHeight: "1" }}
              >
                Environment
              </h3>

              <p
                className="text-secondary"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.7",
                }}
              >
                We believe that caring for future generations also means caring
                for the environment. Nutri Novin Nutrition is committed to
                responsible practices, sustainable operations, and maintaining a
                clean and safe production environment. Through continuous
                improvement and environmental responsibility, we strive to
                contribute to a healthier and better future for our communities
                and the world around us.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-4 order-1 order-lg-2  ">
            <img
              src={Environment}
              alt="Chairman"
              className="img-fluid shadow"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row align-items-center g-5">
          {/* LEFT SIDE TEXT BOX */}
          <div className="col-lg-8 order-2 order-lg-1">
            <div
              className="bg-white shadow p-4 p-lg-5 h-100"
              style={{ borderRadius: "10px" }}
            >
              <h3
                className="fs-1 text-danger text-center mb-4"
                style={{ lineHeight: "1" }}
              >
                Quality
              </h3>

              <p
                className="text-secondary"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.7",
                }}
              >
                At NutriNoven Nutrition, quality is at the heart of everything
                we do. From sourcing premium ingredients to advanced
                manufacturing and strict quality control, every step is
                carefully monitored to ensure safety, purity, and nutritional
                excellence. Our commitment is to provide trusted nutrition that
                meets international standards and supports healthy growth for
                every child.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-4 order-1 order-lg-2  ">
            <img
              src={Quailty}
              alt="Chairman"
              className="img-fluid shadow"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default QualityPolicy;
