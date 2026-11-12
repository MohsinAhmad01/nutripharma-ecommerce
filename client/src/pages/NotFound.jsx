import React from "react";
import { useNavigate } from "react-router-dom";
 
function NotFound() {
  const navigate = useNavigate();
 
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f0fbfd 0%, #e8f4f8 100%)",
        fontFamily: "'Segoe UI', sans-serif",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      {/* Big 404 */}
      <h1
        style={{
          fontSize: "clamp(80px, 20vw, 160px)",
          fontWeight: "900",
          color: "#4cb3c7",
          lineHeight: 1,
          margin: 0,
          opacity: 0.15,
          userSelect: "none",
        }}
      >
        404
      </h1>
 
      {/* Icon */}
      <div style={{ marginTop: "-30px", marginBottom: "20px" }}>
        <i
          className="bi bi-exclamation-circle"
          style={{ fontSize: "60px", color: "#4cb3c7" }}
        ></i>
      </div>
 
      {/* Message */}
      <h2 style={{ fontWeight: "700", color: "#1a1a2e", marginBottom: "10px" }}>
        Page Not Found
      </h2>
      <p style={{ color: "#666", maxWidth: "400px", lineHeight: "1.7" }}>
        The page you're looking for doesn't exist or has been moved. Please
        check the URL or go back to the homepage.
      </p>
 
      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px", marginTop: "30px", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "linear-gradient(135deg, #4cb3c7, #0d6efd)",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "14px 32px",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(76,179,199,0.35)",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          <i className="bi bi-house me-2"></i>Go to Homepage
        </button>
 
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "#fff",
            color: "#4cb3c7",
            border: "2px solid #4cb3c7",
            borderRadius: "50px",
            padding: "14px 32px",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 0.75)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}
        >
          <i className="bi bi-arrow-left me-2"></i>Go Back
        </button>
      </div>
    </div>
  );
}
 
export default NotFound;