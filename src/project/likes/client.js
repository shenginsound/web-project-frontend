import axios from "axios";

const API_BASE = "http://localhost:4000/api";

const USERS_API = `${API_BASE}/users`;
const LIKES_API = `${API_BASE}/likes`;

export const findAllLikes = async () => {};
export const createUserLikesMovie = async (userId, imdbID) => {
  const response = await axios.post(`${USERS_API}/${userId}/likes/${imdbID}`);
  return response.data;
};
export const deleteUserLikesMovie = async (userId, imdbID) => {
  const response = await axios.delete(`${USERS_API}/${userId}/likes/${imdbID}`);
  return response.data;
};
export const findUsersThatLikeMovie = async (imdbID) => {
  const response = await axios.get(`${LIKES_API}/${imdbID}/users`);
  return response.data;
};
export const findMoviesThatUserLikes = async (userId) => {
  const response = await axios.get(`${USERS_API}/${userId}/likes`);
  return response.data;
};
export const hasUserLikedMovie = async (userId, imdbID) => {
  const response = await axios.get(`${USERS_API}/${userId}/likes/${imdbID}`);
  return response.data;
};
