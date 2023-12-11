import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import * as userClient from "./client";
import * as likesClient from "../likes/client";
import * as client from "../client";

function Account() {
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState(null);
  const [titles, setTitles] = useState([]);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const user = await userClient.account();
      setUser(user);
      const likes = await likesClient.findMoviesThatUserLikes(user._id);
      setLikes(likes);
      const titlesArray = [];
      for (let i = 0; i < likes.length; i++) {
        const title = await client.findMovieById(likes[i].imdbID);
        titlesArray.push(title);
      }
      setTitles(titlesArray);
    } catch (error) {
      navigate("/project/signin");
    }
  };

  const signout = async () => {
    const status = await userClient.signout();
    navigate("/project/signin");
  };

  const deleteLike = async (userId, imdbID) => {
    await likesClient.deleteUserLikesMovie(userId, imdbID);
    const _likes = await likesClient.findUsersThatLikeMovie(imdbID);
    const _titles = await client.findMovieById(imdbID);
    setTitles(_titles);
    setLikes(_likes);
  };

  const formatDate = (dob) => {
    const parsedDate = new Date(dob);
    const formattedDate = `${parsedDate.getFullYear()}-${String(
      parsedDate.getMonth() + 1
    ).padStart(2, "0")}-${String(parsedDate.getDate()).padStart(2, "0")}`;
    return formattedDate;
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="w-50 ms-5">
      <h1>Account</h1>
      {user && (
        <div>
          <div className="d-flex align-items-center mb-2">
            <FaUserEdit size={100} className="me-2" />

            <p className="mb-0">
              {user.firstName} {user.lastName} {user._id}
            </p>
          </div>
          <p className="mb-2">Date of Birth: {formatDate(user.dob)}</p>
          <p className="mb-2">Email: {user.email}</p>
          <p className="mb-2">Role: {user.role}</p>
          <h4>The Movies You Likes: </h4>
          <ul className="list-group">
            {titles &&
              titles.length > 0 &&
              titles.map((title, index) => (
                <li key={index} className="list-group-item">
                  <Link to={`/project/searchMovieDetails/${title.imdbID}`}>
                    <strong>{title.Title}</strong>
                  </Link>
                  <button
                    onClick={() => deleteLike(user._id, title.imdbID)}
                    className="btn btn-danger float-end"
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
          <Link to="/project/user/edit" className="btn btn-primary w-50 mb-2">
            Edit
          </Link>
          {user.role === "ADMIN" && (
            <Link
              to="/project/admin/users"
              className="btn btn-warning w-100 mb-3"
            >
              Manage Users
            </Link>
          )}
          <button onClick={signout} className="btn btn-danger w-50 mb-2 me-2">
            Signout
          </button>
        </div>
      )}
    </div>
  );
}
export default Account;
