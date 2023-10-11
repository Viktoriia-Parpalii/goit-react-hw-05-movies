import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Header from './Header/Header';
import Movies from 'pages/Movies';
export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movies />} />
      </Routes>
    </>
  );
};
