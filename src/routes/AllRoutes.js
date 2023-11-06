import { Routes, Route } from 'react-router-dom';
import { Details, Home, Search, Genres } from '../pages';

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
        path="anime"
        element={<Search />}
      />
      <Route
        path="anime?genres"
        element={<Genres />}
      />
    </Routes>
  );
};
