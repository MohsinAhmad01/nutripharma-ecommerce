import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import heroFallback from "../assets/1-1.webp";
import Footer from "../Components/Footer";
function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartId, setCartId] = useState(null);
  const imageSrc = useMemo(() => {
    if (!product) return heroFallback;
    if (product.imageUrl) {
      return `${import.meta.env.VITE_BACKEND_API_URL}${product.imageUrl}`;
    }
    return heroFallback;
  }, [product]);

  // GET CART ID
  const getCartId = async () => {
    const existing = localStorage.getItem("cartId");

    if (existing) return existing;

    const resp = await axios.post(
      `${import.meta.env.VITE_BACKEND_API_URL}/api/cart/create`,
      {},
      {
        withCredentials: true,
      },
    );

    localStorage.setItem("cartId", resp.data.cartId);

    setCartId(resp.data.cartId);

    return resp.data.cartId;
  };
  // ADD TO CART
  const addToCart = async (productId) => {
    try {
      const id = cartId || (await getCartId());
      const resp = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/cart/${id}/items`,
        {
          productId,
          quantity: 1,
        },
        {
          withCredentials: true,
        },
      );
      setCartId(resp.data.cartId);
      toast.success("Added to cart");
    } catch (e) {
      toast.error(e?.response?.data?.message || "Failed to add to cart");
    }
  };
  // FETCH PRODUCT
  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);

        const resp = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/products/${id}`, {
          withCredentials: true,
        });
        setProduct(resp.data?.product || null);
      } catch (e) {
        console.log(e);

        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [id]);

  // LOAD CART ID
  useEffect(() => {
    const existing = localStorage.getItem("cartId");

    if (existing) {
      setCartId(existing);
    }
  }, []);

  const isOut = product?.outOfStock;

  return (
    <>
      <div className="container py-4" style={{ minHeight: "60vh" }}>
        {/* TOP */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

          <div className="text-muted">Product Details</div>
        </div>

        {/* LOADING */}
        {loading ? (
          <div>Loading...</div>
        ) : !product ? (
          <div className="alert alert-warning">Product not found.</div>
        ) : (
          <div
            className="card shadow-sm"
            style={{
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <div className="row g-0">
              {/* IMAGE */}
              <div
                className="col-lg-5 p-4"
                style={{
                  background: "#f8fafc",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 360,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 8,
                  }}
                >
                  <img
                    src={imageSrc}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: 12,
                    }}
                  />
                </div>

                {/* BADGES */}
                <div className="mt-3 d-flex gap-2 flex-wrap">
                  <span
                    className="badge rounded-pill"
                    style={{
                      background: isOut ? "#dc3545" : "#198754",
                      color: "#fff",
                      fontSize: 12,
                    }}
                  >
                    {isOut ? "Out of Stock" : "In Stock"}
                  </span>

                  <span
                    className="badge bg-primary rounded-pill"
                    style={{
                      fontSize: 12,
                    }}
                  >
                    category: {product.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="col-lg-7 p-4 p-lg-5">
                <h2
                  className="fw-bold"
                  style={{
                    letterSpacing: -0.2,
                  }}
                >
                  {product.name}
                </h2>
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
                <div className="mt-2 mb-3">
                  <span className="text-muted me-2">Price:</span>

                  <span className="fs-4 fw-bold text-danger">{product.price}</span>
                </div>

                {/* DESCRIPTION */}
                <h5 className="mb-2 fw-semibold">Description:</h5>

                <p
                  className="text-muted"
                  style={{
                    lineHeight: 1.7,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {product.description || "No description available."}
                </p>
                {/* BUTTONS */}
                <div className="d-flex gap-3 flex-wrap">
                  <button
                    className="btn rounded-3"
                    style={{
                      backgroundColor: isOut ? "#999" : "#4cb3c7",
                      color: "white",
                      padding: "10px 20px",
                      fontWeight: "600",
                      border: "none",
                      opacity: isOut ? 0.7 : 1,
                      minHeight: 44,
                    }}
                    disabled={isOut}
                    onClick={() => addToCart(product._id)}
                  >
                    <i className="bi bi-cart me-2"></i>

                    {isOut ? "Out of Stock" : "Add to Cart"}
                  </button>

                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/products")}
                  >
                    Back to Products
                  </button>
                </div>
                <hr />
                <hr className="my-4" />

                <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <i className="bi bi-chat-heart-fill text-warning"></i>
                  Customer Reviews
                </h4>

                {product.reviews?.length > 0 ? (
                  <div className="d-flex flex-column gap-3">
                    {product.reviews.map((review, index) => (
                      <div
                        key={index}
                        className="p-4 shadow-sm border-0 rounded-4"
                        style={{
                          background: "#f8fafc",
                          transition: "0.3s",
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="d-flex align-items-center gap-2">
                            <div
                              className="bi bi-person fs-4 rounded-circle d-flex align-items-center justify-content-center"
                              style={{
                                width: "40px",
                                height: "40px",
                                background: "#000000",
                                color: "#efecec",
                                fontWeight: "bold",
                                fontSize: "18px",
                              }}
                            >
                              {review.charAt(0).toUpperCase()}
                            </div>

                            <div>
                              <h6 className="mb-0 fw-bold">
                                Verified Customer
                              </h6>

                              <small className="text-muted">
                                Trusted Review
                              </small>
                            </div>
                          </div>

                          <div
                            className="px-3 py-1 rounded-pill"
                            style={{
                              background: "#fff3cd",
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#856404",
                            }}
                          >
                            ⭐ 4.0
                          </div>
                        </div>

                        <p
                          className="mb-0 text-secondary"
                          style={{
                            lineHeight: "1.8",
                            fontSize: "15px",
                          }}
                        >
                          commented: “{review}”
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="text-center p-5 rounded-4"
                    style={{
                      background: "#f8fafc",
                    }}
                  >
                    <i
                      className="bi bi-chat-square-text"
                      style={{
                        fontSize: "50px",
                        color: "#adb5bd",
                      }}
                    ></i>

                    <p className="text-muted mt-3 mb-0">
                      No customer reviews available yet.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
