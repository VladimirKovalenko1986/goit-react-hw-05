import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWExN2Q3MWQzNTAwNzE3Y2EyN2Q2YmQyOTIxNTkwZSIsInN1YiI6IjY0YmQwZmFmYWM2Yzc5MDhkZTVmN2YzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VC2MsN7ExHveRmeoqTrt5NtUQuxLm3x9qkjt-CjxRZI",
  },
};

const fetchTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const responce = await axios.get(url, options);
  return responce.data;
};

const fetchMoviesDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const responce = await axios.get(url, options);
  return responce.data;
};

const fetchMovieCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const responce = await axios.get(url, options);
  return responce.data;
};

const fetchMovieReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  const responce = await axios.get(url, options);
  return responce.data;
};

const fetchMovieSearch = async (serchQuery) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${serchQuery}&include_adult=false&language=en-US&page=1`;
  const responce = await axios.get(url, options);
  return responce.data;
};

export {
  fetchTrendingMovies,
  fetchMoviesDetails,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMovieSearch,
};
