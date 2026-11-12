import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";

function Cart() {
  const navigate = useNavigate();

  const authHeaders = useMemo(
    () => ({
      withCredentials: true,
    }),
    []
  );

  const [cartId, setCartId] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const [delivery, setDelivery] = useState({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const getCartId = async () => {
    const existing = localStorage.getItem("cartId");

    if (existing) {
      setCartId(existing);
      return existing;
    }

    const resp = await axios.post(
      `${import.meta.env.VITE_BACKEND_API_URL}/api/cart/create`,
      {},
      authHeaders
    );

    localStorage.setItem("cartId", resp.data.cartId);
    setCartId(resp.data.cartId);

    return resp.data.cartId;
  };

  const fetchCart = async (id) => {
    const resp = await axios.get(
      `${import.meta.env.VITE_BACKEND_API_URL}/api/cart/${id}`,
      authHeaders
    );

    setItems(resp.data?.items || []);
  };

  useEffect(() => {
    const run = async () => {
      try {
        const id = await getCartId();
        await fetchCart(id);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    run();
    // eslint-disable-next-line
  }, []);

  const removeItem = async (productId) => {
    if (!cartId) return;

    try {
      const resp = await axios.delete(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/cart/${cartId}/items/${productId}`,
        authHeaders
      );

      setItems(resp.data?.items || []);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Failed to remove item"
      );
    }
  };

  const updateQty = async (productId, quantity) => {
    if (!cartId) return;

    const qty = Math.max(1, Number(quantity || 1));

    try {
      await removeItem(productId);

      for (let i = 0; i < qty; i++) {
        await axios.post(
          `${import.meta.env.VITE_BACKEND_API_URL}/api/cart/${cartId}/items`,
          {
            productId,
            quantity: 1,
          },
          authHeaders
        );
      }

      const resp = await axios.get(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/cart/${cartId}`,
        authHeaders
      );

      setItems(resp.data?.items || []);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Failed to update quantity"
      );
    }
  };

  const checkout = async (e) => {
    e.preventDefault();

    if (checkoutLoading) return;

    try {
      if (
        !delivery.fullName ||
        !delivery.phone ||
        !delivery.addressLine1 ||
        !delivery.city ||
        !delivery.country
      ) {
        toast.info("Please fill delivery details");
        return;
      }

      if (!cartId) {
        toast.error("Cart not found");
        return;
      }

      if (items.length === 0) {
        toast.info("Your cart is empty");
        return;
      }

      setCheckoutLoading(true);

      const resp = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/checkout/${cartId}`,
        {
          delivery,
        },
        authHeaders
      );

      toast.success("Order placed successfully. Opening WhatsApp...");

      const adminNumber = "923213133139";

      const encodedMessage = encodeURIComponent(
        resp.data?.whatsappMessage || ""
      );

      const whatsappUrl = `https://wa.me/${adminNumber}?text=${encodedMessage}`;

      /*
        IMPORTANT:
        On mobile, window.open(..., "_blank") may be blocked.
        window.location.href is better for WhatsApp mobile redirect.
      */
      window.location.href = whatsappUrl;

      /*
        Do not call navigate("/cart") here.
        Do not refresh cart here.
        Your backend already clears cart after order is created.
      */
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Checkout failed"
      );
      setCheckoutLoading(false);
    }
  };

  const cartTotal = items.reduce(
    (sum, i) =>
      sum +
      (Number(i.priceSnapshot) || 0) *
        (Number(i.quantity) || 0),
    0
  );

  return (
    <>
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
          <div>
            <h2 className="fw-bold mb-1">Shopping Cart</h2>

            <p className="text-muted mb-0">
              Complete your order details
            </p>
          </div>

          <div className="fs-5 fw-bold">
            Total: {cartTotal}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5">
            Loading...
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">
                    Delivery Details
                  </h4>

                  <form onSubmit={checkout}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>

                      <input
                        className="form-control form-control-lg"
                        value={delivery.fullName}
                        onChange={(e) =>
                          setDelivery((s) => ({
                            ...s,
                            fullName: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Phone
                      </label>

                      <input
                        className="form-control form-control-lg"
                        value={delivery.phone}
                        onChange={(e) =>
                          setDelivery((s) => ({
                            ...s,
                            phone: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Address
                      </label>

                      <input
                        className="form-control form-control-lg"
                        value={delivery.addressLine1}
                        onChange={(e) =>
                          setDelivery((s) => ({
                            ...s,
                            addressLine1: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Address Line 2
                      </label>

                      <input
                        className="form-control form-control-lg"
                        value={delivery.addressLine2}
                        onChange={(e) =>
                          setDelivery((s) => ({
                            ...s,
                            addressLine2: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          City
                        </label>

                        <input
                          className="form-control form-control-lg"
                          value={delivery.city}
                          onChange={(e) =>
                            setDelivery((s) => ({
                              ...s,
                              city: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Country
                        </label>

                        <input
                          className="form-control form-control-lg"
                          value={delivery.country}
                          onChange={(e) =>
                            setDelivery((s) => ({
                              ...s,
                              country: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Postal Code
                      </label>

                      <input
                        className="form-control form-control-lg"
                        value={delivery.postalCode}
                        onChange={(e) =>
                          setDelivery((s) => ({
                            ...s,
                            postalCode: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <button
                      className="btn btn-success w-100 py-3 fw-bold rounded-3 mt-2"
                      type="submit"
                      disabled={
                        items.length === 0 || checkoutLoading
                      }
                    >
                      {checkoutLoading
                        ? "Processing..."
                        : "Checkout & Send WhatsApp"}
                    </button>

                    {items.length === 0 && (
                      <p className="text-muted text-center mt-3 mb-0">
                        Add products to enable checkout
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-7 order-1 order-lg-2">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold mb-0">
                      Your Products
                    </h4>

                    <span className="text-muted">
                      {items.length} Items
                    </span>
                  </div>

                  {items.length === 0 ? (
                    <div className="text-center py-5">
                      <div
                        className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle bg-light"
                        style={{
                          width: "120px",
                          height: "120px",
                        }}
                      >
                        <i
                          className="bi bi-cart-x"
                          style={{
                            fontSize: "55px",
                            color: "#adb5bd",
                          }}
                        ></i>
                      </div>

                      <h4 className="fw-bold">
                        Your Cart is Empty
                      </h4>

                      <p className="text-muted mb-4">
                        Looks like you haven’t added any products yet.
                      </p>

                      <button
                        className="btn btn-primary px-4 py-2 rounded-3"
                        onClick={() => navigate("/products")}
                      >
                        Continue Shopping
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="table-responsive">
                        <table className="table align-middle">
                          <tbody>
                            {items.map((i) => (
                              <tr key={String(i.productId)}>
                                <td style={{ width: 100 }}>
                                  <img
                                    src={`${import.meta.env.VITE_BACKEND_API_URL}${i.imageUrlSnapshot}`}
                                    alt={i.nameSnapshot}
                                    className="img-fluid rounded-3"
                                    style={{
                                      width: 80,
                                      height: 80,
                                      objectFit: "contain",
                                      background: "#f8f9fa",
                                    }}
                                  />
                                </td>

                                <td>
                                  <div className="fw-bold">
                                    {i.nameSnapshot}
                                  </div>

                                  <div className="text-muted small">
                                    Unit Price: {i.priceSnapshot}
                                  </div>
                                </td>

                                <td style={{ width: 120 }}>
                                  <input
                                    type="number"
                                    min={1}
                                    className="form-control"
                                    value={i.quantity}
                                    onChange={(e) =>
                                      updateQty(
                                        i.productId,
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>

                                <td className="fw-bold">
                                  {(Number(i.priceSnapshot) || 0) *
                                    (Number(i.quantity) || 0)}
                                </td>

                                <td>
                                  <button
                                    className="btn btn-sm btn-outline-danger rounded-pill"
                                    onClick={() =>
                                      removeItem(i.productId)
                                    }
                                  >
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="d-flex justify-content-end mt-4">
                        <div className="fs-4 fw-bold">
                          Total: {cartTotal}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;