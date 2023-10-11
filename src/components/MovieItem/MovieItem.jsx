import React from 'react';
import { NavLink } from 'react-router-dom';

const defaultImg =
  '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

const MovieItem = ({ movie }) => {
  const {
    title,
    name,
    poster_path,
    overview,
    genres,
    popularity,
    // vote_average,
  } = movie;
  return (
    <>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <h1>{title ? title : name}</h1>
      <p>Popularity: {popularity}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      {genres && (
        <ul>
          Genres
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      )}
      <ul>
        Additional information
        <li>
          <NavLink>Casts</NavLink>
        </li>
        <li>
          <NavLink>Reviews</NavLink>
        </li>
      </ul>
    </>
  );
};

export default MovieItem;
