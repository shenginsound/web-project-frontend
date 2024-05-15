import * as client from "./client.js";
import React, { useState, useEffect } from "react";
import "./poster.css";
import "./search.css";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchMovie() {
  const { search } = useParams();
  const [results, setResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState(search);
  const navigate = useNavigate();

  const fetchMovie = async (search) => {
    const results = await client.findMovie(search);
    setResults(results);
    setSearchTerm(search);
  };

  useEffect(() => {
    if (search) {
      fetchMovie(search);
    }
  }, [search]);

  return (
    <div>
      <h2 style={{ color: "gray" }}>Search the Movie </h2>

      <div className="out-container">
      <input
        type="text"
        placeholder="Please type the Movie Title you want to search"
        style = {{ width: "300px" }}
        className="form-control w-60"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <button
        onClick={() => navigate(`/project/search/${searchTerm}`)}
        className="btn btn-primary ms-3"
      >
        Search
      </button>
      </div>
      <br></br>


      {results &&
        (<h4 >The general information of the Movie</h4>)
      }
      
      <ul className="list-group w-60 list-color">
        {results && (
          <oi className="list-group-item list-color">
            <Link to={`/project/searchMovieDetails/${results.imdbID}`}>
              {results.Title}
            </Link>{" "}
          </oi>
        )}
        <div className="out-container">
        {results && (
          <img
            src={results.Poster}
            alt={results.Title}
            className="poster-img"
          />
        )}
        <>
        <ul className="list-group w-60 list-color">
        {results && <oi className="list-group-item list-color"> The Year the movie comes out: {results.Year}</oi>}
        {results && (
          <oi className="list-group-item list-color"> The Rated to the movie : {results.Rated}</oi>
        )}
        {results && (
          <oi className="list-group-item list-color"> The Realeased Date: {results.Released}</oi>
        )}
        {results && (
          <oi className="list-group-item list-color"> How long the Runtime is : {results.Runtime}</oi>
        )}
        {results && (
          <oi className="list-group-item list-color"> The Genre of the movie: {results.Genre}</oi>
        )}
        </ul>
        </>
        
        </div>
        

        
      </ul>
    </div>
  );
}
export default SearchMovie;
