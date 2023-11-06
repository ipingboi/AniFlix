import { Link } from 'react-router-dom';

export const Card = ({ anime }) => {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/anime/${anime.mal_id}`}>
        <img
          className="rounded-t-lg"
          src={anime.images.jpg.image_url}
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link to={`/anime/${anime.mal_id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {anime.data?.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {anime.data?.synopsis}
        </p>
      </div>
    </div>
  );
};