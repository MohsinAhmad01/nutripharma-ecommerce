import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import heroBg from "../assets/hero-img.webp";
import productImg from "../assets/4-4.webp";
import "../style/Products.css";
import Footer from "./Footer";
import { toast } from "react-toastify";
function Products() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [cartId, setCartId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const navigate = useNavigate();
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set((products || []).map((p) => p.category).filter(Boolean)),
    );
    return ["All", ...unique];
  }, [products]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const c = params.get("category");
    if (c) setActiveCategory(c);
    else setActiveCategory("All");
  }, []);

  const filteredProducts = useMemo(() => {
    const s = search.toLowerCase();
    let list = products;

    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (!s) return list;

    return list.filter((p) => (p.name || "").toLowerCase().includes(s));
  }, [products, search, activeCategory]);

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
      const resp = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/cart/${id}/items`,
        { productId, quantity: 1 },
        { withCredentials: true },
      );
      setCartId(resp.data.cartId);
      toast.success("Added to cart");
    } catch (e) {
      toast.error(e?.response?.data?.message || "Failed to add to cart");
    }
  };

  useEffect(() => {
    const run = async () => {
      try {
        const resp = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/products`, {
          withCredentials: true,
        });
        setProducts(resp.data.products || []);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  useEffect(() => {
    const existing = localStorage.getItem("cartId");
    if (existing) setCartId(existing);
  }, []);

  return (
    <>
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
            <h1 className="fw-bold display-4">Our Products</h1>
            <p className="lead mt-3">
              High Quality Medical & Pharmaceutical Products
            </p>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div
  className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-4 mb-5 p-4"
  style={{
    background:
      "linear-gradient(135deg, rgba(76,179,199,0.08), rgba(13,110,253,0.05))",
    borderRadius: "28px",
    border: "1px solid rgba(0,0,0,0.06)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    backdropFilter: "blur(10px)",
  }}
>
  {/* LEFT SIDE */}
  <div className="flex-grow-1">
    <div className="d-flex align-items-center gap-2 mb-3">
      <div
        style={{
          width: "35px",
          height: "4px",
          borderRadius: "10px",
          background: "#4cb3c7",
        }}
      ></div>

      <span
        className="fw-bold text-uppercase"
        style={{
          letterSpacing: "1px",
          color: "#4cb3c7",
          fontSize: "13px",
        }}
      >
        Product Categories
      </span>
    </div>

    <ul className="d-flex flex-wrap gap-3 list-unstyled mb-0">
      {categories.map((cat, index) => {
        const active = activeCategory === cat;

        return (
          <li
            key={index}
            onClick={() => setActiveCategory(cat)}
            className="d-flex align-items-center justify-content-center"
            style={{
              padding: "12px 22px",
              background: active
                ? "linear-gradient(135deg, #4cb3c7, #0d6efd)"
                : "#ffffff",
              color: active ? "#fff" : "#222",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "0.3s ease",
              fontWeight: "600",
              fontSize: "14px",
              border: active
                ? "none"
                : "1px solid rgba(0,0,0,0.08)",
              boxShadow: active
                ? "0 10px 20px rgba(13,110,253,0.25)"
                : "0 4px 12px rgba(0,0,0,0.04)",
              minWidth: "90px",
            }}
          >
            {cat}
          </li>
        );
      })}
    </ul>
  </div>

  {/* RIGHT SIDE */}
  <div
    className="position-relative"
    style={{
      width: "100%",
      maxWidth: "360px",
    }}
  >
    <i
      className="bi bi-search position-absolute"
      style={{
        top: "50%",
        left: "20px",
        transform: "translateY(-50%)",
        color: "#888",
        fontSize: "16px",
      }}
    ></i>

    <input
      type="text"
      className="form-control border-0"
      placeholder="Search Products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        height: "58px",
        borderRadius: "50px",
        paddingLeft: "50px",
        paddingRight: "20px",
        background: "#fff",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        fontSize: "15px",
        fontWeight: "500",
      }}
    />
  </div>
</div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">Nutrinoven Products</h3>
          <button
            className="btn p-0 text-success text-decoration-none fw-semibold border-0 bg-transparent"
            onClick={() => setActiveCategory("All")}
          >
            View All →
          </button>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="row g-4">
            {filteredProducts.map((product) => {
              const isOut = Boolean(product.outOfStock);
              return (
                <div className="col-lg-3 col-md-6 col-12" key={product._id}>
                  <div className="card border-0 shadow product-card h-100">
                    {/* IMAGE */}
                    <div className="product-image-wrapper">
                      <img
                        src={
                          product.imageUrl
                            ? `${import.meta.env.VITE_BACKEND_API_URL}${product.imageUrl}`
                            : productImg
                        }
                        alt="product"
                        className="product-img"
                      />

                      {/* STOCK */}
                      {isOut && (
                        <span className="out-stock-badge">Out of Stock</span>
                      )}
                    </div>

                    {/* BODY */}
                    <div className="card-body d-flex flex-column">
                      {/* TITLE */}
                      <h5 className="fw-bold product-title mb-1">
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
                      {/* PRICE */}
                      <div className="mb-1">
                        <span className="product-price text-danger">
                          Price: {product.price}
                        </span>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="product-desc text-muted">
                        description:{" "}
                        {product.description
                          ? product.description.slice(0, 30) + "..."
                          : "No description available"}
                      </p>

                      {/* REVIEWS */}
                      <div className="mb-1">
                        <span className="text-warning">★★★★★</span>
                        <small className="text-muted ms-2">
                          ({product.reviews?.length || 0} Reviews)
                        </small>
                      </div>

                      {/* BUTTONS */}
                      <div className="d-flex gap-2 mt-auto">
                        <button
                        
                      style={{backgroundColor: "#4cb3c7"}}
                          className="btn cart-btn w-50 text-white"
                          disabled={isOut}
                          onClick={() => addToCart(product._id)}
                        >
                          <i className="bi bi-cart-plus me-1"></i>
                          Cart
                        </button>

                        <button
                        style={{backgroundColor: "#df1f1fbc"}}
                          className="btn details-btn w-50 text-white"
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
        )}
      </div>
      <Footer />
    </>
  );
}

export default Products;
