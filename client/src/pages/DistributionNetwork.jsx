import React from "react";
import heroBg from "../assets/hero-img.webp";
import PakistanFlag from "../assets/pakistaniflag.webp";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
function DistributionNetwork() {
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

          <span className="text-success"> Distribution Network</span>
        </p>
      </div>
      <div className="container pb-5">
        <div className="row g-5 align-items-start">
          {/* CONTENT */}
          <div className="col-lg-4 order-2 order-lg-1">
            <h2 className="fs-1 text-danger mb-4" style={{ lineHeight: "1" }}>
              Distribution Network
            </h2>
            <p
              className="text-dark fs-2"
              style={{
                
                lineHeight: "1.5",
              }}
            >
              OUR DISTRIBUTION NETWORK COVERS MORE THAN <b style={{fontSize:'65px'}}>40,000+</b> PHARMACIES IN
              PAKISTAN
            </p>
          </div>

          {/* IMAGE */}
          <div className="col-lg-8 order-1 order-lg-2">
            <img src={PakistanFlag} alt="Pakistan Flag" className="img-fluid shadow"style={{borderRadius:"20%"}} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DistributionNetwork;
