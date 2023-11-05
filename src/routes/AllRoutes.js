import { Routes, Route } from 'react-router-dom';
import { Details, Home, Search } from '../pages';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path=""
        element={<Home />}
      />
      <Route
        path="anime/:id"
        element={<Details />}
      />
      <Route
        path="anime/popular"
        element={<Home />}
      />
      <Route
        path="anime/top"
        element={<Home />}
      />
      <Route
        path="anime/upcoming"
        element={<Home />}
      />
      <Route
        path="search"
        element={<Search apiPath="search/anime" />}
      />
    </Routes>
  );
};
