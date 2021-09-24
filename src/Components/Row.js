import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

const BASE_URL = "https:/image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow, className }) => {
  const classList = className + " row__poster";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [] Run once when the row loads and not run it again
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      //   console.log(response.data.results);
      setMovies(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies.map((item) => item.original_name));

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            className={classList}
            key={movie.id}
            src={`${BASE_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
