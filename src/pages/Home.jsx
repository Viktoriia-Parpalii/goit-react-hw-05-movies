import HomeList from 'components/HomeListItem/HomeList';
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { getAllMovies } from 'services/getMovies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getAllMovies();
        setMovies(results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    allMovies();
  }, []);

  return (
    <>
      <h1 className="title">Trending today</h1>
      {loading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      <HomeList movies={movies} />
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

export default Home;
