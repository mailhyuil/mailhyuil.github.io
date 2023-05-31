import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year/`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="Movie">
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <h1 className="text-8xl font-primary font-black text-pink-500 ">loading...</h1>
        </div>
      ) : (
        <div>
          {movies.map((movie) => (
            <div className="flex flex-col justify-center items-center mt-10  bg-white rounded px-16 py-4 shadow-xl font-primary" key={movie.id}>
              <h1 className="font-black text-slate-900 text-3xl mb-5">
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              </h1>
              <p className="font-light text-slate-700 text-xl mb-5" dangerouslySetInnerHTML={{ __html: movie.summary }} />
              <img className="shadow-xl" src={movie.medium_cover_image} loading="lazy" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movie;
