import React from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const reviews = [
  {
    name: "Dr. Ahmed Khan",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    review:
      "NutriNoven products are trusted and highly recommended for infant nutrition. Excellent quality and results.",
  },
  {
    name: "Sarah Ali",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
    review:
      "Very satisfied with the product quality and customer service. My baby loves the formula.",
  },
  {
    name: "Dr. Usman Tariq",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
    review:
      "Safe, reliable, and professionally formulated products for growing children.",
  },
  {
    name: "Ayesha Noor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
    review:
      "Amazing experience with NutriNoven. Packaging and product quality are outstanding.",
  },
  {
    name: "Muhammad Bilal",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400",
    review:
      "Highly recommended for parents looking for trusted nutritional products for babies.",
  },
  {
    name: "Dr. Sana Malik",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
    review:
      "One of the best infant nutrition brands with great product consistency and care.",
  },
];

const Partners = () => {
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-uppercase">
          What Our Clients Say About Us
        </h2>

        {/* SLIDER WRAPPER */}
        <div className="position-relative d-flex align-items-center">
          
          {/* LEFT BUTTON */}
          <button
            className="testimonial-prev btn bg-white shadow rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
            style={{
              width: "45px",
              height: "45px",
              border: "1px solid #ddd",
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            className="w-100"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-white shadow-sm border p-4 h-100 text-center"
                  style={{
                    minHeight: "320px",
                    borderRadius: "12px",
                  }}
                >
                  {/* USER IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      border: "3px solid #f1f1f1",
                    }}
                  />

                  {/* STARS */}
                  <div className="d-flex justify-content-center mb-3 text-warning">
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                  </div>

                  {/* REVIEW */}
                  <p
                    className="text-secondary"
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.8",
                    }}
                  >
                    "{item.review}"
                  </p>

                  {/* NAME */}
                  <h6 className="fw-bold mt-4 mb-0">{item.name}</h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* RIGHT BUTTON */}
          <button
            className="testimonial-next btn bg-white shadow rounded-circle d-flex align-items-center justify-content-center ms-3 flex-shrink-0"
            style={{
              width: "45px",
              height: "45px",
              border: "1px solid #ddd",
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;