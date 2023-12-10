import axios from "axios";

export const MOVIE_API = "https://www.omdbapi.com/";
export const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export const findMovie = async (searchTitle) => {
  const response = await axios.get(
    `${MOVIE_API}?t=${searchTitle}&apikey=${MOVIE_API_KEY}`
  );
  return response.data;
};

export const findMovieById = async (imdbID) => {
  const response = await axios.get(
    `${MOVIE_API}?i=${imdbID}&apikey=${MOVIE_API_KEY}`
  );
  return response.data;
};
