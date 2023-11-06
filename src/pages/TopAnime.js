import { useFetchTopAnime } from '../hooks/useFetchTopAnime';
import { Card } from '../components';

export const TopAnime = () => {
  const { data: animes } = useFetchTopAnime();

  return (
    <div className="container">
      <h4 className="pt-4 pb-4 blue-color">Results for Top Animes</h4>

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