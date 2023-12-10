import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as client from "./client";
import "./poster.css";
import * as userClient from "./users/client";
import * as likesClient from "./likes/client";
import { Link } from "react-router-dom";

function SearchMovieDetails() {
  const [currentUser, setCurrentUser] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const { imdbID } = useParams();
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  const fetchMovieDetails = async () => {
    const movieDetails = await client.findMovieById(imdbID);
    setMovieDetails(movieDetails);
  };
  const fetchUser = async () => {
    try {
      const user = await userClient.account();
      setCurrentUser(user);
      const hasLiked = await likesClient.hasUserLikedMovie(user._id, imdbID);
      setHasLiked(hasLiked);
    } catch (error) {
      setCurrentUser(null);
    }
  };
  const fetchLikes = async () => {
    const likes = await likesClient.findUsersThatLikeMovie(imdbID);
    setLikes(likes);
  };

  const currenUserLikesMovie = async () => {
    const _likes = await likesClient.createUserLikesMovie(
      currentUser._id,
      imdbID
    );
    setLikes([_likes, ...likes]);
    setHasLiked(true);
  };

  const deleteLike = async () => {
    await likesClient.deleteUserLikesMovie(currentUser._id, imdbID);
    const _likes = await likesClient.findUsersThatLikeMovie(imdbID);
    setLikes(_likes);
    setHasLiked(false);
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchUser();
    fetchLikes();
  }, []);

  return (
    <div>
      {movieDetails && (
        <div>
          {currentUser && (
            <>
              {!hasLiked && (
                <button
                  onClick={currenUserLikesMovie}
                  className="btn btn-warning float-end"
                >
                  Like
                </button>
              )}
              {hasLiked && (
                <button
                  onClick={deleteLike}
                  className="btn btn-danger float-end"
                >
                  Unlike
                </button>
              )}
            </>
          )}
          <h1>{movieDetails.Title}</h1>
          <ul className="list-group w-75">
            {movieDetails && (
              <oi className="list-group-item">
                {movieDetails && (
                  <div className="row">
                    <img
                      src={movieDetails.Poster}
                      alt={movieDetails.Title}
                      className="poster-img col-7"
                    />
                    <div className="col-5">
                      Year : {movieDetails.Year}
                      <br></br>
                      Rated : {movieDetails.Rated}
                      <br></br>
                      Realeased : {movieDetails.Released}
                      <br></br>
                      Runtime : {movieDetails.Runtime}
                      <br></br>
                      Genre : {movieDetails.Genre}
                      <br></br>
                      Actors : {movieDetails.Actors}
                      <br></br>
                      Director : {movieDetails.Director}
                      <br></br>
                      Writer : {movieDetails.Writer}
                      <br></br>
                      Writer : {movieDetails.Writer}
                      <br></br>
                      Plot : {movieDetails.Plot}
                      <br></br>
                      Language : {movieDetails.Language}
                      <br></br>
                      Country : {movieDetails.Country}
                      <br></br>
                      Awards : {movieDetails.Awards}
                    </div>
                  </div>
                )}
              </oi>
            )}
            <h2>Likes</h2>
            <ul className="list-group">
              {hasLiked && currentUser && (
                <li className="list-group-item">
                  {currentUser.firstName} {currentUser.lastName}
                  <Link to={`/project/users/${currentUser._id}`}>
                    @{currentUser.username}
                  </Link>
                </li>
              )}
              {!hasLiked &&
                likes &&
                likes.map((like, index) => (
                  <li key={index} className="list-group-item">
                    {like.user.firstName} {like.user.lastName}
                    <Link to={`/project/users/${like.user._id}`}>
                      @{like.user.username}
                    </Link>
                  </li>
                ))}
            </ul>
            <oi>
              <ul className="list-group-item">
                {" "}
                <h4>Movie Rating :</h4>
                {movieDetails &&
                  movieDetails.Ratings.map((rating, index) => (
                    <li key={index} className="list-group-item">
                      <h5>
                        {index + 1}. {rating.Source} : {rating.Value}
                      </h5>
                    </li>
                  ))}
              </ul>
            </oi>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchMovieDetails;
