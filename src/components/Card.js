import { Link } from 'react-router-dom';

export const Card = ({ anime }) => {
  const image = anime.images?.jpg?.image_url;

  return (
    <div
      className="card"
      style={{ width: '18rem' }}
    >
      <Link to={`/anime/${anime.mal_id}`}>
        <img
          className="card-img-top"
          src={image}
          alt="Card image cap"
        />
      </Link>
      <div className="card-body text-center">
        <p className="card-text">
          <h4>{anime.title}</h4>
          <i className="bi bi-star-fill"></i>
          <span> {anime.score} / 10</span>
        </p>
      </div>
    </div>
  );
};
