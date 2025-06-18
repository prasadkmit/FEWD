import React, { useState, useContext } from "react";
import { UserContext } from "./UserProvider";


export default function Login() {
  const { user, login, logout } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  if (user) {
    return (
      <div className="container mt-5">
        <div className="alert alert-success text-center">
          <h4>Welcome, {user}!</h4>
          <button onClick={logout} className="btn btn-danger mt-3">
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h4 className="card-title mb-4 text-center">Login</h4>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}