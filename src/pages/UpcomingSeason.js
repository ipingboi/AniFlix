import { useFetchUpcomingSeason } from '../hooks/useFetchUpcomingSeason';
import { Card } from '../components';

export const UpcomingSeason = () => {
  const { data: animes } = useFetchUpcomingSeason();

  return (
    <div className="container">
      <h4 className="pt-4 pb-4 blue-color">Results for Upcoming Season</h4>

      <div className="row justify-content-evenly">
        {animes.map((anime) => (
          <Card
            key={anime.mal_id}
            anime={anime}
          />
        ))}
      </div>
    </div>
  );
};