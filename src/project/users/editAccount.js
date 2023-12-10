import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
function EditAccount() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input
            className="form-control mb-2"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            className="form-control mb-2"
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            className="form-control mb-2"
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            type="date"
            className="form-control mb-2"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            type="email"
            className="form-control mb-2"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            className="form-control mb-2"
            value={account.role}
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save} className="btn btn-primary w-100 mb-2">
            Save
          </button>
          <Link to="/project/user" className="btn btn-danger w-100 mb-2">
            Back
          </Link>
        </div>
      )}
    </div>
  );
}
export default EditAccount;
