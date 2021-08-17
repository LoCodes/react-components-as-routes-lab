import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieItems = movies.map((movie, index) => <div key={index}>
    <h3>Name: {movie.title}</h3>
    Time: {movie.time}
    Genres: <ul>{movie.genres.map(genre => <li>{genre}</li>)} </ul>
  </div>)

  return (
    <div>
      <h1>Movies Page</h1>
        {/*{code here}*/}
        {movieItems}
    </div>
  );
};

export default Movies;
