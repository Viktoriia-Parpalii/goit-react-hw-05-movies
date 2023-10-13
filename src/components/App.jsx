import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Header from './Header/Header';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import StyledContainer from './Container/Container';
export const App = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </StyledContainer>
    </>
  );
};
