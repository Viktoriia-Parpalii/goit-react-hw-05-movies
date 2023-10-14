import { Navigate, Route, Routes } from 'react-router-dom';
import StyledContainer from './Container/Container.styled';
import Header from './Header/Header';
import { Suspense, lazy } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Suspense
          fallback={
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </StyledContainer>
    </>
  );
};
