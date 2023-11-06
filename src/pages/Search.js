import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components';

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const { data: animes } = useFetch(apiPath, queryTerm);
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {animes.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>

      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {animes.map((anime) => (
            <Card
              key={anime.id}
              anime={anime}
            />
          ))}
        </div>
      </section>
    </main>
  );
};