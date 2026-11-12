import React from "react";
import heroBg from "../assets/hero-img.webp";
import bgbanner from "../assets/bgbanner2.webp";
import product from "../assets/4-4.webp";
import product1 from "../assets/1-1.webp";
import product2 from "../assets/2-2.webp";
import product3 from "../assets/3-1.webp";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
function Facilites() {
  const images = [product, product1, product2, product3, product];

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
            <h1 className="fw-bold display-4">Manufacturing</h1>
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

          <span className="text-success">Our Facilities</span>
        </p>
      </div>

      <div className="container pb-5">
        <div className="row g-5 align-items-start">
          {/* IMAGE */}
          <div className="col-lg-6">
            {/* MAIN IMAGE */}
            <img
              src={product}
              alt="Product"
              className="img-fluid shadow mb-2"
            />

            {/* SWIPER */}
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              loop={true}
              spaceBetween={0}
              slidesPerView={4}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
              }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt=""
                    className="img-fluid border"
                    style={{
                      height: "100px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* CONTENT */}
          <div className="col-lg-6">
            <h2
              className="fs-2 text-danger text-center mb-4"
              style={{ lineHeight: "1" }}
            >
              Our Facilities
            </h2>

            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              At Nutrinoven Nutrition, our advanced manufacturing facilities are
              designed to produce high-quality baby nutrition products with
              precision, safety, and care. From Bobi Mama 1 to Bobi Mama LF,
              including both 200g and 400g packaging variants, every product is
              manufactured under strict quality control standards to ensure
              trusted nutrition for infants and toddlers.
            </p>

            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              Our facility is equipped with modern production technology,
              hygienic processing systems, and carefully monitored environments
              that maintain the purity and nutritional value of every formula.
              We follow internationally recognized safety and quality practices
              to ensure each product delivers balanced nutrition, easy
              digestion, and essential vitamins and minerals for healthy growth
              and development.
            </p>

            <p
              className="text-dark"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              With dedicated quality assurance teams, advanced packaging
              systems, and continuous product testing, we ensure that every Bobi
              Mama formula meets the nutritional needs of growing children. Our
              commitment to innovation, reliability, and excellence allows us to
              provide safe, nourishing, and dependable products for families
              across Pakistan
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Facilites;
