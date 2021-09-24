import { useState, useEffect } from "react";
import requests from "../requests";
import axios from "../axios";
import "./Banner.css";

const BASE_URL = "https:/image.tmdb.org/t/p/original";
const Banner = ({}) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    // if [] Run once when the row loads and not run it again
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${BASE_URL}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">{movie?.overview}</div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
