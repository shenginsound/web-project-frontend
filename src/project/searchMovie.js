import * as client from "./client.js";
import React, { useState, useEffect } from "react";
import "./poster.css";
import "../style.css";
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
      <h1 style={{ color: "gray" }}>SearchMovie</h1>
      <button
        onClick={() => navigate(`/project/search/${searchTerm}`)}
        className="btn btn-primary ms-3"
      >
        Search
      </button>

      <input
        type="text"
        placeholder="Please type the Movie Title you want to search"
        className="form-control w-60"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <h2 >Results</h2>
      <ul className="list-group w-60">
        {results && (
          <oi className="list-group-item">
            <Link to={`/project/searchMovieDetails/${results.imdbID}`}>
              {results.Title}
            </Link>{" "}
          </oi>
        )}
        {results && (
          <img
            src={results.Poster}
            alt={results.Title}
            className="poster-img"
          />
        )}

        {results && <oi className="list-group-item"> Year : {results.Year}</oi>}
        {results && (
          <oi className="list-group-item"> Rated : {results.Rated}</oi>
        )}
        {results && (
          <oi className="list-group-item"> Realeased : {results.Released}</oi>
        )}
        {results && (
          <oi className="list-group-item"> Runtime : {results.Runtime}</oi>
        )}
        {results && (
          <oi className="list-group-item"> Genre : {results.Genre}</oi>
        )}
      </ul>
    </div>
  );
}
export default SearchMovie;
