import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorItems = directors.map((director, index) => <div key={index}>
  Name: {director.name}
  Movies: {director.movies.map(movie => <li>{movie}</li>)}
  </div>)
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directorItems}
    </div>
  );
}

export default Directors
