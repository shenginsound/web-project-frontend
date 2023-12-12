import axios from "axios";
const request = axios.create({
  withCredentials: true,
});
const API_BASE = process.env.REACT_APP_BASE_API_URL;

const USERS_API = `${API_BASE}/api/users`;
const LIKES_API = `${API_BASE}/api/likes`;

export const findAllLikes = async () => {};
export const createUserLikesMovie = async (userId, imdbID) => {
  const response = await request.post(`${USERS_API}/${userId}/likes/${imdbID}`);
  return response.data;
};
export const deleteUserLikesMovie = async (userId, imdbID) => {
  const response = await request.delete(`${USERS_API}/${userId}/likes/${imdbID}`);
  return response.data;
};
export const findUsersThatLikeMovie = async (imdbID) => {
  const response = await request.get(`${LIKES_API}/${imdbID}/users`);
  return response.data;
};
export const findMoviesThatUserLikes = async (userId) => {
  const response = await request.get(`${USERS_API}/${userId}/likes`);
  return response.data;
};
export const hasUserLikedMovie = async (userId, imdbID) => {
  const response = await request.get(`${USERS_API}/${userId}/likes/${imdbID}`);
  return response.data;
};
