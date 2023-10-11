import React from 'react';
import { Link } from 'react-router-dom';

const HomeList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.title ? movie.title : movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HomeList;