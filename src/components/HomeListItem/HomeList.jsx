import React from 'react';
import { Link } from 'react-router-dom';

const defaultImg =
  '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

const HomeList = ({ movies }) => {
  return (
    <ul className="movieLinkList">
      {movies.map(movie => (
        <Link className="movieLink" key={movie.id} to={`/movies/${movie.id}`}>
          <li className="movieItem">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              width={130}
              alt="poster"
            />
            <p>{movie.title ? movie.title : movie.name}</p>
          </li>{' '}
        </Link>
      ))}
    </ul>
  );
};

export default HomeList;
