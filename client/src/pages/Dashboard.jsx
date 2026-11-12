import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../style/Dashboard.css";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");

  const [stats, setStats] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [error, setError] = useState("");

  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState({
    name: "",
    category: "",
    description: "",
    reviews: "",
    price: "",
    outOfStock: false,
  });
  const [productImageFile, setProductImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const authHeaders = useMemo(() => ({ withCredentials: true }), []);

  const logoutHandler = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/auth/logout`,
        {},
        { withCredentials: true },
      );
      window.location.href = "/login";
    } catch (e) {
      console.log(e);
    }
  };

  const fetchStats = async () => {
    setLoadingStats(true);
    try {
      const resp = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/admin/stats`, authHeaders);
      setStats(resp.data?.stats || resp.data);
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to load stats");
    } finally {
      setLoadingStats(false);
    }
  };

  const fetchOrders = async () => {
    setLoadingOrders(true);
    try {
      const resp = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/orders`, authHeaders);
      setOrders(resp.data?.orders || []);
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to load orders");
    } finally {
      setLoadingOrders(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const resp = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/products`, authHeaders);
      setProducts(resp.data?.products || resp.data || []);
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to load products");
    }
  };

  useEffect(() => {
    fetchStats();
    fetchOrders();
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitProduct = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("name", productForm.name);
      form.append("category", productForm.category);
      form.append("reviews", productForm.reviews);
      form.append("description", productForm.description);
      form.append("price", Number(productForm.price));

      // Send boolean correctly (unchecked => false)
      // NOTE: HTML checkbox sends boolean via our state; backend converts Boolean("false") => true,
      // so we must send an actual "true"/"false" and backend must parse it.
      form.append("outOfStock", productForm.outOfStock ? "true" : "false");
      if (productImageFile) form.append("image", productImageFile);

      if (editingId) {
        await axios.put(`${import.meta.env.VITE_BACKEND_API_URL}/api/products/${editingId}`, form, {
          ...authHeaders,
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Product updated");
      } else {
        await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/products`, form, {
          ...authHeaders,
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Product created");
      }

      setEditingId(null);
      setProductForm({
        name: "",
        category: "",
         reviews: "",
        description: "",
        price: "",
        outOfStock: false,
      });
      setProductImageFile(null);
      await fetchProducts();
    } catch (e) {
      toast.error(e?.response?.data?.message || "Failed to save product");
    }
  };

  const editProduct = (p) => {
    setEditingId(p._id);
    setProductForm({
      name: p.name || "",
      category: p.category || "",
       reviews: (p.reviews || []).join("\n"),
      description: p.description || "",
      price: p.price ?? "",
      outOfStock: Boolean(p.outOfStock),
    });
    setProductImageFile(null);
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_API_URL}/api/products/${id}`, authHeaders);
      toast.success("Product deleted");
      await fetchProducts();
      if (editingId === id) {
        setEditingId(null);
        setProductForm({
          name: "",
          category: "",
          description: "",
          price: "",
          outOfStock: false,
        });
        setProductImageFile(null);
      }
    } catch (e) {
      toast.error(e?.response?.data?.message || "Failed to delete product");
    }
  };

  const setOrderStatus = async (id, status) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/orders/${id}/status`,
        { status },
        authHeaders,
      );
      await fetchOrders();
      await fetchStats();
    } catch (e) {
      toast.error(e?.response?.data?.message || "Failed to update order");
    }
  };

  return (
    <div className="container mt-4 mb-5 dashboard-wrapper">

  {/* TOPBAR */}
  <div className="admin-dashboard-topbar">
    <div>
      <h1>Admin Dashboard</h1>

      <div className="text-muted">
        Manage products, orders and store activity
      </div>
    </div>

    <button
      className="dashboard-logout-btn"
      onClick={logoutHandler}
    >
      Logout
    </button>
  </div>

  {/* ================= STATS ================= */}
  <div className="mb-5">
    <h3 className="dashboard-section-title">
      Dashboard Overview
    </h3>

    {loadingStats ? (
      <div>Loading stats...</div>
    ) : (
      <div className="row g-4">

        <div className="col-md-3">
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-title">
              Total Orders
            </div>

            <div className="dashboard-stat-value">
              {stats.totalOrders}
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-title">
              Pending Orders
            </div>

            <div className="dashboard-stat-value">
              {stats.pendingCount}
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-title">
              Completed Orders
            </div>

            <div className="dashboard-stat-value">
              {stats.completedCount}
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-title">
              Declined Orders
            </div>

            <div className="dashboard-stat-value">
              {stats.declinedCount}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-title">
              Total Income
            </div>

            <div className="dashboard-stat-value">
              {stats.incomeTotal}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-title">
              Out Of Stock
            </div>

            <div className="dashboard-stat-value">
              {stats.outOfStockCount}
            </div>

            {stats.outOfStockNames?.length ? (
              <div className="mt-3 text-muted small">
                {stats.outOfStockNames.join(", ")}
              </div>
            ) : null}
          </div>
        </div>

      </div>
    )}
  </div>

  {/* ================= ORDERS ================= */}
  <div className="mb-5">
    <h3 className="dashboard-section-title">
      Orders Management
    </h3>

    {loadingOrders ? (
      <div>Loading orders...</div>
    ) : (
      <div className="dashboard-table-wrapper">
        <table className="table align-middle">

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Customer</th>
              <th>Products</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {orders
              .filter((o) => o.status !== "completed")
              .map((o) => (
                <tr key={o._id}>

                  <td style={{ fontSize: 12 }}>
                    {o._id}
                  </td>

                  <td>
                    <span
                      className={`dashboard-status ${o.status}`}
                    >
                      {o.status}
                    </span>
                  </td>

                  <td>
                    <div className="fw-bold">
                      {o.delivery?.fullName}
                    </div>

                    <div className="text-muted small">
                      {o.delivery?.phone}
                    </div>
                  </td>

                  <td style={{ fontSize: 13 }}>
                    {(o.items || []).map((i, idx) => (
                      <div key={idx}>
                        {i.nameSnapshot} × {i.quantity}
                      </div>
                    ))}
                  </td>

                  <td className="fw-bold">
                    {o.income}
                  </td>

                  <td className="d-flex gap-2 flex-wrap">

                    <button
                      className="btn btn-success btn-sm dashboard-action-btn"
                      disabled={o.status === "completed"}
                      onClick={() =>
                        setOrderStatus(o._id, "completed")
                      }
                    >
                      Complete
                    </button>

                    <button
                      className="btn btn-danger btn-sm dashboard-action-btn"
                      disabled={o.status === "declined"}
                      onClick={() =>
                        setOrderStatus(o._id, "declined")
                      }
                    >
                      Decline
                    </button>

                  </td>
                </tr>
              ))}

            {orders.filter(
              (o) => o.status !== "completed"
            ).length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-5 text-muted"
                >
                  No Pending Orders
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    )}
  </div>

  {/* ================= PRODUCT FORM ================= */}
  <div className="mb-5">

    <h3 className="dashboard-section-title">
      Product Management
    </h3>

    <form
      onSubmit={submitProduct}
      className="dashboard-form-card mb-5"
    >

      <div className="row g-4">

        <div className="col-md-6">
          <label className="form-label">
            Product Name
          </label>

          <input
            className="form-control"
            value={productForm.name}
            onChange={(e) =>
              setProductForm((s) => ({
                ...s,
                name: e.target.value,
              }))
            }
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">
            Category
          </label>

          <input
            className="form-control"
            value={productForm.category}
            onChange={(e) =>
              setProductForm((s) => ({
                ...s,
                category: e.target.value,
              }))
            }
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">
            Price
          </label>

          <input
            type="number"
            className="form-control"
            value={productForm.price}
            onChange={(e) =>
              setProductForm((s) => ({
                ...s,
                price: e.target.value,
              }))
            }
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">
            Upload Image
          </label>

          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) =>
              setProductImageFile(
                e.target.files?.[0] || null
              )
            }
          />
        </div>

        <div className="col-md-12">
          <label className="form-label">
            Description
          </label>

          <textarea
            rows={4}
            className="form-control"
            value={productForm.description}
            onChange={(e) =>
              setProductForm((s) => ({
                ...s,
                description: e.target.value,
              }))
            }
          />
        </div>

        <div className="col-md-12">
          <label className="form-label">
            Reviews
          </label>

          <textarea
            rows={4}
            className="form-control"
            placeholder="One review per line"
            value={productForm.reviews}
            onChange={(e) =>
              setProductForm((s) => ({
                ...s,
                reviews: e.target.value,
              }))
            }
          />
        </div>

        <div className="col-md-6">
          <div className="form-check mt-3">

            <input
              className="form-check-input"
              type="checkbox"
              checked={productForm.outOfStock}
              onChange={(e) =>
                setProductForm((s) => ({
                  ...s,
                  outOfStock: e.target.checked,
                }))
              }
              id="outOfStock"
            />

            <label
              className="form-check-label"
              htmlFor="outOfStock"
            >
              Out Of Stock
            </label>

          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-end align-items-end gap-3">

          <button
            className="dashboard-btn-primary"
            type="submit"
          >
            {editingId
              ? "Update Product"
              : "Create Product"}
          </button>

          {editingId && (
            <button
              type="button"
              className="btn btn-outline-secondary dashboard-btn-outline"
              onClick={() => {
                setEditingId(null);

                setProductForm({
                  name: "",
                  category: "",
                  reviews: "",
                  description: "",
                  price: "",
                  outOfStock: false,
                });

                setProductImageFile(null);
              }}
            >
              Cancel
            </button>
          )}

        </div>

      </div>
    </form>

    {/* ================= PRODUCTS TABLE ================= */}

    <div className="dashboard-table-wrapper">
      <table className="table align-middle">

        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {products.map((p) => (
            <tr key={p._id}>

              <td>
                {p.imageUrl ? (
                  <img
                    src={`${import.meta.env.VITE_BACKEND_API_URL}${p.imageUrl}`}
                    alt={p.name}
                    className="dashboard-product-img"
                  />
                ) : (
                  <span className="text-muted">
                    No Image
                  </span>
                )}
              </td>

              <td className="fw-bold">
                {p.name}
              </td>

              <td>
                {p.category}
              </td>

              <td className="fw-bold">
                {p.price}
              </td>

              <td>
                {p.outOfStock ? (
                  <span className="dashboard-status declined">
                    Out Of Stock
                  </span>
                ) : (
                  <span className="dashboard-status completed">
                    In Stock
                  </span>
                )}
              </td>

              <td className="d-flex gap-2 flex-wrap">

                <button
                  className="btn btn-outline-primary dashboard-action-btn"
                  onClick={() => editProduct(p)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-outline-danger dashboard-action-btn"
                  onClick={() => deleteProduct(p._id)}
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

          {!products.length && (
            <tr>
              <td
                colSpan={6}
                className="text-center py-5 text-muted"
              >
                No Products Found
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>

  </div>
</div>
  );
}

export default Dashboard;
