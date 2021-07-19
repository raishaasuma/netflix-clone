import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

// for row_poster IMAGES
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // TODO: pull info from API when Row loads
  // useEffect does something when the component loads, changes when movies (the dependency) changes
  // 'async' allows the request to be fulfilled by API before trying to load in the data
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      //console.log(request.data.results[0].original_title);
      // request.data.results[0].name gets the name of the movie/show
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // fetchURL is a variable being pulled from outside of useEffect so it must be declared as a DEPENDENCY
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
