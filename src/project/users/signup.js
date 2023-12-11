import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import background from "../img/sign_bg.jpeg"; 
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

          <div style={{ 
            backgroundImage: `url(${background})`,         
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
            ,position: 'relative'
            } } >
    <div className="bg-light container rounded d-flex flex-column  w-25 position-absolute top-50 start-50 translate-middle border border-light">
      
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
      <button onClick={signup} className="mx-auto mt-3 btn btn-primary w-100">
        Signup
      </button>
      </div>

      </div>

    </div>
            </div>
  );
}
export default Signup;
