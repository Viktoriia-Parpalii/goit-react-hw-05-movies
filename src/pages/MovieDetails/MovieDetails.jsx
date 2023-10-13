import Cast from 'components/Cast/Cast';
import MovieCard from 'components/MovieCard/MovieCard';
import Reviews from 'components/Reviews/Reviews';
import React, { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getMovieById } from 'services/getMovies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log(movieId);
    const getmovie = async () => {
      try {
        if (!movieId) return;
        setLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getmovie();
  }, [movieId]);

  return (
    <>
      {/* <NavLink to="/">Go Back</NavLink> */}
      {loading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}

      <MovieCard movie={movie} />
      <ul>
        Additional information
        <li>
          <NavLink to="cast">Casts</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default MovieDetails;
