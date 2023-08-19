import React, { useEffect, useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year/`);
    const json = await response.json();
    setMovies(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="p-5 flex flex-col gap-5 items-center">
      {movies.length < 1 ? (
        <div className="h-screen flex justify-center items-center">
          <h1 className="text-8xl font-primary font-black text-pink-500 ">loading...</h1>
        </div>
      ) : (
        movies.map((movie) => (
          <div
            className="flex flex-col gap-2 justify-center w-1/3 items-center border  bg-white rounded-3xl px-16 py-4 shadow-xl font-primary"
            key={movie.id}>
            <h1 className="font-black text-slate-900 text-xl">{movie.title}</h1>
            <p className="font-light text-slate-700 text-xl" dangerouslySetInnerHTML={{ __html: movie.summary }} />
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img className="object-cover w-full h-full" src={movie.medium_cover_image} loading="lazy" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Movie;
