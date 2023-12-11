import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/user");
  };
  return (
    // <div>

    //   <h1>Signin</h1>
    //   <input
    //     className="me-2"
    //     value={credentials.username}
    //     onChange={(e) =>
    //       setCredentials({ ...credentials, username: e.target.value })
    //     }
    //   />
    //   <input
    //     className="me-2"
    //     type="password"
    //     value={credentials.password}
    //     onChange={(e) =>
    //       setCredentials({ ...credentials, password: e.target.value })
    //     }
    //   />
    //   <button className="btn btn-primary me-2" onClick={signin}>
    //     {" "}
    //     Signin{" "}
    //   </button>
      
    // </div>
    <div className="container rounded d-flex flex-column  w-25 position-absolute top-50 start-50 translate-middle border border-dark">
      
    <h1 class="mt-3 mx-auto">Signin</h1>

    <div className="form-group mx-auto">
    <label for="username" className="mw-md col-sm-2 col-form-label">Username</label>
    <input
      id = "username"
      value={credentials.username}
      onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      placeholder="username"
      className="form-control mb-2"
    />
    </div>
    <div className="form-group mx-auto">
    <label for="password" className="col-sm-2 col-form-label">Password</label>
    <input
      id = "password"
      value={credentials.password}
      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      type="password"
      placeholder="password"
      className="form-control mb-2"
    />
    <div class="mx-auto mb-3">
    <button onClick={signin} className="mx-auto mt-3 btn btn-primary w-50">
      Signin
    </button>
    </div>

    </div>

  </div>
    
  );
  
}




export default Signin;
