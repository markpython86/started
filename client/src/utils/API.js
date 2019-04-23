import axios from "axios";

export default {
  // Gets all movies
  getMovies: function() {
    return axios.get("/api/movies");
  },
  // Gets the movie with the given id
  getMovie: function(id) {
    return axios.get("/api/movies/" + id);
  },
  findMovies: function(searched){
    return axios.get('/api/movies/search/'+ searched)
  },
  // Deletes the movie with the given id
  deleteMovie: function(id) {
    return axios.delete("/api/movies/" + id);
  },
  // Saves a movie to the database
  saveMovie: function(movieData) {
    return axios.post("/api/movies", movieData);
  },
  // Update a movie to the database
  updateMovie: function(id, movieData) {
    return axios.put("/api/movies/"+id, movieData);
  }
};
