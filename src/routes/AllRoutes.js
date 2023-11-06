import { Routes, Route } from 'react-router-dom';
import { Details, Home, Search, Genres, TopAnime, UpcomingSeason } from '../pages';

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
      <Route
        path="top/anime"
        element={<TopAnime />}
      />
      <Route
        path="seasons/upcoming"
        element={<UpcomingSeason />}
      />
    </Routes>
  );
};
