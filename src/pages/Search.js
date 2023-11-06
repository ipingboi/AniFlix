import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components';
import { Link } from 'react-router-dom';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const { data: animes } = useFetch(queryTerm);

  return (
    <div className="search-page">
      <section>
        <h4>
          {animes.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </h4>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {animes.map((anime) => (
                <Card
                  key={anime.mal_id}
                  anime={anime}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
