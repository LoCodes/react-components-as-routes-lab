import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsItem = actors.map((actor, index) => <div key={index}>
    Name: {actor.name}
    Movies: {actor.movies.map(movie => <li>{movie}</li>)}
  </div>)
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actorsItem}
    </div>
  );
};

export default Actors;
