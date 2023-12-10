import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as userClient from "./client";
import * as likesClient from "../likes/client";
import { useEffect, useState } from "react";
import * as client from "../client";
import { FaUser, FaEnvelope, FaBirthdayCake, FaFilm } from "react-icons/fa";

function UserDetails() {
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState([]);
  const [titles, setTitles] = useState([]);
  // const [currentUser, setCurrentUser] = useState(null); //
  //const { currentUser } = useSelector((state) => state.userReducer);
  const { id } = useParams();
  const fetchLikes = async () => {
    const likes = await likesClient.findMoviesThatUserLikes(id);
    setLikes(likes);
    const titlesArray = [];
    for (let i = 0; i < likes.length; i++) {
      const title = await client.findMovieById(likes[i].imdbID);
      titlesArray.push(title);
    }
    setTitles(titlesArray);
  };
  const navigate = useNavigate();
  const fetchUser = async () => {
    const user = await userClient.findUserById(id);
    setUser(user);
  };

  useEffect(() => {
    fetchUser();
    fetchLikes();
  }, [id]);
  return (
    <div>
      <h2>User Details</h2>
      {user && (
        <div>
          <p>
            <FaUser /> Username: {user.username}
          </p>
          <p>
            <FaEnvelope /> Email: {user.email}
          </p>
          <p>
            <FaFilm /> Name: {user.firstName}
            {user.lastName}
          </p>
          <p>
            <FaBirthdayCake /> Birthday: {user.dob}
          </p>
          <h3>Likes</h3>
          <ul className="list-group">
            {titles.map((title, index) => (
              <li key={index} className="list-group-item">
                <Link to={`/project/searchMovieDetails/${title.imdbID}`}>
                  <strong>{title.Title}</strong>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
