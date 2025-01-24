import React, { useEffect, useState } from "react";
import axios from "../services/api";
import requests from "../utils/requests";
import "../styles/Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ];
      setMovie(randomMovie);
    };
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{movie?.overview}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
