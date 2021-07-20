import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // Randomizes the movie picked from the netflix originals
      const rand = Math.floor(Math.random() * request.data.results.length - 1);
      setMovie(request.data.results[rand]);
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
      return string?.length > n ? string.substr(0, n-1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        {/* buttons (2) */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">More info</button>
        </div>
        {/* description */}
        <h1 className="banner_description">{truncate(movie?.overview, 250)}</h1>
      </div>
      <div className="banner__fadeBottom"> </div>
    </header>
  );
}

export default Banner;
