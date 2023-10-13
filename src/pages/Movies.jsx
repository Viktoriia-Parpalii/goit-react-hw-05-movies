// import React, { useEffect, useState } from 'react';
// import { NavLink, useParams } from 'react-router-dom';
// import { getMovieById } from 'services/getMovies';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { RotatingLines } from 'react-loader-spinner';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';

// import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   // console.log(movieId);
  //   const getmovie = async () => {
  //     try {
  //       if (!movieId) return;
  //       setLoading(true);
  //       const data = await getMovieById(movieId);
  //       setMovie(data);
  //     } catch (error) {
  //       toast.error(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getmovie();
  // }, [movieId]);
  const handleOnSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.searchMovieByName.value;
    console.log('searchQuery: ', searchQuery);
    e.currentTarget.reset();
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label>
          <p>Search movie by name</p>
          <input type="text" name="searchMovieByName" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Movies;
