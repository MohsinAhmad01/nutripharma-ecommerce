import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleLogin = async (e) => {
  e.preventDefault();

  try {await axios.post(
  `${import.meta.env.VITE_BACKEND_API_URL}/api/auth/login`,
  {
    email,
    password,
  },
  {
    withCredentials: true,
  }
);

window.location.href = "/dashboard";
  } catch (error) {
    toast.error("Invalid Credentials");
  }
};
  return (
    <div className="container mt-5">
      <div
        className="card p-4 mx-auto shadow"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">
          Admin Login
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-dark w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;