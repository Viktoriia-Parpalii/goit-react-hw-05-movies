import HomeList from 'components/HomeListItem/HomeList';
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getMoviesbyQuery } from 'services/getMovies';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');

  useEffect(() => {
    const getmovie = async () => {
      try {
        if (!query) return;
        setLoading(true);
        const data = await getMoviesbyQuery(query);
        setMovies(data.results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getmovie();
  }, [query]);

  const handleOnSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.searchMovieByName.value;
    setSearchParams({ query: searchQuery });
    e.currentTarget.reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <label>
          <p>Search movie by name</p>
          <input className="input" type="text" name="searchMovieByName" />
        </label>
        <button className="btnSubmit">Submit</button>
      </form>
      {loading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      {movies.length > 0 && <HomeList movies={movies} />}
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
    </>
  );
};

export default Movies;
