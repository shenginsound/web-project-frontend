import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/project/user");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="container rounded d-flex flex-column  w-25 position-absolute top-50 start-50 translate-middle border border-dark">
      
      <h1 class="mt-3 mx-auto">Signup</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group mx-auto">
      <label for="username" className="mw-md col-sm-2 col-form-label">Username</label>
      <input
        id = "username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="form-control mb-2"
      />
      </div>
      <div className="form-group mx-auto">
      <label for="password" className="col-sm-2 col-form-label">Password</label>
      <input
        id = "password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        placeholder="password"
        className="form-control mb-2"
      />
      <div class="mx-auto mb-3">
      <button onClick={signup} className="mx-auto mt-3 btn btn-primary w-50">
        Signup
      </button>
      </div>

      </div>

    </div>
  );
}
export default Signup;
