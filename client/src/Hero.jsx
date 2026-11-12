import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import heroImg from "./assets/hero-img.webp";
import bgbanner from "./assets/bgbanner.webp";
import productpic from "./assets/4-4.webp";
import productImg from "./assets/4-4.webp";
import doctor from "./assets/doctor.webp";
import pakistaniflag from "./assets/pakistaniflag.webp";

import "../src/style/Hero.css";

import Partners from "./Components/Partners.jsx";
import Footer from "./Components/Footer.jsx";

const Hero = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [cartId, setCartId] = useState(null);

  // FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resp = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/products`, {
          withCredentials: true,
        });

        setProducts(resp.data.products || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  // GET ONLY 1 PRODUCT FROM EACH CATEGORY
  const categoryProducts = useMemo(() => {
    const unique = [];

    products.forEach((product) => {
      const alreadyExists = unique.find((p) => p.category === product.category);

      if (!alreadyExists) {
        unique.push(product);
      }
    });

    return unique.slice(0, 4);
  }, [products]);

  // CART
  const getCartId = async () => {
    const existing = localStorage.getItem("cartId");

    if (existing) return existing;

    const resp = await axios.post(
      `${import.meta.env.VITE_BACKEND_API_URL}/api/cart/create`,
      {},
      { withCredentials: true },
    );

    localStorage.setItem("cartId", resp.data.cartId);
    setCartId(resp.data.cartId);

    return resp.data.cartId;
  };

  const addToCart = async (productId) => {
    try {
      const id = cartId || (await getCartId());

      await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/cart/${id}/items`,
        {
          productId,
          quantity: 1,
        },
        {
          withCredentials: true,
        },
      );

      toast.success("Added to cart");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add cart");
    }
  };

  return (
    <>
      {/* HERO SECTION */}
<section className="modern-hero">
  {/* Background */}
  <img src={bgbanner} alt="banner" className="modern-hero-bg" />

  {/* Overlay */}
  <div className="modern-overlay"></div>

  <div className="container position-relative z-2">
    <div className="row align-items-center min-vh-100 py-5">
      {/* LEFT SIDE */}
      <div className="col-lg-6 text-white">
        <div className="hero-small-line mb-3">
          <span></span>
          NUTRINOVEN  & WELLNESS
        </div>

        <h1 className="modern-hero-title">
          Premium Nutrition
          <br />
          For A Stronger
          <span> Healthier Life</span>
        </h1>

        <p className="modern-hero-text mt-4">
          Nutrinoven  Nutrition provides high-quality,
          science-backed nutritional products that support
          immunity, energy, growth, and long-term wellness
          for healthier living every day.
        </p>

        <div className="d-flex flex-wrap gap-3 mt-4">
          <Link to="/products" className="btn modern-btn-primary">
            Explore Products
          </Link>

          <Link to="/manufacturing/chairman-message" className="btn modern-btn-light">
            About Company
          </Link>
        </div>

        {/* FEATURES */}
        <div className="hero-features mt-5">
          <div className="feature-item">
            <i className="bi bi-shield-check"></i>
            <div>
              <h6>Certified Quality</h6>
              <small>Safe & Trusted Products</small>
            </div>
          </div>

          <div className="feature-item">
            <i className="bi bi-capsule-pill"></i>
            <div>
              <h6>Advanced Formula</h6>
              <small>Science Based Nutrition</small>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="col-lg-6 mt-5 mt-lg-0">
        <div className="hero-right-wrapper">
          {/* MAIN IMAGE CARD */}
          <div className="hero-main-card">
            <img
              src={productpic}
              alt="product"
              className="img-fluid"
            />
          </div>

          {/* FLOATING CARD 1 */}
          <div className="floating-card floating-card-one">
            <div className="floating-icon">
              <i className="bi bi-heart-pulse-fill"></i>
            </div>

            <div>
              <h5>Healthy Nutrition</h5>
              <p>Boost immunity & wellness</p>
            </div>
          </div>

          {/* FLOATING CARD 2 */}
          <div className="floating-card floating-card-two">
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ABOUT */}
      {/* ================= CREATIVE HORIZONTAL SECTION ================= */}

<section className="future-section">
  <div className="container-fluid px-1">
    <div className="future-wrapper">

      {/* LEFT PANEL */}
      <div className="future-left">
        <div className="future-image-wrap">
          <img
            src={doctor}
            alt="doctor"
            className="future-main-image"
          />

          {/* FLOATING PRODUCT */}
          <div className="future-product-card">
            <img src={productpic} alt="product" />

            <div>
              <span>Featured Product</span>
              <h5>Premium Nutrition</h5>
            </div>
          </div>
        </div>
      </div>

      {/* CENTER PANEL */}
      <div className="future-center">
        <span className="future-mini-title">
          NUTRINOVEN  NUTRITION
        </span>

        <h1 className="future-heading">
          Shaping The Future Of
          <span> Smart Nutrition</span>
        </h1>

        <p className="future-text">
          We create science-backed nutritional products
          designed to improve wellness, immunity, growth,
          and healthier lifestyles through modern innovation.
        </p>

        {/* CREATIVE STATS */}
        <div className="future-stats">

          <div className="future-stat-card">
            <h2>10K+</h2>
            <p>Customers</p>
          </div>

          <div className="future-stat-card active-stat">
            <h2>50+</h2>
            <p>Products</p>
          </div>

          <div className="future-stat-card">
            <h2>99%</h2>
            <p>Quality</p>
          </div>

        </div>

        {/* BUTTON */}
        <button className="future-btn">
          Explore Products
        </button>
      </div>

      {/* RIGHT PANEL */}
      <div className="future-right">

        <div className="future-feature-card cyan-card">
          <div className="future-icon-box">
            <i className="bi bi-heart-pulse-fill"></i>
          </div>

          <div>
            <h4>Health Focused</h4>

            <p>
              Premium nutritional formulas for
              stronger wellness and immunity.
            </p>
          </div>
        </div>

        <div className="future-feature-card dark-card">
          <div className="future-icon-box">
            <i className="bi bi-capsule-pill"></i>
          </div>

          <div>
            <h4>Modern Solutions</h4>

            <p>
              Developed with advanced research
              and quality manufacturing.
            </p>
          </div>
        </div>

        <div className="future-feature-card light-card">
          <div className="future-icon-box">
            <i className="bi bi-shield-check"></i>
          </div>

          <div>
            <h4>Trusted Quality</h4>

            <p>
              Safe, reliable, and effective
              nutrition products nationwide.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* PRODUCTS */}
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">Top Products</h3>

          <Link
            to="/products"
            className="text-success text-decoration-none fw-semibold"
          >
            View All <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        <div className="row g-4">
          {categoryProducts.map((product) => {
            const isOut = Boolean(product.outOfStock);

            return (
              <div className="col-lg-3 col-md-6 col-12" key={product._id}>
                <div className="card product-card border-0 shadow-sm rounded-4 h-100">
                  {/* IMAGE */}
                  <div
                    className="position-relative overflow-hidden"
                    style={{
                      height: "240px",
                      background: "#f8f9fa",
                    }}
                  >
                    <img
                      src={
                        product.imageUrl
                          ? `${import.meta.env.VITE_BACKEND_API_URL}${product.imageUrl}`
                          : productImg
                      }
                      alt={product.name}
                      className="product-img w-100 h-100"
                      style={{
                        objectFit: "contain",
                        padding: "20px",
                      }}
                    />

                    {isOut && (
                      <div className="out-stock-badge">Out of Stock</div>
                    )}
                  </div>

                  {/* BODY */}
                  <div className="card-body d-flex flex-column">
                    {/* CATEGORY */}

                    {/* NAME */}
                    <h5 className="fw-bold mb-2 product-title">
                      {product.name}
                    </h5>
                    <p
                      className="mb-2 d-inline-flex align-items-center gap-2"
                      style={{
                        background: "#f4f7fb",
                        color: "#4b3b8f",
                        padding: "6px 14px",
                        borderRadius: "30px",
                        fontSize: "12px",
                        fontWeight: "700",
                        width: "fit-content",
                      }}
                    >
                      <i className="bi bi-tag-fill"></i>
                      {product.category}
                    </p>
                    {/* DESCRIPTION */}
                    <p className="text-muted small mb-3">
                      {product.description?.slice(0, 30).trim()}
                      ...
                    </p>

                    {/* PRICE */}
                    <div className="mb-3">
                      <span className="fw-bold fs-5 text-danger">
                        Rs. {product.price}
                      </span>
                    </div>

                    {/* BUTTONS */}
                    <div className="d-flex gap-2 mt-auto">
                      <button
                      style={{backgroundColor: "#4cb3c7"}}
                        className="btn flex-fill cart-btn text-white"
                        disabled={isOut}
                        onClick={() => addToCart(product._id)}
                      >
                        <i className="bi bi-cart me-2"></i>
                        {isOut ? "Out" : "Cart"}
                      </button>

                      <button
                      style={{backgroundColor: "#df1f1fbc"}}
                        className="btn flex-fill details-btn text-white "
                        onClick={() => navigate(`/products/${product._id}`)}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* STATS */}
        <div className="row g-4 mt-5">
          <div className="col-lg-3 col-md-6">
            <div
              className="p-4 rounded-4 d-flex align-items-center gap-3"
              style={{ backgroundColor: "#d4edda" }}
            >
              <i className="bi bi-people-fill fs-1"></i>

              <div>
                <h3 className="fw-bold mb-0">14K+</h3>
                <small>Orders Completed</small>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="p-4 rounded-4 d-flex align-items-center gap-3"
              style={{ backgroundColor: "#f3e5c3" }}
            >
              <i className="bi bi-award-fill fs-1"></i>

              <div>
                <h3 className="fw-bold mb-0">250+</h3>
                <small>Won Awards</small>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="p-4 rounded-4 d-flex align-items-center gap-3"
              style={{ backgroundColor: "#d4ed91" }}
            >
              <i className="bi bi-emoji-smile-fill fs-1"></i>

              <div>
                <h3 className="fw-bold mb-0">8K+</h3>
                <small>Happy Customers</small>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="p-4 rounded-4 d-flex align-items-center gap-3"
              style={{ backgroundColor: "#e5d4f0" }}
            >
              <i className="bi bi-star-fill fs-1"></i>

              <div>
                <h3 className="fw-bold mb-0">12K+</h3>
                <small>Positive Reviews</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Partners />
      <Footer />
    </>
  );
};

export default Hero;
